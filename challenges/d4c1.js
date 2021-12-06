import { numbers, boards } from '../inputFiles/4.js';

export const d4c1 = () => {
    let finalvalue = 0;
    let boardIndex = 0;
    const numbersCalled = [];
    const winningBoard = { rows: [], columns: [] };

    //might need to consider if there is a tie situation - this won't find a tie...

    //for each number called
    numbers.some((num) => {
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
                    winningBoard.rows = rows;
                    winningBoard.columns = columns;
                    i = boards.length;
                }
            });

            boardIndex++;
        }

        return winningBoard.rows.length;
    })

    const unmarkedNumbers = [];
    winningBoard.rows.forEach(row => 
        row.filter(num => !numbersCalled
            .includes(num))
            .forEach(num => unmarkedNumbers.push(num))
        );
    
    const unmarkedNumbersSum = unmarkedNumbers.reduce((a,b)=>a+b);

    finalvalue = unmarkedNumbersSum * numbersCalled[numbersCalled.length - 1];

    return finalvalue;
};
