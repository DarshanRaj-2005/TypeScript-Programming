"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const radius = parseFloat(readline_sync_1.default.question("Enter the radius: "));
const pi = 3.14159;
const area = pi * radius * radius;
console.log(`The area of the circle with radius ${radius} is: ${area}`);
