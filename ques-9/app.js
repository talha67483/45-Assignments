// let Name = "Talha"
// let date = new Date()
// let program1 = ` Learning Typescript ${Name}  ${date}`
// let program2 = ` Learning Javascript ${Name}  ${date}`
// console.log(program1);
// console.log(program2);
function titleCase(str) {
    return str.charAt(0).toUpperCase() + str.charAt(1).toLowerCase() + str.toString();
}
console.log(titleCase("hello world"));
