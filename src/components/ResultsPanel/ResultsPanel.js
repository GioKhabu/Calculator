import React from 'react';
import styles from  './ResultsPanel.module.css'
import { CalculatorContext } from '../../contexts/CalculatorMathContext';

function ResultsPanel() {
  const { currentNum, nextNum, sum, mathOperator } = React.useContext(CalculatorContext);
  return (
    <div className={`${styles.panelWrapper}`}>
      <h2>{`${currentNum}${mathOperator}${nextNum}`}</h2>
    </div>
  );
}

export default ResultsPanel;
