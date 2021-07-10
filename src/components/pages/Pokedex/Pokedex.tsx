import React from 'react';

import FooterPokedex from '../../organisms/FooterPokedex/FooterPokedex';
import HeaderPokedex from '../../organisms/HeaderPokedex/HeaderPokedex';
import MainPokedex from '../../organisms/MainPokedex/MainPokedex';

import './Pokedex.css';

function Pokedex() {
  return (
    <React.Fragment>
      <div className="Pokedex__container">
        <HeaderPokedex></HeaderPokedex>
        <MainPokedex></MainPokedex>
        <FooterPokedex></FooterPokedex>
      </div>
    </React.Fragment>
  );
}

export default Pokedex;
