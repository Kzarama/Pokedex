import './MainPokedex.sass';

// Components
import Title from '../../atoms/Title/Title';
import StatsPokemon from '../../molecules/StatsPokemon/StatsPokemon';

// Main of Pokedex
function MainPokedex(props: {
  image: string;
  altImage: string;
  text: string;
  imagePokemon: string;
  altImagePokemon: string;
  stats: {
    number: string;
    level: string;
    type: string;
    ability: string;
    height: string;
    weight: string;
  };
}) {
  return (
    <div className="o-main__container">
      <div className="o-main_title_pokemon__container">
        <div className="o-titlebar__container">
          <Title
            image={props.image}
            altImage={props.altImage}
            text={props.text}
          />
        </div>
        <img
          className="o-pokemon__img"
          src={props.imagePokemon}
          alt={props.altImagePokemon}
        />
      </div>

      <div className="o-stats__container">
        <StatsPokemon stats={props.stats} />
      </div>
    </div>
  );
}

export default MainPokedex;
