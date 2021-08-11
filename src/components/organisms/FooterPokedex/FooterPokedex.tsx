import './FooterPokedex.sass';

// Components
import OtherPokemon from '../../atoms/Pokemon/Pokemon';

// Other pokemons to use in the footer
function FooterPokedex(props: {
    images: {
        image: string;
        altImage: string;
        id: number;
    }[];
}) {
    return (
        <footer className="o-footer__container">
            <span className="o-footer__label">Others:</span>
            <OtherPokemon
                image={props.images[0].image}
                altImage={props.images[0].altImage}
                id={props.images[0].id}
            />
            <OtherPokemon
                image={props.images[1].image}
                altImage={props.images[1].altImage}
                id={props.images[1].id}
            />
            <OtherPokemon
                image={props.images[2].image}
                altImage={props.images[2].altImage}
                id={props.images[2].id}
            />
            <OtherPokemon
                image={props.images[3].image}
                altImage={props.images[3].altImage}
                id={props.images[3].id}
            />
        </footer>
    );
}

export default FooterPokedex;
