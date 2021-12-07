import { numbers, boards } from '../inputFiles/4.js';

export const d4c1 = () => {
    let finalvalue = 0;
    let boardIndex = 0;
    const numbersCalled = [];
    const winningBoards = [];

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
                }
            });

            boardIndex++;
        }
    })

    const firstBoard = winningBoards[0];

    const unmarkedNumbers = [];
    firstBoard.rows.forEach(row => 
        row.filter(num => !firstBoard.snapshotOfNumbersCalled
            .includes(num))
            .forEach(num => unmarkedNumbers.push(num))
        );
    
    const unmarkedNumbersSum = unmarkedNumbers.reduce((a,b)=>a+b);

    finalvalue = unmarkedNumbersSum * firstBoard.snapshotOfNumbersCalled[firstBoard.snapshotOfNumbersCalled.length - 1];

    return finalvalue;
};
