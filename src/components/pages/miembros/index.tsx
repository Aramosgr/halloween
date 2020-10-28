import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getParticipantImg } from '../../../assets/images/participants/getParticipantImg';
import { getGameState, getParticipants, getPhases } from '../../../store/actions/appActions';
import { IGlobalState } from '../../../store/initialState';
import { IParticipant, IPhase, IRootState } from '../../../store/serverInterfaces';
import Level1 from '../level1';

import './miembros.scss';
import img_logo from '../../../assets/images/logo.png';

export interface IMiembrosProps {
  match: any
}

const Miembros = (props: IMiembrosProps) => {
  const dispatch = useDispatch();
  const appReducer: IGlobalState = useSelector((state: IRootState) => state.AppReducer);
  const [participant, setParticipant] = useState<IParticipant>();
  const [currentPhase, setCurrentPhase] = useState<IPhase>();

  useEffect(() => {
    dispatch(getGameState());
    dispatch(getPhases());
    dispatch(getParticipants());
  }, [dispatch]);

  useEffect(() => {
    if (appReducer.participants) {
      setParticipant(appReducer.participants.find((participant: IParticipant) => participant.code === props.match.params.code))
    }
  }, [appReducer.participants, setParticipant, props.match.params.code]);

  useEffect(() => {
    if (appReducer.phases && appReducer.gameState) {
      if (currentPhase?.id !== appReducer.gameState.state) {
        setCurrentPhase(appReducer.phases[appReducer.gameState.state - 1]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appReducer]);

  const getLevel = () => {
    if (!participant) return null;
    switch (participant.phase) {
      case 1: return <Level1 />;
      default: return null;
    }
  }

  return (
    <>
      {currentPhase ?
        <div className="miembros container">
          <div className="miembros__logo row mb-3 justify-content-center">
            <img src={img_logo}  alt="logo sociedad"/>
          </div>
          <div className="row mb-3 justify-content-center">
            <h5 className="text-light">La primera regla de la sociedad, es que no hablamos de la sociedad AAAAAAAAA</h5 >
          </div>
          
          <div className="miembros__content row justify-content-center">
            <div className="miembros__content--img">
              {getParticipantImg(participant?.code).map((img: any, index: number) => {
                return (
                  <>
                    <img className="miembros__miembro" src={img} alt="" />
                    {index === 0 ?
                      <div className="miembros__hello">
                        {`Hola ${participant?.member1} y ${participant?.member2}`}
                      </div>
                      : ""}
                  </>
                )
              })}
            </div>


            <div className="miembros__miembro"></div>
          </div>
          {getLevel()}
        </div >
        : ""
      }
    </>
  );
}

export default Miembros;
