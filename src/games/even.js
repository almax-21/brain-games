import promptly from 'promptly';
import check from '../check.js';
import greetByName from '../cli.js';

const isEven = (num) => num % 2 === 0;

const getRandomInt = () => {
  const integer = Math.floor(Math.random() * 100); // random int from 0 to 99
  return integer;
};

export default async () => {
  const userName = await greetByName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let counter = 1; counter <= 3; counter += 1) {
    const number = getRandomInt();

    console.log(`Question: ${number}`);

    const userAnswer = await promptly.prompt('Your answer: ');
    const rightAnswer = check(number, isEven);

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
