import React, { createContext, useReducer, useMemo } from 'react';
import * as actions from '../../store/actions';
import { transportModule } from '../../utils';

async function transport() {
  const constrains = { audio: true };
  const stream = await navigator.mediaDevices.getUserMedia(constrains);
  return transportModule(stream);
}

const initialState = {
  recorderState: 'record',
  transport,
};

function reducer(state, action) {
  switch (action.type) {
    case actions.RECORD:
      return {
        ...state,
        recorderState: 'record',
      };
    case actions.STOP:
      return {
        ...state,
        recorderState: 'stop',
      };
    case actions.PLAY:
      return {
        ...state,
        recorderState: 'play',
      };
    default:
      throw new Error(`Action ${action.type} not found`);
  }
}

export const Context = createContext();

export function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
