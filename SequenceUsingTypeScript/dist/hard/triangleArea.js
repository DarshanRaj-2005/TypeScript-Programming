"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const a = parseFloat(readline_sync_1.default.question("Enter side a: "));
const b = parseFloat(readline_sync_1.default.question("Enter side b: "));
const c = parseFloat(readline_sync_1.default.question("Enter side c: "));
if (a + b > c && a + c > b && b + c > a) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(`The area of the triangle is: ${area}`);
}
else {
    console.log("Error: The given sides do not form a valid triangle.");
}
