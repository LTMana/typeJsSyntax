"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Email {
    constructor(email) {
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error('Invalid email');
        }
    }
    validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    get() {
        return this.email;
    }
}
exports.default = Email;
//# sourceMappingURL=Email.js.map