import { UISelectors } from './UISelectors';

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

    //TODO ADD BROWSE COMPOSER FETCH
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

  showDropDown() {
    if (UISelectors.dropDownMenu.style.display === 'block') {
      UISelectors.dropDownMenu.style.display = 'none';
    } else {
      UISelectors.dropDownMenu.style.display = 'block';
    }
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
}
