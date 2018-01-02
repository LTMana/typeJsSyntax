import Person from './Person'
import Email from './Email'
export default class Teacher extends Person {
  public subjects: string[]
  constructor (name: string, surname: string, email: Email, subjects: string[]) {
    super(name, surname, email)
    this.subjects = subjects
  }
  greet () {
    super.greet()
    console.log('I teach' + this.subjects)
  }
  teach () {
    console.log('Welcome to class')
  }
}

var teacher = new Teacher('remo', 'jansen', new Email('remo.jansen@wolksoftware.com'), ['math', 'physics'])