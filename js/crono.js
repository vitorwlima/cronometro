export default function cronometro() {
  let display = document.querySelector(".crono p");
  const btnIniciar = document.querySelector(".iniciar");
  const btnPausar = document.querySelector(".pausar");

  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  let displaySeconds = 0;
  let displayMinutes = 0;
  let displayHours = 0;

  btnIniciar.addEventListener("click", stopwatch);

  function stopwatch() {
    const timeLoop = setInterval(initStopwatch, 1000);
    btnIniciar.setAttribute("disabled", "");

    function initStopwatch() {
      seconds += 1;

      displaySeconds = seconds;
      displayMinutes = minutes;
      displayHours = hours;

      if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
      }
      if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
      }
      if (hours < 10) {
        displayHours = "0" + hours.toString();
      }

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      display.innerHTML =
        displayHours + ":" + displayMinutes + ":" + displaySeconds;
    }

    btnPausar.addEventListener("click", pauseStopwatch);
    btnPausar.addEventListener("dblclick", resetStopwatch);

    function pauseStopwatch() {
      clearInterval(timeLoop);
      btnIniciar.removeAttribute("disabled");
    }

    function resetStopwatch() {
      clearInterval(timeLoop);
      display.innerHTML = "00:00:00";
      seconds = 0;
      minutes = 0;
      hours = 0;
    }
  }
}
