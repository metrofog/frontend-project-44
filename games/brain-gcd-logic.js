import {
  getRandomNumber,
  gcdLogic,
  getAnswer,
  getQuestion,
  getCongratulation,
  answerLogic,
} from '../src/index.js';

const gcdGame = (name = 'User') => {
  let count = 0;
  console.log('Find the greatest common divisor of given numbers.');
  while (count < 3) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const correctAnswer = gcdLogic(firstNumber, secondNumber);
    getQuestion(`${firstNumber} ${secondNumber}`);
    const answer = getAnswer();
    if (answerLogic(answer, correctAnswer, name)) {
      count += 1;
    } else break;
  }
  getCongratulation(count, name);
};

export default gcdGame;
