import './Stat.sass';

// Stat of pokemon
function Stat(props: { title: string; stat: string }) {
    return (
        <div className="a-stat__container">
            <span className="a-secondary__text">{props.title}</span>
            <span className="a-primary__text">{props.stat}</span>
        </div>
    );
}

export default Stat;
