import {
  getAnswer,
  getCongratulation,
  getQuestion,
  getRandomNumber,
  YesOrNoLogic,
} from '../src/index.js';

const evenGame = (name = 'User') => {
  let count = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const number = getRandomNumber();
    getQuestion(`${number}`);
    let answer = getAnswer();
    answer = answer.toLocaleLowerCase();
    const correctAnswer = number % 2 === 0;
    if (YesOrNoLogic(answer, correctAnswer, name)) {
      count += 1;
    } else break;
    getCongratulation(count, name);
  }
};

export default evenGame;
