import input from '../inputFiles/1.js';

export const d1c1 = () => {
    let increased = 0;

    for (let i=0; i < input.length; i++) {
        if (i > 0 && input[i] > input[i - 1]) {
            increased++;
        }
    }

    return increased;
};
