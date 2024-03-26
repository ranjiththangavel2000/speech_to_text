const startBtn = document.getElementById('startBtn');
const output = document.getElementById('output');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';

startBtn.addEventListener('click', () => {
    recognition.start();
    startBtn.textContent = 'Listening...';
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.textContent = transcript;
    startBtn.textContent = 'Start Recording';
};

recognition.onerror = (event) => {
    output.textContent = 'Error occurred while recognizing speech.';
    startBtn.textContent = 'Start Recording';
};
