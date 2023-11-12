import React from 'react';

import styles from './App.module.css';
import '../Calculator';
import Calculator from '../Calculator';
import { Theme1} from '../../utils';
import { CalculatorMathContext } from '../../contexts/CalculatorMathContext';

export const ThemeColorContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState(Theme1);

  const value = {
    theme,
    setTheme
  }

  return (
    <ThemeColorContext.Provider value={value}>
      <CalculatorMathContext>
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
      </CalculatorMathContext>
    </ThemeColorContext.Provider>
  );
}

export default App;
