var guestList = ["Faraz", "Huzaifa", "Haroon"];
var invitedBy = "Talha Khan";
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], " you have invited for dinner by ").concat(invitedBy, " tonight and also bring your family!ok"));
}
console.log("-------------------------------------------------------------------------------------------------------");
console.log(" I am really sorry ".concat(guestList[2], " that you can't attened my dinner"));
guestList[2] = "Sardar";
guestList.forEach(function (val) {
    console.log("".concat(val, " you are still invited by ").concat(invitedBy));
});
console.log(("-------------------------------------------------------------------------------------------------------"));
guestList.unshift("Yasir");
guestList.splice(2, 0, "Sheryar");
guestList.push("Asad");
guestList.forEach(function (val) {
    console.log("".concat(val, " you are invited by the ").concat(invitedBy, " for the dinner "));
});
console.log(" I can make large table for dinner so more guest i required ");
console.log(("-------------------------------------------------------------------------------------------------------"));
console.log("you can only invite only two people for dinner");
for (var i = 0; i <= 3; i++) {
    var lis = guestList.pop();
    console.log(" I am sorry you cant invite to dinner", lis);
}
console.log(("-------------------------------------------------------------------------------------------------------"));
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var i = guestList_1[_i];
    console.log("".concat(i, " you are still invited"));
}
console.log(("-------------------------------------------------------------------------------------------------------"));
guestList.pop();
guestList.pop();
console.log(guestList);
