import React from 'react';

import './HeaderPokedex.sass';

import TitleBar from '../../molecules/TitleBar/TitleBar';

import Pokeball from './../../../assets/images/pokeball.png';

function HeaderPokedex() {
  return (
    <React.Fragment>
      <div className="o-pokemon-title">
        <TitleBar image={Pokeball} text="Pokedex"></TitleBar>
      </div>
    </React.Fragment>
  );
}

export default HeaderPokedex;
