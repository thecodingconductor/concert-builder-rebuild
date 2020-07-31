const pieceList = document.querySelectorAll(".piece-link");
const submitForm = document.getElementById('form-submit');
const pieceResults = document.getElementById('piece-results');


function clearResults() {
    while(pieceResults.firstChild) {
        pieceResults.removeChild(pieceResults.firstChild);
    }
}

function getPieceResults(e) {
    
    clearResults();

    const request = new XMLHttpRequest();
    let formattedString = e.target.innerHTML.split('&')[0];
    request.open('POST', `/piece_detail/${formattedString}`);

    request.onload = () => {
        window.scrollTo(0,0);
        const data = JSON.parse(request.responseText);

        if(data.piece.title) {
            const contents = `<p id="piece-title">${data.piece.title}</p> 
                            <p id="piece-duration">${data.piece.duration}</p>
                            <p id="piece-instrumentation">${data.piece.instrumentation}</p>
                            <p id="piece-notes">${data.piece.notes}</p>`;
            
                            console.log(contents);

            const li = document.createElement('li');
            li.innerHTML = contents;
            pieceResults.append(li);
        
        } else {
            const liFail = document.createElement('li');
            liFail.innerHTML = 'There was a failure';
            pieceResults.append(li);
        }
    }

    request.send();
    return false;
    
}



pieceList.forEach((piece) => {
    piece.addEventListener('click', getPieceResults)
})

submitForm.addEventListener('submit', () => {

})