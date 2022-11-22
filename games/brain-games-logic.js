import sayUName from '../src/cli.js';

const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = sayUName();
  return name;
};

export default welcomeUser;
