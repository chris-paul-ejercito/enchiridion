import React from 'react';

const InitiativeDisplay = (props) => {
  const { initiative, children } = props;
  return (
    <div>
      <h3>{ initiative }</h3>
      { children }
    </div>
  );
};

export default InitiativeDisplay;
