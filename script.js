document.addEventListener("DOMContentLoaded", function () {
    const frases = [
        "¡Hoy 🥳🎉 lo maravillosa que eres!",
        "Tu felicidad es mi mayor deseo.",
        "¡Amarte es mi aventura favorita!",
        "¡La ✈️ no puede apagar mi 💞 por ti!",
        "Te llevo en mi ❤️ sin importar la ✈️.",
        "Te ❤️ más de lo que imaginas.",
        "Hoy y 100pre serás el amor de mi vida.",
        "Te AMO mi M.D.O. 🍎💛",
        "100pre serás mi compañera de locuras.🤪",
        "100pre serás mi princesa.👑",
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
