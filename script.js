function entrar() {

    const fecha = document.getElementById("fecha").value.trim();

    // IMPORTANTE:
    // Más adelante cambiaremos esta validación para que no sea visible.
    if (fecha === "19/09/2024") {

        document.body.style.transition = "opacity .8s";
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "galeria.html";
        }, 800);

    } else {

        document.getElementById("error").textContent =
        "La fecha no es correcta ❤️";

    }

}