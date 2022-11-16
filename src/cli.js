import readlineSync from 'readline-sync';

const sayUName = () => {
const name = readlineSync.question('Write your name: ');
    return console.log(`Hello, ${name}!`);
};

export default sayUName;