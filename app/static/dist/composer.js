/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/static/js-modules/main/composer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/static/css/composer.css":
/*!*************************************!*\
  !*** ./app/static/css/composer.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./composer.css */ "./node_modules/css-loader/dist/cjs.js!./app/static/css/composer.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./app/static/css/homepage.css":
/*!*************************************!*\
  !*** ./app/static/css/homepage.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./homepage.css */ "./node_modules/css-loader/dist/cjs.js!./app/static/css/homepage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./app/static/css/landing.css":
/*!************************************!*\
  !*** ./app/static/css/landing.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./landing.css */ "./node_modules/css-loader/dist/cjs.js!./app/static/css/landing.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./app/static/js-modules/main/composer.js":
/*!************************************************!*\
  !*** ./app/static/js-modules/main/composer.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/app */ "./app/static/js-modules/modules/app.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/forms */ "./app/static/js-modules/modules/forms.js");
/* harmony import */ var _modules_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/http */ "./app/static/js-modules/modules/http.js");
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/nav */ "./app/static/js-modules/modules/nav.js");
/* harmony import */ var _modules_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/requests */ "./app/static/js-modules/modules/requests.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/ui */ "./app/static/js-modules/modules/ui.js");
/* harmony import */ var _modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/UISelectors */ "./app/static/js-modules/modules/UISelectors.js");
/* harmony import */ var _css_landing_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/landing.css */ "./app/static/css/landing.css");
/* harmony import */ var _css_landing_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_landing_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_homepage_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../css/homepage.css */ "./app/static/css/homepage.css");
/* harmony import */ var _css_homepage_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_homepage_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_composer_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../css/composer.css */ "./app/static/css/composer.css");
/* harmony import */ var _css_composer_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_composer_css__WEBPACK_IMPORTED_MODULE_9__);














function newConcert(e) {
    let pieceTitle = document.getElementById('piece-title-result').textContent;
    let pieceComposer = document.getElementById('composer-name').textContent;
    let currentUser = document.getElementById('hidden-user');
    if (!pieceTitle) {
        _modules_ui__WEBPACK_IMPORTED_MODULE_5__["UI"].showButtonError(e.target, 'Select a Piece');
    } else if (!currentUser) {
        _modules_ui__WEBPACK_IMPORTED_MODULE_5__["UI"].showButtonError(e.target, 'Please Log in');
    } else {
        //Todo add piece to Concert
        let newPiece = new Piece(pieceComposer, pieceTitle);
        console.log(newPiece);
        let newConcert = new Concert("No Name");
        newConcert.pieces.push(newPiece);
        Storage.setNewConcert(newConcert);
        location.href = '/concert_builder';
    }
}

window.addEventListener('DOMContentLoaded', _modules_app__WEBPACK_IMPORTED_MODULE_0__["App"].initBase);

window.addEventListener('DOMContentLoaded', _modules_requests__WEBPACK_IMPORTED_MODULE_4__["Requests"].imageFetch);
window.addEventListener('DOMContentLoaded', () => {
    let currentUser = document.getElementById('hidden-user');
    if (!currentUser) {
        createConcert.classList.add('disabled');
    } else {
        createConcert.classList.remove('disabled');
        console.log('there is a logged in user');
    }
});

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].pieceList.forEach(piece => {
    piece.addEventListener('click', _modules_requests__WEBPACK_IMPORTED_MODULE_4__["Requests"].getPieceResults);
})

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].submitComment.addEventListener('click', _modules_requests__WEBPACK_IMPORTED_MODULE_4__["Requests"].commitNewComment);
_modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].addPieceToFavorites.addEventListener('click', _modules_requests__WEBPACK_IMPORTED_MODULE_4__["Requests"].commitNewFavorite);
_modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].createConcert.addEventListener('click', newConcert);

/***/ }),

/***/ "./app/static/js-modules/modules/UISelectors.js":
/*!******************************************************!*\
  !*** ./app/static/js-modules/modules/UISelectors.js ***!
  \******************************************************/
/*! exports provided: UISelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UISelectors", function() { return UISelectors; });
class UiSelectors {
  constructor() {
    this.siteTitle = document.getElementById('site-title');
    this.logInNav = document.getElementById('login-nav');
    this.signUpButton = document.getElementById('sign-up-btn');

    this.search = document.getElementById('search');
    this.openConcertBuilder = document.getElementById('create');

    this.openMobileSearch = document.getElementById('open-mobile-search');
    this.openMobileBrowse = document.getElementById('open-mobile-browse');
    this.rightNavContainer = document.getElementById('right-nav-container');

    this.getStarted = document.getElementById('get-started-btn');
    //Browse Modal
    this.browse = document.getElementById('browse');
    this.browseModal = document.getElementById('browse-modal');
    this.browseModalArea = document.getElementById('browse-modal-area');
    this.closeBrowse = document.getElementById('close-browse');
    this.browseComposers = document.getElementById('browse-composers');

    //Dynamic Search Result Elements
    this.searchBarOverlay = document.getElementById('search-bar-overlay');
    this.closeSearch = document.getElementById('close-search');
    this.searchInput = document.getElementById('search-bar-field');
    this.searchBarResults = document.getElementById('search-bar-results');

    //Login and Sign Up Elements
    this.logInOpen = document.getElementById('login-nav');
    this.signUpOpen = document.getElementById('sign-up-btn');
    this.signUpModal = document.getElementById('sign-up-modal');
    this.signInModal = document.getElementById('sign-in-modal');
    this.closeSignUp = document.getElementById('close-sign-up');
    this.closeSignIn = document.getElementById('close-sign-in');
    this.loggedIn = document.getElementById('logged-in');
    this.dropDownMenu = document.getElementById('dropdown-menu');
    this.registerUserBtn = document.getElementById('register-user-btn');
    this.logInUserBtn = document.getElementById('login-user-btn');

    //Registration Validation

    this.registrationForm = document.getElementById('sign-up-form');
    this.registerUsername = document.getElementById('register-username');
    this.registerEmail = document.getElementById('register-email');
    this.registerPassword = document.getElementById('register-password');
    this.registerPassword2 = document.getElementById('register-password2');

    this.logInForm = document.getElementById('sign-in-form');
    this.loginUsername = document.getElementById('login-username');
    this.loginPassword = document.getElementById('login-password');

    //COMPOSER
    this.pieceList = document.querySelectorAll('.piece-title');
    this.pieceResults = document.getElementById('piece-results');
    this.pieceDetailsContainer = document.getElementById('piece-details');
    this.composerWrap = document.getElementById('composer-wrap');
    this.submitComment = document.getElementById('submit-comment');
    this.addPieceToFavorites = document.getElementById(
      'add-piece-to-favorites'
    );
    this.createConcert = document.getElementById('create-concert');

    //CONCERT BUILDER
    this.addToConcert = document.querySelectorAll('.add-to-concert');
    this.deletePiece = document.getElementsByClassName('delete-piece');

    this.concertBuilderArea = document.getElementById('concert-builder-area');
    this.concertMinutes = document.getElementById('concert-minutes');
    this.concertConclusion = document.getElementById('concert-conclusion');

    this.searchFavorites = document.getElementById('search-favorites');
    this.favoritesSearchResults = document.getElementById(
      'favorites-search-results'
    );
    this.deleteIntermission = document.getElementById('delete-intermission');
    this.concertTitleBtn = document.getElementById('concert-title-btn');
    this.rightSearchArea = document.getElementById('right-search-area');
    this.concertTitleInput = document.getElementById('concert-title-input');
    this.changeTitleBtn = document.getElementById('change-title-btn');
    this.concertTitleHeader = document.getElementById('concert-title-header');
    this.saveConcertBtn = document.getElementById('save-concert-btn');
    //fix this.
    if (this.favoritesSearchResults !== null) {
      this.initialFavoritesResults = [...this.favoritesSearchResults.children];
    }


    //HOMPAGE
    this.showGold = document.querySelectorAll('.hover-gold');
    //const searchResults = document.querySelectorAll('.search-result');
    this.viewMore = document.querySelectorAll('.view-more-btn');
    this.mainContentInner = document.getElementById('main-content-area-inner');
    this.openProfile = document.getElementById('open-profile');
    this.openFavorites = document.getElementById('open-favorites');
    this.openConcerts = document.getElementById('open-concerts');
    this.returnHome = document.getElementById('return-home');

    //Favorites on Home Page
    this.homeSearchResults = document.getElementById('home-search-results');
    //Favorites Page
    this.fullFavoritesGrid = document.getElementById('full-favorites-grid');

    //Concerts on Home Page
    this.yourConcertsContainer = document.getElementById(
      'your-concerts-container'
    );

    //Concerts on Concerts Page
    this.fullConcertsGrid = document.getElementById('full-concerts-grid');

    if (this.openProfile !== undefined) {
      this.openLinks = [this.openProfile, this.openFavorites, this.openConcerts, this.returnHome];
    }

    this.openBrowse = document.querySelector('.open-browse');

    this.pieceNames = document.querySelectorAll('.piece-name');
    this.createConcertBtns = document.getElementsByClassName(
      'create-concert-btn'
    );

    this.dropDownYourConcerts = document.getElementById(
      'dropdown-your-concerts'
    );

    this.composerLetterContainer = document.getElementById(
      'composer-letter-container'
    );
    this.resultsColumn = document.getElementById('results-column');
    this.composerResultList = document.getElementById('composer-result-list');
    this.user = document.getElementById('current-username');
    if (this.user !== null) {
      this.user = this.user.textContent;
    }


    //FROM INDEX
    this.composerLinks = document.getElementById('composer-results');
    this.searchField = document.getElementById('search-field');
  }
}

const UISelectors = new UiSelectors();

/***/ }),

/***/ "./app/static/js-modules/modules/app.js":
/*!**********************************************!*\
  !*** ./app/static/js-modules/modules/app.js ***!
  \**********************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _UISelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UISelectors */ "./app/static/js-modules/modules/UISelectors.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./app/static/js-modules/modules/ui.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "./app/static/js-modules/modules/http.js");
/* harmony import */ var _sessionObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessionObj */ "./app/static/js-modules/modules/sessionObj.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms */ "./app/static/js-modules/modules/forms.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav */ "./app/static/js-modules/modules/nav.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage */ "./app/static/js-modules/modules/storage.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./requests */ "./app/static/js-modules/modules/requests.js");









class APP {
  constructor() { }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  initBase() {

    console.log("INIT BASE");
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].search.addEventListener('click', _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showSearch);
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].openMobileSearch.addEventListener('click', _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showSearch);
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].closeSearch.addEventListener('click', _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].closeSearchField);
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchInput.addEventListener('keyup', () => {
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].clearList();
      _requests__WEBPACK_IMPORTED_MODULE_7__["Requests"].getComposerResults();
    });

    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].openMobileBrowse) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].openMobileBrowse.addEventListener('click', _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showBrowse);
    }

    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].browse.addEventListener('click', _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showBrowse);
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].closeBrowse.addEventListener('click', () => {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].browseModalArea.classList.remove('show');
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].browseModal.style.display = 'none';
    });

    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].logInOpen && _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].signUpOpen) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].logInOpen.addEventListener('click', _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].openModal);
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].signUpOpen.addEventListener('click', _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].openModal);
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].closeSignUp.addEventListener('click', _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].closeModal);
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].closeSignIn.addEventListener('click', _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].closeModal);
    }

    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].loggedIn) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].loggedIn.addEventListener('click', _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showDropDown);
    }

    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].registrationForm) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let formInputs = e.target.parentElement.querySelectorAll(
          '.form-field input'
        );

        if (!_forms__WEBPACK_IMPORTED_MODULE_4__["Forms"].checkRequired([...formInputs])) {
          _forms__WEBPACK_IMPORTED_MODULE_4__["Forms"].checkLength(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].registerUsername, 6, 20);
          _forms__WEBPACK_IMPORTED_MODULE_4__["Forms"].checkLength(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].registerPassword, 6, 20);
          _forms__WEBPACK_IMPORTED_MODULE_4__["Forms"].checkEmail(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].registerEmail);
          _forms__WEBPACK_IMPORTED_MODULE_4__["Forms"].checkPasswordsMatch(
            _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].registerPassword,
            _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].registerPassword2
          );
          if (_forms__WEBPACK_IMPORTED_MODULE_4__["Forms"].checkAllValid([...formInputs])) {
            _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].registrationForm.submit();
          }
        }
      });
    }

    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].logInForm) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].logInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (
          !_forms__WEBPACK_IMPORTED_MODULE_4__["Forms"].checkRequired([
            _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].loginUsername,
            _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].loginPassword,
          ])
        ) {
          let loginData = {
            username: _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].loginUsername.value,
            password: _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].loginPassword.value,
          };

          _requests__WEBPACK_IMPORTED_MODULE_7__["Requests"].testLogin(loginData);
        }
      });


    }
  }

  createConcertFunction(e) {
    let composerName = e.target.parentElement.querySelector('.composer-name')
      .textContent;
    let pieceName = e.target.parentElement.querySelector('.piece-name')
      .textContent;

    let newPiece = new _sessionObj__WEBPACK_IMPORTED_MODULE_3__["Piece"](composerName, pieceName);
    let newConcert = new _sessionObj__WEBPACK_IMPORTED_MODULE_3__["Concert"]('No Name');
    newConcert.pieces.push(newPiece);
    _storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].setNewConcert(newConcert);
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

    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].addPieceToDOM(pieceEl);

    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].deletePiecesListeners();
    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].createIntermissionListeners();
    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].dragListeners();
    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].updateConcertDuration(_ui__WEBPACK_IMPORTED_MODULE_1__["UI"].getConcertDuration(concertPieceArr));
  }

  //TODO
  //deletePieces




}

const App = new APP();

/***/ }),

/***/ "./app/static/js-modules/modules/forms.js":
/*!************************************************!*\
  !*** ./app/static/js-modules/modules/forms.js ***!
  \************************************************/
/*! exports provided: Forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forms", function() { return Forms; });
/* harmony import */ var _UISelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UISelectors */ "./app/static/js-modules/modules/UISelectors.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./app/static/js-modules/modules/ui.js");



class FORMS {
  constructor() { }

  registerValidation(e) {
    e.preventDefault();
    let currentForm = e.target.parentElement;

    let formFields = currentForm.querySelectorAll('.form-field');

    [...formFields].forEach((field) => {
      if (field.querySelector('.error-text')) {
        console.log('there was an error');
      } else {
        console.log('there are no errors');
      }
    });
  }

  checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showSuccess(input);
    } else {
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showError(input, 'Email is not valid');
    }
  }

  checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach((input) => {
      if (input.value.trim() === '') {
        _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showError(input, `${_ui__WEBPACK_IMPORTED_MODULE_1__["UI"].getFieldName(input)} is required.`);
        isRequired = true;
      } else {
        _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showSuccess(input);
      }
    });

    return isRequired;
  }

  checkLength(input, min, max) {
    if (input.value.length < min) {
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showError(
        input,
        `${_ui__WEBPACK_IMPORTED_MODULE_1__["UI"].getFieldName(input)} must be at least ${min} characters`
      );
    } else if (input.value.length > max) {
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showError(
        input,
        `${_ui__WEBPACK_IMPORTED_MODULE_1__["UI"].getFieldName(input)} must be less than ${max} characters}`
      );
    } else {
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showSuccess(input);
    }
  }

  checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showError(input2, 'Passwords do not match');
    }
  }

  checkAllValid(formInputArr) {
    let allValid = true;
    formInputArr.forEach((field) => {
      if (
        field.parentElement.classList.contains('error') &&
        field.parentElement.classList.length > 1
      ) {
        allValid = false;
        return allValid;
      }
    });

    return allValid;
  }

  logInValidation(e) {
    e.preventDefault();
    console.log('Log In Prevented');
  }
}

const Forms = new FORMS();

/***/ }),

/***/ "./app/static/js-modules/modules/http.js":
/*!***********************************************!*\
  !*** ./app/static/js-modules/modules/http.js ***!
  \***********************************************/
/*! exports provided: HTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP", function() { return HTTP; });
class Http {
  //Make HTTP Get
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  //Make HTTP POST
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  async getXML(event = undefined, url) {
    const response = await fetch(url);
    const resData = await response.text();
    return resData;
  }

  async getJSON(url) {
    const response = await fetch(url);
    const resData = await response.text();
    return resData;
  }
}

const HTTP = new Http();

/***/ }),

/***/ "./app/static/js-modules/modules/nav.js":
/*!**********************************************!*\
  !*** ./app/static/js-modules/modules/nav.js ***!
  \**********************************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var _UISelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UISelectors */ "./app/static/js-modules/modules/UISelectors.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./app/static/js-modules/modules/ui.js");



class NAV {
  constructor() { }

  composerPageListeners(composer) {
    composer.addEventListener('click', (e) => {
      window.location.href = `composer/${e.target.textContent}`;
    });
  }
}

const Nav = new NAV();

/***/ }),

/***/ "./app/static/js-modules/modules/requests.js":
/*!***************************************************!*\
  !*** ./app/static/js-modules/modules/requests.js ***!
  \***************************************************/
/*! exports provided: Requests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Requests", function() { return Requests; });
/* harmony import */ var _UISelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UISelectors */ "./app/static/js-modules/modules/UISelectors.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./app/static/js-modules/modules/ui.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "./app/static/js-modules/modules/http.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ "./app/static/js-modules/modules/nav.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./app/static/js-modules/modules/app.js");






class REQUESTS {
  constructor() { }

