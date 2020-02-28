export function transportModule(stream) {
  let audioChunks = [];
  let audio;
  const mediaRecorder = new MediaRecorder(stream);

  const record = () => {
    mediaRecorder.start();
    console.log('record');
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
    console.log('mediaRecoder state:', mediaRecorder.state);
  };

  const play = () => {
    if (audio) {
      audio.play();
    }
  };

  mediaRecorder.onstop = () => {
    console.log('data available after MediaRecorder.stop() called.');
    const blob = new Blob(audioChunks);
    audioChunks = [];
    const audioURL = URL.createObjectURL(blob);
    audio = new Audio(audioURL);
    console.log('audioURL', audioURL);
    console.log('recorder stopped');
  };

  mediaRecorder.ondataavailable = function(e) {
    audioChunks.push(e.data);
    console.log('audioChunks', audioChunks);
  };

  return {
    record,
    stop,
    play,
  };
}
