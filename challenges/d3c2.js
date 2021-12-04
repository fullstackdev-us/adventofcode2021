import input from '../inputFiles/3.js';

export const d3c2 = () => {
    const binaryLength = 12;
    let filteredInput = [...input];
    let oxygenRatingBinary = '';
    let co2RatingBinary = '';

    //oxygen rating
    for (let i=0; i < binaryLength; i++) {
        if (filteredInput.length === 1) {
            continue;
        }

        const firstBitArray = filteredInput.map((bin) => {
            const binaryNumberArray = bin.split('');
            return parseInt(binaryNumberArray[i]);
        });
    
        const zeros = firstBitArray.filter((bit) => bit === 0);
        const ones = firstBitArray.filter((bit) => bit === 1);

        filteredInput = filteredInput.filter((bin) => {
            const binaryNumberArray = bin.split('');
            return ones.length >= zeros.length ? binaryNumberArray[i] === '1' : binaryNumberArray[i] === '0';
        });
    }

    oxygenRatingBinary = filteredInput[0];
    filteredInput = [...input];

    //co2 scrubber rating
    for (let i=0; i < binaryLength; i++) {
        if (filteredInput.length === 1) {
            continue;
        }

        const firstBitArray = filteredInput.map((bin) => {
            const binaryNumberArray = bin.split('');
            return parseInt(binaryNumberArray[i]);
        });
    
        const zeros = firstBitArray.filter((bit) => bit === 0);
        const ones = firstBitArray.filter((bit) => bit === 1);

        filteredInput = filteredInput.filter((bin) => {
            const binaryNumberArray = bin.split('');
            return zeros.length <= ones.length ? binaryNumberArray[i] === '0' : binaryNumberArray[i] === '1';
        });
    }

    co2RatingBinary = filteredInput[0];

    const oxygenRatingDecimal = parseInt(oxygenRatingBinary, 2);
    const co2RatingDecimal = parseInt(co2RatingBinary, 2);

    return oxygenRatingDecimal * co2RatingDecimal;
};