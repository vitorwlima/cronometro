const textCrono = document.querySelector(".crono p");
const btnIniciar = document.querySelector(".iniciar");
const btnPausar = document.querySelector(".pausar");

btnIniciar.addEventListener("click", initStopwatch);
btnPausar.addEventListener("click", pauseStopwatch);
btnPausar.addEventListener("dblclick", resetStopwatch);

function initStopwatch() {
  function update(i) {
    textCrono.innerHTML = +textCrono.innerHTML + i;
    btnIniciar.setAttribute("disabled", "");
  }

  let i = 1;
  globalThis.timeLoop = setInterval(update, 1000, i);
}

function pauseStopwatch() {
  clearInterval(timeLoop);
  btnIniciar.removeAttribute("disabled");
}

function resetStopwatch() {
  clearInterval(timeLoop);
  textCrono.innerHTML = 0;
}
