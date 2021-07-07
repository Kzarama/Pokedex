import './App.css';

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
      <div className="header">
        <h1>
          <img className="pokeball_title" src={pokeball} alt="" />
          Pokedex
        </h1>
      </div>

      <div className="main">
        <div className="pokemon_name_bar">
          <h1>
            <img className="name_type_image" src={fire} alt="" />
            Charizard
          </h1>
        </div>
        <img className="main_pokemon" src={charizard} alt="" />
        <div className="stats">
          <span className="secondary_text">N° </span>
          <span className="primary_text">006 </span>
          <span className="secondary_text">LEVEL </span>
          <span className="primary_text">100 </span>
          <span className="secondary_text">TYPE </span>
          <span className="primary_text">FIRE </span>
          <span className="secondary_text">HABILITY </span>
          <span className="primary_text">FLAMES </span>
          <span className="secondary_text">HEIGHT </span>
          <span className="primary_text">1.7 m </span>
          <span className="secondary_text">WEIGHT </span>
          <span className="primary_text">90.5 Kg </span>
        </div>
      </div>

      <div className="footer">
        <div className="others_container">
          <h1>Others:</h1>
          <img className="others" src={krookodile} alt="" />
          <img className="others" src={lycanroc} alt="" />
          <img className="others" src={meltan} alt="" />
          <img className="others" src={zangoose} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
