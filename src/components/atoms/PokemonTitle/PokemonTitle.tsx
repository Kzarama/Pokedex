import React from 'react';

import './PokemonTitle.css';

function PokemonTitle(props: any) {
  return (
    <React.Fragment>
      <h1 className="a-pokedex-title__text">
        <img className="a-pokeball__img" src={props.image} alt="pokeball" />
        {props.text}
      </h1>
    </React.Fragment>
  );
}

export default PokemonTitle;
