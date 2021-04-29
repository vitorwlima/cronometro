export default function animacoes() {
  const btnIniciar = document.querySelector(".iniciar");
  const btnPausar = document.querySelector(".pausar");
  const btnResetar = document.querySelector(".resetar");

  btnIniciar.addEventListener("click", handleAnime);

  function handleAnime() {
    btnIniciar.classList.add("removido");
    btnPausar.classList.add("iniciado");
    btnResetar.classList.add("iniciado");
  }
}
