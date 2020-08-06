const addToConcert = document.querySelectorAll('.add-to-concert');
const deletePiece = document.getElementsByClassName('delete-piece');
const concertMinutes = document.getElementById('concert-minutes');
const concertConclusion = document.getElementById('concert-conclusion');
const concertBuilderArea = document.getElementById('concert-builder-area');
const searchFavorites = document.getElementById("search-favorites");
const deleteIntermission = document.getElementById('delete-intermission');




let concertPieceArr = [];
let favoritesResults =[];

function addPieceToConcertArr() {
    
    let pieceEl = document.createElement('div');
    pieceEl.classList = "concert";
    pieceEl.setAttribute("draggable", "true");
    pieceEl.innerHTML =  `
    
        <i class="fas fa-bars"></i>
        <div class="composer-img">

        </div>
        <div class="composer-info">
            <p>Composer Name</p>
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
    addPieceToDOM(pieceEl);
    let pieces = concertBuilderArea.querySelectorAll('.delete-piece');
    pieces.forEach(piece => {
        piece.addEventListener('click', removePiece);
    });

    
    
}

function addPieceToDOM(piece) {
    concertBuilderArea.appendChild(piece);
    
}

function removePiece() {
  
    
    let selectedConcert = this.parentElement;
    console.log(selectedConcert);
    selectedConcert.remove();
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

function createIntermission(e) {
    
    if(!concertBuilderArea.querySelector('.add-intermission')) {
        return false;
    }

    concertBuilderArea.querySelector('.add-intermission').parentElement.classList.remove('show');
    
    
    if (e.target === concertBuilderArea.querySelector('.add-intermission') || e.target === concertBuilderArea.querySelector('.add-intermission').querySelector('p')) {
            console.log('make my element bitch');    
            let intermissionEl = document.createElement('div');
                intermissionEl.classList = "concert intermission";
                intermissionEl.setAttribute("draggable", "true");
                intermissionEl.innerHTML = `
                    <i class="fas fa-bars"></i>
                    <p>Intermission: ~20-30 minutes</p>
                    <i class="fa fa-times fa-2x delete-piece" id="delete-intermission"></i>
                `;
        console.log(intermissionEl);
        concertBuilderArea.appendChild(intermissionEl);

        let closeIntermission = intermissionEl.querySelector('#delete-intermission');

        closeIntermission.addEventListener('click', (e) => {
            
            e.target.parentElement.remove();
        })
    } else {
        return false;
    }

    

    
}



//Event Listeners
addToConcert.forEach(button => {
     button.addEventListener('click', addPieceToConcertArr);
 });

//deletePiece.forEach(piece => {
//     piece.addEventListener('click', removePiece);
// });

searchFavorites.addEventListener('keyup', dynamicSearch);

//showAddIntermission
concertBuilderArea.addEventListener('mouseover', showIntermission);

//Add Intermission to DOM
concertBuilderArea.addEventListener('click', createIntermission);
