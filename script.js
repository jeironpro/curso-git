// Lista de nodos
let nodosData = [
    { id: "top", titulo: "Git init", nivel: 0, posicion: "center", enlace: "https://www.google.com" },
    { id: "center", titulo: "Git status", nivel: 1, posicion: "center", enlace: "" },
    { id: "left", titulo: "Git add", nivel: 2, posicion: "left", enlace: "" },
    { id: "right", titulo: "Git commit", nivel: 2, posicion: "right", enlace: "" },
];

// Contenedor de los nodos
const arbolObj = document.getElementById("arbol");
// Espacio entre nodo
const espaciado = 150;

// Función para renderizar nodos dinámicamente
function renderizarArbol() {
    arbolObj.innerHTML = "";

    const niveles = {};
    nodosData.forEach(nodo => {
        if (!niveles[nodo.nivel]) {
            niveles[nodo.nivel] = [];
        }
        niveles[nodo.nivel].push(nodo);
    });

    Object.keys(niveles).forEach(claveLevel => {
        const nivelNodos = niveles[claveLevel];
        const contadores = { left: 0, right: 0, center: 0 };

        nivelNodos.forEach(n => {
            n.top = n.nivel * espaciado + 50;

            // Si tiene padre, ajustar posición relativa
            if (n.padreId) {
                const pariente = nodosData.find(p => p.id === n.padreId);

                if (n.posicion === "left") {
                    n.left = pariente.left - 10 - contadores.left * 5;
                } else if (n.posicion === "right") {
                    n.left = pariente.left + 10 + contadores.right * 5;
                } else {
                    n.left = pariente.left;
                }
            } else {
                // Posición base
                if (n.posicion === "center") {
                    n.left = 50;
                } else if (n.posicion === "left") {
                    n.left = 25 - contadores.left * 5;
                } else if (n.posicion === "right") {
                    n.left = 75 + contadores.right * 5;
                }
            }

            if (n.left < 5) {
                n.left = 5;
            }
            
            if (n.left > 95) {
                n.left = 95;
            }

            // Contadores para evitar solapamiento
            if (n.posicion === "left") {
                contadores.left++;
            } else if (n.posicion === "right") {
                contadores.right++;
            } else {
                contadores.center++;
            }
        });
    });

    // Crear nodos en el DOM
    nodosData.forEach(nodo => {
        const nodoObj = document.createElement("a");
        nodoObj.classList.add("nodo");
        nodoObj.style.top = nodo.top + "px";
        nodoObj.style.left = nodo.left + "%";
        nodoObj.style.transform = "translate(-50%, -50%)";
        nodoObj.href = nodo.enlace;

        const tituloObj = document.createElement("span");
        tituloObj.classList.add("titulo");
        tituloObj.innerText = `${nodo.titulo}, Nivel ${nodo.nivel}`;

        nodoObj.appendChild(tituloObj);
        arbolObj.appendChild(nodoObj);
    });
}

// Función para agregar nodo dinámicamente con padreId
function agregarNodo(id, titulo, nivel, posicion = "center", padreId = null, enlace) {
    nodosData.push({ id, titulo, nivel, posicion, padreId, enlace });
    renderizarArbol();
}

// Inicializar árbol
renderizarArbol();