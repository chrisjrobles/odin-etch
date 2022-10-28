const dimensions = 16;
const squareSizePx = 50;
const gapPx = 10;

const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.setAttribute('class', 'row');

  for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    row.appendChild(cell);
  }

  container.appendChild(row);
}