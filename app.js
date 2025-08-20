// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista de amigos secretos
let amigos = [];
// Numero maximo de amigos secretos contenidos en la lista
let numeroMaximo = 0;

// Funcion para agregar un amigo secreto a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombreDeAmigo = document.getElementById('amigo').value;
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");
    //Limpiar la lista existente
    lista.innerHTML = "";

    // Validar la captura del campo de entrada del nombre del amigo secreto
    if (nombreDeAmigo===""){
        alert("Por favor, inserte un nombre.");
    }else{
        // Actualizar el array de amigos secretos
        amigos.push(nombreDeAmigo);
        // Limpiar el campo de entrada del nombre del amigo secreto
        document.getElementById('amigo').value="";
    }

    //Iterar sobre el arreglo de amigos secretos
    for (let i = 0; i < amigos.length; i++){
        //Agregar elementos a la lista HTML de amigos secretos 
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Funcion para seleccionar un nombre de amigo de la lista de amigos secretos
function sortearAmigo(){
    // Validar que haya amigos disponibles
    if(amigos.length>0){
        // Asignar el numero maximo de la lista de amigos secretos
        numeroMaximo = amigos.length;
        //Generar un índice aleatorio
        let numeroGenerado =  Math.floor(Math.random()*numeroMaximo);
        //Obtener el nombre del amigo secreto sorteado
        let amigoSortedo = amigos[numeroGenerado];
        // Mostrar el resultado en la pagina HTML
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigoSortedo}`;
    }else{
        // Mostrar mensaje de lista de maigos secretos vacia
        alert("Lista de amigos secretos vacia, por favor, inserte un nombre.");
    }
}