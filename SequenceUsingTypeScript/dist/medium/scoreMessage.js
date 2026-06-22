"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const score = parseInt(readline_sync_1.default.question("Enter your game score: "));
const scoreString = score.toString();
console.log(`Your score is ${scoreString}.`);
