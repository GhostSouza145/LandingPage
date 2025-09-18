// Efeito de digitação para o título principal
const titleElement = document.querySelector('header h1');
const originalTitle = titleElement.textContent;
titleElement.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalTitle.length) {
        titleElement.textContent += originalTitle.charAt(i);
        i++;
        setTimeout(typeWriter, 150); // Velocidade da digitação
    }
}

// Efeito de texto caindo (simulado com caracteres aleatórios)
const terminalEffectDiv = document.querySelector('.terminal-effect');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|:;<>,.?/~`';
const streamLength = 100;

function createStream() {
    const stream = document.createElement('div');
    stream.classList.add('stream');
    stream.style.position = 'absolute';
    stream.style.left = Math.random() * 100 + 'vw';
    stream.style.fontSize = Math.random() * 15 + 10 + 'px';
    stream.style.opacity = Math.random() * 0.5 + 0.5;
    stream.style.animationDuration = Math.random() * 5 + 2 + 's';

    let streamText = '';
    for (let j = 0; j < streamLength; j++) {
        streamText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    stream.textContent = streamText;
    terminalEffectDiv.appendChild(stream);

    // Remover o stream após a animação terminar
    stream.addEventListener('animationend', () => {
        stream.remove();
    });
}

// Inicia a digitação do título quando a página carrega
window.onload = () => {
    typeWriter();
    // Cria streams de texto aleatórios para o efeito terminal
    setInterval(createStream, 100); // Cria um novo stream a cada 100ms
};

// Adiciona um efeito de 
