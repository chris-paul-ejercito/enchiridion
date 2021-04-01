import React, { Component, useState } from 'react';
import InitiativeForm from '../components/InitiativeForm.jsx';
import InitiativesDisplay from '../components/InitiativesDisplay.jsx';

class InitiativeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatures: [],
      form: {
        name: '',
        initiative: 0,
      },
    };
  }

  render() {
    const { creatures } = this.state;
    return (
      <div>
        <h2>Initiative Container</h2>
        <div>
          <InitiativeForm />
        </div>
        <div>
          <InitiativesDisplay
            creatures={creatures}
          />
        </div>
      </div>
    );
  }
};

export default InitiativeContainer;
