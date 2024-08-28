function car_manufacture(
    manufacture: string,
    model: string,
    ...option: [string, any][]
): any {
    let carInfo = {
        manufacture,
        model,
    };

    option.forEach(([key, val]) => {
        carInfo[key] = val;
    });

    return carInfo;
}

console.log(
    car_manufacture(
        "Tesla",
        "Tesla Model Plaid ",
        ["color", "white"],
        ["year", 2023],
       
    )
);
