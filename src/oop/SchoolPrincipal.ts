import Email from './Email'
import Teacher from './Teacher'

class SchoolPrincipal extends Teacher {
  manageTeachers () {
    console.log('We need to help students to get better results!')
  }
}

var principal = new SchoolPrincipal('remo', 'jansen', new Email('remo.jansen@wolksoftware.com'), ['math', 'physics'])
principal.greet()
principal.teach()
principal.manageTeachers()