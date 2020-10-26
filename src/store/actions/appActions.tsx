import GameService from '../../services/gameService';
import { IGameState, IParticipant, IPhase } from '../serverInterfaces';
import {
  GET_GAME_STATE, GET_PARTICIPANTS, GET_PHASE, GET_PHASES
} from '../types';

const gameService = new GameService();


export const getGameStateSuccess = (gameState: IGameState): object => ({
  type: GET_GAME_STATE,
  gameState: gameState
});

export const getPhasesSuccess = (phases: IPhase[]): object => ({
  type: GET_PHASES,
  phases: phases
});

export const getPhaseSuccess = (phase: IPhase): object => ({
  type: GET_PHASE,
  phase: phase
});

export const getParticipantsSuccess = (participants: IParticipant[]): object => ({
  type: GET_PARTICIPANTS,
  participants: participants
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

export const setGameState = (state: number) => {
  return (dispatch: any) => {
    gameService
      .setGameState(state)
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

export const getParticipants = () => {
  return (dispatch: any) => {
    gameService
      .getParticipants()
      .then((response: any) => {
        dispatch(getParticipantsSuccess(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};

export const setParticipant = (code: string, phase: number) => {
  return (dispatch: any) => {
    gameService
      .setParticipantPhase(code, phase)
      .then((response: any) => {
        gameService
        .getParticipants()
          .then((response: any) => {
            dispatch(getParticipantsSuccess(response.data));
          })
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};