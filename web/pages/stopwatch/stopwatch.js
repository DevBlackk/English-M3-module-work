// Obtém o elemento do cronômetro
const stopwatch = document.querySelector("#stopwatch");

// Obtém os elementos dos botões
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

// Variável para armazenar o tempo
let time = 0;

// Variável para armazenar o intervalo
let timerInterval;

// Inicia o cronômetro
startButton.addEventListener("click", () => {
    // Define o tempo para zero
    time = 0;

    // Inicia um intervalo para atualizar o cronômetro a cada segundo
    timerInterval = setInterval(() => {
        // Incrementa o tempo
        time++;

        // Formata o tempo
        const formattedTime = formatTime(time);

        // Atualiza o elemento do cronômetro
        stopwatch.textContent = formattedTime;
    }, 1000);

    // Desabilita o botão de iniciar
    startButton.disabled = true;
});

// Pausa o cronômetro
pauseButton.addEventListener("click", () => {
    // Limpa o intervalo
    clearInterval(timerInterval);

    // Habilita o botão de iniciar
    startButton.disabled = false;
});

// Reinicia o cronômetro
resetButton.addEventListener("click", () => {
    // Limpa o intervalo
    clearInterval(timerInterval);

    // Define o tempo para zero
    time = 0;

    // Atualiza o elemento do cronômetro
    stopwatch.textContent = "00:00:00";
});

// Função para formatar o tempo
function formatTime(time) {
    // Obtém as horas
    const hours = Math.floor(time / 3600);

    // Obtém os minutos
    const minutes = Math.floor((time % 3600) / 60);

    // Obtém os segundos
    const seconds = Math.floor(time % 60);

    // Formata o tempo
    return `${hours}:${minutes}:${seconds}`;
}
