// arreglos,  .map Y Objets keys

//arreglos

const carrito = ['Producto1', 'Producto 2', 'Producto 3'];

console.log(carrito);

const appContenedor = document.querySelector('#app');
let html = '';
carrito.forEach(element => {
    html+= `<li>${element}</li>`;
    
});

appContenedor.innerHTML=html;

//MAP

carrito2 = ['Producto1', 'Producto 2', 'Producto 3'];
carrito2.map(element=>{
    return 'el producto es ' + element
});


//Objets keys

const persona = {
    nombre: 'Juan',
    profesion: 'developer',
    edad: 500
}

console.log(Object.keys(persona))