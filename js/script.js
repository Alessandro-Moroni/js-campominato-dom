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
  console.log(index);
  cell.addEventListener('click',function(){
    if(bombs.includes(this._cellId)){
      this.classList.add('bomb');
    }

    this.classList.add('clicked');
  });

  return cell;
 
}



// GENERATORE BOMBE
function bombGenerator(){
  // creo un array per inserire le bombe
  while(bombs.length < 16){
    const bombsRandom = Math.floor(Math.random() * 100) + 1;
   

    if(!bombs.includes(bombsRandom)){
      bombs.push(bombsRandom)
    }
  }
  
}

function reset(){
  main.innerHTML = '';
}