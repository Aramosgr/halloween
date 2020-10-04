import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGameState, getPhases } from '../../../store/actions/appActions';
import { IPhase, IRootState } from '../../../store/serverInterfaces';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const AppReducer = useSelector((state: IRootState) => state.AppReducer);
  const [currentPhase, setCurrentPhase] = useState<IPhase>();
  useEffect(() => {
    dispatch(getGameState());
    dispatch(getPhases());
  }, [dispatch]);

  useEffect(() => {
    if (AppReducer.phases && AppReducer.gameState) {
      setCurrentPhase(AppReducer.phases[AppReducer.gameState.state - 1]);
    }
  }, [AppReducer]);

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);

  }

  return (
    <>
      {currentPhase ?
        <div className="Home">
          <h3>{currentPhase.title}</h3 >
          <p>{currentPhase.text}</p>
          <div>
            {currentPhase.passwordText}
            <input onChange={(event: React.FormEvent<HTMLInputElement>) => handlePasswordChange(event)}></input>
          </div>
        </div >
        : ""
      }
    </>
  );
}

export default Home;
