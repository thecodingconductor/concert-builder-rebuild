const loggedIn = document.getElementById('logged-in');
const dropDownMenu = document.getElementById('dropdown-menu');
const showGold = document.querySelectorAll('.hover-gold');
const searchResults = document.querySelectorAll('.search-result');
const viewMore = document.querySelectorAll('.view-more-btn');

function showDropDown() {
    if(dropDownMenu.style.display === 'block') {
        dropDownMenu.style.display = 'none';
    } else {
        dropDownMenu.style.display = 'block';
    }
    
    
}

function showGoldUnderline(e) {
    
    e.target.querySelector('.hover-gold').classList.add('show');
}

function hideGoldUnderline(e) {
    
    e.target.querySelector('.hover-gold').classList.remove('show');

}


// function resultsExit(e) {
//     e.preventDefault();
//     searchResultsReverse = [...searchResults].reverse();
//     searchResultsReverse.forEach(result => {
//         result.classList.add('leave');
//     })
// }

loggedIn.addEventListener('click', showDropDown);

searchResults.forEach(result => {
    result.addEventListener('mouseover', showGoldUnderline)
    result.addEventListener('mouseleave', hideGoldUnderline);

});


// viewMore.forEach(link => {
//     link.addEventListener('click', resultsExit);
// })
