var magician_name = ["Magician One", "Magician Two", "Magician Three", "Magician Four", "Magician Five"];
function great_magician(name) {
    name.forEach(function (each) {
        console.log("".concat(each, " is Great Magician"));
    });
}
great_magician(magician_name);
