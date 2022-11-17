#!/usr/bin/env node

import readlineSync from 'readline-sync';
import sayHello from './brain-games.js';

const evenGame = (name) => {

    let count = 0;

    console.log('Answer "Yes" if the number is even, otherwise answer "No".');

    while (count < 3) {

        let number = Math.round(Math.random() * 100);
        console.log(`Question: ${number}`);

        let answer = readlineSync.question('Your answer: ')

         

        if (number % 2 === 0) {
             if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') { 
                console.log('Correct!'); 
                count += 1;
            } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
                return console.log(`'no' is wrong answer (Correct answer was 'yes'. Let's try again, ${name}!)`)
            } else {
                return console.log(`This answer incorrect!(Only 'Yes' or 'No') Let's try again ${name}!`);
            }
        } else {
            if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') { 
                console.log('Correct!'); 
                count += 1;
            } else if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
                return console.log(`'yes' is wrong answer (Correct answer was 'no'. Let's try again, ${name}!)`)
            } else {
                return console.log(`This answer incorrect!(Only 'Yes' or 'No') Let's try again ${name}!`);
            }
        }
        if (count === 3) return console.log(`Congratulations, ${name}!`)
    };
};

const name = sayHello();

evenGame(name);