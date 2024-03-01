//  ELEMENTS
const main = document.querySelector('.back');
const playBtn = document.getElementById('play');
const selectLevel = document.getElementById('level');

// DATA
const levels = [100, 81, 49];

let bombs = [];

let cellNumbers;


// START GAME
playBtn.addEventListener('click', play);


function play(){

  reset();
  // livello selezionato
  cellNumbers = levels[selectLevel.value];

  // generatore griglia
  generateCellBg();

  // generatore bombe
  bombGenerator();
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
  cell.addEventListener('click', clickCell)
  return cell;
 
}

function clickCell(){
  if(this){
    this.classList.add('clicked')
  }else{
    bombs.classList.add('bomb')
  }
  

}



// GENERATORE BOMBE
function bombGenerator(){
  // creo un array per inserire le bombe
  let bombs = [];
  while(bombs.length < 16){
    const bombsRandom = Math.floor(Math.random() * cellNumbers) + 1;
   

    if(!bombs.include(bombsRandom)){
      bombs.push(bombsRandom)
    }
  }
  
}

function reset(){
  main.innerHTML = '';
}