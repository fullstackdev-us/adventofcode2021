import input from '../inputFiles/2.js';

export default () => {
    const element = document.getElementById('d2c2');

    let z = 0;
    let y = 0;
    let aim = 0;

    function down(amount) {
        aim += amount;
    }

    function up(amount) {
        aim -= amount;
    }

    function forward(amount) {
        y += amount;
        z += aim * amount;
    }

    for (let i=0; i < input.length; i++) {
        const direction = input[i].split(' ')[0];
        const amount = parseInt(input[i].split(' ')[1]);

        switch(direction) {
            case 'up':
                up(amount);
                break;
            case 'down':
                down(amount);
                break;
            case 'forward':
                forward(amount);
                break;
        }
    }

    element.innerHTML = `z = ${z} <br> y = ${y} <br> z * y = ${z*y}`;
};