let magician_name: string[] = [
  "Magician one",
  "Magician Two",
  "Magician Three",
  "Magician Four",
  "Magician Five",
];

function great_magician(magician_name: string[]): string[] {
  let great: string[] = [];
  for(let i of magician_name){
      great.push(`${i} is Great`)

  }


  return great;
}

function show_magician(magician_name: string[]) {
  magician_name.forEach((each) => {
    console.log(each);
  });
}
let great = great_magician(magician_name.slice());

console.log("this is original array");
show_magician(magician_name);

console.log("this is changedd array");

show_magician(great);
