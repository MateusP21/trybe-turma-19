const newEmployees = (show) => {
  const employees = {
    id1: show('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: show('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: show('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const showEmploye = (personName) => {
  return {
    name: personName,
    email: `${personName}@trybe.com`,
  };
};
newEmployees(showEmploye);

const sorteio = (numeroApostado, checaSorteio) => {
  if (numeroApostado === checaSorteio(numeroApostado)) {
    return 'Parabéns você ganhou';
  }

  return 'Tente novamente';
};

const checaSorteio = (numero) => {
  return Math.floor(Math.random() * numero) + 1;
};

console.log(sorteio(5, checaSorteio));

//EXERCICIO 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcaoDaProva = (questao, resposta) => {
  let total = 0;
  if (questao === resposta) {
    total += 1;
  } else if (resposta !== 'N.A' && questao !== resposta) {
    total -= 0.5;
  }

  return total;
};

const provaDaEscola = (gabarito, respostaAluno, correcao) => {
  let notaFinal = 0;
  gabarito.forEach((item, index) => {
    notaFinal += correcao(item, respostaAluno[index]);
  });

  console.log(notaFinal);
};

provaDaEscola(RIGHT_ANSWERS, STUDENT_ANSWERS, correcaoDaProva);
