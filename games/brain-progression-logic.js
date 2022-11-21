
import { answerLogic, getAnswer, getCongratulation, getProgression, getQuestion } from '../src/index.js'

const progressionGame = (name = 'User') => {

    let count = 0;

    console.log('What number is missing in the progression?');

    while (count < 3) {
       let progressionAndAnswerNumber = getProgression();
       let progression = progressionAndAnswerNumber[0];
       let correctAnswer = progressionAndAnswerNumber[1];

       getQuestion(`${progression}`);

       let answer = getAnswer();
       
       if (answerLogic(answer, correctAnswer, name)) {
            count += 1;
       } else {
            break;
       }
    }
    getCongratulation(name);
};

export default progressionGame;