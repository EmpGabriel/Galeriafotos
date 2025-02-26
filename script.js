document.addEventListener("DOMContentLoaded", function () {
    const frases = [
        "Bienvenido a mi página web!",
        "Aquí encontrarás contenido interesante.",
        "No olvides suscribirte a nuestro boletín.",
        "Explora nuestros últimos artículos.",
        "Contáctanos para más información."
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
