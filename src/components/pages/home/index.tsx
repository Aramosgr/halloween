import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGameState } from '../../../store/actions/appActions';
import { IGameState, IRootState } from '../../../store/serverInterfaces';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const AppReducer = useSelector((state: IRootState) => state.AppReducer);
  const [state, setState] = useState<IGameState>();

  useEffect(() => {
    dispatch(getGameState());
  }, []);
  
  return (
    <div className="Home">
      <h3>Bienvenido/a,</h3> 
      A estas alturas blabla me da pereza copiar tanto, pasame el texto no la captura sonofabitch
      <div>
        {AppReducer.gameState.title}
      </div>
    </div>
  );
}

export default Home;
