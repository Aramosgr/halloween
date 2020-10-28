import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSound from 'use-sound';
import { IGlobalState } from '../../../store/initialState';
import { IParticipant, IRootState } from '../../../store/serverInterfaces';
import './level1.scss';
import {note1, note2,note3,note4,note5} from '../../../assets/sounds';

export interface ILevel1Props {
}

const Level1 = (props: ILevel1Props) => {
  const dispatch = useDispatch();
  const appReducer: IGlobalState = useSelector((state: IRootState) => state.AppReducer);
  const [playNote1] = useSound(note1);
  const [playNote2] = useSound(note2);
  const [playNote3] = useSound(note3);
  const [playNote4] = useSound(note4);
  const [playNote5] = useSound(note5);

  // const handlePasswordChange = (password: string) => {
  //   const checkPassword = setTimeout(() => {
  //     if (password.toLowerCase() === currentPhase?.password.toLowerCase()) {
  //       if (appReducer.gameState.totalPhases > appReducer.gameState.state) {
  //         dispatch(setGameState(appReducer.gameState.state + 1));
  //         document.getElementById("password")!.innerText = "";
  //       }
  //     }
  //   }, 2000);

  //   return () => clearTimeout(checkPassword);
  // } DCH A ABAJO DCH A ABJ

  const playNote = (note: number) => {
    switch (note) {
      case 1: playNote1(); break;
      case 2: playNote2(); break;
      case 3: playNote3(); break;
      case 4: playNote4(); break;
      case 5: playNote5(); break;
    }
  }

  return (
    <div className="row mt-5 pb-3 pt-1 bg-dark">
      <button className={"note note1 col mr-1"} onClick={() => playNote(1)}></button>
      <button className={"note note2 col mr-1"} onClick={() => playNote(2)}></button>
      <button className={"note note3 col mr-1"} onClick={() => playNote(3)}></button>
      <button className={"note note4 col mr-1"} onClick={() => playNote(4)}></button>
      <button className={"note note5 col"} onClick={() => playNote(5)}></button>
    </div>
  );
}

export default Level1;
