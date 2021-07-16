import React from 'react';

import './Stat.sass';

function Stat(props: any) {
  return (
    <React.Fragment>
      <div className="a-stat__container">
        <span className="a-secondary__text">{props.title}</span>
        <span className="a-primary__text">{props.stat}</span>
      </div>
    </React.Fragment>
  );
}

export default Stat;
