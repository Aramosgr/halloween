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
    <>
      <button className={"note"} onClick={() => playNote(1)}>1</button>
      <button className={"note"} onClick={() => playNote(2)}>2</button>
      <button className={"note"} onClick={() => playNote(3)}>3</button>
      <button className={"note"} onClick={() => playNote(4)}>4</button>
      <button className={"note"} onClick={() => playNote(5)}>5</button>
    </>
  );
}

export default Level1;
