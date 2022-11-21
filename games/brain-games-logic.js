import sayUName from "../src/cli.js";

export const welcomeUser = () => {
    console.log('Welcom to the Brain Games!');
    let name = sayUName();
    return name;
}