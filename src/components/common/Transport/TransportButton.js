import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function TransportButton({ icon, onClick }) {
  return <Button onClick={onClick}>{React.createElement(icon)}</Button>;
}

TransportButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
};

export default TransportButton;
