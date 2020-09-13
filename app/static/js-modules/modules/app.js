import { UISelectors } from './UISelectors';
import { UI } from './ui';
import { HTTP } from './http';
import { User, Concert, Piece } from './sessionObj';
import { Forms } from './forms';
import { Nav } from './nav';
import { Storage } from './storage';
import { Requests } from './requests';

class APP {
  constructor() { }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  initBase() {

    console.log("INIT BASE");
    UISelectors.search.addEventListener('click', UI.showSearch);
    UISelectors.openMobileSearch.addEventListener('click', UI.showSearch);
    UISelectors.closeSearch.addEventListener('click', UI.closeSearchField);
    UISelectors.searchInput.addEventListener('keyup', () => {
      UI.clearList();
      Requests.getComposerResults();
    });

    if (UISelectors.openMobileBrowse) {
      UISelectors.openMobileBrowse.addEventListener('click', UI.showBrowse);
    }

    UISelectors.browse.addEventListener('click', UI.showBrowse);
    UISelectors.closeBrowse.addEventListener('click', () => {
      UISelectors.browseModalArea.classList.remove('show');
      UISelectors.browseModal.style.display = 'none';
    });

    if (UISelectors.logInOpen && UISelectors.signUpOpen) {
      UISelectors.logInOpen.addEventListener('click', UI.openModal);
      UISelectors.signUpOpen.addEventListener('click', UI.openModal);
      UISelectors.closeSignUp.addEventListener('click', UI.closeModal);
      UISelectors.closeSignIn.addEventListener('click', UI.closeModal);
    }

    if (UISelectors.loggedIn) {
      UISelectors.loggedIn.addEventListener('click', UI.showDropDown);
    }

    if (UISelectors.registrationForm) {
      UISelectors.registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let formInputs = e.target.parentElement.querySelectorAll(
          '.form-field input'
        );

        if (!Forms.checkRequired([...formInputs])) {
          Forms.checkLength(UISelectors.registerUsername, 6, 20);
          Forms.checkLength(UISelectors.registerPassword, 6, 20);
          Forms.checkEmail(UISelectors.registerEmail);
          Forms.checkPasswordsMatch(
            UISelectors.registerPassword,
            UISelectors.registerPassword2
          );
          if (Forms.checkAllValid([...formInputs])) {
            UISelectors.registrationForm.submit();
          }
        }
      });
    }

    if (UISelectors.logInForm) {
      UISelectors.logInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (
          !Forms.checkRequired([
            UISelectors.loginUsername,
            UISelectors.loginPassword,
          ])
        ) {
          let loginData = {
            username: UISelectors.loginUsername.value,
            password: UISelectors.loginPassword.value,
          };

          Requests.testLogin(loginData);
        }
      });


    }


  }

  createConcertFunction(e) {
    let composerName = e.target.parentElement.querySelector('.composer-name')
      .textContent;
    let pieceName = e.target.parentElement.querySelector('.piece-name')
      .textContent;

    let newPiece = new Piece(composerName, pieceName);
    let newConcert = new Concert('No Name');
    newConcert.pieces.push(newPiece);
    Storage.setNewConcert(newConcert);
    location.href = '/concert_builder';
  }

  //For Concert Builder
  addPieceToConcertArr(e, concertPieceArr) {
    const addToConcertContainer = e.target.parentElement.parentElement;
    const pieceComposer = addToConcertContainer.querySelector(
      '.piece-info-left > p'
    );
    const pieceComposerDates = addToConcertContainer.querySelector(
      '.data-composer-dates'
    );
    const pieceComposerNationality = addToConcertContainer.querySelector(
      '.data-composer-nationality'
    );
    const pieceInstrumentation = addToConcertContainer.querySelector(
      '.data-piece-instrumentation'
    );
    const pieceTitle = addToConcertContainer.querySelector(
      '.piece-info-left p:last-child'
    );
    const pieceDuration = addToConcertContainer.querySelector(
      '.piece-info-right p'
    );

    //Change notifictaion text back and forth.
    e.target.textContent = 'Piece added to concert';

    window.setTimeout(() => {
      e.target.textContent = 'Add to concert';
    }, 1000);

    let pieceEl = document.createElement('div');
    pieceEl.classList = 'concert';
    //pieceEl.setAttribute("draggable", "true");
    pieceEl.innerHTML = `
      
          <i class="fas fa-bars piece-drag-bars" draggable="true"></i>
          <div class="info-inner-container">
              <div class="composer-info">
                  <p>${pieceComposer.textContent}</p>
                  <p>${pieceComposerDates.textContent}</p>
                  <p>${pieceComposerNationality.textContent}</p>
              </div>
              <div class="piece-info">
                  <p>${pieceTitle.textContent}</p>
                  <p>${pieceInstrumentation.textContent}</p>
                  <p>${pieceDuration.textContent}</p>
              </div>
          </div>
          <i class="fa fa-times fa-2x delete-piece"></i>
          <div class="add-intermission">
              <p>Add Intermission Here</p>
          </div>
      
      `;

    concertPieceArr.push(pieceEl);
    concertPieceArr.forEach((piece, index) => {
      piece.setAttribute('data-index', index);
    });

    UI.addPieceToDOM(pieceEl);

    UI.deletePiecesListeners();
    UI.createIntermissionListeners();
    UI.dragListeners();
    UI.updateConcertDuration(UI.getConcertDuration(concertPieceArr));
  }

  //TODO
  //deletePieces




}

export const App = new APP();