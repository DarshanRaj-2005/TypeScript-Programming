"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const num1 = parseInt(readline_sync_1.default.question("Enter the first integer: "));
const num2 = parseInt(readline_sync_1.default.question("Enter the second integer: "));
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
