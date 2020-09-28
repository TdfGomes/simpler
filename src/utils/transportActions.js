/* eslint-disable no-console */
let audio;
let recordedChunks = [];
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
    console.log('%crecord', 'color:#f11');
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
    console.log('%cplay', 'color:#4c2');
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks);
    const audioURL = URL.createObjectURL(blob);
    audio = new Audio(audioURL);

    console.log('%crecorder stopped', 'color:#f25');
  };

  mediaRecorder.ondataavailable = e => {
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
    }
  };
  return {
    record,
    stop,
    play,
  };
}
