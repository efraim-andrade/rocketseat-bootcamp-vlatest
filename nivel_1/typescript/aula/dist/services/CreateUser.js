"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(name, email, password) {
    if (name === void 0) { name = ""; }
    var user = {
        name: name,
        email: email,
        password: password,
    };
    return user;
}
exports.default = createUser;
