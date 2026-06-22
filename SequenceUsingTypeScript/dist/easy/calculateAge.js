"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const birthdateInput = readline_sync_1.default.question("Enter your birthdate (YYYY-MM-DD): ");
const birthdate = new Date(birthdateInput);
const today = new Date();
let age = today.getFullYear() - birthdate.getFullYear();
const monthDiff = today.getMonth() - birthdate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
}
console.log(`Your age is: ${age} years`);
