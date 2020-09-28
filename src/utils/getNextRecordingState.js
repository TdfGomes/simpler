import { RECORD, STOP, PLAY } from '../store/actions';

const nextStateAndAction = {
  inactive: {
    action: RECORD,
    state: 'record',
  },
  record: {
    action: STOP,
    state: 'stop',
  },
  stop: {
    action: PLAY,
    state: 'play',
  },
  play: {
    action: STOP,
    state: 'stop',
  },
};

export const getNextState = currentState => nextStateAndAction[currentState].state;
export const getNextAction = currentAction => nextStateAndAction[currentAction].action;
