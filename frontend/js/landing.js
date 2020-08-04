//https://www.googleapis.com/customsearch/v1?q=${search}&
const searchNav = document.getElementById('search');
const logInNav = document.getElementById('login-nav');
const signUpButton = document.getElementById('sign-up-btn');
const getStarted = document.getElementById('get-started-btn');
const search = document.getElementById('search');
const rightNavContainer = document.getElementById('right-nav-container');
const logInOpen = document.getElementById('login-nav');
const signUpOpen = document.getElementById('sign-up-btn');
const signUpModal = document.getElementById('sign-up-modal');
const signInModal = document.getElementById('sign-in-modal');
const closeSignUp = document.getElementById('close-sign-up');
const closeSignIn = document.getElementById('close-sign-in');
const browse = document.getElementById('browse');
const browseModal = document.getElementById('browse-modal');
const browseModalArea = document.getElementById('browse-modal-area');
const closeBrowse = document.getElementById('close-browse');
const searchBarOverlay = document.getElementById('search-bar-overlay');
const closeSearch = document.getElementById('close-search')


function openModal(e) {
    if(e.target.textContent.trim() === 'Log In') {
        signInModal.style.display = 'flex';
    } else {
        signUpModal.style.display = 'flex';
        console.log("SIGN UP SUCCESS");
    }
    
}

function closeModal(e) {
    if(e.target.getAttribute('id') === 'close-sign-in') {
        const signInModalParent = e.target.parentElement.parentElement.parentElement;
        signInModalParent.style.display = 'none';
    } else {
        const modalParent = e.target.parentElement.parentElement;
        modalParent.style.display = 'none';
    }
    
}

function showSearch() {
    rightNavContainer.style.display = 'none';
    searchBarOverlay.style.display = 'flex';

}

function closeSearchField() {
    searchBarOverlay.style.display = 'none';
    rightNavContainer.style.display = 'flex';
}

function showBrowse() {
    browseModal.style.display = 'flex';
    setTimeout(() => {
        browseModalArea.classList.add('show');
    }, 300);
    
}



getStarted.addEventListener('click', openModal);
logInOpen.addEventListener('click', openModal);
signUpOpen.addEventListener('click', openModal);
search.addEventListener('click', showSearch);
closeSearch.addEventListener('click', closeSearchField);
closeSignUp.addEventListener('click', closeModal);
closeSignIn.addEventListener('click', closeModal);
browse.addEventListener('click', showBrowse);
closeBrowse.addEventListener('click', () => {
    browseModalArea.classList.remove('show');
    browseModal.style.display  = 'none';
});


