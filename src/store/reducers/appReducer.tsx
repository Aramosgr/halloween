import {
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
    default:
      return state;
  }
};
