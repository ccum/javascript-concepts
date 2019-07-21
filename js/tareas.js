
// escribiendo clases
export default class Tarea{
    constructor(nombre, prioridad){
        this.nombre=nombre;
        this.prioridad=prioridad;
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de  ${this.prioridad}`;
    }

}


// let tarea1 = new Tarea('Aprender Javascript', 'Alta');
// let tarea2 = new Tarea('Tomar cafe', 'Media');
// let tarea3 = new Tarea('Pasear al perro', 'Baja');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());

//let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
// console.log(compra1.mostrar())