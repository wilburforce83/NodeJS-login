
const Aud = require('audic')

const audic = new Aud('/audio_files/audio.mp3');

await audic.play();

audic.addEventListener('ended', () => {
    console.log("audio file has finished playing")
	audic.destroy();
});