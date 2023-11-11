import React from 'react';
import styles from './ThemeControler.module.css'
import { Theme1, Theme2, Theme3 } from '../../utils';


import { ThemeColorContext } from '../App/App';

function ThemeControler() {
const { theme, setTheme } = React.useContext(ThemeColorContext);
const [volume, setVolume] = React.useState(1)

React.useEffect(()=>{
  const volumeN = Number(volume);

 if (volumeN === 1) {
   setTheme(Theme1);
 } else if (volumeN === 2) {
   setTheme(Theme2);
 } else if (volumeN === 3) {
   setTheme(Theme3);
 }
}, [volume, setTheme])
  return (
    <div className={`${styles.themeGroup}`}>
      <form className={`${styles.themeWrapper}`} onSubmit={event => {
        event.preventDefault()
      }}>
        <label htmlFor="theme-slider" className={`${styles.themeLabel}`}>
          THEME
        </label>
        <div className={`${styles.sliderWrapper}`}>
          <span>
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
          </span>
          <input
            type="range"
            id="theme-slider"
            min={1}
            step={1}
            max={3}
            value={volume}
            onChange={event => {
              setVolume(event.target.value)
            }}
            className={`${styles.themeRange}`}
          />
        </div>
      </form>
    </div>
  );
}

export default ThemeControler;
