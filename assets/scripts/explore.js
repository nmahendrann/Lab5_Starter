
window.addEventListener('DOMContentLoaded', init);

function init() {
  let synth = window.speechSynthesis;
  let voices = [];
  let voiceSelector = document.querySelector("#voice-select");
  let button = document.querySelector("button");
  let text = document.querySelector("#text-to-speak");
  let image = document.querySelector("img");

  // from web API documentation
    function populateVoices() {
    voices = synth.getVoices();
    for(let i = 0; i < voices.length; i++){
      let option = document.createElement("option");
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
  
      voiceSelector.appendChild(option);
  
    }
      
  }
  if (synth.getVoices().length !== 0) {
    populateVoices();
  } else {
    synth.onvoiceschanged = populateVoices;
  }
  
  button.addEventListener("click", function() {
    let utterance = new SpeechSynthesisUtterance(text.value);
    let selectedOption = voiceSelector.selectedOptions[0].getAttribute('data-name');
    for(let i = 0; i < voices.length; i++){
      if(voices[i].name === selectedOption){
        utterance.voice = voices[i];
      }
    }
    synth.speak(utterance);
    image.src = "assets/images/smiling-open.png";
    utterance.onend = function() {
      image.src = "assets/images/smiling.png";
    };
  });
  
}
