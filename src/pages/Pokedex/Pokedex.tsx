import './Pokedex.sass';

// Components
import PokedexTemplate from '../../templates/PokedexTemplate';

// Images
import pokeball from '../../assets/images/pokeball.png';
import fire from '../../assets/images/fire.png';
import charizard from '../../assets/images/charizard.png';
import krookodile from '../../assets/images/krookodile.png';
import lycanroc from '../../assets/images/lycanroc.png';
import meltan from '../../assets/images/meltan.png';
import zangoose from '../../assets/images/zangoose.png';

// Pokedex layout
function Pokedex() {
  return (
    <PokedexTemplate
      // Title pokeball
      imageHeader={pokeball}
      altImageHeader={'pokeball image'}
      // Type pokemon
      imageTypeMain={fire}
      altImageTypeMain={'fire type image'}
      // Pokemon name
      textNamePokemonMain={'Charizard'}
      // Pokemon image
      imagePokemonMain={charizard}
      altImagePokemonMain={'charizard image'}
      // Pokemon stats
      stats={{
        number: '006',
        level: '100',
        type: 'FIRE',
        ability: 'FLAMES',
        height: '1.7 m',
        weight: '90.5 kg',
      }}
      // Other pokemons images
      footerImages={[
        {
          image: krookodile,
          altImage: 'Krookodile image',
        },
        {
          image: lycanroc,
          altImage: 'Lycanroc image',
        },
        {
          image: meltan,
          altImage: 'Meltan image',
        },
        {
          image: zangoose,
          altImage: 'Zangoose image',
        },
      ]}
    />
  );
}

export default Pokedex;
