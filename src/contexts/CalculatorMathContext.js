import React from 'react';

export const CalculatorContext = React.createContext();

function CalculatorMathContext({ children }) {
  const [currentNum, setCurrentNum] = React.useState('');
  const [nextNum, setNextNum] = React.useState('');
  const [initial, setInitial] = React.useState(true);
  const [mathOperator, setmathOperator] = React.useState('');

  const value = {
    currentNum,
    setCurrentNum,
    nextNum,
    setNextNum,
    initial,
    setInitial,
    mathOperator,
    setmathOperator,
  };

  return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
}

export { CalculatorMathContext };
