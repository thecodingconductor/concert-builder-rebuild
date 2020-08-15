const showGold = document.querySelectorAll('.hover-gold');
//const searchResults = document.querySelectorAll('.search-result');
const viewMore = document.querySelectorAll('.view-more-btn');
const mainContentInner = document.getElementById('main-content-area-inner');
const openProfile = document.getElementById('open-profile');
const openFavorites = document.getElementById('open-favorites');
const openConcerts = document.getElementById('open-concerts');
const returnHome = document.getElementById('return-home');

//Favorites on Home Page
const homeSearchResults = document.getElementById('home-search-results');
//Favorites Page
const fullFavoritesGrid = document.getElementById('full-favorites-grid');

//Concerts on Home Page
const yourConcertsContainer = document.getElementById('your-concerts-container'); 

//Concerts on Concerts Page
const fullConcertsGrid = document.getElementById('full-concerts-grid');

const openLinks = [openProfile, openFavorites, openConcerts, returnHome];
const openBrowse = document.querySelector('.open-browse');

const pieceNames = document.querySelectorAll('.piece-name');
const createConcertBtns = document.getElementsByClassName('create-concert-btn');

const dropDownYourConcerts = document.getElementById('dropdown-your-concerts');



let user = document.getElementById('current-username').textContent;


function createUser() {
    let user = document.getElementById('current-username').textContent;
    console.log(user);
    
    if(!JSON.parse(localStorage.getItem('user'))) {
        
        console.log('NO USER? MAKE ONE!');
        let newUser = new User(user);
        localStorage.setItem('user', JSON.stringify(newUser));

        
    } else if (user === JSON.parse(localStorage.getItem('user')).username) {

        let currentUser = JSON.parse(localStorage.getItem('user'));
        
        displayConcerts(currentUser);
        return false;
    } else if (user !== JSON.parse(localStorage.getItem('user')).username) {
        let newUser = new User(user);
        localStorage.setItem('user', JSON.stringify(newUser));
    }
}

