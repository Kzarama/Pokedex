import React from 'react';
import OtherPokemon from '../../atoms/Pokemon/Pokemon';

import './OtherPokemons.sass';

function OtherPokemons(props: any) {
  return (
    <React.Fragment>
      <div className="m-others__container">
        <span className="m-others__label">Others:</span>
        <OtherPokemon images={props.images[0]}></OtherPokemon>
        <OtherPokemon images={props.images[1]}></OtherPokemon>
        <OtherPokemon images={props.images[2]}></OtherPokemon>
        <OtherPokemon images={props.images[3]}></OtherPokemon>
      </div>
    </React.Fragment>
  );
}

export default OtherPokemons;
