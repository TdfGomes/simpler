import React, { useContext } from 'react';
import Button from './Button';
import { PlayBtn, RecBtn, StopBtn } from '../icons';
import { Context } from '../../AppContext';

import { PLAY, STOP } from '../../../store/actions';

function StateBtn() {
  const [{ recorderState, transport }, dispatch] = useContext(Context);

  async function handleClick(e) {
    e.preventDefault();
    const t = await transport();
    if (recorderState === 'stop') {
      dispatch({ type: PLAY });
    } else {
      dispatch({ type: STOP });
    }
    t[recorderState]();
  }

  function renderBtn() {
    switch (recorderState) {
      case 'record':
        return <RecBtn />;
      case 'stop':
        return <StopBtn />;
      case 'play':
        return <PlayBtn />;
      default:
        return <RecBtn />;
    }
  }
  return <Button onClick={handleClick}>{renderBtn()}</Button>;
}

export default StateBtn;
