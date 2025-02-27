document.addEventListener("DOMContentLoaded", function () {
    const frases = [
        "Iniciando sesión, por favor espere...",
        "Proceso de validación en curso....",
        "Los cambios se han guardado correctamente.",
        "Error: acceso denegado.",
        "Actualización de datos completada",
        "Su solicitud ha sido recibida.",
        "Cierre de sesión exitoso. Gracias por su visita.",
        "Por favor, revise los campos obligatorios.",
        "Conexión establecida con éxito.",
        "Sesión expirada, vuelve a iniciar sesión.",
    ];

    let index = 0;
    const frasesDiv = document.getElementById("frases");

    function cambiarFrase() {
        frasesDiv.innerHTML = '';
        const frase = frases[index];

        for (let i = 0; i < frase.length; i++) {
            const span = document.createElement('span');
            span.classList.add('letter');
            span.style.setProperty('--delay', `${i * 0.1}s`);
            span.textContent = frase[i] === ' ' ? '\u00A0' : frase[i];
            frasesDiv.appendChild(span);
        }

        index = (index + 1) % frases.length;
        setTimeout(cambiarFrase, (frase.length * 100) + 2000);
    }

    cambiarFrase(); // Mostrar la primera frase
});
