import input from '../inputFiles/6.js';

export const d6c2 = () => {
    let finalValue = 0;
    const days = 256;
    const fishArrays = Array(9).fill(0);

    input.forEach(fish=>{ fishArrays[fish]++ });

    for (let i=0; i<days; i++) {
        const f = fishArrays.shift();
        fishArrays.push(f);
        fishArrays[6]+=f;
    }

    fishArrays.forEach(f=>{ finalValue+=f })
    
    return finalValue;
};
