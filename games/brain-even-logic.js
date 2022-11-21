
import { getAnswer, getCongratulation, getQuestion, getRandomNumber, YesOrNoLogic } from '../src/index.js';


const evenGame = (name = 'User') => {

    let count = 0;

    console.log('Answer "Yes" if the number is even, otherwise answer "No".');

    while (count < 3) {

        let number = getRandomNumber();
        getQuestion(`${number}`)

        let answer = getAnswer()

        answer = answer.toLocaleLowerCase();
         
        let correctAnswer = number % 2 === 0;
             if (YesOrNoLogic(answer, correctAnswer, name)) {
                count += 1
             } else break;
        
        getCongratulation(count, name);
    };
};

export default evenGame;