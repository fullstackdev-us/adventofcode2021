import input from '../inputFiles/3.js';

export default () => {
    const element = document.getElementById('d3c1');

    const binaryLength = 12;

    const gamma = [];
    const epsilon = [];

    for (let i=0; i < binaryLength; i++) {
        const firstBitArray = input.map((bin) => {
            const binaryNumberArray = bin.split('');
            return parseInt(binaryNumberArray[i]);
        });

        
    
        const zeros = firstBitArray.filter((bit) => bit === 0);
        const ones = firstBitArray.filter((bit) => bit === 1);

        gamma.push(zeros.length > ones.length ? 0 : 1);
        epsilon.push(zeros.length < ones.length ? 0 : 1);
    }

    let gammaString = gamma.join(',');
    gammaString = gammaString.replaceAll(',','');

    let epsilonString = epsilon.join(',');
    epsilonString = epsilonString.replaceAll(',','');

    const gammaDecimal = parseInt(gammaString, 2);
    const epsilonDecimal = parseInt(epsilonString, 2);

    element.innerHTML = `gamma: ${gammaDecimal} <br> epsilon: ${epsilonDecimal} <br> gamma * espilon = ${gammaDecimal * epsilonDecimal}`;
};