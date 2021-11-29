let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio - 1

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

//Exercicio - 2;
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

//Exercicio - 5
let maiorValor = 0;
for (let index = 0; index < numbers.length; index++) {
  let currentNumber = numbers[index];
  if (currentNumber > maiorValor) {
    maiorValor = currentNumber;
  }
}

//Exercicio - 6
let quantidadeNumerosImpares = 0;
for (number of numbers) {
  number % 2 === 1 && quantidadeNumerosImpares++;
}
quantidadeNumerosImpares > 0
  ? console.log(quantidadeNumerosImpares)
  : console.log("nenhum valor ímpar encontrado");

//Exercicio - 7
let menorValor = numbers[0];
for (let index = 0; index < numbers.length; index++) {
  let currentNumber = numbers[index];
  if (currentNumber < menorValor) {
    menorValor = currentNumber;
  }
}

console.log(menorValor);
