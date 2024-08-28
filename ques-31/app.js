"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ["Jira", "Eric", "Michael", "Donaldson", "David Hansan", "Admin"];
if (userNames.length === 0) {
    console.log("We need to find users!");
}
else {
    for (let i = 0; i < userNames.length; i++) {
        if (userNames[i] === "Admin") {
            console.log(`Hello ${userNames[i]} would you like to see a status report`);
        }
        else {
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
        }
    }
}
userNames = [];
if (userNames.includes("")) {
    console.log("we need to find some users! ");
}
