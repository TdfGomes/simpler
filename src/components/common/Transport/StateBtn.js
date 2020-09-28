import React, { useContext } from 'react';
import Button from './Button';
import { PlayBtn, RecBtn, StopBtn } from '../icons';
import { Context } from '../../AppContext';

import { transport, getNextState, getNextAction } from '../../../utils';

function StateBtn() {
  const [{ recorderState }, dispatch] = useContext(Context);

  const handleClick = async e => {
    e.preventDefault();

    const t = await transport();
    dispatch({ type: getNextAction(recorderState) });
    t[getNextState(recorderState)]();
  };

  const renderBtn = () => {
    switch (getNextState(recorderState)) {
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
