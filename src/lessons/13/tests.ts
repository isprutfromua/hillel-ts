// Test 1: Adding a task should notify the subscriber if assigneeId matches
import {
  EmailNotifier,
  SMSNotifier,
  Task,
  TaskBoard,
  TelegramNotifier,
  User,
} from './index.ts'

const telegramNotifier = new TelegramNotifier()
const smsNotifier = new SMSNotifier()
const emailNotifier = new EmailNotifier()

const user1 = new User('User1')
const taskBoard1 = new TaskBoard()
taskBoard1.addSubscriber(user1)
const task1 = new Task('Task 1', 'Description 1', user1.id)
taskBoard1.addTask(task1)
console.assert(user1.activeTask === task1, 'Test 1 failed')

// Test 2: Adding a task should not notify the subscriber if assigneeId does not match
const user2 = new User('User2')
const taskBoard2 = new TaskBoard()
taskBoard2.addSubscriber(user2)
const task2 = new Task('Task 2', 'Description 2', 'differentUserId')
taskBoard2.addTask(task2)
console.assert(user2.activeTask !== undefined, 'Test 2 failed')

// Test 3: Removing a subscriber should not notify them anymore
const user3 = new User('User3')
const taskBoard3 = new TaskBoard()
taskBoard3.addSubscriber(user3)
taskBoard3.removeSubscriber(user3)
const task3 = new Task('Task 3', 'Description 3', user3.id)
taskBoard3.addTask(task3)
console.assert(user3.activeTask === undefined, 'Test 3 failed')

// Test 4: Notifying subscribers should update the active task for multiple subscribers
const user4 = new User('User4')
const user5 = new User('User5')
const taskBoard4 = new TaskBoard()
taskBoard4.setNotificationStrategy(smsNotifier)
taskBoard4.addSubscriber(user4)
taskBoard4.addSubscriber(user5)
const task4 = new Task('Task 4', 'Description 4', user4.id)
taskBoard4.addTask(task4)
console.assert(
  user4.activeTask === task4 && user5.activeTask === undefined,
  'Test 4 failed',
)

// Test 5: Notifying subscribers should not affect other subscribers
const user6 = new User('User6')
const user7 = new User('User7')
const taskBoard5 = new TaskBoard()
taskBoard5.setNotificationStrategy(telegramNotifier)
taskBoard5.addSubscriber(user6)
const task5 = new Task('Task 5', 'Description 5', user6.id)
taskBoard5.addTask(task5)
taskBoard5.addTask(task5)
taskBoard5.setNotificationStrategy(emailNotifier)
taskBoard5.addTask(task4)
taskBoard5.setNotificationStrategy(smsNotifier)
taskBoard5.addTask(task3)
taskBoard5.addSubscriber(user7)
console.assert(
  user6.activeTask === task5 && user7.activeTask === undefined,
  'Test 5 failed',
)

// Test 6: Adding a subscriber should not notify them for existing tasks
const user8 = new User('User8')
const taskBoard6 = new TaskBoard()
const task6 = new Task('Task 6', 'Description 6', user8.id)
taskBoard6.addTask(task6)
taskBoard6.addSubscriber(user8)
console.assert(user8.activeTask === undefined, 'Test 6 failed')

// Test 7: Adding a task should notify subscribers for existing subscribers
const user9 = new User('User9')
const taskBoard7 = new TaskBoard()
taskBoard7.addSubscriber(user9)
const task7 = new Task('Task 7', 'Description 7', user9.id)
taskBoard7.addTask(task7)
console.assert(user9.activeTask === task7, 'Test 7 failed')

// Test 8: Notifying subscribers should not affect other task board instances
const user10 = new User('User10')
const taskBoard8 = new TaskBoard()
const task8 = new Task('Task 8', 'Description 8', user10.id)
taskBoard8.addTask(task8)
const taskBoard9 = new TaskBoard()
taskBoard9.addSubscriber(user10)
console.assert(user10.activeTask === undefined, 'Test 8 failed')

// Test 9: Adding a subscriber to multiple task boards should work independently
const user11 = new User('User11')
const taskBoard10 = new TaskBoard()
const taskBoard11 = new TaskBoard()
taskBoard10.addSubscriber(user11)
taskBoard11.addSubscriber(user11)
const task9 = new Task('Task 9', 'Description 9', user11.id)
taskBoard10.addTask(task9)
console.assert(user11.activeTask === task9, 'Test 9 failed')

// Test 10: Notifying subscribers should work independently for multiple task boards
const user12 = new User('User12')
const taskBoard12 = new TaskBoard()
const taskBoard13 = new TaskBoard()
taskBoard12.addSubscriber(user12)
taskBoard13.addSubscriber(user12)
const task10 = new Task('Task 10', 'Description 10', user12.id)
taskBoard12.addTask(task10)
console.assert(user12.activeTask === task10, 'Test 10 failed')
