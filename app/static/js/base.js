const siteTitle = document.getElementById('site-title');
const logInNav = document.getElementById('login-nav');
const signUpButton = document.getElementById('sign-up-btn');

const search = document.getElementById('search');
const openConcertBuilder = document.getElementById('create');

const openMobileSearch = document.getElementById('open-mobile-search');
const rightNavContainer = document.getElementById('right-nav-container');
//Browse Modal
const browse = document.getElementById('browse');
const browseModal = document.getElementById('browse-modal');
const browseModalArea = document.getElementById('browse-modal-area');
const closeBrowse = document.getElementById('close-browse');
const browseComposers = document.getElementById('browse-composers');

//Dynamic Search Result Elements
const searchBarOverlay = document.getElementById('search-bar-overlay');
const closeSearch = document.getElementById('close-search');
const searchInput = document.getElementById('search-bar-field');
const searchBarResults = document.getElementById('search-bar-results');

//Login and Sign Up Elements
const logInOpen = document.getElementById('login-nav');
const signUpOpen = document.getElementById('sign-up-btn');
const signUpModal = document.getElementById('sign-up-modal');
const signInModal = document.getElementById('sign-in-modal');
const closeSignUp = document.getElementById('close-sign-up');
const closeSignIn = document.getElementById('close-sign-in');
const loggedIn = document.getElementById('logged-in');
const dropDownMenu = document.getElementById('dropdown-menu');
const registerUserBtn = document.getElementById('register-user-btn');
const logInUserBtn = document.getElementById('login-user-btn');

//Registration Validation
const registrationForm = document.getElementById('sign-up-form');
const registerUsername = document.getElementById('register-username');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const registerPassword2 = document.getElementById('register-password2');

//Log In Validation
const logInForm = document.getElementById('sign-in-form');
const loginUsername = document.getElementById('login-password');
const loginPassword = document.getElementById('login-password');


//OBJECT DECLARATION
class User {
    constructor(username, concerts = []) {
        
        this.username = username;
        this.concerts = concerts;
    }
}

class Concert {
    constructor(title, pieces = []) {
        this.id = generateRandomNumber(0, 50000);
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

//Random Number Generator
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}


function openModal(e) {
    document.body.style.overflow = 'hidden';
    if(e.target.textContent.trim() === 'Log In') {
        signInModal.style.display = 'flex';
    } else {
        signUpModal.style.display = 'flex';
        
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

//Show the Search Bar
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

//Close Search Bar
function closeSearchField() {
    searchBarOverlay.style.display = 'none';
    rightNavContainer.style.display = 'flex';
    searchBarResults.style.visibility = 'hidden';
    searchInput.value = '';

    if(siteTitle.style.display === 'none') {
        siteTitle.style.display = 'block';
    }
}


//Show Browse Side Bar, Populate with results
function showBrowse(e) {
    e.preventDefault();
    browseModal.style.display = 'flex';
    setTimeout(() => {
        browseModalArea.classList.add('show');
    }, 300);
    fetch('/browse_composer_list')
        .then(res => {
            if(res.status != 200) {
                console.log(`There was a problem. Status code ${res.status}`);
                return;
            }

            res.json()
            .then(data => {
                
                //this is the composers array. 
                composersArr = data.composers_array;
                composersArr.forEach(group => { 
                    const mainLetter = group[0][0];
                   

                    let composerLetter = document.createElement('div');
                    composerLetter.classList = 'letter';
                    const randomCompArr = [];
                    for(let i =0; i < 3; i++) {
                        randomCompArr.push(group[generateRandomNumber(0, group.length)]);
                    }
                   

                    
                    
                    composerLetter.innerHTML = `
                        <h1>${mainLetter}</h1>
                        <div class="letter-composers">
                        
                            ${randomCompArr.map((item, i) => `
                                <p class="random-composer-links"><a href="#">${item}</a></p>
                            `.trim()).join('')}

                        </div>`;
                    
                    
                    
                    browseComposers.appendChild(composerLetter);
                    const randomComposerList = document.querySelectorAll('.random-composer-links a');
                    console.log(randomComposerList);
                    [...randomComposerList].forEach(composerLink => {
                        console.log(composerLink);
                        composerLink.href = `/composer/${composerLink.textContent}`;
                        composerLink.addEventListener('click', () => console.log('TITS'));
        });
                })
            })

        })
        .catch(err => {
            console.log("Fetch error: " + err);
        });

        
    
}


//Clear the search results
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

//Retrieve the list of composer search results
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

function showDropDown() {
    if(dropDownMenu.style.display === 'block') {
        dropDownMenu.style.display = 'none';
    } else {
        dropDownMenu.style.display = 'block';
    }
}

function registerValidation(e) {
    e.preventDefault();
    let currentForm = e.target.parentElement;
    console.log(currentForm);
    let formFields = currentForm.querySelectorAll('.form-field');
    console.log(formFields);
    [...formFields].forEach(field => {
        console.log(field);
        if(field.querySelector('.error-text')) {
            console.log('there was an error');
        } else {
            console.log('there are no errors');
        }
        
    })
    console.log('register prevented.');
}

//FORM VALIDATION EXCERPT







function logInValidation(e) {
    e.preventDefault();
    console.log('Log In Prevented');
}



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

// 

//getStarted.addEventListener('click', openModal);
if(logInOpen && signUpOpen) {
    logInOpen.addEventListener('click', openModal);
    signUpOpen.addEventListener('click', openModal);
    closeSignUp.addEventListener('click', closeModal);
    closeSignIn.addEventListener('click', closeModal);
}

if(loggedIn) {
    loggedIn.addEventListener('click', showDropDown);
}




function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-field error';    
}

function showSuccess(input) {
    console.log('show success');
    const formControl = input.parentElement;
    console.log(formControl);
    formControl.className = 'form-field success';
}

function checkEmail(input) {
    console.log('check email' + input.value);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkRequired(inputArr) {
    console.log('check Required');
    let isRequired = false;
    inputArr.forEach(input => {
        console.log(input.value);
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required.`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}


function checkLength(input, min, max) {
    console.log("CHECK LENGTH");
    console.log(input.value);
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters}`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(input1, input2) {
    console.log('checkPasswordsMatch');
    console.log(input1.value, input2.value);
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

function getFieldName(input) {
    
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkAllValid(formInputArr) {
    console.log('checkAllValid');
    let allValid = true;
    formInputArr.forEach(field => {
        if (field.parentElement.classList.contains('error') && field.parentElement.classList.length > 1) {
            allValid = false;
            return allValid;
        }
    });
    
    return allValid;
}


registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
   
    let formInputs = e.target.parentElement.querySelectorAll('.form-field input');
    
    if(!checkRequired([...formInputs])) {
        
        checkLength(registerUsername, 6, 20);
        checkLength(registerPassword, 6 ,20);
        checkEmail(registerEmail);
        checkPasswordsMatch(registerPassword, registerPassword2)
        if(checkAllValid([...formInputs])) {
            
            registrationForm.submit();
        }
    }
 
})






logInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("login form prevented");
});

//Check to see if user is logged in or not.
// if(registerUserBtn && logInUserBtn) {
//     registerUserBtn.addEventListener('click', (e) => {
//         console.log(e.target);
//     });

//     logInUserBtn.addEventListener('click', (e) => {
//         console.log(e.target);
//     });
// }

//registerUserBtn.addEventListener('click', registerValidation);
//logInUserBtn.addEventListener('click', logInValidation);
