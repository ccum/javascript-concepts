//parametros por defecto

function actividad(nombre='WalterWhite', actividad='Enseñar Quiminca'){
    console.log(`la persona ${nombre} realiza ${actividad}`)
}

actividad('Cesar','developer');
actividad('Pedro','developer');


const another_actividad = function(nombre='WalterWhite', actividad='Enseñar Quiminca'){
    console.log(`la persona ${nombre} realiza ${actividad}`)
}


another_actividad('Cesar','developer');
another_actividad('Pedro','developer');