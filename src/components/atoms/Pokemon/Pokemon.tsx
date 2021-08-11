import './Pokemon.sass';

// Pokemon image to use in the footer in the other section
function Pokemon(props: { image: string; altImage: string, id: number }) {

    const handleClick = () => {
        sessionStorage.setItem('idSelected', props.id + '');
        window.location.reload()
    }

    return (
        <img onClick={() => handleClick()} className="a-others__img" src={props.image} alt={props.altImage} />
    );
}

export default Pokemon;
