import GameService from '../../services/gameService';
import { IGameState } from '../serverInterfaces';
import {
  GET_GAME_STATE
} from '../types';

const gameService = new GameService();


export const getGameStateSuccess = (gameState: IGameState): object => ({
  type: GET_GAME_STATE,
  gameState: gameState
});

export const getGameState = () => {
  return (dispatch: any) => {
    gameService
      .getGameState()
      .then((response: any) => {
        dispatch(getGameStateSuccess(response.data?));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};