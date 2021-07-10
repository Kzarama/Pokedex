import React from 'react';

import './MainPokedex.css';

import TitleBar from '../../molecules/TitleBar/TitleBar';
import StatsPokemon from '../../molecules/StatsPokemon/StatsPokemon';

import Fire from './../../../assets/images/fire.png';
import Charizard from './../../../assets/images/charizard.png';

function MainPokedex() {
  return (
    <React.Fragment>
      <div className="o-main__container">
        <div className="o-titlebar__container">
          <TitleBar image={Fire} text="Charizard"></TitleBar>
        </div>
        <img className="o-pokemon__img" src={Charizard} alt="" />

        <div className="o-stats__container">
          <StatsPokemon></StatsPokemon>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainPokedex;
