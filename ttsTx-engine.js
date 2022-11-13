// Text to speech engine

// REQUIRE TTS MODULE "SAY"
const say = require('say');
// REQUIRE PI RELAY BOARD
const SeeedStudioRelayBoard = require('js-seeed-studio-relay-board');


module.exports = {
    Txtts: function (TextToSpeak, Type) {

    sendCustomTransmission(TextToSpeak);
   
    } 
};




// PTT custom transmission from TTS engine "Say"
async function sendCustomTransmission(TextToSpeak) {
    const rpi = new SeeedStudioRelayBoard.Relay();

    // Initialize I2C controler
    await rpi.init();

    // Trigger PTT on Relay 1
    await rpi.on(1);

    // Small Delay to allow for latency on PTT
    var TxDelay = 1200; //1.2 second

    setTimeout(function () {
        // Tx typed message
        say.speak(TextToSpeak, 'voice_kal_diphone', 1.0, (err) => {
            if (err) {
                return console.error(err)
            }
            let notification = "Tx sent: "+TextToSpeak;
            console.log(notification)
            // Switch off PTT relay
            rpi.off(1);
        });
    }, TxDelay);

};        