  getComposerResults() {
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarResults.style.visibility = 'visible';
    const data = {
      searchTerm: _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchInput.value
    }

    _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].post('/composers', data).then(res => {
      console.log(res);
      console.log(typeof res);
      console.log(typeof res.composers)
      let compArray = JSON.parse(res.composers);
      console.log(compArray);

      compArray.forEach(composer => {
        const currentURL = window.location.href;
        _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].populateComposerSearchResults(currentURL, composer)
      })
    }).catch(err => console.log(`There was an err, ${err}`));
  }



  browsePanelFetch() {
    let randomCompArr = [];
    _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].get('/browse_composer_list')
      .then((data) => {
        let composersArr = data.composers_array;
        composersArr.forEach((group) => {
          const mainLetter = group[0][0];

          for (let i = 0; i < 3; i++) {
            randomCompArr.push(
              group[_app__WEBPACK_IMPORTED_MODULE_4__["App"].generateRandomNumber(0, group.length)]
            );
          }

          _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].addRandomComposersToDOM(mainLetter, randomCompArr);
          randomCompArr = [];
        });
      })
      .catch(err => console.log(`There was an error: ${err}`));
  }

  openCurrentLetter(e) {
    if (!window.location.href.includes('browse_composers')) {
      window.location.href = '/browse_composers';
    }

    if (e.target.tagName !== 'LI' || e.target.tagName !== 'H1') {
      return false;
    } else {
      let composerLetter = e.target.textContent;
      let data = { letter: composerLetter };
      _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].post('./browse_composer_list', data)
        .then((data) => {
          if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].resultsColumn.textContent !== '') {
            _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].resultsColumn.textContent = '';
          }

          data.letterArray.forEach((item) => {
            _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].appendCurrentLetter(item);
          });

          [..._UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].resultsColumn.children].forEach((comp) => {
            _nav__WEBPACK_IMPORTED_MODULE_3__["Nav"].composerPageListeners(comp);
          });
        })
        .catch((err) => console.log(`There was an error ${err}`));
    }
  }

  testLogin(loginData) {
    _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].post('/login', loginData)
      .then(data => {
        if (data.update === 'success') {
          _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].logInUserBtn.textContent = `${data.message}`;
          window.location.href = '/homepage';
        } else if (data.update === 'failure') {
          _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showError(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].loginUsername, data.message);
          _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showError(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].loginPassword, data.message);
        }
      })
      .catch(err => console.log(`There was an error, ${err}`));
  }


  getFullPieceInfo(pieceTitle) {
    _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].get(`/piece_detail/${pieceTitle}`)
      .then(data => _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].addPieceFromLocalStorage(data))
      .catch(err => console.log(`ERROR: ${err}`))
  }

  favoritesSearch() {
    let searchTerm = _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchFavorites.value;
    if (searchTerm === '') {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].initialFavoritesResults.forEach((favorite) => {
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].favoritesSearchResults.appendChild(favorite);
      });
    } else {
      _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].post('/search_favorites', searchTerm)
        .then(data => {
          data.favorites.forEach(favorite => {
            const favoriteLI = document.createElement('li');
            favoriteLI.innerHTML = `
            <div class="data-composer-info">
                    <p class="data-composer-dates">${favorite.composer.years}</p>
                    <p class="data-composer-nationality">${favorite.composer.nationality}</p>
                    <p class="data-piece-instrumentation">${favorite.instrumentation}</p>
                </div>
                <div class="piece-info-left">
                    <p>${favorite.composer}</p>
                    <p>${favorite.title}</p>
                </div>
                
                <div class="piece-info-right">
                    <p>${favorite.duration}</p>
                    <button class="primary-btn add-to-concert">
                        Add to Concert
                    </button>
                </div>
            `;
            _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].favoritesSearchResults.appendChild(favoriteLI);

          })
        })
        .catch(err => `ERROR: ${err}`)
    }
  }


  getPieceResults(e) {
    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].clearComposerResults();

    let formattedString = e.target.innerHTML.split('&')[0];
    _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].get(`/piece_detail/${formattedString}`)
      .then(data => {
        if (data.piece.title) {
          const contents = `<h2 id="piece-title-result">${data.piece.title}</h2> 
                            <p id="piece-duration">${data.piece.duration}</p>
                            <p id="piece-instrumentation">${data.piece.instrumentation}</p>
                            `;
          _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].pieceDetailsContainer.innerHTML = contents;

          if (data.piece.comments.length > 0) {


            const commentList = document.createElement('ul');
            commentList.classList = 'comment-list';
            pieceDetailsContainer.appendChild(commentList);
            data.piece.comments.forEach(comment => {
              const commentLI = document.createElement('li');
              commentLI.classList = 'comment';

              console.log(comment.author, comment.body, comment.timestamp);

              commentLI.innerHTML = `
                <p>${comment.author} says: </p>
                <p>${comment.body}</p>
                <p>${comment.timestamp}</p>
            `
              commentList.appendChild(commentLI);

            });

          }

        }

        return data;
      })
      .catch(err => {
        const liFail = document.createElement('li');
        liFail.innerHTML = 'There was a failure';
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].pieceResults.append(li);
      })
  }


  imageFetch() {
    const composerName = document.getElementById('composer-name');
    _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC72emsapcuXsF64Hrn7ca_9xIbAUbn7DY&cx=014124391945830086859:aisrauxjejy&q=${composerName.textContent}`)
      .then(data => {
        const composerImgSrc = data.items[0].pagemap.cse_thumbnail[0].src;
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].composerWrap.style.backgroundImage = `url('${composerImgSrc}')`;
      })
      .catch(err => {
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].composerWrap.style.backgroundImage = 'url("https://via.placeholder.com/200")';
      })
  }

  commitNewComment(e) {


    let composerUser = document.getElementById('hidden-user');
    const commentBody = document.getElementById('user-comment');
    const commentPieceTitle = document.getElementById('piece-title-result');


    if (!composerUser) {
      //TODO WRITE SHOW BUTTON ERROR 
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showButtonError(e.target, 'Please log in');
    } else if (!commentPieceTitle) {
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showButtonError(e.target, 'Select a piece');
    } else if (commentBody.value === '') {
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showButtonError(e.target, 'Write  a comment!');
    } else {

      const entry = {
        body: commentBody.value,
        piece: commentPieceTitle.textContent
      };

      _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].post('/add_comment', entry)
        .then(data => {
          console.log(data);
        }).catch(err => {
          _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showButtonError(e.target);
        });

    }
  }

  commitNewFavorite(e) {
    let composerUser = document.getElementById('hidden-user');
    let pieceTitle = document.getElementById('piece-title-result');

    let pieceSend = {
      pieceTitleSend: pieceTitle.textContent
    }

    if (!pieceTitle) {
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showButtonError(e.target, 'Select a piece');
    } else if (!composerUser) {
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].showButtonError(e.target, 'Please Log in');
    } else {
      _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].post('/add_piece_to_favorites')
        .then(data => {
          e.target.textContent = `${data.message}`;
          window.setTimeout(() => {
            e.target.textContent = 'Add piece to favorites';
          }, 1000);
        })
        .catch(err => console.log(`FETCH ERROR: ${err}`))
    }
  }

}


const Requests = new REQUESTS();

/***/ }),

/***/ "./app/static/js-modules/modules/sessionObj.js":
/*!*****************************************************!*\
  !*** ./app/static/js-modules/modules/sessionObj.js ***!
  \*****************************************************/
/*! exports provided: User, Concert, Piece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Concert", function() { return Concert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Piece", function() { return Piece; });
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
  constructor(composer, title) {
    this.composer = composer;
    this.title = title;
  }
}


/***/ }),

/***/ "./app/static/js-modules/modules/storage.js":
/*!**************************************************!*\
  !*** ./app/static/js-modules/modules/storage.js ***!
  \**************************************************/
/*! exports provided: Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var _sessionObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sessionObj */ "./app/static/js-modules/modules/sessionObj.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./app/static/js-modules/modules/ui.js");
/* harmony import */ var _UISelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UISelectors */ "./app/static/js-modules/modules/UISelectors.js");




class STORAGE {
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  createUser() {
    let user = document.getElementById('current-username').textContent;
    if (!this.getUser()) {
      let newUser = new _sessionObj__WEBPACK_IMPORTED_MODULE_0__["User"](user);
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].displayConcerts(newUser);
    } else if (user === this.getUser().username) {
      let currentUser = this.getUser();
      _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].displayConcerts(currentUser);
      return false;
    } else if (user !== this.getUser().username) {
      let newUser = new _sessionObj__WEBPACK_IMPORTED_MODULE_0__["User"](user);
      this.setUser(newUser);
    }
  }

  getConcert() {
    localStorage.getItem('newConcert');
  }

  setNewConcert(concert) {
    localStorage.setItem('newConcert', JSON.stringify(concert));
  }

  removeItem(string) {
    localStorage.remove(string);
  }

  setItem(string, item) {
    localStorage.setItem(string, JSON.stringify(item));
  }
}

const Storage = new STORAGE();


/***/ }),

/***/ "./app/static/js-modules/modules/ui.js":
/*!*********************************************!*\
  !*** ./app/static/js-modules/modules/ui.js ***!
  \*********************************************/
/*! exports provided: Ui, UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ui", function() { return Ui; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return UI; });
/* harmony import */ var _UISelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UISelectors */ "./app/static/js-modules/modules/UISelectors.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests */ "./app/static/js-modules/modules/requests.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./app/static/js-modules/modules/storage.js");




class Ui {
  constructor() {
    this.dragStartIndex;
    this.all = true;
  }

  testImport() {
    console.log(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].siteTitle);
  }

  //BASE
  openModal(e) {
    document.body.style.overflow = 'hidden';
    if (e.target.textContent.trim() === 'Log In') {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].signInModal.style.display = 'flex';
    } else {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].signUpModal.style.display = 'flex';
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
    if (e.target.parentElement === _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].openMobileSearch) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].rightNavContainer.style.display = 'none';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].siteTitle.style.display = 'none';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarOverlay.style.display = 'flex';
    } else {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].rightNavContainer.style.display = 'none';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarOverlay.style.display = 'flex';
    }
  }

  closeSearchField() {
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarOverlay.style.display = 'none';
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].rightNavContainer.style.display = 'flex';
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarResults.style.visibility = 'hidden';
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchInput.value = '';

    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].siteTitle.style.display === 'none') {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].siteTitle.style.display = 'block';
    }
  }

  showBrowse(e) {
    e.preventDefault();
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].browseModal.style.display = 'flex';
    setTimeout(() => {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].browseModalArea.classList.add('show');
    }, 300);

    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].browseComposers.children.length > 0) {
      while (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].browseComposers.firstChild) {
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].browseComposers.removeChild(
          _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].browseComposers.firstChild
        );
      }
    }
    _requests__WEBPACK_IMPORTED_MODULE_1__["Requests"].browsePanelFetch();
    //Requests.openCurrentLetter();
  }

  appendCurrentLetter(item) {
    let composerResultName = document.createElement('p');
    composerResultName.textContent = `${item}`;
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].resultsColumn.appendChild(composerResultName);
  }

  addRandomComposersToDOM(mainLetter, randomCompArr) {
    let composerLetter = document.createElement('div');
    composerLetter.classList = 'letter';


    //THERE IS SOME FUCKING BEAMING ISSUE HERE
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

    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].browseComposers.appendChild(composerLetter);

    const letterLinks = document.querySelectorAll('.letter h1');
    console.log(letterLinks);
    [...letterLinks].forEach((link) => {
      link.addEventListener('click', _requests__WEBPACK_IMPORTED_MODULE_1__["Requests"].openCurrentLetter);
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
    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchInput.value.length === 0) {
      while (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarResults.firstChild) {
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarResults.removeChild(
          _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarResults.firstChild
        );
      }

      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarResults.style.visibility = 'hidden';

      return false;
    }

    while (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarResults.firstChild) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarResults.removeChild(
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarResults.firstChild
      );
    }
  }

  populateComposerSearchResults(currentURL, composer) {
    // UISelectors.searchBarResults.style.visibility = 'visible';
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

    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchBarResults.appendChild(resultDiv);
  }

  showDropDown() {
    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].dropDownMenu.style.display === 'block') {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].dropDownMenu.style.display = 'none';
    } else {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].dropDownMenu.style.display = 'block';
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

  addPieceFromLocalStorage(pObject) {
    const pieceObject = pObject.piece;
    let pieceEl = document.createElement('div');
    pieceEl.classList = 'concert';
    pieceEl.setAttribute('draggable', 'true');
    pieceEl.innerHTML = `
    
        <i class="fas fa-bars piece-drag-bars"></i>
        <div class="info-inner-container">
            <div class="composer-info">
                <p>${pieceObject.composer}</p>
                <p>${pieceObject.years}</p>
                <p>${pieceObject.nationality}</p>
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
    concertPieceArr.push(pieceEl);
    concertPieceArr.forEach((piece, index) => {
      piece.setAttribute('data-index', index);
    });

    Ui.addPieceToDOM(pieceEl);

    Ui.deletePiecesListeners();
    Ui.createIntermissionListeners();
    Ui.dragListeners();
    Ui.updateConcertDuration(Ui.getConcertDuration(concertPieceArr));

    _storage__WEBPACK_IMPORTED_MODULE_2__["Storage"].removeItem('newConcert');

  }

  getConcertDuration(pieceArr) {
    if (pieceArr.length === 0) {
      let empty = 0;
      Ui.concertLengthJudgement(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea, empty);
      return empty;
    } else {
      const concertDurationArr = pieceArr.map((item) => {
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
      // if(concertBuilderArea.querySelector('.concert.intermission')){
      //     concertDuration += 30;
      // }

      Ui.concertLengthJudgement(concertBuilderArea, concertDuration);

      return concertDuration;
    }
  }


  createIntermission(e, concertPieceArr) {
    if (!_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.querySelector('.add-intermission')) {
      return false;
    }

    let parentConcert = e.target.parentElement.parentElement;

    e.target.parentElement.parentElement.classList.remove('show');

    //concertBuilderArea.querySelector('.add-intermission').parentElement.classList.remove('show');

    let intermissionEl = document.createElement('div');
    intermissionEl.classList = 'concert intermission';
    //intermissionEl.setAttribute("draggable", "true");
    intermissionEl.innerHTML = `
          <i class="fas fa-bars" draggable="true"></i>
          <p>Intermission: ~30 minutes</p>
          <i class="fa fa-times fa-2x delete-piece" id="delete-intermission"></i>
      `;

    //ADD TO APP
    concertPieceArr.splice(
      concertPieceArr.indexOf(parentConcert) + 1,
      0,
      intermissionEl
    );

    concertPieceArr.forEach((piece, index) => {
      piece.setAttribute('data-index', index);
    });
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.innerHTML = '';
    concertPieceArr.forEach((piece) => {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.appendChild(piece);
    });
    //concertBuilderArea.appendChild(intermissionEl);
    //console.log(concertPieceArr);

    Ui.updateConcertDuration(Ui.getConcertDuration(concertPieceArr));

    //Delete Intermission
    let closeIntermission = intermissionEl.querySelector('#delete-intermission');
    closeIntermission.addEventListener('click', (e) => {
      concertPieceArr.splice(concertPieceArr.indexOf(e.target.parentElement), 1);

      //Remove Intermission from DOM
      e.target.parentElement.remove();

      //Update Data-Index Attribute
      concertPieceArr.forEach((piece, index) => {
        piece.setAttribute('data-index', index);
      });

      Ui.updateConcertDuration(Ui.getConcertDuration(concertPieceArr));
    });
  }

  updateConcertDuration(durationNum) {
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertMinutes.textContent = `${durationNum}`;
  }

  concertLengthJudgement(container, duration) {
    if (duration == 0) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertConclusion.textContent = `Please add some pieces.`;
    } else if (duration < 90 && duration > 0) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertConclusion.textContent = `Concert is potentially too short.`;
    } else if (duration >= 90 && duration <= 120) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertConclusion.textContent = `Perfect concert length!`;
    } else {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertConclusion.textContent = `Concert is getting a bit long...`;
    }

    if (container.querySelector('.concert.intermission')) {
      console.log('no intermission yet');
    }
  }

  deletePiecesListeners() {
    let deletePieces = _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.querySelectorAll('.delete-piece');
    deletePieces.forEach((piece) => {
      piece.addEventListener('click', removePiece);
    });
  }

  createIntermissionListeners() {
    let intermissionList = _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.querySelectorAll(
      '.add-intermission'
    );
    intermissionList.forEach((intermission) => {
      intermission.addEventListener('click', createIntermission);
    });
  }

  removePiece(concertPieceArr) {
    //get parent El
    let selectedConcert = this.parentElement;

    //Remove Selected Piece from Array
    concertPieceArr.splice(concertPieceArr.indexOf(selectedConcert), 1);

    //Remove Piece from DOM
    selectedConcert.remove();

    //Update Data-Index Attribute
    concertPieceArr.forEach((piece, index) => {
      piece.setAttribute('data-index', index);
    });
    Ui.updateConcertDuration(Ui.getConcertDuration(concertPieceArr));
  }


  addPieceToDOM(piece) {
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.appendChild(piece);
  }

  clearFaveList() {
    while (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].favoritesSearchResults.firstChild) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].favoritesSearchResults.removeChild(
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].favoritesSearchResults.firstChild
      );
    }
  }

  showIntermission(e) {
    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.querySelector('.concert.intermission')) {
      return false;
    }

    if (e.target.classList[0] === 'concert') {
      e.target.classList.add('show');
    } else if (
      e.target === _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea &&
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.querySelector('.concert.show')
    ) {
      let currentConcert = _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.querySelector(
        '.concert.show'
      );
      currentConcert.classList.remove('show');
    }
  }

  saveConcertTitle() {
    let concertTitle = _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertTitleInput.value;

    if (concertTitle === '') {
      //Please Provide A Title.
    } else {
      //Change DOM
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].rightSearchArea.classList.add('show');
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertTitleHeader.textContent = `${concertTitle}`;
    }
  }

  removeConcertTitle() {
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].rightSearchArea.classList.remove('show');
  }

  createIntermission(e) {
    if (!_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.querySelector('.add-intermission')) {
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
    Ui.swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
  }

  swapItems(fromIndex, toIndex, concertPieceArr) {
    const itemOne = concertPieceArr[fromIndex];
    const itemTwo = concertPieceArr[toIndex];

    //console.log(concertPieceArr[fromIndex]);
    console.log(concertPieceArr[toIndex]);
    concertPieceArr[fromIndex] = itemTwo;
    concertPieceArr[toIndex] = itemOne;

    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.innerHTML = ``;

    concertPieceArr.forEach((item) => {
      Ui.addPieceToDOM(item);
    });
  }

  //HOMEPAGE
  displayConcerts(user, all = false) {
    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].fullConcertsGrid.children.length > 0) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].fullConcertsGrid.innerHTML = ``;
    }


    if (user.concerts.length === 0) {
      let notificationContainer = document.createElement('div');
      notificationContainer.classList = 'no-concerts-notification';
      notificationContainer.innerHTML = `
        <div class="search-result">
                        <h2 class="composer-name">Visit the concert builder page above to start building concerts!</h2>
        </div>
        
        
        `;
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].yourConcertsContainer.innerHTML = '';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].yourConcertsContainer.appendChild(notificationContainer);
    }

    // if (user.favorites.length === 0) {
    //   let notificationContainer = document.createElement("div");
    //   notificationContainer.classList = 'no-favorites-notification';
    //   notificationContainer.innerHTML = `
    //           <p class="no-favorites-message">Please browse composers to add some favorites!</p>
    //       `;
    //   UISelectors.homeSearchResults.appendChild(notificationContainer);

    // }

    //SEE homepage.js Line 86
    user.concerts.forEach((concert, index) => {
      if (all === false && index < 3) {
        console.log('all===false, index < 3');
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
                           <button class="primary-btn remove-concert-btn">Delete Concert</button>
                           <span class="hover-gold"></span>
                      `;
        console.log(concertContainer);
        console.log(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].yourConcertsContainer);
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].yourConcertsContainer.appendChild(concertContainer);

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
                           <button class="primary-btn remove-concert-btn">Delete Concert</button>
                           <span class="hover-gold "></span>
                      `;

        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].fullConcertsGrid.appendChild(concertContainer);
      }
    });

    UI.removeConcertListeners(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].fullConcertsGrid);
    UI.removeConcertListeners(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].yourConcertsContainer);

    //THIS IS THE CORRECT BRACKET FUCK ESLINT AND PRETTIER.
  }

  updateHoverListeners() {
    let searchResults = document.querySelectorAll('.search-result');

    [...searchResults].forEach((result) => {

      result.addEventListener('mouseover', UI.showGoldUnderline);
      result.addEventListener('mouseleave', UI.hideGoldUnderline);
    });
  }

  removeConcertListeners(container) {
    let concertsList = container.children;

    [...concertsList].forEach((concert) => {
      if (!concert.querySelector('.remove-concert-btn')) {
        return false;
      } else {
        concert
          .querySelector('.remove-concert-btn')
          .addEventListener('click', UI.deleteConcert);
      }
    });
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
    _storage__WEBPACK_IMPORTED_MODULE_2__["Storage"].setItem('user', deleteConcertUser);
    // localStorage.setItem('user', JSON.stringify(deleteConcertUser));
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
    let currentUser = _storage__WEBPACK_IMPORTED_MODULE_2__["Storage"].getUser();
    console.log(currentUser);

    UI.displayConcerts(currentUser, this.all = false);
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
    //console.log('from results exit', e.target.id);
    //console.log(dropDownYourConcerts.id);
    e.preventDefault();
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].mainContentInner.classList.add('remove');
    window.setTimeout(() => {
      [..._UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].mainContentInner.children].forEach((node) => {
        node.style.display = 'none';
      });
    }, 1000);

    window.setTimeout(() => {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].mainContentInner.classList.remove('remove');
      if (e.target === _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].returnHome) {
        //Change this
        UI.homeCardEnter(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].mainContentInner);
      } else if (e.target === _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].openProfile) {
      } else if (
        e.target === _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].openFavorites ||
        (!e.target.classList.contains('concert-view-more-btn') &&
          e.target.classList.contains('view-more-btn'))
      ) {
        UI.favoritesEnter(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].mainContentInner);
      } else if (
        e.target === _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].openConcerts ||
        e.target.classList.contains('concert-view-more-btn') ||
        e.target.id === _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].dropDownYourConcerts.id
      ) {
        UI.concertsEnter(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].mainContentInner);
      }
    }, 1500);
  }
  formatResultsCard() {
    const pieceNames = document.querySelectorAll('.piece-name');
    pieceNames.forEach((piece) => {
      let pieceTitleLength = piece.textContent.slice(0, 20) + '...';
      piece.textContent = pieceTitleLength;
    });
  }

  clearComposerLinks() {
    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].searchField.value.length === 0) {
      while (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].composerLinks.firstChild) {
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].composerLinks.removeChild(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].composerLinks.firstChild);
      }

      return false;
    }

    while (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].composerLinks.firstChild) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].composerLinks.removeChild(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].composerLinks.firstChild);
    }
  }

  //COMPOSER PAGE
  clearComposerResults() {
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].pieceDetailsContainer.innerHTML = '';
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


}


