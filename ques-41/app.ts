let magician_name: string[] = [
  "Magician one",
  "Magician Two",
  "Magician Three",
  "Magician Four",
  "Magician Five",
];

function show_magician(name: string[]) {
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
}
show_magician(magician_name);
