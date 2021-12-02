import input from '../inputFiles/1.js';

export default () => {
    const element = document.getElementById('1');

    let increased = 0;

    for (let i=0; i < input.length; i++) {
        if (i > 0 && input[i] > input[i - 1]) {
            increased++;
        }
    }

    element.innerText = `Increased ${increased} times.`;
};
