//import input from '../inputFiles/5.js';

const input = [
    '0,9 -> 5,9',
    '8,0 -> 0,8',
    '9,4 -> 3,4',
    '2,2 -> 2,1',
    '7,0 -> 7,4',
    '6,4 -> 2,0',
    '0,9 -> 2,9',
    '3,4 -> 1,4',
    '0,0 -> 8,8',
    '5,5 -> 8,2',
];

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
const sequence = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

export const d5c1 = () => {
    let overlappingPoints = 0;

    const lines = input.map(line => {
        const tempArr = line.split('->');
        const start = tempArr[0].replaceAll(' ', '');
        const end = tempArr[1].replaceAll(' ', '');
        const startArr = start.split(',');
        const endArr = end.split(',');
        const x1 = parseInt(startArr[0]);
        const y1 = parseInt(startArr[1]);
        const x2 = parseInt(endArr[0]);
        const y2 = parseInt(endArr[1]);

        return { x1, y1, x2, y2 };
    });

    const horizontalLines = lines.filter(line => line.y1 === line.y2);
    const verticalLines = lines.filter(line => line.x1 === line.x2);

    horizontalLines.forEach(hLine => {
        const hSequence = hLine.x1 < hLine.x2 ? sequence(hLine.x1, hLine.x2, 1) : sequence(hLine.x2, hLine.x1, 1);

        const overlappingVertical = verticalLines.filter(vLine => {
            const vSequence = vLine.y1 < vLine.y2 ? sequence(vLine.y1, vLine.y2, 1) : sequence(vLine.y2, vLine.y1, 1);

            const xOverlaps = hSequence.includes(vLine.x1);
            const yOverlaps = vSequence.includes(hLine.y1);

            //debugger;

            return xOverlaps && yOverlaps;
        });

        //reduce doesnt work like you think, just filter
        const overlappingHorizontalLines = horizontalLines.filter(otherHLine => {
            const otherHSequence = otherHLine.x1 < otherHLine.x2 ? sequence(otherHLine.x1, otherHLine.x2, 1) : sequence(otherHLine.x2, otherHLine.x1, 1);
            debugger;
            return otherHSequence.filter(ohp => hSequence.includes(ohp)).length;
        });

        overlappingPoints += overlappingVertical.length + overlappingHorizontalPoints;
    });

    
    return overlappingPoints;
};
