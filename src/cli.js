import readlineSync from 'readline-sync';

const sayUName = () => {
  console.log('May I have your name?');
  const name = readlineSync.question('Write your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default sayUName;
