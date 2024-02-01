

// Use this when developing 
import { colors, frames } from './output.js';

var asciiArtGrid = document.getElementById('asciiArtGrid');

// Function to initialize the grid
function initializeGrid(width, height) {
    for (let i = 0; i < width * height; i++) {
        let cell = document.createElement('div');
        cell.classList.add('ascii-cell');
        asciiArtGrid.appendChild(cell);
    }
}

function animateAsciiArt(frameInterval) {
    let frameIndex = 0;
    let interval = setInterval(() => {
        if (frameIndex >= frames.length) {
            clearInterval(interval);
            return;
        }

        updateAsciiArt(frames[frameIndex], colors[frameIndex]);
        frameIndex++;
    }, frameInterval);
}



// Function to update the grid
function updateAsciiArt(asciiFrame, colorFrame) {
    let cells = asciiArtGrid.getElementsByClassName('ascii-cell');
    let cellIndex = 0;

    for (let rowIndex = 0; rowIndex < asciiFrame.length; rowIndex++) {
        let colorIndex = 0;
        let row = asciiFrame[rowIndex];
        let colorRow = colorFrame[rowIndex];
        // console.log(colorRow)
        let currentColor = colorRow[0][0];
        let colorCount = colorRow[0][1];

        for (let charIndex = 0; charIndex < row.length; charIndex += 2) {
            let char = row.substring(charIndex, charIndex + 2);
            cells[cellIndex].textContent = char;
            // console.log(colorCount)

            // Read the RLE encoded color value
            if (colorCount === 0) {
                colorIndex++;
                currentColor = colorRow[colorIndex][0];
                colorCount = colorRow[colorIndex][1];
            }
            colorCount -= 2;



            cells[cellIndex].style.color = `rgb(${currentColor.join(', ')})`; // Apply color
            // cells[cellIndex].style.color = `rgb(255, 255, 255)`;
            // cells[cellIndex].style.backgroundColor = `rgb(0, 0, 0)`; //`rgba(${currentColor.join(', ')}, 0.2)`;
            cells[cellIndex].style.backgroundColor = `rgba(${currentColor.join(', ')}, 0.2)`;
            // static blue color
            // cells[cellIndex].style.color = `rgb(0, 0, 255)`; // Apply color
            cellIndex++;

        }
    }
}


let width = frames[0][0].length / 2;
console.log(width)
let height = frames[0].length;
console.log(height)

// Initialize and start the animation
initializeGrid(width, height);  // Adjust grid size as needed
animateAsciiArt(100);  // Adjust frame interval as needed (in milliseconds)