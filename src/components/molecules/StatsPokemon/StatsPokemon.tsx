import './StatsPokemon.sass';

// Components
import Stat from '../../atoms/Stat/Stat';

// Set of stats
function StatsPokemon(props: {
  stats: {
    number: string;
    level: string;
    type: string;
    ability: string;
    height: string;
    weight: string;
  };
}) {
  return (
    <div className="m-stats__container">
      <Stat title={'N°'} stat={props.stats.number} />
      <Stat title={'LEVEL'} stat={props.stats.level} />
      <Stat title={'TYPE'} stat={props.stats.type} />
      <Stat title={'ABILITY'} stat={props.stats.ability} />
      <Stat title={'HEIGHT'} stat={props.stats.height} />
      <Stat title={'WEIGHT'} stat={props.stats.weight} />
    </div>
  );
}

export default StatsPokemon;
