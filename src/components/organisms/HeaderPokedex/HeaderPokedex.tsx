import './HeaderPokedex.sass';

// Components
import Title from '../../atoms/Title/Title';

// Header of Pokedex
function HeaderPokedex(props: { image: string; altImage: string }) {
  return (
    <header className="o-pokemon-title">
      <Title image={props.image} altImage={props.altImage} text={'Pokedex'} />
    </header>
  );
}

export default HeaderPokedex;
