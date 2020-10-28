import { getRandomInt } from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

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
  return result.toString();
};

export const rule = 'What is the result of the expression?';

export const startCalcGame = () => {
  const operand1 = getRandomInt();
  const operand2 = getRandomInt();
  const operator = getRandomOperator();
  const result = calcExpression(operand1, operand2, operator);

  return [result, operand1, operator, operand2];
};
