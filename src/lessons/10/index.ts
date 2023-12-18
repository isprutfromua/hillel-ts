/*
 * Написати декоратор методу @Catch, який має перехоплювати помилки та
 * виводити повідомлення "Oops, there is an error in ${METHOD_NAME}: ${ERROR}".
 *
 * Наприклад
 * class UsersService {
 *   @Catch
 *   getUsers() {
 *     throw new Error("No users");
 *   }
 * }
 *
 * На виклику методу getUsers у консоль має вивестись повідомлення
 * "Oops, there is an error in getUsers: No users"
 * */
function logError(
  message: string | unknown,
  type?: string,
  method?: string,
): void {
  if (!type && !method) {
    console.error(message)
  } else {
    console.error(`Oops, there is ${type} error in ${method}:` + message)
  }
}

const Catch = <T, A extends unknown[], R>(
  originalMethod: (...args: unknown[]) => R,
  context: ClassMethodDecoratorContext<T, (...args: A) => R>,
) => {
  if (context.kind !== 'method')
    throw new Error(`Please use it for method only`)

  function catcher(this: T, ...args: A): R | void {
    try {
      return originalMethod.apply(this, args)
    } catch (e) {
      const methodName = String(context.name)
      if (e instanceof RangeError) {
        logError(e.message, 'range', methodName)
      } else if (typeof e === 'string') {
        logError(e, 'custom', methodName)
      } else {
        logError(e)
      }
    }
  }

  return catcher
}

class TestService {
  @Catch
  findSomeError() {
    throw `Dangerous error ⚠️`
  }

  @Catch
  getRandomError(): string | void {
    if (Math.random() * 1e4 > 5e3) {
      throw new RangeError(`Big number`)
    } else {
      return 'You are lucky. No errors happened'
    }
  }
}

const tester = new TestService()
console.log(tester.findSomeError())
console.log(tester.getRandomError())
