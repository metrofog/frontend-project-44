
import { getAnswer, getCongratulation, getQuestion, getRandomNumber } from '../src/index.js';


const evenGame = (name = 'User') => {

    let count = 0;

    console.log('Answer "Yes" if the number is even, otherwise answer "No".');

    while (count < 3) {

        let number = getRandomNumber();
        getQuestion(`${number}`)

        let answer = getAnswer()

        answer = answer.toLocaleLowerCase();
         

        if (number % 2 === 0) {
             if (answer === 'yes' || answer === 'y') { 
                console.log('Correct!'); 
                count += 1;
            } else if (answer === 'no' || answer === 'n') {
                return console.log(`'no' is wrong answer (Correct answer was 'yes'. Let's try again, ${name}!)`)
            } else {
                return console.log(`This answer incorrect!(Only 'Yes' or 'No') Let's try again ${name}!`);
            }
        } else {
            if (answer === 'no' || answer === 'n') { 
                console.log('Correct!'); 
                count += 1;
            } else if (answer === 'yes' || answer === 'y') {
                return console.log(`'yes' is wrong answer (Correct answer was 'no'. Let's try again, ${name}!)`)
            } else {
                return console.log(`This answer incorrect!(Only 'Yes' or 'No') Let's try again ${name}!`);
            }
        }
        getCongratulation(count, name);
    };
};

export default evenGame;