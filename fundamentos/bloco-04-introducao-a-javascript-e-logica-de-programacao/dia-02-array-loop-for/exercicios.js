let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio - 1

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

// Exercicio - 2
let resultado = 0;
for (let index = 0; index < numbers.length; index++) {
  resultado += numbers[index];
}

console.log(resultado);

// Exercicio - 3

const media = resultado / numbers.length;
console.log(media);

//Exercicio - 4
media > 20
  ? console.log("Valor maior que 20")
  : console.log("Valor menor ou igual a 20");
