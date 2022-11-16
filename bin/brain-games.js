#!bin/brain-games.js

import sayUName from '../src/cli.js'
import evenGame from './brain-even.js'
console.log('Welcome to the Brain Games!');
let name = sayUName();
evenGame(name);