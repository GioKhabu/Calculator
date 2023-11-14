import React from 'react';
import styles from  './ResultsPanel.module.css'
import { CalculatorContext } from '../../contexts/CalculatorMathContext';

function ResultsPanel() {
  const { currentNum, nextNum, mathOperator, result } = React.useContext(CalculatorContext);
  return (
    <div className={`${styles.panelWrapper}`}>
      <h2 >{`${result}${currentNum}${mathOperator}${nextNum}`}</h2>
    </div>
  );
}

export default ResultsPanel;
