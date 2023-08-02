"use strict";
//  (union) | helps  you to define more datatype to your variable
Object.defineProperty(exports, "__esModule", { value: true });
var score = 343;
score = "2fwef";
var Archit = { name: "archuit", email: "arhcir@ndjnae" };
Archit = { username: "arnvujw", id: "af23" };
// function getid(id:number|string){
//     console.log(`db id id ${id}`)
// // }
// getid(23)
// getid("23")
function getid(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
var data = [23, 2, 323, 23];
var data2 = ["23", "34", "23"];
// wrong WAy of defining 2 or more types in an arrya
var data3 = ["23", "34", "23"];
// right way
var data4 = ["23", "34", "23", 23, 2, 3, 23];
// strict type allocation
var seatallotment;
seatallotment = "upper";
