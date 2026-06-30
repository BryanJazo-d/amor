function abrirRecuerdos() {

    const fecha = document.getElementById("fecha").value.trim();

    if (fecha === "19/09/2024" || fecha === "19-09-2024") {

        window.location.href = "galeria.html";

    } else {

        alert("Esa fecha no es correcta 💗");

    }

}

function toggleMusica() {

    const audio = document.getElementById("musica");
    const boton = document.getElementById("musicaBtn");

    if (audio.paused) {

        audio.play();
        boton.innerHTML = "⏸ Pausar nuestra canción";

    } else {

        audio.pause();
        boton.innerHTML = "🎵 Reproducir nuestra canción";

    }

}