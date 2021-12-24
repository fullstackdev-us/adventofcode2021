import input from '../inputFiles/6.js';

export const d6c1 = () => {
    let finalValue = 0;
    const output = [...input];

    const days = 80;

    for (let i=0; i < days; i++) {
        for (let x=0; x < output.length; x++) {
            if (output[x] > 0) {
                output[x]--;
            } else if (output[x] === 0) {
                output[x] = 6;
                output.push(9);
            }
        }
    }

    finalValue = output.length;
    
    return finalValue;
};
