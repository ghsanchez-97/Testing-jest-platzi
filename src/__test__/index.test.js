const randomStrings = require('../index')

// test('Probar la funcionalidad', ()  => {
//     expect(typeof (randomStrings())).toBe('string')
// })

describe('Probar funcionalidades de randomStrings', () => {
    test('Probar la funcionalidad', () => {
        expect(typeof (randomStrings())).toBe('string')
    })
    test('Comprobar que no existe una cuidad', () => {
        expect(randomStrings()).not.toMatch(/Colombia/)
    })
})