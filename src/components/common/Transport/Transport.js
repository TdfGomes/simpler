import React from 'react';
import styled from 'styled-components';
import TransportButton from './TransportButton';
import { ButtonsWrapper } from './Button';
import Timer from './Timer';
import { RewindBtn, FFBtn } from '../icons';
import StateBtn from './StateBtn';

const StyledTransport = styled('div')`
  border: 1px solid #cecece;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`;

function Transport() {
  return (
    <StyledTransport>
      <Timer />
      <ButtonsWrapper>
        <TransportButton icon={RewindBtn} />
        <StateBtn state={0} />
        <TransportButton icon={FFBtn} />
      </ButtonsWrapper>
    </StyledTransport>
  );
}

export default Transport;
