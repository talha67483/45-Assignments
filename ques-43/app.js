var magician_name = [
    "Magician one",
    "Magician Two",
    "Magician Three",
    "Magician Four",
    "Magician Five",
];
function great_magician(magician_name) {
    var great = [];
    for (var _i = 0, magician_name_1 = magician_name; _i < magician_name_1.length; _i++) {
        var i = magician_name_1[_i];
        great.push("".concat(i, " is Great"));
    }
    // magician_name.forEach((val) => {
    //   great.push(`${val} is Great`);
    // });
    return great;
}
function show_magician(magician_name) {
    magician_name.forEach(function (each) {
        console.log(each);
    });
}
var great = great_magician(magician_name.slice());
console.log("this is original array");
show_magician(magician_name);
console.log("this is changedd array");
show_magician(great);
