// У нас є проста система керування задачами.
// Треба використовуючи патерн Спостерігач модифікувати код таким чином,
// щоб клас юзер міг реагував на додавання нової задачі на дошку.
// Якщо assigneeId та user id збігаються, то клас user має установлювати задачу у #activeTask.

// * Додаткове завдання:
// Використовуючи патерн стратегія, розширити логіку, додавши кілька
// різних провайдерів нотифікацій: емейл, телеграм, смс.
//
// Вибраний Провайдер також повинен реагувати на додавання задачі на
// дошку та виводитити інформацію про задачу та провайдер.
//
// Наприклад: "EMAIL: task MyTask added to board"

// observer pattern
interface ISubscriber<T = unknown> {
  update(value: T): void
}
interface ISubscribable<T extends ISubscriber> {
  addSubscriber(subscriber: T): void

  removeSubscriber(subscriber: T): void

  notifySubscribers(): void
}
// strategy pattern
interface INotifyProvider {
  notify(data: string): void
}
interface INotificationStrategy {
  setNotificationStrategy(provider: INotifyProvider): void
}

export class SMSNotifier implements INotifyProvider {
  notify(data: string) {
    console.log("You've got an SMS message: ", data)
  }
}
export class TelegramNotifier implements INotifyProvider {
  notify(data: string) {
    console.log("You've got an Telegram message: ", data)
  }
}
export class EmailNotifier implements INotifyProvider {
  notify(data: string) {
    console.log("You've got an email message: ", data)
  }
}
export class Task {
  constructor(
    public title: string,
    public description: string,
    public assigneeId: string,
  ) {}
}
export class TaskBoard implements ISubscribable<User>, INotificationStrategy {
  #tasks: Task[] = []
  #subscribers: Set<User> = new Set()
  // default provider, can be passed into constcutor, I guess
  #notificationProvider: INotifyProvider = new EmailNotifier()

  get tasks() {
    return this.#tasks
  }

  sendNotifications(task: Task) {
    const message = this.formatMessageForSubscribers(task)
    this.#notificationProvider.notify(message)
  }

  addTask(task: Task): void {
    this.#tasks.push(task)
    this.notifySubscribers()
    this.sendNotifications(task)
  }

  addSubscriber(user: User) {
    this.#subscribers.add(user)
  }

  removeSubscriber(user: User) {
    this.#subscribers.delete(user)
  }

  formatMessageForSubscribers(task: Task) {
    return `Task with ID: ${task.assigneeId} has been added to board. Enjoy 🙂`
  }

  notifySubscribers() {
    const lastTask = this.#tasks.at(-1)

    if (!lastTask) return

    this.#subscribers.forEach(subscriber => {
      if (subscriber.id === lastTask.assigneeId) {
        subscriber.update(lastTask)
      }
    })
  }

  setNotificationStrategy(provider: INotifyProvider = new EmailNotifier()) {
    this.#notificationProvider = provider
  }
}
export class User implements ISubscriber<Task> {
  #activeTask?: Task
  name: string
  readonly id: string

  constructor(name: string) {
    this.name = name
    this.id = 'id' + Math.random().toString(16).slice(2)
  }

  get activeTask(): Task | undefined {
    return this.#activeTask
  }

  update(task: Task) {
    this.#activeTask = task
  }
}
