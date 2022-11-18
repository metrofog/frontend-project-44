
import readlineSync from 'readline-sync';

const calcGame = (name = 'User') => {
    let count = 0;
    const operatorArr = ['+', '-', '*'];
    console.log('What is the result of the expression?');
    
    while (count < 3) {
        let firstNumber = Math.round(Math.random() * 100);
        let secondNumber = Math.round(Math.random() * 100);
        let index = Math.round(Math.random() * 2)
        
        if (index === 0) {
            let correctAnswer = firstNumber + secondNumber;

            console.log(`Question: ${firstNumber} ${operatorArr[index]} ${secondNumber}`);
            
            let answer = readlineSync.question('Your answer: ');
            if (Number(answer) === correctAnswer) {
                console.log('Correct!')
                count += 1
            } else {
                return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`)
            }
        } else if (index === 1) {
            if (firstNumber < secondNumber) {
                let number = firstNumber;
                firstNumber = secondNumber;
                secondNumber = number;
            }

            let correctAnswer = firstNumber - secondNumber;

            console.log(`Question: ${firstNumber} ${operatorArr[index]} ${secondNumber}`);
            
            let answer = readlineSync.question('Your answer: ');
            if (Number(answer) === correctAnswer) {
                console.log('Correct!')
                count += 1
            } else {
                return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`)
            }
        } else if (index === 2) {
            firstNumber = Math.round(Math.random() * 15);
            secondNumber = Math.round(Math.random() * 15);
            let correctAnswer = firstNumber * secondNumber;

            console.log(`Question: ${firstNumber} ${operatorArr[index]} ${secondNumber}`);
            
            let answer = readlineSync.question('Your answer: ');
            if (Number(answer) === correctAnswer) {
                console.log('Correct!')
                count += 1
            } else {
                return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`)
            }
        } else {
            
        }
        if (count === 3) console.log(`Congratulation, ${name}`);
    }

}

export default calcGame;