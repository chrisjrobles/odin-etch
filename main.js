const drawGrid = ({gridDimensions = 960, cellCount = 16}) => {
  const cellSize = Math.floor(gridDimensions / cellCount);

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

drawGrid({cellCount: 80});