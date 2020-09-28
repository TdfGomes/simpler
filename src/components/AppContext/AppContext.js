import React, { createContext, useReducer, useMemo } from 'react';
import * as actions from '../../store/actions';

const initialState = {
  recorderState: 'inactive',
};

function reducer(state, action) {
  switch (action.type) {
    case actions.RECORD:
      return {
        recorderState: 'record',
      };
    case actions.STOP:
      return {
        recorderState: 'stop',
      };
    case actions.PLAY:
      return {
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
