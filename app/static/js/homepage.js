const showGold = document.querySelectorAll('.hover-gold');
const searchResults = document.querySelectorAll('.search-result');
const viewMore = document.querySelectorAll('.view-more-btn');
const mainContentInner = document.getElementById('main-content-area-inner');
const openProfile = document.getElementById('open-profile');
const openFavorites = document.getElementById('open-favorites');
const openConcerts = document.getElementById('open-concerts');
const returnHome = document.getElementById('return-home');

const homeSearchResults = document.getElementById('home-search-results');
//const fullFavoritesGrid = document.getElementById('full-favorites-grid');
const yourConcertsContainer = document.getElementById('your-concerts-container'); 

const openLinks = [openProfile, openFavorites, openConcerts, returnHome];
const openBrowse = document.querySelector('.open-browse');

const pieceNames = document.querySelectorAll('.piece-name');
const createConcertBtns = document.getElementsByClassName('create-concert-btn');




let user = document.getElementById('current-username').textContent;


function createUser() {
    let user = document.getElementById('current-username').textContent;
    //console.log(user);
    //console.log(JSON.parse(localStorage.getItem('user')).username);
    
    if(!JSON.parse(localStorage.getItem('user'))) {
        
        console.log('NO USER? MAKE ONE!');
        let newUser = new User(user);
        localStorage.setItem('user', JSON.stringify(newUser));

        
    } else if (user === JSON.parse(localStorage.getItem('user')).username) {

        let currentUser = JSON.parse(localStorage.getItem('user'));
        console.log(currentUser);
        displayConcerts(currentUser);
       
        return false;
    }
    
}



function displayConcerts(user) {
   
    user.concerts.forEach((concert, index) => {
        
        if(index > 2) {
            return false;
        }
        let concertContainer = document.createElement("div");
        concertContainer.classList = 'search-result';
        concertContainer.innerHTML = `
            <span class="concert-id-num">${concert.id}</span>
            
            <h1 class="concert-name" id="concert-name"> ${concert.title}</h1>
                 ${concert.pieces.map((item) => 
                     
                    `
                     
                     <p class="tiny-piece-title"> <strong> ${item.composer}</strong> ${item.title}</p>
                     
                     `.trim()
                     ).join('')}
                     <button class="primary-btn remove-concert-btn">Delete Concert</button>
                     <span class="hover-gold "></span>
                `;

        
        yourConcertsContainer.appendChild(concertContainer);
                

        }
    );
    
    removeConcertListeners();
}

function removeConcertListeners() {
    console.log(yourConcertsContainer.children);
    let concertsList = yourConcertsContainer.children;
    [...concertsList].forEach(concert => {
        concert.querySelector('.remove-concert-btn').addEventListener('click', deleteConcert)
    })
}

function deleteConcert(e) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
    let selectedConcertID = e.target.parentElement.querySelector('.concert-id-num');
    let deleteConcertUser = JSON.parse(localStorage.getItem('user'));
    deleteConcertUser.concerts.forEach((concert, index, object) => {
        // console.log(concert.id);
        // console.log(Number(selectedConcertID.textContent));
        if(concert.id === Number(selectedConcertID.textContent)) {
            console.log(object);
            object.splice(index, 1)
        } else {
            console.log("fucking bullshit cock ass");
        }
    })
    console.log(deleteConcertUser.concerts);
    localStorage.setItem('user', JSON.stringify(deleteConcertUser));
}
        
function createConcertFunction(e) {
    let composerName = e.target.parentElement.querySelector('.composer-name').textContent;
    let pieceName = e.target.parentElement.querySelector('.piece-name').textContent;
    let newPiece = new Piece(composerName, pieceName);
    let newConcert = new Concert("No Name");
    newConcert.pieces.push(newPiece);
    localStorage.setItem('newConcert', JSON.stringify(newConcert));
    location.href="/concert_builder";
    //console.log(newConcert);
}



pieceNames.forEach(piece => {
    let pieceTitleLength = piece.textContent.slice(0, 20) + '...';
    piece.textContent = pieceTitleLength;
})



function showGoldUnderline(e) {
    if(!e.target.querySelector('.hover-gold')) {
        return false;
    } else {
        e.target.querySelector('.hover-gold').classList.add('show');
    }
}

function hideGoldUnderline(e) {
    e.target.querySelector('.hover-gold').classList.remove('show');
}


function resultsExit(e) {
     e.preventDefault();
     mainContentInner.classList.add('remove');
     window.setTimeout(() => {
        [...mainContentInner.children].forEach(node => {
            node.style.display = 'none';
     })}, 1000);

   
     
     window.setTimeout(() => {
        mainContentInner.classList.remove('remove');
        if(e.target === returnHome) {

            console.log("RETURN HOME");
            homeCardEnter(mainContentInner);

        } else if (e.target === openProfile) {

            console.log("OPEN PROFILE");

        } else if (e.target === openFavorites || e.target.classList[0] === 'view-more-btn') {

            console.log("OPEN FAVORITES");
            
            favoritesEnter(mainContentInner);

        } else if (e.target === openConcerts) {

            console.log("OPEN CONCERTS");
            concertsEnter(mainContentInner);

        }
        
     }, 1500);

     
    

     
 }

 function concertsEnter(container) {
     console.log('Concerts Enter');
     
     
 }

 function homeCardEnter(container) {    
    console.log("HOME CARD ENTER");
    const fullFavoritesGrid = container.querySelector('.full-favorites-grid');
    fullFavoritesGrid.style.display = 'none';

    [...container.children].forEach(element => {
        if(element === fullFavoritesGrid) {
            return;
        } else if(element.classList[0] === 'header-row') {
            element.style.display = 'flex';
            element.querySelector('.view-more-btn').style.display = 'flex';
        } else if (element.classList[0] === 'search-results') {
            element.style.display = 'grid';
        } else if (element.classList[0] === 'your-recent-concerts') {
            element.style.display = 'block';
        }

       
    });

 }

 function favoritesEnter(container) {
    
    const fullFavoritesGrid = container.querySelector('.full-favorites-grid');
    fullFavoritesGrid.style.display = 'grid';
    document.querySelector('.header-row').style.display = 'flex';
    document.querySelector('.header-row .view-more-btn').style.display = 'none';
    [...fullFavoritesGrid.children].forEach(favorite => {
        if (favorite.querySelector('.composer-name').textContent.length >= 18) {
            favorite.querySelector('.composer-name').style.fontSize = '1.2rem';
        } else {
            return;
        }
    })
   
    
 }

 function formatResultsCard() {
    const pieceNames = document.querySelectorAll('.piece-name');

    pieceNames.forEach(piece => {
        let pieceTitleLength = piece.textContent.slice(0, 20) + '...';
        piece.textContent = pieceTitleLength;
    })
 }

//For Nav bar
//loggedIn.addEventListener('click', showDropDown);

searchResults.forEach(result => {
    result.addEventListener('mouseover', showGoldUnderline)
    result.addEventListener('mouseleave', hideGoldUnderline);

});



viewMore.forEach(link => {
     link.addEventListener('click', resultsExit);
 });

 openLinks.forEach(link => {
     link.addEventListener('click', resultsExit);
 })

window.addEventListener('DOMContentLoaded', formatResultsCard);
window.addEventListener('DOMContentLoaded', createUser)
openBrowse.addEventListener('click', showBrowse);

[...createConcertBtns].forEach(btn => {
    
    btn.addEventListener('click', createConcertFunction);
    
});
