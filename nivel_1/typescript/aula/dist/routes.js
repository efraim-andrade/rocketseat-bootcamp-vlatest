"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
exports.helloWorld = function (request, response) {
    var user = CreateUser_1.default("Efraim", "efraim.dev@gmail.com", "123123q");
    return response.json({ message: "hello world", user: user });
};
