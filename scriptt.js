const texts = [
  "Olá, me chamo Lettycia Vitória",
  "sou front-end developer."
];

let textIndex = 0; // Índice atual do texto sendo digitado
let charIndex = 0; // Índice atual do caractere sendo exibido
let isTyping = true; // Controla se está digitando ou pausado

function typeWriter() {
  if (isTyping) {
    const text = texts[textIndex];
    document.getElementById('typing-effect').textContent = text.slice(0, charIndex++);
    if (charIndex <= text.length) {
      setTimeout(typeWriter, 100); // Velocidade da digitação (ajustável)
    } else {
      setTimeout(() => {
        isTyping = false;
        setTimeout(() => {
          textIndex = (textIndex + 1) % texts.length;
          charIndex = 0;
          isTyping = true;
          typeWriter();
        }, 1000); // Tempo de pausa entre textos (ajustável)
      }, 2000); // Tempo de exibição do texto completo (ajustável)
    }
  }
}

typeWriter();