//  ELEMENTS
const main = document.querySelector('.back');
const playBtn = document.getElementById('play');
const selectLevel = document.getElementById('level');
const containerFather = document.querySelector('.container')


// DATA
const levels = [100, 81, 49];

let bombs = [];

let cellNumbers;

let counter = 0;

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
  
  cell.addEventListener('click',function(){
    if(bombs.includes(this._cellId)){
      this.classList.add('bomb');
      alert(`Hai perso! Hai fatto: ${counter}`);
      
      const endGame = document.createElement('div');
      endGame.classList.add('end-game');
      main.append(endGame);
      showBombs();
      
    }
    if(counter === cell - bombs){
      alert(`Hai vinto!`)
    }
    
    this.classList.add('clicked');
    counter++;
    console.log(counter);
  });

  return cell;
 
}



// GENERATORE BOMBE
function bombGenerator(){
  // creo un array per inserire le bombe
  while(bombs.length < 16){
    const bombsRandom = Math.ceil(Math.random() * levels[selectLevel.value]);
   

    if(!bombs.includes(bombsRandom)){
      bombs.push(bombsRandom)
    }
  }
  
}

// funzione per vedere le bombe
function showBombs(){
  let allCell = document.querySelectorAll('.square');
 
  for(let i = 0; i < allCell.length; i++){
    
    if(bombs.includes(allCell[i]._cellId)){
  
      allCell[i].classList.add('bomb');

      
    }
  }
}

function reset(){
  main.innerHTML = '';
}