"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Email_1 = require("./Email");
const Teacher_1 = require("./Teacher");
class SchoolPrincipal extends Teacher_1.default {
    manageTeachers() {
        console.log('We need to help students to get better results!');
    }
}
var principal = new SchoolPrincipal('remo', 'jansen', new Email_1.default('remo.jansen@wolksoftware.com'), ['math', 'physics']);
principal.greet();
principal.teach();
principal.manageTeachers();
//# sourceMappingURL=SchoolPrincipal.js.map