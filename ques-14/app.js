var guestList = ["Faraz", "Huzaifa", "Haroon"];
var invitedBy = "Talha Khan";
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], " you have invited for dinner by ").concat(invitedBy, " tonight and also bring your family!ok"));
}
// console.log("I am really sorry Haroon that you can't attend my dinner");
console.log(" i am really sorry ".concat(guestList[2], " that you can't attened my dinner"));
guestList[2] = "Sardar";
guestList.forEach(function (val) {
    console.log("".concat(val, " you are still invited by ").concat(invitedBy));
});
