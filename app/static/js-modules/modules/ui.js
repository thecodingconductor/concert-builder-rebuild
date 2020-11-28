import { UISelectors } from './UISelectors';
import { Requests } from './requests';
import { Storage } from './storage';

export class Ui {
  constructor() {
    this.dragStartIndex = 0;
    this.all = true;
    this.concertPieceArr = [];
  }

  // testImport() {
  //   console.log(UISelectors.siteTitle);
  // }

  //BASE
  openModal(e) {
    document.body.style.overflow = 'hidden';
    if (e.target.textContent.trim() === 'Log In') {
      UISelectors.signInModal.style.display = 'flex';
    } else {
      UISelectors.signUpModal.style.display = 'flex';
    }
  }

  closeModal(e) {
    document.body.style.overflow = 'auto';
    if (e.target.getAttribute('id') === 'close-sign-in') {
      const signInModalParent =
        e.target.parentElement.parentElement.parentElement;
      signInModalParent.style.display = 'none';
    } else {
      const modalParent = e.target.parentElement.parentElement;
      modalParent.style.display = 'none';
    }
  }

  showSearch(e) {
    e.preventDefault();
    if (e.target.parentElement === UISelectors.openMobileSearch) {
      UISelectors.rightNavContainer.style.display = 'none';
      UISelectors.siteTitle.style.display = 'none';
      UISelectors.searchBarOverlay.style.display = 'flex';
    } else {
      UISelectors.rightNavContainer.style.display = 'none';
      UISelectors.searchBarOverlay.style.display = 'flex';
    }
  }

  closeSearchField() {
    UISelectors.searchBarOverlay.style.display = 'none';
    UISelectors.rightNavContainer.style.display = 'flex';
    UISelectors.searchBarResults.style.visibility = 'hidden';
    UISelectors.searchInput.value = '';

    if (UISelectors.siteTitle.style.display === 'none') {
      UISelectors.siteTitle.style.display = 'block';
    }
  }

  showBrowse(e) {
    e.preventDefault();
    UISelectors.browseModal.style.display = 'flex';
    setTimeout(() => {
      UISelectors.browseModalArea.classList.add('show');
    }, 300);

    if (UISelectors.browseComposers.children.length > 0) {
      while (UISelectors.browseComposers.firstChild) {
        UISelectors.browseComposers.removeChild(
          UISelectors.browseComposers.firstChild
        );
      }
    }
    Requests.browsePanelFetch();
    //Requests.openCurrentLetter();
  }

  appendCurrentLetter(item) {
    let composerResultName = document.createElement('p');
    composerResultName.textContent = `${item}`;
    UISelectors.resultsColumn.appendChild(composerResultName);
  }

  addRandomComposersToDOM(mainLetter, randomCompArr) {
    let composerLetter = document.createElement('div');
    composerLetter.classList = 'letter';



    composerLetter.innerHTML = `
       <h1>${mainLetter}</h1>
     <div class="letter-composers">

           ${randomCompArr.map((item) => {

      return `
               <p class="random-composer-links"><a href="#">${item}</a></p>`
    })
        .join('')
      }

       </div>`;

    UISelectors.browseComposers.appendChild(composerLetter);

    const letterLinks = document.querySelectorAll('.letter h1');

    [...letterLinks].forEach((link) => {
      link.addEventListener('click', Requests.openCurrentLetter);
    });

    const randomComposerList = document.querySelectorAll(
      '.random-composer-links a'
    );
    [...randomComposerList].forEach((composerLink) => {

      composerLink.href = `/composer/${composerLink.textContent}`;

    });
  }

  clearList() {
    if (UISelectors.searchInput.value.length === 0) {
      while (UISelectors.searchBarResults.firstChild) {
        UISelectors.searchBarResults.removeChild(
          UISelectors.searchBarResults.firstChild
        );
      }

      UISelectors.searchBarResults.style.visibility = 'hidden';

      return false;
    }

    while (UISelectors.searchBarResults.firstChild) {
      UISelectors.searchBarResults.removeChild(
        UISelectors.searchBarResults.firstChild
      );
    }
  }

