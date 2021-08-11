import { useEffect, useState } from 'react';

import './Pokedex.sass';

// Components
import PokedexTemplate from '../../templates/PokedexTemplate';

// Images
import pokeball from '../../assets/images/pokeball.png';

import { getPokemonById, getRandomPokemon } from '../../services/pokeapi';

// Pokedex layout
function Pokedex() {
    const [pokemon, setPokemon] = useState({ name: "", image: "", type: "", experience: "", ability: "", id: 0, height: 0, weight: 0 });
    const [pokemon1, setPokemon1] = useState({ name: "", image: "", id: 0 });
    const [pokemon2, setPokemon2] = useState({ name: "", image: "", id: 0 });
    const [pokemon3, setPokemon3] = useState({ name: "", image: "", id: 0 });
    const [pokemon4, setPokemon4] = useState({ name: "", image: "", id: 0 });

    useEffect(() => {
        (async () => {
            const id = sessionStorage.getItem('idSelected')
            if (id === null) {
                setPokemon(await getRandomPokemon())
            } else {
                setPokemon(await getPokemonById(id))
                sessionStorage.clear()
            }
            setPokemon1(await getRandomPokemon())
            setPokemon2(await getRandomPokemon())
            setPokemon3(await getRandomPokemon())
            setPokemon4(await getRandomPokemon())
        })()
    }, []);

    return (
        <PokedexTemplate
            // Title pokeball
            imageHeader={pokeball}
            altImageHeader={'pokeball image'}
            // Pokemon name
            textNamePokemonMain={pokemon.name}
            // Pokemon image
            imagePokemonMain={pokemon.image}
            altImagePokemonMain={pokemon.name}
            // Pokemon stats
            stats={{
                number: pokemon.id + "",
                type: pokemon.type,
                experience: pokemon.experience,
                ability: pokemon.ability,
                height: pokemon.height + ' m',
                weight: pokemon.weight + ' kg',
            }}
            // Other pokemons images
            footerImages={[
                {
                    image: pokemon1.image,
                    altImage: pokemon1.name,
                    id: pokemon1.id,
                },
                {
                    image: pokemon2.image,
                    altImage: pokemon2.name,
                    id: pokemon2.id,
                },
                {
                    image: pokemon3.image,
                    altImage: pokemon3.name,
                    id: pokemon3.id,
                },
                {
                    image: pokemon4.image,
                    altImage: pokemon4.name,
                    id: pokemon4.id,
                },
            ]}
        />
    );
}

export default Pokedex;
