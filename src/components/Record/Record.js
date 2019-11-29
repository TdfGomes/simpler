import React from 'react';
import Transport from '../common/Transport';
import { getUserMedia } from '../../utils';

function Record() {
  function handleClick(state) {
    if (state === 0) {
      getUserMedia();
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
