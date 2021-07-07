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
          <span className="secondary_text label_number_stat">N° </span>
          <span className="primary_text number_stat">006 </span>
          <span className="secondary_text label_level_stat">LEVEL </span>
          <span className="primary_text level_stat">100 </span>
          <span className="secondary_text label_type_stat">TYPE </span>
          <span className="primary_text type_stat">FIRE </span>
          <span className="secondary_text label_ability_stat">ABILITY </span>
          <span className="primary_text ability_stat">FLAMES </span>
          <span className="secondary_text label_height_stat">HEIGHT </span>
          <span className="primary_text height_stat">1.7 m </span>
          <span className="secondary_text label_weight_stat">WEIGHT </span>
          <span className="primary_text weight_stat">90.5 Kg </span>
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
