import React from 'react';
import styled from 'styled-components';

const StyledTimer = styled('div')`
  font-size: 40px;
  margin-left: 10px;
  color: #444;
`;

function Timer() {
  return <StyledTimer>00:00:00</StyledTimer>;
}

export default Timer;
