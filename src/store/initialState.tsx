import { IGameState, IParticipant, IPhase } from "./serverInterfaces";

export default {
  token: undefined,
  gameState: undefined,
  phases: undefined,
  phase: undefined,
  participants: undefined,
};

export interface IGlobalState {
  token: string,
  gameState: IGameState,
  phases: IPhase[],
  phase: IPhase,
  participants: IParticipant[]
}
