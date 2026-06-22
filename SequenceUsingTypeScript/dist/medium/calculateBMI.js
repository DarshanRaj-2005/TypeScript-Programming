"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const weight = parseFloat(readline_sync_1.default.question("Enter your weight in kilograms: "));
const height = parseFloat(readline_sync_1.default.question("Enter your height in meters: "));
const bmi = weight / (height * height);
console.log(`BMI: ${bmi.toFixed(2)}`);
