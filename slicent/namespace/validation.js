var app;
(function (app) {
    var validation;
    (function (validation) {
        class UserValidation {
            constructor(name) {
                console.log('UserValidation');
            }
        }
        validation.UserValidation = UserValidation;
        class TalkValidation {
        }
        validation.TalkValidation = TalkValidation;
    })(validation = app.validation || (app.validation = {}));
})(app || (app = {}));
//# sourceMappingURL=validation.js.map