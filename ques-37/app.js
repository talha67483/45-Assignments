function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    return "the size of T-Shirt is,  ".concat(size, " ,\nand the message is,  ").concat(message, " ");
}
console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("XL", "I love JavaScript"));
