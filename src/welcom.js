import sayUName from './cli.js'

const sayHello = () => {

    console.log('Welcome to the Brain Games!');
    const name = sayUName();
    return name;

};
export default sayHello;