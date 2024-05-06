window.addEventListener('DOMContentLoaded', init);

function init() {
  const speechSynthesizer = window.speechSynthesis;
  const textInput = document.getElementById('text-to-speak');
  const voiceDropdown = document.getElementById('voice-select');
  const speakButton = document.getElementById('speak-button');
  const faceImage = document.getElementById('face');

  let availableVoices = [];

  function loadVoices() {
    availableVoices = speechSynthesizer.getVoices();
    for(let i = 0; i < availableVoices.length ; i++) {
      const voiceOption = document.createElement('option');
      voiceOption.textContent = `${availableVoices[i].name} (${availableVoices[i].lang})`;
      voiceOption.setAttribute('data-name', availableVoices[i].name);
      voiceDropdown.appendChild(voiceOption);
    }
  }

  loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoiceName = voiceDropdown.selectedOptions[0].getAttribute('data-name');
    utterance.voice = getVoiceByName(selectedVoiceName, availableVoices);
    speechSynthesizer.speak(utterance);
    faceImage.src = 'assets/images/smiling_open.png'; 
    utterance.onend = function(event) {
      faceImage.src = 'assets/images/smiling.png';
    }
  });
}

function getVoiceByName(name, availableVoices) {
  for(let i = 0; i < availableVoices.length ; i++) {
    if(availableVoices[i].name === name) {
      return availableVoices[i];
    }
  }
  return null;
  
}
