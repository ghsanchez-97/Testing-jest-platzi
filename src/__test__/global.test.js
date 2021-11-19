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

test('Probar un Callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH')
    })
})

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''));
    })
}

test('Probar una promesa', () => {
    return reverseString2('Hola')
        .then(string => {
            expect(string).toBe('aloH')
        }) 
})

test('Probar async/await', async () => {
    const string = await reverseString2('Hola')
    expect(string).toBe('aloH')
})

// afterEach(() => console.log('Despues de cada prueba'))
// afterAll(() => console.log('Despues de todas las pruebas'))

// beforeEach(() => console.log('Antes de cada prueba'))
// beforeAll(() => console.log('Antes de todas las pruebas'))