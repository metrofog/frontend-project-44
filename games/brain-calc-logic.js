import {
  answerLogic,
  getRandomNumber,
  getQuestion,
  getAnswer,
  getCongratulation,
} from '../src/index.js';

const calcGame = (name = 'User') => {
  let count = 0;
  const operatorArr = ['+', '-', '*'];
  console.log('What is the result of the expression?');
  while (count < 3) {
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();
    const index = Math.round(Math.random() * 2);
    if (index === 0) {
      const correctAnswer = firstNumber + secondNumber;
      getQuestion(`${firstNumber} ${operatorArr[index]} ${secondNumber}`);
      const answer = getAnswer();
      if (answerLogic(answer, correctAnswer, name)) {
        count += 1;
      } else break;
    } else if (index === 1) {
      const correctAnswer = firstNumber - secondNumber;
      getQuestion(`${firstNumber} ${operatorArr[index]} ${secondNumber}`);
      const answer = getAnswer();
      if (answerLogic(answer, correctAnswer, name)) {
        count += 1;
      } else break;
    } else if (index === 2) {
      firstNumber = Math.round(Math.random() * 15);
      secondNumber = Math.round(Math.random() * 15);
      const correctAnswer = firstNumber * secondNumber;
      getQuestion(`${firstNumber} ${operatorArr[index]} ${secondNumber}`);
      const answer = getAnswer();
      if (answerLogic(answer, correctAnswer, name)) {
        count += 1;
      } else break;
    }
    getCongratulation(count, name);
  }
};

export default calcGame;
