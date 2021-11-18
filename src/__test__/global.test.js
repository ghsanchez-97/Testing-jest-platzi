/*Haciendo el primer testing con jest*/
//Texto para validar
const text = 'Hola Mundo';
//Arreglo para validar
const fruits = ['manzana', 'uva', 'banana', 'sandia']

test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/);
})

test('¿Tenemos una uva?', () => {
    expect(fruits).toContain('uva')
})

test('Mayor que', () => {
    expect(20).toBeGreaterThan(10);
})

test('Verdadero', () => {
    expect(true).toBeTruthy();
})

const reverseString = (str, callback) => {
    callback(str.split('').reverse().join(''));
}