import input from '../inputFiles/7.js';
//const input = [16,1,2,0,4,2,7,1,2,14];

export const d7c1 = () => {
    let finalValue = 0;
    
    //sort asc
    input.sort((a,b) => a < b);

    //find middle
    var target = input[Math.round((input.length - 1) / 2)];

    //calculate fuel for each
    input.forEach(num => {
        if (num > target) {
            finalValue += num - target;
        } else {
            finalValue += target - num;
        }
    });
    
    return finalValue;
};
