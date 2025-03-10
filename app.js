let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre")
        return;
    }

    amigos.push(nombreAmigo);

    actualizarLista();
    
    inputAmigo.value = "";
    inputAmigo = focus();


}

function actualizarLista() {
    const listaAmigoU1 = document.getElementById("listaAmigos")
    listaAmigoU1.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoU1.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("no hay amigos para sortear. Agrega nombres primero");
        return;
    }

    const indiceAleatrio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatrio];

    const resultadoU1 = document.getElementById("resultado");
    resultadoU1.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
 }

 document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("sortear").addEventListener("click", sortear);
 })