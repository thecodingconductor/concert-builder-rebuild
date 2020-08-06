const addToConcert = document.querySelectorAll('.add-to-concert');
const deletePiece = document.querySelectorAll('.delete-piece');
const concertMinutes = document.getElementById('concert-minutes');
const concertConclusion = document.getElementById('concert-conclusion');
const concertPieces = document.querySelectorAll('.concert');
const concertBuilderArea = document.getElementById('concert-builder-area');

console.log(concertBuilderArea);


function addPieceToConcert() {
    console.log(this);
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
    console.log(pieceEl);
    console.log(concertBuilderArea);
    console.log(typeof concertBuilderArea);
    concertBuilderArea.appendChild(pieceEl);
    //concertBuilderArea.appendChild(pieceEl);

    
}

function removePiece() {
    let selectedConcert = this.parentElement;
    console.log(selectedConcert);
    selectedConcert.remove();
}


addToConcert.forEach(button => {
    button.addEventListener('click', addPieceToConcert);
});

deletePiece.forEach(piece => {
    piece.addEventListener('click', removePiece);
});
