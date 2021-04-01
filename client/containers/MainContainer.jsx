import React from 'react';
// import RoundDisplay from '../components/RoundDisplay.jsx';
// import InitiativeContainer from './InitiativeContainer.jsx';

const MainContainer = function(props) {
  const { children } = props;
    return (
      <div>
        {/* <h1>Main Container</h1>
        <div><RoundDisplay /></div>
        <div><InitiativeContainer /></div> */}
        { children }
      </div>
    );
}

export default MainContainer;
