import './App.css';

// images
import pokeball from './images/pokeball.png';
import charizard from './images/charizard.png';
import fire from './images/fire.png';
import krookodile from './images/krookodile.png';
import lycanroc from './images/lycanroc.png';
import meltan from './images/meltan.png';
import zangoose from './images/zangoose.png';

function App() {
  return (
    <div className="App">
      {/* header */}
      <div className="pokedex-header">
        <h1>
          <a href="https://github.com/Kzarama/Pokedex">
            <img className="pokedex-title__img" src={pokeball} alt="" />
          </a>
          Pokedex
        </h1>
      </div>
      {/* main */}
      <div className="pokedex-main">
        <div className="pokemon-name__container">
          <h1>
            <img className="pokemon-type__img" src={fire} alt="" />
            CHARIZARD
          </h1>
        </div>
        <img className="main-pokemon__img" src={charizard} alt="" />
        <div className="stats__container">
          <span className="secondary-span--grey secondary-span-number--position">
            N°
          </span>
          <span className="primary-span--black primary-span-number--position">
            006
          </span>
          <span className="secondary-span--grey secondary-span-level--position">
            LEVEL
          </span>
          <span className="primary-span--black primary-span-level--position">
            100
          </span>
          <span className="secondary-span--grey secondary-span-type--position">
            TYPE
          </span>
          <span className="primary-span--black primary-span-type--position">
            FIRE
          </span>
          <span className="secondary-span--grey secondary-span-ability--position">
            ABILITY
          </span>
          <span className="primary-span--black primary-span-ability--position">
            FLAMES
          </span>
          <span className="secondary-span--grey secondary-span-height--position">
            HEIGHT
          </span>
          <span className="primary-span--black primary-span-height--position">
            1.7 m
          </span>
          <span className="secondary-span--grey secondary-span-weight--position">
            WEIGHT
          </span>
          <span className="primary-span--black primary-span-weight--position">
            90.5 Kg
          </span>
        </div>
      </div>
      {/* footer */}
      <div className="pokedex-footer">
        <h1>Others:</h1>
        <img className="others__img" src={krookodile} alt="" />
        <img className="others__img" src={lycanroc} alt="" />
        <img className="others__img" src={meltan} alt="" />
        <img className="others__img" src={zangoose} alt="" />
      </div>
    </div>
  );
}

export default App;
