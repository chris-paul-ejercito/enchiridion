import React from 'react';

function CreatureDisplay(props) {
  const { name, dmgtaken, ac } = props;
  return (
    <div>
      <div>
        <h4>{name}</h4>
      </div>
      <div>{dmgtaken}</div>
      <div>{ac}</div>
    </div>
  );
}

export default CreatureDisplay;
