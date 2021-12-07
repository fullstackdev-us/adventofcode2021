// import { numbers, boards } from '../inputFiles/4.js';

const numbers = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1];

const boards = [
[22,13,17,11,0],
[8,2,23,4,24],
[21,9,14,16,7],
[6,10,3,18,5],
[1,12,20,15,19],
[3,15,0,2,22],
[9,18,13,17,5],
[19,8,7,25,23],
[20,11,10,24,4],
[14,21,16,12,6],
[],
[14,21,17,24,4],
[10,16,15,9,19],
[18,8,23,26,20],
[22,11,13,6,5],
[2,0,12,3,7],
];

export const d4c2 = () => {
    let finalvalue = 0;
    let boardIndex = 0;
    const numbersCalled = [];
    const winningBoards = [];

    //might need to consider if there is a tie situation - this won't find a tie...

    //for each number called
    numbers.forEach((num) => {
        numbersCalled.push(num);

        //evaluate board at boardIndex
        for (let i=0; i < boards.length; i += 5)
        {
            const range = i + 4;
            const rows = boards.filter((boardRow, index) => {
                return index >= i && index <= range;
            });
            const columns = []

            for (let x=0; x < rows.length; x++) {
                const column = rows.map((row) => row[x]);
                columns.push(column);
            }

            //evaluate rows and columns
            [...rows, ...columns].forEach(numArr => {
                if (numArr.every(n => numbersCalled.includes(n))) {
                    const id = `${i}-${range}`;
                    if (!winningBoards.some(wb => wb.id === id)) {
                        winningBoards.push({ id, rows, columns, snapshotOfNumbersCalled: [...numbersCalled] });
                    }
                    i = boards.length;
                }
            });

            boardIndex++;
        }
    })

    const lastBoard = winningBoards[winningBoards.length - 1];

    const unmarkedNumbers = [];
    lastBoard.rows.forEach(row => 
        row.filter(num => !lastBoard.snapshotOfNumbersCalled
            .includes(num))
            .forEach(num => unmarkedNumbers.push(num))
        );
    
    const unmarkedNumbersSum = unmarkedNumbers.reduce((a,b)=>a+b);

    finalvalue = unmarkedNumbersSum * lastBoard.snapshotOfNumbersCalled[lastBoard.snapshotOfNumbersCalled.length - 1];

    return finalvalue;
};
