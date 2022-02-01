// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercise8.js');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expectedError = new Error('Não temos esse pokémon para você :(');
    try {
      getPokemonDetails(
        (pokemon) => pokemon.name === 'Pichu',
        (error, message) => {
          if (error) {
            expect(error).toEqual(expectedError);
          } else {
            return message;
          }

          done();
        }
      );
    } catch (error) {
      done(error);
    }
  });

  it('retorna um pokemon que existe no banco de dados', () => {
    // Escreva aqui seu código
    const expectedString =
      'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander');
  });
});
