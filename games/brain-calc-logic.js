

import { answerLogic, getRandomNumber, getQwestion,
         getAnswer, getCongratulation } from '../src/index.js';

const calcGame = (name = 'User') => {
    let count = 0;
    const operatorArr = ['+', '-', '*'];
    console.log('What is the result of the expression?');
    
    while (count < 3) {
        let firstNumber = getRandomNumber();
        let secondNumber = getRandomNumber();
        let index = Math.round(Math.random() * 2)
        
        if (index === 0) {
            let correctAnswer = firstNumber + secondNumber;

            getQwestion(`${firstNumber} ${operatorArr[index]} ${secondNumber}`);
            
            let answer = getAnswer();
            if (answerLogic(answer, correctAnswer, name)) count += 1;
        } else if (index === 1) {
            let correctAnswer = firstNumber - secondNumber;

            getQwestion(`${firstNumber} ${operatorArr[index]} ${secondNumber}`);
            
            let answer = getAnswer();
            if (answerLogic(answer, correctAnswer, name)) count += 1;
        } else if (index === 2) {
            firstNumber = Math.round(Math.random() * 15);
            secondNumber = Math.round(Math.random() * 15);
            let correctAnswer = firstNumber * secondNumber;
            
            getQwestion(`${firstNumber} ${operatorArr[index]} ${secondNumber}`);
            
            let answer = getAnswer();
            if (answerLogic(answer, correctAnswer, name)) {
                count += 1;
            } else break;
        }
            
        
        getCongratulation(count, name);
    }

}

export default calcGame;