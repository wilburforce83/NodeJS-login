const SeeedStudioRelayBoard = require('js-seeed-studio-relay-board')
 
async function main() {
    const rpi = new SeeedStudioRelayBoard.Relay()
 
    // Initialize I2C controler
    await rpi.init()
 
    /**
     * Examples
     **/
 
    // Turn relay 3 ON.
    await rpi.on(3)
 
    // Get status of relay 3.
    //await rpi.get(3)
 
    // Get status of all relays.
  //  await rpi.getAll()
 
    // Turn relay OFF.
 //   await rpi.off(3)
 
    // Turn all relays OFF.
  await rpi.allOff()
}

main();