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
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceDropdown;
  }
  speakButton.addEventListener('click', handleSpeakButtonClick);
}
