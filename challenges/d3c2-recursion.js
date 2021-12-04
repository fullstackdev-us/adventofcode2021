import input from '../inputFiles/3.js';
const binaryLength = 12;

const oxyPredicate = (ones, zeros, valueTocheck) => {
    return ones.length >= zeros.length ? valueTocheck === '1' : valueTocheck === '0';
}

const co2Predicate = (ones, zeros, valueTocheck) => {
    return zeros.length <= ones.length ? valueTocheck === '0' : valueTocheck === '1';
}

const filterInput = (filteredInput, predicate, index = 0) => {
    let localInput = [...filteredInput];
    let localFilteredInput = [];

    const firstBitArray = localInput.map((bin) => {
        const binaryNumberArray = bin.split('');
        return parseInt(binaryNumberArray[index]);
    });

    const zeros = firstBitArray.filter((bit) => bit === 0);
    const ones = firstBitArray.filter((bit) => bit === 1);

    localFilteredInput = localInput.filter((bin) => {
        const binaryNumberArray = bin.split('');
        return predicate(ones, zeros, binaryNumberArray[index]);
    });

    if (localFilteredInput.length > 1 && index < binaryLength) {
        
        return filterInput(localFilteredInput, predicate, index + 1);
    } else {
        
        return localFilteredInput;
    }
}

export const d3c2 = () => {
    let oxygenRatingBinary = filterInput(input, oxyPredicate);
    let co2RatingBinary = filterInput(input, co2Predicate);

    const oxygenRatingDecimal = parseInt(oxygenRatingBinary, 2);
    const co2RatingDecimal = parseInt(co2RatingBinary, 2);

    return oxygenRatingDecimal * co2RatingDecimal;
};