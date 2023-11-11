import React from 'react';
import styles from './ThemeControler.module.css'

function ThemeControler() {

  return (
    <div className={`${styles.themeGroup}`}>
      <form className={`${styles.themeWrapper}`}>
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
            className={`${styles.themeRange}`}
          />
        </div>
      </form>
    </div>
  );
}

export default ThemeControler;
