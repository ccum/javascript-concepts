export const nombreTarea = 'Pasea al perro'


//expoertar una funcion

export const crearTarea= (tarea, urgencia) =>{
    return `La tarea ${tarea} tiene una urgencua de ${urgencia}`;
}

export const tareaCompletada=() =>{
    console.log('La tarea se completó')
}
// escribiendo clases
class Tarea{
    constructor(nombre, prioridad){
        this.nombre=nombre;
        this.prioridad=prioridad;
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de  ${this.prioridad}`;
    }

}

class ComprasPendientes extends Tarea{
    constructor(nombre,prioridad,cantidad){
        super(nombre,prioridad)
        this.cantidad=cantidad;
    }
    mostrar(){
        return super.mostrar()
    }
}

let tarea1 = new Tarea('Aprender Javascript', 'Alta');
let tarea2 = new Tarea('Tomar cafe', 'Media');
let tarea3 = new Tarea('Pasear al perro', 'Baja');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
// console.log(compra1.mostrar())