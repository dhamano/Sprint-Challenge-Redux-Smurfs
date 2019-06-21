import React from 'react';

const SmurfInfo = props => {
  return (
    <div className="smurf-info-card">
      <dl id={props.smurfInfo.id}>
        <dt>Name:</dt>
        <dd>{props.smurfInfo.name}</dd>
        <dt>Age:</dt>
        <dd>{props.smurfInfo.age}</dd>
        <dt>Height:</dt>
        <dd>{props.smurfInfo.height}</dd>
      </dl>
      <button onClick={props.editItem}>edit smurf</button>
    </div>
  )
}

export default SmurfInfo;