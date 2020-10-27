import React, { useEffect, useState } from 'react';
import { logo } from '../../../assets/images';
import { church } from '../../../assets/images';

import './home.scss';

const Home = () => {
  const [name, setName] = useState<string>();
  const [submit, setSubmit] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);
  
  useEffect(() => {
    const show = setTimeout(() => {
      setShowText(!showText);
    }, 500)
    return () => {
      clearTimeout(show);
    }
  }, [showText]);

  const handleNameChange = (name: string) => {
    const checkName = setTimeout(() => {
      setName(name);
    }, 2000);
    return () => clearTimeout(checkName);
  }

  const handleNameClick = () => {
    if (name && name.length >= 5) {
      setSubmit(true);
    } else {
      alert("No has introducido tu nombre");
    }
  }

  return (
    <>
      <div className="home container">

          <div className="miembros__logo row mb-3 justify-content-center">
            <img src={church}  className="img-fluid" alt="logo sociedad"/>
          </div>

          <div className="row mb-3 justify-content-center">
            <h5 className="text-light">La primera regla de la sociedad, es que no hablamos de la sociedad</h5 >
          </div>   

          <div className="row">
            <p className="home__main-text">
                En este mundo que nos rodea, lleno de pecado, suciedad, lascivia, libertinaje, amoralidad... alguien
                tiene que levantarse y decir, basta! El alma humana no está preparada para ser libre, necesita una directrices para llegar
                a su máxima expresión. Él te ayudará a conseguirlo.
            </p>

            <p className="home__main-text">
                ¿Quieres evolucionar tu alma? Nosotros podemos elevarte. ¿Estás preparado? Tan sólo tienes que escribir tu nombre, estás a un paso de cambiar el mundo.
              </p>
          </div>

          <div className="row justify-content-center">
            <input id="name" type="text" onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleNameChange(event.target.value)} />
            <button id="submit" onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleNameClick()} >ÚNETE</button>
          </div>

        <div className="home__msg row">
          {showText && submit ?
            <div className="home__msg--text">¡GRACIAS!</div>
            : ""}
        </div>


        
      </div >
    </>
  );
}

export default Home;
