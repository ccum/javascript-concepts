// Funciones en un Objeto

const persona ={
    nombre: 'Juan',
    trabajo: 'Developer',
    edad: 500,
    mostrarInforme(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}
persona.mostrarInforme();