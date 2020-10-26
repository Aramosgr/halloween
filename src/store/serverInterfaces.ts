export interface IRootState {
  AppReducer: any;
}

export interface IGameState {
  id: number;
  state: number;
  title: string;
  totalPhases: number;
}

export interface IPhase {
  id: number;
  name: string;
  text: string;
  title: string;
  password: string;
  passwordText: string;
}

export interface IParticipant {
  id: number;
  member1: string;
  member2: string;
  phase: number;
  code: string;
}
