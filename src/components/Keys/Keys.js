import React from 'react';
import './keys.css'

function Keys({ value, name }) {
  return (
    <div className={`keyGroup key1${name}`}>
      <span className={`keysWrapper key${name}`}>
        <h4 className="symbol">{value}</h4>
      </span>
    </div>
  );
}

export default Keys;
