import React from 'react';
import Transport from '../common/Transport';
import { transportModule } from '../../utils';

function Record() {
  function handleClick(state) {
    const audioStream = transportModule(navigator);
    if (state === 0) {
      audioStream.record();
    }
  }
  return (
    <React.Fragment>
      <h1>Record PAGE</h1>
      <Transport getRecordingState={handleClick} />
    </React.Fragment>
  );
}

export default Record;
