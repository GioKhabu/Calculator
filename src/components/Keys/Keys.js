import React from 'react';
import './keys.css';
import { CalculatorContext } from '../../contexts/CalculatorMathContext.js';

function Keys({ value, name }) {
  const {
    currentNum,
    setCurrentNum,
    nextNum,
    setNextNum,
    initial,
    setInitial,
    mathOperator,
    setmathOperator,
    result,
    setResult,
  } = React.useContext(CalculatorContext);
// console.log(value)
  return (
    <div className={`keyGroup key1${name}`}>
      <span
        className={`keysWrapper key${name}`}
        onClick={() => {
          if (
            (initial === true) &
            (value === 1 ||
              value === 2 ||
              value === 3 ||
              value === 4 ||
              value === 5 ||
              value === 6 ||
              value === 7 ||
              value === 8 ||
              value === 9 ||
              value === 0 ||
              (value === '.') & !currentNum.includes('.') & (currentNum.length !== 0))
          ) {
            setCurrentNum(String(currentNum) + String(value));
            setResult('');
            setmathOperator('');
          } else if (
            (initial === false) &
            (value === 1 ||
              value === 2 ||
              value === 3 ||
              value === 4 ||
              value === 5 ||
              value === 6 ||
              value === 7 ||
              value === 8 ||
              value === 9 ||
              value === 0 ||
              (value === '.') & !nextNum.includes('.') & (nextNum.length !== 0))
          ) {
            setNextNum(String(nextNum) + String(value));
          } else if (value === '+') {
            if (mathOperator !== '+') {
              if (result.length > 0) {
                setCurrentNum(result);
                setResult('');
                setmathOperator('+');
                setInitial(false);
              } else {
                setmathOperator('+');
                setInitial(false);
              }
            } else if (mathOperator === '+' && nextNum.length !== 0) {
              setCurrentNum(String(Number(currentNum) + Number(nextNum)));
              setNextNum('');
            }
          } else if (value === '-') {
            if (mathOperator !== '-') {
              if (result.length > 0) {
                setCurrentNum(result);
                setResult('');
                setmathOperator('-');
                setInitial(false);
              } else {
                setmathOperator('-');
                setInitial(false);
              }
            } else if (mathOperator === '-' && nextNum.length !== 0) {
              setCurrentNum(String(Number(currentNum) - Number(nextNum)));
              setNextNum('');
            }
          } else if (value === 'x') {
            if (mathOperator !== 'x') {
              if (result.length > 0) {
                setCurrentNum(result);
                setResult('');
                setmathOperator('x');
                setInitial(false);
              } else {
                setmathOperator('x');
                setInitial(false);
              }
            } else if (mathOperator === 'x' && nextNum.length !== 0) {
              setCurrentNum(String(Number(currentNum) * Number(nextNum)));
              setNextNum('');
            }
          } else if (value === '/') {
            if (mathOperator !== '/') {
              if (result.length > 0) {
                setCurrentNum(result);
                setResult('');
                setmathOperator('/');
                setInitial(false);
              } else {
                setmathOperator('/');
                setInitial(false);
              }
            } else if (mathOperator === '/' && nextNum.length !== 0) {
              setCurrentNum(String(Number(currentNum) / Number(nextNum)));
              setNextNum('');
            }
          } else if (value === 'RESET') {
            setCurrentNum('');
            setResult('');
            setNextNum('');
            setInitial(true);
            setmathOperator('');
          } else if (value === '=') {
            if (mathOperator === '+') {
              setCurrentNum(String(Number(currentNum) + Number(nextNum)));
              setResult(String(Number(currentNum) + Number(nextNum)));
              setCurrentNum('');
              setInitial(true);
              setNextNum('');
              setmathOperator('');
            } else if (mathOperator === '-') {
              setCurrentNum(String(Number(currentNum) - Number(nextNum)));
              setResult(String(Number(currentNum) - Number(nextNum)));
              setCurrentNum('');
              setInitial(true);
              setNextNum('');
              setmathOperator('');
            } else if (mathOperator === 'x') {
              setCurrentNum(String(Number(currentNum) * Number(nextNum)));
              setResult(String(Number(currentNum) * Number(nextNum)));
              setCurrentNum('');
              setInitial(true);
              setNextNum('');
              setmathOperator('');
            } else if (mathOperator === '/') {
              setCurrentNum(String(Number(currentNum) / Number(nextNum)));
              setResult(String(Number(currentNum) / Number(nextNum)));
              setCurrentNum('');
              setInitial(true);
              setNextNum('');
              setmathOperator('');
            }
          } else if (value === 'DEL') {
            if (initial === true) {
              const deleted = currentNum.slice(0, -1);
              setCurrentNum(deleted);
            } else {
              const deleted = nextNum.slice(0, -1);
              setNextNum(deleted);
            }
          }
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default Keys;
