import input from '../inputFiles/7.js';
import { sequence } from "../utils.js";

export const d7c2 = () => {
    const fuelValues = [];

    //sort asc
    input.sort((a,b) => a > b);

    //make array of possible alignments
    const min = input[0];
    const max = input[input.length - 1];
    const possibleAlignments = sequence(min, max, 1);

    //calculate fuel for each
    for (let i=0; i < possibleAlignments.length; i++) {
        let fuel = 0;
        for (let x=0; x < input.length; x++) {
            const diff = Math.abs(input[x] - possibleAlignments[i]);
            fuel += (diff * (diff+1)) / 2;
        }
        fuelValues.push(fuel);
    }

    //choose the one using least fuel
    fuelValues.sort((a,b) => a > b);
    return fuelValues[0];
};
