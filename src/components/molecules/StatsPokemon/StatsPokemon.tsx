import './StatsPokemon.sass';

// Components
import Stat from '../../atoms/Stat/Stat';

// Set of stats
function StatsPokemon(props: {
    stats: {
        number: string;
        type: string;
        experience: string;
        ability: string;
        height: string;
        weight: string;
    };
}) {
    return (
        <div className="m-stats__container">
            <Stat title={'N°'} stat={props.stats.number} />
            <Stat title={'TYPE'} stat={props.stats.type} />
            <Stat title={'EXPERIENCE'} stat={props.stats.experience} />
            <Stat title={'ABILITY'} stat={props.stats.ability} />
            <Stat title={'HEIGHT'} stat={props.stats.height} />
            <Stat title={'WEIGHT'} stat={props.stats.weight} />
        </div>
    );
}

export default StatsPokemon;
