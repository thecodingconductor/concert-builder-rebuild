
//Nav Bar Elements
const loggedIn = document.getElementById('logged-in');
const dropDownMenu = document.getElementById('dropdown-menu');
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

console.log(createConcertBtns);

//Concerts Functionality 
class Concert {
    constructor(title, pieces = []) {
        this.title = title;
        this.pieces = pieces;
    }
}

class Piece {
    constructor(composer, title,) {
        this.composer = composer;
        this.title = title;
    }
}

function createConcertFunction(e) {
    let composerName = e.target.parentElement.querySelector('.composer-name').textContent;
    let pieceName = e.target.parentElement.querySelector('.piece-name').textContent;
    let newPiece = new Piece(composerName, pieceName);
    let newConcert = new Concert("No Name");
    newConcert.pieces.push(newPiece);
    localStorage.setItem('newConcert', JSON.stringify(newConcert));
    location.href="/concert_builder";
    console.log(newConcert);
}

[...createConcertBtns].forEach(btn => {
    
    btn.addEventListener('click', createConcertFunction);
    
})


pieceNames.forEach(piece => {
    let pieceTitleLength = piece.textContent.slice(0, 20) + '...';
    piece.textContent = pieceTitleLength;
})


//FOr Nav Bar
function showDropDown() {
    if(dropDownMenu.style.display === 'block') {
        dropDownMenu.style.display = 'none';
    } else {
        dropDownMenu.style.display = 'block';
    }
}

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

     console.log(e.target);
     console.log(e.target.classList[0]);
    //  if(e.target === returnHome) {
    //      console.log("RETURN HOME");
    //  } else if (e.target === openProfile) {
    //      console.log("OPEN PROFILE");
    //  } else if (e.target === openFavorites) {
    //      console.log("OPEN FAVORITES");
    //  } else if (e.target === openConcerts) {
    //      console.log("OPEN CONCERTS");
    //  }
     
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

        }
        
     }, 1500);

     
    

     //window.setTimeout(() => {
      //  mainContentInner.classList.remove('remove');
     //}, 3000);
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
    //window.setTimeout(() => {
    //    fullFavoritesGrid.classList.add('animate');
    //}, 1000);
    
 }

 function formatResultsCard() {
    const pieceNames = document.querySelectorAll('.piece-name');

    pieceNames.forEach(piece => {
        let pieceTitleLength = piece.textContent.slice(0, 20) + '...';
        piece.textContent = pieceTitleLength;
    })
 }

//For Nav bar
loggedIn.addEventListener('click', showDropDown);

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
openBrowse.addEventListener('click', showBrowse)