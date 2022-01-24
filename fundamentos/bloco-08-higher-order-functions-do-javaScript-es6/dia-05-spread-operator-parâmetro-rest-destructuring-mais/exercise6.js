const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (cars) => {
  const [brand, model, year] = cars;
  return { brand, model, year };
};

console.log(toObject(palio));
