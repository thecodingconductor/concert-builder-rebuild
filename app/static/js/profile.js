const draggables = document.querySelectorAll('.favorite');
const addPieces = document.querySelectorAll('.add-piece');
const concertPieceList = document.getElementById('concert-list');
let dragStartIndex;


//Add data-index to each list item
draggables.forEach((piece, index) => {
    piece.setAttribute('data-index', index);
});


function addPieceToConcert(e){
  
    const concertItem = e.target.parentElement;
   
    concertPieceList.appendChild(concertItem);
    
};

addPieces.forEach(piece => {
    piece.addEventListener('click', addPieceToConcert);
});