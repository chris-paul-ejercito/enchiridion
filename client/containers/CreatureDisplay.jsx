import React from 'react';

const CreatureDisplay = (props) => {
  const { name, dmgtaken, ac, _id, deleteCreature, updateCreature } = props;

  return (
    <div>
      <h4>{name}</h4>
      <h5>Damage Taken: </h5>
      <input
        type="number"
        // value={dmgtaken}
        defaultValue={dmgtaken}
        // onChange={(event) => {
        //   console.log(event.target.value);
        // }}
        onBlur={(event) => {
          updateCreature(event, _id, 'dmgtaken');
        }}
      />
      {/* {dmgtaken} */}
      <h5>AC: </h5>
      {ac}
      <div>
        <button type="button" 
          _id={_id}
          onClick={(event) => {
            deleteCreature(event, _id);
          }}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default CreatureDisplay;
