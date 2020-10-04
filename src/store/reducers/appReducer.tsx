import {
  GET_GAME_STATE,
  GET_PHASE,
  GET_PHASES,
  TOKEN
} from '../types';

import initialState from '../initialState';

export default (state: any = initialState, action: any): any => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.token
      };
    case GET_GAME_STATE:
      return {
        ...state,
        gameState: action.gameState
      };
    case GET_PHASES:
      return {
        ...state,
        phases: action.phases
      };
    case GET_PHASE:
      return {
        ...state,
        phases: action.phase
      };
    default:
      return state;
  }
};
