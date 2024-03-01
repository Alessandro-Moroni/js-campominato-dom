const main = document.querySelector('.back');
const playBtn = document.getElementById('play');
const selectLevel = document.getElementById('level');

const levels = [100, 81, 49];

let cellNumbers;

playBtn.addEventListener('click', play);

function play(){

  reset();
  cellNumbers = levels[selectLevel.value];

  generateCellBg();

}


function generateCellBg(){
  const grid = document.createElement('div');
  grid.className = 'container';

  for(let i = 1; i <= cellNumbers; i++){
    const cell = createCell(i);
    grid.append(cell);
  }
  
  main.append(grid);
}

function createCell(index){
  const cell = document.createElement('div');
  cell.className = 'square';
  cell.classList.add('cell' + cellNumbers);
  cell._cellId = index;
  return cell;
}

function reset(){
  main.innerHTML = '';
}