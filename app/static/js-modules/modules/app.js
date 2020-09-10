import { UISelectors } from './UISelectors';
import { UI } from './ui';
import { HTTP } from './http';
import { User, Concert, Piece } from './sessionObj';
import { Forms } from './forms';
import { Nav } from './nav';
import { Storage } from './storage';
import { Requests } from './requests';

export class App {
  constructor() {}

  generateRandomNumber(mix, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  initBase() {
    UISelectors.search.addEventListener('click', UI.showSearch);
    UISelectors.openMobileSearch.addEventListener('click', UI.showSearch);
    UISelectors.closeSearch.addEventListener('click', UI.closeSearchField);
    UISelectors.searchInput.addEventListener('keyup', () => {
      UI.clearList();
      UI.getResults();
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
      UISelectors.signUpOpen.addEventListener('click', UI.penModal);
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
        }
      });

      Requests.testLogin(loginData);
    }
  }
}
