window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.getElementById('speak-button');
  const faceImage = document.getElementById('face');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for(let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }


  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
  button.addEventListener('click', function() => {
    let utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
@@ -35,7 +24,17 @@ function init() {
    synth.speak(utterThis);
    faceImage.src = 'assets/images/smiling_open.png'; 
    utterThis.onend = function(event) {
      faceImage.src = 'assets/images/smiling.png';
    faceImage.src = 'assets/images/smiling.png';
    }
  });

    function populateVoiceList() {
    voices = synth.getVoices();
    for(let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
}
