const nombre = "Cesar"
const trabajo = "Desarrollador"
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`)


const contenedorApp = document.querySelector("#app");
let html = `
    <ul>
        <li>${nombre}</li>
        <li>${trabajo}</li>
    <ul>
`;
contenedorApp.innerHTML=html;