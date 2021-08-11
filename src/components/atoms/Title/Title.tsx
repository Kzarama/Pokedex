import './Title.sass';

// Image and title
function Title(props: { image: string; altImage: string; text: string }) {
    return (
        <h1 className="a-pokedex-title__text">
            <img className="a-pokeball__img" src={props.image} alt={props.altImage} />
            {props.text}
        </h1>
    );
}

export default Title;
