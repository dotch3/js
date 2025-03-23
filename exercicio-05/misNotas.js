// FOR loop

for (let i =0;  i < 5; i++) {
  // console.log(i);
  console.log(`Dentro do loop: ${i}`);
}

console.log('Loop conluido');

const names = ['jorge', 'karina', 'lorena', 'esdras'];
// Percorrer um array -> Iteração
for (let index = 0; index < names.length; index++) {
  const HTMLTemplate = `<p> ${names[index]} </p>`;
  console.log(HTMLTemplate);
}   

// WHILE Loop

let i =0;

while (i < 5) {
  console.log(`valor de i: ${i}`)
  i++
}
let index = 0
while (index < names.length) {
  console.log( names [index])
  index ++
}