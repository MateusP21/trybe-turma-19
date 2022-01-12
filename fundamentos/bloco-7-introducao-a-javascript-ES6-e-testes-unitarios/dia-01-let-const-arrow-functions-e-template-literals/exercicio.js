//EXERCICIO 1

//PARTE I
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

//PARTE I
const fatorial = (n) => {
  let total = 1;
  for (let i = 0; i < n; i++) {
    let atual = n - i;
    total *= atual;
  }
  console.log(total);
};

fatorial(4);

// PARTE 2

const longestWord = (frase) => {
  const arrayDePalavras = frase.split(" ");
  let maiorPalavra = 0;
  let palavraEscolhida = "";
  arrayDePalavras.forEach(
    (palavra) => palavra.length > maiorPalavra && (palavraEscolhida = palavra)
  );

  console.log(palavraEscolhida);
};

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");

//EXERCICIO 4
const skills = ["Javascript", "HTML", "CSS", "React", "Linux"];
const trocaDePalavra = (palavra) => {
  const stringDeterminada = "Tryber x aqui!".split(" ");

  for (let i = 0; i < stringDeterminada.length; i++) {
    stringDeterminada[i].toLowerCase() === "x" &&
      (stringDeterminada[i] = palavra);
  }

  return stringDeterminada.join(" ");
};

const concatenaSkills = (string) => {
  return `${string} Minhas cinco principais habilidades são: ${skills}`;
};

console.log(concatenaSkills(trocaDePalavra("bebeto")));
