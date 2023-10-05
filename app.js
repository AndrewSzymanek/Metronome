const tempoDisplay = document.querySelector(".tempo");
const tempoText = document.querySelector(".tempo-text");
const decreaseTempoBtn = document.querySelector(".decrease-tempo");
const increaseTempoBtn = document.querySelector(".increase-tempo");
const tempoSlider = document.querySelector(".slider");
const startStopBtn = document.querySelector(".start-stop");
const subtractBeats = document.querySelector(".subtract-beats");
const addBeats = document.querySelector(".add-beats");
const measureCount = document.querySelector(".measure-count");

let bpm = 140;
let beatsPerMeasure = 4;
let tempoTextString = "Allegro";

decreaseTempoBtn.addEventListener("click", () => {
  if (bpm <= 20) {
    return;
  }
  bpm--;
  validateTempo();
  updateMetronome();
});
increaseTempoBtn.addEventListener("click", () => {
  if (bpm >= 280) {
    return;
  }
  bpm++;
  validateTempo();
  updateMetronome();
});

tempoSlider.addEventListener("input", () => {
  bpm = tempoSlider.value;
  updateMetronome();
});

subtractBeats.addEventListener("click", () => {
  if (beatsPerMeasure <= 1) {
    return;
  }
  beatsPerMeasure--;
  measureCount.textContent = beatsPerMeasure;
});
addBeats.addEventListener("click", () => {
  if (beatsPerMeasure >= 6) {
    return;
  }
  beatsPerMeasure++;
  measureCount.textContent = beatsPerMeasure;
});

function updateMetronome() {
  tempoDisplay.textContent = bpm;
  tempoSlider.value = bpm;
  if (bpm <= 40) {
    tempoTextString = "grave";
  }
  if (bpm >= 41 && bpm <= 60) {
    tempoTextString = "largo";
  }
  if (bpm >= 61 && bpm <= 76) {
    tempoTextString = "adagio";
  }
  if (bpm >= 77 && bpm <= 108) {
    tempoTextString = "andante";
  }
  if (bpm >= 109 && bpm <= 119) {
    tempoTextString = "allegretto";
  }
  if (bpm >= 120 && bpm <= 168) {
    tempoTextString = "allegro";
  }
  if (bpm >= 169 && bpm <= 200) {
    tempoTextString = "presto";
  }
  if (bpm >= 201) {
    tempoTextString = "prestissimo";
  }
  tempoText.textContent = tempoTextString;
}

function validateTempo() {
  if (bpm <= 20) {
    return;
  }
  if (bpm >= 280) {
    return;
  }
}
