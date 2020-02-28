import React from 'react';
import Transport from '../common/Transport';
import { transportModule } from '../../utils';

async function initAudioStream() {
  const constrains = { audio: true };
  const stream = await navigator.mediaDevices.getUserMedia(constrains);
  return transportModule(stream);
}

function Record() {
  const audioStream = initAudioStream();

  function handleClick(state) {
    audioStream[state]();
  }

  return (
    <React.Fragment>
      <h1>Record PAGE</h1>
      <Transport getRecordingState={handleClick} />
    </React.Fragment>
  );
}

export default Record;
