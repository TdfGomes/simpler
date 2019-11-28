import React from 'react';
import Transport from '../common/Transport';
import { RECORDING_STATE } from '../../utils';

function Record() {
  function handleClick(state) {
    console.log(state);
    console.log(RECORDING_STATE[state]);
  }
  return (
    <React.Fragment>
      <h1>Record PAGE</h1>
      <Transport getRecordingState={handleClick} />
    </React.Fragment>
  );
}

export default Record;
