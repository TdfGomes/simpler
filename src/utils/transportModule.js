let audio;
let audioChunks = [];
let mediaRecorder;

async function init() {
  const constrains = { audio: true };
  const stream = await navigator.mediaDevices.getUserMedia(constrains);
  mediaRecorder = await new MediaRecorder(stream);
}

export async function transport() {
  if (!mediaRecorder) {
    await init();
  }

  const record = () => {
    mediaRecorder.start();
    console.log('%crecord', 'color:red');
    console.log('mediaRecoder:', mediaRecorder.stream.id);
    console.log('mediaRecoder state:', mediaRecorder.state);
  };

  const stop = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if (mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
    }
    console.log('%cstop', 'color:orange');
    console.log('mediaRecoder:', mediaRecorder.stream.id);
    console.log('mediaRecoder state:', mediaRecorder.state);
  };

  const play = () => {
    if (audio) {
      audio.play();
    }
    console.log('%cplay', 'color:green');
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(audioChunks, { type: 'audio/ogg; codecs=opus' });
    const audioURL = URL.createObjectURL(blob);
    audio = new Audio(audioURL);

    console.log('data available after MediaRecorder.stop() called.');
    console.log('audio', audio);
    console.log('audioURL', audioURL);
    console.log('recorder stopped');
  };

  mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

  return {
    record,
    stop,
    play,
  };
}
