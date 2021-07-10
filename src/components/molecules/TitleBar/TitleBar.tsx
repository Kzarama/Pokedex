import React from 'react';

import './TitleBar.css';

import PokemonTitle from '../../atoms/PokemonTitle/PokemonTitle';

function TitleBar(props: any) {
  return (
    <React.Fragment>
      <PokemonTitle image={props.image} text={props.text}></PokemonTitle>
    </React.Fragment>
  );
}

export default TitleBar;
