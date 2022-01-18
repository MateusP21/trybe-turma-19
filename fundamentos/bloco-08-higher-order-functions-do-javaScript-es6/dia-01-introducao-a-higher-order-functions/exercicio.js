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
