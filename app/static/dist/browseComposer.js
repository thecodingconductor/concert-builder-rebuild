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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/static/js-modules/main/browseComposer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/static/css/browse_composers.css":
/*!*********************************************!*\
  !*** ./app/static/css/browse_composers.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./browse_composers.css */ "./node_modules/css-loader/dist/cjs.js!./app/static/css/browse_composers.css");

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

/***/ "./app/static/js-modules/main/browseComposer.js":
/*!******************************************************!*\
  !*** ./app/static/js-modules/main/browseComposer.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/app */ "./app/static/js-modules/modules/app.js");
/* harmony import */ var _css_landing_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/landing.css */ "./app/static/css/landing.css");
/* harmony import */ var _css_landing_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_landing_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_homepage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/homepage.css */ "./app/static/css/homepage.css");
/* harmony import */ var _css_homepage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_homepage_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_browse_composers_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/browse_composers.css */ "./app/static/css/browse_composers.css");
/* harmony import */ var _css_browse_composers_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_browse_composers_css__WEBPACK_IMPORTED_MODULE_3__);





window.addEventListener('DOMContentLoaded', _modules_app__WEBPACK_IMPORTED_MODULE_0__["App"].initBase);

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
    this.concertBuilderTextArea = document.getElementById('concert-builder-text-area');
    this.concertLengthIndicator = document.getElementById('concert-length-indicator');


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
    location.href = '/concert_builder';
  }

  saveConcert() {
    let currentUser = _storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].getUser();
    console.log("FROM SAVECONCERT");
    console.log(currentUser);
    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertTitleHeader.textContent === '') {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].saveConcertBtn.classList.add('disabled');
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].saveConcertBtn.textContent = 'Please add title.';
      window.setTimeout(() => {
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].saveConcertBtn.classList.remove('disabled');
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].saveConcertBtn.textContent = 'Save Concert';
      }, 1000);
      return false;
    } else if (_ui__WEBPACK_IMPORTED_MODULE_1__["UI"].concertPieceArr.length === 0) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].saveConcertBtn.classList.add('disabled');
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].saveConcertBtn.textContent = 'Please add pieces...';
      window.setTimeout(() => {
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].saveConcertBtn.classList.remove('disabled');
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].saveConcertBtn.textContent = 'Save Concert';
      }, 1000);
      return false;
    }

    let currentConcert = new _sessionObj__WEBPACK_IMPORTED_MODULE_3__["Concert"](_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertTitleHeader.textContent);

    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].concertPieceArr.forEach((piece) => {
      if (piece.classList.contains('intermission')) {
        return;
      } else {
        let thisPiece = new _sessionObj__WEBPACK_IMPORTED_MODULE_3__["Piece"](
          piece.querySelector('.composer-info > p:first-child').textContent,
          piece.querySelector('.piece-info > p:first-child').textContent
        );

        currentConcert.pieces.push(thisPiece);
      }
    });


    currentUser.concerts.push(currentConcert);


    _storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].setUser(currentUser);

    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].saveConcertBtn.textContent = 'Concert Saved!!';
    window.setTimeout(() => {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].saveConcertBtn.textContent = 'Save Concert';
    }, 1000);
  }

  //For Concert Builder
  addPieceToConcertArr(e) {

    const addToConcertContainer = e.target.parentElement.parentElement;
    const pieceComposer = addToConcertContainer.querySelector(
      '.piece-info-left p:nth-of-type(1)'
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
      '.piece-info-left p:nth-of-type(2)'
    );
    const pieceDuration = addToConcertContainer.querySelector(
      '.piece-info-left p:nth-of-type(3)'
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

    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].concertPieceArr.push(pieceEl);
    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].concertPieceArr.forEach((piece, index) => {
      piece.setAttribute('data-index', index);
    });

    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].addPieceToDOM(pieceEl);

    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].deletePiecesListeners();
    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].createIntermissionListeners();
    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].dragListeners();
    _ui__WEBPACK_IMPORTED_MODULE_1__["UI"].updateConcertDuration(_ui__WEBPACK_IMPORTED_MODULE_1__["UI"].getConcertDuration(_ui__WEBPACK_IMPORTED_MODULE_1__["UI"].concertPieceArr));
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
    let data = {
      searchTerm
    }

    if (searchTerm === '') {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].initialFavoritesResults.forEach((favorite) => {
        _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].favoritesSearchResults.appendChild(favorite);
      });
    } else {
      _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].post('/search_favorites', data)
        .then(data => {

          let parsed = JSON.parse(data.favorites);
          parsed.forEach(favorite => {
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
            _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].pieceDetailsContainer.appendChild(commentList);
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

  displayComments(entry) {
    _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].get(`/piece_detail/${entry.piece}`)
      .then(data => {
        if (data.piece.comments.length > 0) {
          const commentList = document.createElement('ul');
          commentList.classList = 'comment-list';
          _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].pieceDetailsContainer.appendChild(commentList);
          data.piece.comments.forEach(comment => {
            const commentLI = document.createElement('li');
            commentLI.classList = 'comment';
            commentList.innerHTML = `
            <p>${comment.author} says: </p>
                <p>${comment.body}</p>
                <p>${comment.timestamp}</p>`;
            commentList.appendChild(commentLI);
          })
        }
      })
      .catch(err => `There was an err: ${err}`)
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
          e.target.textContent = 'Thank you!';
          window.setTimeout(() => {
            e.target.textContent = 'Submit Comment';
          }, 3000);
          commentBody.value = ``;
          Requests.displayComments(entry);
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
      _http__WEBPACK_IMPORTED_MODULE_2__["HTTP"].post('/add_piece_to_favorites', pieceSend)
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app/static/js-modules/modules/app.js");


class User {
  constructor(username, concerts = []) {
    this.username = username;
    this.concerts = concerts;
  }
}

class Concert {
  constructor(title, pieces = []) {
    this.id = _app__WEBPACK_IMPORTED_MODULE_0__["App"].generateRandomNumber(0, 50000);
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
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests */ "./app/static/js-modules/modules/requests.js");
/* harmony import */ var _sessionObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionObj */ "./app/static/js-modules/modules/sessionObj.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./app/static/js-modules/modules/ui.js");
/* harmony import */ var _UISelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UISelectors */ "./app/static/js-modules/modules/UISelectors.js");





class STORAGE {
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  createUser() {
    let user = document.getElementById('current-username').textContent;

    if (Storage.getUser() === null || Storage.getUser() === undefined) {

      let newUser = new _sessionObj__WEBPACK_IMPORTED_MODULE_1__["User"](user);
      Storage.setUser(newUser);
      _ui__WEBPACK_IMPORTED_MODULE_2__["UI"].displayConcerts(newUser);
    } else if (user === Storage.getUser().username) {
      let currentUser = Storage.getUser();
      _ui__WEBPACK_IMPORTED_MODULE_2__["UI"].displayConcerts(currentUser);
      return false;
    } else if (user !== Storage.getUser().username) {
      let newUser = new _sessionObj__WEBPACK_IMPORTED_MODULE_1__["User"](user);
      Storage.setUser(newUser);
    }
  }

  getConcert() {
    let res = JSON.parse(localStorage.getItem('newConcert'));
    if (res !== null) {
      _requests__WEBPACK_IMPORTED_MODULE_0__["Requests"].getFullPieceInfo(res.pieces[0].title.split('...')[0]);

    }

  }

  setNewConcert(concert) {
    localStorage.setItem('newConcert', JSON.stringify(concert));
  }

  removeItem(string) {
    localStorage.removeItem(string);
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
    this.dragStartIndex = 0;
    this.all = true;
    this.concertPieceArr = [];
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
    //console.log(newString.charAt(0).toUpperCase() + newString.slice(1));
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
    UI.concertPieceArr.push(pieceEl);
    UI.concertPieceArr.forEach((piece, index) => {
      piece.setAttribute('data-index', index);
    });

    UI.addPieceToDOM(pieceEl);

    UI.deletePiecesListeners();
    UI.createIntermissionListeners();
    UI.dragListeners();
    UI.updateConcertDuration(UI.getConcertDuration(UI.concertPieceArr));

    _storage__WEBPACK_IMPORTED_MODULE_2__["Storage"].removeItem('newConcert');

  }

  getConcertDuration(pieceArr) {
    if (pieceArr.length === 0) {
      let empty = 0;
      UI.concertLengthJudgement(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea, empty);
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

      UI.concertLengthJudgement(_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea, concertDuration);

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
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertMinutes.style.fontWeight = 'bold';
  }

  concertLengthJudgement(container, duration) {
    if (duration == 0) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertConclusion.textContent = `Please add some pieces.`;
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertLengthIndicator.style.display = 'none';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderTextArea.style.backgroundColor = 'lightblue';
    } else if (duration < 90 && duration > 0) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertConclusion.textContent = `Concert is potentially too short.`;
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderTextArea.style.backgroundColor = '#cdb21f';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertLengthIndicator.classList = 'fa fa-exclamation-triangle concert-length-indicator';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertLengthIndicator.style.display = 'block';
    } else if (duration >= 90 && duration <= 120) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertConclusion.textContent = `Perfect concert length!`;
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderTextArea.style.backgroundColor = '#2e773f';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertLengthIndicator.classList = 'fa fa-check concert-length-indicator';
    } else {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertConclusion.textContent = `Concert is potentially too long...`;
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderTextArea.style.backgroundColor = '#a7303e';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertLengthIndicator.classList = 'fa fa-exclamation-triangle concert-length-indicator';
    }

    if (container.querySelector('.concert.intermission')) {
      console.log('no intermission yet');
    }
  }

  deletePiecesListeners() {
    let deletePieces = _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.querySelectorAll('.delete-piece');
    deletePieces.forEach((piece) => {
      piece.addEventListener('click', UI.removePiece);
    });
  }

  createIntermissionListeners() {

    let intermissionList = _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.querySelectorAll(
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
    UI.concertPieceArr.splice(
      UI.concertPieceArr.indexOf(parentConcert) + 1,
      0,
      intermissionEl
    );

    UI.concertPieceArr.forEach((piece, index) => {
      piece.setAttribute('data-index', index);
    });
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.innerHTML = '';
    UI.concertPieceArr.forEach((piece) => {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.appendChild(piece);
    });
    //concertBuilderArea.appendChild(intermissionEl);
    //console.log(concertPieceArr);

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
    console.log(`from dragDROP ${dragEndIndex}, ${UI.dragStartIndex}`)
    UI.swapItems(UI.dragStartIndex, dragEndIndex);
    e.target.classList.remove('over');
  }

  dragListeners() {
    const pieceDragBars = document.querySelectorAll('.piece-drag-bars');
    const dragBoxes = document.querySelectorAll('.concert');

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


    console.log(UI.concertPieceArr);
    console.log(itemOne);
    console.log(itemTwo);
    UI.concertPieceArr[fromIndex] = itemTwo;
    UI.concertPieceArr[toIndex] = itemOne;

    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderArea.innerHTML = ``;

    UI.concertPieceArr.forEach((item) => {
      console.log(item);
      console.log(typeof item)
      UI.addPieceToDOM(item);
    });
  }

  //HOMEPAGE
  displayConcerts(user, all = false) {
    if (_UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].fullConcertsGrid.children.length > 0) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].fullConcertsGrid.innerHTML = ``;
    }
    // console.log(user);
    // console.log(user.concerts);
    // console.log(user.concerts.length);


    if (user.concerts.length === 0 || user.concerts.length === undefined) {
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
    let deleteConcertUser = _storage__WEBPACK_IMPORTED_MODULE_2__["Storage"].getUser();
    deleteConcertUser.concerts.forEach((concert, index, object) => {

      if (concert.id === Number(selectedConcertID.textContent)) {
        object.splice(index, 1);
      } else {
        return;
      }
    });
    //STORAGE FUNCTION
    _storage__WEBPACK_IMPORTED_MODULE_2__["Storage"].setItem('user', deleteConcertUser);

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

  scrollPieceIntoView() {
    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].pieceDetailsContainer.scrollIntoView();
  }


}


