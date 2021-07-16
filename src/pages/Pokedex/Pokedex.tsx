import React from 'react';

import FooterPokedex from '../../components/organisms/FooterPokedex/FooterPokedex';
import HeaderPokedex from '../../components/organisms/HeaderPokedex/HeaderPokedex';
import MainPokedex from '../../components/organisms/MainPokedex/MainPokedex';

import './Pokedex.sass';

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
