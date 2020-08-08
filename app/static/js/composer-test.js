const pieceList = document.querySelectorAll(".piece-title");
//const submitForm = document.getElementById('form-submit');
const pieceResults = document.getElementById('piece-results');
//const testingFave = document.getElementById('fave-button');
const pieceDetailsContainer = document.getElementById('piece-details');
const composerWrap = document.getElementById('composer-wrap');

let pieceData;

function clearResults() {
   pieceDetailsContainer.innerHTML = '';
}

function getPieceResults(e) {
    
    clearResults();

    const request = new XMLHttpRequest();
    let formattedString = e.target.innerHTML.split('&')[0];
    request.open('POST', `/piece_detail/${formattedString}`);

    request.onload = () => {
       // window.scrollTo(0,0);
        const data = JSON.parse(request.responseText);
        console.log(data);

        if(data.piece.title) {
            const contents = `<h2 id="piece-title-result">${data.piece.title}</h2> 
                            <p id="piece-duration">${data.piece.duration}</p>
                            <p id="piece-instrumentation">${data.piece.instrumentation}</p>
                           `;
            
                            

            //const li = document.createElement('li');
            //li.innerHTML = contents;
            pieceDetailsContainer.innerHTML = contents;
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

function imageFetch() {
    const composerName = document.getElementById('composer-name');
    console.log(composerName.textContent);
    fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC72emsapcuXsF64Hrn7ca_9xIbAUbn7DY&cx=014124391945830086859:aisrauxjejy&q=${composerName.textContent}`)
        .then(res => {
            if(!res.ok) {
                throw new Error('Network response was bad.');
            } else {
                return res.json();
            }
        })
        .then(data => {
            const composerImgSrc = data.items[0].pagemap.cse_thumbnail[0].src;
            composerWrap.style.backgroundImage = `url('${composerImgSrc}')`;
        })
}
// testingFave.addEventListener('click', addToFavorites);

window.addEventListener('DOMContentLoaded', imageFetch)
pieceList.forEach((piece) => {
    piece.addEventListener('click', getPieceResults)
})



// <p id="piece-notes">${data.piece.notes}</p>
// submitForm.addEventListener('submit', () => {

// })