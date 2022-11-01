"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SayFuckU = exports.SayHello = void 0;
var react_1 = __importDefault(require("react"));
var SayHello = function (_a) {
    var name = _a.name;
    return (react_1.default.createElement("div", null,
        "Hey ",
        name,
        ", say hello to TypeScript."));
};
exports.SayHello = SayHello;
var SayFuckU = function (_a) {
    var name = _a.name;
    return (react_1.default.createElement("div", null,
        "Hey ",
        name,
        ",fuckk uu!."));
};
exports.SayFuckU = SayFuckU;
