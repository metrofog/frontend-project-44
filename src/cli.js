import readlineSync from 'readline-sync';

const sayUName = () => {
  const name = readlineSync.question('Write your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default sayUName;
