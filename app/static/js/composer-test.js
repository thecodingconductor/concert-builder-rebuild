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
            pieceDetailsContainer.innerHTML = contents;
            
            if(data.piece.comments.length > 0) {
                
                
                const commentList = document.createElement('ul');
                commentList.classList = 'comment-list';
                pieceDetailsContainer.appendChild(commentList);
                data.piece.comments.forEach(comment => {
                const commentLI = document.createElement('li');
                commentLI.classList = 'comment';
                
                console.log(comment.author, comment.body, comment.timestamp);
                
                commentLI.innerHTML = `
                    <p>${comment.author} says: </p>
                    <p>${comment.body}</p>
                    <p>${comment.timestamp}</p>
                `
                commentList.appendChild(commentLI);
                
                });

            }
            

            
                            

            //const li = document.createElement('li');
            //li.innerHTML = contents;
            
            
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


function imageFetch() {
    const composerName = document.getElementById('composer-name');
    
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

    const commentBody = document.getElementById('user-comment');
    const commentPieceTitle = document.getElementById('piece-title-result');

    const entry = {
        body: commentBody.value,
        piece: commentPieceTitle.textContent
    };

    fetch(`/add_comment`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(entry),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    })
    .then(res => {
        if(res.status !== 200) {
            console.log(`There was a problem. Status code ${res.status}`);
            return;
        }

        res.json()
        .then(data => {
            console.log(data);
        })
    })
    .catch(err => {
        console.log("Fetch error: " + err);
    });

    

}

function commitNewFavorite() {
    console.log('This is from addToFavorites');

    const request = new XMLHttpRequest();
    request.open('POST', `/add_favorite/${document.getElementById('piece-title-result').textContent}`);

    request.onload = () => {
            
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
});

submitComment.addEventListener('click', commitNewComment);
addPieceToFavorites.addEventListener('click', commitNewFavorite);
createConcert.addEventListener('click', newConcert);
