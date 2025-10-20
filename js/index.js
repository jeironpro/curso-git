document.addEventListener("DOMContentLoaded", () => {
    const cabeza = document.querySelector("head");

    const googleIcons = document.createElement("link");
    googleIcons.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";
    googleIcons.rel = "stylesheet";

    if (!document.querySelector('link[href*="Material+Symbols+Outlined"]')) {
        cabeza.appendChild(googleIcons);
    }

    const titulo = document.querySelector("h1");
    
    const enlacePrincipal = document.createElement("a");
    enlacePrincipal.href = "../index.html";
    enlacePrincipal.title = "Volver a la página principal";

    const icono = document.createElement("span");
    icono.classList.add("material-symbols-outlined");
    icono.textContent = "arrow_back";
    
    enlacePrincipal.appendChild(icono);
    
    titulo.insertAdjacentElement("beforebegin", enlacePrincipal);
});