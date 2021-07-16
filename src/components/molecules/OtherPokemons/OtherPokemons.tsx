import './OtherPokemons.sass';

// Components
import OtherPokemon from '../../atoms/Pokemon/Pokemon';

// Other pokemons to use in the footer
function OtherPokemons(props: {
  images: {
    image: string;
    altImage: string;
  }[];
}) {
  return (
    <footer className="m-others__container">
      <span className="m-others__label">Others:</span>
      <OtherPokemon
        image={props.images[0].image}
        altImage={props.images[0].altImage}
      />
      <OtherPokemon
        image={props.images[1].image}
        altImage={props.images[1].altImage}
      />
      <OtherPokemon
        image={props.images[2].image}
        altImage={props.images[2].altImage}
      />
      <OtherPokemon
        image={props.images[3].image}
        altImage={props.images[3].altImage}
      />
    </footer>
  );
}

export default OtherPokemons;
