const siteTitle = document.getElementById('site-title');
const logInNav = document.getElementById('login-nav');
const signUpButton = document.getElementById('sign-up-btn');
const getStarted = document.getElementById('get-started-btn');
const search = document.getElementById('search');
const openConcertBuilder = document.getElementById('create');
const openMobileSearch = document.getElementById('open-mobile-search');
const rightNavContainer = document.getElementById('right-nav-container');
const browse = document.getElementById('browse');
const browseModal = document.getElementById('browse-modal');
const browseModalArea = document.getElementById('browse-modal-area');
const closeBrowse = document.getElementById('close-browse');
const searchBarOverlay = document.getElementById('search-bar-overlay');
const closeSearch = document.getElementById('close-search');
const searchInput = document.getElementById('search-bar-field');
const searchBarResults = document.getElementById('search-bar-results');




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
                
                const currentURL = window.location.href;
                
                const resultDiv = document.createElement("div");
                resultDiv.classList = "search-result-down";
                
                if(currentURL.includes('composer')) {
                    resultDiv.innerHTML = `
                    <p>${composer.name}</p>
                    <a href="${composer.name}"><button class="primary-btn">Visit Composer Page</button></a>

                `;
                } else {
                    resultDiv.innerHTML = `
                    <p>${composer.name}</p>
                    <a href="composer/${composer.name}"><button class="primary-btn">Visit Composer Page</button></a>

                `;
                }
                
                
                searchBarResults.appendChild(resultDiv);
            })
        }
    };

    const data = new FormData();
    data.append('search-bar-field', searchTerm);
    request.send(data);
    return false;

}



//For Base
search.addEventListener('click', showSearch);
openMobileSearch.addEventListener('click', showSearch)
closeSearch.addEventListener('click', closeSearchField);


//for Base
browse.addEventListener('click', showBrowse);
// closeBrowse.addEventListener('click', () => {
//     browseModalArea.classList.remove('show');
//     browseModal.style.display  = 'none';
// });
searchInput.addEventListener('keyup', () => {
    clearList();
    getResults();
})
