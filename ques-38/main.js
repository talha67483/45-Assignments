function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return ("".concat(city, " is in ").concat(country));
}
console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("Dubai", "UAE"));
