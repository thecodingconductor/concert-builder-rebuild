//https://www.googleapis.com/customsearch/v1?key=AIzaSyC72emsapcuXsF64Hrn7ca_9xIbAUbn7DY&cx=014124391945830086859:aisrauxjejy&q=${search}&
//Nav Bar - to Base file
const siteTitle = document.getElementById('site-title');
const logInNav = document.getElementById('login-nav');
const signUpButton = document.getElementById('sign-up-btn');
const getStarted = document.getElementById('get-started-btn');
const search = document.getElementById('search');
const createConcert = document.getElementById('create');
const openMobileSearch = document.getElementById('open-mobile-search');
const rightNavContainer = document.getElementById('right-nav-container');
//Unique for Landing

const logInOpen = document.getElementById('login-nav');
const signUpOpen = document.getElementById('sign-up-btn');
const signUpModal = document.getElementById('sign-up-modal');
const signInModal = document.getElementById('sign-in-modal');
const closeSignUp = document.getElementById('close-sign-up');
const closeSignIn = document.getElementById('close-sign-in');
//For Base
const browse = document.getElementById('browse');
const browseModal = document.getElementById('browse-modal');
const browseModalArea = document.getElementById('browse-modal-area');
const closeBrowse = document.getElementById('close-browse');
const searchBarOverlay = document.getElementById('search-bar-overlay');
const closeSearch = document.getElementById('close-search');
const searchInput = document.getElementById('search-bar-field');
const searchBarResults = document.getElementById('search-bar-results');

//For Base
function openModal(e) {
    document.body.style.overflow = 'hidden';
    if(e.target.textContent.trim() === 'Log In') {
        signInModal.style.display = 'flex';
    } else {
        signUpModal.style.display = 'flex';
        console.log("SIGN UP SUCCESS");
    }
    
}

function closeModal(e) {
    document.body.style.overflow = 'auto';
    if(e.target.getAttribute('id') === 'close-sign-in') {
        const signInModalParent = e.target.parentElement.parentElement.parentElement;
        signInModalParent.style.display = 'none';
    } else {
        const modalParent = e.target.parentElement.parentElement;
        modalParent.style.display = 'none';
    }
    
}

function showSearch(e) {
    e.preventDefault();
    if(e.target.parentElement === openMobileSearch) {
        rightNavContainer.style.display = 'none';
        siteTitle.style.display = 'none';
        searchBarOverlay.style.display = 'flex';
    } else{ 
        rightNavContainer.style.display = 'none';
        searchBarOverlay.style.display = 'flex';
    }
    

}

function closeSearchField() {
    searchBarOverlay.style.display = 'none';
    rightNavContainer.style.display = 'flex';
    searchBarResults.style.visibility = 'hidden';
    searchInput.value = '';

    if(siteTitle.style.display === 'none') {
        siteTitle.style.display = 'block';
    }
}

function showBrowse(e) {
    e.preventDefault();
    browseModal.style.display = 'flex';
    setTimeout(() => {
        browseModalArea.classList.add('show');
    }, 300);
    
}

function clearList() {
    if (searchInput.value.length === 0) {
        while(searchBarResults.firstChild) {
            searchBarResults.removeChild(searchBarResults.firstChild);
        }

        searchBarResults.style.visibility = "hidden";

        return false;
    }

    while(searchBarResults.firstChild) {
        searchBarResults.removeChild(searchBarResults.firstChild);
    }
}

function getResults() {
    searchBarResults.style.visibility = "visible";
    const request = new XMLHttpRequest();
    const searchTerm = searchInput.value;
    request.open('POST', '/composers');
    request.onload = () => {
        const data = JSON.parse(request.response);
        if(data.success) {
            const composer_data = JSON.parse(data.composers);
            console.log(composer_data);

            

            composer_data.forEach(composer => {
                console.log(composer);
                const resultDiv = document.createElement("div");
                resultDiv.classList = "search-result-down";
                resultDiv.innerHTML = `
                    <p>${composer.name}</p>
                    
                    <a href="composer/${composer.name}"><button class="primary-btn">Visit Composer Page</button></a>

                `;
                searchBarResults.appendChild(resultDiv);
            })
        }
    };

    const data = new FormData();
    data.append('search-bar-field', searchTerm);
    request.send(data);
    return false;

}


//for Landing Only
getStarted.addEventListener('click', openModal);
logInOpen.addEventListener('click', openModal);
signUpOpen.addEventListener('click', openModal);
closeSignUp.addEventListener('click', closeModal);
closeSignIn.addEventListener('click', closeModal);

//For Base
search.addEventListener('click', showSearch);
openMobileSearch.addEventListener('click', showSearch)
closeSearch.addEventListener('click', closeSearchField);


//for Base
browse.addEventListener('click', showBrowse);
closeBrowse.addEventListener('click', () => {
    browseModalArea.classList.remove('show');
    browseModal.style.display  = 'none';
});
searchInput.addEventListener('keyup', () => {
    clearList();
    getResults();
})



