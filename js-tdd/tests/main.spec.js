// Todos testes começa com um describe
// Serve para separar os métodos da nossa classe
describe('Main', () => {
  let arr = [];
  // Roda uma vez, antes do bloco
  before(() => {
    // console.log('before');
  });
  // Roda uma vez, depois do bloco
  after(() => {
    // console.log('before');
  });
  // Roda todas a vezes, antes de CADA bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });
  // Roda todas a vezes, depois de CADA bloco
  afterEach(() => {
    // console.log('afterEach');
  });

  // Context define o contexto do nosso teste
  context('Case 1', () => {
    // It é onde de fato vai rodar noso test
    it.skip('should happen...', () => {
      // O que a gente espera que aconteça
      // Entra de dados / método sum(2,2)
      // Espera retornar (4) => true | (3) => false => broken test 
      throw new Error('just an error');
    });
  });

  // Only usado para testar apenas uma parte do test que estamos fazendo
  // content.only
  context('Case 2', () => {
    // It é onde de fato vai rodar noso test
    it('should have a size of 4 when push another value to the array', () => {
      arr.push(4);
      console.log(arr.length); //4
      // O que a gente espera que aconteça
      // Entra de dados / método sum(2,2)
      // Espera retornar (4) => true | (3) => false => broken test 
    });

    it('should remove the value 3 when use pop in the array', () => {
      console.log(arr.pop() === 3); //true
    });

    it('should have a size of 2 when pop a value from the array', () => {
      arr.pop();
      console.log(arr.length); //2
    });
  });
});