"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const rating = parseFloat(readline_sync_1.default.question("Enter the average movie rating: "));
const roundedRating = Math.round(rating);
console.log(`Rounded Rating: ${roundedRating}`);
