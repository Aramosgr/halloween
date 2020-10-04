export interface IRootState {
  AppReducer: any;
}

export interface IGameState {
  id: number;
  state: number;
  title: string;
}

export interface IPhase {
  id: number;
  name: string;
  text: string;
  title: string;
  password: number;
  passwordText: string;
}
