function makeGrids(size) {
    let grid = document.querySelector(".container");
    grid.innerHTML = '';
    for (let i = 0; i < size; i++) {
      let column = document.createElement("div");
      column.classList.add("column");
      for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "1px solid black";
        //row.innerText = (i * size) + j;
        column.appendChild(row);
      }
      grid.appendChild(column);
    }
   // container.appendChild(grid);
  }

//generate random color to the each div
const hexCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getCharacter(index) {
    return hexCharacter[index];
}

function generateNewColor() {
    let hexColor = '#';
    for (let index = 0; index < 6; index++) {
        const randomPosition = Math.floor(Math.random() * hexCharacter.length);
        hexColor += getCharacter(randomPosition);
    }
    return hexColor;
}

//add a button to take input from the user 
//for the no of grids to be displayed 

const button = document.querySelector('button');

button.addEventListener("click", gridInput); 

function gridInput() {
   let input = prompt('enter the no of grids you want !');
  if (input > 100) {
    alert('please select grids upto 100.');
   input = prompt('enter the no of grids you want !');
  }
  makeGrids(input);
}
