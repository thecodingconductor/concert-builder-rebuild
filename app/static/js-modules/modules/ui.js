import { UISelectors } from './UISelectors';
import { Requests } from './requests';

export class UI {
  constructor() {
    this.dragStartIndex;
  }

  testImport() {
    console.log(UISelectors.siteTitle);
  }

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
      UISelectors.signInModalParent.style.display = 'none';
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
      while (bUISelectors.rowseComposers.firstChild) {
        UISelectors.browseComposers.removeChild(
          UISelectors.browseComposers.firstChild
        );
      }
    }

    Requests.openCurrentLetter();
  }

  appendCurrentLetter(item) {
    let composerResultName = document.createElement('p');
    composerResultName.textContent = `${item}`;
    UISelectors.resultsColumn.appendChild(composerResultName);
  }

  addRandomComposersToDOM(mainLetter) {
    let composerLetter = document.createElement('div');
    composerLetter.classList = 'letter';
    const randomCompArr = [];

    //THERE IS SOME FUCKING BEAMING ISSUE HERE
    //   composerLetter.innerHTML = `
    //   <h1>${mainLetter}</h1>
    //   <div class="letter-composers">

    //       ${randomCompArr.map(item => {`
    //           <p class="random-composer-links"><a href="#">item</a></p>`.trim()
    // })
    //         .join('')}
    //         }

    //   </div>`;

    UISelectors.browseComposers.appendChild(composerLetter);

    const letterLinks = document.querySelector('.letter h1');
    [...letterLinks].forEach((link) => {
      link.addEventListener('click', Requests.openCurrentLetter);
    });

    const randomComposerList = document.querySelectorAll(
      '.random-composer-links a'
    );
    [...randomComposerList].forEach((composerLink) => {
      console.log(composerLink);
      composerLink.href = `/composer/${composerLink.textContent}`;
      //composerLink.addEventListener('click', () => console.log('TITS'));
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

    searchBarResults.appendChild(resultDiv);
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
    console.log(newString.charAt(0).toUpperCase() + newString.slice(1));
    if (newString.includes('password2')) {
      return 'Repeated Password';
    }
    return newString.charAt(0).toUpperCase() + newString.slice(1);
  }

  //CONCERT BUILDER
  updateConcertDuration(durationNum) {
    UISelectors.concertMinutes.textContent = `${durationNum}`;
  }

  concertLengthJudgement(container, duration) {
    if (duration == 0) {
      UISelectors.concertConclusion.textContent = `Please add some pieces.`;
    } else if (duration < 90 && duration > 0) {
      UISelectors.concertConclusion.textContent = `Concert is potentially too short.`;
    } else if (duration >= 90 && duration <= 120) {
      UISelectors.concertConclusion.textContent = `Perfect concert length!`;
    } else {
      UISelectors.concertConclusion.textContent = `Concert is getting a bit long...`;
    }

    if (container.querySelector('.concert.intermission')) {
      console.log('no intermission yet');
    }
  }

  addPieceToDOM(piece) {
    UISelectors.concertBuilderArea.appendChild(piece);
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
          <i class="fas fa-bars" draggable="true"></i>
          <p>Intermission: ~30 minutes</p>
          <i class="fa fa-times fa-2x delete-piece" id="delete-intermission"></i>
      `;

    //ADD APP FUNCTION HERE
  }

  deleteIntermission(intermissionElement) {
    let closeIntermission = intermissionEl.querySelector(
      '#delete-intermission'
    );
    closeIntermission.addEventListener('click', (e) => {});
  }

  parseDuration() {
    return Number(
      this.querySelector('.piece-info p:last-of-type').textContent.split("'")[0]
    );
  }

  //Drag Functions

  dragStart(e) {
    this.dragStartIndex = e.target.parentElement.getAttribute('data-index');
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

  dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
  }

  //HOMEPAGE
  displayConcerts(user, all = false) {
    if (UISelectors.fullConcertsGrid.children.length > 0) {
      UISelectors.fullConcertsGrid.innerHTML = ``;
    }

    if (user.concerts.length === 0) {
      let notificationContainer = document.createElement('div');
      notificationContainer.classList = 'no-concerts-notification';
      notificationContainer.innerHTML = `
        <div class="search-result">
                        <h2 class="composer-name">Visit the concert builder page above to start building concerts!</h2>
        </div>
        
        
        `;
      yourConcertsContainer.innerHTML = '';
      yourConcertsContainer.appendChild(notificationContainer);
    }

    //SEE homepage.js Line 86
  }

  deleteConcert(e) {
    e.target.parentElement.remove();
    let selectedConcertID = e.target.parentElement.querySelector(
      '.concert-id-num'
    );
    //SWITCH TO STORAGE FUNCTION
    let deleteConcertUser = JSON.parse(localStorage.getItem('user'));
    deleteConcertUser.concerts.forEach((concert, index, object) => {
      // console.log(concert.id);
      // console.log(Number(selectedConcertID.textContent));
      if (concert.id === Number(selectedConcertID.textContent)) {
        object.splice(index, 1);
      } else {
        return;
      }
    });
    //STORAGE FUNCTION
    localStorage.setItem('user', JSON.stringify(deleteConcertUser));
  }

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

  resultsExit(e) {
    //console.log('from results exit', e.target.id);
    //console.log(dropDownYourConcerts.id);
    e.preventDefault();
    UISelectors.mainContentInner.classList.add('remove');
    window.setTimeout(() => {
      [...UISelectors.mainContentInner.children].forEach((node) => {
        node.style.display = 'none';
      });
    }, 1000);

    window.setTimeout(() => {
      UISelectors.mainContentInner.classList.remove('remove');
      if (e.target === UISelectors.returnHome) {
        //Change this
        this.homeCardEnter(UISelectors.mainContentInner);
      } else if (e.target === UISelectors.openProfile) {
      } else if (
        e.target === UISelectors.openFavorites ||
        (!e.target.classList.contains('concert-view-more-btn') &&
          e.target.classList.contains('view-more-btn'))
      ) {
        favoritesEnter(mainContentInner);
      } else if (
        e.target === UISelectors.openConcerts ||
        e.target.classList.contains('concert-view-more-btn') ||
        e.target.id === UISelectors.dropDownYourConcerts.id
      ) {
        concertsEnter(mainContentInner);
      }
    }, 1500);
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
    // let currentUser = JSON.parse(localStorage.getItem('user'));

    this.displayConcerts(currentUser, (all = true));
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

  formatResultsCard() {
    const pieceNames = document.querySelectorAll('.piece-name');
    pieceNames.forEach((piece) => {
      let pieceTitleLength = piece.textContent.slice(0, 20) + '...';
      piece.textContent = pieceTitleLength;
    });
  }
}
