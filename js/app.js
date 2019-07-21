// Metodos en arraglos

const personas =[
    {nombre:'Cesar', edad:30, aprendiendo:'Javasript'},
    {nombre:'Pablo', edad:20, aprendiendo:'PHP'},
    {nombre:'Alejandra', edad:13, aprendiendo:'Adobe'},
    {nombre:'Gael', edad:3, aprendiendo:'Python'},
    {nombre:'Karen', edad:34, aprendiendo:'ReactJS'},
    {nombre:'Miguel', edad:23, aprendiendo:'Java'},
]

console.log(personas);
//mayores de 28
const mayores = personas.filter(persona=>{
    return persona.edad > 28;
});
console.log(mayores);

//find

const alejandra= personas.find(persona=>{
    return persona.nombre=== "Alejandra"
})

console.log('Alejandra esta aprendiendo ' + alejandra.aprendiendo);

//promedio de edades

let total = personas.reduce((edadTotal,persona)=>{
    return edadTotal + persona.edad;
},0);

console.log(total / personas.length);