window.addEventListener('DOMContentLoaded', init);

function init() {
  const speechSynthesizer = window.speechSynthesis;

  const voiceDropdown = document.querySelector('#voice-select');
  const speakButton = document.querySelector('button');
  const textInput = document.querySelector('#text-to-speak');
  const faceImage = document.querySelector('img');

  let availableVoices = [];

  function populateVoiceDropdown() {
    availableVoices = speechSynthesizer.getVoices();

    availableVoices.forEach((voice) => {
      const voiceOption = document.createElement("option");
      voiceOption.textContent = `${voice.name} (${voice.lang})`;

      voiceOption.setAttribute('data-lang', voice.lang);
      voiceOption.setAttribute('data-name', voice.name);

      voiceDropdown.appendChild(voiceOption);
    });
  }

  function handleSpeakButtonClick() {
    if (voiceDropdown.value === 'select') {
      return;
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

    const utterance = new SpeechSynthesisUtterance(textInput.value);

    const selectedVoiceName = voiceDropdown.selectedOptions[0].getAttribute('data-name');

    utterance.voice = availableVoices.find((voice) => voice.name === selectedVoiceName);

    speechSynthesis.speak(utterance);

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });
    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });
  }

  populateVoiceDropdown();
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceDropdown;
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  speakButton.addEventListener('click', handleSpeakButtonClick);

  speakButton.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    faceImage.src = 'assets/images/smiling_open.png'; 
    utterThis.onend = function(event) {
      faceImage.src = 'assets/images/smiling.png';
    }
  });
}
