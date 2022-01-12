const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
  //console.log(ifScope + " o que estou fazendo aqui ? :O"); // Se necessário esta linha pode ser removida.
};

testingScope(true);

// PARTE 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

// Seu código aqui.

console.log(
  `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
); // será necessário alterar essa linha 😉

//EXERCICIO 2

const fatorial = (n) => {
  let total = 1;
  for (let i = 0; i < n; i++) {
    let atual = n - i;
    total *= atual;
  }

  console.log(total);
};

fatorial(4);
