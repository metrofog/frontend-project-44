import sayUName from './cli.js'
import readlineSync from 'readline-sync';

export const answerLogic = (answer, correctAnswer, name) => {

    if (Number(answer) === correctAnswer) {
    
        console.log('Correct!');
        return true;
    } else {
    
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`)
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
}

export const getQwestion = (text) => {
    return console.log(`Qwestion: ${text}`);
}

export const getAnswer = () => {
    return readlineSync.question('Your answer: ');
}

export const getCongratulation = (count, name) => {
    if (count === 3) return console.log(`Congratulation, ${name}`);
}