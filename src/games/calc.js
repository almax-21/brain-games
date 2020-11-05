import launchGame from '../index.js';
import getRandomFromRange from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomFromRange(operators.length);

  return operators[randomIndex];
};

const calcExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unexpected operator');
  }
};

const gameRule = 'What is the result of the expression?';

const getCalcData = () => {
  const operand1 = getRandomFromRange(100);
  const operand2 = getRandomFromRange(100);
  const operator = getRandomOperator();
  const rightAnswer = calcExpression(operand1, operand2, operator).toString();
  const question = `${operand1} ${operator} ${operand2}`;

  return [rightAnswer, question];
};

export default () => launchGame(gameRule, getCalcData);
