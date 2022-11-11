navigator.mediaDevices.getUserMedia({
    audio: true
  })
  .then(stream => {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = e => {
      audio.push(e.data);
      if (rec.state == "inactive") {
        let blob = new Blob(audio, {
          type: 'audio/x-mpeg-3'
        });
        recordedAudio.src = URL.createObjectURL(blob);
        recordedAudio.controls = true;
        audioDownload.href = recordedAudio.src;
        audioDownload.download = 'audio.mp3';
        audioDownload.innerHTML = 'Tx to Site';
        audioDownload.style.display = "";
        submit(blob);
      }
    }
  })
  .catch(e => console.log(e));

// TODO: This needs work. Submit button currently does not do anything.
// Also, page does not get reloaded and therefore the results are not shown.
// The POST request has to be done without AJAX.

function startRecording() {
  audioDownload.style.display = "none";
  startRecord.disabled = true;
  stopRecord.disabled = false;
  audio = [];
  recordedAudio.controls = false;
  rec.start();
}

function stopRecording() {
  startRecord.disabled = false;
  stopRecord.disabled = true;
  rec.stop();
}

// Needs to link back to server.js and submit into ttsTx-engine.js
function submit(blob) {
  var reader = new window.FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = function() {
    var fd = new FormData();
    base64data = reader.result;
    console.log(base64data);
    fd.append('file', base64data, 'audio.mp3');
    $.ajax({
      type: 'POST',
      url: '/',
      data: fd,
      cache: false,
      processData: false,
      contentType: false,
      enctype: 'multipart/form-data'
    }).done(function(data) {
      console.log(data);
    });
  }
}

function ttsMessageSubmit() {

  //collect text from id tts-message and post to server.js
  let message = tts-message.innerHTML
  console.log(message);

}