import React from 'react';

import './OtherPokemon.css';

function OtherPokemon(props: any) {
  return (
    <React.Fragment>
      <img className="a-others__img" src={props.images} alt="" />
    </React.Fragment>
  );
}

export default OtherPokemon;