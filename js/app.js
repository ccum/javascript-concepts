//arrow functions

let viajando = (destino, duracion)=>{
    return `Viajando a la cuidad ${destino} por ${duracion}`
}
let viajando2 = destino=>`Viajando a la cuidad ${destino}`

let viaje = viajando('Paris', 9)
let viaje2 = viajando2('Francia')
console.log(viaje)
console.log(viaje2)