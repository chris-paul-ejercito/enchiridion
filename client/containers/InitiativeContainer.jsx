import React, { Component, useState } from 'react';
import InitiativeForm from '../components/InitiativeForm.jsx';
import InitiativesDisplay from '../components/InitiativesDisplay.jsx';

const InitiativeContainer = function(props) {
  const [creatures, setCreatures] = useState([]);
  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState(0);

  // render() {
    return (
      <div>
        <h2>Initiative Container</h2>
        <div>
          <InitiativeForm
            name={name}
            creatures={creatures}
            setName={setName}
            setInitiative={setInitiative}
          />
        </div>
        <div>
          <InitiativesDisplay
            creatures={creatures}
          />
        </div>
      </div>
    );
  // }
};

export default InitiativeContainer;
