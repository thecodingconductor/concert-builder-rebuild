//https://www.googleapis.com/customsearch/v1?q=${search}&
const searchNav = document.getElementById('search');
const logInNav = document.getElementById('login-nav');
const signUpButton = document.getElementById('sign-up-btn');
const getStarted = document.getElementById('get-started-btn');
const search = document.getElementById('search');
const logInOpen = document.getElementById('login-nav');
const signUpOpen = document.getElementById('sign-up-btn');
const signUpModal = document.getElementById('sign-up-modal');
const signInModal = document.getElementById('sign-in-modal');
const closeSignUp = document.getElementById('close-sign-up');
const closeSignIn = document.getElementById('close-sign-in');

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

}

getStarted.addEventListener('click', openModal);
logInOpen.addEventListener('click', openModal);
signUpOpen.addEventListener('click', openModal);
search.addEventListener('click', showSearch);
closeSignUp.addEventListener('click', closeModal);
closeSignIn.addEventListener('click', closeModal);
