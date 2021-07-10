import React from 'react';

import OtherPokemons from '../../molecules/OtherPokemons/OtherPokemons';
import './FooterPokedex.css';

import krookodile from '../../../assets/images/krookodile.png';
import lycanroc from '../../../assets/images/lycanroc.png';
import meltan from '../../../assets/images/meltan.png';
import zangoose from '../../../assets/images/zangoose.png';

function FooterPokedex() {
  return (
    <React.Fragment>
      <div className="o-footer__container">
        <OtherPokemons
          images={[krookodile, lycanroc, meltan, zangoose]}
        ></OtherPokemons>
      </div>
    </React.Fragment>
  );
}

export default FooterPokedex;
