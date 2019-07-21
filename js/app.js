// Promises con Ajax

const dascargarUsuarios = cantidad => new Promise((resolve, reject)=>{
    //pasar la cantidad al api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //lammado ajax
    const xhr = new XMLHttpRequest();
    xhr.open('GET', api, true);
    xhr.onload=() =>{
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results)
        }else{
            reject(Error(xhr.statusText));
        }
    }
    xhr.onerror = (error) => reject(error);
    xhr.send()
});

dascargarUsuarios(30)
.then(
    miembros => imprimirHTML(miembros),
    error => console.error(
        new Error('Hubo un error' + error)
        )
    )

function imprimirHTML(usuarios){
    let html = '';
    usuarios.forEach(element => {
        html+=`
            <li>
                Nombre: ${element.name.first} ${element.name.last}
                Pais: ${element.nat}
                Imagen: <img src=${element.picture.medium}>
            </li>
        `
    });
    const contendorApp = document.querySelector('#app');
    contendorApp.innerHTML = html;
}