  populateComposerSearchResults(currentURL, composer) {

    const resultDiv = document.createElement('div');
    resultDiv.classList = 'search-result-down';

    if (currentURL.includes('composer')) {
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

    UISelectors.searchBarResults.appendChild(resultDiv);
  }

  showDropDown() {
    if (UISelectors.dropDownMenu.style.display === 'block') {
      UISelectors.dropDownMenu.style.display = 'none';
    } else {
      UISelectors.dropDownMenu.style.display = 'block';
    }
  }

  //FORM VALIDATION
  showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-field error';

    const error = formControl.querySelector('.error-text');
    error.innerText = message;
  }

  showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-field success';
  }

  getFieldName(input) {
    let newString = input.id.split('-')[1];

    if (newString.includes('password2')) {
      return 'Repeated Password';
    }
    return newString.charAt(0).toUpperCase() + newString.slice(1);
  }

  //CONCERT BUILDER

  //Add Piece from local Storage to DOM
  addPieceFromLocalStorage(pObject) {

    const pieceObject = pObject.piece;
    let pieceEl = document.createElement('div');
    pieceEl.classList = 'concert';
    pieceEl.setAttribute('draggable', 'true');
    pieceEl.innerHTML = `
    
        <i class="fas fa-bars piece-drag-bars" draggable="true"></i>
        <div class="mobile-arrow-container">
          <i class="fas fa-arrow-up mobile-arrows mobile-arrow-up" id="mobile-arrow-up"></i>
          <i class="fas fa-arrow-down mobile-arrows mobile-arrow-down" id="mobile-arrow-down"></i>
        </div>
        
        <div class="info-inner-container">
            <div class="composer-info">
                <p>${pieceObject.composer}</p>
                <p>${pieceObject.nationality}</p>
                <p>${pieceObject.years}</p>
                
            </div>
            <div class="piece-info">
                <p>${pieceObject.title}</p>
                <p>${pieceObject.instrumentation}</p>
                <p>${pieceObject.duration}</p>
            </div>
        </div>
        
        <i class="fa fa-times fa-2x delete-piece"></i>
        <div class="add-intermission">
            <p>Add Intermission Here</p>
        </div>
    
    `;

    //FIX DEPENDENCIES
    UI.concertPieceArr.push(pieceEl);
    UI.concertPieceArr.forEach((piece, index) => {
      piece.setAttribute('data-index', index);
    });

    UI.addPieceToDOM(pieceEl);

    UI.deletePiecesListeners();
    UI.createIntermissionListeners();
    UI.dragListeners();
    UI.updateConcertDuration(UI.getConcertDuration(UI.concertPieceArr));

    Storage.removeItem('newConcert');

  }

  //Calculate Concert Duration
  getConcertDuration(pieceArr) {
    if (pieceArr.length === 0) {
      let empty = 0;
      UI.concertLengthJudgement(UISelectors.concertBuilderArea, empty);
      return empty;
    } else {
      const concertDurationArr = pieceArr.map(item => {
        if (item.classList.contains('intermission')) {
          return 30;
        } else {
          return Number(
            item
              .querySelector('.piece-info p:last-of-type')
              .textContent.split("'")[0]
          );
        }
      });
      let concertDuration = concertDurationArr.reduce((acc, val) => acc + val);


      UI.concertLengthJudgement(UISelectors.concertBuilderArea, concertDuration);

      return concertDuration;
    }
  }


  updateConcertDuration(durationNum) {
    UISelectors.concertMinutes.textContent = `${durationNum}`;
    UISelectors.concertMinutes.style.fontWeight = 'bold';
  }

  //Make dynamic judgement on concert length
  concertLengthJudgement(container, duration) {
    if (duration == 0) {
      UISelectors.concertConclusion.textContent = `Please add some pieces.`;
      UISelectors.concertLengthIndicator.style.display = 'none';
      UISelectors.concertBuilderTextArea.style.backgroundColor = 'lightblue';
    } else if (duration < 90 && duration > 0) {
      UISelectors.concertConclusion.textContent = `Concert is potentially too short.`;
      UISelectors.concertBuilderTextArea.style.backgroundColor = '#cdb21f';
      UISelectors.concertLengthIndicator.classList = 'fa fa-exclamation-triangle concert-length-indicator';
      UISelectors.concertLengthIndicator.style.display = 'block';
    } else if (duration >= 90 && duration <= 120) {
      UISelectors.concertConclusion.textContent = `Perfect concert length!`;
      UISelectors.concertBuilderTextArea.style.backgroundColor = '#2e773f';
      UISelectors.concertLengthIndicator.classList = 'fa fa-check concert-length-indicator';
    } else {
      UISelectors.concertConclusion.textContent = `Concert is potentially too long...`;
      UISelectors.concertBuilderTextArea.style.backgroundColor = '#a7303e';
      UISelectors.concertLengthIndicator.classList = 'fa fa-exclamation-triangle concert-length-indicator';
    }

    if (container.querySelector('.concert.intermission')) {
      console.log('no intermission yet');
    }
  }

  //Add Event Listeners for deleting pieces
  deletePiecesListeners() {
    let deletePieces = UISelectors.concertBuilderArea.querySelectorAll('.delete-piece');
    deletePieces.forEach((piece) => {
      piece.addEventListener('click', UI.removePiece);
    });
  }

  //Add Event Listeners to create Intermission
  createIntermissionListeners() {

    let intermissionList = UISelectors.concertBuilderArea.querySelectorAll(
      '.add-intermission'
    );
    intermissionList.forEach((intermission) => {
      intermission.addEventListener('click', UI.createIntermission);
    });
  }



  removePiece(e) {
    //get parent El
    let selectedConcert = e.target.parentElement;
    console.log(selectedConcert);

    //Remove Selected Piece from Array
    UI.concertPieceArr.splice(UI.concertPieceArr.indexOf(selectedConcert), 1);

    //Remove Piece from DOM
    selectedConcert.remove();

    //Update Data-Index Attribute
    UI.concertPieceArr.forEach((piece, index) => {
      piece.setAttribute('data-index', index);
    });
    UI.updateConcertDuration(UI.getConcertDuration(UI.concertPieceArr));
  }


  addPieceToDOM(piece) {

    // console.log(`Add Piece to Dom Piece == ${piece.textContent}`);

    UISelectors.concertBuilderArea.appendChild(piece);
    UI.concertPieceArr.forEach((piece, index) => {
      piece.setAttribute('data-index', index);
    });

  }

  clearFaveList() {
    while (UISelectors.favoritesSearchResults.firstChild) {
      UISelectors.favoritesSearchResults.removeChild(
        UISelectors.favoritesSearchResults.firstChild
      );
    }
  }

  showIntermission(e) {
    if (UISelectors.concertBuilderArea.querySelector('.concert.intermission')) {
      return false;
    }

    if (e.target.classList[0] === 'concert') {
      e.target.classList.add('show');
    } else if (
      e.target === UISelectors.concertBuilderArea &&
      UISelectors.concertBuilderArea.querySelector('.concert.show')
    ) {
      let currentConcert = UISelectors.concertBuilderArea.querySelector(
        '.concert.show'
      );
      currentConcert.classList.remove('show');
    }
  }

  saveConcertTitle() {
    let concertTitle = UISelectors.concertTitleInput.value;

    if (concertTitle === '') {
      //Please Provide A Title.
    } else {
      //Change DOM
      UISelectors.rightSearchArea.classList.add('show');
      UISelectors.concertTitleHeader.textContent = `${concertTitle}`;
    }
  }

  removeConcertTitle() {
    UISelectors.rightSearchArea.classList.remove('show');
  }

  createIntermission(e) {
    if (!UISelectors.concertBuilderArea.querySelector('.add-intermission')) {
      return false;
    }

    //Get Parent
    let parentConcert = e.target.parentElement.parentElement;
    parentConcert.classList.remove('show');

    //Make Intermission Element
    let intermissionEl = document.createElement('div');
    intermissionEl.classList = 'concert intermission';
    //intermissionEl.setAttribute("draggable", "true");
    intermissionEl.innerHTML = `
          <i class="fas fa-bars piece-drag-bars" draggable="true"></i>
          <p>Intermission</p>
          <i class="fa fa-times fa-2x delete-piece" id="delete-intermission"></i>
      `;

    //ADD APP FUNCTION HERE
    UI.concertPieceArr.splice(
      UI.concertPieceArr.indexOf(parentConcert) + 1,
      0,
      intermissionEl
    );

    UI.concertPieceArr.forEach((piece, index) => {
      piece.setAttribute('data-index', index);
    });
    UISelectors.concertBuilderArea.innerHTML = '';
    UI.concertPieceArr.forEach((piece) => {
      UISelectors.concertBuilderArea.appendChild(piece);
    });


    UI.updateConcertDuration(UI.getConcertDuration(UI.concertPieceArr));

    //Delete Intermission
    let closeIntermission = intermissionEl.querySelector('#delete-intermission');
    closeIntermission.addEventListener('click', (e) => {
      UI.concertPieceArr.splice(UI.concertPieceArr.indexOf(e.target.parentElement), 1);

      //Remove Intermission from DOM
      e.target.parentElement.remove();

      //Update Data-Index Attribute
      UI.concertPieceArr.forEach((piece, index) => {
        piece.setAttribute('data-index', index);
      });

      UI.updateConcertDuration(UI.getConcertDuration(UI.concertPieceArr));
    });
  }

  deleteIntermission(intermissionElement) {
    let closeIntermission = intermissionElement.querySelector(
      '#delete-intermission'
    );
    closeIntermission.addEventListener('click', (e) => { });
  }



  parseDuration() {
    return Number(
      this.querySelector('.piece-info p:last-of-type').textContent.split("'")[0]
    );
  }

  //Drag Functions

  dragStart(e) {
    UI.dragStartIndex = e.target.parentElement.getAttribute('data-index');
  }

  dragEnter() {
    this.classList.add('over');
  }

  dragLeave() {
    this.classList.remove('over');
  }

  dragOver(e) {
    e.preventDefault();
  }

  dragDrop(e) {
    const dragEndIndex = +e.target.getAttribute('data-index');

    UI.swapItems(UI.dragStartIndex, dragEndIndex);
    e.target.classList.remove('over');
  }

  swapItemUp = e => {

    console.log(`swapup ${e.target}`);
    const startIndex = Number(e.target.parentElement.parentElement.getAttribute('data-index'));
    const endIndex = startIndex - 1;
    console.log(endIndex);

    if (startIndex === 0) {
      return false;
    }

    UI.swapItems(startIndex, endIndex);
  }

  swapItemDown = e => {

    const startIndex = Number(e.target.parentElement.parentElement.getAttribute('data-index'));
    const endIndex = startIndex + 1;


    if (endIndex === (UI.concertPieceArr.length)) {
      return false;
    }

    UI.swapItems(startIndex, endIndex);
  }

  dragListeners() {
    const pieceDragBars = document.querySelectorAll('.piece-drag-bars');
    const dragBoxes = document.querySelectorAll('.concert');
    const mobileArrowUp = document.querySelectorAll('.mobile-arrow-up');
    const mobileArrowDown = document.querySelectorAll('.mobile-arrow-down');

    mobileArrowUp.forEach((arrow) => {

      arrow.addEventListener('click', UI.swapItemUp);

    });

    mobileArrowDown.forEach((arrow) => {
      arrow.addEventListener('click', UI.swapItemDown);
    })



    pieceDragBars.forEach((drag) => {
      drag.addEventListener('dragstart', UI.dragStart);
    });

    dragBoxes.forEach((box) => {
      box.addEventListener('dragover', UI.dragOver);
      box.addEventListener('drop', UI.dragDrop);
      box.addEventListener('dragenter', UI.dragEnter);
      box.addEventListener('dragleave', UI.dragLeave);
    });

  }

  swapItems(fromIndex, toIndex) {

    const itemOne = UI.concertPieceArr[fromIndex];
    const itemTwo = UI.concertPieceArr[toIndex];


    UI.concertPieceArr.forEach(item => console.log(item));

    UI.concertPieceArr[fromIndex] = itemTwo;
    UI.concertPieceArr[toIndex] = itemOne;

    UISelectors.concertBuilderArea.innerHTML = ``;



    UI.concertPieceArr.forEach((item) => {
      UI.addPieceToDOM(item);
    });
  }



  //HOMEPAGE
  displayConcerts(user, all = false) {
    if (UISelectors.fullConcertsGrid.children.length > 0) {
      UISelectors.fullConcertsGrid.innerHTML = ``;
    }

    if (user.concerts.length === 0 || user.concerts.length === undefined) {
      let notificationContainer = document.createElement('div');
      notificationContainer.classList = 'no-concerts-notification';
      notificationContainer.innerHTML = `
        <div class="search-result">
                        <h2 class="composer-name">Visit the concert builder page above to start building concerts!</h2>
        </div>
        
        
        `;
      UISelectors.yourConcertsContainer.innerHTML = '';
      UISelectors.yourConcertsContainer.appendChild(notificationContainer);
    }



    //SEE homepage.js Line 86
    user.concerts.forEach((concert, index) => {
      if (all === false && index < 3) {

        //fullConcertsGrid.style.display = 'none';
        let concertContainer = document.createElement('div');
        concertContainer.classList = 'search-result';
        concertContainer.innerHTML = `
                  <span class="concert-id-num">${concert.id}</span>
                  
                  <h1 class="concert-name" id="concert-name"> ${concert.title
          }</h1>
                       ${concert.pieces
            .map((item) => {
              return `<p class="tiny-piece-title"> <strong> ${item.composer}</strong> ${item.title}</p>
                           `.trim();
            })
            .join('')}
                           <button class="primary-btn remove-concert-btn">Edit Concert</button>
                           <span class="hover-gold"></span>
                      `;

        UISelectors.yourConcertsContainer.appendChild(concertContainer);

        return false;
      } else {
        let concertContainer = document.createElement('div');
        concertContainer.classList = 'search-result';
        concertContainer.innerHTML = `
                  <span class="concert-id-num">${concert.id}</span>
                  
                  <h1 class="concert-name" id="concert-name"> ${concert.title
          }</h1>
                       ${concert.pieces
            .map((item) =>
              `
                           
                           <p class="tiny-piece-title"> <strong> ${item.composer}</strong> ${item.title}</p>
                           
                           `.trim()
            )
            .join('')}
                           <button class="primary-btn remove-concert-btn">Edit Concert</button>
                           <span class="hover-gold "></span>
                      `;

        UISelectors.fullConcertsGrid.appendChild(concertContainer);
      }
    });

    UI.editConcertListeners(UISelectors.fullConcertsGrid);
    UI.editConcertListeners(UISelectors.yourConcertsContainer);

    //THIS IS THE CORRECT BRACKET FUCK ESLINT AND PRETTIER.
  }

  updateHoverListeners() {
    let searchResults = document.querySelectorAll('.search-result');

    [...searchResults].forEach((result) => {

      result.addEventListener('mouseover', UI.showGoldUnderline);
      result.addEventListener('mouseleave', UI.hideGoldUnderline);
    });
  }

  // removeConcertListeners(container) {
  //   let concertsList = container.children;

  //   [...concertsList].forEach((concert) => {
  //     if (!concert.querySelector('.remove-concert-btn')) {
  //       return false;
  //     } else {
  //       concert
  //         .querySelector('.remove-concert-btn')
  //         .addEventListener('click', UI.deleteConcert);
  //     }
  //   });
  // }

  editConcertListeners(container) {
    let concertsList = container.children;

    [...concertsList].forEach((concert) => {
      if (!concert.querySelector('.remove-concert-btn')) {
        return false;
      } else {
        concert
          .querySelector('.remove-concert-btn')
          .addEventListener('click', UI.editConcert);
      }
    });
  }

  editConcert(e) {
    let selectedConcertID = e.target.parentElement.querySelector(
      '.concert-id-num'
    );

    selectedConcertID = Number(selectedConcertID.textContent);

    const editConcertID = {
      id: selectedConcertID
    }

    Storage.setItem('editConcertID', editConcertID);
    location.href = '/concert_builder';
  }

  // deleteConcert(e) {
  //   e.target.parentElement.remove();
  //   let selectedConcertID = e.target.parentElement.querySelector(
  //     '.concert-id-num'
  //   );
  //   //SWITCH TO STORAGE FUNCTION
  //   let deleteConcertUser = Storage.getUser();
  //   deleteConcertUser.concerts.forEach((concert, index, object) => {

  //     if (concert.id === Number(selectedConcertID.textContent)) {
  //       object.splice(index, 1);
  //     } else {
  //       return;
  //     }
  //   });
  //   //STORAGE FUNCTION
  //   Storage.setItem('user', deleteConcertUser);

  // }

  //Where to call this?
  shortenPieceTitle(pieceNames) {
    pieceNames.forEach((piece) => {
      let pieceTitleLength = piece.textContent.slice(0, 20) + '...';
      piece.textContent = pieceTitleLength;
    });
  }

  showGoldUnderline(e) {
    if (!e.target.querySelector('.hover-gold')) {
      return false;
    } else {
      e.target.querySelector('.hover-gold').classList.add('show');
    }
  }

  hideGoldUnderline(e) {
    if (e.target.querySelector('.hover-gold')) {
      e.target.querySelector('.hover-gold').classList.remove('show');
    }
    return false;
  }



  homeCardEnter(container) {
    const fullFavoritesGrid = container.querySelector('.full-favorites-grid');
    const fullConcertsGrid = container.querySelector('.full-concerts-grid');

    fullFavoritesGrid.style.display = 'none';
    fullConcertsGrid.style.display = 'none';

    [...container.children].forEach((element) => {
      if (element === fullFavoritesGrid) {
        return;
      } else if (element.classList[0] === 'header-row') {
        element.style.display = 'flex';
        element.querySelector('.view-more-btn').style.display = 'flex';
      } else if (
        element.classList.length === 1 &&
        element.classList[0] === 'search-results'
      ) {
        element.style.display = 'grid';
      } else if (element.classList[1] === 'your-recent-concerts') {
        element.style.display = 'grid';
      } else if (element.classList[1] === 'full-concerts-grid') {
        element.style.display = 'none';
      }
    });
  }

  concertsEnter(container) {
    const fullConcertsGrid = container.querySelector(
      '.search-results.full-concerts-grid'
    );

    fullConcertsGrid.style.display = 'grid';

    container.querySelector('.header-row.concerts-header-row').style.display =
      'flex';
    container.querySelector(
      '.header-row.concerts-header-row .view-more-btn'
    ).style.display = 'none';
    //Change this
    let currentUser = Storage.getUser();


    UI.displayConcerts(currentUser, true);
  }


  favoritesEnter(container) {
    const fullFavoritesGrid = container.querySelector('.full-favorites-grid');
    fullFavoritesGrid.style.display = 'grid';
    document.querySelector('.header-row').style.display = 'flex';
    document.querySelector('.header-row .view-more-btn').style.display = 'none';
    [...fullFavoritesGrid.children].forEach((favorite) => {
      if (favorite.querySelector('.composer-name').textContent.length >= 18) {
        favorite.querySelector('.composer-name').style.fontSize = '1.2rem';
      } else {
        return;
      }
    });
  }


  resultsExit(e) {

    e.preventDefault();
    UISelectors.mainContentInner.classList.add('remove');
    window.setTimeout(() => {
      [...UISelectors.mainContentInner.children].forEach((node) => {
        node.style.display = 'none';
      });
    }, 300);

    window.setTimeout(() => {
      UISelectors.mainContentInner.classList.remove('remove');
      if (e.target === UISelectors.returnHome) {
        //Change this
        UI.homeCardEnter(UISelectors.mainContentInner);
      } else if (e.target === UISelectors.openProfile) {
      } else if (
        e.target === UISelectors.openFavorites ||
        (!e.target.classList.contains('concert-view-more-btn') &&
          e.target.classList.contains('view-more-btn'))
      ) {
        UI.favoritesEnter(UISelectors.mainContentInner);
      } else if (
        e.target === UISelectors.openConcerts ||
        e.target.classList.contains('concert-view-more-btn') ||
        e.target.id === UISelectors.dropDownYourConcerts.id
      ) {
        UI.concertsEnter(UISelectors.mainContentInner);
      }
    }, 500);
  }

  //Shorten Piece title if necessary
  formatResultsCard() {
    const pieceNames = document.querySelectorAll('.piece-name');
    pieceNames.forEach((piece) => {
      let pieceTitleLength = piece.textContent.slice(0, 30) + '...';
      piece.textContent = pieceTitleLength;
    });
  }

  //Clear Composer Search Results
  clearComposerLinks() {
    if (UISelectors.searchField.value.length === 0) {
      while (UISelectors.composerLinks.firstChild) {
        UISelectors.composerLinks.removeChild(UISelectors.composerLinks.firstChild);
      }

      return false;
    }

    while (UISelectors.composerLinks.firstChild) {
      UISelectors.composerLinks.removeChild(UISelectors.composerLinks.firstChild);
    }
  }


  //COMPOSER PAGE
  clearComposerResults() {
    UISelectors.pieceDetailsContainer.innerHTML = '';
  }

  showButtonError(button, message) {
    let initalText = button.textContent;
    button.classList.add('error');
    button.textContent = `${message}`;
    window.setTimeout(() => {
      button.classList.remove('error');
      button.textContent = initalText
    }, 1000);
  }

  scrollPieceIntoView() {
    UISelectors.pieceDetailsContainer.scrollIntoView();
  }


}


export const UI = new Ui();
