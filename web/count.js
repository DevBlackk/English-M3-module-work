// Função para atualizar o cronômetro
function updateTimer(element) {
    // Obtém o tempo atual
    var time = new Date();

    // Converte o tempo em um string
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    // Formata o tempo
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    // Atualiza o elemento do cronômetro
    element.innerHTML = formattedTime;
}

// Inicia o cronômetro
function startTimer(element) {
    // Inicia um intervalo para atualizar o cronômetro a cada segundo
    var interval = setInterval(updateTimer, 1000, element);

    // Desabilita o botão de iniciar
    element.disabled = true;
}

// Para o cronômetro
function stopTimer(element) {
    // Limpa o intervalo
    clearInterval(interval);

    // Habilita o botão de iniciar
    element.disabled = false;
}

// Redefine o cronômetro
function resetTimer(element) {
    // Define o tempo para zero
    var formattedTime = "00:00:00";

    // Atualiza o elemento do cronômetro
    element.innerHTML = formattedTime;
}

// Obtém o elemento do cronômetro
function getElement(className) {
    return document.querySelector("." + className);
}

// Inicializa o cronômetro
function init() {
    // Obtém o elemento do cronômetro
    var clock = getElement("clock");
    var stopwatch = getElement("stopwatch");
    var timer = getElement("timer");

    // Inicia o cronômetro
    startTimer(clock);

    // Adiciona eventos aos botões
    var startButton = document.querySelector("#startButton");
    startButton.addEventListener("click", function () {
        if (clock.classList.contains("stopwatch")) {
            startTimer(stopwatch);
        } else if (timer.classList.contains("timer")) {
            startTimer(timer);
        }
    });

    var resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", function () {
        resetTimer(clock);
        resetTimer(stopwatch);
        resetTimer(timer);
    });
}

// Chama a função de inicialização
init();
