import React, { Component, useState } from 'react';

const InitiativeForm = function(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     initiative: 0,
  //   };

  //   this.handleChangeName = this.handleChangeName.bind(this);
  //   this.handleChangeInitiative = this.handleChangeInitiative.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleTest = this.handleTest.bind(this);
  // }

  // handleChangeName(event) {
  //   this.setState({ name: event.target.value });
  // }

  // handleChangeInitiative(event) {
  //   this.setState({ initiative: event.target.value });
  // }

  const handleSubmit = (event) => {
    const { name, initiative } = props;
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
      .catch(err => console.log('could not send to server', err));
  };

  const handleTest = (event) => {
    event.preventDefault();
    fetch('/api/', {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
      .then(res => res.json())
      .then((data) => {
        console.log('handleTest', data);
        // console.log('creatures', props.creatures);
        console.log('props.name', props.name);
      })
      .catch(err => console.log('could not GET from server', err));
  };

  // render() {
    return (
      <form onSubmit={handleSubmit}>
        <h3>Initiative Form</h3>
        <label>
          Name:
          <input
            name="name"
            type="text"
            onChange={(event) => props.setName(event.target.value)}
          />
        </label>
        <div>
          <label>
            Initiative:
            <input
              name="initiative"
              type="number"
              value={props.initiative}
              onChange={props.setInitiative}
            />
          </label>
        </div>
        <div><input type="submit" value="Submit" /></div>
        <div><button type="button" onClick={handleTest}>Test GET</button></div>
      </form>
    );
  // }
}

export default InitiativeForm;
