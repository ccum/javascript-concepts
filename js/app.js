import Tarea from './tareas.js' 
import ComprasPendientes from './compras.js'

const tarea1 = new Tarea('Aprender JavaScript', 'Urgente')

console.log(tarea1)
console.log(tarea1.mostrar())

const compra1 = new ComprasPendientes('Pizza', 'Urgente',2)
console.log(compra1);
console.log(compra1.mostrar());
console.log(compra1.hola()) 