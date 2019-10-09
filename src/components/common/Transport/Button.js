import styled from 'styled-components';

export const ButtonsWrapper = styled('div')`
  flex: 0 0 auto;
`;

const Button = styled('button')`
  width: 55px;
  height: 55px;
  background-color: #eee;
  border: none;
  cursor: pointer;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0);
  transition: all 100ms linear;
  &:hover {
    box-shadow: inset 0px 0px 13px -3px rgb(170, 170, 170, 0.6);
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
