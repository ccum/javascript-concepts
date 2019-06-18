// object constructor

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//crear tarea

const tarea1 = new Tarea('Aprender React', 'Urgente');
console.log(tarea1);
const tarea2 = new Tarea('Preparar cafe', 'Urgente');
console.log(tarea2);