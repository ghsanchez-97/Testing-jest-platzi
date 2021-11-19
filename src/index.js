const cities = ['Nicargua', 'Nueva Zelanda', 'Inglaterra', 'Francia', 'Turquía']

const randomCity = () => {
    const string = cities[Math.floor(Math.random() * cities.length)]
    return string
}

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''));
    })
}

module.exports = randomCity