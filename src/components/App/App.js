import React from 'react';

import styles from  './App.module.css';
import '../Calculator'
import Calculator from '../Calculator';
import { Theme1, Theme2, Theme3 } from '../../utils';

function App() {
  const[theme, setTheme] = React.useState(Theme1)
  return (
    <div
      className={`${styles.App}`}
      style={{
        '--color-mainBackground': theme.mainBackground,
        '--color-screenBackground': theme.screenBackground,
        '--color-keypadBackground': theme.keypadBackground,

        '--color-keyBackground': theme.keyBackground,
        '--color-keyShadow': theme.keyShadow,

        '--color-equalKeyBackground': theme.equalKeyBackground,
        '--color-equalKeyBackgroundShadow': theme.equalKeyBackgroundShadow,

        '--color-secondaryKeyBackground': theme.secondaryKeyBackground,
        '--color-secondaryKeyBackShadow': theme.secondaryKeyBackShadow,

        '--color-headPanelText': theme.headPanelText,
        '--color-keyBoardText': theme.keyBoardText,
        '--color-primaryText': theme.primaryText,
        '--color-equalText': theme.equalText,
      }}
    >
      <Calculator />
    </div>
  );
}

export default App;
