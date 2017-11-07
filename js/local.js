const colorDisplay = document.getElementById('color-circle');
const btnRandom = document.getElementById('btn-random');
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const rgbValue = document.getElementById('rgb-value');
const hexValue = document.getElementById('hex-value');

// Change color function
function changeColor() {
  const ranNum1 = Math.floor((Math.random() * 255) + 1);
  const ranNum2 = Math.floor((Math.random() * 255) + 1);
  const ranNum3 = Math.floor((Math.random() * 255) + 1);
  const rgbaNum = 'rgba(' + ranNum1 + ', ' + ranNum2 + ', ' + ranNum3 + ', 1)';
  colorDisplay.style.backgroundColor = rgbaNum;

  // Display Color information as a list under the color
  // Function to change rga values to hex value
  function numToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbaToHex(r, g, b) {
    return "#" + numToHex(r) + numToHex(g) + numToHex(b);
  }
  // Update list item
    // RGBA value
    rgbValue.innerHTML = 'RGB ' + ranNum1 + ', ' + ranNum2 + ', ' + ranNum3;
    // Hexidecimal color value
    hexValue.innerHTML = 'HEX ' + rgbaToHex(ranNum1, ranNum2, ranNum3).toUpperCase();
}



// Event Listener on btnRandom
btnRandom.addEventListener('click', () => {
  changeColor();
});

// Event Listener on btnStart
btnStart.addEventListener('click', () => {
  const colorChanger = setInterval(changeColor, 1000); // Change color every 1000 millisecond
  btnStop.addEventListener('click', () => { // Event Listener on btnStop
    clearTimeout(colorChanger);  // Stop the color transition on a specific color
  });
});
