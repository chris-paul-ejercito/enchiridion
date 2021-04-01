import React, { Component } from 'react';
import Creature from '../containers/CreatureDisplay.jsx';
import Initiative from './InitiativeDisplay.jsx';

const InitiativesDisplay = (props) => {
  // constructor(props) {
  //   super(props);
  // }
  const { creatures } = props;
  const initiatives = new Set();

  const test = creatures.reduce((accumulator, creature) => {
    initiatives.add(creature.initiative);
    const {
      _id, name, dmgtaken, ac, initiative,
    } = creature;
    const component = (
      <Creature
        key={_id}
        _id={_id}
        name={name}
        dmgtaken={dmgtaken}
        ac={ac}
      />
    );
    if (!Object.prototype.hasOwnProperty.call(accumulator, initiative)) {
      accumulator[initiative] = [component];
    } else {
      accumulator[initiative].push(component);
    }
    return accumulator;
  }, {});

  const initiativeComponents = Array.from(initiatives).map((initiative) => (
    <Initiative
      key={`init_${initiative}`}
      initiative={initiative}
    >
      {test[initiative]}
    </Initiative>
  ));

  return (
    <div>
      <h3>Initiatives Display</h3>
      {initiativeComponents}
    </div>
  );
  // }
}

export default InitiativesDisplay;
