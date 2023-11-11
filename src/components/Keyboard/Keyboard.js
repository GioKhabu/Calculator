import React from 'react';
import { keyboardKeys } from '../../utils.js';
import Keys from '../Keys';
import styles from './Keyboard.module.css';

function Keyboard() {
  const id = React.useId();
  return (
    <div className={`${styles.keyboardWrapper}`}>
        {keyboardKeys.map((value, index) => {
          const item = Object.values(value)[0];
          const name = Object.keys(value)[0];
          return <Keys key={`${item}-${id}`} value={item} name={name} selector={`key${name}`} />;
        })}
      </div>
  );
}

export default Keyboard;
