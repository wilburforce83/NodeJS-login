// Text to speech engine

// REQUIRE TTS MODULE "SAY"
const say = require('say')


module.exports = {
    Tx: function (TextToSpeak) {

        // Insert GPIO control for PTT trigger
        // Inlcude a delay to ensure clear Tx

        say.speak(TextToSpeak, 1.0, (err) => {
            if (err) {
                return console.error(err)
            }

            console.log('Your message has been transmitted')
        });
    },

}
