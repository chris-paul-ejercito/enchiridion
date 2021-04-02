import React, { Component, useEffect, useState } from 'react';
import InitiativeForm from '../components/InitiativeForm.jsx';
import InitiativesDisplay from '../components/InitiativesDisplay.jsx';

const InitiativeContainer = (props) => {
  const [creatures, setCreatures] = useState([]);
  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState(0);

  const getCreatures = () => {
    // event.preventDefault();
    console.log('getCreatures');
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

  const handleSubmit = (event) => {
    console.log('handleSubmit');
    event.preventDefault();
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
      .catch(err => console.log('could not POST to server', err));
    getCreatures();
  };

  const updateCreature = (event, _id, column) => {
    event.preventDefault();
    console.log('updateCreature _id column', _id, column, event.target.value);
    fetch('/api/', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        _id,
        column,
        value: event.target.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('updateCreature', data);
      })
      .catch(err => console.log('could not update creature ', name, err));
    getCreatures();
  };

  const deleteCreature = (event, _id) => {
    event.preventDefault();
    fetch('/api/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('deleteCreature', data);
      })
      .catch(err => console.log('could not delete creature ', name, err));
    getCreatures();
  };

  useEffect(() => {
    // console.log('useEffect');
    getCreatures();
  }, []);

  return (
    <div>
      <h2>Initiative Container</h2>
      <div>
        <InitiativeForm
          setName={setName}
          setInitiative={setInitiative}
          handleSubmit={handleSubmit}
        />
      </div>
      <div>
        <InitiativesDisplay
          creatures={creatures}
          deleteCreature={deleteCreature}
          updateCreature={updateCreature}
        />
      </div>
    </div>
  );
};

export default InitiativeContainer;
