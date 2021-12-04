export const registerChallenge = (challengeFunction) => {
    const mainDiv = document.getElementById('mainDiv');
    const gridItem = document.createElement('div');
    const bgColor = randomRGB();

    gridItem.id = challengeFunction.name;
    gridItem.innerText = challengeFunction();
    gridItem.classList = ['challenge-item'];
    gridItem.style = `--grid-item-background-color: ${bgColor}; --grid-item-text-color: ${getContrastColor(bgColor)};`

    mainDiv.appendChild(gridItem);
}

//https://dev.to/enyichiaagu/how-to-generate-random-hex-color-values-in-javascript-115e
export const randomRGB = () => {
    const getDigit = () => `${Math.round(Math.random() * 255)}`;
    const color = (r, g, b) => `rgb(${r}, ${g}, ${b})`;
    return color(getDigit(), getDigit(), getDigit())
}

export const getContrastColor = (colorRgbString) => {
    var colorTriplet = (colorRgbString.substring(4,colorRgbString.length-1)).split(",").map(intString => parseInt(intString));

    // black or white:
    var total = 0;
    let contrastColor = [];

    for (var i=0; i<colorTriplet.length; i++) 
    { 
       total += colorTriplet[i]; 
    } 

    if(total > (3*256/2)) {
        contrastColor = [0,0,0];
    } else {
        contrastColor = [255,255,255];
    }
    
    return "rgb("+contrastColor.join(",")+")";
}