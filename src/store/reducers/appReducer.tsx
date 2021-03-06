import {
  GET_GAME_STATE,
  GET_PARTICIPANTS,
  GET_PHASE,
  GET_PHASES,
  SET_GAME_STATE,
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
    case SET_GAME_STATE:
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
    case GET_PARTICIPANTS:
      return {
        ...state,
        participants: action.participants
      };
    default:
      return state;
  }
};
