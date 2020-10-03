import {
  GET_GAME_STATE,
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
    default:
      return state;
  }
};
