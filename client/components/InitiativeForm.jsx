import React, { Component } from 'react';

class InitiativeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      initiative: 0,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeInitiative = this.handleChangeInitiative.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeInitiative(event) {
    this.setState({ initiative: event.target.value });
  }

  handleSubmit(event) {
    const { name, initiative } = this.state;
    console.log(name, initiative);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.value}
            onChange={this.handleChangeName}
          />
          <input
            name="initiative"
            type="number"
            value={this.state.value}
            onChange={this.handleChangeInitiative}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InitiativeForm;
