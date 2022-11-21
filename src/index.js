import sayUName from './cli.js'
import readlineSync from 'readline-sync';

export const answerLogic = (answer, correctAnswer, name) => {

    if (Number(answer) === correctAnswer) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
        return false;
    }
};
    
export const sayHello = () => {
    console.log('Welcome to the Brain Games!');
    const name = sayUName();
    return name;

};

export const getRandomNumber = () =>{
    let number = Math.round(Math.random() * 100);
    return number;
};

export const getQuestion = (text) => {
    console.log(`Question: ${text}`);
};

export const getAnswer = () => {
    return readlineSync.question('Your answer: ');
};

export const getCongratulation = (count, name) => {
    if (count === 3) return console.log(`Congratulations, ${name}`);
};

export const gcdLogic = (firstNumber, secondNumber) => {
    let firstNum = firstNumber;
    let secondNum = secondNumber;

    while (firstNum != 0 && secondNum != 0) {
        if (firstNum > secondNum) {
            firstNum = firstNum % secondNum;
        } else {
            secondNum = secondNum % firstNum;
        }
    }
    return firstNum + secondNum;
};

export const getProgression = () => {
    let progressionLength = Math.round(Math.random() * (5) + 5);
    let randomIndex = Math.round(Math.random() * progressionLength);
    let randomStep = Math.round(Math.random() * 9 + 1);
    let randomNumber = Math.round(Math.random() * 50);
    let progression = `${randomNumber}`;
    let answerNumber = 0;

    for (let i = 0; i < progressionLength; i += 1) {
        if (i !== randomIndex) {
        progression = `${progression} ${randomNumber += randomStep}`;
        } else {
            progression = `${progression} ..`
            answerNumber = randomNumber += randomStep;
        }
    }
    return [progression, answerNumber];
};