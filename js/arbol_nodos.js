// Lista de nodos
let nodosData = [];

// Contenedor de los nodos
const arbolObj = document.getElementById("arbol");

// Función para renderizar nodos dinámicamente
function renderizarArbol() {
    // Limpiar árbol antes de volver a renderizar
    arbolObj.replaceChildren();

    // Crear nodos como cards
    nodosData.forEach(nodo => {
        const nodoObj = document.createElement("a");
        nodoObj.classList.add("nodo");
        nodoObj.href = nodo.enlace || "#";

        const tituloObj = document.createElement("span");
        tituloObj.classList.add("titulo");
        tituloObj.textContent = nodo.titulo;
        nodoObj.appendChild(tituloObj);
        arbolObj.appendChild(nodoObj);
    });
}

const limpiarCadena = str =>
    str.normalize("NFD")
       .replace(/[\u0300-\u036f]/g, "")
       .replace(/ /g, "")
       .replace(/\-/g, "")
       .toLowerCase();

// Función para agregar nodo dinámicamente
function agregarNodo(id, titulo, enlace) {
    if (enlace == "") {
        enlace = `html/${limpiarCadena(titulo)}.html`
    }
    nodosData.push({ id, titulo, enlace });
}

// Inicializar árbol con todos los nodos
agregarNodo("center", "Primeros pasos", "");
agregarNodo("centerInit", "Git init", "");
agregarNodo("leftClone", "Git clone", "");
agregarNodo("rightRemote", "Git remote", "");
agregarNodo("centerConfig", "Git config", "");
agregarNodo("centerStatus", "Git status", "");
agregarNodo("centerAdd", "Git add", "");
agregarNodo("leftRestore", "Git restore", "");
agregarNodo("leftRm", "Git rm", "");
agregarNodo("leftClean", "Git clean", "");
agregarNodo("rightMv", "Git mv", "");
agregarNodo("centerCommit", "Git commit", "");
agregarNodo("leftBlame", "Git blame", "");
agregarNodo("leftLog", "Git log", "");
agregarNodo("leftShow", "Git show", "");
agregarNodo("leftReflog", "Git reflog", "");
agregarNodo("rightStash", "Git stash", "");
agregarNodo("rightDiff", "Git diff", "");
agregarNodo("rightPull", "Git pull", "");
agregarNodo("rightPush", "Git push", "");
agregarNodo("rightTag", "Git tag", "");
agregarNodo("centerFetch", "Git fetch", "");
agregarNodo("leftReset", "Git reset", "");
agregarNodo("leftRevert", "Git revert", "");
agregarNodo("centerBisect", "Git bisect", "");
agregarNodo("centerBranch", "Git branch", "");
agregarNodo("rightCheckout", "Git checkout", "");
agregarNodo("rightSwitch", "Git switch", "");
agregarNodo("leftMerge", "Git cherry-pick", "");
agregarNodo("rightMerge", "Git merge", "");
agregarNodo("rightRebase", "Git rebase", "");
agregarNodo("centerGc", "Git gc", "");
agregarNodo("centerArchive", "Git archive", "");
agregarNodo("centerSubmodule", "Git submodule", "");
agregarNodo("centerPruebaFinal", "Prueba final", "");

document.addEventListener("DOMContentLoaded", () => {
    renderizarArbol();
});