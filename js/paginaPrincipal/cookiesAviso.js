// script.js
document.addEventListener("DOMContentLoaded", function() {
    var avisoCookies = document.getElementById("avisoCookies");
    var cookiesForm = document.getElementById("cookiesForm");
    var aceptar = document.getElementById("btnAceptarCookies");
    var rechazar = document.getElementById("btnRechazarCookies");

    //localStorage.removeItem("cookiesAceptadas"); //Este lo utilizo para eliminar las cookies locales
    // Comprobar si el usuario ya aceptó las cookies
    if (!cookiesAceptadas()) {
        mostrarAvisoCookies();
    }
 
    // Mostrar el aviso de cookies
    function mostrarAvisoCookies() {
        avisoCookies.style.display = "fixed";
    }

    // Ocultar el aviso de cookies y almacenar las preferencias del usuario
    function aceptarCookies(event) {
        event.preventDefault();
        avisoCookies.style.display = "none";
        almacenarCookiesAceptadas();
    }

    // Función para verificar si el usuario ya aceptó las cookies
    function cookiesAceptadas() {
        return localStorage.getItem("cookiesAceptadas") === "true";
    }

    // Función para almacenar las preferencias del usuario en el almacenamiento local
    function almacenarCookiesAceptadas() {
        var checkboxes = cookiesForm.querySelectorAll("input[type=checkbox]:checked");
        localStorage.setItem("cookiesAceptadas", "true");
        checkboxes.forEach(function(checkbox) {
            localStorage.setItem(checkbox.name, "true");
        });
    }

    function cerrarventata(){window.close();}

    // Agregar evento de envío al formulario de cookies
    aceptar.addEventListener("click", aceptarCookies);
    rechazar.addEventListener("click", cerrarventata);

    // Ocultar el aviso de cookies si ya han sido aceptadas
    if (cookiesAceptadas()) {
        avisoCookies.style.display = "none";
    }
});