const UI = new Ui();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/static/css/browse_composers.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/static/css/browse_composers.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".browse-composers-container {\r\n    width: 80%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n\r\n.composer-letter-container {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    list-style-type: none;\r\n    padding: 0;\r\n  }\r\n  \r\n\r\n  .composer-letter-container li {\r\n    color: #000;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n    padding: 0 1rem;\r\n    border-right: 2px solid grey;\r\n  }\r\n  \r\n  .composer-letter-container li:hover {\r\n    color: rgba(0, 0, 0, 0.6);\r\n  }\r\n  \r\n  .composer-browse-result-list {\r\n    width: 100%;\r\n    height: 70%;\r\n\r\n  }\r\n\r\n  .composer-result-list > p {\r\n      color: #000;\r\n  }\r\n  \r\n  .column {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .column p{\r\n      color: #000;\r\n      margin: 0;\r\n      font-size: .75rem;\r\n      cursor: pointer;\r\n  }\r\n\r\n  .column p:hover {\r\n      color: rgba(0,0,0,0.6);\r\n  }\r\n\r\n\r\n@media(max-width: 769px) {\r\n\r\n  .browse-composers-container {\r\n    width: 90%;\r\n  }\r\n  \r\n  .composer-letter-container {\r\n    flex-wrap: wrap;\r\n    height: 40%;\r\n  }\r\n}\r\n\r\n@media(max-width: 376px) {\r\n  .composer-letter-container {\r\n    flex-wrap: wrap;\r\n    height: 30%;\r\n  }\r\n\r\n  .column {\r\n    flex-wrap: nowrap;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://app/static/css/browse_composers.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;;;AAGA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,qBAAqB;IACrB,UAAU;EACZ;;;EAGA;IACE,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,4BAA4B;EAC9B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,WAAW;IACX,WAAW;;EAEb;;EAEA;MACI,WAAW;EACf;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,eAAe;EACjB;;EAEA;MACI,WAAW;MACX,SAAS;MACT,iBAAiB;MACjB,eAAe;EACnB;;EAEA;MACI,sBAAsB;EAC1B;;;AAGF;;EAEE;IACE,UAAU;EACZ;;EAEA;IACE,eAAe;IACf,WAAW;EACb;AACF;;AAEA;EACE;IACE,eAAe;IACf,WAAW;EACb;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":[".browse-composers-container {\r\n    width: 80%;\r\n    height: 100vh;\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n\r\n.composer-letter-container {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    list-style-type: none;\r\n    padding: 0;\r\n  }\r\n  \r\n\r\n  .composer-letter-container li {\r\n    color: #000;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n    padding: 0 1rem;\r\n    border-right: 2px solid grey;\r\n  }\r\n  \r\n  .composer-letter-container li:hover {\r\n    color: rgba(0, 0, 0, 0.6);\r\n  }\r\n  \r\n  .composer-browse-result-list {\r\n    width: 100%;\r\n    height: 70%;\r\n\r\n  }\r\n\r\n  .composer-result-list > p {\r\n      color: #000;\r\n  }\r\n  \r\n  .column {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .column p{\r\n      color: #000;\r\n      margin: 0;\r\n      font-size: .75rem;\r\n      cursor: pointer;\r\n  }\r\n\r\n  .column p:hover {\r\n      color: rgba(0,0,0,0.6);\r\n  }\r\n\r\n\r\n@media(max-width: 769px) {\r\n\r\n  .browse-composers-container {\r\n    width: 90%;\r\n  }\r\n  \r\n  .composer-letter-container {\r\n    flex-wrap: wrap;\r\n    height: 40%;\r\n  }\r\n}\r\n\r\n@media(max-width: 376px) {\r\n  .composer-letter-container {\r\n    flex-wrap: wrap;\r\n    height: 30%;\r\n  }\r\n\r\n  .column {\r\n    flex-wrap: nowrap;\r\n  }\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\r\n    --header-background: #4257b2;\r\n    --hero-background: #3b4c9b;\r\n    --primary-button-background: #3ccfcf;\r\n    --main-background: #f6f7fb;\r\n    --gold: #facd21;\r\n    --default-shadow: 0px 13px 26px #0000002F;\r\n    --success-color: #2ecc71;\r\n    --error-color: #e74c3c;\r\n    \r\n}\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Lato', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #fff;\r\n    height: 100vh;\r\n    height: calc(var(--vh, 1vh) * 100);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: var(--main-background);\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    font-family: 'Lato', sans-serif;\r\n    cursor: pointer;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.landing-nav {\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.landing-nav p {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.site-title {\r\n    width: 20%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.right-nav-container {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n}\r\n\r\n.nav-left {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    justify-content: space-evenly;\r\n    padding: 0;\r\n}\r\n\r\n.nav-left li {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\n.nav-left li a, .site-title a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: center;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-left li a:hover, .nav-right li a:hover, .site-title a:hover {\r\n    color: rgba(189, 195, 199, 0.8);\r\n}\r\n\r\n.nav-left li a > * {\r\n    margin: .2rem;\r\n}\r\n\r\n.nav-right {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    margin-right: 3rem;\r\n}\r\n\r\n.nav-right li {\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.home-mobile-icons {\r\n    display: none;\r\n}\r\n\r\n.search-bar-overlay {\r\n    display: none;\r\n    align-items: center;\r\n    width: 60%;\r\n    \r\n}\r\n\r\n.search-bar-results {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    top: 8%;\r\n    /*left: 26%;*/\r\n    right: 20%;\r\n    background-color: var(--header-background);\r\n    width: 60%;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    z-index: 1000;\r\n\r\n}\r\n\r\n.search-result-down {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-result-down:hover {\r\n    transition: background-color 0.3s ease;\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.search-result-down p:first-of-type {\r\n    font-weight: bold;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-result-down .primary-btn {\r\n    margin-right: 1rem;\r\n}\r\n\r\n\r\n\r\n.search-bar-field {\r\n    flex: 1;\r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n    line-height: 1.3rem;\r\n    color: #fff;\r\n    font-size: 1.3rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-bar-field:invalid {\r\n    outline: 0;\r\n    box-shadow: none;\r\n    border: none;\r\n}\r\n\r\n.fa.fa-times.close-search {\r\n    cursor: pointer;\r\n}\r\n\r\n.primary-btn {\r\n    background-color: var(--primary-button-background);\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    font-family: 'Lato', sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n.mobile-search-icon {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n.hero-container {\r\n    width: 100%;\r\n    flex: 1;\r\n    background-color: var(--hero-background);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.content-container-left {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n}\r\n\r\n.content-text-container {\r\n    margin: 1rem;\r\n}\r\n\r\n.primary-btn.get-started-btn {\r\n    padding: 1.5rem 3rem;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.teacher-parent-links {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.teacher-parent-links a {\r\n    font-size: 1.2rem;\r\n    color: var(--primary-button-background);\r\n    text-decoration: none;\r\n    margin: 1rem;\r\n}\r\n\r\n.image-carousel-container {\r\n    height: 100%;\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.image-carousel {\r\n    height: 75%;\r\n    background-color: #fff;\r\n}\r\n\r\n.image-carousel img {\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: fill;\r\n}\r\n\r\n.image-description {\r\n    flex: 1;\r\n    width: 100%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal-container {\r\n    /* CSS change in JS */\r\n    display: none;\r\n    align-items:center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.4);\r\n    z-index: 5;\r\n}\r\n\r\n.sign-up-container {\r\n    height: 90%;\r\n    width: 40%;\r\n    background-color: #fff;\r\n    color: grey;\r\n    position: relative;\r\n    /* Change flex/none */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-shadow: var(--default-shadow);\r\n    \r\n}\r\n\r\n.sign-up-container > i {\r\n    align-self: flex-end;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.third-party-buttons {\r\n    margin: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.secondary-btn {\r\n    background-color: #fff;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.secondary-btn img {\r\n    height: 1rem;\r\n    width: 1rem;\r\n}\r\n\r\n.secondary-btn p {\r\n    margin: 1rem;\r\n}\r\n\r\n.sign-up-form {\r\n\r\n    margin: auto;\r\n    height: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.select-container {\r\n    width: 75%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n\r\n.select-container select {\r\n    padding: .75rem 2rem .75rem .3rem;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    color: var(--primary-button-background);\r\n    border: 2px grey solid;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n   \r\n}\r\n\r\n\r\n\r\n#close-sign-in, #close-sign-up {\r\n    cursor: pointer;\r\n}\r\n\r\n.birthday-selector {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.form-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-field label {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    letter-spacing: .2rem;\r\n}\r\n\r\n.form-field input {\r\n    \r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    padding: 1rem 0;\r\n    padding-left: .5rem;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    color: #c2c6d4;\r\n    outline: 0;\r\n}\r\n\r\n.sign-up-form .form-field input:focus {\r\n    border: 2px solid var(--gold);\r\n    transition: border 0.3s ease;\r\n}\r\n\r\n.sign-up-form .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-up-form .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-up-form .error-text {\r\n    color: var(--error-color);\r\n    visibility: hidden;\r\n}\r\n\r\n.sign-up-form .form-field.error .error-text {\r\n    visibility: visible;\r\n    font-size: .7rem;\r\n}\r\n\r\n.register-btn, .login-btn {\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.register-btn {\r\n    background-color: #c2c6d4;\r\n}\r\n\r\n.login-btn {\r\n    background-color: #fff;\r\n    color: #000;\r\n    border: 2px solid grey;\r\n}\r\n\r\n.login-btn a {\r\n    color: var(--primary-button-background);\r\n}\r\n\r\n.sign-in-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 90%;\r\n    box-shadow: var(--default-shadow);\r\n}\r\n\r\n.sign-in-header {\r\n    width: 100%;\r\n    height: 15%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n}\r\n\r\n.sign-in-header h1 {\r\n    margin-left: 20px;\r\n}\r\n\r\n.sign-in-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid rgba(0,0,0,0.1);\r\n    border-radius: 50%;\r\n    padding: .50rem;\r\n}\r\n\r\n.sign-in-header i:hover {\r\n    background: rgba(0,0,0,0.1);\r\n}\r\n\r\n.sign-in-form-area {\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-buttons {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.sign-in-buttons .secondary-btn {\r\n    width: 100%;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    letter-spacing: .1rem;\r\n}\r\n\r\n.sign-in-form-fields {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    justify-content: space-evenly;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-form-fields .form-field input {\r\n    border: 0;\r\n    outline: 0;\r\n    border-bottom: 2px solid #000;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    outline: 0;\r\n}\r\n\r\n.sign-in-form-fields .form-field input:focus {\r\n    border-bottom: 2px solid var(--gold);\r\n}\r\n\r\n.sign-in-form-fields .form-field:last-of-type {\r\n    position: relative;\r\n}\r\n\r\n.sign-in-form-fields p {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 62%;\r\n}\r\n\r\n.sign-in-form-fields .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-in-form-fields .error-text {\r\n    color: var(--error-color);\r\n    /*visibility: hidden;*/\r\n}\r\n\r\n.primary-btn.big-login-btn {\r\n\r\n    width: 100%;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 1.5rem;\r\n}\r\n\r\n#browse-modal {\r\n    /* CHANGE WITH JAVASCIPT */\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.browse-modal-area {\r\n    height: 100%;\r\n    width: 35%;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n   \r\n    /*transition: transform 1s ease;*/\r\n    transform: translateX(-100%);\r\n}\r\n\r\n\r\n.browse-modal-area.show {\r\n    transition: transform 0.3s ease;\r\n    transform: translateX(0);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.browse-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid grey;\r\n    border-radius: 50%;\r\n    padding: 7px;\r\n    cursor: pointer;\r\n}\r\n\r\n.browse-header {\r\n    color: #000;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.browse-composers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    /* max-height: 100%; */\r\n    overflow-y: scroll;\r\n}\r\n\r\n.letter {\r\n    display: flex;\r\n    width: 90%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #000;\r\n    border-bottom: 1px solid grey;\r\n}\r\n\r\n.letter h1  {\r\n    flex: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.letter-composers {\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n}\r\n\r\n.random-composer-links a {\r\n    text-decoration: none;\r\n    color: blue;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n    body {\r\n        overflow: auto;\r\n    }\r\n\r\n    .hero-container {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .landing-nav {\r\n        justify-content: center;\r\n    }\r\n    .nav-left {\r\n        display: none;\r\n    }\r\n\r\n    .right-nav-container {\r\n        justify-content: flex-end;\r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 1rem;\r\n        width: 35%;\r\n    }\r\n\r\n    .mobile-search-icon {\r\n        display: block;\r\n    }\r\n\r\n    .sign-up-container {\r\n        height: 90%;\r\n        width: 75%;\r\n    }\r\n\r\n    .search-bar-results {\r\n        left: 20%;\r\n        top: 7.5%;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n   \r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n    \r\n    body {\r\n        /*\r\n        overflow: hidden;\r\n        */\r\n       \r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 0rem;\r\n        flex: 1;\r\n        font-size: 1rem;\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .right-nav-container {\r\n        width: 60%;\r\n    }\r\n\r\n    .nav-right {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .search-bar-results {\r\n        /* top: 9%; */\r\n        width: 100%;\r\n        left: 0;    \r\n    \r\n    }\r\n\r\n\r\n    .sign-up-container {\r\n        height: 100%;\r\n        width: 100%;\r\n        overflow: auto;\r\n    }\r\n\r\n    .third-party-buttons {\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n    }\r\n\r\n    .third-party-buttons .secondary-btn {\r\n        margin: .5rem 0;\r\n    }\r\n    \r\n    .select-container {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .select-container select {\r\n        width: 90%;\r\n    }\r\n\r\n    .sign-up-form label {\r\n        font-size: .7rem;\r\n    }\r\n\r\n    .form-field input {\r\n        margin-top: .3rem;\r\n    }\r\n\r\n    .form-field {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .primary-btn.register-btn, .primary-btn.login-btn {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .search-bar-overlay {\r\n        justify-content: center;\r\n        margin: auto;\r\n        height: 5rem;\r\n    }\r\n\r\n    .search-result-down p {\r\n        font-size: .75rem;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://app/static/css/landing.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');\r\n\r\n:root {\r\n    --header-background: #4257b2;\r\n    --hero-background: #3b4c9b;\r\n    --primary-button-background: #3ccfcf;\r\n    --main-background: #f6f7fb;\r\n    --gold: #facd21;\r\n    --default-shadow: 0px 13px 26px #0000002F;\r\n    --success-color: #2ecc71;\r\n    --error-color: #e74c3c;\r\n    \r\n}\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Lato', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #fff;\r\n    height: 100vh;\r\n    height: calc(var(--vh, 1vh) * 100);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: var(--main-background);\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    font-family: 'Lato', sans-serif;\r\n    cursor: pointer;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.landing-nav {\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.landing-nav p {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.site-title {\r\n    width: 20%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.right-nav-container {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n}\r\n\r\n.nav-left {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    justify-content: space-evenly;\r\n    padding: 0;\r\n}\r\n\r\n.nav-left li {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\n.nav-left li a, .site-title a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: center;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-left li a:hover, .nav-right li a:hover, .site-title a:hover {\r\n    color: rgba(189, 195, 199, 0.8);\r\n}\r\n\r\n.nav-left li a > * {\r\n    margin: .2rem;\r\n}\r\n\r\n.nav-right {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    margin-right: 3rem;\r\n}\r\n\r\n.nav-right li {\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.home-mobile-icons {\r\n    display: none;\r\n}\r\n\r\n.search-bar-overlay {\r\n    display: none;\r\n    align-items: center;\r\n    width: 60%;\r\n    \r\n}\r\n\r\n.search-bar-results {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    top: 8%;\r\n    /*left: 26%;*/\r\n    right: 20%;\r\n    background-color: var(--header-background);\r\n    width: 60%;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    z-index: 1000;\r\n\r\n}\r\n\r\n.search-result-down {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-result-down:hover {\r\n    transition: background-color 0.3s ease;\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.search-result-down p:first-of-type {\r\n    font-weight: bold;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-result-down .primary-btn {\r\n    margin-right: 1rem;\r\n}\r\n\r\n\r\n\r\n.search-bar-field {\r\n    flex: 1;\r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n    line-height: 1.3rem;\r\n    color: #fff;\r\n    font-size: 1.3rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-bar-field:invalid {\r\n    outline: 0;\r\n    box-shadow: none;\r\n    border: none;\r\n}\r\n\r\n.fa.fa-times.close-search {\r\n    cursor: pointer;\r\n}\r\n\r\n.primary-btn {\r\n    background-color: var(--primary-button-background);\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    font-family: 'Lato', sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n.mobile-search-icon {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n.hero-container {\r\n    width: 100%;\r\n    flex: 1;\r\n    background-color: var(--hero-background);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.content-container-left {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n}\r\n\r\n.content-text-container {\r\n    margin: 1rem;\r\n}\r\n\r\n.primary-btn.get-started-btn {\r\n    padding: 1.5rem 3rem;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.teacher-parent-links {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.teacher-parent-links a {\r\n    font-size: 1.2rem;\r\n    color: var(--primary-button-background);\r\n    text-decoration: none;\r\n    margin: 1rem;\r\n}\r\n\r\n.image-carousel-container {\r\n    height: 100%;\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.image-carousel {\r\n    height: 75%;\r\n    background-color: #fff;\r\n}\r\n\r\n.image-carousel img {\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: fill;\r\n}\r\n\r\n.image-description {\r\n    flex: 1;\r\n    width: 100%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal-container {\r\n    /* CSS change in JS */\r\n    display: none;\r\n    align-items:center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.4);\r\n    z-index: 5;\r\n}\r\n\r\n.sign-up-container {\r\n    height: 90%;\r\n    width: 40%;\r\n    background-color: #fff;\r\n    color: grey;\r\n    position: relative;\r\n    /* Change flex/none */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-shadow: var(--default-shadow);\r\n    \r\n}\r\n\r\n.sign-up-container > i {\r\n    align-self: flex-end;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.third-party-buttons {\r\n    margin: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.secondary-btn {\r\n    background-color: #fff;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.secondary-btn img {\r\n    height: 1rem;\r\n    width: 1rem;\r\n}\r\n\r\n.secondary-btn p {\r\n    margin: 1rem;\r\n}\r\n\r\n.sign-up-form {\r\n\r\n    margin: auto;\r\n    height: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.select-container {\r\n    width: 75%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n\r\n.select-container select {\r\n    padding: .75rem 2rem .75rem .3rem;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    color: var(--primary-button-background);\r\n    border: 2px grey solid;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n   \r\n}\r\n\r\n\r\n\r\n#close-sign-in, #close-sign-up {\r\n    cursor: pointer;\r\n}\r\n\r\n.birthday-selector {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.form-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-field label {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    letter-spacing: .2rem;\r\n}\r\n\r\n.form-field input {\r\n    \r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    padding: 1rem 0;\r\n    padding-left: .5rem;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    color: #c2c6d4;\r\n    outline: 0;\r\n}\r\n\r\n.sign-up-form .form-field input:focus {\r\n    border: 2px solid var(--gold);\r\n    transition: border 0.3s ease;\r\n}\r\n\r\n.sign-up-form .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-up-form .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-up-form .error-text {\r\n    color: var(--error-color);\r\n    visibility: hidden;\r\n}\r\n\r\n.sign-up-form .form-field.error .error-text {\r\n    visibility: visible;\r\n    font-size: .7rem;\r\n}\r\n\r\n.register-btn, .login-btn {\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.register-btn {\r\n    background-color: #c2c6d4;\r\n}\r\n\r\n.login-btn {\r\n    background-color: #fff;\r\n    color: #000;\r\n    border: 2px solid grey;\r\n}\r\n\r\n.login-btn a {\r\n    color: var(--primary-button-background);\r\n}\r\n\r\n.sign-in-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 90%;\r\n    box-shadow: var(--default-shadow);\r\n}\r\n\r\n.sign-in-header {\r\n    width: 100%;\r\n    height: 15%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n}\r\n\r\n.sign-in-header h1 {\r\n    margin-left: 20px;\r\n}\r\n\r\n.sign-in-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid rgba(0,0,0,0.1);\r\n    border-radius: 50%;\r\n    padding: .50rem;\r\n}\r\n\r\n.sign-in-header i:hover {\r\n    background: rgba(0,0,0,0.1);\r\n}\r\n\r\n.sign-in-form-area {\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-buttons {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.sign-in-buttons .secondary-btn {\r\n    width: 100%;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    letter-spacing: .1rem;\r\n}\r\n\r\n.sign-in-form-fields {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    justify-content: space-evenly;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-form-fields .form-field input {\r\n    border: 0;\r\n    outline: 0;\r\n    border-bottom: 2px solid #000;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    outline: 0;\r\n}\r\n\r\n.sign-in-form-fields .form-field input:focus {\r\n    border-bottom: 2px solid var(--gold);\r\n}\r\n\r\n.sign-in-form-fields .form-field:last-of-type {\r\n    position: relative;\r\n}\r\n\r\n.sign-in-form-fields p {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 62%;\r\n}\r\n\r\n.sign-in-form-fields .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-in-form-fields .error-text {\r\n    color: var(--error-color);\r\n    /*visibility: hidden;*/\r\n}\r\n\r\n.primary-btn.big-login-btn {\r\n\r\n    width: 100%;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 1.5rem;\r\n}\r\n\r\n#browse-modal {\r\n    /* CHANGE WITH JAVASCIPT */\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.browse-modal-area {\r\n    height: 100%;\r\n    width: 35%;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n   \r\n    /*transition: transform 1s ease;*/\r\n    transform: translateX(-100%);\r\n}\r\n\r\n\r\n.browse-modal-area.show {\r\n    transition: transform 0.3s ease;\r\n    transform: translateX(0);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.browse-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid grey;\r\n    border-radius: 50%;\r\n    padding: 7px;\r\n    cursor: pointer;\r\n}\r\n\r\n.browse-header {\r\n    color: #000;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.browse-composers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    /* max-height: 100%; */\r\n    overflow-y: scroll;\r\n}\r\n\r\n.letter {\r\n    display: flex;\r\n    width: 90%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #000;\r\n    border-bottom: 1px solid grey;\r\n}\r\n\r\n.letter h1  {\r\n    flex: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.letter-composers {\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n}\r\n\r\n.random-composer-links a {\r\n    text-decoration: none;\r\n    color: blue;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n    body {\r\n        overflow: auto;\r\n    }\r\n\r\n    .hero-container {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .landing-nav {\r\n        justify-content: center;\r\n    }\r\n    .nav-left {\r\n        display: none;\r\n    }\r\n\r\n    .right-nav-container {\r\n        justify-content: flex-end;\r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 1rem;\r\n        width: 35%;\r\n    }\r\n\r\n    .mobile-search-icon {\r\n        display: block;\r\n    }\r\n\r\n    .sign-up-container {\r\n        height: 90%;\r\n        width: 75%;\r\n    }\r\n\r\n    .search-bar-results {\r\n        left: 20%;\r\n        top: 7.5%;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n   \r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n    \r\n    body {\r\n        /*\r\n        overflow: hidden;\r\n        */\r\n       \r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 0rem;\r\n        flex: 1;\r\n        font-size: 1rem;\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .right-nav-container {\r\n        width: 60%;\r\n    }\r\n\r\n    .nav-right {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .search-bar-results {\r\n        /* top: 9%; */\r\n        width: 100%;\r\n        left: 0;    \r\n    \r\n    }\r\n\r\n\r\n    .sign-up-container {\r\n        height: 100%;\r\n        width: 100%;\r\n        overflow: auto;\r\n    }\r\n\r\n    .third-party-buttons {\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n    }\r\n\r\n    .third-party-buttons .secondary-btn {\r\n        margin: .5rem 0;\r\n    }\r\n    \r\n    .select-container {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .select-container select {\r\n        width: 90%;\r\n    }\r\n\r\n    .sign-up-form label {\r\n        font-size: .7rem;\r\n    }\r\n\r\n    .form-field input {\r\n        margin-top: .3rem;\r\n    }\r\n\r\n    .form-field {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .primary-btn.register-btn, .primary-btn.login-btn {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .search-bar-overlay {\r\n        justify-content: center;\r\n        margin: auto;\r\n        height: 5rem;\r\n    }\r\n\r\n    .search-result-down p {\r\n        font-size: .75rem;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvYnJvd3NlX2NvbXBvc2Vycy5jc3M/N2E2YiIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2Nzcy9ob21lcGFnZS5jc3M/ZDFlZiIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2Nzcy9sYW5kaW5nLmNzcz9mZTUyIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tYWluL2Jyb3dzZUNvbXBvc2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL1VJU2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9odHRwLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9zZXNzaW9uT2JqLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvYnJvd3NlX2NvbXBvc2Vycy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvaG9tZXBhZ2UuY3NzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvY3NzL2xhbmRpbmcuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLHlKQUF1RTs7QUFFekc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMseUlBQStEOztBQUVqRzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FB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QUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLFNBQVMsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxZQUFZLEtBQUssWUFBWSxh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RUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJicm93c2VDb21wb3Nlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21haW4vYnJvd3NlQ29tcG9zZXIuanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnJvd3NlX2NvbXBvc2Vycy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lcGFnZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYW5kaW5nLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi4vbW9kdWxlcy9hcHAnO1xyXG5pbXBvcnQgXCIuLi8uLi9jc3MvbGFuZGluZy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vY3NzL2hvbWVwYWdlLmNzc1wiO1xyXG5pbXBvcnQgJy4uLy4uL2Nzcy9icm93c2VfY29tcG9zZXJzLmNzcyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEFwcC5pbml0QmFzZSk7IiwiY2xhc3MgVWlTZWxlY3RvcnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaXRlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS10aXRsZScpO1xyXG4gICAgdGhpcy5sb2dJbk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1uYXYnKTtcclxuICAgIHRoaXMuc2lnblVwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24tdXAtYnRuJyk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcbiAgICB0aGlzLm9wZW5Db25jZXJ0QnVpbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUnKTtcclxuXHJcbiAgICB0aGlzLm9wZW5Nb2JpbGVTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1tb2JpbGUtc2VhcmNoJyk7XHJcbiAgICB0aGlzLm9wZW5Nb2JpbGVCcm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1tb2JpbGUtYnJvd3NlJyk7XHJcbiAgICB0aGlzLnJpZ2h0TmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LW5hdi1jb250YWluZXInKTtcclxuXHJcbiAgICB0aGlzLmdldFN0YXJ0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXN0YXJ0ZWQtYnRuJyk7XHJcbiAgICAvL0Jyb3dzZSBNb2RhbFxyXG4gICAgdGhpcy5icm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3NlJyk7XHJcbiAgICB0aGlzLmJyb3dzZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jyb3dzZS1tb2RhbCcpO1xyXG4gICAgdGhpcy5icm93c2VNb2RhbEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3NlLW1vZGFsLWFyZWEnKTtcclxuICAgIHRoaXMuY2xvc2VCcm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtYnJvd3NlJyk7XHJcbiAgICB0aGlzLmJyb3dzZUNvbXBvc2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicm93c2UtY29tcG9zZXJzJyk7XHJcblxyXG4gICAgLy9EeW5hbWljIFNlYXJjaCBSZXN1bHQgRWxlbWVudHNcclxuICAgIHRoaXMuc2VhcmNoQmFyT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyLW92ZXJsYXknKTtcclxuICAgIHRoaXMuY2xvc2VTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2VhcmNoJyk7XHJcbiAgICB0aGlzLnNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXItZmllbGQnKTtcclxuICAgIHRoaXMuc2VhcmNoQmFyUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyLXJlc3VsdHMnKTtcclxuXHJcbiAgICAvL0xvZ2luIGFuZCBTaWduIFVwIEVsZW1lbnRzXHJcbiAgICB0aGlzLmxvZ0luT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1uYXYnKTtcclxuICAgIHRoaXMuc2lnblVwT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWJ0bicpO1xyXG4gICAgdGhpcy5zaWduVXBNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLW1vZGFsJyk7XHJcbiAgICB0aGlzLnNpZ25Jbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4tbW9kYWwnKTtcclxuICAgIHRoaXMuY2xvc2VTaWduVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2lnbi11cCcpO1xyXG4gICAgdGhpcy5jbG9zZVNpZ25JbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1zaWduLWluJyk7XHJcbiAgICB0aGlzLmxvZ2dlZEluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2dlZC1pbicpO1xyXG4gICAgdGhpcy5kcm9wRG93bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24tbWVudScpO1xyXG4gICAgdGhpcy5yZWdpc3RlclVzZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItdXNlci1idG4nKTtcclxuICAgIHRoaXMubG9nSW5Vc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXVzZXItYnRuJyk7XHJcblxyXG4gICAgLy9SZWdpc3RyYXRpb24gVmFsaWRhdGlvblxyXG5cclxuICAgIHRoaXMucmVnaXN0cmF0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWZvcm0nKTtcclxuICAgIHRoaXMucmVnaXN0ZXJVc2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci11c2VybmFtZScpO1xyXG4gICAgdGhpcy5yZWdpc3RlckVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWVtYWlsJyk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItcGFzc3dvcmQnKTtcclxuICAgIHRoaXMucmVnaXN0ZXJQYXNzd29yZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItcGFzc3dvcmQyJyk7XHJcblxyXG4gICAgdGhpcy5sb2dJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi1pbi1mb3JtJyk7XHJcbiAgICB0aGlzLmxvZ2luVXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tdXNlcm5hbWUnKTtcclxuICAgIHRoaXMubG9naW5QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1wYXNzd29yZCcpO1xyXG5cclxuICAgIC8vQ09NUE9TRVJcclxuICAgIHRoaXMucGllY2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlLXRpdGxlJyk7XHJcbiAgICB0aGlzLnBpZWNlUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS1yZXN1bHRzJyk7XHJcbiAgICB0aGlzLnBpZWNlRGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS1kZXRhaWxzJyk7XHJcbiAgICB0aGlzLmNvbXBvc2VyV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb3Nlci13cmFwJyk7XHJcbiAgICB0aGlzLnN1Ym1pdENvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWNvbW1lbnQnKTtcclxuICAgIHRoaXMuYWRkUGllY2VUb0Zhdm9yaXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAnYWRkLXBpZWNlLXRvLWZhdm9yaXRlcydcclxuICAgICk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbmNlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNvbmNlcnQnKTtcclxuXHJcbiAgICAvL0NPTkNFUlQgQlVJTERFUlxyXG4gICAgdGhpcy5hZGRUb0NvbmNlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLXRvLWNvbmNlcnQnKTtcclxuICAgIHRoaXMuZGVsZXRlUGllY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGUtcGllY2UnKTtcclxuXHJcbiAgICB0aGlzLmNvbmNlcnRCdWlsZGVyQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LWJ1aWxkZXItYXJlYScpO1xyXG4gICAgdGhpcy5jb25jZXJ0TWludXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LW1pbnV0ZXMnKTtcclxuICAgIHRoaXMuY29uY2VydENvbmNsdXNpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC1jb25jbHVzaW9uJyk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2hGYXZvcml0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZhdm9yaXRlcycpO1xyXG4gICAgdGhpcy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICdmYXZvcml0ZXMtc2VhcmNoLXJlc3VsdHMnXHJcbiAgICApO1xyXG4gICAgdGhpcy5kZWxldGVJbnRlcm1pc3Npb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWludGVybWlzc2lvbicpO1xyXG4gICAgdGhpcy5jb25jZXJ0VGl0bGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC10aXRsZS1idG4nKTtcclxuICAgIHRoaXMucmlnaHRTZWFyY2hBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LXNlYXJjaC1hcmVhJyk7XHJcbiAgICB0aGlzLmNvbmNlcnRUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtdGl0bGUtaW5wdXQnKTtcclxuICAgIHRoaXMuY2hhbmdlVGl0bGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlLXRpdGxlLWJ0bicpO1xyXG4gICAgdGhpcy5jb25jZXJ0VGl0bGVIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC10aXRsZS1oZWFkZXInKTtcclxuICAgIHRoaXMuc2F2ZUNvbmNlcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1jb25jZXJ0LWJ0bicpO1xyXG4gICAgLy9maXggdGhpcy5cclxuICAgIGlmICh0aGlzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5pbml0aWFsRmF2b3JpdGVzUmVzdWx0cyA9IFsuLi50aGlzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuY2hpbGRyZW5dO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb25jZXJ0QnVpbGRlclRleHRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtYnVpbGRlci10ZXh0LWFyZWEnKTtcclxuICAgIHRoaXMuY29uY2VydExlbmd0aEluZGljYXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LWxlbmd0aC1pbmRpY2F0b3InKTtcclxuXHJcblxyXG4gICAgLy9IT01QQUdFXHJcbiAgICB0aGlzLnNob3dHb2xkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdmVyLWdvbGQnKTtcclxuICAgIC8vY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtcmVzdWx0Jyk7XHJcbiAgICB0aGlzLnZpZXdNb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXctbW9yZS1idG4nKTtcclxuICAgIHRoaXMubWFpbkNvbnRlbnRJbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRlbnQtYXJlYS1pbm5lcicpO1xyXG4gICAgdGhpcy5vcGVuUHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuLXByb2ZpbGUnKTtcclxuICAgIHRoaXMub3BlbkZhdm9yaXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuLWZhdm9yaXRlcycpO1xyXG4gICAgdGhpcy5vcGVuQ29uY2VydHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1jb25jZXJ0cycpO1xyXG4gICAgdGhpcy5yZXR1cm5Ib21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldHVybi1ob21lJyk7XHJcblxyXG4gICAgLy9GYXZvcml0ZXMgb24gSG9tZSBQYWdlXHJcbiAgICB0aGlzLmhvbWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtc2VhcmNoLXJlc3VsdHMnKTtcclxuICAgIC8vRmF2b3JpdGVzIFBhZ2VcclxuICAgIHRoaXMuZnVsbEZhdm9yaXRlc0dyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbC1mYXZvcml0ZXMtZ3JpZCcpO1xyXG5cclxuICAgIC8vQ29uY2VydHMgb24gSG9tZSBQYWdlXHJcbiAgICB0aGlzLnlvdXJDb25jZXJ0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAneW91ci1jb25jZXJ0cy1jb250YWluZXInXHJcbiAgICApO1xyXG5cclxuICAgIC8vQ29uY2VydHMgb24gQ29uY2VydHMgUGFnZVxyXG4gICAgdGhpcy5mdWxsQ29uY2VydHNHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGwtY29uY2VydHMtZ3JpZCcpO1xyXG5cclxuICAgIGlmICh0aGlzLm9wZW5Qcm9maWxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5vcGVuTGlua3MgPSBbdGhpcy5vcGVuUHJvZmlsZSwgdGhpcy5vcGVuRmF2b3JpdGVzLCB0aGlzLm9wZW5Db25jZXJ0cywgdGhpcy5yZXR1cm5Ib21lXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9wZW5Ccm93c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1icm93c2UnKTtcclxuXHJcbiAgICB0aGlzLnBpZWNlTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGllY2UtbmFtZScpO1xyXG4gICAgdGhpcy5jcmVhdGVDb25jZXJ0QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICdjcmVhdGUtY29uY2VydC1idG4nXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZHJvcERvd25Zb3VyQ29uY2VydHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgJ2Ryb3Bkb3duLXlvdXItY29uY2VydHMnXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29tcG9zZXJMZXR0ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgJ2NvbXBvc2VyLWxldHRlci1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZXN1bHRzQ29sdW1uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtY29sdW1uJyk7XHJcbiAgICB0aGlzLmNvbXBvc2VyUmVzdWx0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb3Nlci1yZXN1bHQtbGlzdCcpO1xyXG4gICAgdGhpcy51c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdXNlcm5hbWUnKTtcclxuICAgIGlmICh0aGlzLnVzZXIgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy51c2VyID0gdGhpcy51c2VyLnRleHRDb250ZW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0ZST00gSU5ERVhcclxuICAgIHRoaXMuY29tcG9zZXJMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb3Nlci1yZXN1bHRzJyk7XHJcbiAgICB0aGlzLnNlYXJjaEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1maWVsZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVJU2VsZWN0b3JzID0gbmV3IFVpU2VsZWN0b3JzKCk7IiwiaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpJztcclxuaW1wb3J0IHsgSFRUUCB9IGZyb20gJy4vaHR0cCc7XHJcbmltcG9ydCB7IFVzZXIsIENvbmNlcnQsIFBpZWNlIH0gZnJvbSAnLi9zZXNzaW9uT2JqJztcclxuaW1wb3J0IHsgRm9ybXMgfSBmcm9tICcuL2Zvcm1zJztcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi9uYXYnO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcclxuaW1wb3J0IHsgUmVxdWVzdHMgfSBmcm9tICcuL3JlcXVlc3RzJztcclxuXHJcbmNsYXNzIEFQUCB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZ2VuZXJhdGVSYW5kb21OdW1iZXIobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgfVxyXG5cclxuICBpbml0QmFzZSgpIHtcclxuXHJcblxyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd1NlYXJjaCk7XHJcbiAgICBVSVNlbGVjdG9ycy5vcGVuTW9iaWxlU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd1NlYXJjaCk7XHJcbiAgICBVSVNlbGVjdG9ycy5jbG9zZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNsb3NlU2VhcmNoRmllbGQpO1xyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICAgIFVJLmNsZWFyTGlzdCgpO1xyXG4gICAgICBSZXF1ZXN0cy5nZXRDb21wb3NlclJlc3VsdHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5vcGVuTW9iaWxlQnJvd3NlKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLm9wZW5Nb2JpbGVCcm93c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zaG93QnJvd3NlKTtcclxuICAgIH1cclxuXHJcbiAgICBVSVNlbGVjdG9ycy5icm93c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zaG93QnJvd3NlKTtcclxuICAgIFVJU2VsZWN0b3JzLmNsb3NlQnJvd3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBVSVNlbGVjdG9ycy5icm93c2VNb2RhbEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5icm93c2VNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmxvZ0luT3BlbiAmJiBVSVNlbGVjdG9ycy5zaWduVXBPcGVuKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmxvZ0luT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLm9wZW5Nb2RhbCk7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNpZ25VcE9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuTW9kYWwpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jbG9zZVNpZ25VcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNsb3NlTW9kYWwpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jbG9zZVNpZ25Jbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNsb3NlTW9kYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5sb2dnZWRJbikge1xyXG4gICAgICBVSVNlbGVjdG9ycy5sb2dnZWRJbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnNob3dEcm9wRG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLnJlZ2lzdHJhdGlvbkZvcm0pIHtcclxuICAgICAgVUlTZWxlY3RvcnMucmVnaXN0cmF0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm1JbnB1dHMgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAnLmZvcm0tZmllbGQgaW5wdXQnXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKCFGb3Jtcy5jaGVja1JlcXVpcmVkKFsuLi5mb3JtSW5wdXRzXSkpIHtcclxuICAgICAgICAgIEZvcm1zLmNoZWNrTGVuZ3RoKFVJU2VsZWN0b3JzLnJlZ2lzdGVyVXNlcm5hbWUsIDYsIDIwKTtcclxuICAgICAgICAgIEZvcm1zLmNoZWNrTGVuZ3RoKFVJU2VsZWN0b3JzLnJlZ2lzdGVyUGFzc3dvcmQsIDYsIDIwKTtcclxuICAgICAgICAgIEZvcm1zLmNoZWNrRW1haWwoVUlTZWxlY3RvcnMucmVnaXN0ZXJFbWFpbCk7XHJcbiAgICAgICAgICBGb3Jtcy5jaGVja1Bhc3N3b3Jkc01hdGNoKFxyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5yZWdpc3RlclBhc3N3b3JkLFxyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5yZWdpc3RlclBhc3N3b3JkMlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChGb3Jtcy5jaGVja0FsbFZhbGlkKFsuLi5mb3JtSW5wdXRzXSkpIHtcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMucmVnaXN0cmF0aW9uRm9ybS5zdWJtaXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5sb2dJbkZvcm0pIHtcclxuICAgICAgVUlTZWxlY3RvcnMubG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFGb3Jtcy5jaGVja1JlcXVpcmVkKFtcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMubG9naW5Vc2VybmFtZSxcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMubG9naW5QYXNzd29yZCxcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBsZXQgbG9naW5EYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogVUlTZWxlY3RvcnMubG9naW5Vc2VybmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFVJU2VsZWN0b3JzLmxvZ2luUGFzc3dvcmQudmFsdWUsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIFJlcXVlc3RzLnRlc3RMb2dpbihsb2dpbkRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29uY2VydEZ1bmN0aW9uKGUpIHtcclxuICAgIGxldCBjb21wb3Nlck5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlci1uYW1lJylcclxuICAgICAgLnRleHRDb250ZW50O1xyXG4gICAgbGV0IHBpZWNlTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBpZWNlLW5hbWUnKVxyXG4gICAgICAudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgbGV0IG5ld1BpZWNlID0gbmV3IFBpZWNlKGNvbXBvc2VyTmFtZSwgcGllY2VOYW1lKTtcclxuICAgIGxldCBuZXdDb25jZXJ0ID0gbmV3IENvbmNlcnQoJ05vIE5hbWUnKTtcclxuICAgIG5ld0NvbmNlcnQucGllY2VzLnB1c2gobmV3UGllY2UpO1xyXG4gICAgU3RvcmFnZS5zZXROZXdDb25jZXJ0KG5ld0NvbmNlcnQpO1xyXG4gICAgbG9jYXRpb24uaHJlZiA9ICcvY29uY2VydF9idWlsZGVyJztcclxuICB9XHJcblxyXG4gIHNhdmVDb25jZXJ0KCkge1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gU3RvcmFnZS5nZXRVc2VyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZST00gU0FWRUNPTkNFUlRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuY29uY2VydFRpdGxlSGVhZGVyLnRleHRDb250ZW50ID09PSAnJykge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdQbGVhc2UgYWRkIHRpdGxlLic7XHJcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLnRleHRDb250ZW50ID0gJ1NhdmUgQ29uY2VydCc7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKFVJLmNvbmNlcnRQaWVjZUFyci5sZW5ndGggPT09IDApIHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4udGV4dENvbnRlbnQgPSAnUGxlYXNlIGFkZCBwaWVjZXMuLi4nO1xyXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdTYXZlIENvbmNlcnQnO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50Q29uY2VydCA9IG5ldyBDb25jZXJ0KFVJU2VsZWN0b3JzLmNvbmNlcnRUaXRsZUhlYWRlci50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIGlmIChwaWVjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludGVybWlzc2lvbicpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB0aGlzUGllY2UgPSBuZXcgUGllY2UoXHJcbiAgICAgICAgICBwaWVjZS5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXItaW5mbyA+IHA6Zmlyc3QtY2hpbGQnKS50ZXh0Q29udGVudCxcclxuICAgICAgICAgIHBpZWNlLnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS1pbmZvID4gcDpmaXJzdC1jaGlsZCcpLnRleHRDb250ZW50XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY3VycmVudENvbmNlcnQucGllY2VzLnB1c2godGhpc1BpZWNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGN1cnJlbnRVc2VyLmNvbmNlcnRzLnB1c2goY3VycmVudENvbmNlcnQpO1xyXG5cclxuXHJcbiAgICBTdG9yYWdlLnNldFVzZXIoY3VycmVudFVzZXIpO1xyXG5cclxuICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLnRleHRDb250ZW50ID0gJ0NvbmNlcnQgU2F2ZWQhISc7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLnRleHRDb250ZW50ID0gJ1NhdmUgQ29uY2VydCc7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIC8vRm9yIENvbmNlcnQgQnVpbGRlclxyXG4gIGFkZFBpZWNlVG9Db25jZXJ0QXJyKGUpIHtcclxuXHJcbiAgICBjb25zdCBhZGRUb0NvbmNlcnRDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwaWVjZUNvbXBvc2VyID0gYWRkVG9Db25jZXJ0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcucGllY2UtaW5mby1sZWZ0IHA6bnRoLW9mLXR5cGUoMSknXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGllY2VDb21wb3NlckRhdGVzID0gYWRkVG9Db25jZXJ0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuZGF0YS1jb21wb3Nlci1kYXRlcydcclxuICAgICk7XHJcbiAgICBjb25zdCBwaWVjZUNvbXBvc2VyTmF0aW9uYWxpdHkgPSBhZGRUb0NvbmNlcnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5kYXRhLWNvbXBvc2VyLW5hdGlvbmFsaXR5J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlSW5zdHJ1bWVudGF0aW9uID0gYWRkVG9Db25jZXJ0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuZGF0YS1waWVjZS1pbnN0cnVtZW50YXRpb24nXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGllY2VUaXRsZSA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnBpZWNlLWluZm8tbGVmdCBwOm50aC1vZi10eXBlKDIpJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlRHVyYXRpb24gPSBhZGRUb0NvbmNlcnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5waWVjZS1pbmZvLWxlZnQgcDpudGgtb2YtdHlwZSgzKSdcclxuICAgICk7XHJcblxyXG4gICAgLy9DaGFuZ2Ugbm90aWZpY3RhaW9uIHRleHQgYmFjayBhbmQgZm9ydGguXHJcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdQaWVjZSBhZGRlZCB0byBjb25jZXJ0JztcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ0FkZCB0byBjb25jZXJ0JztcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIGxldCBwaWVjZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwaWVjZUVsLmNsYXNzTGlzdCA9ICdjb25jZXJ0JztcclxuICAgIC8vcGllY2VFbC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgcGllY2VFbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmFycyBwaWVjZS1kcmFnLWJhcnNcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBvc2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZUNvbXBvc2VyLnRleHRDb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZUNvbXBvc2VyRGF0ZXMudGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ke3BpZWNlQ29tcG9zZXJOYXRpb25hbGl0eS50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZVRpdGxlLnRleHRDb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZUluc3RydW1lbnRhdGlvbi50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VEdXJhdGlvbi50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnggZGVsZXRlLXBpZWNlXCI+PC9pPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1pbnRlcm1pc3Npb25cIj5cclxuICAgICAgICAgICAgICA8cD5BZGQgSW50ZXJtaXNzaW9uIEhlcmU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIGA7XHJcblxyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLnB1c2gocGllY2VFbCk7XHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIH0pO1xyXG5cclxuICAgIFVJLmFkZFBpZWNlVG9ET00ocGllY2VFbCk7XHJcblxyXG4gICAgVUkuZGVsZXRlUGllY2VzTGlzdGVuZXJzKCk7XHJcbiAgICBVSS5jcmVhdGVJbnRlcm1pc3Npb25MaXN0ZW5lcnMoKTtcclxuICAgIFVJLmRyYWdMaXN0ZW5lcnMoKTtcclxuICAgIFVJLnVwZGF0ZUNvbmNlcnREdXJhdGlvbihVSS5nZXRDb25jZXJ0RHVyYXRpb24oVUkuY29uY2VydFBpZWNlQXJyKSk7XHJcbiAgfVxyXG5cclxuICAvL1RPRE9cclxuICAvL2RlbGV0ZVBpZWNlc1xyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcCA9IG5ldyBBUFAoKTsiLCJpbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5cclxuY2xhc3MgRk9STVMge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHJlZ2lzdGVyVmFsaWRhdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY3VycmVudEZvcm0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGxldCBmb3JtRmllbGRzID0gY3VycmVudEZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tZmllbGQnKTtcclxuXHJcbiAgICBbLi4uZm9ybUZpZWxkc10uZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgaWYgKGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci10ZXh0JykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgd2FzIGFuIGVycm9yJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIGFyZSBubyBlcnJvcnMnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja0VtYWlsKGlucHV0KSB7XHJcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICBpZiAocmUudGVzdChpbnB1dC52YWx1ZS50cmltKCkpKSB7XHJcbiAgICAgIFVJLnNob3dTdWNjZXNzKGlucHV0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFVJLnNob3dFcnJvcihpbnB1dCwgJ0VtYWlsIGlzIG5vdCB2YWxpZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tSZXF1aXJlZChpbnB1dEFycikge1xyXG4gICAgbGV0IGlzUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIGlucHV0QXJyLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgVUkuc2hvd0Vycm9yKGlucHV0LCBgJHtVSS5nZXRGaWVsZE5hbWUoaW5wdXQpfSBpcyByZXF1aXJlZC5gKTtcclxuICAgICAgICBpc1JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBVSS5zaG93U3VjY2VzcyhpbnB1dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpc1JlcXVpcmVkO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tMZW5ndGgoaW5wdXQsIG1pbiwgbWF4KSB7XHJcbiAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoIDwgbWluKSB7XHJcbiAgICAgIFVJLnNob3dFcnJvcihcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBgJHtVSS5nZXRGaWVsZE5hbWUoaW5wdXQpfSBtdXN0IGJlIGF0IGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzYFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiBtYXgpIHtcclxuICAgICAgVUkuc2hvd0Vycm9yKFxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIGAke1VJLmdldEZpZWxkTmFtZShpbnB1dCl9IG11c3QgYmUgbGVzcyB0aGFuICR7bWF4fSBjaGFyYWN0ZXJzfWBcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFVJLnNob3dTdWNjZXNzKGlucHV0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrUGFzc3dvcmRzTWF0Y2goaW5wdXQxLCBpbnB1dDIpIHtcclxuICAgIGlmIChpbnB1dDEudmFsdWUgIT09IGlucHV0Mi52YWx1ZSkge1xyXG4gICAgICBVSS5zaG93RXJyb3IoaW5wdXQyLCAnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tBbGxWYWxpZChmb3JtSW5wdXRBcnIpIHtcclxuICAgIGxldCBhbGxWYWxpZCA9IHRydWU7XHJcbiAgICBmb3JtSW5wdXRBcnIuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGZpZWxkLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlcnJvcicpICYmXHJcbiAgICAgICAgZmllbGQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID4gMVxyXG4gICAgICApIHtcclxuICAgICAgICBhbGxWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBhbGxWYWxpZDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGFsbFZhbGlkO1xyXG4gIH1cclxuXHJcbiAgbG9nSW5WYWxpZGF0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKCdMb2cgSW4gUHJldmVudGVkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybXMgPSBuZXcgRk9STVMoKTsiLCJjbGFzcyBIdHRwIHtcclxuICAvL01ha2UgSFRUUCBHZXRcclxuICBhc3luYyBnZXQodXJsKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc0RhdGE7XHJcbiAgfVxyXG5cclxuICAvL01ha2UgSFRUUCBQT1NUXHJcbiAgYXN5bmMgcG9zdCh1cmwsIGRhdGEpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc0RhdGE7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRYTUwoZXZlbnQgPSB1bmRlZmluZWQsIHVybCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgIHJldHVybiByZXNEYXRhO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0SlNPTih1cmwpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICByZXR1cm4gcmVzRGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIVFRQID0gbmV3IEh0dHAoKTsiLCJpbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5cclxuY2xhc3MgTkFWIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBjb21wb3NlclBhZ2VMaXN0ZW5lcnMoY29tcG9zZXIpIHtcclxuICAgIGNvbXBvc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgY29tcG9zZXIvJHtlLnRhcmdldC50ZXh0Q29udGVudH1gO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gbmV3IE5BVigpOyIsImltcG9ydCB7IFVJU2VsZWN0b3JzIH0gZnJvbSAnLi9VSVNlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IEhUVFAgfSBmcm9tICcuL2h0dHAnO1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuL25hdic7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcclxuXHJcbmNsYXNzIFJFUVVFU1RTIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBnZXRDb21wb3NlclJlc3VsdHMoKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBzZWFyY2hUZXJtOiBVSVNlbGVjdG9ycy5zZWFyY2hJbnB1dC52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIEhUVFAucG9zdCgnL2NvbXBvc2VycycsIGRhdGEpLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgY29uc29sZS5sb2codHlwZW9mIHJlcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZXMuY29tcG9zZXJzKVxyXG4gICAgICBsZXQgY29tcEFycmF5ID0gSlNPTi5wYXJzZShyZXMuY29tcG9zZXJzKTtcclxuICAgICAgY29uc29sZS5sb2coY29tcEFycmF5KTtcclxuXHJcbiAgICAgIGNvbXBBcnJheS5mb3JFYWNoKGNvbXBvc2VyID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgVUkucG9wdWxhdGVDb21wb3NlclNlYXJjaFJlc3VsdHMoY3VycmVudFVSTCwgY29tcG9zZXIpXHJcbiAgICAgIH0pXHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coYFRoZXJlIHdhcyBhbiBlcnIsICR7ZXJyfWApKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgYnJvd3NlUGFuZWxGZXRjaCgpIHtcclxuICAgIGxldCByYW5kb21Db21wQXJyID0gW107XHJcbiAgICBIVFRQLmdldCgnL2Jyb3dzZV9jb21wb3Nlcl9saXN0JylcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgY29tcG9zZXJzQXJyID0gZGF0YS5jb21wb3NlcnNfYXJyYXk7XHJcbiAgICAgICAgY29tcG9zZXJzQXJyLmZvckVhY2goKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtYWluTGV0dGVyID0gZ3JvdXBbMF1bMF07XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgcmFuZG9tQ29tcEFyci5wdXNoKFxyXG4gICAgICAgICAgICAgIGdyb3VwW0FwcC5nZW5lcmF0ZVJhbmRvbU51bWJlcigwLCBncm91cC5sZW5ndGgpXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFVJLmFkZFJhbmRvbUNvbXBvc2Vyc1RvRE9NKG1haW5MZXR0ZXIsIHJhbmRvbUNvbXBBcnIpO1xyXG4gICAgICAgICAgcmFuZG9tQ29tcEFyciA9IFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBUaGVyZSB3YXMgYW4gZXJyb3I6ICR7ZXJyfWApKTtcclxuICB9XHJcblxyXG4gIG9wZW5DdXJyZW50TGV0dGVyKGUpIHtcclxuICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2Jyb3dzZV9jb21wb3NlcnMnKSkge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYnJvd3NlX2NvbXBvc2Vycyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgIT09ICdMSScgfHwgZS50YXJnZXQudGFnTmFtZSAhPT0gJ0gxJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY29tcG9zZXJMZXR0ZXIgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgICAgbGV0IGRhdGEgPSB7IGxldHRlcjogY29tcG9zZXJMZXR0ZXIgfTtcclxuICAgICAgSFRUUC5wb3N0KCcuL2Jyb3dzZV9jb21wb3Nlcl9saXN0JywgZGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKFVJU2VsZWN0b3JzLnJlc3VsdHNDb2x1bW4udGV4dENvbnRlbnQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLnJlc3VsdHNDb2x1bW4udGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkYXRhLmxldHRlckFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgVUkuYXBwZW5kQ3VycmVudExldHRlcihpdGVtKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIFsuLi5VSVNlbGVjdG9ycy5yZXN1bHRzQ29sdW1uLmNoaWxkcmVuXS5mb3JFYWNoKChjb21wKSA9PiB7XHJcbiAgICAgICAgICAgIE5hdi5jb21wb3NlclBhZ2VMaXN0ZW5lcnMoY29tcCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhgVGhlcmUgd2FzIGFuIGVycm9yICR7ZXJyfWApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlc3RMb2dpbihsb2dpbkRhdGEpIHtcclxuICAgIEhUVFAucG9zdCgnL2xvZ2luJywgbG9naW5EYXRhKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS51cGRhdGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgVUlTZWxlY3RvcnMubG9nSW5Vc2VyQnRuLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZXNzYWdlfWA7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvaG9tZXBhZ2UnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS51cGRhdGUgPT09ICdmYWlsdXJlJykge1xyXG4gICAgICAgICAgVUkuc2hvd0Vycm9yKFVJU2VsZWN0b3JzLmxvZ2luVXNlcm5hbWUsIGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICBVSS5zaG93RXJyb3IoVUlTZWxlY3RvcnMubG9naW5QYXNzd29yZCwgZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coYFRoZXJlIHdhcyBhbiBlcnJvciwgJHtlcnJ9YCkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldEZ1bGxQaWVjZUluZm8ocGllY2VUaXRsZSkge1xyXG4gICAgSFRUUC5nZXQoYC9waWVjZV9kZXRhaWwvJHtwaWVjZVRpdGxlfWApXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gVUkuYWRkUGllY2VGcm9tTG9jYWxTdG9yYWdlKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBFUlJPUjogJHtlcnJ9YCkpXHJcbiAgfVxyXG5cclxuICBmYXZvcml0ZXNTZWFyY2goKSB7XHJcbiAgICBsZXQgc2VhcmNoVGVybSA9IFVJU2VsZWN0b3JzLnNlYXJjaEZhdm9yaXRlcy52YWx1ZTtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBzZWFyY2hUZXJtXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlYXJjaFRlcm0gPT09ICcnKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmluaXRpYWxGYXZvcml0ZXNSZXN1bHRzLmZvckVhY2goKGZhdm9yaXRlKSA9PiB7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuZmF2b3JpdGVzU2VhcmNoUmVzdWx0cy5hcHBlbmRDaGlsZChmYXZvcml0ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgSFRUUC5wb3N0KCcvc2VhcmNoX2Zhdm9yaXRlcycsIGRhdGEpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcblxyXG4gICAgICAgICAgbGV0IHBhcnNlZCA9IEpTT04ucGFyc2UoZGF0YS5mYXZvcml0ZXMpO1xyXG4gICAgICAgICAgcGFyc2VkLmZvckVhY2goZmF2b3JpdGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmYXZvcml0ZUxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICAgICAgICAgIGZhdm9yaXRlTEkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1jb21wb3Nlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLWNvbXBvc2VyLWRhdGVzXCI+JHtmYXZvcml0ZS5jb21wb3Nlci55ZWFyc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLWNvbXBvc2VyLW5hdGlvbmFsaXR5XCI+JHtmYXZvcml0ZS5jb21wb3Nlci5uYXRpb25hbGl0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXBpZWNlLWluc3RydW1lbnRhdGlvblwiPiR7ZmF2b3JpdGUuaW5zdHJ1bWVudGF0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlLWluZm8tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7ZmF2b3JpdGUuY29tcG9zZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7ZmF2b3JpdGUudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZS1pbmZvLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtmYXZvcml0ZS5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnktYnRuIGFkZC10by1jb25jZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBDb25jZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMuZmF2b3JpdGVzU2VhcmNoUmVzdWx0cy5hcHBlbmRDaGlsZChmYXZvcml0ZUxJKTtcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBgRVJST1I6ICR7ZXJyfWApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0UGllY2VSZXN1bHRzKGUpIHtcclxuICAgIFVJLmNsZWFyQ29tcG9zZXJSZXN1bHRzKCk7XHJcblxyXG4gICAgbGV0IGZvcm1hdHRlZFN0cmluZyA9IGUudGFyZ2V0LmlubmVySFRNTC5zcGxpdCgnJicpWzBdO1xyXG4gICAgSFRUUC5nZXQoYC9waWVjZV9kZXRhaWwvJHtmb3JtYXR0ZWRTdHJpbmd9YClcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucGllY2UudGl0bGUpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gYDxoMiBpZD1cInBpZWNlLXRpdGxlLXJlc3VsdFwiPiR7ZGF0YS5waWVjZS50aXRsZX08L2gyPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwicGllY2UtZHVyYXRpb25cIj4ke2RhdGEucGllY2UuZHVyYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJwaWVjZS1pbnN0cnVtZW50YXRpb25cIj4ke2RhdGEucGllY2UuaW5zdHJ1bWVudGF0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICBVSVNlbGVjdG9ycy5waWVjZURldGFpbHNDb250YWluZXIuaW5uZXJIVE1MID0gY29udGVudHM7XHJcblxyXG4gICAgICAgICAgaWYgKGRhdGEucGllY2UuY29tbWVudHMubGVuZ3RoID4gMCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICAgICAgY29tbWVudExpc3QuY2xhc3NMaXN0ID0gJ2NvbW1lbnQtbGlzdCc7XHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLnBpZWNlRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50TGlzdCk7XHJcbiAgICAgICAgICAgIGRhdGEucGllY2UuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBjb21tZW50TEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgIGNvbW1lbnRMSS5jbGFzc0xpc3QgPSAnY29tbWVudCc7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnQuYXV0aG9yLCBjb21tZW50LmJvZHksIGNvbW1lbnQudGltZXN0YW1wKTtcclxuXHJcbiAgICAgICAgICAgICAgY29tbWVudExJLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxwPiR7Y29tbWVudC5hdXRob3J9IHNheXM6IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7Y29tbWVudC5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7Y29tbWVudC50aW1lc3RhbXB9PC9wPlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgY29tbWVudExpc3QuYXBwZW5kQ2hpbGQoY29tbWVudExJKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlGYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaUZhaWwuaW5uZXJIVE1MID0gJ1RoZXJlIHdhcyBhIGZhaWx1cmUnO1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLnBpZWNlUmVzdWx0cy5hcHBlbmQobGkpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheUNvbW1lbnRzKGVudHJ5KSB7XHJcbiAgICBIVFRQLmdldChgL3BpZWNlX2RldGFpbC8ke2VudHJ5LnBpZWNlfWApXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnBpZWNlLmNvbW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICAgIGNvbW1lbnRMaXN0LmNsYXNzTGlzdCA9ICdjb21tZW50LWxpc3QnO1xyXG4gICAgICAgICAgVUlTZWxlY3RvcnMucGllY2VEZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRMaXN0KTtcclxuICAgICAgICAgIGRhdGEucGllY2UuY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29tbWVudExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgY29tbWVudExJLmNsYXNzTGlzdCA9ICdjb21tZW50JztcclxuICAgICAgICAgICAgY29tbWVudExpc3QuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8cD4ke2NvbW1lbnQuYXV0aG9yfSBzYXlzOiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQuYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQudGltZXN0YW1wfTwvcD5gO1xyXG4gICAgICAgICAgICBjb21tZW50TGlzdC5hcHBlbmRDaGlsZChjb21tZW50TEkpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gYFRoZXJlIHdhcyBhbiBlcnI6ICR7ZXJyfWApXHJcbiAgfVxyXG5cclxuXHJcbiAgaW1hZ2VGZXRjaCgpIHtcclxuICAgIGNvbnN0IGNvbXBvc2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb3Nlci1uYW1lJyk7XHJcbiAgICBIVFRQLmdldChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY3VzdG9tc2VhcmNoL3YxP2tleT1BSXphU3lDNzJlbXNhcGN1WHNGNjRIcm43Y2FfOXhJYkFVYm43RFkmY3g9MDE0MTI0MzkxOTQ1ODMwMDg2ODU5OmFpc3JhdXhqZWp5JnE9JHtjb21wb3Nlck5hbWUudGV4dENvbnRlbnR9YClcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tcG9zZXJJbWdTcmMgPSBkYXRhLml0ZW1zWzBdLnBhZ2VtYXAuY3NlX3RodW1ibmFpbFswXS5zcmM7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuY29tcG9zZXJXcmFwLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7Y29tcG9zZXJJbWdTcmN9JylgO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5jb21wb3NlcldyYXAuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDBcIiknO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tbWl0TmV3Q29tbWVudChlKSB7XHJcblxyXG5cclxuICAgIGxldCBjb21wb3NlclVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLXVzZXInKTtcclxuICAgIGNvbnN0IGNvbW1lbnRCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItY29tbWVudCcpO1xyXG4gICAgY29uc3QgY29tbWVudFBpZWNlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllY2UtdGl0bGUtcmVzdWx0Jyk7XHJcblxyXG5cclxuICAgIGlmICghY29tcG9zZXJVc2VyKSB7XHJcbiAgICAgIC8vVE9ETyBXUklURSBTSE9XIEJVVFRPTiBFUlJPUiBcclxuICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnUGxlYXNlIGxvZyBpbicpO1xyXG4gICAgfSBlbHNlIGlmICghY29tbWVudFBpZWNlVGl0bGUpIHtcclxuICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnU2VsZWN0IGEgcGllY2UnKTtcclxuICAgIH0gZWxzZSBpZiAoY29tbWVudEJvZHkudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCwgJ1dyaXRlICBhIGNvbW1lbnQhJyk7XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgY29uc3QgZW50cnkgPSB7XHJcbiAgICAgICAgYm9keTogY29tbWVudEJvZHkudmFsdWUsXHJcbiAgICAgICAgcGllY2U6IGNvbW1lbnRQaWVjZVRpdGxlLnRleHRDb250ZW50XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBIVFRQLnBvc3QoJy9hZGRfY29tbWVudCcsIGVudHJ5KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnVGhhbmsgeW91ISc7XHJcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCBDb21tZW50JztcclxuICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgY29tbWVudEJvZHkudmFsdWUgPSBgYDtcclxuICAgICAgICAgIFJlcXVlc3RzLmRpc3BsYXlDb21tZW50cyhlbnRyeSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21taXROZXdGYXZvcml0ZShlKSB7XHJcbiAgICBsZXQgY29tcG9zZXJVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi11c2VyJyk7XHJcbiAgICBsZXQgcGllY2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS10aXRsZS1yZXN1bHQnKTtcclxuXHJcbiAgICBsZXQgcGllY2VTZW5kID0ge1xyXG4gICAgICBwaWVjZVRpdGxlU2VuZDogcGllY2VUaXRsZS50ZXh0Q29udGVudFxyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGllY2VUaXRsZSkge1xyXG4gICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQsICdTZWxlY3QgYSBwaWVjZScpO1xyXG4gICAgfSBlbHNlIGlmICghY29tcG9zZXJVc2VyKSB7XHJcbiAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCwgJ1BsZWFzZSBMb2cgaW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEhUVFAucG9zdCgnL2FkZF9waWVjZV90b19mYXZvcml0ZXMnLCBwaWVjZVNlbmQpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IGAke2RhdGEubWVzc2FnZX1gO1xyXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdBZGQgcGllY2UgdG8gZmF2b3JpdGVzJztcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgRkVUQ0ggRVJST1I6ICR7ZXJyfWApKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUmVxdWVzdHMgPSBuZXcgUkVRVUVTVFMoKTsiLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgY29uc3RydWN0b3IodXNlcm5hbWUsIGNvbmNlcnRzID0gW10pIHtcclxuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgIHRoaXMuY29uY2VydHMgPSBjb25jZXJ0cztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25jZXJ0IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgcGllY2VzID0gW10pIHtcclxuICAgIHRoaXMuaWQgPSBBcHAuZ2VuZXJhdGVSYW5kb21OdW1iZXIoMCwgNTAwMDApO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5waWVjZXMgPSBwaWVjZXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2Uge1xyXG4gIGNvbnN0cnVjdG9yKGNvbXBvc2VyLCB0aXRsZSkge1xyXG4gICAgdGhpcy5jb21wb3NlciA9IGNvbXBvc2VyO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0cyB9IGZyb20gJy4vcmVxdWVzdHMnO1xyXG5pbXBvcnQgeyBVc2VyLCBDb25jZXJ0LCBQaWVjZSB9IGZyb20gJy4vc2Vzc2lvbk9iaic7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IFVJU2VsZWN0b3JzIH0gZnJvbSAnLi9VSVNlbGVjdG9ycyc7XHJcblxyXG5jbGFzcyBTVE9SQUdFIHtcclxuICBnZXRVc2VyKCkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VyKHVzZXIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVXNlcigpIHtcclxuICAgIGxldCB1c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdXNlcm5hbWUnKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBpZiAoU3RvcmFnZS5nZXRVc2VyKCkgPT09IG51bGwgfHwgU3RvcmFnZS5nZXRVc2VyKCkgPT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgbGV0IG5ld1VzZXIgPSBuZXcgVXNlcih1c2VyKTtcclxuICAgICAgU3RvcmFnZS5zZXRVc2VyKG5ld1VzZXIpO1xyXG4gICAgICBVSS5kaXNwbGF5Q29uY2VydHMobmV3VXNlcik7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXIgPT09IFN0b3JhZ2UuZ2V0VXNlcigpLnVzZXJuYW1lKSB7XHJcbiAgICAgIGxldCBjdXJyZW50VXNlciA9IFN0b3JhZ2UuZ2V0VXNlcigpO1xyXG4gICAgICBVSS5kaXNwbGF5Q29uY2VydHMoY3VycmVudFVzZXIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHVzZXIgIT09IFN0b3JhZ2UuZ2V0VXNlcigpLnVzZXJuYW1lKSB7XHJcbiAgICAgIGxldCBuZXdVc2VyID0gbmV3IFVzZXIodXNlcik7XHJcbiAgICAgIFN0b3JhZ2Uuc2V0VXNlcihuZXdVc2VyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENvbmNlcnQoKSB7XHJcbiAgICBsZXQgcmVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmV3Q29uY2VydCcpKTtcclxuICAgIGlmIChyZXMgIT09IG51bGwpIHtcclxuICAgICAgUmVxdWVzdHMuZ2V0RnVsbFBpZWNlSW5mbyhyZXMucGllY2VzWzBdLnRpdGxlLnNwbGl0KCcuLi4nKVswXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHNldE5ld0NvbmNlcnQoY29uY2VydCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25ld0NvbmNlcnQnLCBKU09OLnN0cmluZ2lmeShjb25jZXJ0KSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKHN0cmluZykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc3RyaW5nKTtcclxuICB9XHJcblxyXG4gIHNldEl0ZW0oc3RyaW5nLCBpdGVtKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdHJpbmcsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yYWdlID0gbmV3IFNUT1JBR0UoKTtcclxuIiwiaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IHsgUmVxdWVzdHMgfSBmcm9tICcuL3JlcXVlc3RzJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVWkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kcmFnU3RhcnRJbmRleCA9IDA7XHJcbiAgICB0aGlzLmFsbCA9IHRydWU7XHJcbiAgICB0aGlzLmNvbmNlcnRQaWVjZUFyciA9IFtdO1xyXG4gIH1cclxuXHJcbiAgdGVzdEltcG9ydCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFVJU2VsZWN0b3JzLnNpdGVUaXRsZSk7XHJcbiAgfVxyXG5cclxuICAvL0JBU0VcclxuICBvcGVuTW9kYWwoZSkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKSA9PT0gJ0xvZyBJbicpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2lnbkluTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNpZ25VcE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZU1vZGFsKGUpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnY2xvc2Utc2lnbi1pbicpIHtcclxuICAgICAgY29uc3Qgc2lnbkluTW9kYWxQYXJlbnQgPVxyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBzaWduSW5Nb2RhbFBhcmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbW9kYWxQYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIG1vZGFsUGFyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93U2VhcmNoKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50ID09PSBVSVNlbGVjdG9ycy5vcGVuTW9iaWxlU2VhcmNoKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnJpZ2h0TmF2Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNpdGVUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSVNlbGVjdG9ycy5yaWdodE5hdkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZVNlYXJjaEZpZWxkKCkge1xyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgVUlTZWxlY3RvcnMucmlnaHROYXZDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuc2l0ZVRpdGxlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaXRlVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93QnJvd3NlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFVJU2VsZWN0b3JzLmJyb3dzZU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgVUlTZWxlY3RvcnMuYnJvd3NlTW9kYWxBcmVhLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmJyb3dzZUNvbXBvc2Vycy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHdoaWxlIChVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmJyb3dzZUNvbXBvc2Vycy5yZW1vdmVDaGlsZChcclxuICAgICAgICAgIFVJU2VsZWN0b3JzLmJyb3dzZUNvbXBvc2Vycy5maXJzdENoaWxkXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgUmVxdWVzdHMuYnJvd3NlUGFuZWxGZXRjaCgpO1xyXG4gICAgLy9SZXF1ZXN0cy5vcGVuQ3VycmVudExldHRlcigpO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kQ3VycmVudExldHRlcihpdGVtKSB7XHJcbiAgICBsZXQgY29tcG9zZXJSZXN1bHROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29tcG9zZXJSZXN1bHROYW1lLnRleHRDb250ZW50ID0gYCR7aXRlbX1gO1xyXG4gICAgVUlTZWxlY3RvcnMucmVzdWx0c0NvbHVtbi5hcHBlbmRDaGlsZChjb21wb3NlclJlc3VsdE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgYWRkUmFuZG9tQ29tcG9zZXJzVG9ET00obWFpbkxldHRlciwgcmFuZG9tQ29tcEFycikge1xyXG4gICAgbGV0IGNvbXBvc2VyTGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wb3NlckxldHRlci5jbGFzc0xpc3QgPSAnbGV0dGVyJztcclxuXHJcblxyXG4gICAgLy9USEVSRSBJUyBTT01FIEZVQ0tJTkcgQkVBTUlORyBJU1NVRSBIRVJFXHJcbiAgICBjb21wb3NlckxldHRlci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICA8aDE+JHttYWluTGV0dGVyfTwvaDE+XHJcbiAgICAgPGRpdiBjbGFzcz1cImxldHRlci1jb21wb3NlcnNcIj5cclxuXHJcbiAgICAgICAgICAgJHtyYW5kb21Db21wQXJyLm1hcCgoaXRlbSkgPT4ge1xyXG5cclxuICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyYW5kb20tY29tcG9zZXItbGlua3NcIj48YSBocmVmPVwiI1wiPiR7aXRlbX08L2E+PC9wPmBcclxuICAgIH0pXHJcbiAgICAgICAgLmpvaW4oJycpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgIFVJU2VsZWN0b3JzLmJyb3dzZUNvbXBvc2Vycy5hcHBlbmRDaGlsZChjb21wb3NlckxldHRlcik7XHJcblxyXG4gICAgY29uc3QgbGV0dGVyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGV0dGVyIGgxJyk7XHJcblxyXG4gICAgWy4uLmxldHRlckxpbmtzXS5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBSZXF1ZXN0cy5vcGVuQ3VycmVudExldHRlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByYW5kb21Db21wb3Nlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnLnJhbmRvbS1jb21wb3Nlci1saW5rcyBhJ1xyXG4gICAgKTtcclxuICAgIFsuLi5yYW5kb21Db21wb3Nlckxpc3RdLmZvckVhY2goKGNvbXBvc2VyTGluaykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhjb21wb3NlckxpbmspO1xyXG4gICAgICBjb21wb3NlckxpbmsuaHJlZiA9IGAvY29tcG9zZXIvJHtjb21wb3NlckxpbmsudGV4dENvbnRlbnR9YDtcclxuICAgICAgLy9jb21wb3NlckxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjb25zb2xlLmxvZygnVElUUycpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJMaXN0KCkge1xyXG4gICAgaWYgKFVJU2VsZWN0b3JzLnNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB3aGlsZSAoVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5yZW1vdmVDaGlsZChcclxuICAgICAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuZmlyc3RDaGlsZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5yZW1vdmVDaGlsZChcclxuICAgICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLmZpcnN0Q2hpbGRcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvcHVsYXRlQ29tcG9zZXJTZWFyY2hSZXN1bHRzKGN1cnJlbnRVUkwsIGNvbXBvc2VyKSB7XHJcbiAgICAvLyBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICBjb25zdCByZXN1bHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJlc3VsdERpdi5jbGFzc0xpc3QgPSAnc2VhcmNoLXJlc3VsdC1kb3duJztcclxuXHJcbiAgICBpZiAoY3VycmVudFVSTC5pbmNsdWRlcygnY29tcG9zZXInKSkge1xyXG4gICAgICByZXN1bHREaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8cD4ke2NvbXBvc2VyLm5hbWV9PC9wPlxyXG4gICAgICA8YSBocmVmPVwiJHtjb21wb3Nlci5uYW1lfVwiPjxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0blwiPlZpc2l0IENvbXBvc2VyIFBhZ2U8L2J1dHRvbj48L2E+XHJcblxyXG4gIGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHREaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8cD4ke2NvbXBvc2VyLm5hbWV9PC9wPlxyXG4gICAgICA8YSBocmVmPVwiY29tcG9zZXIvJHtjb21wb3Nlci5uYW1lfVwiPjxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0blwiPlZpc2l0IENvbXBvc2VyIFBhZ2U8L2J1dHRvbj48L2E+XHJcblxyXG4gIGA7XHJcbiAgICB9XHJcblxyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5hcHBlbmRDaGlsZChyZXN1bHREaXYpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Ryb3BEb3duKCkge1xyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmRyb3BEb3duTWVudS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmRyb3BEb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVUlTZWxlY3RvcnMuZHJvcERvd25NZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GT1JNIFZBTElEQVRJT05cclxuICBzaG93RXJyb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGZvcm1Db250cm9sID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgIGZvcm1Db250cm9sLmNsYXNzTmFtZSA9ICdmb3JtLWZpZWxkIGVycm9yJztcclxuXHJcbiAgICBjb25zdCBlcnJvciA9IGZvcm1Db250cm9sLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci10ZXh0Jyk7XHJcbiAgICBlcnJvci5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgc2hvd1N1Y2Nlc3MoaW5wdXQpIHtcclxuICAgIGNvbnN0IGZvcm1Db250cm9sID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgIGZvcm1Db250cm9sLmNsYXNzTmFtZSA9ICdmb3JtLWZpZWxkIHN1Y2Nlc3MnO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGROYW1lKGlucHV0KSB7XHJcbiAgICBsZXQgbmV3U3RyaW5nID0gaW5wdXQuaWQuc3BsaXQoJy0nKVsxXTtcclxuICAgIC8vY29uc29sZS5sb2cobmV3U3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmV3U3RyaW5nLnNsaWNlKDEpKTtcclxuICAgIGlmIChuZXdTdHJpbmcuaW5jbHVkZXMoJ3Bhc3N3b3JkMicpKSB7XHJcbiAgICAgIHJldHVybiAnUmVwZWF0ZWQgUGFzc3dvcmQnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld1N0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5ld1N0cmluZy5zbGljZSgxKTtcclxuICB9XHJcblxyXG4gIC8vQ09OQ0VSVCBCVUlMREVSXHJcblxyXG4gIGFkZFBpZWNlRnJvbUxvY2FsU3RvcmFnZShwT2JqZWN0KSB7XHJcbiAgICBjb25zdCBwaWVjZU9iamVjdCA9IHBPYmplY3QucGllY2U7XHJcbiAgICBsZXQgcGllY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGllY2VFbC5jbGFzc0xpc3QgPSAnY29uY2VydCc7XHJcbiAgICBwaWVjZUVsLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcclxuICAgIHBpZWNlRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgXHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmFycyBwaWVjZS1kcmFnLWJhcnNcIj48L2k+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taW5uZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb3Nlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3BpZWNlT2JqZWN0LmNvbXBvc2VyfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7cGllY2VPYmplY3QueWVhcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5uYXRpb25hbGl0eX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2UtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3BpZWNlT2JqZWN0Lmluc3RydW1lbnRhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3BpZWNlT2JqZWN0LmR1cmF0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcyBmYS0yeCBkZWxldGUtcGllY2VcIj48L2k+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1pbnRlcm1pc3Npb25cIj5cclxuICAgICAgICAgICAgPHA+QWRkIEludGVybWlzc2lvbiBIZXJlPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICBgO1xyXG5cclxuICAgIC8vRklYIERFUEVOREVOQ0lFU1xyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLnB1c2gocGllY2VFbCk7XHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIH0pO1xyXG5cclxuICAgIFVJLmFkZFBpZWNlVG9ET00ocGllY2VFbCk7XHJcblxyXG4gICAgVUkuZGVsZXRlUGllY2VzTGlzdGVuZXJzKCk7XHJcbiAgICBVSS5jcmVhdGVJbnRlcm1pc3Npb25MaXN0ZW5lcnMoKTtcclxuICAgIFVJLmRyYWdMaXN0ZW5lcnMoKTtcclxuICAgIFVJLnVwZGF0ZUNvbmNlcnREdXJhdGlvbihVSS5nZXRDb25jZXJ0RHVyYXRpb24oVUkuY29uY2VydFBpZWNlQXJyKSk7XHJcblxyXG4gICAgU3RvcmFnZS5yZW1vdmVJdGVtKCduZXdDb25jZXJ0Jyk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q29uY2VydER1cmF0aW9uKHBpZWNlQXJyKSB7XHJcbiAgICBpZiAocGllY2VBcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGxldCBlbXB0eSA9IDA7XHJcbiAgICAgIFVJLmNvbmNlcnRMZW5ndGhKdWRnZW1lbnQoVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLCBlbXB0eSk7XHJcbiAgICAgIHJldHVybiBlbXB0eTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvbmNlcnREdXJhdGlvbkFyciA9IHBpZWNlQXJyLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaW50ZXJtaXNzaW9uJykpIHtcclxuICAgICAgICAgIHJldHVybiAzMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIE51bWJlcihcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcucGllY2UtaW5mbyBwOmxhc3Qtb2YtdHlwZScpXHJcbiAgICAgICAgICAgICAgLnRleHRDb250ZW50LnNwbGl0KFwiJ1wiKVswXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgY29uY2VydER1cmF0aW9uID0gY29uY2VydER1cmF0aW9uQXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYyArIHZhbCk7XHJcbiAgICAgIC8vIGlmKGNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuY29uY2VydC5pbnRlcm1pc3Npb24nKSl7XHJcbiAgICAgIC8vICAgICBjb25jZXJ0RHVyYXRpb24gKz0gMzA7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIFVJLmNvbmNlcnRMZW5ndGhKdWRnZW1lbnQoVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLCBjb25jZXJ0RHVyYXRpb24pO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbmNlcnREdXJhdGlvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjcmVhdGVJbnRlcm1pc3Npb24oZSwgY29uY2VydFBpZWNlQXJyKSB7XHJcbiAgICBpZiAoIVVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuYWRkLWludGVybWlzc2lvbicpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGFyZW50Q29uY2VydCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuICAgIC8vY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaW50ZXJtaXNzaW9uJykucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcblxyXG4gICAgbGV0IGludGVybWlzc2lvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnRlcm1pc3Npb25FbC5jbGFzc0xpc3QgPSAnY29uY2VydCBpbnRlcm1pc3Npb24nO1xyXG4gICAgLy9pbnRlcm1pc3Npb25FbC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgaW50ZXJtaXNzaW9uRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmFyc1wiIGRyYWdnYWJsZT1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICA8cD5JbnRlcm1pc3Npb246IH4zMCBtaW51dGVzPC9wPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcyBmYS0yeCBkZWxldGUtcGllY2VcIiBpZD1cImRlbGV0ZS1pbnRlcm1pc3Npb25cIj48L2k+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgLy9BREQgVE8gQVBQXHJcbiAgICBjb25jZXJ0UGllY2VBcnIuc3BsaWNlKFxyXG4gICAgICBjb25jZXJ0UGllY2VBcnIuaW5kZXhPZihwYXJlbnRDb25jZXJ0KSArIDEsXHJcbiAgICAgIDAsXHJcbiAgICAgIGludGVybWlzc2lvbkVsXHJcbiAgICApO1xyXG5cclxuICAgIGNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSwgaW5kZXgpID0+IHtcclxuICAgICAgcGllY2Uuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG4gICAgfSk7XHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UpID0+IHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmFwcGVuZENoaWxkKHBpZWNlKTtcclxuICAgIH0pO1xyXG4gICAgLy9jb25jZXJ0QnVpbGRlckFyZWEuYXBwZW5kQ2hpbGQoaW50ZXJtaXNzaW9uRWwpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhjb25jZXJ0UGllY2VBcnIpO1xyXG5cclxuICAgIFVpLnVwZGF0ZUNvbmNlcnREdXJhdGlvbihVaS5nZXRDb25jZXJ0RHVyYXRpb24oY29uY2VydFBpZWNlQXJyKSk7XHJcblxyXG4gICAgLy9EZWxldGUgSW50ZXJtaXNzaW9uXHJcbiAgICBsZXQgY2xvc2VJbnRlcm1pc3Npb24gPSBpbnRlcm1pc3Npb25FbC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLWludGVybWlzc2lvbicpO1xyXG4gICAgY2xvc2VJbnRlcm1pc3Npb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25jZXJ0UGllY2VBcnIuc3BsaWNlKGNvbmNlcnRQaWVjZUFyci5pbmRleE9mKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpLCAxKTtcclxuXHJcbiAgICAgIC8vUmVtb3ZlIEludGVybWlzc2lvbiBmcm9tIERPTVxyXG4gICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgLy9VcGRhdGUgRGF0YS1JbmRleCBBdHRyaWJ1dGVcclxuICAgICAgY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBVaS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVWkuZ2V0Q29uY2VydER1cmF0aW9uKGNvbmNlcnRQaWVjZUFycikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb25jZXJ0RHVyYXRpb24oZHVyYXRpb25OdW0pIHtcclxuICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRNaW51dGVzLnRleHRDb250ZW50ID0gYCR7ZHVyYXRpb25OdW19YDtcclxuICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRNaW51dGVzLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XHJcbiAgfVxyXG5cclxuICBjb25jZXJ0TGVuZ3RoSnVkZ2VtZW50KGNvbnRhaW5lciwgZHVyYXRpb24pIHtcclxuICAgIGlmIChkdXJhdGlvbiA9PSAwKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRDb25jbHVzaW9uLnRleHRDb250ZW50ID0gYFBsZWFzZSBhZGQgc29tZSBwaWVjZXMuYDtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydExlbmd0aEluZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlclRleHRBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGJsdWUnO1xyXG4gICAgfSBlbHNlIGlmIChkdXJhdGlvbiA8IDkwICYmIGR1cmF0aW9uID4gMCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0Q29uY2x1c2lvbi50ZXh0Q29udGVudCA9IGBDb25jZXJ0IGlzIHBvdGVudGlhbGx5IHRvbyBzaG9ydC5gO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlclRleHRBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2RiMjFmJztcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydExlbmd0aEluZGljYXRvci5jbGFzc0xpc3QgPSAnZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUgY29uY2VydC1sZW5ndGgtaW5kaWNhdG9yJztcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydExlbmd0aEluZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPj0gOTAgJiYgZHVyYXRpb24gPD0gMTIwKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRDb25jbHVzaW9uLnRleHRDb250ZW50ID0gYFBlcmZlY3QgY29uY2VydCBsZW5ndGghYDtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJUZXh0QXJlYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJlNzczZic7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRMZW5ndGhJbmRpY2F0b3IuY2xhc3NMaXN0ID0gJ2ZhIGZhLWNoZWNrIGNvbmNlcnQtbGVuZ3RoLWluZGljYXRvcic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0Q29uY2x1c2lvbi50ZXh0Q29udGVudCA9IGBDb25jZXJ0IGlzIHBvdGVudGlhbGx5IHRvbyBsb25nLi4uYDtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJUZXh0QXJlYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2E3MzAzZSc7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRMZW5ndGhJbmRpY2F0b3IuY2xhc3NMaXN0ID0gJ2ZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIGNvbmNlcnQtbGVuZ3RoLWluZGljYXRvcic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29uY2VydC5pbnRlcm1pc3Npb24nKSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm8gaW50ZXJtaXNzaW9uIHlldCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlUGllY2VzTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGRlbGV0ZVBpZWNlcyA9IFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXBpZWNlJyk7XHJcbiAgICBkZWxldGVQaWVjZXMuZm9yRWFjaCgocGllY2UpID0+IHtcclxuICAgICAgcGllY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5yZW1vdmVQaWVjZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUludGVybWlzc2lvbkxpc3RlbmVycygpIHtcclxuXHJcbiAgICBsZXQgaW50ZXJtaXNzaW9uTGlzdCA9IFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnLmFkZC1pbnRlcm1pc3Npb24nXHJcbiAgICApO1xyXG4gICAgaW50ZXJtaXNzaW9uTGlzdC5mb3JFYWNoKChpbnRlcm1pc3Npb24pID0+IHtcclxuICAgICAgaW50ZXJtaXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuY3JlYXRlSW50ZXJtaXNzaW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGllY2UoZSkge1xyXG4gICAgLy9nZXQgcGFyZW50IEVsXHJcbiAgICBsZXQgc2VsZWN0ZWRDb25jZXJ0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ29uY2VydCk7XHJcblxyXG4gICAgLy9SZW1vdmUgU2VsZWN0ZWQgUGllY2UgZnJvbSBBcnJheVxyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLnNwbGljZShVSS5jb25jZXJ0UGllY2VBcnIuaW5kZXhPZihzZWxlY3RlZENvbmNlcnQpLCAxKTtcclxuXHJcbiAgICAvL1JlbW92ZSBQaWVjZSBmcm9tIERPTVxyXG4gICAgc2VsZWN0ZWRDb25jZXJ0LnJlbW92ZSgpO1xyXG5cclxuICAgIC8vVXBkYXRlIERhdGEtSW5kZXggQXR0cmlidXRlXHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIH0pO1xyXG4gICAgVUkudXBkYXRlQ29uY2VydER1cmF0aW9uKFVJLmdldENvbmNlcnREdXJhdGlvbihVSS5jb25jZXJ0UGllY2VBcnIpKTtcclxuICB9XHJcblxyXG5cclxuICBhZGRQaWVjZVRvRE9NKHBpZWNlKSB7XHJcblxyXG4gICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmFwcGVuZENoaWxkKHBpZWNlKTtcclxuICB9XHJcblxyXG4gIGNsZWFyRmF2ZUxpc3QoKSB7XHJcbiAgICB3aGlsZSAoVUlTZWxlY3RvcnMuZmF2b3JpdGVzU2VhcmNoUmVzdWx0cy5maXJzdENoaWxkKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgVUlTZWxlY3RvcnMuZmF2b3JpdGVzU2VhcmNoUmVzdWx0cy5maXJzdENoaWxkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93SW50ZXJtaXNzaW9uKGUpIHtcclxuICAgIGlmIChVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmNvbmNlcnQuaW50ZXJtaXNzaW9uJykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09ICdjb25jZXJ0Jykge1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBlLnRhcmdldCA9PT0gVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhICYmXHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuY29uY2VydC5zaG93JylcclxuICAgICkge1xyXG4gICAgICBsZXQgY3VycmVudENvbmNlcnQgPSBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAnLmNvbmNlcnQuc2hvdydcclxuICAgICAgKTtcclxuICAgICAgY3VycmVudENvbmNlcnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbmNlcnRUaXRsZSgpIHtcclxuICAgIGxldCBjb25jZXJ0VGl0bGUgPSBVSVNlbGVjdG9ycy5jb25jZXJ0VGl0bGVJbnB1dC52YWx1ZTtcclxuXHJcbiAgICBpZiAoY29uY2VydFRpdGxlID09PSAnJykge1xyXG4gICAgICAvL1BsZWFzZSBQcm92aWRlIEEgVGl0bGUuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL0NoYW5nZSBET01cclxuICAgICAgVUlTZWxlY3RvcnMucmlnaHRTZWFyY2hBcmVhLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydFRpdGxlSGVhZGVyLnRleHRDb250ZW50ID0gYCR7Y29uY2VydFRpdGxlfWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb25jZXJ0VGl0bGUoKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5yaWdodFNlYXJjaEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSW50ZXJtaXNzaW9uKGUpIHtcclxuICAgIGlmICghVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaW50ZXJtaXNzaW9uJykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IFBhcmVudFxyXG4gICAgbGV0IHBhcmVudENvbmNlcnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBwYXJlbnRDb25jZXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHJcbiAgICAvL01ha2UgSW50ZXJtaXNzaW9uIEVsZW1lbnRcclxuICAgIGxldCBpbnRlcm1pc3Npb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW50ZXJtaXNzaW9uRWwuY2xhc3NMaXN0ID0gJ2NvbmNlcnQgaW50ZXJtaXNzaW9uJztcclxuICAgIC8vaW50ZXJtaXNzaW9uRWwuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgIGludGVybWlzc2lvbkVsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnNcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgPHA+SW50ZXJtaXNzaW9uOiB+MzAgbWludXRlczwvcD5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnggZGVsZXRlLXBpZWNlXCIgaWQ9XCJkZWxldGUtaW50ZXJtaXNzaW9uXCI+PC9pPlxyXG4gICAgICBgO1xyXG5cclxuICAgIC8vQUREIEFQUCBGVU5DVElPTiBIRVJFXHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIuc3BsaWNlKFxyXG4gICAgICBVSS5jb25jZXJ0UGllY2VBcnIuaW5kZXhPZihwYXJlbnRDb25jZXJ0KSArIDEsXHJcbiAgICAgIDAsXHJcbiAgICAgIGludGVybWlzc2lvbkVsXHJcbiAgICApO1xyXG5cclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSwgaW5kZXgpID0+IHtcclxuICAgICAgcGllY2Uuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG4gICAgfSk7XHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UpID0+IHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmFwcGVuZENoaWxkKHBpZWNlKTtcclxuICAgIH0pO1xyXG4gICAgLy9jb25jZXJ0QnVpbGRlckFyZWEuYXBwZW5kQ2hpbGQoaW50ZXJtaXNzaW9uRWwpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhjb25jZXJ0UGllY2VBcnIpO1xyXG5cclxuICAgIFVJLnVwZGF0ZUNvbmNlcnREdXJhdGlvbihVSS5nZXRDb25jZXJ0RHVyYXRpb24oVUkuY29uY2VydFBpZWNlQXJyKSk7XHJcblxyXG4gICAgLy9EZWxldGUgSW50ZXJtaXNzaW9uXHJcbiAgICBsZXQgY2xvc2VJbnRlcm1pc3Npb24gPSBpbnRlcm1pc3Npb25FbC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLWludGVybWlzc2lvbicpO1xyXG4gICAgY2xvc2VJbnRlcm1pc3Npb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBVSS5jb25jZXJ0UGllY2VBcnIuc3BsaWNlKFVJLmNvbmNlcnRQaWVjZUFyci5pbmRleE9mKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpLCAxKTtcclxuXHJcbiAgICAgIC8vUmVtb3ZlIEludGVybWlzc2lvbiBmcm9tIERPTVxyXG4gICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgLy9VcGRhdGUgRGF0YS1JbmRleCBBdHRyaWJ1dGVcclxuICAgICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKFVJLmNvbmNlcnRQaWVjZUFycikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVJbnRlcm1pc3Npb24oaW50ZXJtaXNzaW9uRWxlbWVudCkge1xyXG4gICAgbGV0IGNsb3NlSW50ZXJtaXNzaW9uID0gaW50ZXJtaXNzaW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnI2RlbGV0ZS1pbnRlcm1pc3Npb24nXHJcbiAgICApO1xyXG4gICAgY2xvc2VJbnRlcm1pc3Npb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcGFyc2VEdXJhdGlvbigpIHtcclxuICAgIHJldHVybiBOdW1iZXIoXHJcbiAgICAgIHRoaXMucXVlcnlTZWxlY3RvcignLnBpZWNlLWluZm8gcDpsYXN0LW9mLXR5cGUnKS50ZXh0Q29udGVudC5zcGxpdChcIidcIilbMF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvL0RyYWcgRnVuY3Rpb25zXHJcblxyXG4gIGRyYWdTdGFydChlKSB7XHJcbiAgICBVSS5kcmFnU3RhcnRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XHJcbiAgfVxyXG5cclxuICBkcmFnRW50ZXIoKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcclxuICB9XHJcblxyXG4gIGRyYWdMZWF2ZSgpIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ092ZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0Ryb3AoZSkge1xyXG4gICAgY29uc3QgZHJhZ0VuZEluZGV4ID0gK2UudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gICAgY29uc29sZS5sb2coYGZyb20gZHJhZ0RST1AgJHtkcmFnRW5kSW5kZXh9LCAke1VJLmRyYWdTdGFydEluZGV4fWApXHJcbiAgICBVSS5zd2FwSXRlbXMoVUkuZHJhZ1N0YXJ0SW5kZXgsIGRyYWdFbmRJbmRleCk7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XHJcbiAgfVxyXG5cclxuICBkcmFnTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgcGllY2VEcmFnQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waWVjZS1kcmFnLWJhcnMnKTtcclxuICAgIGNvbnN0IGRyYWdCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb25jZXJ0Jyk7XHJcblxyXG4gICAgcGllY2VEcmFnQmFycy5mb3JFYWNoKChkcmFnKSA9PiB7XHJcbiAgICAgIGRyYWcuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgVUkuZHJhZ1N0YXJ0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRyYWdCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgVUkuZHJhZ092ZXIpO1xyXG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIFVJLmRyYWdEcm9wKTtcclxuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIFVJLmRyYWdFbnRlcik7XHJcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBVSS5kcmFnTGVhdmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzd2FwSXRlbXMoZnJvbUluZGV4LCB0b0luZGV4KSB7XHJcbiAgICBjb25zdCBpdGVtT25lID0gVUkuY29uY2VydFBpZWNlQXJyW2Zyb21JbmRleF07XHJcbiAgICBjb25zdCBpdGVtVHdvID0gVUkuY29uY2VydFBpZWNlQXJyW3RvSW5kZXhdO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhVSS5jb25jZXJ0UGllY2VBcnIpO1xyXG4gICAgY29uc29sZS5sb2coaXRlbU9uZSk7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtVHdvKTtcclxuICAgIFVJLmNvbmNlcnRQaWVjZUFycltmcm9tSW5kZXhdID0gaXRlbVR3bztcclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyclt0b0luZGV4XSA9IGl0ZW1PbmU7XHJcblxyXG4gICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmlubmVySFRNTCA9IGBgO1xyXG5cclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgaXRlbSlcclxuICAgICAgVUkuYWRkUGllY2VUb0RPTShpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9IT01FUEFHRVxyXG4gIGRpc3BsYXlDb25jZXJ0cyh1c2VyLCBhbGwgPSBmYWxzZSkge1xyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmZ1bGxDb25jZXJ0c0dyaWQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5mdWxsQ29uY2VydHNHcmlkLmlubmVySFRNTCA9IGBgO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codXNlcik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyLmNvbmNlcnRzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXIuY29uY2VydHMubGVuZ3RoKTtcclxuXHJcblxyXG4gICAgaWYgKHVzZXIuY29uY2VydHMubGVuZ3RoID09PSAwIHx8IHVzZXIuY29uY2VydHMubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IG5vdGlmaWNhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBub3RpZmljYXRpb25Db250YWluZXIuY2xhc3NMaXN0ID0gJ25vLWNvbmNlcnRzLW5vdGlmaWNhdGlvbic7XHJcbiAgICAgIG5vdGlmaWNhdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcG9zZXItbmFtZVwiPlZpc2l0IHRoZSBjb25jZXJ0IGJ1aWxkZXIgcGFnZSBhYm92ZSB0byBzdGFydCBidWlsZGluZyBjb25jZXJ0cyE8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGA7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnlvdXJDb25jZXJ0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgVUlTZWxlY3RvcnMueW91ckNvbmNlcnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbkNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgKHVzZXIuZmF2b3JpdGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgLy8gICBsZXQgbm90aWZpY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIC8vICAgbm90aWZpY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdCA9ICduby1mYXZvcml0ZXMtbm90aWZpY2F0aW9uJztcclxuICAgIC8vICAgbm90aWZpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgIC8vICAgICAgICAgICA8cCBjbGFzcz1cIm5vLWZhdm9yaXRlcy1tZXNzYWdlXCI+UGxlYXNlIGJyb3dzZSBjb21wb3NlcnMgdG8gYWRkIHNvbWUgZmF2b3JpdGVzITwvcD5cclxuICAgIC8vICAgICAgIGA7XHJcbiAgICAvLyAgIFVJU2VsZWN0b3JzLmhvbWVTZWFyY2hSZXN1bHRzLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbkNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vU0VFIGhvbWVwYWdlLmpzIExpbmUgODZcclxuICAgIHVzZXIuY29uY2VydHMuZm9yRWFjaCgoY29uY2VydCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGFsbCA9PT0gZmFsc2UgJiYgaW5kZXggPCAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FsbD09PWZhbHNlLCBpbmRleCA8IDMnKTtcclxuICAgICAgICAvL2Z1bGxDb25jZXJ0c0dyaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBsZXQgY29uY2VydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbmNlcnRDb250YWluZXIuY2xhc3NMaXN0ID0gJ3NlYXJjaC1yZXN1bHQnO1xyXG4gICAgICAgIGNvbmNlcnRDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbmNlcnQtaWQtbnVtXCI+JHtjb25jZXJ0LmlkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImNvbmNlcnQtbmFtZVwiIGlkPVwiY29uY2VydC1uYW1lXCI+ICR7Y29uY2VydC50aXRsZVxyXG4gICAgICAgICAgfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHtjb25jZXJ0LnBpZWNlc1xyXG4gICAgICAgICAgICAubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGA8cCBjbGFzcz1cInRpbnktcGllY2UtdGl0bGVcIj4gPHN0cm9uZz4gJHtpdGVtLmNvbXBvc2VyfTwvc3Ryb25nPiAke2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgLnRyaW0oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG4gcmVtb3ZlLWNvbmNlcnQtYnRuXCI+RGVsZXRlIENvbmNlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Zlci1nb2xkXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgVUlTZWxlY3RvcnMueW91ckNvbmNlcnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmNlcnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGNvbmNlcnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25jZXJ0Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdzZWFyY2gtcmVzdWx0JztcclxuICAgICAgICBjb25jZXJ0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb25jZXJ0LWlkLW51bVwiPiR7Y29uY2VydC5pZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJjb25jZXJ0LW5hbWVcIiBpZD1cImNvbmNlcnQtbmFtZVwiPiAke2NvbmNlcnQudGl0bGVcclxuICAgICAgICAgIH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7Y29uY2VydC5waWVjZXNcclxuICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpbnktcGllY2UtdGl0bGVcIj4gPHN0cm9uZz4gJHtpdGVtLmNvbXBvc2VyfTwvc3Ryb25nPiAke2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYC50cmltKClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuam9pbignJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0biByZW1vdmUtY29uY2VydC1idG5cIj5EZWxldGUgQ29uY2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdmVyLWdvbGQgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgVUlTZWxlY3RvcnMuZnVsbENvbmNlcnRzR3JpZC5hcHBlbmRDaGlsZChjb25jZXJ0Q29udGFpbmVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgVUkucmVtb3ZlQ29uY2VydExpc3RlbmVycyhVSVNlbGVjdG9ycy5mdWxsQ29uY2VydHNHcmlkKTtcclxuICAgIFVJLnJlbW92ZUNvbmNlcnRMaXN0ZW5lcnMoVUlTZWxlY3RvcnMueW91ckNvbmNlcnRzQ29udGFpbmVyKTtcclxuXHJcbiAgICAvL1RISVMgSVMgVEhFIENPUlJFQ1QgQlJBQ0tFVCBGVUNLIEVTTElOVCBBTkQgUFJFVFRJRVIuXHJcbiAgfVxyXG5cclxuICB1cGRhdGVIb3Zlckxpc3RlbmVycygpIHtcclxuICAgIGxldCBzZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1yZXN1bHQnKTtcclxuXHJcbiAgICBbLi4uc2VhcmNoUmVzdWx0c10uZm9yRWFjaCgocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgVUkuc2hvd0dvbGRVbmRlcmxpbmUpO1xyXG4gICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFVJLmhpZGVHb2xkVW5kZXJsaW5lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ29uY2VydExpc3RlbmVycyhjb250YWluZXIpIHtcclxuICAgIGxldCBjb25jZXJ0c0xpc3QgPSBjb250YWluZXIuY2hpbGRyZW47XHJcblxyXG4gICAgWy4uLmNvbmNlcnRzTGlzdF0uZm9yRWFjaCgoY29uY2VydCkgPT4ge1xyXG4gICAgICBpZiAoIWNvbmNlcnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1jb25jZXJ0LWJ0bicpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbmNlcnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWNvbmNlcnQtYnRuJylcclxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmRlbGV0ZUNvbmNlcnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNvbmNlcnQoZSkge1xyXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgIGxldCBzZWxlY3RlZENvbmNlcnRJRCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5jb25jZXJ0LWlkLW51bSdcclxuICAgICk7XHJcbiAgICAvL1NXSVRDSCBUTyBTVE9SQUdFIEZVTkNUSU9OXHJcbiAgICBsZXQgZGVsZXRlQ29uY2VydFVzZXIgPSBTdG9yYWdlLmdldFVzZXIoKTtcclxuICAgIGRlbGV0ZUNvbmNlcnRVc2VyLmNvbmNlcnRzLmZvckVhY2goKGNvbmNlcnQsIGluZGV4LCBvYmplY3QpID0+IHtcclxuXHJcbiAgICAgIGlmIChjb25jZXJ0LmlkID09PSBOdW1iZXIoc2VsZWN0ZWRDb25jZXJ0SUQudGV4dENvbnRlbnQpKSB7XHJcbiAgICAgICAgb2JqZWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vU1RPUkFHRSBGVU5DVElPTlxyXG4gICAgU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgZGVsZXRlQ29uY2VydFVzZXIpO1xyXG5cclxuICB9XHJcblxyXG4gIC8vV2hlcmUgdG8gY2FsbCB0aGlzP1xyXG4gIHNob3J0ZW5QaWVjZVRpdGxlKHBpZWNlTmFtZXMpIHtcclxuICAgIHBpZWNlTmFtZXMuZm9yRWFjaCgocGllY2UpID0+IHtcclxuICAgICAgbGV0IHBpZWNlVGl0bGVMZW5ndGggPSBwaWVjZS50ZXh0Q29udGVudC5zbGljZSgwLCAyMCkgKyAnLi4uJztcclxuICAgICAgcGllY2UudGV4dENvbnRlbnQgPSBwaWVjZVRpdGxlTGVuZ3RoO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93R29sZFVuZGVybGluZShlKSB7XHJcbiAgICBpZiAoIWUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5ob3Zlci1nb2xkJykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS50YXJnZXQucXVlcnlTZWxlY3RvcignLmhvdmVyLWdvbGQnKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlR29sZFVuZGVybGluZShlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQucXVlcnlTZWxlY3RvcignLmhvdmVyLWdvbGQnKSkge1xyXG4gICAgICBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuaG92ZXItZ29sZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgaG9tZUNhcmRFbnRlcihjb250YWluZXIpIHtcclxuICAgIGNvbnN0IGZ1bGxGYXZvcml0ZXNHcmlkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLWZhdm9yaXRlcy1ncmlkJyk7XHJcbiAgICBjb25zdCBmdWxsQ29uY2VydHNHcmlkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLWNvbmNlcnRzLWdyaWQnKTtcclxuXHJcbiAgICBmdWxsRmF2b3JpdGVzR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZnVsbENvbmNlcnRzR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIFsuLi5jb250YWluZXIuY2hpbGRyZW5dLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQgPT09IGZ1bGxGYXZvcml0ZXNHcmlkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0WzBdID09PSAnaGVhZGVyLXJvdycpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1tb3JlLWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID09PSAxICYmXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3RbMF0gPT09ICdzZWFyY2gtcmVzdWx0cydcclxuICAgICAgKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0WzFdID09PSAneW91ci1yZWNlbnQtY29uY2VydHMnKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0WzFdID09PSAnZnVsbC1jb25jZXJ0cy1ncmlkJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25jZXJ0c0VudGVyKGNvbnRhaW5lcikge1xyXG4gICAgY29uc3QgZnVsbENvbmNlcnRzR3JpZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnNlYXJjaC1yZXN1bHRzLmZ1bGwtY29uY2VydHMtZ3JpZCdcclxuICAgICk7XHJcblxyXG4gICAgZnVsbENvbmNlcnRzR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG5cclxuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXJvdy5jb25jZXJ0cy1oZWFkZXItcm93Jykuc3R5bGUuZGlzcGxheSA9XHJcbiAgICAgICdmbGV4JztcclxuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmhlYWRlci1yb3cuY29uY2VydHMtaGVhZGVyLXJvdyAudmlldy1tb3JlLWJ0bidcclxuICAgICkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vQ2hhbmdlIHRoaXNcclxuICAgIGxldCBjdXJyZW50VXNlciA9IFN0b3JhZ2UuZ2V0VXNlcigpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG5cclxuICAgIFVJLmRpc3BsYXlDb25jZXJ0cyhjdXJyZW50VXNlciwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZmF2b3JpdGVzRW50ZXIoY29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBmdWxsRmF2b3JpdGVzR3JpZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZnVsbC1mYXZvcml0ZXMtZ3JpZCcpO1xyXG4gICAgZnVsbEZhdm9yaXRlc0dyaWQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItcm93Jykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItcm93IC52aWV3LW1vcmUtYnRuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFsuLi5mdWxsRmF2b3JpdGVzR3JpZC5jaGlsZHJlbl0uZm9yRWFjaCgoZmF2b3JpdGUpID0+IHtcclxuICAgICAgaWYgKGZhdm9yaXRlLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlci1uYW1lJykudGV4dENvbnRlbnQubGVuZ3RoID49IDE4KSB7XHJcbiAgICAgICAgZmF2b3JpdGUucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyLW5hbWUnKS5zdHlsZS5mb250U2l6ZSA9ICcxLjJyZW0nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVzdWx0c0V4aXQoZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnZnJvbSByZXN1bHRzIGV4aXQnLCBlLnRhcmdldC5pZCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRyb3BEb3duWW91ckNvbmNlcnRzLmlkKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIuY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFsuLi5VSVNlbGVjdG9ycy5tYWluQ29udGVudElubmVyLmNoaWxkcmVuXS5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9KTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmUnKTtcclxuICAgICAgaWYgKGUudGFyZ2V0ID09PSBVSVNlbGVjdG9ycy5yZXR1cm5Ib21lKSB7XHJcbiAgICAgICAgLy9DaGFuZ2UgdGhpc1xyXG4gICAgICAgIFVJLmhvbWVDYXJkRW50ZXIoVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lcik7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IFVJU2VsZWN0b3JzLm9wZW5Qcm9maWxlKSB7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgZS50YXJnZXQgPT09IFVJU2VsZWN0b3JzLm9wZW5GYXZvcml0ZXMgfHxcclxuICAgICAgICAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29uY2VydC12aWV3LW1vcmUtYnRuJykgJiZcclxuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndmlldy1tb3JlLWJ0bicpKVxyXG4gICAgICApIHtcclxuICAgICAgICBVSS5mYXZvcml0ZXNFbnRlcihVSVNlbGVjdG9ycy5tYWluQ29udGVudElubmVyKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBlLnRhcmdldCA9PT0gVUlTZWxlY3RvcnMub3BlbkNvbmNlcnRzIHx8XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb25jZXJ0LXZpZXctbW9yZS1idG4nKSB8fFxyXG4gICAgICAgIGUudGFyZ2V0LmlkID09PSBVSVNlbGVjdG9ycy5kcm9wRG93bllvdXJDb25jZXJ0cy5pZFxyXG4gICAgICApIHtcclxuICAgICAgICBVSS5jb25jZXJ0c0VudGVyKFVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxNTAwKTtcclxuICB9XHJcblxyXG4gIC8vU2hvcnRlbiBQaWVjZSB0aXRsZSBpZiBuZWNlc3NhcnlcclxuICBmb3JtYXRSZXN1bHRzQ2FyZCgpIHtcclxuICAgIGNvbnN0IHBpZWNlTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGllY2UtbmFtZScpO1xyXG4gICAgcGllY2VOYW1lcy5mb3JFYWNoKChwaWVjZSkgPT4ge1xyXG4gICAgICBsZXQgcGllY2VUaXRsZUxlbmd0aCA9IHBpZWNlLnRleHRDb250ZW50LnNsaWNlKDAsIDMwKSArICcuLi4nO1xyXG4gICAgICBwaWVjZS50ZXh0Q29udGVudCA9IHBpZWNlVGl0bGVMZW5ndGg7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vQ2xlYXIgQ29tcG9zZXIgU2VhcmNoIFJlc3VsdHNcclxuICBjbGVhckNvbXBvc2VyTGlua3MoKSB7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuc2VhcmNoRmllbGQudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHdoaWxlIChVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLnJlbW92ZUNoaWxkKFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MuZmlyc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAoVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5maXJzdENoaWxkKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MucmVtb3ZlQ2hpbGQoVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvL0NPTVBPU0VSIFBBR0VcclxuICBjbGVhckNvbXBvc2VyUmVzdWx0cygpIHtcclxuICAgIFVJU2VsZWN0b3JzLnBpZWNlRGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIHNob3dCdXR0b25FcnJvcihidXR0b24sIG1lc3NhZ2UpIHtcclxuICAgIGxldCBpbml0YWxUZXh0ID0gYnV0dG9uLnRleHRDb250ZW50O1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgJHttZXNzYWdlfWA7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSBpbml0YWxUZXh0XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFBpZWNlSW50b1ZpZXcoKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5waWVjZURldGFpbHNDb250YWluZXIuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVSSA9IG5ldyBVaSgpO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYnJvd3NlLWNvbXBvc2Vycy1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb21wb3Nlci1sZXR0ZXItY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIC5jb21wb3Nlci1sZXR0ZXItY29udGFpbmVyIGxpIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbXBvc2VyLWxldHRlci1jb250YWluZXIgbGk6aG92ZXIge1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tcG9zZXItYnJvd3NlLXJlc3VsdC1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNzAlO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLXJlc3VsdC1saXN0ID4gcCB7XFxyXFxuICAgICAgY29sb3I6ICMwMDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb2x1bW4ge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29sdW1uIHB7XFxyXFxuICAgICAgY29sb3I6ICMwMDA7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2x1bW4gcDpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA3NjlweCkge1xcclxcblxcclxcbiAgLmJyb3dzZS1jb21wb3NlcnMtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbXBvc2VyLWxldHRlci1jb250YWluZXIge1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGhlaWdodDogNDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiAzNzZweCkge1xcclxcbiAgLmNvbXBvc2VyLWxldHRlci1jb250YWluZXIge1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGhlaWdodDogMzAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbHVtbiB7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXBwL3N0YXRpYy9jc3MvYnJvd3NlX2NvbXBvc2Vycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7OztFQUdBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXOztFQUViOztFQUVBO01BQ0ksV0FBVztFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakI7O0VBRUE7TUFDSSxXQUFXO01BQ1gsU0FBUztNQUNULGlCQUFpQjtNQUNqQixlQUFlO0VBQ25COztFQUVBO01BQ0ksc0JBQXNCO0VBQzFCOzs7QUFHRjs7RUFFRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5icm93c2UtY29tcG9zZXJzLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbXBvc2VyLWxldHRlci1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbiAgLmNvbXBvc2VyLWxldHRlci1jb250YWluZXIgbGkge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tcG9zZXItbGV0dGVyLWNvbnRhaW5lciBsaTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb21wb3Nlci1icm93c2UtcmVzdWx0LWxpc3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA3MCU7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItcmVzdWx0LWxpc3QgPiBwIHtcXHJcXG4gICAgICBjb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbHVtbiB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2x1bW4gcHtcXHJcXG4gICAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbHVtbiBwOmhvdmVyIHtcXHJcXG4gICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDc2OXB4KSB7XFxyXFxuXFxyXFxuICAuYnJvd3NlLWNvbXBvc2Vycy1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tcG9zZXItbGV0dGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgaGVpZ2h0OiA0MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDM3NnB4KSB7XFxyXFxuICAuY29tcG9zZXItbGV0dGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgaGVpZ2h0OiAzMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29sdW1uIHtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5sb2dnZWQtaW4gaW1nIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICB0b3A6IDEwJTtcXHJcXG4gIHJpZ2h0OiA1JTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IGxpIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIC8qbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICovXFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIFxcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2QyMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYS1pbm5lciB7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhLWlubmVyLnJlbW92ZSB7XFxyXFxuICBhbmltYXRpb246IDFzIHJlbW92ZS1tYWluO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmVtb3ZlLW1haW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cywgLnlvdXItcmVjZW50LWNvbmNlcnRzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cy51c2VyLXByb2ZpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC5jb21wb3Nlci1uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC5jb25jZXJ0LW5hbWUge1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC50aW55LXBpZWNlLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC5sZWF2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cy5mdWxsLWZhdm9yaXRlcy1ncmlkLCAuc2VhcmNoLXJlc3VsdHMuZnVsbC1jb25jZXJ0cy1ncmlkIHtcXHJcXG4gIFxcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbC1mYXZvcml0ZXMtZ3JpZC5hbmltYXRlIHtcXHJcXG4gICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXItZ29sZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IC41cmVtO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5ob3Zlci1nb2xkLnNob3cge1xcclxcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcmlnaHQ6IDIwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8tcGxheWVyLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLnZpc2l0LXBhZ2Uge1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29uY2VydC1pZC1udW0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdXNlcm5hbWUgIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5yZW1vdmUtY29uY2VydC1idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0MzAyYjtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ueW91ci1yZWNlbnQtY29uY2VydHMuaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eXtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LWhlaWdodDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb25jZXJ0LW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAuNXJlbTs7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jb250ZW50LWFyZWEtaW5uZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtbW9iaWxlLWljb25zIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlZnQtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJpbWFyeS1idG4ucmVtb3ZlLWNvbmNlcnQtYnRuIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hcHAvc3RhdGljL2Nzcy9ob21lcGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixPQUFPO0VBQ1As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eSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nZ2VkLWluIGltZyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1yaWdodCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgdG9wOiAxMCU7XFxyXFxuICByaWdodDogNSU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSBsaSB7XFxyXFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAvKm1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgXFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyBsaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWNkMjE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50LWFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50LWFyZWEtaW5uZXIge1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYS1pbm5lci5yZW1vdmUge1xcclxcbiAgYW5pbWF0aW9uOiAxcyByZW1vdmUtbWFpbjtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJlbW92ZS1tYWluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyBpIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMsIC55b3VyLXJlY2VudC1jb25jZXJ0cyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWdhcDogMjBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMudXNlci1wcm9maWxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAuY29tcG9zZXItbmFtZSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAuY29uY2VydC1uYW1lIHtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAudGlueS1waWVjZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQubGVhdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMuZnVsbC1mYXZvcml0ZXMtZ3JpZCwgLnNlYXJjaC1yZXN1bHRzLmZ1bGwtY29uY2VydHMtZ3JpZCB7XFxyXFxuICBcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmZ1bGwtZmF2b3JpdGVzLWdyaWQuYW5pbWF0ZSB7XFxyXFxuICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyLWdvbGQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAuNXJlbTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXItZ29sZC5zaG93IHtcXHJcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHJpZ2h0OiAyMCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLXBsYXllci1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi52aXNpdC1wYWdlIHtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbmNlcnQtaWQtbnVtIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXVzZXJuYW1lICB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4ucmVtb3ZlLWNvbmNlcnQtYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNDMwMmI7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnlvdXItcmVjZW50LWNvbmNlcnRzLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG9wYWNpdHl7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29uY2VydC1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbjogLjVyZW07O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY29udGVudC1hcmVhLWlubmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLW1vYmlsZS1pY29ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZWZ0LW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByaW1hcnktYnRuLnJlbW92ZS1jb25jZXJ0LWJ0biB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZDogIzQyNTdiMjtcXHJcXG4gICAgLS1oZXJvLWJhY2tncm91bmQ6ICMzYjRjOWI7XFxyXFxuICAgIC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZDogIzNjY2ZjZjtcXHJcXG4gICAgLS1tYWluLWJhY2tncm91bmQ6ICNmNmY3ZmI7XFxyXFxuICAgIC0tZ29sZDogI2ZhY2QyMTtcXHJcXG4gICAgLS1kZWZhdWx0LXNoYWRvdzogMHB4IDEzcHggMjZweCAjMDAwMDAwMkY7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzJlY2M3MTtcXHJcXG4gICAgLS1lcnJvci1jb2xvcjogI2U3NGMzYztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sYW5kaW5nLW5hdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5sYW5kaW5nLW5hdiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaXRlLXRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIGEsIC5zaXRlLXRpdGxlIGEge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIGE6aG92ZXIsIC5uYXYtcmlnaHQgbGkgYTpob3ZlciwgLnNpdGUtdGl0bGUgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDE4OSwgMTk1LCAxOTksIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSBhID4gKiB7XFxyXFxuICAgIG1hcmdpbjogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1yaWdodCBsaSB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1tb2JpbGUtaWNvbnMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1vdmVybGF5IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdG9wOiA4JTtcXHJcXG4gICAgLypsZWZ0OiAyNiU7Ki9cXHJcXG4gICAgcmlnaHQ6IDIwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93bjpob3ZlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd24gcDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duIC5wcmltYXJ5LWJ0biB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItZmllbGQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLWZpZWxkOmludmFsaWQge1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS5mYS10aW1lcy5jbG9zZS1zZWFyY2gge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1pY29uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhlcm8tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlcm8tYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lci1sZWZ0IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGV4dC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5nZXQtc3RhcnRlZC1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZWFjaGVyLXBhcmVudC1saW5rcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50ZWFjaGVyLXBhcmVudC1saW5rcyBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jYXJvdXNlbC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsIHtcXHJcXG4gICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jYXJvdXNlbCBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBmaWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtZGVzY3JpcHRpb24ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICAgIC8qIENTUyBjaGFuZ2UgaW4gSlMgKi9cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiBncmV5O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC8qIENoYW5nZSBmbGV4L25vbmUgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtY29udGFpbmVyID4gaSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50aGlyZC1wYXJ0eS1idXR0b25zIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnktYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnktYnRuIGltZyB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnktYnRuIHAge1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0ge1xcclxcblxcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gICAgcGFkZGluZzogLjc1cmVtIDJyZW0gLjc1cmVtIC4zcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgYm9yZGVyOiAycHggZ3JleSBzb2xpZDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jY2xvc2Utc2lnbi1pbiwgI2Nsb3NlLXNpZ24tdXAge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iaXJ0aGRheS1zZWxlY3RvciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZmllbGQgbGFiZWwge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgIFxcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjb2xvcjogI2MyYzZkNDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZCBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5zdWNjZXNzIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLmVycm9yIGlucHV0ICB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5lcnJvciBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufSBcXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5lcnJvci10ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLmVycm9yIC5lcnJvci10ZXh0IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZ2lzdGVyLWJ0biwgLmxvZ2luLWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZ2lzdGVyLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmM2ZDQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWJ0biBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxNSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGgxIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogLjUwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1hcmVhIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tYnV0dG9ucyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1idXR0b25zIC5zZWNvbmRhcnktYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIHAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDYyJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuc3VjY2VzcyBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5zdWNjZXNzIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5lcnJvciBpbnB1dCAge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLmVycm9yIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59IFxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5lcnJvci10ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG4gICAgLyp2aXNpYmlsaXR5OiBoaWRkZW47Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLmJpZy1sb2dpbi1idG4ge1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Jyb3dzZS1tb2RhbCB7XFxyXFxuICAgIC8qIENIQU5HRSBXSVRIIEpBVkFTQ0lQVCAqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5icm93c2UtbW9kYWwtYXJlYSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgXFxyXFxuICAgIC8qdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7Ki9cXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJyb3dzZS1tb2RhbC1hcmVhLnNob3cge1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5icm93c2UtaGVhZGVyIGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5icm93c2UtaGVhZGVyIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1jb21wb3NlcnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAvKiBtYXgtaGVpZ2h0OiAxMDAlOyAqL1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlciBoMSAge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXItY29tcG9zZXJzIHtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbS1jb21wb3Nlci1saW5rcyBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZXJvLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sYW5kaW5nLW5hdiB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2LWxlZnQge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmlnaHQtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICAgICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9iaWxlLXNlYXJjaC1pY29uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgICAgICBsZWZ0OiAyMCU7XFxyXFxuICAgICAgICB0b3A6IDcuNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJyb3dzZS1tb2RhbC1hcmVhIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xcclxcbiAgICBcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICAvKlxcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICovXFxyXFxuICAgICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xcclxcbiAgICAgICAgZmxleDogMTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmlnaHQtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYtcmlnaHQge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgICAgIC8qIHRvcDogOSU7ICovXFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDA7ICAgIFxcclxcbiAgICBcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGhpcmQtcGFydHktYnV0dG9ucyB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRoaXJkLXBhcnR5LWJ1dHRvbnMgLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuc2VsZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtZm9ybSBsYWJlbCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC4zcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtLWZpZWxkIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcmltYXJ5LWJ0bi5yZWdpc3Rlci1idG4sIC5wcmltYXJ5LWJ0bi5sb2dpbi1idG4ge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlYXJjaC1iYXItb3ZlcmxheSB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLXJlc3VsdC1kb3duIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJyb3dzZS1tb2RhbC1hcmVhIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2FwcC9zdGF0aWMvY3NzL2xhbmRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDBC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UUFDUCxlQUFlO1FBQ2YsMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksU0FBUztRQUNULFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxPQUFPOztJQUVYOzs7SUFHQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsY0FBYztJQUNsQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFFBQVE7SUFDWjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kOiAjNDI1N2IyO1xcclxcbiAgICAtLWhlcm8tYmFja2dyb3VuZDogIzNiNGM5YjtcXHJcXG4gICAgLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kOiAjM2NjZmNmO1xcclxcbiAgICAtLW1haW4tYmFja2dyb3VuZDogI2Y2ZjdmYjtcXHJcXG4gICAgLS1nb2xkOiAjZmFjZDIxO1xcclxcbiAgICAtLWRlZmF1bHQtc2hhZG93OiAwcHggMTNweCAyNnB4ICMwMDAwMDAyRjtcXHJcXG4gICAgLS1zdWNjZXNzLWNvbG9yOiAjMmVjYzcxO1xcclxcbiAgICAtLWVycm9yLWNvbG9yOiAjZTc0YzNjO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctbmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctbmF2IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtdGl0bGUge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYSwgLnNpdGUtdGl0bGUgYSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYTpob3ZlciwgLm5hdi1yaWdodCBsaSBhOmhvdmVyLCAuc2l0ZS10aXRsZSBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMTg5LCAxOTUsIDE5OSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIGEgPiAqIHtcXHJcXG4gICAgbWFyZ2luOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IGxpIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lLW1vYmlsZS1pY29ucyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLW92ZXJsYXkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0b3A6IDglO1xcclxcbiAgICAvKmxlZnQ6IDI2JTsqL1xcclxcbiAgICByaWdodDogMjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd24gLnByaW1hcnktYnRuIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1maWVsZCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItZmllbGQ6aW52YWxpZCB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLmZhLXRpbWVzLmNsb3NlLXNlYXJjaCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVyby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVyby1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyLWxlZnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLmdldC1zdGFydGVkLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYWNoZXItcGFyZW50LWxpbmtzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYWNoZXItcGFyZW50LWxpbmtzIGEge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwge1xcclxcbiAgICBoZWlnaHQ6IDc1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsIGltZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgLyogQ1NTIGNoYW5nZSBpbiBKUyAqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6IGdyZXk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLyogQ2hhbmdlIGZsZXgvbm9uZSAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIgPiBpIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoaXJkLXBhcnR5LWJ1dHRvbnMge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4gaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4gcCB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSB7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgICBwYWRkaW5nOiAuNzVyZW0gMnJlbSAuNzVyZW0gLjNyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICBib3JkZXI6IDJweCBncmV5IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNjbG9zZS1zaWduLWluLCAjY2xvc2Utc2lnbi11cCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpcnRoZGF5LXNlbGVjdG9yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCBsYWJlbCB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiAjYzJjNmQ0O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuc3VjY2VzcyBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgaW5wdXQgIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLmVycm9yIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59IFxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmVycm9yLXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgLmVycm9yLXRleHQge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBmb250LXNpemU6IC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0ZXItYnRuLCAubG9naW4tYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0ZXItYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzZkNDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnRuIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDE1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaDEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAuNTByZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWFyZWEge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1idXR0b25zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbnMgLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogNjIlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5zdWNjZXNzIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLmVycm9yIGlucHV0ICB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuZXJyb3IgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmVycm9yLXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbiAgICAvKnZpc2liaWxpdHk6IGhpZGRlbjsqL1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uYmlnLWxvZ2luLWJ0biB7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYnJvd3NlLW1vZGFsIHtcXHJcXG4gICAgLyogQ0hBTkdFIFdJVEggSkFWQVNDSVBUICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1tb2RhbC1hcmVhIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICBcXHJcXG4gICAgLyp0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsqL1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnJvd3NlLW1vZGFsLWFyZWEuc2hvdyB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJyb3dzZS1oZWFkZXIgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1oZWFkZXIge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLWNvbXBvc2VycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8qIG1heC1oZWlnaHQ6IDEwMCU7ICovXFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyIGgxICB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlci1jb21wb3NlcnMge1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFuZG9tLWNvbXBvc2VyLWxpbmtzIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlcm8tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxhbmRpbmctbmF2IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXYtbGVmdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICB3aWR0aDogMzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb2JpbGUtc2VhcmNoLWljb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogOTAlO1xcclxcbiAgICAgICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgICAgIGxlZnQ6IDIwJTtcXHJcXG4gICAgICAgIHRvcDogNy41JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICAgIFxcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIC8qXFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgKi9cXHJcXG4gICAgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdi1yaWdodCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICAgICAgLyogdG9wOiA5JTsgKi9cXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbGVmdDogMDsgICAgXFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aGlyZC1wYXJ0eS1idXR0b25zIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGhpcmQtcGFydHktYnV0dG9ucyAuc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgICAgICBtYXJnaW46IC41cmVtIDA7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5zZWxlY3QtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbi11cC1mb3JtIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLjNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tZmllbGQge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByaW1hcnktYnRuLnJlZ2lzdGVyLWJ0biwgLnByaW1hcnktYnRuLmxvZ2luLWJ0biB7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLWJhci1vdmVybGF5IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtcmVzdWx0LWRvd24gcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==