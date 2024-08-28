function car_manufacture(manufacture, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacture: manufacture,
        model: model,
    };
    option.forEach(function (_a) {
        var key = _a[0], val = _a[1];
        carInfo[key] = val;
    });
    return carInfo;
}
console.log(car_manufacture("Tesla", "Tesla Model Plaid ", ["color", "white"], ["year", 2023]));
