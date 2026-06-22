"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const radius = parseFloat(readline_sync_1.default.question("Enter the radius of the circle: "));
const angle = parseFloat(readline_sync_1.default.question("Enter the angle in degrees (for sector area): "));
const pi = Math.PI;
const diameter = 2 * radius;
const circumference = 2 * pi * radius;
const sectorArea = (angle / 360) * pi * radius * radius;
const arcLength = (angle / 360) * 2 * pi * radius;
console.log(`Radius: ${radius}`);
console.log(`Diameter: ${diameter}`);
console.log(`Circumference: ${circumference}`);
console.log(`Sector Area for ${angle} degrees: ${sectorArea}`);
console.log(`Arc Length for ${angle} degrees: ${arcLength}`);
