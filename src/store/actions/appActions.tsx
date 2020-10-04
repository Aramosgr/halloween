import GameService from '../../services/gameService';
import { IGameState, IPhase } from '../serverInterfaces';
import {
  GET_GAME_STATE
} from '../types';

const gameService = new GameService();


export const getGameStateSuccess = (gameState: IGameState): object => ({
  type: GET_GAME_STATE,
  gameState: gameState
});

export const getPhasesSuccess = (phases: IPhase[]): object => ({
  type: GET_GAME_STATE,
  phases: phases
});

export const getPhaseSuccess = (phase: IPhase): object => ({
  type: GET_GAME_STATE,
  phase: phase
});

export const getGameState = () => {
  return (dispatch: any) => {
    gameService
      .getGameState()
      .then((response: any) => {
        dispatch(getGameStateSuccess(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};

export const getPhases = () => {
  return (dispatch: any) => {
    gameService
      .getPhases()
      .then((response: any) => {
        dispatch(getPhasesSuccess(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};

export const getPhase = (id: number) => {
  return (dispatch: any) => {
    gameService
      .getPhase(id)
      .then((response: any) => {
        dispatch(getPhaseSuccess(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};