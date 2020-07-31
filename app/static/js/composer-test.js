const pieceList = document.querySelectorAll(".piece-link");
const submitForm = document.getElementById('form-submit');
const pieceResults = document.getElementById('piece-results');
const testingFave = document.getElementById('fave-button');

let pieceData;

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
        console.log(data);

        if(data.piece.title) {
            const contents = `<p id="piece-title">${data.piece.title}</p> 
                            <p id="piece-duration">${data.piece.duration}</p>
                            <p id="piece-instrumentation">${data.piece.instrumentation}</p>
                            <p id="piece-notes">${data.piece.notes}</p>`;
            
                            

            const li = document.createElement('li');
            li.innerHTML = contents;
            pieceResults.append(li);
            pieceData = data;
            return pieceData;
        
        } else {
            const liFail = document.createElement('li');
            liFail.innerHTML = 'There was a failure';
            pieceResults.append(li);
        }
    }

    request.send();
    return false;
    
}

function addToFavorites() {
    console.log('This is from addToFavorites');
    fetch(`/add_favorite/${pieceData.piece.title}`, {
        method: 'POST',
        body: JSON.stringify({
            "piece": pieceData.piece
        })
    })
        .then(res => {
            return res.text();
        }).then(text => {
            console.log('POST response');
            console.log(text);
        })
}


testingFave.addEventListener('click', addToFavorites);

pieceList.forEach((piece) => {
    piece.addEventListener('click', getPieceResults)
})

submitForm.addEventListener('submit', () => {

})