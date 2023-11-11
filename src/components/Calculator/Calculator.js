import React from 'react';
import Header from '../Header/Header';
import ResultsPanel from '../ResultsPanel'
import Keyboard from '../Keyboard';
import styles from './Calculator.module.css';

function Calculator() {
  return (
    <div className={`${styles.calculator}`}>
      <Header />
      <ResultsPanel />
      <Keyboard />
    </div>
  );
}

export default Calculator;
