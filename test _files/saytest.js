// automatically pick platform

const say = require('say')


var TextToSpeak = "Your message here";
/* voices ... voice_rab_diphone ... voice_kal_diphone

nitech_us_slt_arctic_hts
 nitech_us_jmk_arctic_hts
 nitech_us_clb_arctic_hts
 nitech_us_rms_arctic_hts
 nitech_us_bdl_arctic_hts
 nitech_us_awb_arctic_hts

*/
say.speak(TextToSpeak,'voice_rab_diphone', 1, (err) => {
    if (err) {
        return console.error(err)
    }

    console.log('Your message has been transmitted')
});


