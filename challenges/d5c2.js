import input from '../inputFiles/5.js';
import { sequence } from '../utils.js';

export const d5c2 = () => {
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
    const diagonalLines = lines.filter(line => line.x1 !== line.x2 && line.y1 !== line.y2);

    let points = [];
    horizontalLines.forEach(hLine => {
        const hSequence = hLine.x1 < hLine.x2 ? sequence(hLine.x1, hLine.x2, 1) : sequence(hLine.x2, hLine.x1, 1);
        const horizontalLinePoints = hSequence.map(hPoint => ({x: hPoint, y: hLine.y1}));
        points = [...points, ...horizontalLinePoints];
    });
    verticalLines.forEach(vLine => {
        const vSequence = vLine.y1 < vLine.y2 ? sequence(vLine.y1, vLine.y2, 1) : sequence(vLine.y2, vLine.y1, 1);
        const verticalLinePoints = vSequence.map(vPoint => ({x: vLine.x1, y: vPoint}));
        points = [...points, ...verticalLinePoints];
    });
    diagonalLines.forEach(dLine => {
        const reverseX = dLine.x2 > dLine.x1;
        let xSequence = dLine.x1 < dLine.x2 ? sequence(dLine.x1, dLine.x2, 1) : sequence(dLine.x2, dLine.x1, 1);
        if (!reverseX) {
            xSequence = xSequence.reverse();
        }
        const reverseY = dLine.y2 > dLine.y1;
        let ySequence = dLine.y1 < dLine.y2 ? sequence(dLine.y1, dLine.y2, 1) : sequence(dLine.y2, dLine.y1, 1);
        if (!reverseY) {
            ySequence = ySequence.reverse();
        }
        const diagonalPoints = xSequence.map((x, index) => ({x, y: ySequence[index] }));

        points = [...points, ...diagonalPoints];
    });

    const pointCounts = {};
    points.forEach(point => {
        const key =`x${point.x}y${point.y}`;
        pointCounts[key] = pointCounts[key] ? pointCounts[key] + 1 : 1;
    })

    overlappingPoints = Object.values(pointCounts).filter(count => count >= 2).length;
    
    return overlappingPoints;
};
