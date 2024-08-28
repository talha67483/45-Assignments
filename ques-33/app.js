var arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, arrOfNum_1 = arrOfNum; _i < arrOfNum_1.length; _i++) {
    var i = arrOfNum_1[_i];
    // console.log(`${i}th`);
    if (i === 1) {
        console.log("1st");
    }
    else if (i === 2) {
        console.log("2nd");
    }
    else if (i === 3) {
        console.log("3rd");
    }
    else {
        console.log("".concat(i, "th"));
    }
}
