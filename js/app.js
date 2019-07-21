// Spread Operator

let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django'];
console.log(lenguajes);
// unir los arreglos en 1 solo

let combinacion = [...lenguajes,...frameworks];
console.log(combinacion)

// copiar arreglos 

let nuevoArray = [...lenguajes]
nuevoArray.reverse();
console.log(nuevoArray);