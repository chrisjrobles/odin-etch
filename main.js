const cleanGrid = () => {
  const container = document.getElementById('container');
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

const drawGrid = ({gridDimensions = 960, cellCount = 16}) => {
  const cellSize = gridDimensions / cellCount;

  const container = document.getElementById('container');
  for (let i = 0; i < cellCount; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
  
    for (let j = 0; j < cellCount; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      cell.addEventListener('mouseover', () => {
        cell.classList.add('hoveredCell');
      });
      row.appendChild(cell);
    }
  
    container.appendChild(row);
  }
}

const drawNewGridButton = document.getElementById('newGridButton');
drawNewGridButton.addEventListener('click', () => {
  let cellCount = Number(prompt('How many cells should the grid have?'));
  if (cellCount <= 0 || cellCount > 100) { cellCount = 100 }
  cleanGrid();
  drawGrid({cellCount})
})
drawGrid({cellCount: 80});