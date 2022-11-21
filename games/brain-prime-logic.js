
import { getAnswer, getCongratulation, getQuestion, getRandomNumber, primeNumberCheck, YesOrNoLogic } from "../src/index.js";


const primeGame = (name = 'User') => {

    let count = 0;

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

    while (count < 3) {
        let randomNumber = getRandomNumber();

        getQuestion(`${randomNumber}`);
        let correctAnswer = primeNumberCheck(randomNumber);
        let answer = getAnswer();
        if (YesOrNoLogic(answer, correctAnswer, name)) {
            count += 1;
        } else break
    }
    
    getCongratulation(count, name);
}

export default primeGame;