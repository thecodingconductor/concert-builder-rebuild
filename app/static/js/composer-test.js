const pieceList = document.querySelectorAll(".piece-title");
const pieceResults = document.getElementById('piece-results');
const pieceDetailsContainer = document.getElementById('piece-details');
const composerWrap = document.getElementById('composer-wrap');
const submitComment = document.getElementById('submit-comment');
const addPieceToFavorites = document.getElementById('add-piece-to-favorites');
const createConcert = document.getElementById('create-concert');


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
        .catch(err => {
            console.log(err);
            composerWrap.style.backgroundImage = 'url("https://via.placeholder.com/200")';
        })
}

function commitNewComment() {

}

function commitNewFavorite() {
    console.log('This is from addToFavorites');

    const request = new XMLHttpRequest();
    request.open('POST', `/add_favorite/${document.getElementById('piece-title-result').textContent}`);

    request.onload = () => {
        console.log(request.responseText);
        console.log(typeof request.responseText);
        //const data = JSON.parse(request.reponseText);
        console.log(data);
        if(data.success) {
            console.log('piece added to favorites!');
        }
    };

    request.send()
    return false;
}


function newConcert() {

}


window.addEventListener('DOMContentLoaded', imageFetch)
pieceList.forEach((piece) => {
    piece.addEventListener('click', getPieceResults)
})
submitComment.addEventListener('click', commitNewComment);
addPieceToFavorites.addEventListener('click', commitNewFavorite);
createConcert.addEventListener('click', newConcert);



// <p id="piece-notes">${data.piece.notes}</p>
// submitForm.addEventListener('submit', () => {

// })


