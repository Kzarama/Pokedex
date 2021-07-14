import React from 'react';
import Stat from '../../atoms/Stat/Stat';

import './StatsPokemon.css';

function StatsPokemon(props: any) {
  return (
    <React.Fragment>
      <div className="m-stats__container">
        <Stat title={'N°'} stat={'006'}></Stat>
        <Stat title={'LEVEL'} stat={'100'}></Stat>
        <Stat title={'TYPE'} stat={'FIRE'}></Stat>
        <Stat title={'ABILITY'} stat={'FLAMES'}></Stat>
        <Stat title={'HEIGHT'} stat={'1.7 m'}></Stat>
        <Stat title={'WEIGHT'} stat={'90.5 Kg'}></Stat>
      </div>
    </React.Fragment>
  );
}

export default StatsPokemon;
