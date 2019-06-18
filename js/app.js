// Destructuring de objetos --> extraer valores de un objeto

const aprendiendoJS={
    version : {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: [
        'React',
        'VueJS',
        'Angular'
    ]
}

// Destructuring Anterior

console.log(aprendiendoJS)
console.log(aprendiendoJS.version.nueva)

// Destructuring Nueva
let {version, frameworks} = aprendiendoJS;
console.log(version)

let {nueva} = aprendiendoJS.version;
console.log(nueva)