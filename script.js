document.addEventListener("DOMContentLoaded", function () {
    const frases = [
        "¡Hoy 🥳🎉 lo maravillosa que eres!",
        "Tu felicidad es mi mayor deseo.",
        "¡Amarte es mi aventura favorita!",
        "¡Ni el tiempo ⏰ ni la distancia ✈️",
        "podrán detener mi amor 💞 por ti!",
        "Te llevo en mi ❤️ sin importar la ✈️.",
        "Te amo ❤️ más de lo que imaginas.",
        "Hoy y 100pre serás el amor de mi vida.",
        "100pre serás mi compañera de locuras.🤪",
        "100pre serás mi princesa.👑",
        "100pre serás mi amor.💞",
        "100pre serás mi M.D.O.🍎💛 TE AMO!",
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
