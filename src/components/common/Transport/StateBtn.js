import React, { useContext } from 'react';
import Button from './Button';
import { PlayBtn, RecBtn, StopBtn } from '../icons';
import { Context } from '../../AppContext';

import { PLAY, STOP } from '../../../store/actions';
import { transport } from '../../../utils';

function StateBtn() {
  const [{ recorderState }, dispatch] = useContext(Context);

  const handleClick = async e => {
    e.preventDefault();

    const t = await transport();

    if (recorderState === 'stop') {
      dispatch({ type: PLAY });
    } else {
      dispatch({ type: STOP });
    }
    t[recorderState]();
  };

  const renderBtn = () => {
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
  };
  return <Button onClick={handleClick}>{renderBtn()}</Button>;
}

export default StateBtn;
