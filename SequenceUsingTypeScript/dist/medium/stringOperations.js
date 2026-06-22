"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const input = readline_sync_1.default.question("Enter a string: ");
const totalChars = input.length;
const repeated = input + input;
const firstChar = input[0];
const firstThree = input.substring(0, 3);
console.log(totalChars);
console.log(repeated);
console.log(firstChar);
console.log(firstThree);
