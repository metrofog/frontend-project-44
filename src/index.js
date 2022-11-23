import readlineSync from 'readline-sync';
import sayUName from './cli.js';

export const answerLogic = (answer, correctAnswer, name) => {
  correctAnswer = `${correctAnswer}`;
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
  return false;
};

export const YesOrNoLogic = (answer, correctAnswer, name) => {
  const yesArr = ['yes', 'y'];
  const noArr = ['no', 'n'];
  const correct = correctAnswer === true ? 'yes' : 'no';
  if (yesArr.includes(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  if (noArr.includes(answer) === correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'. Let's try again, ${name}!`);
    return false;
  }
  console.log(`This answer incorrect!(Only 'yes' or 'no') Let's try again ${name}!`);
  return false;
};

export const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = sayUName();
  return name;
};

export const getRandomNumber = () => {
  const number = Math.round(Math.random() * 100);
  return number;
};

export const getQuestion = (text) => {
  console.log(`Question: ${text}`);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const getCongratulation = (count, name) => {
  if (count === 3) console.log(`Congratulations, ${name}!`);
};

export const gcdLogic = (firstNumber, secondNumber) => {
  let firstNum = firstNumber;
  let secondNum = secondNumber;
  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }
  return firstNum + secondNum;
};

export const getProgression = () => {
  const progressionLength = Math.round(Math.random() * (5) + 5);
  console.log(progressionLength)
  const randomIndex = Math.round(Math.random() * progressionLength - 1);
  console.log(randomIndex)
  const randomStep = Math.round(Math.random() * 9 + 1);
  let randomNumber = Math.round(Math.random() * 50);
  let progression = ``;
  let answerNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== randomIndex) {
      progression = `${progression} ${randomNumber += randomStep}`;
    } else {
      progression = `${progression} ..`;
      randomNumber += randomStep;
      answerNumber = randomNumber;
    }
  }
  return [progression, answerNumber];
};

export const primeNumberCheck = (number) => {
  const primeArr = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97];
  return primeArr.includes(number);
};
