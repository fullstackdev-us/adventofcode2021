import input from '../inputFiles/1.js';

export default () => {
    const element = document.getElementById('d1c2');

    let increased = 0;
    let start = 0;
    let lastSum = 0;
    
    for (let i=0; i < input.length; i++) {
        if (input.length >= start + 2) {
            let thisSum = input[start] + input[start + 1] + input[start + 2];
    
            if (thisSum > lastSum && lastSum > 0) {
                increased++;
            }
    
            if (i == start) {
                start++;
            }
    
            lastSum = thisSum;
        }
    }
    
    element.innerText = `Increased ${increased} times.`;   
}