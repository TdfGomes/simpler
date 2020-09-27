let mediaRecorder;

export async function initAudioStream() {
  const constrains = { audio: true };
  const stream = await navigator.mediaDevices.getUserMedia(constrains);
  mediaRecorder = await new MediaRecorder(stream);
}

export async function transport() {
  let audioChunks = [];
  let audio;

  if (!mediaRecorder) {
    await initAudioStream();
  }

  console.log('mediaRecoder:', mediaRecorder.stream.id);

  const record = () => {
    mediaRecorder.start();
    console.log('record');
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
    console.log('stop');
    console.log('mediaRecoder:', mediaRecorder.stream.id);
    console.log('mediaRecoder state:', mediaRecorder.state);
  };

  const play = () => {
    if (audio) {
      audio.play();
    }
    console.log('play');
  };

  mediaRecorder.onstop = () => {
    console.log('data available after MediaRecorder.stop() called.');
    const blob = new Blob(audioChunks);
    // audioChunks = [];
    const audioURL = URL.createObjectURL(blob);
    audio = new Audio(audioURL);
    console.log('audioURL', audioURL);
    console.log('recorder stopped');
  };

  mediaRecorder.ondataavailable = e => {
    audioChunks.push(e.data);
    console.log('audioChunks', audioChunks);
  };

  return {
    record,
    stop,
    play,
  };
}
