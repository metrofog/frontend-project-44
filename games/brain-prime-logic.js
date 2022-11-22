import {
  getAnswer,
  getCongratulation,
  getQuestion,
  getRandomNumber,
  primeNumberCheck,
  YesOrNoLogic,
} from '../src/index.js';

const primeGame = (name = 'User') => {
  let count = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (count < 3) {
    const randomNumber = getRandomNumber();
    getQuestion(`${randomNumber}`);
    const correctAnswer = primeNumberCheck(randomNumber);
    const answer = getAnswer();
    if (YesOrNoLogic(answer, correctAnswer, name)) {
      count += 1;
    } else break;
  }
  getCongratulation(count, name);
};

export default primeGame;
