// object constructor

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}
// Agregar prototype
Tarea.prototype.mostrarInformacionTarea= function(){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`
}

//crear tarea

const tarea1 = new Tarea('Aprender React', 'Urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
const tarea2 = new Tarea('Preparar cafe', 'Urgente');
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());