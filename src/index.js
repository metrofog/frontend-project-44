import sayUName from './cli.js'
import readlineSync from 'readline-sync';

export const answerLogic = (answer, correctAnswer, name) => {

    if (answer === correctAnswer) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
        return false;
    }
};

export const YesOrNoLogic = (answer, correctAnswer, name) => {
    const yesArr = ['yes', 'y'];
    const noArr = ['no', 'n'];
    if (yesArr.includes(answer) === correctAnswer) { 
        return true;
    } else if (noArr.includes(answer) === correctAnswer) {
        return false;
    } else {
        console.log(`This answer incorrect!(Only 'Yes' or 'No') Let's try again ${name}!`);
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

export const primeNumberCheck = (number) => {
    const primeArr = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    return primeArr.includes(number);
}