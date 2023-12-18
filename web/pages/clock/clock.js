// Obtém o elemento do cronômetro
const clock = document.querySelector("#clock");

// Inicia o cronômetro
function startTimer() {
    // Inicia um intervalo para atualizar o cronômetro a cada segundo
    setInterval(() => {
        // Obtém o tempo atual
        const time = new Date();

        // Converte o tempo em um string
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        // Formata o tempo
        const formattedTime = hours + ":" + minutes + ":" + seconds;

        // Atualiza o elemento do cronômetro
        clock.textContent = formattedTime;
    }, 1000);
}

// Inicia o cronômetro
startTimer();
