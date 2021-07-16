import './Pokemon.sass';

// Pokemon image to use in the footer in the other section
function Pokemon(props: { image: string; altImage: string }) {
  return (
    <img className="a-others__img" src={props.image} alt={props.altImage} />
  );
}

export default Pokemon;