const UI = new Ui();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/static/css/composer.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/static/css/composer.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* FIX IMAGE */\r\n/* FIX SCROLL ON PIECE LIST */\r\n\r\nbody {\r\n  overflow: hidden;\r\n}\r\n\r\n.composer-top {\r\n  width: 100%;\r\n  flex: 1;\r\n  background-color: lightblue;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  \r\n}\r\n\r\n.composer-top, .composer-bottom {\r\n    color: #000;\r\n}\r\n\r\n.composer-wrap {\r\n  height: 200px;\r\n  width: 200px;\r\n  margin: 0 80px;\r\n  position: relative;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  object-fit: cover;\r\n  \r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.composer-bottom {\r\n  width: 100%;\r\n  flex: 2;\r\n  height: 100%;\r\n  min-height: 0px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n\r\n\r\n.composer-piece-list {\r\n  /*\r\n  height: 90%;\r\n  \r\n  overflow:hidden;\r\n  */\r\n  max-height: 90%;\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: auto;\r\n  height: 100%;\r\n  \r\n  \r\n}\r\n\r\n.composer-bottom-right {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  min-height: 0px;\r\n}\r\n\r\n.piece-details {\r\n \r\n  flex: 1;\r\n  width: 95%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-list {\r\n  background: #fff;\r\n  box-shadow: var(--default-shadow);\r\n  list-style: none;\r\n  padding: 0;\r\n  width: 100%;\r\n  flex: 3 1 auto;\r\n  border-radius: 4px;\r\n  overflow-y: scroll; \r\n  height: 80px;\r\n}\r\n\r\n.comment-list .comment {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.comment p {\r\n  margin: 0;\r\n}\r\n\r\n.comment p:first-child {\r\n  font-weight: bold;\r\n}\r\n\r\n.comment p:last-child {\r\n  font-size: .6rem;\r\n}\r\n\r\n.primary-btn.disabled {\r\n  background-color: rgba(60, 207, 207, 0.5);\r\n  cursor: not-allowed;\r\n}\r\n\r\n.primary-btn.error {\r\n  background-color: var(--error-color);\r\n}\r\n\r\n.hidden-user {\r\n  visibility: hidden;\r\n  font-size: .2rem;\r\n}\r\n\r\n/*\r\n.piece-list-wrap {\r\n    height: 75%;\r\n    width: 80%;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    \r\n}\r\n*/\r\n.user-interaction-area {\r\n  \r\n  flex: 1;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.piece-list {\r\n    list-style-type: none;\r\n    width: 90%;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    flex: 3 1 auto;\r\n    padding: 0;\r\n    \r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.piece-title {\r\n  color: #000;\r\n  height: 50px;\r\n  width: 90%;\r\n  display: flex;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n  cursor: pointer;\r\n  padding: 1rem .5rem;\r\n}\r\n\r\n#user-comment {\r\n    font-family: 'Lato', sans-serif;\r\n    flex: 1;\r\n    margin: 20px 20px 0 20px;\r\n    resize: none;\r\n    outline: none;\r\n    border-radius: 5px;\r\n    \r\n}\r\n\r\n.user-buttons {\r\n    display: flex;\r\n    flex: 1;\r\n    align-items: center;\r\n    margin: 1rem 0;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#submit-comment {\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n\r\n@media(max-width: 768px) {\r\n\r\n  body {\r\n    overflow: auto;\r\n  }\r\n\r\n  .piece-details {\r\n    flex: none;\r\n  }\r\n\r\n  .composer-bottom-right {\r\n    width: 100%;\r\n    max-height: 500px;\r\n  }\r\n\r\n\r\n\r\n  .user-buttons {\r\n    flex: none;\r\n  }\r\n\r\n  .composer-top {\r\n    flex-direction: column;\r\n    box-shadow: var(--default-shadow);\r\n  }\r\n\r\n .user-interaction-area textarea {\r\n   height: 50%;\r\n }\r\n\r\n  .composer-hero {\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  .composer-bottom {\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n    min-height: unset;\r\n    height: 100vh;\r\n  }\r\n\r\n  .composer-piece-list {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n  body {\r\n    overflow: auto;\r\n    height: auto;\r\n  }\r\n\r\n  .user-buttons {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .composer-informations > * {\r\n    text-align: center;\r\n  }\r\n\r\n  .user-buttons button {\r\n    width: 90%;\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  #piece-title-result {\r\n    font-size: 1.3rem;\r\n    text-align: center;\r\n  }\r\n\r\n  #piece-duration {\r\n    text-align: center;\r\n  }\r\n\r\n  #piece-instrumentation {\r\n    font-size: .75rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .composer-top {\r\n    flex-direction: column;\r\n    box-shadow: var(--default-shadow);\r\n  }\r\n\r\n  .composer-hero {\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  .composer-bottom {\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n    min-height: unset;\r\n  }\r\n\r\n  \r\n\r\n  .composer-piece-list {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://app/static/css/composer.css"],"names":[],"mappings":"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","sourcesContent":["/* FIX IMAGE */\r\n/* FIX SCROLL ON PIECE LIST */\r\n\r\nbody {\r\n  overflow: hidden;\r\n}\r\n\r\n.composer-top {\r\n  width: 100%;\r\n  flex: 1;\r\n  background-color: lightblue;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  \r\n}\r\n\r\n.composer-top, .composer-bottom {\r\n    color: #000;\r\n}\r\n\r\n.composer-wrap {\r\n  height: 200px;\r\n  width: 200px;\r\n  margin: 0 80px;\r\n  position: relative;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  object-fit: cover;\r\n  \r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.composer-bottom {\r\n  width: 100%;\r\n  flex: 2;\r\n  height: 100%;\r\n  min-height: 0px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n\r\n\r\n.composer-piece-list {\r\n  /*\r\n  height: 90%;\r\n  \r\n  overflow:hidden;\r\n  */\r\n  max-height: 90%;\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: auto;\r\n  height: 100%;\r\n  \r\n  \r\n}\r\n\r\n.composer-bottom-right {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  min-height: 0px;\r\n}\r\n\r\n.piece-details {\r\n \r\n  flex: 1;\r\n  width: 95%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-list {\r\n  background: #fff;\r\n  box-shadow: var(--default-shadow);\r\n  list-style: none;\r\n  padding: 0;\r\n  width: 100%;\r\n  flex: 3 1 auto;\r\n  border-radius: 4px;\r\n  overflow-y: scroll; \r\n  height: 80px;\r\n}\r\n\r\n.comment-list .comment {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.comment p {\r\n  margin: 0;\r\n}\r\n\r\n.comment p:first-child {\r\n  font-weight: bold;\r\n}\r\n\r\n.comment p:last-child {\r\n  font-size: .6rem;\r\n}\r\n\r\n.primary-btn.disabled {\r\n  background-color: rgba(60, 207, 207, 0.5);\r\n  cursor: not-allowed;\r\n}\r\n\r\n.primary-btn.error {\r\n  background-color: var(--error-color);\r\n}\r\n\r\n.hidden-user {\r\n  visibility: hidden;\r\n  font-size: .2rem;\r\n}\r\n\r\n/*\r\n.piece-list-wrap {\r\n    height: 75%;\r\n    width: 80%;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    \r\n}\r\n*/\r\n.user-interaction-area {\r\n  \r\n  flex: 1;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.piece-list {\r\n    list-style-type: none;\r\n    width: 90%;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    flex: 3 1 auto;\r\n    padding: 0;\r\n    \r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.piece-title {\r\n  color: #000;\r\n  height: 50px;\r\n  width: 90%;\r\n  display: flex;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n  cursor: pointer;\r\n  padding: 1rem .5rem;\r\n}\r\n\r\n#user-comment {\r\n    font-family: 'Lato', sans-serif;\r\n    flex: 1;\r\n    margin: 20px 20px 0 20px;\r\n    resize: none;\r\n    outline: none;\r\n    border-radius: 5px;\r\n    \r\n}\r\n\r\n.user-buttons {\r\n    display: flex;\r\n    flex: 1;\r\n    align-items: center;\r\n    margin: 1rem 0;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#submit-comment {\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n\r\n@media(max-width: 768px) {\r\n\r\n  body {\r\n    overflow: auto;\r\n  }\r\n\r\n  .piece-details {\r\n    flex: none;\r\n  }\r\n\r\n  .composer-bottom-right {\r\n    width: 100%;\r\n    max-height: 500px;\r\n  }\r\n\r\n\r\n\r\n  .user-buttons {\r\n    flex: none;\r\n  }\r\n\r\n  .composer-top {\r\n    flex-direction: column;\r\n    box-shadow: var(--default-shadow);\r\n  }\r\n\r\n .user-interaction-area textarea {\r\n   height: 50%;\r\n }\r\n\r\n  .composer-hero {\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  .composer-bottom {\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n    min-height: unset;\r\n    height: 100vh;\r\n  }\r\n\r\n  .composer-piece-list {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n  body {\r\n    overflow: auto;\r\n    height: auto;\r\n  }\r\n\r\n  .user-buttons {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .composer-informations > * {\r\n    text-align: center;\r\n  }\r\n\r\n  .user-buttons button {\r\n    width: 90%;\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  #piece-title-result {\r\n    font-size: 1.3rem;\r\n    text-align: center;\r\n  }\r\n\r\n  #piece-duration {\r\n    text-align: center;\r\n  }\r\n\r\n  #piece-instrumentation {\r\n    font-size: .75rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .composer-top {\r\n    flex-direction: column;\r\n    box-shadow: var(--default-shadow);\r\n  }\r\n\r\n  .composer-hero {\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  .composer-bottom {\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n    min-height: unset;\r\n  }\r\n\r\n  \r\n\r\n  .composer-piece-list {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/static/css/homepage.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/static/css/homepage.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\r\n  overflow: hidden;\r\n}\r\n\r\n.logged-in img {\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.nav-right {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-menu {\r\n  display: none;\r\n  position: absolute;\r\n  background: #fff;\r\n  top: 10%;\r\n  right: 5%;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  z-index: 999;\r\n}\r\n\r\n.dropdown-menu li {\r\n  margin: 1rem 2rem;\r\n}\r\n\r\n.dropdown-menu li a {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n.main-container {\r\n  width: 85%;\r\n  flex: 1;\r\n  display: flex;\r\n  max-height: 100%;\r\n  /*margin-bottom: 3rem;\r\n  */\r\n}\r\n\r\n.left-menu {\r\n  height: 100%;\r\n  width: 25%;\r\n  background-color: #fff;\r\n  \r\n  box-shadow: var(--default-shadow);\r\n}\r\n\r\n.left-menu-items {\r\n  list-style-type: none;\r\n  margin-left: 0;\r\n  \r\n  padding-left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n\r\n\r\n.left-menu-items li {\r\n    padding: 20px 0;\r\n}\r\n\r\n.left-menu-items li:hover {\r\n    background-color: #facd21;\r\n    cursor: pointer;\r\n}\r\n\r\n.left-menu-items li a {\r\n  text-decoration: none;\r\n  color: #000;\r\n  padding-left: 20px;\r\n}\r\n\r\n.main-content-area {\r\n  height: 100%;\r\n  flex: 1;\r\n  \r\n}\r\n\r\n.main-content-area-inner {\r\n  height: 90%;\r\n  max-height: 90%;\r\n  overflow: hidden;\r\n  width: 90%;\r\n  margin: auto;\r\n  color: #000;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  \r\n\r\n}\r\n\r\n.main-content-area-inner.remove {\r\n  animation: 1s remove-main;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes remove-main {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    \r\n  }\r\n}\r\n\r\n.header-row {\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: space-between;\r\n    align-self: stretch;\r\n    \r\n}\r\n\r\n.header-row a {\r\n    color: var(--primary-button-background);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header-row a:hover {\r\n  color: var(--gold);\r\n}\r\n\r\n.header-row i {\r\n  margin-left: 10px;\r\n}\r\n\r\n.search-results, .your-recent-concerts {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-gap: 20px;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n}\r\n\r\n\r\n\r\n.search-results.user-profile {\r\n  display: none;\r\n}\r\n\r\n.search-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  position: relative;\r\n  background-color: #fff;\r\n  border-radius: 0.25rem;\r\n  padding: 20px;\r\n  box-shadow: var(--default-shadow);\r\n  transition: transform .3s ease;\r\n}\r\n\r\n.search-result .composer-name {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.search-result .concert-name {\r\n  \r\n}\r\n\r\n.search-result .tiny-piece-title {\r\n  font-size: .75rem;\r\n}\r\n\r\n\r\n.search-result.leave {\r\n  transform: translateX(500%);\r\n}\r\n\r\n\r\n\r\n.search-results.full-favorites-grid, .search-results.full-concerts-grid {\r\n  \r\n  height: 100%;\r\n  max-height: 100%;\r\n  display: none;\r\n  opacity: 1;\r\n  animation: opacity .5s ease-in;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.full-favorites-grid.animate {\r\n   opacity: 1;\r\n}\r\n\r\n.hover-gold {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: .5rem;\r\n  \r\n}\r\n\r\n.hover-gold.show {\r\n  animation: opacity .5s ease-in-out;\r\n  background-color: var(--gold);\r\n}\r\n\r\n.composer-img {\r\n  position: absolute;\r\n  height: 60px;\r\n  width: 60px;\r\n  border-radius: 50%;\r\n  right: 20%;\r\n  top: 50%;\r\n}\r\n\r\n.audio-player-container {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 10%;\r\n  display: none;\r\n  bottom: 0;\r\n}\r\n\r\n.social-image {\r\n  height: 1rem;\r\n  width: 1rem;\r\n}\r\n\r\n.primary-btn.visit-page {\r\n  box-shadow: var(--default-shadow);\r\n}\r\n\r\n\r\n.concert-id-num {\r\n  display: none;\r\n}\r\n\r\n#current-username  {\r\n  display: none;\r\n}\r\n\r\n.primary-btn.remove-concert-btn {\r\n  cursor: pointer;\r\n  background-color: #c4302b;\r\n  \r\n}\r\n\r\n.your-recent-concerts.hide {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n@keyframes opacity{\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n@media(max-width: 768px) {\r\n\r\n\r\n  body {\r\n    overflow: auto;\r\n  }\r\n\r\n  .main-container {\r\n    max-height: none;\r\n  }\r\n\r\n  .concert-name {\r\n    font-size: 1.5rem;\r\n    margin: .5rem;;\r\n  }\r\n\r\n  .main-content-area-inner {\r\n    margin-bottom: 5rem;\r\n  }\r\n\r\n  .home-mobile-icons {\r\n    display: inline-block;\r\n  }\r\n\r\n  .left-menu {\r\n    display: none;\r\n  }\r\n\r\n  .primary-btn.remove-concert-btn {\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 426px) {\r\n  body {\r\n    height: auto;\r\n    overflow: auto;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://app/static/css/homepage.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  overflow: hidden;\r\n}\r\n\r\n.logged-in img {\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.nav-right {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-menu {\r\n  display: none;\r\n  position: absolute;\r\n  background: #fff;\r\n  top: 10%;\r\n  right: 5%;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  z-index: 999;\r\n}\r\n\r\n.dropdown-menu li {\r\n  margin: 1rem 2rem;\r\n}\r\n\r\n.dropdown-menu li a {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n.main-container {\r\n  width: 85%;\r\n  flex: 1;\r\n  display: flex;\r\n  max-height: 100%;\r\n  /*margin-bottom: 3rem;\r\n  */\r\n}\r\n\r\n.left-menu {\r\n  height: 100%;\r\n  width: 25%;\r\n  background-color: #fff;\r\n  \r\n  box-shadow: var(--default-shadow);\r\n}\r\n\r\n.left-menu-items {\r\n  list-style-type: none;\r\n  margin-left: 0;\r\n  \r\n  padding-left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n\r\n\r\n.left-menu-items li {\r\n    padding: 20px 0;\r\n}\r\n\r\n.left-menu-items li:hover {\r\n    background-color: #facd21;\r\n    cursor: pointer;\r\n}\r\n\r\n.left-menu-items li a {\r\n  text-decoration: none;\r\n  color: #000;\r\n  padding-left: 20px;\r\n}\r\n\r\n.main-content-area {\r\n  height: 100%;\r\n  flex: 1;\r\n  \r\n}\r\n\r\n.main-content-area-inner {\r\n  height: 90%;\r\n  max-height: 90%;\r\n  overflow: hidden;\r\n  width: 90%;\r\n  margin: auto;\r\n  color: #000;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  \r\n\r\n}\r\n\r\n.main-content-area-inner.remove {\r\n  animation: 1s remove-main;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes remove-main {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    \r\n  }\r\n}\r\n\r\n.header-row {\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: space-between;\r\n    align-self: stretch;\r\n    \r\n}\r\n\r\n.header-row a {\r\n    color: var(--primary-button-background);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header-row a:hover {\r\n  color: var(--gold);\r\n}\r\n\r\n.header-row i {\r\n  margin-left: 10px;\r\n}\r\n\r\n.search-results, .your-recent-concerts {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-gap: 20px;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n}\r\n\r\n\r\n\r\n.search-results.user-profile {\r\n  display: none;\r\n}\r\n\r\n.search-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  position: relative;\r\n  background-color: #fff;\r\n  border-radius: 0.25rem;\r\n  padding: 20px;\r\n  box-shadow: var(--default-shadow);\r\n  transition: transform .3s ease;\r\n}\r\n\r\n.search-result .composer-name {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.search-result .concert-name {\r\n  \r\n}\r\n\r\n.search-result .tiny-piece-title {\r\n  font-size: .75rem;\r\n}\r\n\r\n\r\n.search-result.leave {\r\n  transform: translateX(500%);\r\n}\r\n\r\n\r\n\r\n.search-results.full-favorites-grid, .search-results.full-concerts-grid {\r\n  \r\n  height: 100%;\r\n  max-height: 100%;\r\n  display: none;\r\n  opacity: 1;\r\n  animation: opacity .5s ease-in;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.full-favorites-grid.animate {\r\n   opacity: 1;\r\n}\r\n\r\n.hover-gold {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: .5rem;\r\n  \r\n}\r\n\r\n.hover-gold.show {\r\n  animation: opacity .5s ease-in-out;\r\n  background-color: var(--gold);\r\n}\r\n\r\n.composer-img {\r\n  position: absolute;\r\n  height: 60px;\r\n  width: 60px;\r\n  border-radius: 50%;\r\n  right: 20%;\r\n  top: 50%;\r\n}\r\n\r\n.audio-player-container {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 10%;\r\n  display: none;\r\n  bottom: 0;\r\n}\r\n\r\n.social-image {\r\n  height: 1rem;\r\n  width: 1rem;\r\n}\r\n\r\n.primary-btn.visit-page {\r\n  box-shadow: var(--default-shadow);\r\n}\r\n\r\n\r\n.concert-id-num {\r\n  display: none;\r\n}\r\n\r\n#current-username  {\r\n  display: none;\r\n}\r\n\r\n.primary-btn.remove-concert-btn {\r\n  cursor: pointer;\r\n  background-color: #c4302b;\r\n  \r\n}\r\n\r\n.your-recent-concerts.hide {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n@keyframes opacity{\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n@media(max-width: 768px) {\r\n\r\n\r\n  body {\r\n    overflow: auto;\r\n  }\r\n\r\n  .main-container {\r\n    max-height: none;\r\n  }\r\n\r\n  .concert-name {\r\n    font-size: 1.5rem;\r\n    margin: .5rem;;\r\n  }\r\n\r\n  .main-content-area-inner {\r\n    margin-bottom: 5rem;\r\n  }\r\n\r\n  .home-mobile-icons {\r\n    display: inline-block;\r\n  }\r\n\r\n  .left-menu {\r\n    display: none;\r\n  }\r\n\r\n  .primary-btn.remove-concert-btn {\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 426px) {\r\n  body {\r\n    height: auto;\r\n    overflow: auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/static/css/landing.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/static/css/landing.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\r\n    --header-background: #4257b2;\r\n    --hero-background: #3b4c9b;\r\n    --primary-button-background: #3ccfcf;\r\n    --main-background: #f6f7fb;\r\n    --gold: #facd21;\r\n    --default-shadow: 0px 13px 26px #0000002F;\r\n    --success-color: #2ecc71;\r\n    --error-color: #e74c3c;\r\n    \r\n}\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Lato', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #fff;\r\n    height: 100vh;\r\n    height: calc(var(--vh, 1vh) * 100);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: var(--main-background);\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    font-family: 'Lato', sans-serif;\r\n    cursor: pointer;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.landing-nav {\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.landing-nav p {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.site-title {\r\n    width: 20%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.right-nav-container {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n}\r\n\r\n.nav-left {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    justify-content: space-evenly;\r\n    padding: 0;\r\n}\r\n\r\n.nav-left li {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\n.nav-left li a, .site-title a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: center;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-left li a:hover, .nav-right li a:hover, .site-title a:hover {\r\n    color: rgba(189, 195, 199, 0.8);\r\n}\r\n\r\n.nav-left li a > * {\r\n    margin: .2rem;\r\n}\r\n\r\n.nav-right {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    margin-right: 3rem;\r\n}\r\n\r\n.nav-right li {\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.home-mobile-icons {\r\n    display: none;\r\n}\r\n\r\n.search-bar-overlay {\r\n    display: none;\r\n    align-items: center;\r\n    width: 60%;\r\n    \r\n}\r\n\r\n.search-bar-results {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    top: 8%;\r\n    /*left: 26%;*/\r\n    right: 20%;\r\n    background-color: var(--header-background);\r\n    width: 60%;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    z-index: 1000;\r\n\r\n}\r\n\r\n.search-result-down {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-result-down:hover {\r\n    transition: background-color 0.3s ease;\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.search-result-down p:first-of-type {\r\n    font-weight: bold;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-result-down .primary-btn {\r\n    margin-right: 1rem;\r\n}\r\n\r\n\r\n\r\n.search-bar-field {\r\n    flex: 1;\r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n    line-height: 1.3rem;\r\n    color: #fff;\r\n    font-size: 1.3rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-bar-field:invalid {\r\n    outline: 0;\r\n    box-shadow: none;\r\n    border: none;\r\n}\r\n\r\n.fa.fa-times.close-search {\r\n    cursor: pointer;\r\n}\r\n\r\n.primary-btn {\r\n    background-color: var(--primary-button-background);\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    font-family: 'Lato', sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n.mobile-search-icon {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n.hero-container {\r\n    width: 100%;\r\n    flex: 1;\r\n    background-color: var(--hero-background);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.content-container-left {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n}\r\n\r\n.content-text-container {\r\n    margin: 1rem;\r\n}\r\n\r\n.primary-btn.get-started-btn {\r\n    padding: 1.5rem 3rem;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.teacher-parent-links {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.teacher-parent-links a {\r\n    font-size: 1.2rem;\r\n    color: var(--primary-button-background);\r\n    text-decoration: none;\r\n    margin: 1rem;\r\n}\r\n\r\n.image-carousel-container {\r\n    height: 100%;\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.image-carousel {\r\n    height: 75%;\r\n    background-color: #fff;\r\n}\r\n\r\n.image-carousel img {\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: fill;\r\n}\r\n\r\n.image-description {\r\n    flex: 1;\r\n    width: 100%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal-container {\r\n    /* CSS change in JS */\r\n    display: none;\r\n    align-items:center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.4);\r\n    z-index: 5;\r\n}\r\n\r\n.sign-up-container {\r\n    height: 90%;\r\n    width: 40%;\r\n    background-color: #fff;\r\n    color: grey;\r\n    position: relative;\r\n    /* Change flex/none */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-shadow: var(--default-shadow);\r\n    \r\n}\r\n\r\n.sign-up-container > i {\r\n    align-self: flex-end;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.third-party-buttons {\r\n    margin: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.secondary-btn {\r\n    background-color: #fff;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.secondary-btn img {\r\n    height: 1rem;\r\n    width: 1rem;\r\n}\r\n\r\n.secondary-btn p {\r\n    margin: 1rem;\r\n}\r\n\r\n.sign-up-form {\r\n\r\n    margin: auto;\r\n    height: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.select-container {\r\n    width: 75%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n\r\n.select-container select {\r\n    padding: .75rem 2rem .75rem .3rem;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    color: var(--primary-button-background);\r\n    border: 2px grey solid;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n   \r\n}\r\n\r\n\r\n\r\n#close-sign-in, #close-sign-up {\r\n    cursor: pointer;\r\n}\r\n\r\n.birthday-selector {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.form-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-field label {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    letter-spacing: .2rem;\r\n}\r\n\r\n.form-field input {\r\n    \r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    padding: 1rem 0;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    color: #c2c6d4;\r\n    outline: 0;\r\n}\r\n\r\n.sign-up-form .form-field input:focus {\r\n    border: 2px solid var(--gold);\r\n    transition: border 0.3s ease;\r\n}\r\n\r\n.sign-up-form .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-up-form .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-up-form .error-text {\r\n    color: var(--error-color);\r\n    visibility: hidden;\r\n}\r\n\r\n.sign-up-form .form-field.error .error-text {\r\n    visibility: visible;\r\n    font-size: .7rem;\r\n}\r\n\r\n.register-btn, .login-btn {\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.register-btn {\r\n    background-color: #c2c6d4;\r\n}\r\n\r\n.login-btn {\r\n    background-color: #fff;\r\n    color: #000;\r\n    border: 2px solid grey;\r\n}\r\n\r\n.login-btn a {\r\n    color: var(--primary-button-background);\r\n}\r\n\r\n.sign-in-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 90%;\r\n    box-shadow: var(--default-shadow);\r\n}\r\n\r\n.sign-in-header {\r\n    width: 100%;\r\n    height: 15%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n}\r\n\r\n.sign-in-header h1 {\r\n    margin-left: 20px;\r\n}\r\n\r\n.sign-in-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid rgba(0,0,0,0.1);\r\n    border-radius: 50%;\r\n    padding: .50rem;\r\n}\r\n\r\n.sign-in-header i:hover {\r\n    background: rgba(0,0,0,0.1);\r\n}\r\n\r\n.sign-in-form-area {\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-buttons {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.sign-in-buttons .secondary-btn {\r\n    width: 100%;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    letter-spacing: .1rem;\r\n}\r\n\r\n.sign-in-form-fields {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    justify-content: space-evenly;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-form-fields .form-field input {\r\n    border: 0;\r\n    outline: 0;\r\n    border-bottom: 2px solid #000;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    outline: 0;\r\n}\r\n\r\n.sign-in-form-fields .form-field input:focus {\r\n    border-bottom: 2px solid var(--gold);\r\n}\r\n\r\n.sign-in-form-fields .form-field:last-of-type {\r\n    position: relative;\r\n}\r\n\r\n.sign-in-form-fields p {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 62%;\r\n}\r\n\r\n.sign-in-form-fields .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-in-form-fields .error-text {\r\n    color: var(--error-color);\r\n    /*visibility: hidden;*/\r\n}\r\n\r\n.primary-btn.big-login-btn {\r\n\r\n    width: 100%;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 1.5rem;\r\n}\r\n\r\n#browse-modal {\r\n    /* CHANGE WITH JAVASCIPT */\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.browse-modal-area {\r\n    height: 100%;\r\n    width: 35%;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n   \r\n    /*transition: transform 1s ease;*/\r\n    transform: translateX(-100%);\r\n}\r\n\r\n\r\n.browse-modal-area.show {\r\n    transition: transform 0.3s ease;\r\n    transform: translateX(0);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.browse-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid grey;\r\n    border-radius: 50%;\r\n    padding: 7px;\r\n    cursor: pointer;\r\n}\r\n\r\n.browse-header {\r\n    color: #000;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.browse-composers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    max-height: 100%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.letter {\r\n    display: flex;\r\n    width: 90%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #000;\r\n    border-bottom: 1px solid grey;\r\n}\r\n\r\n.letter h1  {\r\n    flex: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.letter-composers {\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n}\r\n\r\n.random-composer-links a {\r\n    text-decoration: none;\r\n    color: blue;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n    body {\r\n        overflow: auto;\r\n    }\r\n\r\n    .hero-container {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .landing-nav {\r\n        justify-content: center;\r\n    }\r\n    .nav-left {\r\n        display: none;\r\n    }\r\n\r\n    .right-nav-container {\r\n        justify-content: flex-end;\r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 1rem;\r\n        width: 35%;\r\n    }\r\n\r\n    .mobile-search-icon {\r\n        display: block;\r\n    }\r\n\r\n    .sign-up-container {\r\n        height: 90%;\r\n        width: 75%;\r\n    }\r\n\r\n    .search-bar-results {\r\n        left: 20%;\r\n        top: 7.5%;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n   \r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n    \r\n    body {\r\n        /*\r\n        overflow: hidden;\r\n        */\r\n       \r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 0rem;\r\n        flex: 1;\r\n        font-size: 1rem;\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .right-nav-container {\r\n        width: 60%;\r\n    }\r\n\r\n    .nav-right {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .search-bar-results {\r\n        top: 9%;\r\n        width: 100%;\r\n        left: 0;    \r\n    \r\n    }\r\n\r\n\r\n    .sign-up-container {\r\n        height: 100%;\r\n        width: 100%;\r\n        overflow: auto;\r\n    }\r\n\r\n    .third-party-buttons {\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n    }\r\n\r\n    .third-party-buttons .secondary-btn {\r\n        margin: .5rem 0;\r\n    }\r\n    \r\n    .select-container {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .select-container select {\r\n        width: 90%;\r\n    }\r\n\r\n    .sign-up-form label {\r\n        font-size: .7rem;\r\n    }\r\n\r\n    .form-field input {\r\n        margin-top: .3rem;\r\n    }\r\n\r\n    .form-field {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .primary-btn.register-btn, .primary-btn.login-btn {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .search-bar-overlay {\r\n        justify-content: center;\r\n        margin: auto;\r\n        height: 5rem;\r\n    }\r\n\r\n    .search-result-down p {\r\n        font-size: .75rem;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://app/static/css/landing.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');\r\n\r\n:root {\r\n    --header-background: #4257b2;\r\n    --hero-background: #3b4c9b;\r\n    --primary-button-background: #3ccfcf;\r\n    --main-background: #f6f7fb;\r\n    --gold: #facd21;\r\n    --default-shadow: 0px 13px 26px #0000002F;\r\n    --success-color: #2ecc71;\r\n    --error-color: #e74c3c;\r\n    \r\n}\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Lato', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #fff;\r\n    height: 100vh;\r\n    height: calc(var(--vh, 1vh) * 100);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: var(--main-background);\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    font-family: 'Lato', sans-serif;\r\n    cursor: pointer;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.landing-nav {\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.landing-nav p {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.site-title {\r\n    width: 20%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.right-nav-container {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n}\r\n\r\n.nav-left {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    justify-content: space-evenly;\r\n    padding: 0;\r\n}\r\n\r\n.nav-left li {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\n.nav-left li a, .site-title a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: center;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-left li a:hover, .nav-right li a:hover, .site-title a:hover {\r\n    color: rgba(189, 195, 199, 0.8);\r\n}\r\n\r\n.nav-left li a > * {\r\n    margin: .2rem;\r\n}\r\n\r\n.nav-right {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    margin-right: 3rem;\r\n}\r\n\r\n.nav-right li {\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.home-mobile-icons {\r\n    display: none;\r\n}\r\n\r\n.search-bar-overlay {\r\n    display: none;\r\n    align-items: center;\r\n    width: 60%;\r\n    \r\n}\r\n\r\n.search-bar-results {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    top: 8%;\r\n    /*left: 26%;*/\r\n    right: 20%;\r\n    background-color: var(--header-background);\r\n    width: 60%;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    z-index: 1000;\r\n\r\n}\r\n\r\n.search-result-down {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-result-down:hover {\r\n    transition: background-color 0.3s ease;\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.search-result-down p:first-of-type {\r\n    font-weight: bold;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-result-down .primary-btn {\r\n    margin-right: 1rem;\r\n}\r\n\r\n\r\n\r\n.search-bar-field {\r\n    flex: 1;\r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n    line-height: 1.3rem;\r\n    color: #fff;\r\n    font-size: 1.3rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-bar-field:invalid {\r\n    outline: 0;\r\n    box-shadow: none;\r\n    border: none;\r\n}\r\n\r\n.fa.fa-times.close-search {\r\n    cursor: pointer;\r\n}\r\n\r\n.primary-btn {\r\n    background-color: var(--primary-button-background);\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    font-family: 'Lato', sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n.mobile-search-icon {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n.hero-container {\r\n    width: 100%;\r\n    flex: 1;\r\n    background-color: var(--hero-background);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.content-container-left {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n}\r\n\r\n.content-text-container {\r\n    margin: 1rem;\r\n}\r\n\r\n.primary-btn.get-started-btn {\r\n    padding: 1.5rem 3rem;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.teacher-parent-links {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.teacher-parent-links a {\r\n    font-size: 1.2rem;\r\n    color: var(--primary-button-background);\r\n    text-decoration: none;\r\n    margin: 1rem;\r\n}\r\n\r\n.image-carousel-container {\r\n    height: 100%;\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.image-carousel {\r\n    height: 75%;\r\n    background-color: #fff;\r\n}\r\n\r\n.image-carousel img {\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: fill;\r\n}\r\n\r\n.image-description {\r\n    flex: 1;\r\n    width: 100%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal-container {\r\n    /* CSS change in JS */\r\n    display: none;\r\n    align-items:center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.4);\r\n    z-index: 5;\r\n}\r\n\r\n.sign-up-container {\r\n    height: 90%;\r\n    width: 40%;\r\n    background-color: #fff;\r\n    color: grey;\r\n    position: relative;\r\n    /* Change flex/none */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-shadow: var(--default-shadow);\r\n    \r\n}\r\n\r\n.sign-up-container > i {\r\n    align-self: flex-end;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.third-party-buttons {\r\n    margin: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.secondary-btn {\r\n    background-color: #fff;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.secondary-btn img {\r\n    height: 1rem;\r\n    width: 1rem;\r\n}\r\n\r\n.secondary-btn p {\r\n    margin: 1rem;\r\n}\r\n\r\n.sign-up-form {\r\n\r\n    margin: auto;\r\n    height: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.select-container {\r\n    width: 75%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n\r\n.select-container select {\r\n    padding: .75rem 2rem .75rem .3rem;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    color: var(--primary-button-background);\r\n    border: 2px grey solid;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n   \r\n}\r\n\r\n\r\n\r\n#close-sign-in, #close-sign-up {\r\n    cursor: pointer;\r\n}\r\n\r\n.birthday-selector {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.form-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-field label {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    letter-spacing: .2rem;\r\n}\r\n\r\n.form-field input {\r\n    \r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    padding: 1rem 0;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    color: #c2c6d4;\r\n    outline: 0;\r\n}\r\n\r\n.sign-up-form .form-field input:focus {\r\n    border: 2px solid var(--gold);\r\n    transition: border 0.3s ease;\r\n}\r\n\r\n.sign-up-form .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-up-form .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-up-form .error-text {\r\n    color: var(--error-color);\r\n    visibility: hidden;\r\n}\r\n\r\n.sign-up-form .form-field.error .error-text {\r\n    visibility: visible;\r\n    font-size: .7rem;\r\n}\r\n\r\n.register-btn, .login-btn {\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.register-btn {\r\n    background-color: #c2c6d4;\r\n}\r\n\r\n.login-btn {\r\n    background-color: #fff;\r\n    color: #000;\r\n    border: 2px solid grey;\r\n}\r\n\r\n.login-btn a {\r\n    color: var(--primary-button-background);\r\n}\r\n\r\n.sign-in-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 90%;\r\n    box-shadow: var(--default-shadow);\r\n}\r\n\r\n.sign-in-header {\r\n    width: 100%;\r\n    height: 15%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n}\r\n\r\n.sign-in-header h1 {\r\n    margin-left: 20px;\r\n}\r\n\r\n.sign-in-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid rgba(0,0,0,0.1);\r\n    border-radius: 50%;\r\n    padding: .50rem;\r\n}\r\n\r\n.sign-in-header i:hover {\r\n    background: rgba(0,0,0,0.1);\r\n}\r\n\r\n.sign-in-form-area {\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-buttons {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.sign-in-buttons .secondary-btn {\r\n    width: 100%;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    letter-spacing: .1rem;\r\n}\r\n\r\n.sign-in-form-fields {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    justify-content: space-evenly;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-form-fields .form-field input {\r\n    border: 0;\r\n    outline: 0;\r\n    border-bottom: 2px solid #000;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    outline: 0;\r\n}\r\n\r\n.sign-in-form-fields .form-field input:focus {\r\n    border-bottom: 2px solid var(--gold);\r\n}\r\n\r\n.sign-in-form-fields .form-field:last-of-type {\r\n    position: relative;\r\n}\r\n\r\n.sign-in-form-fields p {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 62%;\r\n}\r\n\r\n.sign-in-form-fields .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-in-form-fields .error-text {\r\n    color: var(--error-color);\r\n    /*visibility: hidden;*/\r\n}\r\n\r\n.primary-btn.big-login-btn {\r\n\r\n    width: 100%;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 1.5rem;\r\n}\r\n\r\n#browse-modal {\r\n    /* CHANGE WITH JAVASCIPT */\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.browse-modal-area {\r\n    height: 100%;\r\n    width: 35%;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n   \r\n    /*transition: transform 1s ease;*/\r\n    transform: translateX(-100%);\r\n}\r\n\r\n\r\n.browse-modal-area.show {\r\n    transition: transform 0.3s ease;\r\n    transform: translateX(0);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.browse-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid grey;\r\n    border-radius: 50%;\r\n    padding: 7px;\r\n    cursor: pointer;\r\n}\r\n\r\n.browse-header {\r\n    color: #000;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.browse-composers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    max-height: 100%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.letter {\r\n    display: flex;\r\n    width: 90%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #000;\r\n    border-bottom: 1px solid grey;\r\n}\r\n\r\n.letter h1  {\r\n    flex: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.letter-composers {\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n}\r\n\r\n.random-composer-links a {\r\n    text-decoration: none;\r\n    color: blue;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n    body {\r\n        overflow: auto;\r\n    }\r\n\r\n    .hero-container {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .landing-nav {\r\n        justify-content: center;\r\n    }\r\n    .nav-left {\r\n        display: none;\r\n    }\r\n\r\n    .right-nav-container {\r\n        justify-content: flex-end;\r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 1rem;\r\n        width: 35%;\r\n    }\r\n\r\n    .mobile-search-icon {\r\n        display: block;\r\n    }\r\n\r\n    .sign-up-container {\r\n        height: 90%;\r\n        width: 75%;\r\n    }\r\n\r\n    .search-bar-results {\r\n        left: 20%;\r\n        top: 7.5%;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n   \r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n    \r\n    body {\r\n        /*\r\n        overflow: hidden;\r\n        */\r\n       \r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 0rem;\r\n        flex: 1;\r\n        font-size: 1rem;\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .right-nav-container {\r\n        width: 60%;\r\n    }\r\n\r\n    .nav-right {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .search-bar-results {\r\n        top: 9%;\r\n        width: 100%;\r\n        left: 0;    \r\n    \r\n    }\r\n\r\n\r\n    .sign-up-container {\r\n        height: 100%;\r\n        width: 100%;\r\n        overflow: auto;\r\n    }\r\n\r\n    .third-party-buttons {\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n    }\r\n\r\n    .third-party-buttons .secondary-btn {\r\n        margin: .5rem 0;\r\n    }\r\n    \r\n    .select-container {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .select-container select {\r\n        width: 90%;\r\n    }\r\n\r\n    .sign-up-form label {\r\n        font-size: .7rem;\r\n    }\r\n\r\n    .form-field input {\r\n        margin-top: .3rem;\r\n    }\r\n\r\n    .form-field {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .primary-btn.register-btn, .primary-btn.login-btn {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .search-bar-overlay {\r\n        justify-content: center;\r\n        margin: auto;\r\n        height: 5rem;\r\n    }\r\n\r\n    .search-result-down p {\r\n        font-size: .75rem;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvY29tcG9zZXIuY3NzPzdhZjEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvaG9tZXBhZ2UuY3NzP2QxZWYiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvbGFuZGluZy5jc3M/ZmU1MiIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbWFpbi9jb21wb3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9VSVNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvaHR0cC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvc2Vzc2lvbk9iai5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvY3NzL2NvbXBvc2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2Nzcy9ob21lcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvbGFuZGluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMseUlBQStEOztBQUVqRzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyx5SUFBK0Q7O0FBRWpHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7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QWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sZUFBZSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksU0FBUyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlB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WUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLFNBQVMsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsWUFBWSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLGtHQUFrRyxlQUFlLHFDQUFxQyxtQ0FBbUMsNkNBQTZDLG1DQUFtQyx3QkFBd0Isa0RBQWtELGlDQUFpQywrQkFBK0IsYUFBYSxlQUFlLCtCQUErQixLQUFLLGNBQWMsd0NBQXdDLGtCQUFrQixtQkFBbUIsb0JBQW9CLHNCQUFzQiwyQ0FBMkMsc0JBQXNCLCtCQUErQiw0QkFBNEIsaURBQWlELHlCQUF5QiwyQkFBMkIsS0FBSyxXQUFXLDhCQUE4QixLQUFLLGdCQUFnQix3Q0FBd0Msd0JBQXdCLCtCQUErQixLQUFLLHNCQUFzQixvQkFBb0IscUJBQXFCLG1EQUFtRCxzQkFBc0IsNEJBQTRCLGFBQWEsd0JBQXdCLDBCQUEwQixLQUFLLHFCQUFxQixtQkFBbUIsc0JBQXNCLDRCQUE0QixnQ0FBZ0Msd0JBQXdCLGFBQWEsOEJBQThCLG9CQUFvQixzQkFBc0IsNEJBQTRCLHVDQUF1QyxhQUFhLG1CQUFtQixzQkFBc0IsNEJBQTRCLDhCQUE4QixzQ0FBc0MsbUJBQW1CLEtBQUssc0JBQXNCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLGFBQWEsdUNBQXVDLG9CQUFvQiw4QkFBOEIsc0JBQXNCLDhCQUE4QixnQ0FBZ0MscUJBQXFCLHdCQUF3QixLQUFLLDBFQUEwRSx3Q0FBd0MsS0FBSyw0QkFBNEIsc0JBQXNCLEtBQUssb0JBQW9CLHNCQUFzQiw0QkFBNEIsOEJBQThCLDJCQUEyQixLQUFLLHVCQUF1QixxQkFBcUIsd0JBQXdCLEtBQUssNEJBQTRCLHNCQUFzQixLQUFLLDZCQUE2QixzQkFBc0IsNEJBQTRCLG1CQUFtQixhQUFhLDZCQUE2QiwyQkFBMkIsMkJBQTJCLGdCQUFnQixvQkFBb0IscUJBQXFCLG1EQUFtRCxtQkFBbUIsd0NBQXdDLHVDQUF1QyxzQkFBc0IsU0FBUyw2QkFBNkIsc0JBQXNCLDRCQUE0Qix1Q0FBdUMsd0JBQXdCLEtBQUssbUNBQW1DLCtDQUErQywwQ0FBMEMsS0FBSyw2Q0FBNkMsMEJBQTBCLDBCQUEwQixLQUFLLDBDQUEwQywyQkFBMkIsS0FBSyxtQ0FBbUMsZ0JBQWdCLHlCQUF5QixxQkFBcUIsc0JBQXNCLDRCQUE0QixvQkFBb0IsMEJBQTBCLDBCQUEwQixLQUFLLG1DQUFtQyxtQkFBbUIseUJBQXlCLHFCQUFxQixLQUFLLG1DQUFtQyx3QkFBd0IsS0FBSyxzQkFBc0IsMkRBQTJELHFCQUFxQiwyQkFBMkIscUJBQXFCLHdDQUF3QywwQkFBMEIsd0JBQXdCLHNCQUFzQixLQUFLLDZCQUE2QixzQkFBc0IsS0FBSyxpQ0FBaUMsb0JBQW9CLGdCQUFnQixpREFBaUQsc0JBQXNCLDRCQUE0QixLQUFLLGlDQUFpQyxxQkFBcUIsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsZ0JBQWdCLEtBQUssaUNBQWlDLHFCQUFxQixLQUFLLHNDQUFzQyw2QkFBNkIsMEJBQTBCLDRCQUE0QixLQUFLLCtCQUErQixvQkFBb0Isc0JBQXNCLDRCQUE0Qix1Q0FBdUMsS0FBSyxpQ0FBaUMsMEJBQTBCLGdEQUFnRCw4QkFBOEIscUJBQXFCLEtBQUssbUNBQW1DLHFCQUFxQixnQkFBZ0Isc0JBQXNCLCtCQUErQiw0QkFBNEIsb0NBQW9DLEtBQUsseUJBQXlCLG9CQUFvQiwrQkFBK0IsS0FBSyw2QkFBNkIscUJBQXFCLG9CQUFvQix5QkFBeUIsS0FBSyw0QkFBNEIsZ0JBQWdCLG9CQUFvQixtREFBbUQsc0JBQXNCLCtCQUErQiw0QkFBNEIsZ0NBQWdDLEtBQUssOEJBQThCLG9EQUFvRCwyQkFBMkIsZ0NBQWdDLDJCQUEyQixlQUFlLGdCQUFnQixpQkFBaUIsa0JBQWtCLDBDQUEwQyxtQkFBbUIsS0FBSyw0QkFBNEIsb0JBQW9CLG1CQUFtQiwrQkFBK0Isb0JBQW9CLDJCQUEyQixvREFBb0QsK0JBQStCLDRCQUE0QiwwQ0FBMEMsYUFBYSxnQ0FBZ0MsNkJBQTZCLDJCQUEyQixLQUFLLDhCQUE4QixxQkFBcUIsbUJBQW1CLHNCQUFzQiw0QkFBNEIsdUNBQXVDLEtBQUssd0JBQXdCLCtCQUErQiwrQkFBK0IsMkJBQTJCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLGdCQUFnQix3QkFBd0IscUJBQXFCLEtBQUssNEJBQTRCLHFCQUFxQixvQkFBb0IsS0FBSywwQkFBMEIscUJBQXFCLEtBQUssdUJBQXVCLHlCQUF5QixxQkFBcUIsbUJBQW1CLHNCQUFzQiwrQkFBK0IsNEJBQTRCLHNDQUFzQyxLQUFLLDJCQUEyQixtQkFBbUIsc0JBQXNCLDRCQUE0Qix1Q0FBdUMseUJBQXlCLGFBQWEsa0NBQWtDLDBDQUEwQyx3Q0FBd0Msd0JBQXdCLGdEQUFnRCwrQkFBK0IseUJBQXlCLDJCQUEyQixZQUFZLGdEQUFnRCx3QkFBd0IsS0FBSyw0QkFBNEIsc0JBQXNCLCtCQUErQixvQkFBb0IsdUJBQXVCLEtBQUsscUJBQXFCLHNCQUFzQiwrQkFBK0Isb0JBQW9CLDRCQUE0QixLQUFLLDJCQUEyQixrQ0FBa0MsMEJBQTBCLDhCQUE4QixLQUFLLDJCQUEyQixnREFBZ0Qsd0JBQXdCLHdCQUF3QiwrQkFBK0IsMkJBQTJCLHVCQUF1QixtQkFBbUIsS0FBSywrQ0FBK0Msc0NBQXNDLHFDQUFxQyxLQUFLLGlEQUFpRCwrQ0FBK0MsS0FBSyxpREFBaUQsb0NBQW9DLEtBQUssZ0RBQWdELDZDQUE2QyxLQUFLLCtDQUErQyxrQ0FBa0MsS0FBSyxvQ0FBb0Msa0NBQWtDLDJCQUEyQixLQUFLLHFEQUFxRCw0QkFBNEIseUJBQXlCLEtBQUssbUNBQW1DLG9CQUFvQix3QkFBd0IscUJBQXFCLEtBQUssdUJBQXVCLGtDQUFrQyxLQUFLLG9CQUFvQiwrQkFBK0Isb0JBQW9CLCtCQUErQixLQUFLLHNCQUFzQixnREFBZ0QsS0FBSyw0QkFBNEIsc0JBQXNCLCtCQUErQiw0QkFBNEIsb0JBQW9CLDBDQUEwQyxLQUFLLHlCQUF5QixvQkFBb0Isb0JBQW9CLG1EQUFtRCxzQkFBc0IsNEJBQTRCLHVDQUF1QyxvQkFBb0IsS0FBSyw0QkFBNEIsMEJBQTBCLEtBQUssMkJBQTJCLDJCQUEyQiwwQ0FBMEMsMkJBQTJCLHdCQUF3QixLQUFLLGlDQUFpQyxvQ0FBb0MsS0FBSyw0QkFBNEIsbUJBQW1CLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGdCQUFnQixLQUFLLDBCQUEwQixvQkFBb0Isc0JBQXNCLCtCQUErQiw0QkFBNEIsS0FBSyx5Q0FBeUMsb0JBQW9CLDBCQUEwQiwwQkFBMEIsOEJBQThCLEtBQUssOEJBQThCLHNCQUFzQiwrQkFBK0IsNEJBQTRCLG9CQUFvQixzQ0FBc0MsZ0JBQWdCLEtBQUssZ0RBQWdELGtCQUFrQixtQkFBbUIsc0NBQXNDLHdDQUF3Qyx1Q0FBdUMsbUJBQW1CLEtBQUssc0RBQXNELDZDQUE2QyxLQUFLLHVEQUF1RCwyQkFBMkIsS0FBSyxnQ0FBZ0MsMkJBQTJCLGlCQUFpQixpQkFBaUIsS0FBSyx3REFBd0QsK0NBQStDLEtBQUssd0RBQXdELG9DQUFvQyxLQUFLLHVEQUF1RCw2Q0FBNkMsS0FBSyxzREFBc0Qsa0NBQWtDLEtBQUssMkNBQTJDLGtDQUFrQyw2QkFBNkIsT0FBTyxvQ0FBb0Msd0JBQXdCLDRCQUE0QiwrQkFBK0IsS0FBSyx1QkFBdUIseURBQXlELDRCQUE0QixvQ0FBb0MsS0FBSyw0QkFBNEIscUJBQXFCLG1CQUFtQiwrQkFBK0IsMkJBQTJCLGVBQWUsZ0JBQWdCLCtDQUErQyx1Q0FBdUMsS0FBSyxxQ0FBcUMsd0NBQXdDLGlDQUFpQyxLQUFLLDhDQUE4QywyQkFBMkIsK0JBQStCLDJCQUEyQixxQkFBcUIsd0JBQXdCLEtBQUssd0JBQXdCLG9CQUFvQixzQkFBc0IsNEJBQTRCLHVDQUF1QyxLQUFLLDJCQUEyQixzQkFBc0IsK0JBQStCLDRCQUE0Qix5QkFBeUIsMkJBQTJCLEtBQUssaUJBQWlCLHNCQUFzQixtQkFBbUIsNEJBQTRCLHVDQUF1QyxvQkFBb0Isc0NBQXNDLEtBQUsscUJBQXFCLGdCQUFnQix3QkFBd0IsS0FBSywyQkFBMkIsOEJBQThCLCtCQUErQiw4QkFBOEIsS0FBSyxrQ0FBa0MsOEJBQThCLG9CQUFvQixLQUFLLDJEQUEyRCxrQkFBa0IsMkJBQTJCLFNBQVMsNkJBQTZCLG1DQUFtQyxTQUFTLDBCQUEwQixvQ0FBb0MsU0FBUyxtQkFBbUIsMEJBQTBCLFNBQVMsa0NBQWtDLHNDQUFzQyxTQUFTLHlCQUF5Qiw4QkFBOEIsdUJBQXVCLFNBQVMsaUNBQWlDLDJCQUEyQixTQUFTLGdDQUFnQyx3QkFBd0IsdUJBQXVCLFNBQVMsaUNBQWlDLHNCQUFzQixzQkFBc0IsU0FBUyxnQ0FBZ0Msd0JBQXdCLHFCQUFxQixTQUFTLGFBQWEsbURBQW1ELFlBQVksbURBQW1ELHNCQUFzQiwyQ0FBMkMsa0NBQWtDLHlCQUF5Qiw4QkFBOEIsb0JBQW9CLDRCQUE0Qix3Q0FBd0MsU0FBUyxrQ0FBa0MsdUJBQXVCLFNBQVMsd0JBQXdCLHNCQUFzQix1QkFBdUIsU0FBUyw2QkFBNkIsb0JBQW9CLHdCQUF3QixvQkFBb0IscUJBQXFCLG9DQUFvQyx5QkFBeUIsd0JBQXdCLDJCQUEyQixTQUFTLGtDQUFrQyxtQ0FBbUMsaUNBQWlDLFNBQVMsaURBQWlELDRCQUE0QixTQUFTLG1DQUFtQyxtQ0FBbUMsb0NBQW9DLFNBQVMsc0NBQXNDLHVCQUF1QixTQUFTLGlDQUFpQyw2QkFBNkIsU0FBUywrQkFBK0IsOEJBQThCLFNBQVMseUJBQXlCLDJCQUEyQixTQUFTLCtEQUErRCwyQkFBMkIsU0FBUyxpQ0FBaUMsb0NBQW9DLHlCQUF5Qix5QkFBeUIsU0FBUyxtQ0FBbUMsOEJBQThCLFNBQVMsZ0NBQWdDLHdCQUF3QixxQkFBcUIsU0FBUyxTQUFTLG1CQUFtQjtBQUNsMm9DO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJjb21wb3Nlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21haW4vY29tcG9zZXIuanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9zZXIuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZXBhZ2UuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGFuZGluZy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4uL21vZHVsZXMvYXBwJztcclxuaW1wb3J0IHsgRm9ybXMgfSBmcm9tICcuLi9tb2R1bGVzL2Zvcm1zJztcclxuaW1wb3J0IHsgSFRUUCB9IGZyb20gJy4uL21vZHVsZXMvaHR0cCc7XHJcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uL21vZHVsZXMvbmF2JztcclxuaW1wb3J0IHsgUmVxdWVzdHMgfSBmcm9tICcuLi9tb2R1bGVzL3JlcXVlc3RzJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuLi9tb2R1bGVzL3VpJztcclxuaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuLi9tb2R1bGVzL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IFwiLi4vLi4vY3NzL2xhbmRpbmcuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL2Nzcy9ob21lcGFnZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vY3NzL2NvbXBvc2VyLmNzc1wiO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbmV3Q29uY2VydChlKSB7XHJcbiAgICBsZXQgcGllY2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS10aXRsZS1yZXN1bHQnKS50ZXh0Q29udGVudDtcclxuICAgIGxldCBwaWVjZUNvbXBvc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvc2VyLW5hbWUnKS50ZXh0Q29udGVudDtcclxuICAgIGxldCBjdXJyZW50VXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tdXNlcicpO1xyXG4gICAgaWYgKCFwaWVjZVRpdGxlKSB7XHJcbiAgICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnU2VsZWN0IGEgUGllY2UnKTtcclxuICAgIH0gZWxzZSBpZiAoIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnUGxlYXNlIExvZyBpbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL1RvZG8gYWRkIHBpZWNlIHRvIENvbmNlcnRcclxuICAgICAgICBsZXQgbmV3UGllY2UgPSBuZXcgUGllY2UocGllY2VDb21wb3NlciwgcGllY2VUaXRsZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3UGllY2UpO1xyXG4gICAgICAgIGxldCBuZXdDb25jZXJ0ID0gbmV3IENvbmNlcnQoXCJObyBOYW1lXCIpO1xyXG4gICAgICAgIG5ld0NvbmNlcnQucGllY2VzLnB1c2gobmV3UGllY2UpO1xyXG4gICAgICAgIFN0b3JhZ2Uuc2V0TmV3Q29uY2VydChuZXdDb25jZXJ0KTtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gJy9jb25jZXJ0X2J1aWxkZXInO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEFwcC5pbml0QmFzZSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFJlcXVlc3RzLmltYWdlRmV0Y2gpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGxldCBjdXJyZW50VXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tdXNlcicpO1xyXG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAgIGNyZWF0ZUNvbmNlcnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3JlYXRlQ29uY2VydC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBpcyBhIGxvZ2dlZCBpbiB1c2VyJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuVUlTZWxlY3RvcnMucGllY2VMaXN0LmZvckVhY2gocGllY2UgPT4ge1xyXG4gICAgcGllY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBSZXF1ZXN0cy5nZXRQaWVjZVJlc3VsdHMpO1xyXG59KVxyXG5cclxuVUlTZWxlY3RvcnMuc3VibWl0Q29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlcXVlc3RzLmNvbW1pdE5ld0NvbW1lbnQpO1xyXG5VSVNlbGVjdG9ycy5hZGRQaWVjZVRvRmF2b3JpdGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUmVxdWVzdHMuY29tbWl0TmV3RmF2b3JpdGUpO1xyXG5VSVNlbGVjdG9ycy5jcmVhdGVDb25jZXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3Q29uY2VydCk7IiwiY2xhc3MgVWlTZWxlY3RvcnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaXRlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS10aXRsZScpO1xyXG4gICAgdGhpcy5sb2dJbk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1uYXYnKTtcclxuICAgIHRoaXMuc2lnblVwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24tdXAtYnRuJyk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcbiAgICB0aGlzLm9wZW5Db25jZXJ0QnVpbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUnKTtcclxuXHJcbiAgICB0aGlzLm9wZW5Nb2JpbGVTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1tb2JpbGUtc2VhcmNoJyk7XHJcbiAgICB0aGlzLm9wZW5Nb2JpbGVCcm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1tb2JpbGUtYnJvd3NlJyk7XHJcbiAgICB0aGlzLnJpZ2h0TmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LW5hdi1jb250YWluZXInKTtcclxuXHJcbiAgICB0aGlzLmdldFN0YXJ0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXN0YXJ0ZWQtYnRuJyk7XHJcbiAgICAvL0Jyb3dzZSBNb2RhbFxyXG4gICAgdGhpcy5icm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3NlJyk7XHJcbiAgICB0aGlzLmJyb3dzZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jyb3dzZS1tb2RhbCcpO1xyXG4gICAgdGhpcy5icm93c2VNb2RhbEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3NlLW1vZGFsLWFyZWEnKTtcclxuICAgIHRoaXMuY2xvc2VCcm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtYnJvd3NlJyk7XHJcbiAgICB0aGlzLmJyb3dzZUNvbXBvc2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicm93c2UtY29tcG9zZXJzJyk7XHJcblxyXG4gICAgLy9EeW5hbWljIFNlYXJjaCBSZXN1bHQgRWxlbWVudHNcclxuICAgIHRoaXMuc2VhcmNoQmFyT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyLW92ZXJsYXknKTtcclxuICAgIHRoaXMuY2xvc2VTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2VhcmNoJyk7XHJcbiAgICB0aGlzLnNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXItZmllbGQnKTtcclxuICAgIHRoaXMuc2VhcmNoQmFyUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyLXJlc3VsdHMnKTtcclxuXHJcbiAgICAvL0xvZ2luIGFuZCBTaWduIFVwIEVsZW1lbnRzXHJcbiAgICB0aGlzLmxvZ0luT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1uYXYnKTtcclxuICAgIHRoaXMuc2lnblVwT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWJ0bicpO1xyXG4gICAgdGhpcy5zaWduVXBNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLW1vZGFsJyk7XHJcbiAgICB0aGlzLnNpZ25Jbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4tbW9kYWwnKTtcclxuICAgIHRoaXMuY2xvc2VTaWduVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2lnbi11cCcpO1xyXG4gICAgdGhpcy5jbG9zZVNpZ25JbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1zaWduLWluJyk7XHJcbiAgICB0aGlzLmxvZ2dlZEluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2dlZC1pbicpO1xyXG4gICAgdGhpcy5kcm9wRG93bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24tbWVudScpO1xyXG4gICAgdGhpcy5yZWdpc3RlclVzZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItdXNlci1idG4nKTtcclxuICAgIHRoaXMubG9nSW5Vc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXVzZXItYnRuJyk7XHJcblxyXG4gICAgLy9SZWdpc3RyYXRpb24gVmFsaWRhdGlvblxyXG5cclxuICAgIHRoaXMucmVnaXN0cmF0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWZvcm0nKTtcclxuICAgIHRoaXMucmVnaXN0ZXJVc2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci11c2VybmFtZScpO1xyXG4gICAgdGhpcy5yZWdpc3RlckVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWVtYWlsJyk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItcGFzc3dvcmQnKTtcclxuICAgIHRoaXMucmVnaXN0ZXJQYXNzd29yZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItcGFzc3dvcmQyJyk7XHJcblxyXG4gICAgdGhpcy5sb2dJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi1pbi1mb3JtJyk7XHJcbiAgICB0aGlzLmxvZ2luVXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tdXNlcm5hbWUnKTtcclxuICAgIHRoaXMubG9naW5QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1wYXNzd29yZCcpO1xyXG5cclxuICAgIC8vQ09NUE9TRVJcclxuICAgIHRoaXMucGllY2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlLXRpdGxlJyk7XHJcbiAgICB0aGlzLnBpZWNlUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS1yZXN1bHRzJyk7XHJcbiAgICB0aGlzLnBpZWNlRGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS1kZXRhaWxzJyk7XHJcbiAgICB0aGlzLmNvbXBvc2VyV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb3Nlci13cmFwJyk7XHJcbiAgICB0aGlzLnN1Ym1pdENvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWNvbW1lbnQnKTtcclxuICAgIHRoaXMuYWRkUGllY2VUb0Zhdm9yaXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAnYWRkLXBpZWNlLXRvLWZhdm9yaXRlcydcclxuICAgICk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbmNlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNvbmNlcnQnKTtcclxuXHJcbiAgICAvL0NPTkNFUlQgQlVJTERFUlxyXG4gICAgdGhpcy5hZGRUb0NvbmNlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLXRvLWNvbmNlcnQnKTtcclxuICAgIHRoaXMuZGVsZXRlUGllY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGUtcGllY2UnKTtcclxuXHJcbiAgICB0aGlzLmNvbmNlcnRCdWlsZGVyQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LWJ1aWxkZXItYXJlYScpO1xyXG4gICAgdGhpcy5jb25jZXJ0TWludXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LW1pbnV0ZXMnKTtcclxuICAgIHRoaXMuY29uY2VydENvbmNsdXNpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC1jb25jbHVzaW9uJyk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2hGYXZvcml0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZhdm9yaXRlcycpO1xyXG4gICAgdGhpcy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICdmYXZvcml0ZXMtc2VhcmNoLXJlc3VsdHMnXHJcbiAgICApO1xyXG4gICAgdGhpcy5kZWxldGVJbnRlcm1pc3Npb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWludGVybWlzc2lvbicpO1xyXG4gICAgdGhpcy5jb25jZXJ0VGl0bGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC10aXRsZS1idG4nKTtcclxuICAgIHRoaXMucmlnaHRTZWFyY2hBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LXNlYXJjaC1hcmVhJyk7XHJcbiAgICB0aGlzLmNvbmNlcnRUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtdGl0bGUtaW5wdXQnKTtcclxuICAgIHRoaXMuY2hhbmdlVGl0bGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlLXRpdGxlLWJ0bicpO1xyXG4gICAgdGhpcy5jb25jZXJ0VGl0bGVIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC10aXRsZS1oZWFkZXInKTtcclxuICAgIHRoaXMuc2F2ZUNvbmNlcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1jb25jZXJ0LWJ0bicpO1xyXG4gICAgLy9maXggdGhpcy5cclxuICAgIGlmICh0aGlzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5pbml0aWFsRmF2b3JpdGVzUmVzdWx0cyA9IFsuLi50aGlzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuY2hpbGRyZW5dO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0hPTVBBR0VcclxuICAgIHRoaXMuc2hvd0dvbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG92ZXItZ29sZCcpO1xyXG4gICAgLy9jb25zdCBzZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1yZXN1bHQnKTtcclxuICAgIHRoaXMudmlld01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlldy1tb3JlLWJ0bicpO1xyXG4gICAgdGhpcy5tYWluQ29udGVudElubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudC1hcmVhLWlubmVyJyk7XHJcbiAgICB0aGlzLm9wZW5Qcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tcHJvZmlsZScpO1xyXG4gICAgdGhpcy5vcGVuRmF2b3JpdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tZmF2b3JpdGVzJyk7XHJcbiAgICB0aGlzLm9wZW5Db25jZXJ0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuLWNvbmNlcnRzJyk7XHJcbiAgICB0aGlzLnJldHVybkhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmV0dXJuLWhvbWUnKTtcclxuXHJcbiAgICAvL0Zhdm9yaXRlcyBvbiBIb21lIFBhZ2VcclxuICAgIHRoaXMuaG9tZVNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1zZWFyY2gtcmVzdWx0cycpO1xyXG4gICAgLy9GYXZvcml0ZXMgUGFnZVxyXG4gICAgdGhpcy5mdWxsRmF2b3JpdGVzR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsLWZhdm9yaXRlcy1ncmlkJyk7XHJcblxyXG4gICAgLy9Db25jZXJ0cyBvbiBIb21lIFBhZ2VcclxuICAgIHRoaXMueW91ckNvbmNlcnRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICd5b3VyLWNvbmNlcnRzLWNvbnRhaW5lcidcclxuICAgICk7XHJcblxyXG4gICAgLy9Db25jZXJ0cyBvbiBDb25jZXJ0cyBQYWdlXHJcbiAgICB0aGlzLmZ1bGxDb25jZXJ0c0dyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbC1jb25jZXJ0cy1ncmlkJyk7XHJcblxyXG4gICAgaWYgKHRoaXMub3BlblByb2ZpbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm9wZW5MaW5rcyA9IFt0aGlzLm9wZW5Qcm9maWxlLCB0aGlzLm9wZW5GYXZvcml0ZXMsIHRoaXMub3BlbkNvbmNlcnRzLCB0aGlzLnJldHVybkhvbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3BlbkJyb3dzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLWJyb3dzZScpO1xyXG5cclxuICAgIHRoaXMucGllY2VOYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waWVjZS1uYW1lJyk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbmNlcnRCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgJ2NyZWF0ZS1jb25jZXJ0LWJ0bidcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5kcm9wRG93bllvdXJDb25jZXJ0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAnZHJvcGRvd24teW91ci1jb25jZXJ0cydcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5jb21wb3NlckxldHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAnY29tcG9zZXItbGV0dGVyLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICB0aGlzLnJlc3VsdHNDb2x1bW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1jb2x1bW4nKTtcclxuICAgIHRoaXMuY29tcG9zZXJSZXN1bHRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvc2VyLXJlc3VsdC1saXN0Jyk7XHJcbiAgICB0aGlzLnVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC11c2VybmFtZScpO1xyXG4gICAgaWYgKHRoaXMudXNlciAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnVzZXIgPSB0aGlzLnVzZXIudGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vRlJPTSBJTkRFWFxyXG4gICAgdGhpcy5jb21wb3NlckxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvc2VyLXJlc3VsdHMnKTtcclxuICAgIHRoaXMuc2VhcmNoRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZpZWxkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVUlTZWxlY3RvcnMgPSBuZXcgVWlTZWxlY3RvcnMoKTsiLCJpbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnLi9odHRwJztcclxuaW1wb3J0IHsgVXNlciwgQ29uY2VydCwgUGllY2UgfSBmcm9tICcuL3Nlc3Npb25PYmonO1xyXG5pbXBvcnQgeyBGb3JtcyB9IGZyb20gJy4vZm9ybXMnO1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuL25hdic7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0cyB9IGZyb20gJy4vcmVxdWVzdHMnO1xyXG5cclxuY2xhc3MgQVBQIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBnZW5lcmF0ZVJhbmRvbU51bWJlcihtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxuICB9XHJcblxyXG4gIGluaXRCYXNlKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiSU5JVCBCQVNFXCIpO1xyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd1NlYXJjaCk7XHJcbiAgICBVSVNlbGVjdG9ycy5vcGVuTW9iaWxlU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd1NlYXJjaCk7XHJcbiAgICBVSVNlbGVjdG9ycy5jbG9zZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNsb3NlU2VhcmNoRmllbGQpO1xyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICAgIFVJLmNsZWFyTGlzdCgpO1xyXG4gICAgICBSZXF1ZXN0cy5nZXRDb21wb3NlclJlc3VsdHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5vcGVuTW9iaWxlQnJvd3NlKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLm9wZW5Nb2JpbGVCcm93c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zaG93QnJvd3NlKTtcclxuICAgIH1cclxuXHJcbiAgICBVSVNlbGVjdG9ycy5icm93c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zaG93QnJvd3NlKTtcclxuICAgIFVJU2VsZWN0b3JzLmNsb3NlQnJvd3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBVSVNlbGVjdG9ycy5icm93c2VNb2RhbEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5icm93c2VNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmxvZ0luT3BlbiAmJiBVSVNlbGVjdG9ycy5zaWduVXBPcGVuKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmxvZ0luT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLm9wZW5Nb2RhbCk7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNpZ25VcE9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuTW9kYWwpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jbG9zZVNpZ25VcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNsb3NlTW9kYWwpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jbG9zZVNpZ25Jbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNsb3NlTW9kYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5sb2dnZWRJbikge1xyXG4gICAgICBVSVNlbGVjdG9ycy5sb2dnZWRJbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnNob3dEcm9wRG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLnJlZ2lzdHJhdGlvbkZvcm0pIHtcclxuICAgICAgVUlTZWxlY3RvcnMucmVnaXN0cmF0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm1JbnB1dHMgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAnLmZvcm0tZmllbGQgaW5wdXQnXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKCFGb3Jtcy5jaGVja1JlcXVpcmVkKFsuLi5mb3JtSW5wdXRzXSkpIHtcclxuICAgICAgICAgIEZvcm1zLmNoZWNrTGVuZ3RoKFVJU2VsZWN0b3JzLnJlZ2lzdGVyVXNlcm5hbWUsIDYsIDIwKTtcclxuICAgICAgICAgIEZvcm1zLmNoZWNrTGVuZ3RoKFVJU2VsZWN0b3JzLnJlZ2lzdGVyUGFzc3dvcmQsIDYsIDIwKTtcclxuICAgICAgICAgIEZvcm1zLmNoZWNrRW1haWwoVUlTZWxlY3RvcnMucmVnaXN0ZXJFbWFpbCk7XHJcbiAgICAgICAgICBGb3Jtcy5jaGVja1Bhc3N3b3Jkc01hdGNoKFxyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5yZWdpc3RlclBhc3N3b3JkLFxyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5yZWdpc3RlclBhc3N3b3JkMlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChGb3Jtcy5jaGVja0FsbFZhbGlkKFsuLi5mb3JtSW5wdXRzXSkpIHtcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMucmVnaXN0cmF0aW9uRm9ybS5zdWJtaXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5sb2dJbkZvcm0pIHtcclxuICAgICAgVUlTZWxlY3RvcnMubG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFGb3Jtcy5jaGVja1JlcXVpcmVkKFtcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMubG9naW5Vc2VybmFtZSxcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMubG9naW5QYXNzd29yZCxcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBsZXQgbG9naW5EYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogVUlTZWxlY3RvcnMubG9naW5Vc2VybmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFVJU2VsZWN0b3JzLmxvZ2luUGFzc3dvcmQudmFsdWUsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIFJlcXVlc3RzLnRlc3RMb2dpbihsb2dpbkRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbmNlcnRGdW5jdGlvbihlKSB7XHJcbiAgICBsZXQgY29tcG9zZXJOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXItbmFtZScpXHJcbiAgICAgIC50ZXh0Q29udGVudDtcclxuICAgIGxldCBwaWVjZU5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS1uYW1lJylcclxuICAgICAgLnRleHRDb250ZW50O1xyXG5cclxuICAgIGxldCBuZXdQaWVjZSA9IG5ldyBQaWVjZShjb21wb3Nlck5hbWUsIHBpZWNlTmFtZSk7XHJcbiAgICBsZXQgbmV3Q29uY2VydCA9IG5ldyBDb25jZXJ0KCdObyBOYW1lJyk7XHJcbiAgICBuZXdDb25jZXJ0LnBpZWNlcy5wdXNoKG5ld1BpZWNlKTtcclxuICAgIFN0b3JhZ2Uuc2V0TmV3Q29uY2VydChuZXdDb25jZXJ0KTtcclxuICB9XHJcblxyXG4gIC8vRm9yIENvbmNlcnQgQnVpbGRlclxyXG4gIGFkZFBpZWNlVG9Db25jZXJ0QXJyKGUsIGNvbmNlcnRQaWVjZUFycikge1xyXG4gICAgY29uc3QgYWRkVG9Db25jZXJ0Q29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgY29uc3QgcGllY2VDb21wb3NlciA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnBpZWNlLWluZm8tbGVmdCA+IHAnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGllY2VDb21wb3NlckRhdGVzID0gYWRkVG9Db25jZXJ0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuZGF0YS1jb21wb3Nlci1kYXRlcydcclxuICAgICk7XHJcbiAgICBjb25zdCBwaWVjZUNvbXBvc2VyTmF0aW9uYWxpdHkgPSBhZGRUb0NvbmNlcnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5kYXRhLWNvbXBvc2VyLW5hdGlvbmFsaXR5J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlSW5zdHJ1bWVudGF0aW9uID0gYWRkVG9Db25jZXJ0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuZGF0YS1waWVjZS1pbnN0cnVtZW50YXRpb24nXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGllY2VUaXRsZSA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnBpZWNlLWluZm8tbGVmdCBwOmxhc3QtY2hpbGQnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGllY2VEdXJhdGlvbiA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnBpZWNlLWluZm8tcmlnaHQgcCdcclxuICAgICk7XHJcblxyXG4gICAgLy9DaGFuZ2Ugbm90aWZpY3RhaW9uIHRleHQgYmFjayBhbmQgZm9ydGguXHJcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdQaWVjZSBhZGRlZCB0byBjb25jZXJ0JztcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ0FkZCB0byBjb25jZXJ0JztcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIGxldCBwaWVjZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwaWVjZUVsLmNsYXNzTGlzdCA9ICdjb25jZXJ0JztcclxuICAgIC8vcGllY2VFbC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgcGllY2VFbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmFycyBwaWVjZS1kcmFnLWJhcnNcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBvc2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZUNvbXBvc2VyLnRleHRDb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZUNvbXBvc2VyRGF0ZXMudGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ke3BpZWNlQ29tcG9zZXJOYXRpb25hbGl0eS50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZVRpdGxlLnRleHRDb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZUluc3RydW1lbnRhdGlvbi50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VEdXJhdGlvbi50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnggZGVsZXRlLXBpZWNlXCI+PC9pPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1pbnRlcm1pc3Npb25cIj5cclxuICAgICAgICAgICAgICA8cD5BZGQgSW50ZXJtaXNzaW9uIEhlcmU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIGA7XHJcblxyXG4gICAgY29uY2VydFBpZWNlQXJyLnB1c2gocGllY2VFbCk7XHJcbiAgICBjb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIH0pO1xyXG5cclxuICAgIFVJLmFkZFBpZWNlVG9ET00ocGllY2VFbCk7XHJcblxyXG4gICAgVUkuZGVsZXRlUGllY2VzTGlzdGVuZXJzKCk7XHJcbiAgICBVSS5jcmVhdGVJbnRlcm1pc3Npb25MaXN0ZW5lcnMoKTtcclxuICAgIFVJLmRyYWdMaXN0ZW5lcnMoKTtcclxuICAgIFVJLnVwZGF0ZUNvbmNlcnREdXJhdGlvbihVSS5nZXRDb25jZXJ0RHVyYXRpb24oY29uY2VydFBpZWNlQXJyKSk7XHJcbiAgfVxyXG5cclxuICAvL1RPRE9cclxuICAvL2RlbGV0ZVBpZWNlc1xyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcCA9IG5ldyBBUFAoKTsiLCJpbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5cclxuY2xhc3MgRk9STVMge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHJlZ2lzdGVyVmFsaWRhdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY3VycmVudEZvcm0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGxldCBmb3JtRmllbGRzID0gY3VycmVudEZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tZmllbGQnKTtcclxuXHJcbiAgICBbLi4uZm9ybUZpZWxkc10uZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgaWYgKGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci10ZXh0JykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgd2FzIGFuIGVycm9yJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIGFyZSBubyBlcnJvcnMnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja0VtYWlsKGlucHV0KSB7XHJcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICBpZiAocmUudGVzdChpbnB1dC52YWx1ZS50cmltKCkpKSB7XHJcbiAgICAgIFVJLnNob3dTdWNjZXNzKGlucHV0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFVJLnNob3dFcnJvcihpbnB1dCwgJ0VtYWlsIGlzIG5vdCB2YWxpZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tSZXF1aXJlZChpbnB1dEFycikge1xyXG4gICAgbGV0IGlzUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIGlucHV0QXJyLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgVUkuc2hvd0Vycm9yKGlucHV0LCBgJHtVSS5nZXRGaWVsZE5hbWUoaW5wdXQpfSBpcyByZXF1aXJlZC5gKTtcclxuICAgICAgICBpc1JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBVSS5zaG93U3VjY2VzcyhpbnB1dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpc1JlcXVpcmVkO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tMZW5ndGgoaW5wdXQsIG1pbiwgbWF4KSB7XHJcbiAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoIDwgbWluKSB7XHJcbiAgICAgIFVJLnNob3dFcnJvcihcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBgJHtVSS5nZXRGaWVsZE5hbWUoaW5wdXQpfSBtdXN0IGJlIGF0IGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiBtYXgpIHtcclxuICAgICAgVUkuc2hvd0Vycm9yKFxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIGAke1VJLmdldEZpZWxkTmFtZShpbnB1dCl9IG11c3QgYmUgbGVzcyB0aGFuICR7bWF4fSBjaGFyYWN0ZXJzfWBcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFVJLnNob3dTdWNjZXNzKGlucHV0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrUGFzc3dvcmRzTWF0Y2goaW5wdXQxLCBpbnB1dDIpIHtcclxuICAgIGlmIChpbnB1dDEudmFsdWUgIT09IGlucHV0Mi52YWx1ZSkge1xyXG4gICAgICBVSS5zaG93RXJyb3IoaW5wdXQyLCAnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tBbGxWYWxpZChmb3JtSW5wdXRBcnIpIHtcclxuICAgIGxldCBhbGxWYWxpZCA9IHRydWU7XHJcbiAgICBmb3JtSW5wdXRBcnIuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGZpZWxkLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlcnJvcicpICYmXHJcbiAgICAgICAgZmllbGQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID4gMVxyXG4gICAgICApIHtcclxuICAgICAgICBhbGxWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBhbGxWYWxpZDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGFsbFZhbGlkO1xyXG4gIH1cclxuXHJcbiAgbG9nSW5WYWxpZGF0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKCdMb2cgSW4gUHJldmVudGVkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybXMgPSBuZXcgRk9STVMoKTsiLCJjbGFzcyBIdHRwIHtcclxuICAvL01ha2UgSFRUUCBHZXRcclxuICBhc3luYyBnZXQodXJsKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc0RhdGE7XHJcbiAgfVxyXG5cclxuICAvL01ha2UgSFRUUCBQT1NUXHJcbiAgYXN5bmMgcG9zdCh1cmwsIGRhdGEpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc0RhdGE7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRYTUwoZXZlbnQgPSB1bmRlZmluZWQsIHVybCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgIHJldHVybiByZXNEYXRhO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0SlNPTih1cmwpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICByZXR1cm4gcmVzRGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIVFRQID0gbmV3IEh0dHAoKTsiLCJpbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5cclxuY2xhc3MgTkFWIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBjb21wb3NlclBhZ2VMaXN0ZW5lcnMoY29tcG9zZXIpIHtcclxuICAgIGNvbXBvc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgY29tcG9zZXIvJHtlLnRhcmdldC50ZXh0Q29udGVudH1gO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gbmV3IE5BVigpOyIsImltcG9ydCB7IFVJU2VsZWN0b3JzIH0gZnJvbSAnLi9VSVNlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IEhUVFAgfSBmcm9tICcuL2h0dHAnO1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuL25hdic7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcclxuXHJcbmNsYXNzIFJFUVVFU1RTIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBnZXRDb21wb3NlclJlc3VsdHMoKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBzZWFyY2hUZXJtOiBVSVNlbGVjdG9ycy5zZWFyY2hJbnB1dC52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIEhUVFAucG9zdCgnL2NvbXBvc2VycycsIGRhdGEpLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgY29uc29sZS5sb2codHlwZW9mIHJlcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZXMuY29tcG9zZXJzKVxyXG4gICAgICBsZXQgY29tcEFycmF5ID0gSlNPTi5wYXJzZShyZXMuY29tcG9zZXJzKTtcclxuICAgICAgY29uc29sZS5sb2coY29tcEFycmF5KTtcclxuXHJcbiAgICAgIGNvbXBBcnJheS5mb3JFYWNoKGNvbXBvc2VyID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgVUkucG9wdWxhdGVDb21wb3NlclNlYXJjaFJlc3VsdHMoY3VycmVudFVSTCwgY29tcG9zZXIpXHJcbiAgICAgIH0pXHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coYFRoZXJlIHdhcyBhbiBlcnIsICR7ZXJyfWApKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgYnJvd3NlUGFuZWxGZXRjaCgpIHtcclxuICAgIGxldCByYW5kb21Db21wQXJyID0gW107XHJcbiAgICBIVFRQLmdldCgnL2Jyb3dzZV9jb21wb3Nlcl9saXN0JylcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgY29tcG9zZXJzQXJyID0gZGF0YS5jb21wb3NlcnNfYXJyYXk7XHJcbiAgICAgICAgY29tcG9zZXJzQXJyLmZvckVhY2goKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtYWluTGV0dGVyID0gZ3JvdXBbMF1bMF07XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgcmFuZG9tQ29tcEFyci5wdXNoKFxyXG4gICAgICAgICAgICAgIGdyb3VwW0FwcC5nZW5lcmF0ZVJhbmRvbU51bWJlcigwLCBncm91cC5sZW5ndGgpXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFVJLmFkZFJhbmRvbUNvbXBvc2Vyc1RvRE9NKG1haW5MZXR0ZXIsIHJhbmRvbUNvbXBBcnIpO1xyXG4gICAgICAgICAgcmFuZG9tQ29tcEFyciA9IFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBUaGVyZSB3YXMgYW4gZXJyb3I6ICR7ZXJyfWApKTtcclxuICB9XHJcblxyXG4gIG9wZW5DdXJyZW50TGV0dGVyKGUpIHtcclxuICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2Jyb3dzZV9jb21wb3NlcnMnKSkge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYnJvd3NlX2NvbXBvc2Vycyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgIT09ICdMSScgfHwgZS50YXJnZXQudGFnTmFtZSAhPT0gJ0gxJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY29tcG9zZXJMZXR0ZXIgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgICAgbGV0IGRhdGEgPSB7IGxldHRlcjogY29tcG9zZXJMZXR0ZXIgfTtcclxuICAgICAgSFRUUC5wb3N0KCcuL2Jyb3dzZV9jb21wb3Nlcl9saXN0JywgZGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKFVJU2VsZWN0b3JzLnJlc3VsdHNDb2x1bW4udGV4dENvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLnJlc3VsdHNDb2x1bW4udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkYXRhLmxldHRlckFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgVUkuYXBwZW5kQ3VycmVudExldHRlcihpdGVtKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIFsuLi5VSVNlbGVjdG9ycy5yZXN1bHRzQ29sdW1uLmNoaWxkcmVuXS5mb3JFYWNoKChjb21wKSA9PiB7XHJcbiAgICAgICAgICAgIE5hdi5jb21wb3NlclBhZ2VMaXN0ZW5lcnMoY29tcCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhgVGhlcmUgd2FzIGFuIGVycm9yICR7ZXJyfWApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlc3RMb2dpbihsb2dpbkRhdGEpIHtcclxuICAgIEhUVFAucG9zdCgnL2xvZ2luJywgbG9naW5EYXRhKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS51cGRhdGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgVUlTZWxlY3RvcnMubG9nSW5Vc2VyQnRuLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZXNzYWdlfWA7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvaG9tZXBhZ2UnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS51cGRhdGUgPT09ICdmYWlsdXJlJykge1xyXG4gICAgICAgICAgVUkuc2hvd0Vycm9yKFVJU2VsZWN0b3JzLmxvZ2luVXNlcm5hbWUsIGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICBVSS5zaG93RXJyb3IoVUlTZWxlY3RvcnMubG9naW5QYXNzd29yZCwgZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coYFRoZXJlIHdhcyBhbiBlcnJvciwgJHtlcnJ9YCkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldEZ1bGxQaWVjZUluZm8ocGllY2VUaXRsZSkge1xyXG4gICAgSFRUUC5nZXQoYC9waWVjZV9kZXRhaWwvJHtwaWVjZVRpdGxlfWApXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gVUkuYWRkUGllY2VGcm9tTG9jYWxTdG9yYWdlKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBFUlJPUjogJHtlcnJ9YCkpXHJcbiAgfVxyXG5cclxuICBmYXZvcml0ZXNTZWFyY2goKSB7XHJcbiAgICBsZXQgc2VhcmNoVGVybSA9IFVJU2VsZWN0b3JzLnNlYXJjaEZhdm9yaXRlcy52YWx1ZTtcclxuICAgIGlmIChzZWFyY2hUZXJtID09PSAnJykge1xyXG4gICAgICBVSVNlbGVjdG9ycy5pbml0aWFsRmF2b3JpdGVzUmVzdWx0cy5mb3JFYWNoKChmYXZvcml0ZSkgPT4ge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQoZmF2b3JpdGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEhUVFAucG9zdCgnL3NlYXJjaF9mYXZvcml0ZXMnLCBzZWFyY2hUZXJtKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgZGF0YS5mYXZvcml0ZXMuZm9yRWFjaChmYXZvcml0ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBmYXZvcml0ZUxJLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtY29tcG9zZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS1jb21wb3Nlci1kYXRlc1wiPiR7ZmF2b3JpdGUuY29tcG9zZXIueWVhcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS1jb21wb3Nlci1uYXRpb25hbGl0eVwiPiR7ZmF2b3JpdGUuY29tcG9zZXIubmF0aW9uYWxpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS1waWVjZS1pbnN0cnVtZW50YXRpb25cIj4ke2Zhdm9yaXRlLmluc3RydW1lbnRhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZS1pbmZvLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2Zhdm9yaXRlLmNvbXBvc2VyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2Zhdm9yaXRlLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2UtaW5mby1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7ZmF2b3JpdGUuZHVyYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0biBhZGQtdG8tY29uY2VydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gQ29uY2VydFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQoZmF2b3JpdGVMSSk7XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gYEVSUk9SOiAke2Vycn1gKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGdldFBpZWNlUmVzdWx0cyhlKSB7XHJcbiAgICBVSS5jbGVhckNvbXBvc2VyUmVzdWx0cygpO1xyXG5cclxuICAgIGxldCBmb3JtYXR0ZWRTdHJpbmcgPSBlLnRhcmdldC5pbm5lckhUTUwuc3BsaXQoJyYnKVswXTtcclxuICAgIEhUVFAuZ2V0KGAvcGllY2VfZGV0YWlsLyR7Zm9ybWF0dGVkU3RyaW5nfWApXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnBpZWNlLnRpdGxlKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250ZW50cyA9IGA8aDIgaWQ9XCJwaWVjZS10aXRsZS1yZXN1bHRcIj4ke2RhdGEucGllY2UudGl0bGV9PC9oMj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInBpZWNlLWR1cmF0aW9uXCI+JHtkYXRhLnBpZWNlLmR1cmF0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwicGllY2UtaW5zdHJ1bWVudGF0aW9uXCI+JHtkYXRhLnBpZWNlLmluc3RydW1lbnRhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgVUlTZWxlY3RvcnMucGllY2VEZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTCA9IGNvbnRlbnRzO1xyXG5cclxuICAgICAgICAgIGlmIChkYXRhLnBpZWNlLmNvbW1lbnRzLmxlbmd0aCA+IDApIHtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgICAgIGNvbW1lbnRMaXN0LmNsYXNzTGlzdCA9ICdjb21tZW50LWxpc3QnO1xyXG4gICAgICAgICAgICBwaWVjZURldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudExpc3QpO1xyXG4gICAgICAgICAgICBkYXRhLnBpZWNlLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29tbWVudExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICBjb21tZW50TEkuY2xhc3NMaXN0ID0gJ2NvbW1lbnQnO1xyXG5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50LmF1dGhvciwgY29tbWVudC5ib2R5LCBjb21tZW50LnRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbW1lbnRMSS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQuYXV0aG9yfSBzYXlzOiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQuYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQudGltZXN0YW1wfTwvcD5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgIGNvbW1lbnRMaXN0LmFwcGVuZENoaWxkKGNvbW1lbnRMSSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpRmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGlGYWlsLmlubmVySFRNTCA9ICdUaGVyZSB3YXMgYSBmYWlsdXJlJztcclxuICAgICAgICBVSVNlbGVjdG9ycy5waWVjZVJlc3VsdHMuYXBwZW5kKGxpKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG5cclxuICBpbWFnZUZldGNoKCkge1xyXG4gICAgY29uc3QgY29tcG9zZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvc2VyLW5hbWUnKTtcclxuICAgIEhUVFAuZ2V0KGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jdXN0b21zZWFyY2gvdjE/a2V5PUFJemFTeUM3MmVtc2FwY3VYc0Y2NEhybjdjYV85eEliQVVibjdEWSZjeD0wMTQxMjQzOTE5NDU4MzAwODY4NTk6YWlzcmF1eGplankmcT0ke2NvbXBvc2VyTmFtZS50ZXh0Q29udGVudH1gKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBjb25zdCBjb21wb3NlckltZ1NyYyA9IGRhdGEuaXRlbXNbMF0ucGFnZW1hcC5jc2VfdGh1bWJuYWlsWzBdLnNyYztcclxuICAgICAgICBVSVNlbGVjdG9ycy5jb21wb3NlcldyYXAuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtjb21wb3NlckltZ1NyY30nKWA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmNvbXBvc2VyV3JhcC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzIwMFwiKSc7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb21taXROZXdDb21tZW50KGUpIHtcclxuXHJcblxyXG4gICAgbGV0IGNvbXBvc2VyVXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tdXNlcicpO1xyXG4gICAgY29uc3QgY29tbWVudEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1jb21tZW50Jyk7XHJcbiAgICBjb25zdCBjb21tZW50UGllY2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS10aXRsZS1yZXN1bHQnKTtcclxuXHJcblxyXG4gICAgaWYgKCFjb21wb3NlclVzZXIpIHtcclxuICAgICAgLy9UT0RPIFdSSVRFIFNIT1cgQlVUVE9OIEVSUk9SIFxyXG4gICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQsICdQbGVhc2UgbG9nIGluJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFjb21tZW50UGllY2VUaXRsZSkge1xyXG4gICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQsICdTZWxlY3QgYSBwaWVjZScpO1xyXG4gICAgfSBlbHNlIGlmIChjb21tZW50Qm9keS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnV3JpdGUgIGEgY29tbWVudCEnKTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBjb25zdCBlbnRyeSA9IHtcclxuICAgICAgICBib2R5OiBjb21tZW50Qm9keS52YWx1ZSxcclxuICAgICAgICBwaWVjZTogY29tbWVudFBpZWNlVGl0bGUudGV4dENvbnRlbnRcclxuICAgICAgfTtcclxuXHJcbiAgICAgIEhUVFAucG9zdCgnL2FkZF9jb21tZW50JywgZW50cnkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21taXROZXdGYXZvcml0ZShlKSB7XHJcbiAgICBsZXQgY29tcG9zZXJVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi11c2VyJyk7XHJcbiAgICBsZXQgcGllY2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS10aXRsZS1yZXN1bHQnKTtcclxuXHJcbiAgICBsZXQgcGllY2VTZW5kID0ge1xyXG4gICAgICBwaWVjZVRpdGxlU2VuZDogcGllY2VUaXRsZS50ZXh0Q29udGVudFxyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGllY2VUaXRsZSkge1xyXG4gICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQsICdTZWxlY3QgYSBwaWVjZScpO1xyXG4gICAgfSBlbHNlIGlmICghY29tcG9zZXJVc2VyKSB7XHJcbiAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCwgJ1BsZWFzZSBMb2cgaW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEhUVFAucG9zdCgnL2FkZF9waWVjZV90b19mYXZvcml0ZXMnKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1lc3NhZ2V9YDtcclxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnQWRkIHBpZWNlIHRvIGZhdm9yaXRlcyc7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coYEZFVENIIEVSUk9SOiAke2Vycn1gKSlcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RzID0gbmV3IFJFUVVFU1RTKCk7IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBjb25jZXJ0cyA9IFtdKSB7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICB0aGlzLmNvbmNlcnRzID0gY29uY2VydHM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uY2VydCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIHBpZWNlcyA9IFtdKSB7XHJcbiAgICB0aGlzLmlkID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIoMCwgNTAwMDApO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5waWVjZXMgPSBwaWVjZXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2Uge1xyXG4gIGNvbnN0cnVjdG9yKGNvbXBvc2VyLCB0aXRsZSkge1xyXG4gICAgdGhpcy5jb21wb3NlciA9IGNvbXBvc2VyO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBVc2VyLCBDb25jZXJ0LCBQaWVjZSB9IGZyb20gJy4vc2Vzc2lvbk9iaic7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IFVJU2VsZWN0b3JzIH0gZnJvbSAnLi9VSVNlbGVjdG9ycyc7XHJcblxyXG5jbGFzcyBTVE9SQUdFIHtcclxuICBnZXRVc2VyKCkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VyKHVzZXIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVXNlcigpIHtcclxuICAgIGxldCB1c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdXNlcm5hbWUnKS50ZXh0Q29udGVudDtcclxuICAgIGlmICghdGhpcy5nZXRVc2VyKCkpIHtcclxuICAgICAgbGV0IG5ld1VzZXIgPSBuZXcgVXNlcih1c2VyKTtcclxuICAgICAgVUkuZGlzcGxheUNvbmNlcnRzKG5ld1VzZXIpO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyID09PSB0aGlzLmdldFVzZXIoKS51c2VybmFtZSkge1xyXG4gICAgICBsZXQgY3VycmVudFVzZXIgPSB0aGlzLmdldFVzZXIoKTtcclxuICAgICAgVUkuZGlzcGxheUNvbmNlcnRzKGN1cnJlbnRVc2VyKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyICE9PSB0aGlzLmdldFVzZXIoKS51c2VybmFtZSkge1xyXG4gICAgICBsZXQgbmV3VXNlciA9IG5ldyBVc2VyKHVzZXIpO1xyXG4gICAgICB0aGlzLnNldFVzZXIobmV3VXNlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb25jZXJ0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25ld0NvbmNlcnQnKTtcclxuICB9XHJcblxyXG4gIHNldE5ld0NvbmNlcnQoY29uY2VydCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25ld0NvbmNlcnQnLCBKU09OLnN0cmluZ2lmeShjb25jZXJ0KSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKHN0cmluZykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZShzdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgc2V0SXRlbShzdHJpbmcsIGl0ZW0pIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0cmluZywgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3JhZ2UgPSBuZXcgU1RPUkFHRSgpO1xyXG4iLCJpbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0cyB9IGZyb20gJy4vcmVxdWVzdHMnO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVaSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRyYWdTdGFydEluZGV4O1xyXG4gICAgdGhpcy5hbGwgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdGVzdEltcG9ydCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFVJU2VsZWN0b3JzLnNpdGVUaXRsZSk7XHJcbiAgfVxyXG5cclxuICAvL0JBU0VcclxuICBvcGVuTW9kYWwoZSkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKSA9PT0gJ0xvZyBJbicpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2lnbkluTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNpZ25VcE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZU1vZGFsKGUpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnY2xvc2Utc2lnbi1pbicpIHtcclxuICAgICAgY29uc3Qgc2lnbkluTW9kYWxQYXJlbnQgPVxyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBzaWduSW5Nb2RhbFBhcmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbW9kYWxQYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIG1vZGFsUGFyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93U2VhcmNoKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50ID09PSBVSVNlbGVjdG9ycy5vcGVuTW9iaWxlU2VhcmNoKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnJpZ2h0TmF2Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNpdGVUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSVNlbGVjdG9ycy5yaWdodE5hdkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZVNlYXJjaEZpZWxkKCkge1xyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgVUlTZWxlY3RvcnMucmlnaHROYXZDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuc2l0ZVRpdGxlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaXRlVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93QnJvd3NlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFVJU2VsZWN0b3JzLmJyb3dzZU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgVUlTZWxlY3RvcnMuYnJvd3NlTW9kYWxBcmVhLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmJyb3dzZUNvbXBvc2Vycy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHdoaWxlIChVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmJyb3dzZUNvbXBvc2Vycy5yZW1vdmVDaGlsZChcclxuICAgICAgICAgIFVJU2VsZWN0b3JzLmJyb3dzZUNvbXBvc2Vycy5maXJzdENoaWxkXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgUmVxdWVzdHMuYnJvd3NlUGFuZWxGZXRjaCgpO1xyXG4gICAgLy9SZXF1ZXN0cy5vcGVuQ3VycmVudExldHRlcigpO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kQ3VycmVudExldHRlcihpdGVtKSB7XHJcbiAgICBsZXQgY29tcG9zZXJSZXN1bHROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29tcG9zZXJSZXN1bHROYW1lLnRleHRDb250ZW50ID0gYCR7aXRlbX1gO1xyXG4gICAgVUlTZWxlY3RvcnMucmVzdWx0c0NvbHVtbi5hcHBlbmRDaGlsZChjb21wb3NlclJlc3VsdE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgYWRkUmFuZG9tQ29tcG9zZXJzVG9ET00obWFpbkxldHRlciwgcmFuZG9tQ29tcEFycikge1xyXG4gICAgbGV0IGNvbXBvc2VyTGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb3NlckxldHRlci5jbGFzc0xpc3QgPSAnbGV0dGVyJztcclxuXHJcblxyXG4gICAgLy9USEVSRSBJUyBTT01FIEZVQ0tJTkcgQkVBTUlORyBJU1NVRSBIRVJFXHJcbiAgICBjb21wb3NlckxldHRlci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICA8aDE+JHttYWluTGV0dGVyfTwvaDE+XHJcbiAgICAgPGRpdiBjbGFzcz1cImxldHRlci1jb21wb3NlcnNcIj5cclxuXHJcbiAgICAgICAgICAgJHtyYW5kb21Db21wQXJyLm1hcCgoaXRlbSkgPT4ge1xyXG5cclxuICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyYW5kb20tY29tcG9zZXItbGlua3NcIj48YSBocmVmPVwiI1wiPiR7aXRlbX08L2E+PC9wPmBcclxuICAgIH0pXHJcbiAgICAgICAgLmpvaW4oJycpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgIFVJU2VsZWN0b3JzLmJyb3dzZUNvbXBvc2Vycy5hcHBlbmRDaGlsZChjb21wb3NlckxldHRlcik7XHJcblxyXG4gICAgY29uc3QgbGV0dGVyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGV0dGVyIGgxJyk7XHJcbiAgICBjb25zb2xlLmxvZyhsZXR0ZXJMaW5rcyk7XHJcbiAgICBbLi4ubGV0dGVyTGlua3NdLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlcXVlc3RzLm9wZW5DdXJyZW50TGV0dGVyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJhbmRvbUNvbXBvc2VyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICcucmFuZG9tLWNvbXBvc2VyLWxpbmtzIGEnXHJcbiAgICApO1xyXG4gICAgWy4uLnJhbmRvbUNvbXBvc2VyTGlzdF0uZm9yRWFjaCgoY29tcG9zZXJMaW5rKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbXBvc2VyTGluayk7XHJcbiAgICAgIGNvbXBvc2VyTGluay5ocmVmID0gYC9jb21wb3Nlci8ke2NvbXBvc2VyTGluay50ZXh0Q29udGVudH1gO1xyXG4gICAgICAvL2NvbXBvc2VyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNvbnNvbGUubG9nKCdUSVRTJykpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGVhckxpc3QoKSB7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHdoaWxlIChVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnJlbW92ZUNoaWxkKFxyXG4gICAgICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5maXJzdENoaWxkXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuZmlyc3RDaGlsZCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnJlbW92ZUNoaWxkKFxyXG4gICAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuZmlyc3RDaGlsZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVDb21wb3NlclNlYXJjaFJlc3VsdHMoY3VycmVudFVSTCwgY29tcG9zZXIpIHtcclxuICAgIC8vIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIGNvbnN0IHJlc3VsdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVzdWx0RGl2LmNsYXNzTGlzdCA9ICdzZWFyY2gtcmVzdWx0LWRvd24nO1xyXG5cclxuICAgIGlmIChjdXJyZW50VVJMLmluY2x1ZGVzKCdjb21wb3NlcicpKSB7XHJcbiAgICAgIHJlc3VsdERpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxwPiR7Y29tcG9zZXIubmFtZX08L3A+XHJcbiAgICAgIDxhIGhyZWY9XCIke2NvbXBvc2VyLm5hbWV9XCI+PGJ1dHRvbiBjbGFzcz1cInByaW1hcnktYnRuXCI+VmlzaXQgQ29tcG9zZXIgUGFnZTwvYnV0dG9uPjwvYT5cclxuXHJcbiAgYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdERpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxwPiR7Y29tcG9zZXIubmFtZX08L3A+XHJcbiAgICAgIDxhIGhyZWY9XCJjb21wb3Nlci8ke2NvbXBvc2VyLm5hbWV9XCI+PGJ1dHRvbiBjbGFzcz1cInByaW1hcnktYnRuXCI+VmlzaXQgQ29tcG9zZXIgUGFnZTwvYnV0dG9uPjwvYT5cclxuXHJcbiAgYDtcclxuICAgIH1cclxuXHJcbiAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLmFwcGVuZENoaWxkKHJlc3VsdERpdik7XHJcbiAgfVxyXG5cclxuICBzaG93RHJvcERvd24oKSB7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuZHJvcERvd25NZW51LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuZHJvcERvd25NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSVNlbGVjdG9ycy5kcm9wRG93bk1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0ZPUk0gVkFMSURBVElPTlxyXG4gIHNob3dFcnJvcihpbnB1dCwgbWVzc2FnZSkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgZm9ybUNvbnRyb2wuY2xhc3NOYW1lID0gJ2Zvcm0tZmllbGQgZXJyb3InO1xyXG5cclxuICAgIGNvbnN0IGVycm9yID0gZm9ybUNvbnRyb2wucXVlcnlTZWxlY3RvcignLmVycm9yLXRleHQnKTtcclxuICAgIGVycm9yLmlubmVyVGV4dCA9IG1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICBzaG93U3VjY2VzcyhpbnB1dCkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgZm9ybUNvbnRyb2wuY2xhc3NOYW1lID0gJ2Zvcm0tZmllbGQgc3VjY2Vzcyc7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZE5hbWUoaW5wdXQpIHtcclxuICAgIGxldCBuZXdTdHJpbmcgPSBpbnB1dC5pZC5zcGxpdCgnLScpWzFdO1xyXG4gICAgY29uc29sZS5sb2cobmV3U3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmV3U3RyaW5nLnNsaWNlKDEpKTtcclxuICAgIGlmIChuZXdTdHJpbmcuaW5jbHVkZXMoJ3Bhc3N3b3JkMicpKSB7XHJcbiAgICAgIHJldHVybiAnUmVwZWF0ZWQgUGFzc3dvcmQnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld1N0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5ld1N0cmluZy5zbGljZSgxKTtcclxuICB9XHJcblxyXG4gIC8vQ09OQ0VSVCBCVUlMREVSXHJcblxyXG4gIGFkZFBpZWNlRnJvbUxvY2FsU3RvcmFnZShwT2JqZWN0KSB7XHJcbiAgICBjb25zdCBwaWVjZU9iamVjdCA9IHBPYmplY3QucGllY2U7XHJcbiAgICBsZXQgcGllY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGllY2VFbC5jbGFzc0xpc3QgPSAnY29uY2VydCc7XHJcbiAgICBwaWVjZUVsLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcclxuICAgIHBpZWNlRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgXHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmFycyBwaWVjZS1kcmFnLWJhcnNcIj48L2k+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb3Nlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3BpZWNlT2JqZWN0LmNvbXBvc2VyfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7cGllY2VPYmplY3QueWVhcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5uYXRpb25hbGl0eX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2UtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3BpZWNlT2JqZWN0Lmluc3RydW1lbnRhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3BpZWNlT2JqZWN0LmR1cmF0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcyBmYS0yeCBkZWxldGUtcGllY2VcIj48L2k+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1pbnRlcm1pc3Npb25cIj5cclxuICAgICAgICAgICAgPHA+QWRkIEludGVybWlzc2lvbiBIZXJlPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICBgO1xyXG5cclxuICAgIC8vRklYIERFUEVOREVOQ0lFU1xyXG4gICAgY29uY2VydFBpZWNlQXJyLnB1c2gocGllY2VFbCk7XHJcbiAgICBjb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIH0pO1xyXG5cclxuICAgIFVpLmFkZFBpZWNlVG9ET00ocGllY2VFbCk7XHJcblxyXG4gICAgVWkuZGVsZXRlUGllY2VzTGlzdGVuZXJzKCk7XHJcbiAgICBVaS5jcmVhdGVJbnRlcm1pc3Npb25MaXN0ZW5lcnMoKTtcclxuICAgIFVpLmRyYWdMaXN0ZW5lcnMoKTtcclxuICAgIFVpLnVwZGF0ZUNvbmNlcnREdXJhdGlvbihVaS5nZXRDb25jZXJ0RHVyYXRpb24oY29uY2VydFBpZWNlQXJyKSk7XHJcblxyXG4gICAgU3RvcmFnZS5yZW1vdmVJdGVtKCduZXdDb25jZXJ0Jyk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q29uY2VydER1cmF0aW9uKHBpZWNlQXJyKSB7XHJcbiAgICBpZiAocGllY2VBcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGxldCBlbXB0eSA9IDA7XHJcbiAgICAgIFVpLmNvbmNlcnRMZW5ndGhKdWRnZW1lbnQoVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLCBlbXB0eSk7XHJcbiAgICAgIHJldHVybiBlbXB0eTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvbmNlcnREdXJhdGlvbkFyciA9IHBpZWNlQXJyLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaW50ZXJtaXNzaW9uJykpIHtcclxuICAgICAgICAgIHJldHVybiAzMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIE51bWJlcihcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcucGllY2UtaW5mbyBwOmxhc3Qtb2YtdHlwZScpXHJcbiAgICAgICAgICAgICAgLnRleHRDb250ZW50LnNwbGl0KFwiJ1wiKVswXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgY29uY2VydER1cmF0aW9uID0gY29uY2VydER1cmF0aW9uQXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYyArIHZhbCk7XHJcbiAgICAgIC8vIGlmKGNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuY29uY2VydC5pbnRlcm1pc3Npb24nKSl7XHJcbiAgICAgIC8vICAgICBjb25jZXJ0RHVyYXRpb24gKz0gMzA7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIFVpLmNvbmNlcnRMZW5ndGhKdWRnZW1lbnQoY29uY2VydEJ1aWxkZXJBcmVhLCBjb25jZXJ0RHVyYXRpb24pO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbmNlcnREdXJhdGlvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjcmVhdGVJbnRlcm1pc3Npb24oZSwgY29uY2VydFBpZWNlQXJyKSB7XHJcbiAgICBpZiAoIVVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuYWRkLWludGVybWlzc2lvbicpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGFyZW50Q29uY2VydCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuICAgIC8vY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaW50ZXJtaXNzaW9uJykucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcblxyXG4gICAgbGV0IGludGVybWlzc2lvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnRlcm1pc3Npb25FbC5jbGFzc0xpc3QgPSAnY29uY2VydCBpbnRlcm1pc3Npb24nO1xyXG4gICAgLy9pbnRlcm1pc3Npb25FbC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgaW50ZXJtaXNzaW9uRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmFyc1wiIGRyYWdnYWJsZT1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICA8cD5JbnRlcm1pc3Npb246IH4zMCBtaW51dGVzPC9wPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcyBmYS0yeCBkZWxldGUtcGllY2VcIiBpZD1cImRlbGV0ZS1pbnRlcm1pc3Npb25cIj48L2k+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgLy9BREQgVE8gQVBQXHJcbiAgICBjb25jZXJ0UGllY2VBcnIuc3BsaWNlKFxyXG4gICAgICBjb25jZXJ0UGllY2VBcnIuaW5kZXhPZihwYXJlbnRDb25jZXJ0KSArIDEsXHJcbiAgICAgIDAsXHJcbiAgICAgIGludGVybWlzc2lvbkVsXHJcbiAgICApO1xyXG5cclxuICAgIGNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSwgaW5kZXgpID0+IHtcclxuICAgICAgcGllY2Uuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG4gICAgfSk7XHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UpID0+IHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmFwcGVuZENoaWxkKHBpZWNlKTtcclxuICAgIH0pO1xyXG4gICAgLy9jb25jZXJ0QnVpbGRlckFyZWEuYXBwZW5kQ2hpbGQoaW50ZXJtaXNzaW9uRWwpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhjb25jZXJ0UGllY2VBcnIpO1xyXG5cclxuICAgIFVpLnVwZGF0ZUNvbmNlcnREdXJhdGlvbihVaS5nZXRDb25jZXJ0RHVyYXRpb24oY29uY2VydFBpZWNlQXJyKSk7XHJcblxyXG4gICAgLy9EZWxldGUgSW50ZXJtaXNzaW9uXHJcbiAgICBsZXQgY2xvc2VJbnRlcm1pc3Npb24gPSBpbnRlcm1pc3Npb25FbC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLWludGVybWlzc2lvbicpO1xyXG4gICAgY2xvc2VJbnRlcm1pc3Npb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25jZXJ0UGllY2VBcnIuc3BsaWNlKGNvbmNlcnRQaWVjZUFyci5pbmRleE9mKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpLCAxKTtcclxuXHJcbiAgICAgIC8vUmVtb3ZlIEludGVybWlzc2lvbiBmcm9tIERPTVxyXG4gICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgLy9VcGRhdGUgRGF0YS1JbmRleCBBdHRyaWJ1dGVcclxuICAgICAgY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBVaS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVWkuZ2V0Q29uY2VydER1cmF0aW9uKGNvbmNlcnRQaWVjZUFycikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb25jZXJ0RHVyYXRpb24oZHVyYXRpb25OdW0pIHtcclxuICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRNaW51dGVzLnRleHRDb250ZW50ID0gYCR7ZHVyYXRpb25OdW19YDtcclxuICB9XHJcblxyXG4gIGNvbmNlcnRMZW5ndGhKdWRnZW1lbnQoY29udGFpbmVyLCBkdXJhdGlvbikge1xyXG4gICAgaWYgKGR1cmF0aW9uID09IDApIHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydENvbmNsdXNpb24udGV4dENvbnRlbnQgPSBgUGxlYXNlIGFkZCBzb21lIHBpZWNlcy5gO1xyXG4gICAgfSBlbHNlIGlmIChkdXJhdGlvbiA8IDkwICYmIGR1cmF0aW9uID4gMCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0Q29uY2x1c2lvbi50ZXh0Q29udGVudCA9IGBDb25jZXJ0IGlzIHBvdGVudGlhbGx5IHRvbyBzaG9ydC5gO1xyXG4gICAgfSBlbHNlIGlmIChkdXJhdGlvbiA+PSA5MCAmJiBkdXJhdGlvbiA8PSAxMjApIHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydENvbmNsdXNpb24udGV4dENvbnRlbnQgPSBgUGVyZmVjdCBjb25jZXJ0IGxlbmd0aCFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydENvbmNsdXNpb24udGV4dENvbnRlbnQgPSBgQ29uY2VydCBpcyBnZXR0aW5nIGEgYml0IGxvbmcuLi5gO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbmNlcnQuaW50ZXJtaXNzaW9uJykpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vIGludGVybWlzc2lvbiB5ZXQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVBpZWNlc0xpc3RlbmVycygpIHtcclxuICAgIGxldCBkZWxldGVQaWVjZXMgPSBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1waWVjZScpO1xyXG4gICAgZGVsZXRlUGllY2VzLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIHBpZWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlUGllY2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVJbnRlcm1pc3Npb25MaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgaW50ZXJtaXNzaW9uTGlzdCA9IFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnLmFkZC1pbnRlcm1pc3Npb24nXHJcbiAgICApO1xyXG4gICAgaW50ZXJtaXNzaW9uTGlzdC5mb3JFYWNoKChpbnRlcm1pc3Npb24pID0+IHtcclxuICAgICAgaW50ZXJtaXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlSW50ZXJtaXNzaW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGllY2UoY29uY2VydFBpZWNlQXJyKSB7XHJcbiAgICAvL2dldCBwYXJlbnQgRWxcclxuICAgIGxldCBzZWxlY3RlZENvbmNlcnQgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgLy9SZW1vdmUgU2VsZWN0ZWQgUGllY2UgZnJvbSBBcnJheVxyXG4gICAgY29uY2VydFBpZWNlQXJyLnNwbGljZShjb25jZXJ0UGllY2VBcnIuaW5kZXhPZihzZWxlY3RlZENvbmNlcnQpLCAxKTtcclxuXHJcbiAgICAvL1JlbW92ZSBQaWVjZSBmcm9tIERPTVxyXG4gICAgc2VsZWN0ZWRDb25jZXJ0LnJlbW92ZSgpO1xyXG5cclxuICAgIC8vVXBkYXRlIERhdGEtSW5kZXggQXR0cmlidXRlXHJcbiAgICBjb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIH0pO1xyXG4gICAgVWkudXBkYXRlQ29uY2VydER1cmF0aW9uKFVpLmdldENvbmNlcnREdXJhdGlvbihjb25jZXJ0UGllY2VBcnIpKTtcclxuICB9XHJcblxyXG5cclxuICBhZGRQaWVjZVRvRE9NKHBpZWNlKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEuYXBwZW5kQ2hpbGQocGllY2UpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJGYXZlTGlzdCgpIHtcclxuICAgIHdoaWxlIChVSVNlbGVjdG9ycy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuZmF2b3JpdGVzU2VhcmNoUmVzdWx0cy5yZW1vdmVDaGlsZChcclxuICAgICAgICBVSVNlbGVjdG9ycy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLmZpcnN0Q2hpbGRcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dJbnRlcm1pc3Npb24oZSkge1xyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuY29uY2VydC5pbnRlcm1pc3Npb24nKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gJ2NvbmNlcnQnKSB7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGUudGFyZ2V0ID09PSBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEgJiZcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5jb25jZXJ0LnNob3cnKVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBjdXJyZW50Q29uY2VydCA9IFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICcuY29uY2VydC5zaG93J1xyXG4gICAgICApO1xyXG4gICAgICBjdXJyZW50Q29uY2VydC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlQ29uY2VydFRpdGxlKCkge1xyXG4gICAgbGV0IGNvbmNlcnRUaXRsZSA9IFVJU2VsZWN0b3JzLmNvbmNlcnRUaXRsZUlucHV0LnZhbHVlO1xyXG5cclxuICAgIGlmIChjb25jZXJ0VGl0bGUgPT09ICcnKSB7XHJcbiAgICAgIC8vUGxlYXNlIFByb3ZpZGUgQSBUaXRsZS5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vQ2hhbmdlIERPTVxyXG4gICAgICBVSVNlbGVjdG9ycy5yaWdodFNlYXJjaEFyZWEuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0VGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPSBgJHtjb25jZXJ0VGl0bGV9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUNvbmNlcnRUaXRsZSgpIHtcclxuICAgIFVJU2VsZWN0b3JzLnJpZ2h0U2VhcmNoQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVJbnRlcm1pc3Npb24oZSkge1xyXG4gICAgaWYgKCFVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmFkZC1pbnRlcm1pc3Npb24nKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgUGFyZW50XHJcbiAgICBsZXQgcGFyZW50Q29uY2VydCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIHBhcmVudENvbmNlcnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuICAgIC8vTWFrZSBJbnRlcm1pc3Npb24gRWxlbWVudFxyXG4gICAgbGV0IGludGVybWlzc2lvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnRlcm1pc3Npb25FbC5jbGFzc0xpc3QgPSAnY29uY2VydCBpbnRlcm1pc3Npb24nO1xyXG4gICAgLy9pbnRlcm1pc3Npb25FbC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgaW50ZXJtaXNzaW9uRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmFyc1wiIGRyYWdnYWJsZT1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICA8cD5JbnRlcm1pc3Npb246IH4zMCBtaW51dGVzPC9wPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcyBmYS0yeCBkZWxldGUtcGllY2VcIiBpZD1cImRlbGV0ZS1pbnRlcm1pc3Npb25cIj48L2k+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgLy9BREQgQVBQIEZVTkNUSU9OIEhFUkVcclxuICB9XHJcblxyXG4gIGRlbGV0ZUludGVybWlzc2lvbihpbnRlcm1pc3Npb25FbGVtZW50KSB7XHJcbiAgICBsZXQgY2xvc2VJbnRlcm1pc3Npb24gPSBpbnRlcm1pc3Npb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcjZGVsZXRlLWludGVybWlzc2lvbidcclxuICAgICk7XHJcbiAgICBjbG9zZUludGVybWlzc2lvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwYXJzZUR1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIE51bWJlcihcclxuICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcucGllY2UtaW5mbyBwOmxhc3Qtb2YtdHlwZScpLnRleHRDb250ZW50LnNwbGl0KFwiJ1wiKVswXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vRHJhZyBGdW5jdGlvbnNcclxuXHJcbiAgZHJhZ1N0YXJ0KGUpIHtcclxuICAgIHRoaXMuZHJhZ1N0YXJ0SW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0VudGVyKCkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdvdmVyJyk7XHJcbiAgfVxyXG5cclxuICBkcmFnTGVhdmUoKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcclxuICB9XHJcblxyXG4gIGRyYWdPdmVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIGRyYWdEcm9wKCkge1xyXG4gICAgY29uc3QgZHJhZ0VuZEluZGV4ID0gK3RoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XHJcbiAgICBVaS5zd2FwSXRlbXMoZHJhZ1N0YXJ0SW5kZXgsIGRyYWdFbmRJbmRleCk7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcclxuICB9XHJcblxyXG4gIHN3YXBJdGVtcyhmcm9tSW5kZXgsIHRvSW5kZXgsIGNvbmNlcnRQaWVjZUFycikge1xyXG4gICAgY29uc3QgaXRlbU9uZSA9IGNvbmNlcnRQaWVjZUFycltmcm9tSW5kZXhdO1xyXG4gICAgY29uc3QgaXRlbVR3byA9IGNvbmNlcnRQaWVjZUFyclt0b0luZGV4XTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGNvbmNlcnRQaWVjZUFycltmcm9tSW5kZXhdKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbmNlcnRQaWVjZUFyclt0b0luZGV4XSk7XHJcbiAgICBjb25jZXJ0UGllY2VBcnJbZnJvbUluZGV4XSA9IGl0ZW1Ud287XHJcbiAgICBjb25jZXJ0UGllY2VBcnJbdG9JbmRleF0gPSBpdGVtT25lO1xyXG5cclxuICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5pbm5lckhUTUwgPSBgYDtcclxuXHJcbiAgICBjb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBVaS5hZGRQaWVjZVRvRE9NKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0hPTUVQQUdFXHJcbiAgZGlzcGxheUNvbmNlcnRzKHVzZXIsIGFsbCA9IGZhbHNlKSB7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuZnVsbENvbmNlcnRzR3JpZC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmZ1bGxDb25jZXJ0c0dyaWQuaW5uZXJIVE1MID0gYGA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICh1c2VyLmNvbmNlcnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBsZXQgbm90aWZpY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIG5vdGlmaWNhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QgPSAnbm8tY29uY2VydHMtbm90aWZpY2F0aW9uJztcclxuICAgICAgbm90aWZpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wb3Nlci1uYW1lXCI+VmlzaXQgdGhlIGNvbmNlcnQgYnVpbGRlciBwYWdlIGFib3ZlIHRvIHN0YXJ0IGJ1aWxkaW5nIGNvbmNlcnRzITwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYDtcclxuICAgICAgVUlTZWxlY3RvcnMueW91ckNvbmNlcnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBVSVNlbGVjdG9ycy55b3VyQ29uY2VydHNDb250YWluZXIuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiAodXNlci5mYXZvcml0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAgIGxldCBub3RpZmljYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy8gICBub3RpZmljYXRpb25Db250YWluZXIuY2xhc3NMaXN0ID0gJ25vLWZhdm9yaXRlcy1ub3RpZmljYXRpb24nO1xyXG4gICAgLy8gICBub3RpZmljYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgLy8gICAgICAgICAgIDxwIGNsYXNzPVwibm8tZmF2b3JpdGVzLW1lc3NhZ2VcIj5QbGVhc2UgYnJvd3NlIGNvbXBvc2VycyB0byBhZGQgc29tZSBmYXZvcml0ZXMhPC9wPlxyXG4gICAgLy8gICAgICAgYDtcclxuICAgIC8vICAgVUlTZWxlY3RvcnMuaG9tZVNlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uQ29udGFpbmVyKTtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy9TRUUgaG9tZXBhZ2UuanMgTGluZSA4NlxyXG4gICAgdXNlci5jb25jZXJ0cy5mb3JFYWNoKChjb25jZXJ0LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoYWxsID09PSBmYWxzZSAmJiBpbmRleCA8IDMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWxsPT09ZmFsc2UsIGluZGV4IDwgMycpO1xyXG4gICAgICAgIC8vZnVsbENvbmNlcnRzR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGxldCBjb25jZXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uY2VydENvbnRhaW5lci5jbGFzc0xpc3QgPSAnc2VhcmNoLXJlc3VsdCc7XHJcbiAgICAgICAgY29uY2VydENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29uY2VydC1pZC1udW1cIj4ke2NvbmNlcnQuaWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiY29uY2VydC1uYW1lXCIgaWQ9XCJjb25jZXJ0LW5hbWVcIj4gJHtjb25jZXJ0LnRpdGxlXHJcbiAgICAgICAgICB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAke2NvbmNlcnQucGllY2VzXHJcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gYDxwIGNsYXNzPVwidGlueS1waWVjZS10aXRsZVwiPiA8c3Ryb25nPiAke2l0ZW0uY29tcG9zZXJ9PC9zdHJvbmc+ICR7aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAudHJpbSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbignJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0biByZW1vdmUtY29uY2VydC1idG5cIj5EZWxldGUgQ29uY2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdmVyLWdvbGRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbmNlcnRDb250YWluZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFVJU2VsZWN0b3JzLnlvdXJDb25jZXJ0c0NvbnRhaW5lcik7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMueW91ckNvbmNlcnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmNlcnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGNvbmNlcnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25jZXJ0Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdzZWFyY2gtcmVzdWx0JztcclxuICAgICAgICBjb25jZXJ0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb25jZXJ0LWlkLW51bVwiPiR7Y29uY2VydC5pZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJjb25jZXJ0LW5hbWVcIiBpZD1cImNvbmNlcnQtbmFtZVwiPiAke2NvbmNlcnQudGl0bGVcclxuICAgICAgICAgIH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7Y29uY2VydC5waWVjZXNcclxuICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpbnktcGllY2UtdGl0bGVcIj4gPHN0cm9uZz4gJHtpdGVtLmNvbXBvc2VyfTwvc3Ryb25nPiAke2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYC50cmltKClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuam9pbignJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0biByZW1vdmUtY29uY2VydC1idG5cIj5EZWxldGUgQ29uY2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdmVyLWdvbGQgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgVUlTZWxlY3RvcnMuZnVsbENvbmNlcnRzR3JpZC5hcHBlbmRDaGlsZChjb25jZXJ0Q29udGFpbmVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgVUkucmVtb3ZlQ29uY2VydExpc3RlbmVycyhVSVNlbGVjdG9ycy5mdWxsQ29uY2VydHNHcmlkKTtcclxuICAgIFVJLnJlbW92ZUNvbmNlcnRMaXN0ZW5lcnMoVUlTZWxlY3RvcnMueW91ckNvbmNlcnRzQ29udGFpbmVyKTtcclxuXHJcbiAgICAvL1RISVMgSVMgVEhFIENPUlJFQ1QgQlJBQ0tFVCBGVUNLIEVTTElOVCBBTkQgUFJFVFRJRVIuXHJcbiAgfVxyXG5cclxuICB1cGRhdGVIb3Zlckxpc3RlbmVycygpIHtcclxuICAgIGxldCBzZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1yZXN1bHQnKTtcclxuXHJcbiAgICBbLi4uc2VhcmNoUmVzdWx0c10uZm9yRWFjaCgocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgVUkuc2hvd0dvbGRVbmRlcmxpbmUpO1xyXG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFVJLmhpZGVHb2xkVW5kZXJsaW5lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ29uY2VydExpc3RlbmVycyhjb250YWluZXIpIHtcclxuICAgIGxldCBjb25jZXJ0c0xpc3QgPSBjb250YWluZXIuY2hpbGRyZW47XHJcblxyXG4gICAgWy4uLmNvbmNlcnRzTGlzdF0uZm9yRWFjaCgoY29uY2VydCkgPT4ge1xyXG4gICAgICBpZiAoIWNvbmNlcnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1jb25jZXJ0LWJ0bicpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbmNlcnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWNvbmNlcnQtYnRuJylcclxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmRlbGV0ZUNvbmNlcnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNvbmNlcnQoZSkge1xyXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgIGxldCBzZWxlY3RlZENvbmNlcnRJRCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5jb25jZXJ0LWlkLW51bSdcclxuICAgICk7XHJcbiAgICAvL1NXSVRDSCBUTyBTVE9SQUdFIEZVTkNUSU9OXHJcbiAgICBsZXQgZGVsZXRlQ29uY2VydFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgZGVsZXRlQ29uY2VydFVzZXIuY29uY2VydHMuZm9yRWFjaCgoY29uY2VydCwgaW5kZXgsIG9iamVjdCkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhjb25jZXJ0LmlkKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coTnVtYmVyKHNlbGVjdGVkQ29uY2VydElELnRleHRDb250ZW50KSk7XHJcbiAgICAgIGlmIChjb25jZXJ0LmlkID09PSBOdW1iZXIoc2VsZWN0ZWRDb25jZXJ0SUQudGV4dENvbnRlbnQpKSB7XHJcbiAgICAgICAgb2JqZWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vU1RPUkFHRSBGVU5DVElPTlxyXG4gICAgU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgZGVsZXRlQ29uY2VydFVzZXIpO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShkZWxldGVDb25jZXJ0VXNlcikpO1xyXG4gIH1cclxuXHJcbiAgLy9XaGVyZSB0byBjYWxsIHRoaXM/XHJcbiAgc2hvcnRlblBpZWNlVGl0bGUocGllY2VOYW1lcykge1xyXG4gICAgcGllY2VOYW1lcy5mb3JFYWNoKChwaWVjZSkgPT4ge1xyXG4gICAgICBsZXQgcGllY2VUaXRsZUxlbmd0aCA9IHBpZWNlLnRleHRDb250ZW50LnNsaWNlKDAsIDIwKSArICcuLi4nO1xyXG4gICAgICBwaWVjZS50ZXh0Q29udGVudCA9IHBpZWNlVGl0bGVMZW5ndGg7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dHb2xkVW5kZXJsaW5lKGUpIHtcclxuICAgIGlmICghZS50YXJnZXQucXVlcnlTZWxlY3RvcignLmhvdmVyLWdvbGQnKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuaG92ZXItZ29sZCcpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGVHb2xkVW5kZXJsaW5lKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuaG92ZXItZ29sZCcpKSB7XHJcbiAgICAgIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5ob3Zlci1nb2xkJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBob21lQ2FyZEVudGVyKGNvbnRhaW5lcikge1xyXG4gICAgY29uc3QgZnVsbEZhdm9yaXRlc0dyaWQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmZ1bGwtZmF2b3JpdGVzLWdyaWQnKTtcclxuICAgIGNvbnN0IGZ1bGxDb25jZXJ0c0dyaWQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmZ1bGwtY29uY2VydHMtZ3JpZCcpO1xyXG5cclxuICAgIGZ1bGxGYXZvcml0ZXNHcmlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBmdWxsQ29uY2VydHNHcmlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgWy4uLmNvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudCA9PT0gZnVsbEZhdm9yaXRlc0dyaWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3RbMF0gPT09ICdoZWFkZXItcm93Jykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LW1vcmUtYnRuJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdFswXSA9PT0gJ3NlYXJjaC1yZXN1bHRzJ1xyXG4gICAgICApIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3RbMV0gPT09ICd5b3VyLXJlY2VudC1jb25jZXJ0cycpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3RbMV0gPT09ICdmdWxsLWNvbmNlcnRzLWdyaWQnKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbmNlcnRzRW50ZXIoY29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBmdWxsQ29uY2VydHNHcmlkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuc2VhcmNoLXJlc3VsdHMuZnVsbC1jb25jZXJ0cy1ncmlkJ1xyXG4gICAgKTtcclxuXHJcbiAgICBmdWxsQ29uY2VydHNHcmlkLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcblxyXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItcm93LmNvbmNlcnRzLWhlYWRlci1yb3cnKS5zdHlsZS5kaXNwbGF5ID1cclxuICAgICAgJ2ZsZXgnO1xyXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuaGVhZGVyLXJvdy5jb25jZXJ0cy1oZWFkZXItcm93IC52aWV3LW1vcmUtYnRuJ1xyXG4gICAgKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy9DaGFuZ2UgdGhpc1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gU3RvcmFnZS5nZXRVc2VyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcblxyXG4gICAgVUkuZGlzcGxheUNvbmNlcnRzKGN1cnJlbnRVc2VyLCB0aGlzLmFsbCA9IGZhbHNlKTtcclxuICB9XHJcblxyXG5cclxuICBmYXZvcml0ZXNFbnRlcihjb250YWluZXIpIHtcclxuICAgIGNvbnN0IGZ1bGxGYXZvcml0ZXNHcmlkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLWZhdm9yaXRlcy1ncmlkJyk7XHJcbiAgICBmdWxsRmF2b3JpdGVzR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1yb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1yb3cgLnZpZXctbW9yZS1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgWy4uLmZ1bGxGYXZvcml0ZXNHcmlkLmNoaWxkcmVuXS5mb3JFYWNoKChmYXZvcml0ZSkgPT4ge1xyXG4gICAgICBpZiAoZmF2b3JpdGUucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyLW5hbWUnKS50ZXh0Q29udGVudC5sZW5ndGggPj0gMTgpIHtcclxuICAgICAgICBmYXZvcml0ZS5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXItbmFtZScpLnN0eWxlLmZvbnRTaXplID0gJzEuMnJlbSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICByZXN1bHRzRXhpdChlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdmcm9tIHJlc3VsdHMgZXhpdCcsIGUudGFyZ2V0LmlkKTtcclxuICAgIC8vY29uc29sZS5sb2coZHJvcERvd25Zb3VyQ29uY2VydHMuaWQpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lci5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgWy4uLlVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIuY2hpbGRyZW5dLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBVSVNlbGVjdG9ycy5tYWluQ29udGVudElubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZScpO1xyXG4gICAgICBpZiAoZS50YXJnZXQgPT09IFVJU2VsZWN0b3JzLnJldHVybkhvbWUpIHtcclxuICAgICAgICAvL0NoYW5nZSB0aGlzXHJcbiAgICAgICAgVUkuaG9tZUNhcmRFbnRlcihVSVNlbGVjdG9ycy5tYWluQ29udGVudElubmVyKTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gVUlTZWxlY3RvcnMub3BlblByb2ZpbGUpIHtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBlLnRhcmdldCA9PT0gVUlTZWxlY3RvcnMub3BlbkZhdm9yaXRlcyB8fFxyXG4gICAgICAgICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb25jZXJ0LXZpZXctbW9yZS1idG4nKSAmJlxyXG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aWV3LW1vcmUtYnRuJykpXHJcbiAgICAgICkge1xyXG4gICAgICAgIFVJLmZhdm9yaXRlc0VudGVyKFVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGUudGFyZ2V0ID09PSBVSVNlbGVjdG9ycy5vcGVuQ29uY2VydHMgfHxcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbmNlcnQtdmlldy1tb3JlLWJ0bicpIHx8XHJcbiAgICAgICAgZS50YXJnZXQuaWQgPT09IFVJU2VsZWN0b3JzLmRyb3BEb3duWW91ckNvbmNlcnRzLmlkXHJcbiAgICAgICkge1xyXG4gICAgICAgIFVJLmNvbmNlcnRzRW50ZXIoVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lcik7XHJcbiAgICAgIH1cclxuICAgIH0sIDE1MDApO1xyXG4gIH1cclxuICBmb3JtYXRSZXN1bHRzQ2FyZCgpIHtcclxuICAgIGNvbnN0IHBpZWNlTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGllY2UtbmFtZScpO1xyXG4gICAgcGllY2VOYW1lcy5mb3JFYWNoKChwaWVjZSkgPT4ge1xyXG4gICAgICBsZXQgcGllY2VUaXRsZUxlbmd0aCA9IHBpZWNlLnRleHRDb250ZW50LnNsaWNlKDAsIDIwKSArICcuLi4nO1xyXG4gICAgICBwaWVjZS50ZXh0Q29udGVudCA9IHBpZWNlVGl0bGVMZW5ndGg7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyQ29tcG9zZXJMaW5rcygpIHtcclxuICAgIGlmIChVSVNlbGVjdG9ycy5zZWFyY2hGaWVsZC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgd2hpbGUgKFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MucmVtb3ZlQ2hpbGQoVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5yZW1vdmVDaGlsZChVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9DT01QT1NFUiBQQUdFXHJcbiAgY2xlYXJDb21wb3NlclJlc3VsdHMoKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5waWVjZURldGFpbHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG5cclxuICBzaG93QnV0dG9uRXJyb3IoYnV0dG9uLCBtZXNzYWdlKSB7XHJcbiAgICBsZXQgaW5pdGFsVGV4dCA9IGJ1dHRvbi50ZXh0Q29udGVudDtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYCR7bWVzc2FnZX1gO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gaW5pdGFsVGV4dFxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVUkgPSBuZXcgVWkoKTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRklYIElNQUdFICovXFxyXFxuLyogRklYIFNDUk9MTCBPTiBQSUVDRSBMSVNUICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItdG9wIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5jb21wb3Nlci10b3AsIC5jb21wb3Nlci1ib3R0b20ge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLXdyYXAge1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIG1hcmdpbjogMCA4MHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWJvdHRvbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXg6IDI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY29tcG9zZXItcGllY2UtbGlzdCB7XFxyXFxuICAvKlxcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBcXHJcXG4gIG92ZXJmbG93OmhpZGRlbjtcXHJcXG4gICovXFxyXFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgXFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWJvdHRvbS1yaWdodCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtZGV0YWlscyB7XFxyXFxuIFxcclxcbiAgZmxleDogMTtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXg6IDMgMSBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyBcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCAuY29tbWVudCB7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQgcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHA6Zmlyc3QtY2hpbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHA6bGFzdC1jaGlsZCB7XFxyXFxuICBmb250LXNpemU6IC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uZGlzYWJsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgMjA3LCAyMDcsIDAuNSk7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uZXJyb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuLXVzZXIge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgZm9udC1zaXplOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4ucGllY2UtbGlzdC13cmFwIHtcXHJcXG4gICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxufVxcclxcbiovXFxyXFxuLnVzZXItaW50ZXJhY3Rpb24tYXJlYSB7XFxyXFxuICBcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtbGlzdCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4OiAzIDEgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBpZWNlLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtIC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1jb21tZW50IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi51c2VyLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtY29tbWVudCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpZWNlLWRldGFpbHMge1xcclxcbiAgICBmbGV4OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWJvdHRvbS1yaWdodCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIC51c2VyLWJ1dHRvbnMge1xcclxcbiAgICBmbGV4OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLXRvcCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gLnVzZXItaW50ZXJhY3Rpb24tYXJlYSB0ZXh0YXJlYSB7XFxyXFxuICAgaGVpZ2h0OiA1MCU7XFxyXFxuIH1cXHJcXG5cXHJcXG4gIC5jb21wb3Nlci1oZXJvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbXBvc2VyLWJvdHRvbSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLXBpZWNlLWxpc3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlci1idXR0b25zIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21wb3Nlci1pbmZvcm1hdGlvbnMgPiAqIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVzZXItYnV0dG9ucyBidXR0b24ge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwaWVjZS10aXRsZS1yZXN1bHQge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BpZWNlLWR1cmF0aW9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BpZWNlLWluc3RydW1lbnRhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItdG9wIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWhlcm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tcG9zZXItYm90dG9tIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG5cXHJcXG4gIC5jb21wb3Nlci1waWVjZS1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hcHAvc3RhdGljL2Nzcy9jb21wb3Nlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkLDZCQUE2Qjs7QUFFN0I7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsT0FBTztFQUNQLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjs7QUFFN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7O0VBRWpCLDRCQUE0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bUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBGSVggSU1BR0UgKi9cXHJcXG4vKiBGSVggU0NST0xMIE9OIFBJRUNFIExJU1QgKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jb21wb3Nlci10b3Age1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLXRvcCwgLmNvbXBvc2VyLWJvdHRvbSB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItd3JhcCB7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIDgwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItYm90dG9tIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxleDogMjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5jb21wb3Nlci1waWVjZS1saXN0IHtcXHJcXG4gIC8qXFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIFxcclxcbiAgb3ZlcmZsb3c6aGlkZGVuO1xcclxcbiAgKi9cXHJcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItYm90dG9tLXJpZ2h0IHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1kZXRhaWxzIHtcXHJcXG4gXFxyXFxuICBmbGV4OiAxO1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxleDogMyAxIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IFxcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IC5jb21tZW50IHtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCBwIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQgcDpmaXJzdC1jaGlsZCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQgcDpsYXN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtc2l6ZTogLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5kaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYwLCAyMDcsIDIwNywgMC41KTtcXHJcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5lcnJvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4tdXNlciB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBmb250LXNpemU6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbi5waWVjZS1saXN0LXdyYXAge1xcclxcbiAgICBoZWlnaHQ6IDc1JTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBcXHJcXG59XFxyXFxuKi9cXHJcXG4udXNlci1pbnRlcmFjdGlvbi1hcmVhIHtcXHJcXG4gIFxcclxcbiAgZmxleDogMTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1saXN0IHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDMgMSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtdGl0bGUge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gLjVyZW07XFxyXFxufVxcclxcblxcclxcbiN1c2VyLWNvbW1lbnQge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtYXJnaW46IDIwcHggMjBweCAwIDIwcHg7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1jb21tZW50IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGllY2UtZGV0YWlscyB7XFxyXFxuICAgIGZsZXg6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItYm90dG9tLXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgLnVzZXItYnV0dG9ucyB7XFxyXFxuICAgIGZsZXg6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItdG9wIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgfVxcclxcblxcclxcbiAudXNlci1pbnRlcmFjdGlvbi1hcmVhIHRleHRhcmVhIHtcXHJcXG4gICBoZWlnaHQ6IDUwJTtcXHJcXG4gfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWhlcm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tcG9zZXItYm90dG9tIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItcGllY2UtbGlzdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51c2VyLWJ1dHRvbnMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWluZm9ybWF0aW9ucyA+ICoge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlci1idXR0b25zIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BpZWNlLXRpdGxlLXJlc3VsdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcGllY2UtZHVyYXRpb24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcGllY2UtaW5zdHJ1bWVudGF0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21wb3Nlci10b3Age1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItaGVybyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb21wb3Nlci1ib3R0b20ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtaW4taGVpZ2h0OiB1bnNldDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcblxcclxcbiAgLmNvbXBvc2VyLXBpZWNlLWxpc3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2dlZC1pbiBpbWcge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcmlnaHQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHRvcDogMTAlO1xcclxcbiAgcmlnaHQ6IDUlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUgbGkge1xcclxcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgLyptYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIFxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgXFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGkge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjZDIxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhLWlubmVyIHtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgbWF4LWhlaWdodDogOTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50LWFyZWEtaW5uZXIucmVtb3ZlIHtcXHJcXG4gIGFuaW1hdGlvbjogMXMgcmVtb3ZlLW1haW47XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyByZW1vdmUtbWFpbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgaSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzLCAueW91ci1yZWNlbnQtY29uY2VydHMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1nYXA6IDIwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzLnVzZXItcHJvZmlsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQgLmNvbXBvc2VyLW5hbWUge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQgLmNvbmNlcnQtbmFtZSB7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQgLnRpbnktcGllY2UtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LmxlYXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzLmZ1bGwtZmF2b3JpdGVzLWdyaWQsIC5zZWFyY2gtcmVzdWx0cy5mdWxsLWNvbmNlcnRzLWdyaWQge1xcclxcbiAgXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBhbmltYXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5mdWxsLWZhdm9yaXRlcy1ncmlkLmFuaW1hdGUge1xcclxcbiAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5ob3Zlci1nb2xkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogLjVyZW07XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyLWdvbGQuc2hvdyB7XFxyXFxuICBhbmltYXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5jb21wb3Nlci1pbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICByaWdodDogMjAlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1wbGF5ZXItY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMCU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWltYWdlIHtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4udmlzaXQtcGFnZSB7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb25jZXJ0LWlkLW51bSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC11c2VybmFtZSAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLnJlbW92ZS1jb25jZXJ0LWJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQzMDJiO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi55b3VyLXJlY2VudC1jb25jZXJ0cy5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBvcGFjaXR5e1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jb250YWluZXIge1xcclxcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbmNlcnQtbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW46IC41cmVtOztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRlbnQtYXJlYS1pbm5lciB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaG9tZS1tb2JpbGUtaWNvbnMge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGVmdC1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcmltYXJ5LWJ0bi5yZW1vdmUtY29uY2VydC1idG4ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2FwcC9zdGF0aWMvY3NzL2hvbWVwYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87RUFDUCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCO0dBQ0M7QUFDSDs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCOztFQUV0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYzs7RUFFZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7OztBQUlBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osT0FBTzs7QUFFVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1COzs7QUFHckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVOztFQUVaO0FBQ0Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCwyREFBMkQ7QUFDN0Q7Ozs7QUFJQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UsMkJBQTJCO0FBQzdCOzs7O0FBSUE7O0VBRUUsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7R0FDRyxVQUFVO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOzs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7O0FBRTNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7OztBQUlBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTs7O0VBR0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOzs7QUFHQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5sb2dnZWQtaW4gaW1nIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICB0b3A6IDEwJTtcXHJcXG4gIHJpZ2h0OiA1JTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IGxpIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIC8qbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICovXFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIFxcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2QyMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYS1pbm5lciB7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhLWlubmVyLnJlbW92ZSB7XFxyXFxuICBhbmltYXRpb246IDFzIHJlbW92ZS1tYWluO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmVtb3ZlLW1haW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cywgLnlvdXItcmVjZW50LWNvbmNlcnRzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cy51c2VyLXByb2ZpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC5jb21wb3Nlci1uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC5jb25jZXJ0LW5hbWUge1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC50aW55LXBpZWNlLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC5sZWF2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cy5mdWxsLWZhdm9yaXRlcy1ncmlkLCAuc2VhcmNoLXJlc3VsdHMuZnVsbC1jb25jZXJ0cy1ncmlkIHtcXHJcXG4gIFxcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbC1mYXZvcml0ZXMtZ3JpZC5hbmltYXRlIHtcXHJcXG4gICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXItZ29sZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IC41cmVtO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5ob3Zlci1nb2xkLnNob3cge1xcclxcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcmlnaHQ6IDIwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8tcGxheWVyLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLnZpc2l0LXBhZ2Uge1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29uY2VydC1pZC1udW0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdXNlcm5hbWUgIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5yZW1vdmUtY29uY2VydC1idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0MzAyYjtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ueW91ci1yZWNlbnQtY29uY2VydHMuaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eXtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LWhlaWdodDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb25jZXJ0LW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAuNXJlbTs7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jb250ZW50LWFyZWEtaW5uZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtbW9iaWxlLWljb25zIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlZnQtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJpbWFyeS1idG4ucmVtb3ZlLWNvbmNlcnQtYnRuIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kOiAjNDI1N2IyO1xcclxcbiAgICAtLWhlcm8tYmFja2dyb3VuZDogIzNiNGM5YjtcXHJcXG4gICAgLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kOiAjM2NjZmNmO1xcclxcbiAgICAtLW1haW4tYmFja2dyb3VuZDogI2Y2ZjdmYjtcXHJcXG4gICAgLS1nb2xkOiAjZmFjZDIxO1xcclxcbiAgICAtLWRlZmF1bHQtc2hhZG93OiAwcHggMTNweCAyNnB4ICMwMDAwMDAyRjtcXHJcXG4gICAgLS1zdWNjZXNzLWNvbG9yOiAjMmVjYzcxO1xcclxcbiAgICAtLWVycm9yLWNvbG9yOiAjZTc0YzNjO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctbmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctbmF2IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtdGl0bGUge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYSwgLnNpdGUtdGl0bGUgYSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYTpob3ZlciwgLm5hdi1yaWdodCBsaSBhOmhvdmVyLCAuc2l0ZS10aXRsZSBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMTg5LCAxOTUsIDE5OSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIGEgPiAqIHtcXHJcXG4gICAgbWFyZ2luOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IGxpIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lLW1vYmlsZS1pY29ucyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLW92ZXJsYXkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0b3A6IDglO1xcclxcbiAgICAvKmxlZnQ6IDI2JTsqL1xcclxcbiAgICByaWdodDogMjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd24gLnByaW1hcnktYnRuIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1maWVsZCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItZmllbGQ6aW52YWxpZCB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLmZhLXRpbWVzLmNsb3NlLXNlYXJjaCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVyby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVyby1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyLWxlZnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLmdldC1zdGFydGVkLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYWNoZXItcGFyZW50LWxpbmtzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYWNoZXItcGFyZW50LWxpbmtzIGEge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwge1xcclxcbiAgICBoZWlnaHQ6IDc1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsIGltZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgLyogQ1NTIGNoYW5nZSBpbiBKUyAqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6IGdyZXk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLyogQ2hhbmdlIGZsZXgvbm9uZSAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIgPiBpIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoaXJkLXBhcnR5LWJ1dHRvbnMge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4gaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4gcCB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSB7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgICBwYWRkaW5nOiAuNzVyZW0gMnJlbSAuNzVyZW0gLjNyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICBib3JkZXI6IDJweCBncmV5IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNjbG9zZS1zaWduLWluLCAjY2xvc2Utc2lnbi11cCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpcnRoZGF5LXNlbGVjdG9yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCBsYWJlbCB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiAjYzJjNmQ0O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuc3VjY2VzcyBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgaW5wdXQgIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLmVycm9yIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59IFxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmVycm9yLXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgLmVycm9yLXRleHQge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBmb250LXNpemU6IC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0ZXItYnRuLCAubG9naW4tYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0ZXItYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzZkNDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnRuIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDE1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaDEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAuNTByZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWFyZWEge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1idXR0b25zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbnMgLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogNjIlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5zdWNjZXNzIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLmVycm9yIGlucHV0ICB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuZXJyb3IgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmVycm9yLXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbiAgICAvKnZpc2liaWxpdHk6IGhpZGRlbjsqL1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uYmlnLWxvZ2luLWJ0biB7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYnJvd3NlLW1vZGFsIHtcXHJcXG4gICAgLyogQ0hBTkdFIFdJVEggSkFWQVNDSVBUICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1tb2RhbC1hcmVhIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICBcXHJcXG4gICAgLyp0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsqL1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnJvd3NlLW1vZGFsLWFyZWEuc2hvdyB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJyb3dzZS1oZWFkZXIgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1oZWFkZXIge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLWNvbXBvc2VycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyIGgxICB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlci1jb21wb3NlcnMge1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFuZG9tLWNvbXBvc2VyLWxpbmtzIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlcm8tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxhbmRpbmctbmF2IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXYtbGVmdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICB3aWR0aDogMzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb2JpbGUtc2VhcmNoLWljb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogOTAlO1xcclxcbiAgICAgICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgICAgIGxlZnQ6IDIwJTtcXHJcXG4gICAgICAgIHRvcDogNy41JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICAgIFxcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIC8qXFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgKi9cXHJcXG4gICAgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdi1yaWdodCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICAgICAgdG9wOiA5JTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbGVmdDogMDsgICAgXFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aGlyZC1wYXJ0eS1idXR0b25zIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGhpcmQtcGFydHktYnV0dG9ucyAuc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgICAgICBtYXJnaW46IC41cmVtIDA7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5zZWxlY3QtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbi11cC1mb3JtIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLjNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tZmllbGQge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByaW1hcnktYnRuLnJlZ2lzdGVyLWJ0biwgLnByaW1hcnktYnRuLmxvZ2luLWJ0biB7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLWJhci1vdmVybGF5IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtcmVzdWx0LWRvd24gcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXBwL3N0YXRpYy9jc3MvbGFuZGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsc0JBQXNCOztBQUUxQjs7O0FBR0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0FBRWxD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UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsVUFBVTtJQUNkOztJQUVBO1FBQ0ksU0FBUztRQUNULFNBQVM7SUFDYjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxRQUFRO0lBQ1o7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0lBRUk7UUFDSTs7U0FFQzs7SUFFTDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixPQUFPO1FBQ1AsZUFBZTtRQUNmLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7SUFDQTtRQUNJLE9BQU87UUFDUCxXQUFXO1FBQ1gsT0FBTzs7SUFFWDs7O0lBR0E7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxRQUFRO0lBQ1o7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZDogIzQyNTdiMjtcXHJcXG4gICAgLS1oZXJvLWJhY2tncm91bmQ6ICMzYjRjOWI7XFxyXFxuICAgIC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZDogIzNjY2ZjZjtcXHJcXG4gICAgLS1tYWluLWJhY2tncm91bmQ6ICNmNmY3ZmI7XFxyXFxuICAgIC0tZ29sZDogI2ZhY2QyMTtcXHJcXG4gICAgLS1kZWZhdWx0LXNoYWRvdzogMHB4IDEzcHggMjZweCAjMDAwMDAwMkY7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzJlY2M3MTtcXHJcXG4gICAgLS1lcnJvci1jb2xvcjogI2U3NGMzYztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sYW5kaW5nLW5hdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5sYW5kaW5nLW5hdiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaXRlLXRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIGEsIC5zaXRlLXRpdGxlIGEge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIGE6aG92ZXIsIC5uYXYtcmlnaHQgbGkgYTpob3ZlciwgLnNpdGUtdGl0bGUgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDE4OSwgMTk1LCAxOTksIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSBhID4gKiB7XFxyXFxuICAgIG1hcmdpbjogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1yaWdodCBsaSB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1tb2JpbGUtaWNvbnMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1vdmVybGF5IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdG9wOiA4JTtcXHJcXG4gICAgLypsZWZ0OiAyNiU7Ki9cXHJcXG4gICAgcmlnaHQ6IDIwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93bjpob3ZlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd24gcDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duIC5wcmltYXJ5LWJ0biB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItZmllbGQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLWZpZWxkOmludmFsaWQge1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS5mYS10aW1lcy5jbG9zZS1zZWFyY2gge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1pY29uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhlcm8tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlcm8tYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lci1sZWZ0IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGV4dC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5nZXQtc3RhcnRlZC1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZWFjaGVyLXBhcmVudC1saW5rcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50ZWFjaGVyLXBhcmVudC1saW5rcyBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jYXJvdXNlbC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsIHtcXHJcXG4gICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jYXJvdXNlbCBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBmaWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtZGVzY3JpcHRpb24ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICAgIC8qIENTUyBjaGFuZ2UgaW4gSlMgKi9cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiBncmV5O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC8qIENoYW5nZSBmbGV4L25vbmUgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtY29udGFpbmVyID4gaSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50aGlyZC1wYXJ0eS1idXR0b25zIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnktYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnktYnRuIGltZyB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnktYnRuIHAge1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0ge1xcclxcblxcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gICAgcGFkZGluZzogLjc1cmVtIDJyZW0gLjc1cmVtIC4zcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgYm9yZGVyOiAycHggZ3JleSBzb2xpZDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jY2xvc2Utc2lnbi1pbiwgI2Nsb3NlLXNpZ24tdXAge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iaXJ0aGRheS1zZWxlY3RvciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZmllbGQgbGFiZWwge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgIFxcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjb2xvcjogI2MyYzZkNDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZCBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5zdWNjZXNzIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLmVycm9yIGlucHV0ICB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5lcnJvciBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufSBcXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5lcnJvci10ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLmVycm9yIC5lcnJvci10ZXh0IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZ2lzdGVyLWJ0biwgLmxvZ2luLWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZ2lzdGVyLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmM2ZDQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWJ0biBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxNSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGgxIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogLjUwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1hcmVhIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tYnV0dG9ucyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1idXR0b25zIC5zZWNvbmRhcnktYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIHAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDYyJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuc3VjY2VzcyBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5zdWNjZXNzIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5lcnJvciBpbnB1dCAge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLmVycm9yIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59IFxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5lcnJvci10ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG4gICAgLyp2aXNpYmlsaXR5OiBoaWRkZW47Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLmJpZy1sb2dpbi1idG4ge1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Jyb3dzZS1tb2RhbCB7XFxyXFxuICAgIC8qIENIQU5HRSBXSVRIIEpBVkFTQ0lQVCAqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5icm93c2UtbW9kYWwtYXJlYSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgXFxyXFxuICAgIC8qdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7Ki9cXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJyb3dzZS1tb2RhbC1hcmVhLnNob3cge1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5icm93c2UtaGVhZGVyIGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5icm93c2UtaGVhZGVyIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1jb21wb3NlcnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlciBoMSAge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXItY29tcG9zZXJzIHtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbS1jb21wb3Nlci1saW5rcyBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZXJvLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sYW5kaW5nLW5hdiB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2LWxlZnQge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmlnaHQtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICAgICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9iaWxlLXNlYXJjaC1pY29uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgICAgICBsZWZ0OiAyMCU7XFxyXFxuICAgICAgICB0b3A6IDcuNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJyb3dzZS1tb2RhbC1hcmVhIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xcclxcbiAgICBcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICAvKlxcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICovXFxyXFxuICAgICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xcclxcbiAgICAgICAgZmxleDogMTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmlnaHQtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYtcmlnaHQge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgICAgIHRvcDogOSU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDA7ICAgIFxcclxcbiAgICBcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGhpcmQtcGFydHktYnV0dG9ucyB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRoaXJkLXBhcnR5LWJ1dHRvbnMgLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuc2VsZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtZm9ybSBsYWJlbCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC4zcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtLWZpZWxkIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcmltYXJ5LWJ0bi5yZWdpc3Rlci1idG4sIC5wcmltYXJ5LWJ0bi5sb2dpbi1idG4ge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlYXJjaC1iYXItb3ZlcmxheSB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLXJlc3VsdC1kb3duIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJyb3dzZS1tb2RhbC1hcmVhIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=