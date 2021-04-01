import React, { Component, useEffect, useState } from 'react';
import InitiativeForm from '../components/InitiativeForm.jsx';
import InitiativesDisplay from '../components/InitiativesDisplay.jsx';

const InitiativeContainer = (props) => {
  const [creatures, setCreatures] = useState([]);
  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState(0);

  const getCreatures = () => {
    // event.preventDefault();
    fetch('/api/', {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatures(data);
      })
      .catch(err => console.log('could not GET from server', err));
  };

  const handleSubmit = () => {
    // event.preventDefault();
    fetch('/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ name, initiative }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(err => console.log('could not send to server', err));
  };

  useEffect(() => {
    console.log('useEffect');
    // getCreatures();
  });

  // render() {
    return (
      <div>
        <h2>Initiative Container</h2>
        <div>
          <InitiativeForm
            setName={setName}
            setInitiative={setInitiative}
            handleSubmit={handleSubmit}
            getCreatures={getCreatures}
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
