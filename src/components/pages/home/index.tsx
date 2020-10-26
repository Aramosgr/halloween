import React, { useEffect, useState } from 'react';
import { logo } from '../../../assets/images';
import { happy } from '../../../assets/images';

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
      <div className="home">
        <div className="home__title">
          <img src={logo} className="home__title--logo" />
          <h3 className="home__title--text">La primera regla de la sociedad, es que no hablamos de la sociedad</h3 >
        </div>
        <p className="home__main-text">
          Si estás leyendo esta página, enhorabuena, tú serás el siguiente en dar el paso.
            <br /><br />Bienvenido a la sociedad.
            En este mundo que nos rodea, lleno de odio, pecado, suciedad, lascivia, libertinaje, amoralidad... alguien
            tiene que levantarse y decir, basta!
            <br /><br />
            Tú eres ese alguien, las pobres almas de este mundo necesitan guía y nosotros, con tu ayuda, podemos dársela.
            <br /><br />
            Tan sólo tienes que escribir tu nombre, estás a un paso de cambiar el mundo.
          </p>
        <div>
          <input id="name" type="text" onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleNameChange(event.target.value)} />
          <button id="submit" onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleNameClick()} >ÚNETE</button>
        </div>
        <div className="home__msg">
        {showText && submit ?
          <div className="home__msg--text">GRACIAS!</div>
          : ""}
          </div>
        <img src={happy} className="home__footer" />
      </div >
    </>
  );
}

export default Home;
