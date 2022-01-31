const { uppercase } = require('./exercise7');
it('uppercase "pikachu" is equal to "PIKACHU" ', (done) => {
  uppercase('pikachu', (str) => {
    try {
      expect(str).toBe('PIKACHU');
      done();
    } catch (error) {
      done(error);
    }
  });
});
