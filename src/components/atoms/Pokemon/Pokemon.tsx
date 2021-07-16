import React from 'react';

import './Pokemon.sass';

function Pokemon(props: any) {
  return (
    <React.Fragment>
      <img className="a-others__img" src={props.images} alt="" />
    </React.Fragment>
  );
}

export default Pokemon;
