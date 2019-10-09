import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { PlayBtn, RecBtn, StopBtn } from '../icons';

function StateBtn({ state }) {
  const renderBtn = () => {
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
  };
  return <Button>{renderBtn()}</Button>;
}

StateBtn.propTypes = {
  state: PropTypes.number.isRequired,
};

export default StateBtn;
