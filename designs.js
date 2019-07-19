// Select color input
let colorPicker = document.getElementById('colorPicker');
// Select size input
let sizePicker = document.getElementById('sizePicker')
// Get canvas
let canvas = document.getElementById('pixelCanvas');

// function to call, when submit button is pressed and user input is evaluated
function makeGrid(event) {
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    event.preventDefault();                           // prevent submitting and refreshing the page
    canvas.innerHTML = "";                            // to clear the canvas
    for (let x = 0; x < height; x++) {                // loop to create number of rows according to height input
        let row = document.createElement('TR');       // create element stored in variable row
        canvas.appendChild(row);                      // row is appended to the canvas
        for (let y = 0; y < width; y++) {             // nested loop to create cells for each row
            let cell = document.createElement('TD');  // create element stored in variable cell 
            row.appendChild(cell);                    // cell is appended to the row
        }     
    }   
}

// function to call, when clicked on a cell 
function colorCell(event) {
    let cellToBeColored = event.target;
    if(cellToBeColored.tagName==='TD'){
        cellToBeColored.style.backgroundColor = colorPicker.value;
    }
}

// listen for submit button, to call makeGrid function
sizePicker.addEventListener('submit', makeGrid);
// listen for click on canvas, to call colorCell function
canvas.addEventListener('click', colorCell);