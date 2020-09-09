import { UISelectors } from './UISelectors';

class UI {
  constructor() {}

  testImport() {
    console.log(UISelectors.siteTitle);
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
}
