// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombreAmigo);
    actualizarListaAmigos();
    inputAmigo.value = "";
}


function actualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; 

    listaAmigos.forEach(amigo => {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        listaHTML.appendChild(elementoLista);
    });
}


function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceSecreto = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceSecreto];

    asignarTextoElemento("#resultado", `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`);
}
