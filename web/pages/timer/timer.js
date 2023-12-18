// Obtém o elemento do cronômetro
const timer = document.querySelector("#timer");

// Obtém o elemento do input
const timeInput = document.querySelector("#time");

// Variável para armazenar o tempo restante
let timeRemaining;

// Variável para armazenar o intervalo
let timerInterval;

// Inicia o cronômetro
startButton.addEventListener("click", () => {
    // Define o tempo restante
    timeRemaining = timeInput.value;

    // Inicia um intervalo para atualizar o cronômetro a cada segundo
    timerInterval = setInterval(() => {
        // Decrementa o tempo restante
        timeRemaining--;

        // Formata o tempo restante
        const formattedTime = formatTime(timeRemaining);

        // Atualiza o elemento do cronômetro
        timer.textContent = formattedTime;

        // Se o tempo restante for zero, exibe uma mensagem
        if (timeRemaining <= 0) {
            timer.textContent = "Tempo esgotado!";
        }
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

    // Define o tempo restante para zero
    timeRemaining = 0;

    // Atualiza o elemento do cronômetro
    timer.textContent = "00:00:00";
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
