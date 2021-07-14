import React from 'react';

import './Title.css';

function Title(props: any) {
  return (
    <React.Fragment>
      <h1 className="a-pokedex-title__text">
        <img className="a-pokeball__img" src={props.image} alt="pokeball" />
        {props.text}
      </h1>
    </React.Fragment>
  );
}

export default Title;
