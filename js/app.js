// Menú Hamburguesa
document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector("#menu-hamburguesa");
    const ul = document.querySelector("header nav ul");
    //const nav = document.querySelector("header nav");

    // Selecciona nav links
    const navLink = document.querySelectorAll(".nav-link");

    // Función Menú Hamburguesa
    burger.addEventListener("click", () => {
        ul.classList.toggle("show");
    });

    // Cerrar Menú Hamburguesa
    navLink.forEach((link) =>
        link.addEventListener("click", () => {
            ul.classList.remove("show");
        })
    );

});