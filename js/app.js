const audio = document.querySelector('#audio');
const btnka = document.querySelector('#btnka');

btnka.addEventListener('click', () => {
    audio.paused ? audio.play() : audio.pause();
});
