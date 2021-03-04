//Mixed Messages Project from Codeacademy

//Arrays with components of jokes
const punchlines = ["Custard", "To get to the other side", "Wooly Jumper"];
const setups = ["you cross a kangaroo with a sweater", "the chicken cross the road", ];
const questions = ["What do you get when", "Did you hear about", "Why did", "Hear about"];

//Generates a string with a joke made of random components
const generateJoke = () => {
    posQuest = Math.floor(Math.random()*questions.length);
    posSetup = Math.floor(Math.random()*setups.length);
    posPunch = Math.floor(Math.random()*punchlines.length);
    return `${questions[posQuest]} ${setups[posSetup]}? ${punchlines[posPunch]}!`
}

//Outputs the joke
console.log(generateJoke());