// display the concerts. 
function displayConcerts(user, all=false) {
   
    //FIXED!!!!
    if(fullConcertsGrid.children.length > 0) {
        fullConcertsGrid.innerHTML = ``;
    }

    //console.log(user);
    if(user.concerts.length === 0) {

        let notificationContainer = document.createElement("div");
        notificationContainer.classList = 'no-concerts-notification';
        notificationContainer.innerHTML = `
        <div class="search-result">
                        <h2 class="composer-name">Visit the concert builder page above to start building concerts!</h2>
        </div>
        
        
        `;
        yourConcertsContainer.appendChild(notificationContainer);

    }
    
    // if(user.favorites.length === 0) {
    //     let notificationContainer = document.createElement("div");
    //     notificationContainer.classList = 'no-favorites-notification';
    //     notificationContainer.innerHTML = `
    //         <p class="no-favorites-message">Please browse composers to add some favorites!</p>
    //     `;
    //     homeSearchResults.appendChild(notificationContainer);
    // }
    
    user.concerts.forEach((concert, index) => {
        
        if(all===false && index < 3) {
            
            console.log('all===false, index < 3');
            //fullConcertsGrid.style.display = 'none';
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
                         <span class="hover-gold"></span>
                    `;
            yourConcertsContainer.appendChild(concertContainer);
           
                    
            return false;
        } else {
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
            
            
            fullConcertsGrid.appendChild(concertContainer);
            
            }

            
        }

        
    );

    removeConcertListeners(fullConcertsGrid);
    removeConcertListeners(yourConcertsContainer);
   
   console.log(fullConcertsGrid.children);
   console.log(yourConcertsContainer.children);
   if(fullConcertsGrid.children.length === 0) {
        console.log('FULL CONCERTS GRID DISPLAY NONE');
   } else if (yourConcertsContainer.children.length === 0) {
        console.log("HOMEPAGE DISPLAY NONE");
   }



}

//This works.
function updateHoverListeners() {
    let searchResults = document.querySelectorAll('.search-result');
    
    [...searchResults].forEach(result => {
        console.log(result);
        result.addEventListener('mouseover', showGoldUnderline)
        result.addEventListener('mouseleave', hideGoldUnderline);

    });
}

//Make sure each button has a delete function
function removeConcertListeners(container) {

    let concertsList = container.children;
    
    [...concertsList].forEach(concert => {
        if(!concert.querySelector('.remove-concert-btn')) {
            return false;
        } else {
            concert.querySelector('.remove-concert-btn').addEventListener('click', deleteConcert);
        }
        
    })
}

//Remove Concert from DOM and Local Storage
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
            object.splice(index, 1);
        } else {
            return;
        }
    })
    console.log(deleteConcertUser.concerts);
    localStorage.setItem('user', JSON.stringify(deleteConcertUser));
}


//Create concert button -- send piece to the concert builder.        
function createConcertFunction(e) {
    let composerName = e.target.parentElement.querySelector('.composer-name').textContent;
    let pieceName = e.target.parentElement.querySelector('.piece-name').textContent;
    let newPiece = new Piece(composerName, pieceName);
    let newConcert = new Concert("No Name");
    newConcert.pieces.push(newPiece);
    localStorage.setItem('newConcert', JSON.stringify(newConcert));
    location.href="/concert_builder";
    
}


// Why is this here?
pieceNames.forEach(piece => {
    let pieceTitleLength = piece.textContent.slice(0, 20) + '...';
    piece.textContent = pieceTitleLength;
})


//Show and Hide the Gold Underline
function showGoldUnderline(e) {

    if(!e.target.querySelector('.hover-gold')) {
      
        return false;
    } else {
        
        e.target.querySelector('.hover-gold').classList.add('show');
    }
}

function hideGoldUnderline(e) {
    if(e.target.querySelector('.hover-gold')) {
        e.target.querySelector('.hover-gold').classList.remove('show');
    }
    return false;
    
}

//Get rid of the main content, and enter whatever was clicked.
function resultsExit(e) {
    //console.log('from results exit', e.target.id);
    //console.log(dropDownYourConcerts.id);
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

        } else if (e.target === openFavorites || !e.target.classList.contains('concert-view-more-btn') && e.target.classList.contains('view-more-btn')) {

            console.log("OPEN FAVORITES");
            console.log(e.target.classList);
            favoritesEnter(mainContentInner);

        } else if (e.target === openConcerts || e.target.classList.contains('concert-view-more-btn') || e.target.id === dropDownYourConcerts.id) {

            console.log("OPEN CONCERTS");
            concertsEnter(mainContentInner);

        }
        
     }, 1500);
 }


//Show the homeCard
 function homeCardEnter(container) {    
    
    const fullFavoritesGrid = container.querySelector('.full-favorites-grid');
    const fullConcertsGrid = container.querySelector('.full-concerts-grid');
   
    fullFavoritesGrid.style.display = 'none';
    fullConcertsGrid.style.display = 'none';

    [...container.children].forEach(element => {
        console.log(element);
        if(element === fullFavoritesGrid) {
            return;
        } else if(element.classList[0] === 'header-row') {
            element.style.display = 'flex';
            element.querySelector('.view-more-btn').style.display = 'flex';
        } else if (element.classList.length === 1 && element.classList[0] === 'search-results') {
            element.style.display = 'grid';
        }
        else if (element.classList[1] === 'your-recent-concerts') {
            element.style.display = 'grid';
        } else if (element.classList[1] === 'full-concerts-grid') {
            element.style.display = 'none';
        }
    });

 }

 //Display Concerts
 function concertsEnter(container) {
    console.log('Concerts Enter');
    const fullConcertsGrid = container.querySelector('.search-results.full-concerts-grid');
   
    
    fullConcertsGrid.style.display = 'grid';
    
    container.querySelector('.header-row.concerts-header-row').style.display = 'flex';
    container.querySelector('.header-row.concerts-header-row .view-more-btn').style.display = 'none';
    let currentUser = JSON.parse(localStorage.getItem('user'));
    
    displayConcerts(currentUser, all=true);
    
}


//Display favorite pieces
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
    });    
 }


//Shorten the piece titles
 function formatResultsCard() {
    const pieceNames = document.querySelectorAll('.piece-name');

    pieceNames.forEach(piece => {
        let pieceTitleLength = piece.textContent.slice(0, 20) + '...';
        piece.textContent = pieceTitleLength;
    })
 }


//EVENT LISTENERS

//Add clivk event to the your concets button in the dropdown
dropDownYourConcerts.addEventListener('click', (e) => {
    
    dropDownMenu.style.display = 'none';
    resultsExit(e);
    concertsEnter(mainContentInner);

})

//Add click events to all links.
viewMore.forEach(link => {
     link.addEventListener('click', resultsExit);
 });

 openLinks.forEach(link => {
     link.addEventListener('click', resultsExit);
 })

 //Format the cards to shorten piece Title
window.addEventListener('DOMContentLoaded', formatResultsCard);


window.addEventListener('DOMContentLoaded', createUser);
//Add Gold Underline
window.addEventListener('DOMContentLoaded', () => {

    let searchResults = document.querySelectorAll('.search-result');
    [...searchResults].forEach(result => {
        //console.log(result);
        result.addEventListener('mouseover', showGoldUnderline)
        result.addEventListener('mouseleave', hideGoldUnderline);

    });


})

//Open the Composer Browse
openBrowse.addEventListener('click', showBrowse);


[...createConcertBtns].forEach(btn => {
    
    btn.addEventListener('click', createConcertFunction);
    
});
