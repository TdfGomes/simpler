import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { PlayBtn, RecBtn, StopBtn } from '../icons';

function StateBtn({ getRecordingState }) {
  const [state, setState] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    if (state === 1) {
      setState(2);
    } else {
      setState(1);
    }
    getRecordingState(state);
  }
  function renderBtn() {
    switch (state) {
      case 0:
        return <RecBtn />;
      case 1:
        return <StopBtn />;
      case 2:
        return <PlayBtn />;
      default:
        return <RecBtn />;
    }
  }
  return <Button onClick={handleClick}>{renderBtn()}</Button>;
}

StateBtn.propTypes = {
  getRecordingState: PropTypes.func.isRequired,
};

export default StateBtn;
