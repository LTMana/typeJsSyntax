"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const Email_1 = require("./Email");
class Teacher extends Person_1.default {
    constructor(name, surname, email, subjects) {
        super(name, surname, email);
        this.subjects = subjects;
    }
    greet() {
        super.greet();
        console.log('I teach' + this.subjects);
    }
    teach() {
        console.log('Welcome to class');
    }
}
exports.default = Teacher;
var teacher = new Teacher('remo', 'jansen', new Email_1.default('remo.jansen@wolksoftware.com'), ['math', 'physics']);
//# sourceMappingURL=Teacher.js.map