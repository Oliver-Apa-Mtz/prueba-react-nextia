const formValidate = require('./app-test');

test('formValidate retorna true para validación', () => {
  	expect(formValidate('oliver@prueba.com', 'prueba123')).toBe(true);
});
test('formValidate retorna false para form sin password', () => {
  expect(formValidate('prueba', '')).toBe(false);
});
test('formValidate retorna false para form sin email y sin password', () => {
  expect(formValidate('', '')).toBe(false);
});
test('formValidate retorna false para form sin parametros', () => {
  expect(formValidate()).toBe(false);
});