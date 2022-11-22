import {
  answerLogic,
  getAnswer,
  getCongratulation,
  getProgression,
  getQuestion,
} from '../src/index.js';

const progressionGame = (name = 'User') => {
  let count = 0;
  console.log('What number is missing in the progression?');
  while (count < 3) {
    const progressionAndAnswerNumber = getProgression();
    const progression = progressionAndAnswerNumber[0];
    const correctAnswer = progressionAndAnswerNumber[1];
    getQuestion(`${progression}`);
    const answer = getAnswer();
    if (answerLogic(answer, correctAnswer, name)) {
      count += 1;
    } else break;
  }
  getCongratulation(count, name);
};

export default progressionGame;
