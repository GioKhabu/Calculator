import React from 'react';
import Header from '../Header/Header';
import ResultsPanel from '../ResultsPanel'
import Keyboard from '../Keyboard';
import styles from './Calculator.module.css';

function Calculator() {
  return (
    <main className={`${styles.calculator}`}>
      <Header />
      <ResultsPanel />
      <Keyboard />
    </main>
  );
}

export default Calculator;
