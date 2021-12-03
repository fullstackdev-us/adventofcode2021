import input from '../inputFiles/2.js';

export default () => {
    const element = document.getElementById('d2c1');

    let z = 0;
    let y = 0;

    for (let i=0; i < input.length; i++) {
        const direction = input[i].split(' ')[0];
        const amount = parseInt(input[i].split(' ')[1]);

        switch(direction) {
            case 'up':
                z -= amount;
                break;
            case 'down':
                z += amount;
                break;
            case 'forward':
                y += amount;
                break;
        }
    }

    element.innerHTML = `z = ${z} <br> y = ${y} <br> z * y = ${z*y}`;
};