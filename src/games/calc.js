import { launchGame } from '../index.js';
import getRandomInt from '../getRandomInt.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomInt(operators.length);
  const operator = operators[randomIndex];

  return operator;
};

const calcExpression = (num1, num2, operator) => {
  let result;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  }
  return result;
};

const rule = 'What is the result of the expression?';

const startCalcGame = () => {
  const operand1 = getRandomInt(100);
  const operand2 = getRandomInt(100);
  const operator = getRandomOperator();
  const result = calcExpression(operand1, operand2, operator);

  return [result, operand1, operator, operand2];
};

export default () => launchGame(rule, startCalcGame);
