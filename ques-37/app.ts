function make_shirt(
  size: string = "Large",
  message: string = "I Love TypeScript"
) {
  return `the size of T-Shirt is,  ${size} ,
and the message is,  ${message} `;
}

console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("XL", "I love JavaScript"));
