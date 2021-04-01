import React, { Component } from 'react';
import Creature from '../containers/CreatureDisplay.jsx';

const InitiativesDisplay = function(props) {
  // constructor(props) {
  //   super(props);
  // }

  // render() {
    return (
      <div>
        <h3>Initiatives Display</h3>
        <Creature
          name="creature 1"
          dmgtaken={4}
          ac={10}
        />
      </div>
    );
  // }
}

export default InitiativesDisplay;
