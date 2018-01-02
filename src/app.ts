/**
 * 方法重载
 * 
 * @param {number | string | boolean} a 
 */
function test (a : number) : void
function test (a : string) : void
function test (a : boolean) : void
function test(a: (number| string | boolean)): void {
  switch (typeof a) {
    case 'string':
       console.log('string');   
      break;
    case 'number': 
      console.log('number');
      break;
    case 'boolean':
      console.log('boolean');
      break;
    default:
      break;
  }
}
test(12)
test("sdf")
test(true)

// /**
//  * 特定重载签名(此处实现有些问题)
//  * 
//  * @interface Person
//  */
// interface PersonInterface {
//   eat(tagName: 'pig'): string
//   eat(tagName: 'dog'): number
//   eat(tagName: 'cat'): boolean
// }
// declare var Person: {
//   prototype: Person
//   new(): Person
// }
// class Person implements PersonInterface {
//   eat(tagName: string): (string | number| boolean) {
//     switch (tagName) {
//       case 'pig':
//         return 'dsfds'
//       case 'dog':
//         return 123
//       case 'cat':
//         return true
//       default:
//     }
//   }
// }
// const person = new Person()
// console.log('person:'+typeof person.eat('dog')) 

/**
 * 定义泛型
 */
interface Users {
  /**名字*/
  name: string,
  age: number
}
interface Orders {
  /**学号*/
  id: number,
  name: string,
  age: string,
  desc?: string
}
function getEntities<T>(url: string, cb: (list: T[]) => void): void {
}
getEntities<Users>('dfds', (users: Users[]) => {
})
getEntities<Orders>('erewrw', (orders: Orders[]) => {
})

