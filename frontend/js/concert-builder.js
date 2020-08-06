const addToConcert = document.querySelectorAll('.add-to-concert');
const deletePiece = document.getElementsByClassName('delete-piece');
const concertMinutes = document.getElementById('concert-minutes');
const concertConclusion = document.getElementById('concert-conclusion');

const concertBuilderArea = document.getElementById('concert-builder-area');
const searchFavorites = document.getElementById("search-favorites");


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
    
    `;

    
    concertPieceArr.push(pieceEl);
    addPieceToDOM(pieceEl);
    let pieces = concertBuilderArea.querySelectorAll('.delete-piece');
    pieces.forEach(piece => {
        piece.addEventListener('click', removePiece);
    })

    
    
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

//Event Listeners
addToConcert.forEach(button => {
     button.addEventListener('click', addPieceToConcertArr);
 });

//deletePiece.forEach(piece => {
//     piece.addEventListener('click', removePiece);
// });

searchFavorites.addEventListener('keyup', dynamicSearch);
