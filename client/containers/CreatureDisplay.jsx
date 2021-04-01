import React from 'react';

const CreatureDisplay = (props) => {
  const { name, dmgtaken, ac, _id} = props;
  // console.log(_id);

  const deleteCreature = (event) => {
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
  };

  return (
    <div>
      <h4>{name}</h4>
      <h5>Damage Taken: </h5>
      {dmgtaken}
      <h5>AC: </h5>
      {ac}
      <div>
        <button type="button" onClick={deleteCreature}>DELETE</button>
      </div>
    </div>
  );
}

export default CreatureDisplay;
