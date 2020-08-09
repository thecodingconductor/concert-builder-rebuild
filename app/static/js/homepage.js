
//Nav Bar Elements
const loggedIn = document.getElementById('logged-in');
const dropDownMenu = document.getElementById('dropdown-menu');
const showGold = document.querySelectorAll('.hover-gold');
const searchResults = document.querySelectorAll('.search-result');
const viewMore = document.querySelectorAll('.view-more-btn');
const mainContentInner = document.getElementById('main-content-area-inner');
const openProfile = document.querySelector('.open-profile');
const openFavorites = document.querySelector('.open-favorites');
const openConcerts = document.querySelector('.open-concerts');

const openLinks = [openProfile, openFavorites, openConcerts];


const pieceNames = document.querySelectorAll('.piece-name');

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
     //window.setTimeout(() => {
       //  mainContentInner.style.display = 'none';
     //}, 1000);
     //mainContentInner.classList.remove('remove');

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
