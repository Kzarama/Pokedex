import React from 'react';
import PokemonStat from '../../atoms/PokemonStat/PokemonStat';

import './StatsPokemon.css';

function StatsPokemon(props: any) {
  return (
    <React.Fragment>
      <div className="m-stats__container">
        <PokemonStat title={'N°'} stat={'006'}></PokemonStat>
        <PokemonStat title={'LEVEL'} stat={'100'}></PokemonStat>
        <PokemonStat title={'TYPE'} stat={'FIRE'}></PokemonStat>
        <PokemonStat title={'ABILITY'} stat={'FLAMES'}></PokemonStat>
        <PokemonStat title={'HEIGHT'} stat={'1.7 m'}></PokemonStat>
        <PokemonStat title={'WEIGHT'} stat={'90.5 Kg'}></PokemonStat>
      </div>
    </React.Fragment>
  );
}

export default StatsPokemon;
