import './PokedexTemplate.sass';

// Components
import HeaderPokedex from '../components/organisms/HeaderPokedex/HeaderPokedex';
import MainPokedex from '../components/organisms/MainPokedex/MainPokedex';
import OtherPokemons from '../components/organisms/FooterPokedex/FooterPokedex';

// Pokedex template layout
function PokedexTemplate(props: {
  imageHeader: string;
  altImageHeader: string;
  imageTypeMain: string;
  altImageTypeMain: string;
  textNamePokemonMain: string;
  imagePokemonMain: string;
  altImagePokemonMain: string;
  stats: {
    number: string;
    level: string;
    type: string;
    ability: string;
    height: string;
    weight: string;
  };
  footerImages: {
    image: string;
    altImage: string;
  }[];
}) {
  return (
    <div className="Pokedex__container">
      <HeaderPokedex
        image={props.imageHeader}
        altImage={props.altImageHeader}
      />
      <MainPokedex
        image={props.imageTypeMain}
        altImage={props.altImageTypeMain}
        text={props.textNamePokemonMain}
        imagePokemon={props.imagePokemonMain}
        altImagePokemon={props.altImagePokemonMain}
        stats={props.stats}
      />
      <OtherPokemons images={props.footerImages} />
    </div>
  );
}

export default PokedexTemplate;
