import React from 'react';

import './TitleBar.sass';

import Title from '../../atoms/Title/Title';

function TitleBar(props: any) {
  return (
    <React.Fragment>
      <Title image={props.image} text={props.text}></Title>
    </React.Fragment>
  );
}

export default TitleBar;
