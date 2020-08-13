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




let user = document.getElementById('current-username').textContent;


function createUser() {
    let user = document.getElementById('current-username').textContent;
    
    
    if(!JSON.parse(localStorage.getItem('user'))) {
        
        console.log('NO USER? MAKE ONE!');
        let newUser = new User(user);
        localStorage.setItem('user', JSON.stringify(newUser));

        
    } else if (user === JSON.parse(localStorage.getItem('user')).username) {

        let currentUser = JSON.parse(localStorage.getItem('user'));
        
        displayConcerts(currentUser);
        return false;
    }
    
}



function displayConcerts(user, all=false) {
   
    if(fullConcertsGrid.children.length > 0) {
        fullConcertsGrid.innerHTML = ``;
    }
    if(user.concerts.length === 0) {

        let notificationContainer = document.createElement("div");
        notificationContainer.classList = 'no-concerts-notification';
        notificationContainer.innerHTML = `
        
        <p class="no-concerts-message">Please visit the concert builder to add some concerts!</p>
        
        `;
        yourConcertsContainer.appendChild(notificationContainer);

    } 
    
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

//THis is not working.
function removeConcertListeners(container) {

    let concertsList = container.children;
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
            return;
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



 function homeCardEnter(container) {    
    
    const fullFavoritesGrid = container.querySelector('.full-favorites-grid');
    const fullConcertsGrid = container.querySelector('.full-concerts-grid');
    console.log('homeCardEnter>>>>', fullConcertsGrid);
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

 function concertsEnter(container) {
    console.log('Concerts Enter');
    const fullConcertsGrid = container.querySelector('.search-results.full-concerts-grid');
   
    
    fullConcertsGrid.style.display = 'grid';
    
    container.querySelector('.header-row.concerts-header-row').style.display = 'flex';
    container.querySelector('.header-row.concerts-header-row .view-more-btn').style.display = 'none';
    let currentUser = JSON.parse(localStorage.getItem('user'));
    
    displayConcerts(currentUser, all=true);
    
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
    });

    
   
    
 }

 function formatResultsCard() {
    const pieceNames = document.querySelectorAll('.piece-name');

    pieceNames.forEach(piece => {
        let pieceTitleLength = piece.textContent.slice(0, 20) + '...';
        piece.textContent = pieceTitleLength;
    })
 }





// [...searchResults].forEach(result => {
//         console.log(result);
//         result.addEventListener('mouseover', showGoldUnderline)
//         result.addEventListener('mouseleave', hideGoldUnderline);

// });



viewMore.forEach(link => {
     link.addEventListener('click', resultsExit);
 });

 openLinks.forEach(link => {
     link.addEventListener('click', resultsExit);
 })

window.addEventListener('DOMContentLoaded', formatResultsCard);
window.addEventListener('DOMContentLoaded', createUser);
window.addEventListener('DOMContentLoaded', () => {

    let searchResults = document.querySelectorAll('.search-result');
    [...searchResults].forEach(result => {
        //console.log(result);
        result.addEventListener('mouseover', showGoldUnderline)
        result.addEventListener('mouseleave', hideGoldUnderline);

    });


})

openBrowse.addEventListener('click', showBrowse);

[...createConcertBtns].forEach(btn => {
    
    btn.addEventListener('click', createConcertFunction);
    
});
