const addToConcert = document.querySelectorAll('.add-to-concert');
const deletePiece = document.getElementsByClassName('delete-piece');
const concertMinutes = document.getElementById('concert-minutes');
const concertConclusion = document.getElementById('concert-conclusion');
const concertBuilderArea = document.getElementById('concert-builder-area');
const searchFavorites = document.getElementById("search-favorites");
const deleteIntermission = document.getElementById('delete-intermission');
const concertTitleBtn = document.getElementById('concert-title-btn');
const rightSearchArea = document.getElementById('right-search-area');
const concertTitleInput = document.getElementById('concert-title-input');
const changeTitleBtn = document.getElementById('change-title-btn');
const concertTitleHeader = document.getElementById('concert-title-header');

let concertPieceArr = [];
let favoritesResults =[];
let dragStartIndex;
let number = 0;

function addPieceToConcertArr() {
    number++;
    let pieceEl = document.createElement('div');
    pieceEl.classList = "concert";
    pieceEl.setAttribute("draggable", "true");
    pieceEl.innerHTML =  `
    
        <i class="fas fa-bars piece-drag-bars"></i>
        <div class="composer-img">

        </div>
        <div class="composer-info">
            <p>Composer Name ${number-1}</p>
            <p>Dates</p>
            <p>Nationality</p>
        </div>
        <div class="piece-info">
            <p>Piece Name</p>
            <p>3333-4331-tmp+3-hp,cel-str</p>
            <p>20'</p>
        </div>
        <i class="fa fa-times fa-2x delete-piece"></i>
        <div class="add-intermission">
            <p>Add Intermission Here</p>
        </div>
    
    `;

    
    concertPieceArr.push(pieceEl);
    concertPieceArr.forEach((piece, index) => {
        piece.setAttribute('data-index', index);
    });

    addPieceToDOM(pieceEl);

    deletePiecesListeners();
    createIntermissionListeners();
    dragListeners();
    
}

function deletePiecesListeners() {
    let deletePieces = concertBuilderArea.querySelectorAll('.delete-piece');
    deletePieces.forEach(piece => {
        piece.addEventListener('click', removePiece);
    });
}

function createIntermissionListeners() {
    let intermissionList = concertBuilderArea.querySelectorAll('.add-intermission');
    intermissionList.forEach(intermission => {
        intermission.addEventListener('click', createIntermission)
    });
}

function addPieceToDOM(piece) {
    concertBuilderArea.appendChild(piece);
    
}

function removePiece() {
  
    //get parent El
    let selectedConcert = this.parentElement;
    
    //Remove Selected Piece from Array
    concertPieceArr.splice(concertPieceArr.indexOf(selectedConcert), 1);
    
    //Remove Piece from DOM
    selectedConcert.remove();
    
    //Update Data-Index Attribute
    concertPieceArr.forEach((piece, index) => {
        piece.setAttribute('data-index', index);
    });
    
}

function dynamicSearch() {
    //After search, add all elements to DOM?


}

//Show Add Intermission Option on Hover

function showIntermission(e) {

    if(concertBuilderArea.querySelector('.concert.intermission')) {
        return false;
    }
    
    if(e.target.classList[0] === 'concert') {
        e.target.classList.add('show');
    } else if (e.target === concertBuilderArea && concertBuilderArea.querySelector('.concert.show')) {
       let currentConcert = concertBuilderArea.querySelector('.concert.show');
        currentConcert.classList.remove('show');
    }
}

function createIntermission() {
    
    if(!concertBuilderArea.querySelector('.add-intermission')) {
        return false;
    }

    concertBuilderArea.querySelector('.add-intermission').parentElement.classList.remove('show');
    
 
            let intermissionEl = document.createElement('div');
                intermissionEl.classList = "concert intermission";
                intermissionEl.setAttribute("draggable", "true");
                intermissionEl.innerHTML = `
                    <i class="fas fa-bars"></i>
                    <p>Intermission: ~20-30 minutes</p>
                    <i class="fa fa-times fa-2x delete-piece" id="delete-intermission"></i>
                `;
        
        concertBuilderArea.appendChild(intermissionEl);

        //Delete Intermission
        let closeIntermission = intermissionEl.querySelector('#delete-intermission');
        closeIntermission.addEventListener('click', (e) => {
            
            e.target.parentElement.remove();
        })

    
}

function saveConcertTitle() {
    let concertTitle = concertTitleInput.value;
    


    if(concertTitle === '') {
        //Please Provide A Title.
    } else {
        //Create Concert Object with Title *Flask
        //Change DOM
        rightSearchArea.classList.add('show');
        concertTitleHeader.textContent = `${concertTitle}`; 
    }
}

function removeConcertTitle() {
    //Change object in Flask*
    rightSearchArea.classList.remove('show');
}

//Drag Functions
function dragStart() {
    console.log('Event: Drag Start');
    dragStartIndex = +this.parentElement.getAttribute('data-index');
    
}

function dragEnter() {
    
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}   

function dragOver(e) {
    console.log('Event: Drag Over');
    e.preventDefault();
}

function dragDrop() {
    console.log('Event: Drag Drop');

    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
    const itemOne = concertPieceArr[fromIndex];
    const itemTwo = concertPieceArr[toIndex];

    concertPieceArr[fromIndex].appendChild(itemTwo);
    concertPieceArr[toIndex].appendChild(itemOne);
}

//good. working.
function dragListeners() {
    const pieceDragBars = document.querySelectorAll('.piece-drag-bars');
    const dragBoxes = document.querySelectorAll('.concert');
    pieceDragBars.forEach(drag => {
        drag.addEventListener('dragstart', dragStart);
    });
    
    dragBoxes.forEach(box => {
        
        box.addEventListener('dragover', dragOver);
        box.addEventListener('drop', dragDrop);
        box.addEventListener('dragenter', dragEnter);
        box.addEventListener('dragleave', dragLeave);
    })
}



//Event Listeners

//This needs to be fixed -- it will go inside dynamicSearch
addToConcert.forEach(button => {
     button.addEventListener('click', addPieceToConcertArr);
 });

searchFavorites.addEventListener('keyup', dynamicSearch);

//showAddIntermission
concertBuilderArea.addEventListener('mouseover', showIntermission);

concertTitleBtn.addEventListener('click', saveConcertTitle);
changeTitleBtn.addEventListener('click', removeConcertTitle);
