//Efeito porcentagem

//porcentagem html
let skillPorcent = document.querySelector(".skill-porcent1"),
    progressValue = document.querySelector(".progress-value1");

let progressStartValue = 0,
    progressEndValue = 85,
    speed = 80;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    skillPorcent.style.background = `conic-gradient(#20FF87 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
}, speed);

//porcentagem css
let skillPorcent2 = document.querySelector(".skill-porcent2"),
    progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,
    progressEndValue2 = 49,
    speed2 = 80;

let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`
    skillPorcent2.style.background = `conic-gradient(#20FF87 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }
}, speed);

//porcentagem python
let skillPorcent3 = document.querySelector(".skill-porcent3"),
    progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3= 0,
    progressEndValue3 = 37,
    speed3 = 80;

let progress3 = setInterval(() => {
    progressStartValue3++;

    progressValue3.textContent = `${progressStartValue3}%`
    skillPorcent3.style.background = `conic-gradient(#20FF87 ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }
}, speed);

//Fim efeito porcentagem

//Efeito dark mode

const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Save or remove dark mode from localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});

//Fim efeito dark mode


// Efeito digitação

document.addEventListener('DOMContentLoaded', (event) => {
    const texts = [
      "Olá, me chamo Lettycia Vitória.",
      "Sou front-end developer."
    ];
  
    let textIndex = 0; // Índice atual do texto sendo digitado
    let charIndex = 0; // Índice atual do caractere sendo exibido
  
    function typeWriter() {
      const text = texts[textIndex];
      const typingElement = document.getElementById('typing-effect');
      typingElement.textContent = text.slice(0, charIndex++);
      if (charIndex <= text.length) {
        setTimeout(typeWriter, 100); // Velocidade da digitação (ajustável)
      } else {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length; // Alterna para o próximo texto
        setTimeout(typeWriter, 2000); // Tempo de pausa entre os textos (ajustável)
      }
    }
  
    typeWriter();
  });
  
  //slider responsivo

