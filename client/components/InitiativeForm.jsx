import React, { Component, useState } from 'react';

const InitiativeForm = function(props) {
  const { setName, setInitiative, handleSubmit, getCreatures } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Initiative Form</h3>
      <label>
        Name:
        <input
          name="name"
          type="text"
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <div>
        <label>
          Initiative:
          <input
            name="initiative"
            type="number"
            onChange={(event) => setInitiative(event.target.value)}
            required
          />
        </label>
      </div>
      <div><input type="submit" value="Submit" /></div>
      <div><button type="button" onClick={(event) => getCreatures(event)}>Test GET</button></div>
    </form>
  );
};

export default InitiativeForm;
