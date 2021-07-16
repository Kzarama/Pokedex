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
      imageHeader={pokeball}
      altImageHeader={'pokeball image'}
      imageTypeMain={fire}
      altImageTypeMain={'fire type image'}
      textNamePokemonMain={'Charizard'}
      imagePokemonMain={charizard}
      stats={{
        number: '006',
        level: '100',
        type: 'FIRE',
        ability: 'FLAMES',
        height: '1.7 m',
        weight: '90.5 kg',
      }}
      footerImages={[
        {
          image: krookodile,
          altImage: 'Krookodile',
        },
        {
          image: lycanroc,
          altImage: 'Lycanroc',
        },
        {
          image: meltan,
          altImage: 'Meltan',
        },
        {
          image: zangoose,
          altImage: 'Zangoose',
        },
      ]}
    />
  );
}

export default Pokedex;
