import React, { Component } from 'react';
import { render } from 'react-dom';
import InitiativeForm from './InitiativeForm.jsx';
import InitiativesDisplay from './InitiativesDisplay.jsx';
import MainContainer from '../containers/MainContainer.jsx'
import RoundDisplay from './RoundDisplay.jsx';
import InitiativeContainer from '../containers/InitiativeContainer.jsx';

function App() {
  return (
    <div>
      {/* <InitiativeForm /> */}
      {/* <InitiativesDisplay /> */}
      <MainContainer>
        <RoundDisplay />
        <InitiativeContainer />
      </MainContainer>
    </div>
  );
}

export default App;
