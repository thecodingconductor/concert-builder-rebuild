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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/static/js-modules/main/homepage.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./app/static/js-modules/main/homepage.js":
/*!************************************************!*\
  !*** ./app/static/js-modules/main/homepage.js ***!
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
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/storage */ "./app/static/js-modules/modules/storage.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/ui */ "./app/static/js-modules/modules/ui.js");
/* harmony import */ var _modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/UISelectors */ "./app/static/js-modules/modules/UISelectors.js");
/* harmony import */ var _css_landing_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../css/landing.css */ "./app/static/css/landing.css");
/* harmony import */ var _css_landing_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_landing_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_homepage_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../css/homepage.css */ "./app/static/css/homepage.css");
/* harmony import */ var _css_homepage_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_homepage_css__WEBPACK_IMPORTED_MODULE_9__);













window.addEventListener('DOMContentLoaded', _modules_app__WEBPACK_IMPORTED_MODULE_0__["App"].initBase);

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].dropDownYourConcerts.addEventListener('click', (e) => {
  _modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].dropDownMenu.style.display = 'none';
  _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].resultsExit(e);
  _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].concertsEnter(_modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].mainContentInner);
});

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].viewMore.forEach((link) => {
  link.addEventListener('click', _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].resultsExit);
});

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].openLinks.forEach((link) => {
  link.addEventListener('click', _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].resultsExit);
});

window.addEventListener('DOMContentLoaded', _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].formatResultsCard);
window.addEventListener('DOMContentLoaded', () => {
  let searchResults = document.querySelectorAll('.search-result');
  [...searchResults].forEach((result) => {
    //console.log(result);
    result.addEventListener('mouseover', _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].showGoldUnderline);
    result.addEventListener('mouseleave', _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].hideGoldUnderline);
  });
});

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].openBrowse.addEventListener('click', _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].showBrowse);
[..._modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].createConcertBtns].forEach((btn) => {
  btn.addEventListener('click', _modules_app__WEBPACK_IMPORTED_MODULE_0__["App"].createConcertFunction);
});

//LOAD CONCERTS!!
window.addEventListener('DOMContentLoaded', _modules_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"].createUser)



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
                  <p>${pieceComposerNationality.textContent}</p>
                  <p>${pieceComposerDates.textContent}</p>
                  
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
      // console.log(res);
      // console.log(typeof res);
      // console.log(typeof res.composers)
      let compArray = JSON.parse(res.composers);
      // console.log(compArray);

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

    console.log('open current letter');
    if (!window.location.href.includes('browse_composers')) {
      window.location.href = '/browse_composers';
    }

    let targetTag = e.target.tagName.trim();

    if (targetTag === 'LI') {
      let composerLetter = e.target.textContent;
      let data = { letter: composerLetter };

      console.log(data);

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
    } else {
      return false;
    }
  }


  //   if(targetTag !== 'LI' || targetTag !== 'H1') {
  //   console.log(e.target);
  //   console.log(e.target.tagName);
  //   return false;
  // } else if (targetTag === 'LI') {

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

    _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].pieceList.forEach((piece) => {
      if (piece.classList.contains('selected')) {
        piece.classList.remove('selected');
      }
    });

    let selectedPiece = e.target;
    selectedPiece.classList.add('selected');
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

              // console.log(comment.author, comment.body, comment.timestamp);

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

  // testImport() {
  //   console.log(UISelectors.siteTitle);
  // }

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
    }, 300);

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
___CSS_LOADER_EXPORT___.push([module.i, "body {\r\n  overflow: hidden;\r\n}\r\n\r\n.logged-in img {\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.nav-right {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-menu {\r\n  display: none;\r\n  position: absolute;\r\n  background: #fff;\r\n  top: 10%;\r\n  right: 5%;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  z-index: 999;\r\n}\r\n\r\n.dropdown-menu li {\r\n  margin: 1rem 2rem;\r\n}\r\n\r\n.dropdown-menu li a {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n.main-container {\r\n  width: 85%;\r\n  flex: 1;\r\n  display: flex;\r\n  max-height: 100%;\r\n  /*margin-bottom: 3rem;\r\n  */\r\n}\r\n\r\n.left-menu {\r\n  height: 100%;\r\n  width: 25%;\r\n  background-color: #fff;\r\n  \r\n  box-shadow: var(--default-shadow);\r\n}\r\n\r\n.left-menu-items {\r\n  list-style-type: none;\r\n  margin-left: 0;\r\n  \r\n  padding-left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n\r\n\r\n.left-menu-items li {\r\n    padding: 20px 0;\r\n}\r\n\r\n.left-menu-items li:hover {\r\n    background-color: #facd21;\r\n    cursor: pointer;\r\n}\r\n\r\n.left-menu-items li a {\r\n  text-decoration: none;\r\n  color: #000;\r\n  padding-left: 20px;\r\n}\r\n\r\n.main-content-area {\r\n  height: 100%;\r\n  flex: 1;\r\n  \r\n}\r\n\r\n.main-content-area-inner {\r\n  height: 90%;\r\n  max-height: 90%;\r\n  overflow: hidden;\r\n  width: 90%;\r\n  margin: auto;\r\n  color: #000;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  \r\n\r\n}\r\n\r\n.main-content-area-inner.remove {\r\n  animation: .1s remove-main;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes remove-main {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    \r\n  }\r\n}\r\n\r\n.header-row {\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: space-between;\r\n    align-self: stretch;\r\n    \r\n}\r\n\r\n.header-row a {\r\n    color: var(--primary-button-background);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header-row a:hover {\r\n  color: var(--gold);\r\n}\r\n\r\n.header-row i {\r\n  margin-left: 10px;\r\n}\r\n\r\n.search-results, .your-recent-concerts {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-gap: 20px;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n}\r\n\r\n\r\n\r\n.search-results.user-profile {\r\n  display: none;\r\n}\r\n\r\n.search-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  position: relative;\r\n  background-color: #fff;\r\n  border-radius: 0.25rem;\r\n  padding: 20px;\r\n  box-shadow: var(--default-shadow);\r\n  transition: transform .3s ease;\r\n}\r\n\r\n.search-result .composer-name {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.search-result .concert-name {\r\n  \r\n}\r\n\r\n.search-result .tiny-piece-title {\r\n  font-size: .75rem;\r\n}\r\n\r\n\r\n.search-result.leave {\r\n  transform: translateX(500%);\r\n}\r\n\r\n\r\n\r\n.search-results.full-favorites-grid, .search-results.full-concerts-grid {\r\n  \r\n  height: 100%;\r\n  max-height: 100%;\r\n  display: none;\r\n  opacity: 1;\r\n  animation: opacity .1s ease-in;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.full-favorites-grid.animate {\r\n   opacity: 1;\r\n}\r\n\r\n.hover-gold {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: .5rem;\r\n  \r\n}\r\n\r\n.hover-gold.show {\r\n  animation: opacity .5s ease-in-out;\r\n  background-color: var(--gold);\r\n}\r\n\r\n.composer-img {\r\n  position: absolute;\r\n  height: 60px;\r\n  width: 60px;\r\n  border-radius: 50%;\r\n  right: 20%;\r\n  top: 50%;\r\n}\r\n\r\n.audio-player-container {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 10%;\r\n  display: none;\r\n  bottom: 0;\r\n}\r\n\r\n.social-image {\r\n  height: 1rem;\r\n  width: 1rem;\r\n}\r\n\r\n.primary-btn.visit-page {\r\n  box-shadow: var(--default-shadow);\r\n}\r\n\r\n\r\n.concert-id-num {\r\n  display: none;\r\n}\r\n\r\n#current-username  {\r\n  display: none;\r\n}\r\n\r\n.primary-btn.remove-concert-btn {\r\n  cursor: pointer;\r\n  background-color: #c4302b;\r\n  \r\n}\r\n\r\n.your-recent-concerts.hide {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n@keyframes opacity{\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n@media(max-width: 768px) {\r\n\r\n\r\n  body {\r\n    overflow: auto;\r\n  }\r\n\r\n  .main-container {\r\n    max-height: none;\r\n  }\r\n\r\n  .concert-name {\r\n    font-size: 1.5rem;\r\n    margin: .5rem;;\r\n  }\r\n\r\n  .main-content-area-inner {\r\n    margin-bottom: 5rem;\r\n  }\r\n\r\n  .home-mobile-icons {\r\n    display: inline-block;\r\n  }\r\n\r\n  .left-menu {\r\n    display: none;\r\n  }\r\n\r\n  .primary-btn.remove-concert-btn {\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 426px) {\r\n  body {\r\n    height: auto;\r\n    overflow: auto;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://app/static/css/homepage.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  overflow: hidden;\r\n}\r\n\r\n.logged-in img {\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 50%;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.nav-right {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-menu {\r\n  display: none;\r\n  position: absolute;\r\n  background: #fff;\r\n  top: 10%;\r\n  right: 5%;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  z-index: 999;\r\n}\r\n\r\n.dropdown-menu li {\r\n  margin: 1rem 2rem;\r\n}\r\n\r\n.dropdown-menu li a {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n.main-container {\r\n  width: 85%;\r\n  flex: 1;\r\n  display: flex;\r\n  max-height: 100%;\r\n  /*margin-bottom: 3rem;\r\n  */\r\n}\r\n\r\n.left-menu {\r\n  height: 100%;\r\n  width: 25%;\r\n  background-color: #fff;\r\n  \r\n  box-shadow: var(--default-shadow);\r\n}\r\n\r\n.left-menu-items {\r\n  list-style-type: none;\r\n  margin-left: 0;\r\n  \r\n  padding-left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n\r\n\r\n.left-menu-items li {\r\n    padding: 20px 0;\r\n}\r\n\r\n.left-menu-items li:hover {\r\n    background-color: #facd21;\r\n    cursor: pointer;\r\n}\r\n\r\n.left-menu-items li a {\r\n  text-decoration: none;\r\n  color: #000;\r\n  padding-left: 20px;\r\n}\r\n\r\n.main-content-area {\r\n  height: 100%;\r\n  flex: 1;\r\n  \r\n}\r\n\r\n.main-content-area-inner {\r\n  height: 90%;\r\n  max-height: 90%;\r\n  overflow: hidden;\r\n  width: 90%;\r\n  margin: auto;\r\n  color: #000;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  \r\n\r\n}\r\n\r\n.main-content-area-inner.remove {\r\n  animation: .1s remove-main;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes remove-main {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    \r\n  }\r\n}\r\n\r\n.header-row {\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: space-between;\r\n    align-self: stretch;\r\n    \r\n}\r\n\r\n.header-row a {\r\n    color: var(--primary-button-background);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header-row a:hover {\r\n  color: var(--gold);\r\n}\r\n\r\n.header-row i {\r\n  margin-left: 10px;\r\n}\r\n\r\n.search-results, .your-recent-concerts {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-gap: 20px;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n}\r\n\r\n\r\n\r\n.search-results.user-profile {\r\n  display: none;\r\n}\r\n\r\n.search-result {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  position: relative;\r\n  background-color: #fff;\r\n  border-radius: 0.25rem;\r\n  padding: 20px;\r\n  box-shadow: var(--default-shadow);\r\n  transition: transform .3s ease;\r\n}\r\n\r\n.search-result .composer-name {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.search-result .concert-name {\r\n  \r\n}\r\n\r\n.search-result .tiny-piece-title {\r\n  font-size: .75rem;\r\n}\r\n\r\n\r\n.search-result.leave {\r\n  transform: translateX(500%);\r\n}\r\n\r\n\r\n\r\n.search-results.full-favorites-grid, .search-results.full-concerts-grid {\r\n  \r\n  height: 100%;\r\n  max-height: 100%;\r\n  display: none;\r\n  opacity: 1;\r\n  animation: opacity .1s ease-in;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.full-favorites-grid.animate {\r\n   opacity: 1;\r\n}\r\n\r\n.hover-gold {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: .5rem;\r\n  \r\n}\r\n\r\n.hover-gold.show {\r\n  animation: opacity .5s ease-in-out;\r\n  background-color: var(--gold);\r\n}\r\n\r\n.composer-img {\r\n  position: absolute;\r\n  height: 60px;\r\n  width: 60px;\r\n  border-radius: 50%;\r\n  right: 20%;\r\n  top: 50%;\r\n}\r\n\r\n.audio-player-container {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 10%;\r\n  display: none;\r\n  bottom: 0;\r\n}\r\n\r\n.social-image {\r\n  height: 1rem;\r\n  width: 1rem;\r\n}\r\n\r\n.primary-btn.visit-page {\r\n  box-shadow: var(--default-shadow);\r\n}\r\n\r\n\r\n.concert-id-num {\r\n  display: none;\r\n}\r\n\r\n#current-username  {\r\n  display: none;\r\n}\r\n\r\n.primary-btn.remove-concert-btn {\r\n  cursor: pointer;\r\n  background-color: #c4302b;\r\n  \r\n}\r\n\r\n.your-recent-concerts.hide {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n@keyframes opacity{\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n@media(max-width: 768px) {\r\n\r\n\r\n  body {\r\n    overflow: auto;\r\n  }\r\n\r\n  .main-container {\r\n    max-height: none;\r\n  }\r\n\r\n  .concert-name {\r\n    font-size: 1.5rem;\r\n    margin: .5rem;;\r\n  }\r\n\r\n  .main-content-area-inner {\r\n    margin-bottom: 5rem;\r\n  }\r\n\r\n  .home-mobile-icons {\r\n    display: inline-block;\r\n  }\r\n\r\n  .left-menu {\r\n    display: none;\r\n  }\r\n\r\n  .primary-btn.remove-concert-btn {\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 426px) {\r\n  body {\r\n    height: auto;\r\n    overflow: auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvaG9tZXBhZ2UuY3NzP2QxZWYiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvbGFuZGluZy5jc3M/ZmU1MiIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbWFpbi9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9VSVNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvaHR0cC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvc2Vzc2lvbk9iai5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvY3NzL2hvbWVwYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2Nzcy9sYW5kaW5nLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVj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LE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksZUFBZSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksU0FBUyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksU0FBUyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFV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LEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsU0FBUyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLFlBQVksS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFV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bWVwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbWFpbi9ob21lcGFnZS5qc1wiKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lcGFnZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYW5kaW5nLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi4vbW9kdWxlcy9hcHAnO1xyXG5pbXBvcnQgeyBGb3JtcyB9IGZyb20gJy4uL21vZHVsZXMvZm9ybXMnO1xyXG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnLi4vbW9kdWxlcy9odHRwJztcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi4vbW9kdWxlcy9uYXYnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0cyB9IGZyb20gJy4uL21vZHVsZXMvcmVxdWVzdHMnO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi4vbW9kdWxlcy9zdG9yYWdlJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuLi9tb2R1bGVzL3VpJztcclxuaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuLi9tb2R1bGVzL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IFwiLi4vLi4vY3NzL2xhbmRpbmcuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL2Nzcy9ob21lcGFnZS5jc3NcIjtcclxuXHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBBcHAuaW5pdEJhc2UpO1xyXG5cclxuVUlTZWxlY3RvcnMuZHJvcERvd25Zb3VyQ29uY2VydHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIFVJU2VsZWN0b3JzLmRyb3BEb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIFVJLnJlc3VsdHNFeGl0KGUpO1xyXG4gIFVJLmNvbmNlcnRzRW50ZXIoVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lcik7XHJcbn0pO1xyXG5cclxuVUlTZWxlY3RvcnMudmlld01vcmUuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5yZXN1bHRzRXhpdCk7XHJcbn0pO1xyXG5cclxuVUlTZWxlY3RvcnMub3BlbkxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkucmVzdWx0c0V4aXQpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkuZm9ybWF0UmVzdWx0c0NhcmQpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBsZXQgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtcmVzdWx0Jyk7XHJcbiAgWy4uLnNlYXJjaFJlc3VsdHNdLmZvckVhY2goKHJlc3VsdCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIFVJLnNob3dHb2xkVW5kZXJsaW5lKTtcclxuICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgVUkuaGlkZUdvbGRVbmRlcmxpbmUpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcblVJU2VsZWN0b3JzLm9wZW5Ccm93c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zaG93QnJvd3NlKTtcclxuWy4uLlVJU2VsZWN0b3JzLmNyZWF0ZUNvbmNlcnRCdG5zXS5mb3JFYWNoKChidG4pID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBcHAuY3JlYXRlQ29uY2VydEZ1bmN0aW9uKTtcclxufSk7XHJcblxyXG4vL0xPQUQgQ09OQ0VSVFMhIVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFN0b3JhZ2UuY3JlYXRlVXNlcilcclxuXHJcbiIsImNsYXNzIFVpU2VsZWN0b3JzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2l0ZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtdGl0bGUnKTtcclxuICAgIHRoaXMubG9nSW5OYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tbmF2Jyk7XHJcbiAgICB0aGlzLnNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWJ0bicpO1xyXG5cclxuICAgIHRoaXMuc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xyXG4gICAgdGhpcy5vcGVuQ29uY2VydEJ1aWxkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlJyk7XHJcblxyXG4gICAgdGhpcy5vcGVuTW9iaWxlU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tbW9iaWxlLXNlYXJjaCcpO1xyXG4gICAgdGhpcy5vcGVuTW9iaWxlQnJvd3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tbW9iaWxlLWJyb3dzZScpO1xyXG4gICAgdGhpcy5yaWdodE5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1uYXYtY29udGFpbmVyJyk7XHJcblxyXG4gICAgdGhpcy5nZXRTdGFydGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1zdGFydGVkLWJ0bicpO1xyXG4gICAgLy9Ccm93c2UgTW9kYWxcclxuICAgIHRoaXMuYnJvd3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jyb3dzZScpO1xyXG4gICAgdGhpcy5icm93c2VNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicm93c2UtbW9kYWwnKTtcclxuICAgIHRoaXMuYnJvd3NlTW9kYWxBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jyb3dzZS1tb2RhbC1hcmVhJyk7XHJcbiAgICB0aGlzLmNsb3NlQnJvd3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWJyb3dzZScpO1xyXG4gICAgdGhpcy5icm93c2VDb21wb3NlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3NlLWNvbXBvc2VycycpO1xyXG5cclxuICAgIC8vRHluYW1pYyBTZWFyY2ggUmVzdWx0IEVsZW1lbnRzXHJcbiAgICB0aGlzLnNlYXJjaEJhck92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhci1vdmVybGF5Jyk7XHJcbiAgICB0aGlzLmNsb3NlU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXNlYXJjaCcpO1xyXG4gICAgdGhpcy5zZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyLWZpZWxkJyk7XHJcbiAgICB0aGlzLnNlYXJjaEJhclJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhci1yZXN1bHRzJyk7XHJcblxyXG4gICAgLy9Mb2dpbiBhbmQgU2lnbiBVcCBFbGVtZW50c1xyXG4gICAgdGhpcy5sb2dJbk9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tbmF2Jyk7XHJcbiAgICB0aGlzLnNpZ25VcE9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi11cC1idG4nKTtcclxuICAgIHRoaXMuc2lnblVwTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi11cC1tb2RhbCcpO1xyXG4gICAgdGhpcy5zaWduSW5Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLWluLW1vZGFsJyk7XHJcbiAgICB0aGlzLmNsb3NlU2lnblVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXNpZ24tdXAnKTtcclxuICAgIHRoaXMuY2xvc2VTaWduSW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2lnbi1pbicpO1xyXG4gICAgdGhpcy5sb2dnZWRJbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dnZWQtaW4nKTtcclxuICAgIHRoaXMuZHJvcERvd25NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duLW1lbnUnKTtcclxuICAgIHRoaXMucmVnaXN0ZXJVc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLXVzZXItYnRuJyk7XHJcbiAgICB0aGlzLmxvZ0luVXNlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi11c2VyLWJ0bicpO1xyXG5cclxuICAgIC8vUmVnaXN0cmF0aW9uIFZhbGlkYXRpb25cclxuXHJcbiAgICB0aGlzLnJlZ2lzdHJhdGlvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi11cC1mb3JtJyk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItdXNlcm5hbWUnKTtcclxuICAgIHRoaXMucmVnaXN0ZXJFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1lbWFpbCcpO1xyXG4gICAgdGhpcy5yZWdpc3RlclBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLXBhc3N3b3JkJyk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUGFzc3dvcmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLXBhc3N3b3JkMicpO1xyXG5cclxuICAgIHRoaXMubG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4tZm9ybScpO1xyXG4gICAgdGhpcy5sb2dpblVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXVzZXJuYW1lJyk7XHJcbiAgICB0aGlzLmxvZ2luUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tcGFzc3dvcmQnKTtcclxuXHJcbiAgICAvL0NPTVBPU0VSXHJcbiAgICB0aGlzLnBpZWNlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waWVjZS10aXRsZScpO1xyXG4gICAgdGhpcy5waWVjZVJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllY2UtcmVzdWx0cycpO1xyXG4gICAgdGhpcy5waWVjZURldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllY2UtZGV0YWlscycpO1xyXG4gICAgdGhpcy5jb21wb3NlcldyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcG9zZXItd3JhcCcpO1xyXG4gICAgdGhpcy5zdWJtaXRDb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1jb21tZW50Jyk7XHJcbiAgICB0aGlzLmFkZFBpZWNlVG9GYXZvcml0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgJ2FkZC1waWVjZS10by1mYXZvcml0ZXMnXHJcbiAgICApO1xyXG4gICAgdGhpcy5jcmVhdGVDb25jZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1jb25jZXJ0Jyk7XHJcblxyXG4gICAgLy9DT05DRVJUIEJVSUxERVJcclxuICAgIHRoaXMuYWRkVG9Db25jZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC10by1jb25jZXJ0Jyk7XHJcbiAgICB0aGlzLmRlbGV0ZVBpZWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlLXBpZWNlJyk7XHJcblxyXG4gICAgdGhpcy5jb25jZXJ0QnVpbGRlckFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC1idWlsZGVyLWFyZWEnKTtcclxuICAgIHRoaXMuY29uY2VydE1pbnV0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC1taW51dGVzJyk7XHJcbiAgICB0aGlzLmNvbmNlcnRDb25jbHVzaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtY29uY2x1c2lvbicpO1xyXG5cclxuICAgIHRoaXMuc2VhcmNoRmF2b3JpdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1mYXZvcml0ZXMnKTtcclxuICAgIHRoaXMuZmF2b3JpdGVzU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAnZmF2b3JpdGVzLXNlYXJjaC1yZXN1bHRzJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuZGVsZXRlSW50ZXJtaXNzaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1pbnRlcm1pc3Npb24nKTtcclxuICAgIHRoaXMuY29uY2VydFRpdGxlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtdGl0bGUtYnRuJyk7XHJcbiAgICB0aGlzLnJpZ2h0U2VhcmNoQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1zZWFyY2gtYXJlYScpO1xyXG4gICAgdGhpcy5jb25jZXJ0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LXRpdGxlLWlucHV0Jyk7XHJcbiAgICB0aGlzLmNoYW5nZVRpdGxlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZS10aXRsZS1idG4nKTtcclxuICAgIHRoaXMuY29uY2VydFRpdGxlSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtdGl0bGUtaGVhZGVyJyk7XHJcbiAgICB0aGlzLnNhdmVDb25jZXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtY29uY2VydC1idG4nKTtcclxuICAgIC8vZml4IHRoaXMuXHJcbiAgICBpZiAodGhpcy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbEZhdm9yaXRlc1Jlc3VsdHMgPSBbLi4udGhpcy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLmNoaWxkcmVuXTtcclxuICAgIH1cclxuICAgIHRoaXMuY29uY2VydEJ1aWxkZXJUZXh0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LWJ1aWxkZXItdGV4dC1hcmVhJyk7XHJcbiAgICB0aGlzLmNvbmNlcnRMZW5ndGhJbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC1sZW5ndGgtaW5kaWNhdG9yJyk7XHJcblxyXG5cclxuICAgIC8vSE9NUEFHRVxyXG4gICAgdGhpcy5zaG93R29sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3Zlci1nb2xkJyk7XHJcbiAgICAvL2NvbnN0IHNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLXJlc3VsdCcpO1xyXG4gICAgdGhpcy52aWV3TW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWV3LW1vcmUtYnRuJyk7XHJcbiAgICB0aGlzLm1haW5Db250ZW50SW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50LWFyZWEtaW5uZXInKTtcclxuICAgIHRoaXMub3BlblByb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1wcm9maWxlJyk7XHJcbiAgICB0aGlzLm9wZW5GYXZvcml0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1mYXZvcml0ZXMnKTtcclxuICAgIHRoaXMub3BlbkNvbmNlcnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tY29uY2VydHMnKTtcclxuICAgIHRoaXMucmV0dXJuSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXR1cm4taG9tZScpO1xyXG5cclxuICAgIC8vRmF2b3JpdGVzIG9uIEhvbWUgUGFnZVxyXG4gICAgdGhpcy5ob21lU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXNlYXJjaC1yZXN1bHRzJyk7XHJcbiAgICAvL0Zhdm9yaXRlcyBQYWdlXHJcbiAgICB0aGlzLmZ1bGxGYXZvcml0ZXNHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGwtZmF2b3JpdGVzLWdyaWQnKTtcclxuXHJcbiAgICAvL0NvbmNlcnRzIG9uIEhvbWUgUGFnZVxyXG4gICAgdGhpcy55b3VyQ29uY2VydHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgJ3lvdXItY29uY2VydHMtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuXHJcbiAgICAvL0NvbmNlcnRzIG9uIENvbmNlcnRzIFBhZ2VcclxuICAgIHRoaXMuZnVsbENvbmNlcnRzR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsLWNvbmNlcnRzLWdyaWQnKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcGVuUHJvZmlsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub3BlbkxpbmtzID0gW3RoaXMub3BlblByb2ZpbGUsIHRoaXMub3BlbkZhdm9yaXRlcywgdGhpcy5vcGVuQ29uY2VydHMsIHRoaXMucmV0dXJuSG9tZV07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcGVuQnJvd3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tYnJvd3NlJyk7XHJcblxyXG4gICAgdGhpcy5waWVjZU5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlLW5hbWUnKTtcclxuICAgIHRoaXMuY3JlYXRlQ29uY2VydEJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAnY3JlYXRlLWNvbmNlcnQtYnRuJ1xyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmRyb3BEb3duWW91ckNvbmNlcnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICdkcm9wZG93bi15b3VyLWNvbmNlcnRzJ1xyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNvbXBvc2VyTGV0dGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICdjb21wb3Nlci1sZXR0ZXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIHRoaXMucmVzdWx0c0NvbHVtbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNvbHVtbicpO1xyXG4gICAgdGhpcy5jb21wb3NlclJlc3VsdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcG9zZXItcmVzdWx0LWxpc3QnKTtcclxuICAgIHRoaXMudXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXVzZXJuYW1lJyk7XHJcbiAgICBpZiAodGhpcy51c2VyICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMudXNlciA9IHRoaXMudXNlci50ZXh0Q29udGVudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9GUk9NIElOREVYXHJcbiAgICB0aGlzLmNvbXBvc2VyTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcG9zZXItcmVzdWx0cycpO1xyXG4gICAgdGhpcy5zZWFyY2hGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZmllbGQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVSVNlbGVjdG9ycyA9IG5ldyBVaVNlbGVjdG9ycygpOyIsImltcG9ydCB7IFVJU2VsZWN0b3JzIH0gZnJvbSAnLi9VSVNlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IEhUVFAgfSBmcm9tICcuL2h0dHAnO1xyXG5pbXBvcnQgeyBVc2VyLCBDb25jZXJ0LCBQaWVjZSB9IGZyb20gJy4vc2Vzc2lvbk9iaic7XHJcbmltcG9ydCB7IEZvcm1zIH0gZnJvbSAnLi9mb3Jtcyc7XHJcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vbmF2JztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XHJcbmltcG9ydCB7IFJlcXVlc3RzIH0gZnJvbSAnLi9yZXF1ZXN0cyc7XHJcblxyXG5jbGFzcyBBUFAge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGdlbmVyYXRlUmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gIH1cclxuXHJcbiAgaW5pdEJhc2UoKSB7XHJcblxyXG5cclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnNob3dTZWFyY2gpO1xyXG4gICAgVUlTZWxlY3RvcnMub3Blbk1vYmlsZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnNob3dTZWFyY2gpO1xyXG4gICAgVUlTZWxlY3RvcnMuY2xvc2VTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jbG9zZVNlYXJjaEZpZWxkKTtcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICBVSS5jbGVhckxpc3QoKTtcclxuICAgICAgUmVxdWVzdHMuZ2V0Q29tcG9zZXJSZXN1bHRzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMub3Blbk1vYmlsZUJyb3dzZSkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5vcGVuTW9iaWxlQnJvd3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd0Jyb3dzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgVUlTZWxlY3RvcnMuYnJvd3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd0Jyb3dzZSk7XHJcbiAgICBVSVNlbGVjdG9ycy5jbG9zZUJyb3dzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgVUlTZWxlY3RvcnMuYnJvd3NlTW9kYWxBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgVUlTZWxlY3RvcnMuYnJvd3NlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5sb2dJbk9wZW4gJiYgVUlTZWxlY3RvcnMuc2lnblVwT3Blbikge1xyXG4gICAgICBVSVNlbGVjdG9ycy5sb2dJbk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuTW9kYWwpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaWduVXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3Blbk1vZGFsKTtcclxuICAgICAgVUlTZWxlY3RvcnMuY2xvc2VTaWduVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jbG9zZU1vZGFsKTtcclxuICAgICAgVUlTZWxlY3RvcnMuY2xvc2VTaWduSW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jbG9zZU1vZGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMubG9nZ2VkSW4pIHtcclxuICAgICAgVUlTZWxlY3RvcnMubG9nZ2VkSW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zaG93RHJvcERvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5yZWdpc3RyYXRpb25Gb3JtKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnJlZ2lzdHJhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBmb3JtSW5wdXRzID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgJy5mb3JtLWZpZWxkIGlucHV0J1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghRm9ybXMuY2hlY2tSZXF1aXJlZChbLi4uZm9ybUlucHV0c10pKSB7XHJcbiAgICAgICAgICBGb3Jtcy5jaGVja0xlbmd0aChVSVNlbGVjdG9ycy5yZWdpc3RlclVzZXJuYW1lLCA2LCAyMCk7XHJcbiAgICAgICAgICBGb3Jtcy5jaGVja0xlbmd0aChVSVNlbGVjdG9ycy5yZWdpc3RlclBhc3N3b3JkLCA2LCAyMCk7XHJcbiAgICAgICAgICBGb3Jtcy5jaGVja0VtYWlsKFVJU2VsZWN0b3JzLnJlZ2lzdGVyRW1haWwpO1xyXG4gICAgICAgICAgRm9ybXMuY2hlY2tQYXNzd29yZHNNYXRjaChcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMucmVnaXN0ZXJQYXNzd29yZCxcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMucmVnaXN0ZXJQYXNzd29yZDJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoRm9ybXMuY2hlY2tBbGxWYWxpZChbLi4uZm9ybUlucHV0c10pKSB7XHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLnJlZ2lzdHJhdGlvbkZvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMubG9nSW5Gb3JtKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhRm9ybXMuY2hlY2tSZXF1aXJlZChbXHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLmxvZ2luVXNlcm5hbWUsXHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLmxvZ2luUGFzc3dvcmQsXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbGV0IGxvZ2luRGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFVJU2VsZWN0b3JzLmxvZ2luVXNlcm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBVSVNlbGVjdG9ycy5sb2dpblBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBSZXF1ZXN0cy50ZXN0TG9naW4obG9naW5EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbmNlcnRGdW5jdGlvbihlKSB7XHJcbiAgICBsZXQgY29tcG9zZXJOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXItbmFtZScpXHJcbiAgICAgIC50ZXh0Q29udGVudDtcclxuICAgIGxldCBwaWVjZU5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS1uYW1lJylcclxuICAgICAgLnRleHRDb250ZW50O1xyXG5cclxuICAgIGxldCBuZXdQaWVjZSA9IG5ldyBQaWVjZShjb21wb3Nlck5hbWUsIHBpZWNlTmFtZSk7XHJcbiAgICBsZXQgbmV3Q29uY2VydCA9IG5ldyBDb25jZXJ0KCdObyBOYW1lJyk7XHJcbiAgICBuZXdDb25jZXJ0LnBpZWNlcy5wdXNoKG5ld1BpZWNlKTtcclxuICAgIFN0b3JhZ2Uuc2V0TmV3Q29uY2VydChuZXdDb25jZXJ0KTtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSAnL2NvbmNlcnRfYnVpbGRlcic7XHJcbiAgfVxyXG5cclxuICBzYXZlQ29uY2VydCgpIHtcclxuICAgIGxldCBjdXJyZW50VXNlciA9IFN0b3JhZ2UuZ2V0VXNlcigpO1xyXG4gICAgY29uc29sZS5sb2coXCJGUk9NIFNBVkVDT05DRVJUXCIpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmNvbmNlcnRUaXRsZUhlYWRlci50ZXh0Q29udGVudCA9PT0gJycpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4udGV4dENvbnRlbnQgPSAnUGxlYXNlIGFkZCB0aXRsZS4nO1xyXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdTYXZlIENvbmNlcnQnO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChVSS5jb25jZXJ0UGllY2VBcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLnRleHRDb250ZW50ID0gJ1BsZWFzZSBhZGQgcGllY2VzLi4uJztcclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSBDb25jZXJ0JztcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3VycmVudENvbmNlcnQgPSBuZXcgQ29uY2VydChVSVNlbGVjdG9ycy5jb25jZXJ0VGl0bGVIZWFkZXIudGV4dENvbnRlbnQpO1xyXG5cclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSkgPT4ge1xyXG4gICAgICBpZiAocGllY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnRlcm1pc3Npb24nKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdGhpc1BpZWNlID0gbmV3IFBpZWNlKFxyXG4gICAgICAgICAgcGllY2UucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyLWluZm8gPiBwOmZpcnN0LWNoaWxkJykudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICBwaWVjZS5xdWVyeVNlbGVjdG9yKCcucGllY2UtaW5mbyA+IHA6Zmlyc3QtY2hpbGQnKS50ZXh0Q29udGVudFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGN1cnJlbnRDb25jZXJ0LnBpZWNlcy5wdXNoKHRoaXNQaWVjZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjdXJyZW50VXNlci5jb25jZXJ0cy5wdXNoKGN1cnJlbnRDb25jZXJ0KTtcclxuXHJcblxyXG4gICAgU3RvcmFnZS5zZXRVc2VyKGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdDb25jZXJ0IFNhdmVkISEnO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdTYXZlIENvbmNlcnQnO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICAvL0ZvciBDb25jZXJ0IEJ1aWxkZXJcclxuICBhZGRQaWVjZVRvQ29uY2VydEFycihlKSB7XHJcblxyXG4gICAgY29uc3QgYWRkVG9Db25jZXJ0Q29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgY29uc3QgcGllY2VDb21wb3NlciA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnBpZWNlLWluZm8tbGVmdCBwOm50aC1vZi10eXBlKDEpJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlQ29tcG9zZXJEYXRlcyA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmRhdGEtY29tcG9zZXItZGF0ZXMnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGllY2VDb21wb3Nlck5hdGlvbmFsaXR5ID0gYWRkVG9Db25jZXJ0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuZGF0YS1jb21wb3Nlci1uYXRpb25hbGl0eSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwaWVjZUluc3RydW1lbnRhdGlvbiA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmRhdGEtcGllY2UtaW5zdHJ1bWVudGF0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlVGl0bGUgPSBhZGRUb0NvbmNlcnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5waWVjZS1pbmZvLWxlZnQgcDpudGgtb2YtdHlwZSgyKSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwaWVjZUR1cmF0aW9uID0gYWRkVG9Db25jZXJ0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcucGllY2UtaW5mby1sZWZ0IHA6bnRoLW9mLXR5cGUoMyknXHJcbiAgICApO1xyXG5cclxuICAgIC8vQ2hhbmdlIG5vdGlmaWN0YWlvbiB0ZXh0IGJhY2sgYW5kIGZvcnRoLlxyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnUGllY2UgYWRkZWQgdG8gY29uY2VydCc7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdBZGQgdG8gY29uY2VydCc7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBsZXQgcGllY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGllY2VFbC5jbGFzc0xpc3QgPSAnY29uY2VydCc7XHJcbiAgICAvL3BpZWNlRWwuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgIHBpZWNlRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnMgcGllY2UtZHJhZy1iYXJzXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWlubmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb3Nlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VDb21wb3Nlci50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VDb21wb3Nlck5hdGlvbmFsaXR5LnRleHRDb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZUNvbXBvc2VyRGF0ZXMudGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2UtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ke3BpZWNlVGl0bGUudGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ke3BpZWNlSW5zdHJ1bWVudGF0aW9uLnRleHRDb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZUR1cmF0aW9uLnRleHRDb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcyBmYS0yeCBkZWxldGUtcGllY2VcIj48L2k+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWludGVybWlzc2lvblwiPlxyXG4gICAgICAgICAgICAgIDxwPkFkZCBJbnRlcm1pc3Npb24gSGVyZTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgYDtcclxuXHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIucHVzaChwaWVjZUVsKTtcclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSwgaW5kZXgpID0+IHtcclxuICAgICAgcGllY2Uuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgVUkuYWRkUGllY2VUb0RPTShwaWVjZUVsKTtcclxuXHJcbiAgICBVSS5kZWxldGVQaWVjZXNMaXN0ZW5lcnMoKTtcclxuICAgIFVJLmNyZWF0ZUludGVybWlzc2lvbkxpc3RlbmVycygpO1xyXG4gICAgVUkuZHJhZ0xpc3RlbmVycygpO1xyXG4gICAgVUkudXBkYXRlQ29uY2VydER1cmF0aW9uKFVJLmdldENvbmNlcnREdXJhdGlvbihVSS5jb25jZXJ0UGllY2VBcnIpKTtcclxuICB9XHJcblxyXG4gIC8vVE9ET1xyXG4gIC8vZGVsZXRlUGllY2VzXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXBwID0gbmV3IEFQUCgpOyIsImltcG9ydCB7IFVJU2VsZWN0b3JzIH0gZnJvbSAnLi9VSVNlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi91aSc7XHJcblxyXG5jbGFzcyBGT1JNUyB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcmVnaXN0ZXJWYWxpZGF0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBjdXJyZW50Rm9ybSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgbGV0IGZvcm1GaWVsZHMgPSBjdXJyZW50Rm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1maWVsZCcpO1xyXG5cclxuICAgIFsuLi5mb3JtRmllbGRzXS5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoZmllbGQucXVlcnlTZWxlY3RvcignLmVycm9yLXRleHQnKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSB3YXMgYW4gZXJyb3InKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgYXJlIG5vIGVycm9ycycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrRW1haWwoaW5wdXQpIHtcclxuICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIGlmIChyZS50ZXN0KGlucHV0LnZhbHVlLnRyaW0oKSkpIHtcclxuICAgICAgVUkuc2hvd1N1Y2Nlc3MoaW5wdXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVUkuc2hvd0Vycm9yKGlucHV0LCAnRW1haWwgaXMgbm90IHZhbGlkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1JlcXVpcmVkKGlucHV0QXJyKSB7XHJcbiAgICBsZXQgaXNSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgaW5wdXRBcnIuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICBVSS5zaG93RXJyb3IoaW5wdXQsIGAke1VJLmdldEZpZWxkTmFtZShpbnB1dCl9IGlzIHJlcXVpcmVkLmApO1xyXG4gICAgICAgIGlzUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFVJLnNob3dTdWNjZXNzKGlucHV0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGlzUmVxdWlyZWQ7XHJcbiAgfVxyXG5cclxuICBjaGVja0xlbmd0aChpbnB1dCwgbWluLCBtYXgpIHtcclxuICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPCBtaW4pIHtcclxuICAgICAgVUkuc2hvd0Vycm9yKFxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIGAke1VJLmdldEZpZWxkTmFtZShpbnB1dCl9IG11c3QgYmUgYXQgbGVhc3QgJHttaW59IGNoYXJhY3RlcnNgXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IG1heCkge1xyXG4gICAgICBVSS5zaG93RXJyb3IoXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgYCR7VUkuZ2V0RmllbGROYW1lKGlucHV0KX0gbXVzdCBiZSBsZXNzIHRoYW4gJHttYXh9IGNoYXJhY3RlcnN9YFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVUkuc2hvd1N1Y2Nlc3MoaW5wdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tQYXNzd29yZHNNYXRjaChpbnB1dDEsIGlucHV0Mikge1xyXG4gICAgaWYgKGlucHV0MS52YWx1ZSAhPT0gaW5wdXQyLnZhbHVlKSB7XHJcbiAgICAgIFVJLnNob3dFcnJvcihpbnB1dDIsICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0FsbFZhbGlkKGZvcm1JbnB1dEFycikge1xyXG4gICAgbGV0IGFsbFZhbGlkID0gdHJ1ZTtcclxuICAgIGZvcm1JbnB1dEFyci5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZmllbGQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Vycm9yJykgJiZcclxuICAgICAgICBmaWVsZC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPiAxXHJcbiAgICAgICkge1xyXG4gICAgICAgIGFsbFZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGFsbFZhbGlkO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYWxsVmFsaWQ7XHJcbiAgfVxyXG5cclxuICBsb2dJblZhbGlkYXRpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coJ0xvZyBJbiBQcmV2ZW50ZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtcyA9IG5ldyBGT1JNUygpOyIsImNsYXNzIEh0dHAge1xyXG4gIC8vTWFrZSBIVFRQIEdldFxyXG4gIGFzeW5jIGdldCh1cmwpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzRGF0YTtcclxuICB9XHJcblxyXG4gIC8vTWFrZSBIVFRQIFBPU1RcclxuICBhc3luYyBwb3N0KHVybCwgZGF0YSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzRGF0YTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFhNTChldmVudCA9IHVuZGVmaW5lZCwgdXJsKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgcmV0dXJuIHJlc0RhdGE7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRKU09OKHVybCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgIHJldHVybiByZXNEYXRhO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhUVFAgPSBuZXcgSHR0cCgpOyIsImltcG9ydCB7IFVJU2VsZWN0b3JzIH0gZnJvbSAnLi9VSVNlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi91aSc7XHJcblxyXG5jbGFzcyBOQVYge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGNvbXBvc2VyUGFnZUxpc3RlbmVycyhjb21wb3Nlcikge1xyXG4gICAgY29tcG9zZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBjb21wb3Nlci8ke2UudGFyZ2V0LnRleHRDb250ZW50fWA7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOYXYgPSBuZXcgTkFWKCk7IiwiaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpJztcclxuaW1wb3J0IHsgSFRUUCB9IGZyb20gJy4vaHR0cCc7XHJcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vbmF2JztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAnO1xyXG5cclxuY2xhc3MgUkVRVUVTVFMge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGdldENvbXBvc2VyUmVzdWx0cygpIHtcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHNlYXJjaFRlcm06IFVJU2VsZWN0b3JzLnNlYXJjaElucHV0LnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgSFRUUC5wb3N0KCcvY29tcG9zZXJzJywgZGF0YSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgcmVzKTtcclxuICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIHJlcy5jb21wb3NlcnMpXHJcbiAgICAgIGxldCBjb21wQXJyYXkgPSBKU09OLnBhcnNlKHJlcy5jb21wb3NlcnMpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhjb21wQXJyYXkpO1xyXG5cclxuICAgICAgY29tcEFycmF5LmZvckVhY2goY29tcG9zZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICBVSS5wb3B1bGF0ZUNvbXBvc2VyU2VhcmNoUmVzdWx0cyhjdXJyZW50VVJMLCBjb21wb3NlcilcclxuICAgICAgfSlcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgVGhlcmUgd2FzIGFuIGVyciwgJHtlcnJ9YCkpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBicm93c2VQYW5lbEZldGNoKCkge1xyXG4gICAgbGV0IHJhbmRvbUNvbXBBcnIgPSBbXTtcclxuICAgIEhUVFAuZ2V0KCcvYnJvd3NlX2NvbXBvc2VyX2xpc3QnKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBjb21wb3NlcnNBcnIgPSBkYXRhLmNvbXBvc2Vyc19hcnJheTtcclxuICAgICAgICBjb21wb3NlcnNBcnIuZm9yRWFjaCgoZ3JvdXApID0+IHtcclxuICAgICAgICAgIGNvbnN0IG1haW5MZXR0ZXIgPSBncm91cFswXVswXTtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICByYW5kb21Db21wQXJyLnB1c2goXHJcbiAgICAgICAgICAgICAgZ3JvdXBbQXBwLmdlbmVyYXRlUmFuZG9tTnVtYmVyKDAsIGdyb3VwLmxlbmd0aCldXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgVUkuYWRkUmFuZG9tQ29tcG9zZXJzVG9ET00obWFpbkxldHRlciwgcmFuZG9tQ29tcEFycik7XHJcbiAgICAgICAgICByYW5kb21Db21wQXJyID0gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coYFRoZXJlIHdhcyBhbiBlcnJvcjogJHtlcnJ9YCkpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkN1cnJlbnRMZXR0ZXIoZSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdvcGVuIGN1cnJlbnQgbGV0dGVyJyk7XHJcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdicm93c2VfY29tcG9zZXJzJykpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2Jyb3dzZV9jb21wb3NlcnMnO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0YXJnZXRUYWcgPSBlLnRhcmdldC50YWdOYW1lLnRyaW0oKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0VGFnID09PSAnTEknKSB7XHJcbiAgICAgIGxldCBjb21wb3NlckxldHRlciA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgICBsZXQgZGF0YSA9IHsgbGV0dGVyOiBjb21wb3NlckxldHRlciB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICBIVFRQLnBvc3QoJy4vYnJvd3NlX2NvbXBvc2VyX2xpc3QnLCBkYXRhKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAoVUlTZWxlY3RvcnMucmVzdWx0c0NvbHVtbi50ZXh0Q29udGVudCAhPT0gJycpIHtcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMucmVzdWx0c0NvbHVtbi50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRhdGEubGV0dGVyQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBVSS5hcHBlbmRDdXJyZW50TGV0dGVyKGl0ZW0pO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgWy4uLlVJU2VsZWN0b3JzLnJlc3VsdHNDb2x1bW4uY2hpbGRyZW5dLmZvckVhY2goKGNvbXApID0+IHtcclxuICAgICAgICAgICAgTmF2LmNvbXBvc2VyUGFnZUxpc3RlbmVycyhjb21wKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGBUaGVyZSB3YXMgYW4gZXJyb3IgJHtlcnJ9YCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vICAgaWYodGFyZ2V0VGFnICE9PSAnTEknIHx8IHRhcmdldFRhZyAhPT0gJ0gxJykge1xyXG4gIC8vICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gIC8vICAgY29uc29sZS5sb2coZS50YXJnZXQudGFnTmFtZSk7XHJcbiAgLy8gICByZXR1cm4gZmFsc2U7XHJcbiAgLy8gfSBlbHNlIGlmICh0YXJnZXRUYWcgPT09ICdMSScpIHtcclxuXHJcbiAgdGVzdExvZ2luKGxvZ2luRGF0YSkge1xyXG4gICAgSFRUUC5wb3N0KCcvbG9naW4nLCBsb2dpbkRhdGEpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnVwZGF0ZSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICBVSVNlbGVjdG9ycy5sb2dJblVzZXJCdG4udGV4dENvbnRlbnQgPSBgJHtkYXRhLm1lc3NhZ2V9YDtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9ob21lcGFnZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnVwZGF0ZSA9PT0gJ2ZhaWx1cmUnKSB7XHJcbiAgICAgICAgICBVSS5zaG93RXJyb3IoVUlTZWxlY3RvcnMubG9naW5Vc2VybmFtZSwgZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgIFVJLnNob3dFcnJvcihVSVNlbGVjdG9ycy5sb2dpblBhc3N3b3JkLCBkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgVGhlcmUgd2FzIGFuIGVycm9yLCAke2Vycn1gKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0RnVsbFBpZWNlSW5mbyhwaWVjZVRpdGxlKSB7XHJcbiAgICBIVFRQLmdldChgL3BpZWNlX2RldGFpbC8ke3BpZWNlVGl0bGV9YClcclxuICAgICAgLnRoZW4oZGF0YSA9PiBVSS5hZGRQaWVjZUZyb21Mb2NhbFN0b3JhZ2UoZGF0YSkpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coYEVSUk9SOiAke2Vycn1gKSlcclxuICB9XHJcblxyXG4gIGZhdm9yaXRlc1NlYXJjaCgpIHtcclxuICAgIGxldCBzZWFyY2hUZXJtID0gVUlTZWxlY3RvcnMuc2VhcmNoRmF2b3JpdGVzLnZhbHVlO1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHNlYXJjaFRlcm1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VhcmNoVGVybSA9PT0gJycpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuaW5pdGlhbEZhdm9yaXRlc1Jlc3VsdHMuZm9yRWFjaCgoZmF2b3JpdGUpID0+IHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLmFwcGVuZENoaWxkKGZhdm9yaXRlKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBIVFRQLnBvc3QoJy9zZWFyY2hfZmF2b3JpdGVzJywgZGF0YSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuXHJcbiAgICAgICAgICBsZXQgcGFyc2VkID0gSlNPTi5wYXJzZShkYXRhLmZhdm9yaXRlcyk7XHJcbiAgICAgICAgICBwYXJzZWQuZm9yRWFjaChmYXZvcml0ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuICAgICAgICAgICAgZmF2b3JpdGVMSS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWNvbXBvc2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGEtY29tcG9zZXItZGF0ZXNcIj4ke2Zhdm9yaXRlLmNvbXBvc2VyLnllYXJzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGEtY29tcG9zZXItbmF0aW9uYWxpdHlcIj4ke2Zhdm9yaXRlLmNvbXBvc2VyLm5hdGlvbmFsaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGEtcGllY2UtaW5zdHJ1bWVudGF0aW9uXCI+JHtmYXZvcml0ZS5pbnN0cnVtZW50YXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2UtaW5mby1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtmYXZvcml0ZS5jb21wb3Nlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtmYXZvcml0ZS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlLWluZm8tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2Zhdm9yaXRlLmR1cmF0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG4gYWRkLXRvLWNvbmNlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIENvbmNlcnRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLmFwcGVuZENoaWxkKGZhdm9yaXRlTEkpO1xyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGBFUlJPUjogJHtlcnJ9YClcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBnZXRQaWVjZVJlc3VsdHMoZSkge1xyXG4gICAgVUkuY2xlYXJDb21wb3NlclJlc3VsdHMoKTtcclxuXHJcbiAgICBVSVNlbGVjdG9ycy5waWVjZUxpc3QuZm9yRWFjaCgocGllY2UpID0+IHtcclxuICAgICAgaWYgKHBpZWNlLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgIHBpZWNlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBzZWxlY3RlZFBpZWNlID0gZS50YXJnZXQ7XHJcbiAgICBzZWxlY3RlZFBpZWNlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICBsZXQgZm9ybWF0dGVkU3RyaW5nID0gZS50YXJnZXQuaW5uZXJIVE1MLnNwbGl0KCcmJylbMF07XHJcbiAgICBIVFRQLmdldChgL3BpZWNlX2RldGFpbC8ke2Zvcm1hdHRlZFN0cmluZ31gKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5waWVjZS50aXRsZSkge1xyXG4gICAgICAgICAgY29uc3QgY29udGVudHMgPSBgPGgyIGlkPVwicGllY2UtdGl0bGUtcmVzdWx0XCI+JHtkYXRhLnBpZWNlLnRpdGxlfTwvaDI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJwaWVjZS1kdXJhdGlvblwiPiR7ZGF0YS5waWVjZS5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInBpZWNlLWluc3RydW1lbnRhdGlvblwiPiR7ZGF0YS5waWVjZS5pbnN0cnVtZW50YXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgIFVJU2VsZWN0b3JzLnBpZWNlRGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUwgPSBjb250ZW50cztcclxuXHJcbiAgICAgICAgICBpZiAoZGF0YS5waWVjZS5jb21tZW50cy5sZW5ndGggPiAwKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgICAgICBjb21tZW50TGlzdC5jbGFzc0xpc3QgPSAnY29tbWVudC1saXN0JztcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMucGllY2VEZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRMaXN0KTtcclxuICAgICAgICAgICAgZGF0YS5waWVjZS5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgICAgY29tbWVudExJLmNsYXNzTGlzdCA9ICdjb21tZW50JztcclxuXHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29tbWVudC5hdXRob3IsIGNvbW1lbnQuYm9keSwgY29tbWVudC50aW1lc3RhbXApO1xyXG5cclxuICAgICAgICAgICAgICBjb21tZW50TEkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPHA+JHtjb21tZW50LmF1dGhvcn0gc2F5czogPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtjb21tZW50LmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtjb21tZW50LnRpbWVzdGFtcH08L3A+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICBjb21tZW50TGlzdC5hcHBlbmRDaGlsZChjb21tZW50TEkpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zdCBsaUZhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpRmFpbC5pbm5lckhUTUwgPSAnVGhlcmUgd2FzIGEgZmFpbHVyZSc7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMucGllY2VSZXN1bHRzLmFwcGVuZChsaSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5Q29tbWVudHMoZW50cnkpIHtcclxuICAgIEhUVFAuZ2V0KGAvcGllY2VfZGV0YWlsLyR7ZW50cnkucGllY2V9YClcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucGllY2UuY29tbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgICAgY29tbWVudExpc3QuY2xhc3NMaXN0ID0gJ2NvbW1lbnQtbGlzdCc7XHJcbiAgICAgICAgICBVSVNlbGVjdG9ycy5waWVjZURldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudExpc3QpO1xyXG4gICAgICAgICAgZGF0YS5waWVjZS5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb21tZW50TEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBjb21tZW50TEkuY2xhc3NMaXN0ID0gJ2NvbW1lbnQnO1xyXG4gICAgICAgICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxwPiR7Y29tbWVudC5hdXRob3J9IHNheXM6IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7Y29tbWVudC5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7Y29tbWVudC50aW1lc3RhbXB9PC9wPmA7XHJcbiAgICAgICAgICAgIGNvbW1lbnRMaXN0LmFwcGVuZENoaWxkKGNvbW1lbnRMSSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBgVGhlcmUgd2FzIGFuIGVycjogJHtlcnJ9YClcclxuICB9XHJcblxyXG5cclxuICBpbWFnZUZldGNoKCkge1xyXG4gICAgY29uc3QgY29tcG9zZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvc2VyLW5hbWUnKTtcclxuICAgIEhUVFAuZ2V0KGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jdXN0b21zZWFyY2gvdjE/a2V5PUFJemFTeUM3MmVtc2FwY3VYc0Y2NEhybjdjYV85eEliQVVibjdEWSZjeD0wMTQxMjQzOTE5NDU4MzAwODY4NTk6YWlzcmF1eGplankmcT0ke2NvbXBvc2VyTmFtZS50ZXh0Q29udGVudH1gKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBjb25zdCBjb21wb3NlckltZ1NyYyA9IGRhdGEuaXRlbXNbMF0ucGFnZW1hcC5jc2VfdGh1bWJuYWlsWzBdLnNyYztcclxuICAgICAgICBVSVNlbGVjdG9ycy5jb21wb3NlcldyYXAuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtjb21wb3NlckltZ1NyY30nKWA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmNvbXBvc2VyV3JhcC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzIwMFwiKSc7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb21taXROZXdDb21tZW50KGUpIHtcclxuXHJcblxyXG4gICAgbGV0IGNvbXBvc2VyVXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tdXNlcicpO1xyXG4gICAgY29uc3QgY29tbWVudEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1jb21tZW50Jyk7XHJcbiAgICBjb25zdCBjb21tZW50UGllY2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS10aXRsZS1yZXN1bHQnKTtcclxuXHJcblxyXG4gICAgaWYgKCFjb21wb3NlclVzZXIpIHtcclxuICAgICAgLy9UT0RPIFdSSVRFIFNIT1cgQlVUVE9OIEVSUk9SIFxyXG4gICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQsICdQbGVhc2UgbG9nIGluJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFjb21tZW50UGllY2VUaXRsZSkge1xyXG4gICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQsICdTZWxlY3QgYSBwaWVjZScpO1xyXG4gICAgfSBlbHNlIGlmIChjb21tZW50Qm9keS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnV3JpdGUgIGEgY29tbWVudCEnKTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBjb25zdCBlbnRyeSA9IHtcclxuICAgICAgICBib2R5OiBjb21tZW50Qm9keS52YWx1ZSxcclxuICAgICAgICBwaWVjZTogY29tbWVudFBpZWNlVGl0bGUudGV4dENvbnRlbnRcclxuICAgICAgfTtcclxuXHJcbiAgICAgIEhUVFAucG9zdCgnL2FkZF9jb21tZW50JywgZW50cnkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdUaGFuayB5b3UhJztcclxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnU3VibWl0IENvbW1lbnQnO1xyXG4gICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICBjb21tZW50Qm9keS52YWx1ZSA9IGBgO1xyXG4gICAgICAgICAgUmVxdWVzdHMuZGlzcGxheUNvbW1lbnRzKGVudHJ5KTtcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbW1pdE5ld0Zhdm9yaXRlKGUpIHtcclxuICAgIGxldCBjb21wb3NlclVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLXVzZXInKTtcclxuICAgIGxldCBwaWVjZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpZWNlLXRpdGxlLXJlc3VsdCcpO1xyXG5cclxuICAgIGxldCBwaWVjZVNlbmQgPSB7XHJcbiAgICAgIHBpZWNlVGl0bGVTZW5kOiBwaWVjZVRpdGxlLnRleHRDb250ZW50XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwaWVjZVRpdGxlKSB7XHJcbiAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCwgJ1NlbGVjdCBhIHBpZWNlJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFjb21wb3NlclVzZXIpIHtcclxuICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnUGxlYXNlIExvZyBpbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgSFRUUC5wb3N0KCcvYWRkX3BpZWNlX3RvX2Zhdm9yaXRlcycsIHBpZWNlU2VuZClcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZXNzYWdlfWA7XHJcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ0FkZCBwaWVjZSB0byBmYXZvcml0ZXMnO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBGRVRDSCBFUlJPUjogJHtlcnJ9YCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0cyA9IG5ldyBSRVFVRVNUUygpOyIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgY29uY2VydHMgPSBbXSkge1xyXG4gICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgdGhpcy5jb25jZXJ0cyA9IGNvbmNlcnRzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmNlcnQge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBwaWVjZXMgPSBbXSkge1xyXG4gICAgdGhpcy5pZCA9IEFwcC5nZW5lcmF0ZVJhbmRvbU51bWJlcigwLCA1MDAwMCk7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnBpZWNlcyA9IHBpZWNlcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZSB7XHJcbiAgY29uc3RydWN0b3IoY29tcG9zZXIsIHRpdGxlKSB7XHJcbiAgICB0aGlzLmNvbXBvc2VyID0gY29tcG9zZXI7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlcXVlc3RzIH0gZnJvbSAnLi9yZXF1ZXN0cyc7XHJcbmltcG9ydCB7IFVzZXIsIENvbmNlcnQsIFBpZWNlIH0gZnJvbSAnLi9zZXNzaW9uT2JqJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpJztcclxuaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuXHJcbmNsYXNzIFNUT1JBR0Uge1xyXG4gIGdldFVzZXIoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuICB9XHJcblxyXG4gIHNldFVzZXIodXNlcikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVc2VyKCkge1xyXG4gICAgbGV0IHVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC11c2VybmFtZScpLnRleHRDb250ZW50O1xyXG5cclxuICAgIGlmIChTdG9yYWdlLmdldFVzZXIoKSA9PT0gbnVsbCB8fCBTdG9yYWdlLmdldFVzZXIoKSA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICBsZXQgbmV3VXNlciA9IG5ldyBVc2VyKHVzZXIpO1xyXG4gICAgICBTdG9yYWdlLnNldFVzZXIobmV3VXNlcik7XHJcbiAgICAgIFVJLmRpc3BsYXlDb25jZXJ0cyhuZXdVc2VyKTtcclxuICAgIH0gZWxzZSBpZiAodXNlciA9PT0gU3RvcmFnZS5nZXRVc2VyKCkudXNlcm5hbWUpIHtcclxuICAgICAgbGV0IGN1cnJlbnRVc2VyID0gU3RvcmFnZS5nZXRVc2VyKCk7XHJcbiAgICAgIFVJLmRpc3BsYXlDb25jZXJ0cyhjdXJyZW50VXNlcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodXNlciAhPT0gU3RvcmFnZS5nZXRVc2VyKCkudXNlcm5hbWUpIHtcclxuICAgICAgbGV0IG5ld1VzZXIgPSBuZXcgVXNlcih1c2VyKTtcclxuICAgICAgU3RvcmFnZS5zZXRVc2VyKG5ld1VzZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q29uY2VydCgpIHtcclxuICAgIGxldCByZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduZXdDb25jZXJ0JykpO1xyXG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xyXG4gICAgICBSZXF1ZXN0cy5nZXRGdWxsUGllY2VJbmZvKHJlcy5waWVjZXNbMF0udGl0bGUuc3BsaXQoJy4uLicpWzBdKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0TmV3Q29uY2VydChjb25jZXJ0KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmV3Q29uY2VydCcsIEpTT04uc3RyaW5naWZ5KGNvbmNlcnQpKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oc3RyaW5nKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgc2V0SXRlbShzdHJpbmcsIGl0ZW0pIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0cmluZywgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3JhZ2UgPSBuZXcgU1RPUkFHRSgpO1xyXG4iLCJpbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0cyB9IGZyb20gJy4vcmVxdWVzdHMnO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVaSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRyYWdTdGFydEluZGV4ID0gMDtcclxuICAgIHRoaXMuYWxsID0gdHJ1ZTtcclxuICAgIHRoaXMuY29uY2VydFBpZWNlQXJyID0gW107XHJcbiAgfVxyXG5cclxuICAvLyB0ZXN0SW1wb3J0KCkge1xyXG4gIC8vICAgY29uc29sZS5sb2coVUlTZWxlY3RvcnMuc2l0ZVRpdGxlKTtcclxuICAvLyB9XHJcblxyXG4gIC8vQkFTRVxyXG4gIG9wZW5Nb2RhbChlKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQudHJpbSgpID09PSAnTG9nIEluJykge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaWduSW5Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2lnblVwTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoZSkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdjbG9zZS1zaWduLWluJykge1xyXG4gICAgICBjb25zdCBzaWduSW5Nb2RhbFBhcmVudCA9XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIHNpZ25Jbk1vZGFsUGFyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBtb2RhbFBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgbW9kYWxQYXJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dTZWFyY2goZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQgPT09IFVJU2VsZWN0b3JzLm9wZW5Nb2JpbGVTZWFyY2gpIHtcclxuICAgICAgVUlTZWxlY3RvcnMucmlnaHROYXZDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgVUlTZWxlY3RvcnMuc2l0ZVRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhck92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnJpZ2h0TmF2Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhck92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlU2VhcmNoRmllbGQoKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBVSVNlbGVjdG9ycy5yaWdodE5hdkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICBVSVNlbGVjdG9ycy5zZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5zaXRlVGl0bGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNpdGVUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dCcm93c2UoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgVUlTZWxlY3RvcnMuYnJvd3NlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBVSVNlbGVjdG9ycy5icm93c2VNb2RhbEFyZWEuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuYnJvd3NlQ29tcG9zZXJzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgd2hpbGUgKFVJU2VsZWN0b3JzLmJyb3dzZUNvbXBvc2Vycy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuYnJvd3NlQ29tcG9zZXJzLnJlbW92ZUNoaWxkKFxyXG4gICAgICAgICAgVUlTZWxlY3RvcnMuYnJvd3NlQ29tcG9zZXJzLmZpcnN0Q2hpbGRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBSZXF1ZXN0cy5icm93c2VQYW5lbEZldGNoKCk7XHJcbiAgICAvL1JlcXVlc3RzLm9wZW5DdXJyZW50TGV0dGVyKCk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRDdXJyZW50TGV0dGVyKGl0ZW0pIHtcclxuICAgIGxldCBjb21wb3NlclJlc3VsdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb21wb3NlclJlc3VsdE5hbWUudGV4dENvbnRlbnQgPSBgJHtpdGVtfWA7XHJcbiAgICBVSVNlbGVjdG9ycy5yZXN1bHRzQ29sdW1uLmFwcGVuZENoaWxkKGNvbXBvc2VyUmVzdWx0TmFtZSk7XHJcbiAgfVxyXG5cclxuICBhZGRSYW5kb21Db21wb3NlcnNUb0RPTShtYWluTGV0dGVyLCByYW5kb21Db21wQXJyKSB7XHJcbiAgICBsZXQgY29tcG9zZXJMZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBvc2VyTGV0dGVyLmNsYXNzTGlzdCA9ICdsZXR0ZXInO1xyXG5cclxuXHJcbiAgICAvL1RIRVJFIElTIFNPTUUgRlVDS0lORyBCRUFNSU5HIElTU1VFIEhFUkVcclxuICAgIGNvbXBvc2VyTGV0dGVyLmlubmVySFRNTCA9IGBcclxuICAgICAgIDxoMT4ke21haW5MZXR0ZXJ9PC9oMT5cclxuICAgICA8ZGl2IGNsYXNzPVwibGV0dGVyLWNvbXBvc2Vyc1wiPlxyXG5cclxuICAgICAgICAgICAke3JhbmRvbUNvbXBBcnIubWFwKChpdGVtKSA9PiB7XHJcblxyXG4gICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICA8cCBjbGFzcz1cInJhbmRvbS1jb21wb3Nlci1saW5rc1wiPjxhIGhyZWY9XCIjXCI+JHtpdGVtfTwvYT48L3A+YFxyXG4gICAgfSlcclxuICAgICAgICAuam9pbignJylcclxuICAgICAgfVxyXG5cclxuICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgVUlTZWxlY3RvcnMuYnJvd3NlQ29tcG9zZXJzLmFwcGVuZENoaWxkKGNvbXBvc2VyTGV0dGVyKTtcclxuXHJcbiAgICBjb25zdCBsZXR0ZXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZXR0ZXIgaDEnKTtcclxuXHJcbiAgICBbLi4ubGV0dGVyTGlua3NdLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlcXVlc3RzLm9wZW5DdXJyZW50TGV0dGVyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJhbmRvbUNvbXBvc2VyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICcucmFuZG9tLWNvbXBvc2VyLWxpbmtzIGEnXHJcbiAgICApO1xyXG4gICAgWy4uLnJhbmRvbUNvbXBvc2VyTGlzdF0uZm9yRWFjaCgoY29tcG9zZXJMaW5rKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbXBvc2VyTGluayk7XHJcbiAgICAgIGNvbXBvc2VyTGluay5ocmVmID0gYC9jb21wb3Nlci8ke2NvbXBvc2VyTGluay50ZXh0Q29udGVudH1gO1xyXG4gICAgICAvL2NvbXBvc2VyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNvbnNvbGUubG9nKCdUSVRTJykpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGVhckxpc3QoKSB7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHdoaWxlIChVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnJlbW92ZUNoaWxkKFxyXG4gICAgICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5maXJzdENoaWxkXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuZmlyc3RDaGlsZCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnJlbW92ZUNoaWxkKFxyXG4gICAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuZmlyc3RDaGlsZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVDb21wb3NlclNlYXJjaFJlc3VsdHMoY3VycmVudFVSTCwgY29tcG9zZXIpIHtcclxuICAgIC8vIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIGNvbnN0IHJlc3VsdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVzdWx0RGl2LmNsYXNzTGlzdCA9ICdzZWFyY2gtcmVzdWx0LWRvd24nO1xyXG5cclxuICAgIGlmIChjdXJyZW50VVJMLmluY2x1ZGVzKCdjb21wb3NlcicpKSB7XHJcbiAgICAgIHJlc3VsdERpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxwPiR7Y29tcG9zZXIubmFtZX08L3A+XHJcbiAgICAgIDxhIGhyZWY9XCIke2NvbXBvc2VyLm5hbWV9XCI+PGJ1dHRvbiBjbGFzcz1cInByaW1hcnktYnRuXCI+VmlzaXQgQ29tcG9zZXIgUGFnZTwvYnV0dG9uPjwvYT5cclxuXHJcbiAgYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdERpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxwPiR7Y29tcG9zZXIubmFtZX08L3A+XHJcbiAgICAgIDxhIGhyZWY9XCJjb21wb3Nlci8ke2NvbXBvc2VyLm5hbWV9XCI+PGJ1dHRvbiBjbGFzcz1cInByaW1hcnktYnRuXCI+VmlzaXQgQ29tcG9zZXIgUGFnZTwvYnV0dG9uPjwvYT5cclxuXHJcbiAgYDtcclxuICAgIH1cclxuXHJcbiAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLmFwcGVuZENoaWxkKHJlc3VsdERpdik7XHJcbiAgfVxyXG5cclxuICBzaG93RHJvcERvd24oKSB7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuZHJvcERvd25NZW51LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuZHJvcERvd25NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSVNlbGVjdG9ycy5kcm9wRG93bk1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0ZPUk0gVkFMSURBVElPTlxyXG4gIHNob3dFcnJvcihpbnB1dCwgbWVzc2FnZSkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgZm9ybUNvbnRyb2wuY2xhc3NOYW1lID0gJ2Zvcm0tZmllbGQgZXJyb3InO1xyXG5cclxuICAgIGNvbnN0IGVycm9yID0gZm9ybUNvbnRyb2wucXVlcnlTZWxlY3RvcignLmVycm9yLXRleHQnKTtcclxuICAgIGVycm9yLmlubmVyVGV4dCA9IG1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICBzaG93U3VjY2VzcyhpbnB1dCkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgZm9ybUNvbnRyb2wuY2xhc3NOYW1lID0gJ2Zvcm0tZmllbGQgc3VjY2Vzcyc7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZE5hbWUoaW5wdXQpIHtcclxuICAgIGxldCBuZXdTdHJpbmcgPSBpbnB1dC5pZC5zcGxpdCgnLScpWzFdO1xyXG4gICAgLy9jb25zb2xlLmxvZyhuZXdTdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuZXdTdHJpbmcuc2xpY2UoMSkpO1xyXG4gICAgaWYgKG5ld1N0cmluZy5pbmNsdWRlcygncGFzc3dvcmQyJykpIHtcclxuICAgICAgcmV0dXJuICdSZXBlYXRlZCBQYXNzd29yZCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3U3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmV3U3RyaW5nLnNsaWNlKDEpO1xyXG4gIH1cclxuXHJcbiAgLy9DT05DRVJUIEJVSUxERVJcclxuXHJcbiAgYWRkUGllY2VGcm9tTG9jYWxTdG9yYWdlKHBPYmplY3QpIHtcclxuICAgIGNvbnN0IHBpZWNlT2JqZWN0ID0gcE9iamVjdC5waWVjZTtcclxuICAgIGxldCBwaWVjZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwaWVjZUVsLmNsYXNzTGlzdCA9ICdjb25jZXJ0JztcclxuICAgIHBpZWNlRWwuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xyXG4gICAgcGllY2VFbC5pbm5lckhUTUwgPSBgXHJcbiAgICBcclxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1iYXJzIHBpZWNlLWRyYWctYmFyc1wiPjwvaT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pbm5lci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBvc2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cGllY2VPYmplY3QuY29tcG9zZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5uYXRpb25hbGl0eX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3BpZWNlT2JqZWN0LnllYXJzfTwvcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cGllY2VPYmplY3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5pbnN0cnVtZW50YXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnggZGVsZXRlLXBpZWNlXCI+PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaW50ZXJtaXNzaW9uXCI+XHJcbiAgICAgICAgICAgIDxwPkFkZCBJbnRlcm1pc3Npb24gSGVyZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgYDtcclxuXHJcbiAgICAvL0ZJWCBERVBFTkRFTkNJRVNcclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5wdXNoKHBpZWNlRWwpO1xyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBVSS5hZGRQaWVjZVRvRE9NKHBpZWNlRWwpO1xyXG5cclxuICAgIFVJLmRlbGV0ZVBpZWNlc0xpc3RlbmVycygpO1xyXG4gICAgVUkuY3JlYXRlSW50ZXJtaXNzaW9uTGlzdGVuZXJzKCk7XHJcbiAgICBVSS5kcmFnTGlzdGVuZXJzKCk7XHJcbiAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKFVJLmNvbmNlcnRQaWVjZUFycikpO1xyXG5cclxuICAgIFN0b3JhZ2UucmVtb3ZlSXRlbSgnbmV3Q29uY2VydCcpO1xyXG5cclxuICB9XHJcblxyXG4gIGdldENvbmNlcnREdXJhdGlvbihwaWVjZUFycikge1xyXG4gICAgaWYgKHBpZWNlQXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBsZXQgZW1wdHkgPSAwO1xyXG4gICAgICBVSS5jb25jZXJ0TGVuZ3RoSnVkZ2VtZW50KFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYSwgZW1wdHkpO1xyXG4gICAgICByZXR1cm4gZW1wdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjb25jZXJ0RHVyYXRpb25BcnIgPSBwaWVjZUFyci5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludGVybWlzc2lvbicpKSB7XHJcbiAgICAgICAgICByZXR1cm4gMzA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBOdW1iZXIoXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnBpZWNlLWluZm8gcDpsYXN0LW9mLXR5cGUnKVxyXG4gICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIidcIilbMF1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGNvbmNlcnREdXJhdGlvbiA9IGNvbmNlcnREdXJhdGlvbkFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyB2YWwpO1xyXG4gICAgICAvLyBpZihjb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmNvbmNlcnQuaW50ZXJtaXNzaW9uJykpe1xyXG4gICAgICAvLyAgICAgY29uY2VydER1cmF0aW9uICs9IDMwO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICBVSS5jb25jZXJ0TGVuZ3RoSnVkZ2VtZW50KFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYSwgY29uY2VydER1cmF0aW9uKTtcclxuXHJcbiAgICAgIHJldHVybiBjb25jZXJ0RHVyYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgdXBkYXRlQ29uY2VydER1cmF0aW9uKGR1cmF0aW9uTnVtKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0TWludXRlcy50ZXh0Q29udGVudCA9IGAke2R1cmF0aW9uTnVtfWA7XHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0TWludXRlcy5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xyXG4gIH1cclxuXHJcbiAgY29uY2VydExlbmd0aEp1ZGdlbWVudChjb250YWluZXIsIGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoZHVyYXRpb24gPT0gMCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0Q29uY2x1c2lvbi50ZXh0Q29udGVudCA9IGBQbGVhc2UgYWRkIHNvbWUgcGllY2VzLmA7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRMZW5ndGhJbmRpY2F0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJUZXh0QXJlYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRibHVlJztcclxuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPCA5MCAmJiBkdXJhdGlvbiA+IDApIHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydENvbmNsdXNpb24udGV4dENvbnRlbnQgPSBgQ29uY2VydCBpcyBwb3RlbnRpYWxseSB0b28gc2hvcnQuYDtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJUZXh0QXJlYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NkYjIxZic7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRMZW5ndGhJbmRpY2F0b3IuY2xhc3NMaXN0ID0gJ2ZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlIGNvbmNlcnQtbGVuZ3RoLWluZGljYXRvcic7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRMZW5ndGhJbmRpY2F0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID49IDkwICYmIGR1cmF0aW9uIDw9IDEyMCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0Q29uY2x1c2lvbi50ZXh0Q29udGVudCA9IGBQZXJmZWN0IGNvbmNlcnQgbGVuZ3RoIWA7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyVGV4dEFyZWEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZTc3M2YnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0TGVuZ3RoSW5kaWNhdG9yLmNsYXNzTGlzdCA9ICdmYSBmYS1jaGVjayBjb25jZXJ0LWxlbmd0aC1pbmRpY2F0b3InO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydENvbmNsdXNpb24udGV4dENvbnRlbnQgPSBgQ29uY2VydCBpcyBwb3RlbnRpYWxseSB0b28gbG9uZy4uLmA7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyVGV4dEFyZWEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhNzMwM2UnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0TGVuZ3RoSW5kaWNhdG9yLmNsYXNzTGlzdCA9ICdmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZSBjb25jZXJ0LWxlbmd0aC1pbmRpY2F0b3InO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbmNlcnQuaW50ZXJtaXNzaW9uJykpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vIGludGVybWlzc2lvbiB5ZXQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVBpZWNlc0xpc3RlbmVycygpIHtcclxuICAgIGxldCBkZWxldGVQaWVjZXMgPSBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1waWVjZScpO1xyXG4gICAgZGVsZXRlUGllY2VzLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIHBpZWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkucmVtb3ZlUGllY2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVJbnRlcm1pc3Npb25MaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgbGV0IGludGVybWlzc2lvbkxpc3QgPSBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5hZGQtaW50ZXJtaXNzaW9uJ1xyXG4gICAgKTtcclxuICAgIGludGVybWlzc2lvbkxpc3QuZm9yRWFjaCgoaW50ZXJtaXNzaW9uKSA9PiB7XHJcbiAgICAgIGludGVybWlzc2lvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNyZWF0ZUludGVybWlzc2lvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVBpZWNlKGUpIHtcclxuICAgIC8vZ2V0IHBhcmVudCBFbFxyXG4gICAgbGV0IHNlbGVjdGVkQ29uY2VydCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbmNlcnQpO1xyXG5cclxuICAgIC8vUmVtb3ZlIFNlbGVjdGVkIFBpZWNlIGZyb20gQXJyYXlcclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5zcGxpY2UoVUkuY29uY2VydFBpZWNlQXJyLmluZGV4T2Yoc2VsZWN0ZWRDb25jZXJ0KSwgMSk7XHJcblxyXG4gICAgLy9SZW1vdmUgUGllY2UgZnJvbSBET01cclxuICAgIHNlbGVjdGVkQ29uY2VydC5yZW1vdmUoKTtcclxuXHJcbiAgICAvL1VwZGF0ZSBEYXRhLUluZGV4IEF0dHJpYnV0ZVxyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9KTtcclxuICAgIFVJLnVwZGF0ZUNvbmNlcnREdXJhdGlvbihVSS5nZXRDb25jZXJ0RHVyYXRpb24oVUkuY29uY2VydFBpZWNlQXJyKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgYWRkUGllY2VUb0RPTShwaWVjZSkge1xyXG5cclxuICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5hcHBlbmRDaGlsZChwaWVjZSk7XHJcbiAgfVxyXG5cclxuICBjbGVhckZhdmVMaXN0KCkge1xyXG4gICAgd2hpbGUgKFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuZmlyc3RDaGlsZCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLnJlbW92ZUNoaWxkKFxyXG4gICAgICAgIFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuZmlyc3RDaGlsZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0ludGVybWlzc2lvbihlKSB7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5jb25jZXJ0LmludGVybWlzc2lvbicpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSAnY29uY2VydCcpIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgZS50YXJnZXQgPT09IFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYSAmJlxyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmNvbmNlcnQuc2hvdycpXHJcbiAgICApIHtcclxuICAgICAgbGV0IGN1cnJlbnRDb25jZXJ0ID0gVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJy5jb25jZXJ0LnNob3cnXHJcbiAgICAgICk7XHJcbiAgICAgIGN1cnJlbnRDb25jZXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVDb25jZXJ0VGl0bGUoKSB7XHJcbiAgICBsZXQgY29uY2VydFRpdGxlID0gVUlTZWxlY3RvcnMuY29uY2VydFRpdGxlSW5wdXQudmFsdWU7XHJcblxyXG4gICAgaWYgKGNvbmNlcnRUaXRsZSA9PT0gJycpIHtcclxuICAgICAgLy9QbGVhc2UgUHJvdmlkZSBBIFRpdGxlLlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9DaGFuZ2UgRE9NXHJcbiAgICAgIFVJU2VsZWN0b3JzLnJpZ2h0U2VhcmNoQXJlYS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRUaXRsZUhlYWRlci50ZXh0Q29udGVudCA9IGAke2NvbmNlcnRUaXRsZX1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ29uY2VydFRpdGxlKCkge1xyXG4gICAgVUlTZWxlY3RvcnMucmlnaHRTZWFyY2hBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUludGVybWlzc2lvbihlKSB7XHJcbiAgICBpZiAoIVVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuYWRkLWludGVybWlzc2lvbicpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBQYXJlbnRcclxuICAgIGxldCBwYXJlbnRDb25jZXJ0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgcGFyZW50Q29uY2VydC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcblxyXG4gICAgLy9NYWtlIEludGVybWlzc2lvbiBFbGVtZW50XHJcbiAgICBsZXQgaW50ZXJtaXNzaW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGludGVybWlzc2lvbkVsLmNsYXNzTGlzdCA9ICdjb25jZXJ0IGludGVybWlzc2lvbic7XHJcbiAgICAvL2ludGVybWlzc2lvbkVsLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcbiAgICBpbnRlcm1pc3Npb25FbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1iYXJzIHBpZWNlLWRyYWctYmFyc1wiIGRyYWdnYWJsZT1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICA8cD5JbnRlcm1pc3Npb248L3A+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzIGZhLTJ4IGRlbGV0ZS1waWVjZVwiIGlkPVwiZGVsZXRlLWludGVybWlzc2lvblwiPjwvaT5cclxuICAgICAgYDtcclxuXHJcbiAgICAvL0FERCBBUFAgRlVOQ1RJT04gSEVSRVxyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLnNwbGljZShcclxuICAgICAgVUkuY29uY2VydFBpZWNlQXJyLmluZGV4T2YocGFyZW50Q29uY2VydCkgKyAxLFxyXG4gICAgICAwLFxyXG4gICAgICBpbnRlcm1pc3Npb25FbFxyXG4gICAgKTtcclxuXHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIH0pO1xyXG4gICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5hcHBlbmRDaGlsZChwaWVjZSk7XHJcbiAgICB9KTtcclxuICAgIC8vY29uY2VydEJ1aWxkZXJBcmVhLmFwcGVuZENoaWxkKGludGVybWlzc2lvbkVsKTtcclxuICAgIC8vY29uc29sZS5sb2coY29uY2VydFBpZWNlQXJyKTtcclxuXHJcbiAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKFVJLmNvbmNlcnRQaWVjZUFycikpO1xyXG5cclxuICAgIC8vRGVsZXRlIEludGVybWlzc2lvblxyXG4gICAgbGV0IGNsb3NlSW50ZXJtaXNzaW9uID0gaW50ZXJtaXNzaW9uRWwucXVlcnlTZWxlY3RvcignI2RlbGV0ZS1pbnRlcm1pc3Npb24nKTtcclxuICAgIGNsb3NlSW50ZXJtaXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgVUkuY29uY2VydFBpZWNlQXJyLnNwbGljZShVSS5jb25jZXJ0UGllY2VBcnIuaW5kZXhPZihlLnRhcmdldC5wYXJlbnRFbGVtZW50KSwgMSk7XHJcblxyXG4gICAgICAvL1JlbW92ZSBJbnRlcm1pc3Npb24gZnJvbSBET01cclxuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgIC8vVXBkYXRlIERhdGEtSW5kZXggQXR0cmlidXRlXHJcbiAgICAgIFVJLmNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgVUkudXBkYXRlQ29uY2VydER1cmF0aW9uKFVJLmdldENvbmNlcnREdXJhdGlvbihVSS5jb25jZXJ0UGllY2VBcnIpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlSW50ZXJtaXNzaW9uKGludGVybWlzc2lvbkVsZW1lbnQpIHtcclxuICAgIGxldCBjbG9zZUludGVybWlzc2lvbiA9IGludGVybWlzc2lvbkVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJyNkZWxldGUtaW50ZXJtaXNzaW9uJ1xyXG4gICAgKTtcclxuICAgIGNsb3NlSW50ZXJtaXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHBhcnNlRHVyYXRpb24oKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKFxyXG4gICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS1pbmZvIHA6bGFzdC1vZi10eXBlJykudGV4dENvbnRlbnQuc3BsaXQoXCInXCIpWzBdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy9EcmFnIEZ1bmN0aW9uc1xyXG5cclxuICBkcmFnU3RhcnQoZSkge1xyXG4gICAgVUkuZHJhZ1N0YXJ0SW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0VudGVyKCkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdvdmVyJyk7XHJcbiAgfVxyXG5cclxuICBkcmFnTGVhdmUoKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcclxuICB9XHJcblxyXG4gIGRyYWdPdmVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIGRyYWdEcm9wKGUpIHtcclxuICAgIGNvbnN0IGRyYWdFbmRJbmRleCA9ICtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcclxuICAgIGNvbnNvbGUubG9nKGBmcm9tIGRyYWdEUk9QICR7ZHJhZ0VuZEluZGV4fSwgJHtVSS5kcmFnU3RhcnRJbmRleH1gKVxyXG4gICAgVUkuc3dhcEl0ZW1zKFVJLmRyYWdTdGFydEluZGV4LCBkcmFnRW5kSW5kZXgpO1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0xpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IHBpZWNlRHJhZ0JhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGllY2UtZHJhZy1iYXJzJyk7XHJcbiAgICBjb25zdCBkcmFnQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uY2VydCcpO1xyXG5cclxuICAgIHBpZWNlRHJhZ0JhcnMuZm9yRWFjaCgoZHJhZykgPT4ge1xyXG4gICAgICBkcmFnLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIFVJLmRyYWdTdGFydCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkcmFnQm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIFVJLmRyYWdPdmVyKTtcclxuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBVSS5kcmFnRHJvcCk7XHJcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBVSS5kcmFnRW50ZXIpO1xyXG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgVUkuZHJhZ0xlYXZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3dhcEl0ZW1zKGZyb21JbmRleCwgdG9JbmRleCkge1xyXG4gICAgY29uc3QgaXRlbU9uZSA9IFVJLmNvbmNlcnRQaWVjZUFycltmcm9tSW5kZXhdO1xyXG4gICAgY29uc3QgaXRlbVR3byA9IFVJLmNvbmNlcnRQaWVjZUFyclt0b0luZGV4XTtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coVUkuY29uY2VydFBpZWNlQXJyKTtcclxuICAgIGNvbnNvbGUubG9nKGl0ZW1PbmUpO1xyXG4gICAgY29uc29sZS5sb2coaXRlbVR3byk7XHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnJbZnJvbUluZGV4XSA9IGl0ZW1Ud287XHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnJbdG9JbmRleF0gPSBpdGVtT25lO1xyXG5cclxuICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5pbm5lckhUTUwgPSBgYDtcclxuXHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgY29uc29sZS5sb2codHlwZW9mIGl0ZW0pXHJcbiAgICAgIFVJLmFkZFBpZWNlVG9ET00oaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vSE9NRVBBR0VcclxuICBkaXNwbGF5Q29uY2VydHModXNlciwgYWxsID0gZmFsc2UpIHtcclxuICAgIGlmIChVSVNlbGVjdG9ycy5mdWxsQ29uY2VydHNHcmlkLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgVUlTZWxlY3RvcnMuZnVsbENvbmNlcnRzR3JpZC5pbm5lckhUTUwgPSBgYDtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlci5jb25jZXJ0cyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyLmNvbmNlcnRzLmxlbmd0aCk7XHJcblxyXG5cclxuICAgIGlmICh1c2VyLmNvbmNlcnRzLmxlbmd0aCA9PT0gMCB8fCB1c2VyLmNvbmNlcnRzLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGxldCBub3RpZmljYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbm90aWZpY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdCA9ICduby1jb25jZXJ0cy1ub3RpZmljYXRpb24nO1xyXG4gICAgICBub3RpZmljYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXBvc2VyLW5hbWVcIj5WaXNpdCB0aGUgY29uY2VydCBidWlsZGVyIHBhZ2UgYWJvdmUgdG8gc3RhcnQgYnVpbGRpbmcgY29uY2VydHMhPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBgO1xyXG4gICAgICBVSVNlbGVjdG9ycy55b3VyQ29uY2VydHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnlvdXJDb25jZXJ0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChub3RpZmljYXRpb25Db250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmICh1c2VyLmZhdm9yaXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgIC8vICAgbGV0IG5vdGlmaWNhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyAgIG5vdGlmaWNhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QgPSAnbm8tZmF2b3JpdGVzLW5vdGlmaWNhdGlvbic7XHJcbiAgICAvLyAgIG5vdGlmaWNhdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAvLyAgICAgICAgICAgPHAgY2xhc3M9XCJuby1mYXZvcml0ZXMtbWVzc2FnZVwiPlBsZWFzZSBicm93c2UgY29tcG9zZXJzIHRvIGFkZCBzb21lIGZhdm9yaXRlcyE8L3A+XHJcbiAgICAvLyAgICAgICBgO1xyXG4gICAgLy8gICBVSVNlbGVjdG9ycy5ob21lU2VhcmNoUmVzdWx0cy5hcHBlbmRDaGlsZChub3RpZmljYXRpb25Db250YWluZXIpO1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvL1NFRSBob21lcGFnZS5qcyBMaW5lIDg2XHJcbiAgICB1c2VyLmNvbmNlcnRzLmZvckVhY2goKGNvbmNlcnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChhbGwgPT09IGZhbHNlICYmIGluZGV4IDwgMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGw9PT1mYWxzZSwgaW5kZXggPCAzJyk7XHJcbiAgICAgICAgLy9mdWxsQ29uY2VydHNHcmlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgbGV0IGNvbmNlcnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25jZXJ0Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdzZWFyY2gtcmVzdWx0JztcclxuICAgICAgICBjb25jZXJ0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb25jZXJ0LWlkLW51bVwiPiR7Y29uY2VydC5pZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJjb25jZXJ0LW5hbWVcIiBpZD1cImNvbmNlcnQtbmFtZVwiPiAke2NvbmNlcnQudGl0bGVcclxuICAgICAgICAgIH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7Y29uY2VydC5waWVjZXNcclxuICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgPHAgY2xhc3M9XCJ0aW55LXBpZWNlLXRpdGxlXCI+IDxzdHJvbmc+ICR7aXRlbS5jb21wb3Nlcn08L3N0cm9uZz4gJHtpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYC50cmltKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5qb2luKCcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnktYnRuIHJlbW92ZS1jb25jZXJ0LWJ0blwiPkRlbGV0ZSBDb25jZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG92ZXItZ29sZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgIFVJU2VsZWN0b3JzLnlvdXJDb25jZXJ0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb25jZXJ0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBjb25jZXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uY2VydENvbnRhaW5lci5jbGFzc0xpc3QgPSAnc2VhcmNoLXJlc3VsdCc7XHJcbiAgICAgICAgY29uY2VydENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29uY2VydC1pZC1udW1cIj4ke2NvbmNlcnQuaWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiY29uY2VydC1uYW1lXCIgaWQ9XCJjb25jZXJ0LW5hbWVcIj4gJHtjb25jZXJ0LnRpdGxlXHJcbiAgICAgICAgICB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAke2NvbmNlcnQucGllY2VzXHJcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aW55LXBpZWNlLXRpdGxlXCI+IDxzdHJvbmc+ICR7aXRlbS5jb21wb3Nlcn08L3N0cm9uZz4gJHtpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAudHJpbSgpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmpvaW4oJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG4gcmVtb3ZlLWNvbmNlcnQtYnRuXCI+RGVsZXRlIENvbmNlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Zlci1nb2xkIFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgIFVJU2VsZWN0b3JzLmZ1bGxDb25jZXJ0c0dyaWQuYXBwZW5kQ2hpbGQoY29uY2VydENvbnRhaW5lcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFVJLnJlbW92ZUNvbmNlcnRMaXN0ZW5lcnMoVUlTZWxlY3RvcnMuZnVsbENvbmNlcnRzR3JpZCk7XHJcbiAgICBVSS5yZW1vdmVDb25jZXJ0TGlzdGVuZXJzKFVJU2VsZWN0b3JzLnlvdXJDb25jZXJ0c0NvbnRhaW5lcik7XHJcblxyXG4gICAgLy9USElTIElTIFRIRSBDT1JSRUNUIEJSQUNLRVQgRlVDSyBFU0xJTlQgQU5EIFBSRVRUSUVSLlxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSG92ZXJMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtcmVzdWx0Jyk7XHJcblxyXG4gICAgWy4uLnNlYXJjaFJlc3VsdHNdLmZvckVhY2goKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIFVJLnNob3dHb2xkVW5kZXJsaW5lKTtcclxuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBVSS5oaWRlR29sZFVuZGVybGluZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNvbmNlcnRMaXN0ZW5lcnMoY29udGFpbmVyKSB7XHJcbiAgICBsZXQgY29uY2VydHNMaXN0ID0gY29udGFpbmVyLmNoaWxkcmVuO1xyXG5cclxuICAgIFsuLi5jb25jZXJ0c0xpc3RdLmZvckVhY2goKGNvbmNlcnQpID0+IHtcclxuICAgICAgaWYgKCFjb25jZXJ0LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtY29uY2VydC1idG4nKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25jZXJ0XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnJlbW92ZS1jb25jZXJ0LWJ0bicpXHJcbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5kZWxldGVDb25jZXJ0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDb25jZXJ0KGUpIHtcclxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICBsZXQgc2VsZWN0ZWRDb25jZXJ0SUQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuY29uY2VydC1pZC1udW0nXHJcbiAgICApO1xyXG4gICAgLy9TV0lUQ0ggVE8gU1RPUkFHRSBGVU5DVElPTlxyXG4gICAgbGV0IGRlbGV0ZUNvbmNlcnRVc2VyID0gU3RvcmFnZS5nZXRVc2VyKCk7XHJcbiAgICBkZWxldGVDb25jZXJ0VXNlci5jb25jZXJ0cy5mb3JFYWNoKChjb25jZXJ0LCBpbmRleCwgb2JqZWN0KSA9PiB7XHJcblxyXG4gICAgICBpZiAoY29uY2VydC5pZCA9PT0gTnVtYmVyKHNlbGVjdGVkQ29uY2VydElELnRleHRDb250ZW50KSkge1xyXG4gICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL1NUT1JBR0UgRlVOQ1RJT05cclxuICAgIFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIGRlbGV0ZUNvbmNlcnRVc2VyKTtcclxuXHJcbiAgfVxyXG5cclxuICAvL1doZXJlIHRvIGNhbGwgdGhpcz9cclxuICBzaG9ydGVuUGllY2VUaXRsZShwaWVjZU5hbWVzKSB7XHJcbiAgICBwaWVjZU5hbWVzLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIGxldCBwaWVjZVRpdGxlTGVuZ3RoID0gcGllY2UudGV4dENvbnRlbnQuc2xpY2UoMCwgMjApICsgJy4uLic7XHJcbiAgICAgIHBpZWNlLnRleHRDb250ZW50ID0gcGllY2VUaXRsZUxlbmd0aDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd0dvbGRVbmRlcmxpbmUoZSkge1xyXG4gICAgaWYgKCFlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuaG92ZXItZ29sZCcpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5ob3Zlci1nb2xkJykuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZUdvbGRVbmRlcmxpbmUoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5ob3Zlci1nb2xkJykpIHtcclxuICAgICAgZS50YXJnZXQucXVlcnlTZWxlY3RvcignLmhvdmVyLWdvbGQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGhvbWVDYXJkRW50ZXIoY29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBmdWxsRmF2b3JpdGVzR3JpZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZnVsbC1mYXZvcml0ZXMtZ3JpZCcpO1xyXG4gICAgY29uc3QgZnVsbENvbmNlcnRzR3JpZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZnVsbC1jb25jZXJ0cy1ncmlkJyk7XHJcblxyXG4gICAgZnVsbEZhdm9yaXRlc0dyaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGZ1bGxDb25jZXJ0c0dyaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBbLi4uY29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50ID09PSBmdWxsRmF2b3JpdGVzR3JpZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdFswXSA9PT0gJ2hlYWRlci1yb3cnKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctbW9yZS1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0WzBdID09PSAnc2VhcmNoLXJlc3VsdHMnXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdFsxXSA9PT0gJ3lvdXItcmVjZW50LWNvbmNlcnRzJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdFsxXSA9PT0gJ2Z1bGwtY29uY2VydHMtZ3JpZCcpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uY2VydHNFbnRlcihjb250YWluZXIpIHtcclxuICAgIGNvbnN0IGZ1bGxDb25jZXJ0c0dyaWQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5zZWFyY2gtcmVzdWx0cy5mdWxsLWNvbmNlcnRzLWdyaWQnXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bGxDb25jZXJ0c0dyaWQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuXHJcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmhlYWRlci1yb3cuY29uY2VydHMtaGVhZGVyLXJvdycpLnN0eWxlLmRpc3BsYXkgPVxyXG4gICAgICAnZmxleCc7XHJcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5oZWFkZXItcm93LmNvbmNlcnRzLWhlYWRlci1yb3cgLnZpZXctbW9yZS1idG4nXHJcbiAgICApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvL0NoYW5nZSB0aGlzXHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBTdG9yYWdlLmdldFVzZXIoKTtcclxuXHJcblxyXG4gICAgVUkuZGlzcGxheUNvbmNlcnRzKGN1cnJlbnRVc2VyLCB0cnVlKTtcclxuICB9XHJcblxyXG5cclxuICBmYXZvcml0ZXNFbnRlcihjb250YWluZXIpIHtcclxuICAgIGNvbnN0IGZ1bGxGYXZvcml0ZXNHcmlkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLWZhdm9yaXRlcy1ncmlkJyk7XHJcbiAgICBmdWxsRmF2b3JpdGVzR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1yb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1yb3cgLnZpZXctbW9yZS1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgWy4uLmZ1bGxGYXZvcml0ZXNHcmlkLmNoaWxkcmVuXS5mb3JFYWNoKChmYXZvcml0ZSkgPT4ge1xyXG4gICAgICBpZiAoZmF2b3JpdGUucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyLW5hbWUnKS50ZXh0Q29udGVudC5sZW5ndGggPj0gMTgpIHtcclxuICAgICAgICBmYXZvcml0ZS5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXItbmFtZScpLnN0eWxlLmZvbnRTaXplID0gJzEuMnJlbSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICByZXN1bHRzRXhpdChlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdmcm9tIHJlc3VsdHMgZXhpdCcsIGUudGFyZ2V0LmlkKTtcclxuICAgIC8vY29uc29sZS5sb2coZHJvcERvd25Zb3VyQ29uY2VydHMuaWQpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lci5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgWy4uLlVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIuY2hpbGRyZW5dLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlJyk7XHJcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gVUlTZWxlY3RvcnMucmV0dXJuSG9tZSkge1xyXG4gICAgICAgIC8vQ2hhbmdlIHRoaXNcclxuICAgICAgICBVSS5ob21lQ2FyZEVudGVyKFVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBVSVNlbGVjdG9ycy5vcGVuUHJvZmlsZSkge1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGUudGFyZ2V0ID09PSBVSVNlbGVjdG9ycy5vcGVuRmF2b3JpdGVzIHx8XHJcbiAgICAgICAgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbmNlcnQtdmlldy1tb3JlLWJ0bicpICYmXHJcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZpZXctbW9yZS1idG4nKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgVUkuZmF2b3JpdGVzRW50ZXIoVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lcik7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgZS50YXJnZXQgPT09IFVJU2VsZWN0b3JzLm9wZW5Db25jZXJ0cyB8fFxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29uY2VydC12aWV3LW1vcmUtYnRuJykgfHxcclxuICAgICAgICBlLnRhcmdldC5pZCA9PT0gVUlTZWxlY3RvcnMuZHJvcERvd25Zb3VyQ29uY2VydHMuaWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgVUkuY29uY2VydHNFbnRlcihVSVNlbGVjdG9ycy5tYWluQ29udGVudElubmVyKTtcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIC8vU2hvcnRlbiBQaWVjZSB0aXRsZSBpZiBuZWNlc3NhcnlcclxuICBmb3JtYXRSZXN1bHRzQ2FyZCgpIHtcclxuICAgIGNvbnN0IHBpZWNlTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGllY2UtbmFtZScpO1xyXG4gICAgcGllY2VOYW1lcy5mb3JFYWNoKChwaWVjZSkgPT4ge1xyXG4gICAgICBsZXQgcGllY2VUaXRsZUxlbmd0aCA9IHBpZWNlLnRleHRDb250ZW50LnNsaWNlKDAsIDMwKSArICcuLi4nO1xyXG4gICAgICBwaWVjZS50ZXh0Q29udGVudCA9IHBpZWNlVGl0bGVMZW5ndGg7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vQ2xlYXIgQ29tcG9zZXIgU2VhcmNoIFJlc3VsdHNcclxuICBjbGVhckNvbXBvc2VyTGlua3MoKSB7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuc2VhcmNoRmllbGQudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHdoaWxlIChVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLnJlbW92ZUNoaWxkKFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MuZmlyc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAoVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5maXJzdENoaWxkKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MucmVtb3ZlQ2hpbGQoVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvL0NPTVBPU0VSIFBBR0VcclxuICBjbGVhckNvbXBvc2VyUmVzdWx0cygpIHtcclxuICAgIFVJU2VsZWN0b3JzLnBpZWNlRGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIHNob3dCdXR0b25FcnJvcihidXR0b24sIG1lc3NhZ2UpIHtcclxuICAgIGxldCBpbml0YWxUZXh0ID0gYnV0dG9uLnRleHRDb250ZW50O1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgJHttZXNzYWdlfWA7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSBpbml0YWxUZXh0XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFBpZWNlSW50b1ZpZXcoKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5waWVjZURldGFpbHNDb250YWluZXIuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVSSA9IG5ldyBVaSgpO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5sb2dnZWQtaW4gaW1nIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICB0b3A6IDEwJTtcXHJcXG4gIHJpZ2h0OiA1JTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IGxpIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIC8qbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICovXFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIFxcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2QyMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYS1pbm5lciB7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhLWlubmVyLnJlbW92ZSB7XFxyXFxuICBhbmltYXRpb246IC4xcyByZW1vdmUtbWFpbjtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJlbW92ZS1tYWluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyBpIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMsIC55b3VyLXJlY2VudC1jb25jZXJ0cyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWdhcDogMjBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMudXNlci1wcm9maWxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAuY29tcG9zZXItbmFtZSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAuY29uY2VydC1uYW1lIHtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAudGlueS1waWVjZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQubGVhdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMuZnVsbC1mYXZvcml0ZXMtZ3JpZCwgLnNlYXJjaC1yZXN1bHRzLmZ1bGwtY29uY2VydHMtZ3JpZCB7XFxyXFxuICBcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAuMXMgZWFzZS1pbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmZ1bGwtZmF2b3JpdGVzLWdyaWQuYW5pbWF0ZSB7XFxyXFxuICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyLWdvbGQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAuNXJlbTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXItZ29sZC5zaG93IHtcXHJcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHJpZ2h0OiAyMCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLXBsYXllci1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi52aXNpdC1wYWdlIHtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbmNlcnQtaWQtbnVtIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXVzZXJuYW1lICB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4ucmVtb3ZlLWNvbmNlcnQtYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNDMwMmI7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnlvdXItcmVjZW50LWNvbmNlcnRzLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG9wYWNpdHl7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29uY2VydC1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbjogLjVyZW07O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY29udGVudC1hcmVhLWlubmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLW1vYmlsZS1pY29ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZWZ0LW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByaW1hcnktYnRuLnJlbW92ZS1jb25jZXJ0LWJ0biB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXBwL3N0YXRpYy9jc3MvaG9tZXBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsT0FBTztFQUNQLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEI7R0FDQztBQUNIOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7O0VBRXRCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjOztFQUVkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COzs7O0FBSUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixPQUFPOztBQUVUOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7OztBQUdyQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7O0VBRVo7QUFDRjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLDJEQUEyRDtBQUM3RDs7OztBQUlBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRSwyQkFBMkI7QUFDN0I7Ozs7QUFJQTs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtHQUNHLFVBQVU7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhOztBQUVmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7OztBQUdBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5Qjs7QUFFM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7O0FBSUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBOzs7RUFHRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7OztBQUdBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2dlZC1pbiBpbWcge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcmlnaHQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHRvcDogMTAlO1xcclxcbiAgcmlnaHQ6IDUlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUgbGkge1xcclxcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgLyptYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIFxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgXFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGkge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjZDIxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhLWlubmVyIHtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgbWF4LWhlaWdodDogOTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50LWFyZWEtaW5uZXIucmVtb3ZlIHtcXHJcXG4gIGFuaW1hdGlvbjogLjFzIHJlbW92ZS1tYWluO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmVtb3ZlLW1haW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cywgLnlvdXItcmVjZW50LWNvbmNlcnRzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cy51c2VyLXByb2ZpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC5jb21wb3Nlci1uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC5jb25jZXJ0LW5hbWUge1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC50aW55LXBpZWNlLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC5sZWF2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cy5mdWxsLWZhdm9yaXRlcy1ncmlkLCAuc2VhcmNoLXJlc3VsdHMuZnVsbC1jb25jZXJ0cy1ncmlkIHtcXHJcXG4gIFxcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IC4xcyBlYXNlLWluO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbC1mYXZvcml0ZXMtZ3JpZC5hbmltYXRlIHtcXHJcXG4gICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXItZ29sZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IC41cmVtO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5ob3Zlci1nb2xkLnNob3cge1xcclxcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcmlnaHQ6IDIwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8tcGxheWVyLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLnZpc2l0LXBhZ2Uge1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29uY2VydC1pZC1udW0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdXNlcm5hbWUgIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5yZW1vdmUtY29uY2VydC1idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0MzAyYjtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ueW91ci1yZWNlbnQtY29uY2VydHMuaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eXtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LWhlaWdodDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb25jZXJ0LW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAuNXJlbTs7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jb250ZW50LWFyZWEtaW5uZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtbW9iaWxlLWljb25zIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlZnQtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJpbWFyeS1idG4ucmVtb3ZlLWNvbmNlcnQtYnRuIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kOiAjNDI1N2IyO1xcclxcbiAgICAtLWhlcm8tYmFja2dyb3VuZDogIzNiNGM5YjtcXHJcXG4gICAgLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kOiAjM2NjZmNmO1xcclxcbiAgICAtLW1haW4tYmFja2dyb3VuZDogI2Y2ZjdmYjtcXHJcXG4gICAgLS1nb2xkOiAjZmFjZDIxO1xcclxcbiAgICAtLWRlZmF1bHQtc2hhZG93OiAwcHggMTNweCAyNnB4ICMwMDAwMDAyRjtcXHJcXG4gICAgLS1zdWNjZXNzLWNvbG9yOiAjMmVjYzcxO1xcclxcbiAgICAtLWVycm9yLWNvbG9yOiAjZTc0YzNjO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctbmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctbmF2IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtdGl0bGUge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYSwgLnNpdGUtdGl0bGUgYSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYTpob3ZlciwgLm5hdi1yaWdodCBsaSBhOmhvdmVyLCAuc2l0ZS10aXRsZSBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMTg5LCAxOTUsIDE5OSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIGEgPiAqIHtcXHJcXG4gICAgbWFyZ2luOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IGxpIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lLW1vYmlsZS1pY29ucyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLW92ZXJsYXkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0b3A6IDglO1xcclxcbiAgICAvKmxlZnQ6IDI2JTsqL1xcclxcbiAgICByaWdodDogMjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd24gLnByaW1hcnktYnRuIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1maWVsZCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItZmllbGQ6aW52YWxpZCB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLmZhLXRpbWVzLmNsb3NlLXNlYXJjaCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVyby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVyby1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyLWxlZnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLmdldC1zdGFydGVkLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYWNoZXItcGFyZW50LWxpbmtzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYWNoZXItcGFyZW50LWxpbmtzIGEge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwge1xcclxcbiAgICBoZWlnaHQ6IDc1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsIGltZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgLyogQ1NTIGNoYW5nZSBpbiBKUyAqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6IGdyZXk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLyogQ2hhbmdlIGZsZXgvbm9uZSAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIgPiBpIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoaXJkLXBhcnR5LWJ1dHRvbnMge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4gaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4gcCB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSB7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgICBwYWRkaW5nOiAuNzVyZW0gMnJlbSAuNzVyZW0gLjNyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICBib3JkZXI6IDJweCBncmV5IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNjbG9zZS1zaWduLWluLCAjY2xvc2Utc2lnbi11cCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpcnRoZGF5LXNlbGVjdG9yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCBsYWJlbCB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiAjYzJjNmQ0O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuc3VjY2VzcyBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgaW5wdXQgIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLmVycm9yIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59IFxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmVycm9yLXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgLmVycm9yLXRleHQge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBmb250LXNpemU6IC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0ZXItYnRuLCAubG9naW4tYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0ZXItYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzZkNDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnRuIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDE1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaDEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAuNTByZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWFyZWEge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1idXR0b25zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbnMgLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogNjIlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5zdWNjZXNzIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLmVycm9yIGlucHV0ICB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuZXJyb3IgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmVycm9yLXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbiAgICAvKnZpc2liaWxpdHk6IGhpZGRlbjsqL1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uYmlnLWxvZ2luLWJ0biB7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYnJvd3NlLW1vZGFsIHtcXHJcXG4gICAgLyogQ0hBTkdFIFdJVEggSkFWQVNDSVBUICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1tb2RhbC1hcmVhIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICBcXHJcXG4gICAgLyp0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsqL1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnJvd3NlLW1vZGFsLWFyZWEuc2hvdyB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJyb3dzZS1oZWFkZXIgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1oZWFkZXIge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLWNvbXBvc2VycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8qIG1heC1oZWlnaHQ6IDEwMCU7ICovXFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyIGgxICB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlci1jb21wb3NlcnMge1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFuZG9tLWNvbXBvc2VyLWxpbmtzIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlcm8tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxhbmRpbmctbmF2IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXYtbGVmdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICB3aWR0aDogMzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb2JpbGUtc2VhcmNoLWljb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogOTAlO1xcclxcbiAgICAgICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgICAgIGxlZnQ6IDIwJTtcXHJcXG4gICAgICAgIHRvcDogNy41JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICAgIFxcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIC8qXFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgKi9cXHJcXG4gICAgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdi1yaWdodCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICAgICAgLyogdG9wOiA5JTsgKi9cXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbGVmdDogMDsgICAgXFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aGlyZC1wYXJ0eS1idXR0b25zIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGhpcmQtcGFydHktYnV0dG9ucyAuc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgICAgICBtYXJnaW46IC41cmVtIDA7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5zZWxlY3QtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbi11cC1mb3JtIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLjNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tZmllbGQge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByaW1hcnktYnRuLnJlZ2lzdGVyLWJ0biwgLnByaW1hcnktYnRuLmxvZ2luLWJ0biB7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLWJhci1vdmVybGF5IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtcmVzdWx0LWRvd24gcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXBwL3N0YXRpYy9jc3MvbGFuZGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsc0JBQXNCOztBQUUx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UUFDSSxhQUFhO1FBQ2IsV0FBVztRQUNYLE9BQU87O0lBRVg7OztJQUdBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsUUFBUTtJQUNaOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQ6ICM0MjU3YjI7XFxyXFxuICAgIC0taGVyby1iYWNrZ3JvdW5kOiAjM2I0YzliO1xcclxcbiAgICAtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQ6ICMzY2NmY2Y7XFxyXFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kOiAjZjZmN2ZiO1xcclxcbiAgICAtLWdvbGQ6ICNmYWNkMjE7XFxyXFxuICAgIC0tZGVmYXVsdC1zaGFkb3c6IDBweCAxM3B4IDI2cHggIzAwMDAwMDJGO1xcclxcbiAgICAtLXN1Y2Nlc3MtY29sb3I6ICMyZWNjNzE7XFxyXFxuICAgIC0tZXJyb3ItY29sb3I6ICNlNzRjM2M7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZGluZy1uYXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubGFuZGluZy1uYXYgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS10aXRsZSB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSBhLCAuc2l0ZS10aXRsZSBhIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSBhOmhvdmVyLCAubmF2LXJpZ2h0IGxpIGE6aG92ZXIsIC5zaXRlLXRpdGxlIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogcmdiYSgxODksIDE5NSwgMTk5LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYSA+ICoge1xcclxcbiAgICBtYXJnaW46IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcmlnaHQgbGkge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtbW9iaWxlLWljb25zIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItb3ZlcmxheSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRvcDogOCU7XFxyXFxuICAgIC8qbGVmdDogMjYlOyovXFxyXFxuICAgIHJpZ2h0OiAyMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd246aG92ZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biAucHJpbWFyeS1idG4ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtYmFyLWZpZWxkIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1maWVsZDppbnZhbGlkIHtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEuZmEtdGltZXMuY2xvc2Utc2VhcmNoIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtaWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5oZXJvLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZXJvLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXItbGVmdCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXRleHQtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uZ2V0LXN0YXJ0ZWQtYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhY2hlci1wYXJlbnQtbGlua3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhY2hlci1wYXJlbnQtbGlua3MgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jYXJvdXNlbCB7XFxyXFxuICAgIGhlaWdodDogNzUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgICAvKiBDU1MgY2hhbmdlIGluIEpTICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogZ3JleTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAvKiBDaGFuZ2UgZmxleC9ub25lICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWNvbnRhaW5lciA+IGkge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGhpcmQtcGFydHktYnV0dG9ucyB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biBwIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIHtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY29udGFpbmVyIHNlbGVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IC43NXJlbSAycmVtIC43NXJlbSAuM3JlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGJvcmRlcjogMnB4IGdyZXkgc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2Nsb3NlLXNpZ24taW4sICNjbG9zZS1zaWduLXVwIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlydGhkYXktc2VsZWN0b3Ige1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIGxhYmVsIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY29sb3I6ICNjMmM2ZDQ7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5zdWNjZXNzIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuc3VjY2VzcyBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5lcnJvciBpbnB1dCAge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5lcnJvciAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWdpc3Rlci1idG4sIC5sb2dpbi1idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWdpc3Rlci1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjNmQ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1idG4gYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBoMSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IC41MHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tYXJlYSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbnMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tYnV0dG9ucyAuc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZCBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQ6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyBwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiA2MiU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuc3VjY2VzcyBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuZXJyb3IgaW5wdXQgIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5lcnJvciBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufSBcXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxuICAgIC8qdmlzaWJpbGl0eTogaGlkZGVuOyovXFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5iaWctbG9naW4tYnRuIHtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNicm93c2UtbW9kYWwge1xcclxcbiAgICAvKiBDSEFOR0UgV0lUSCBKQVZBU0NJUFQgKi9cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgIFxcclxcbiAgICAvKnRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlOyovXFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5icm93c2UtbW9kYWwtYXJlYS5zaG93IHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYnJvd3NlLWhlYWRlciBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLWhlYWRlciB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5icm93c2UtY29tcG9zZXJzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLyogbWF4LWhlaWdodDogMTAwJTsgKi9cXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXIgaDEgIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyLWNvbXBvc2VycyB7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5yYW5kb20tY29tcG9zZXItbGlua3MgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVyby1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGFuZGluZy1uYXYge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdi1sZWZ0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS10aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vYmlsZS1zZWFyY2gtaWNvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICB3aWR0aDogNzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICAgICAgbGVmdDogMjAlO1xcclxcbiAgICAgICAgdG9wOiA3LjUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5icm93c2UtbW9kYWwtYXJlYSB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcXHJcXG4gICAgXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgLypcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAqL1xcclxcbiAgICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS10aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcXHJcXG4gICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2LXJpZ2h0IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgICAgICAvKiB0b3A6IDklOyAqL1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBsZWZ0OiAwOyAgICBcXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRoaXJkLXBhcnR5LWJ1dHRvbnMge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aGlyZC1wYXJ0eS1idXR0b25zIC5zZWNvbmRhcnktYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnNlbGVjdC1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWxlY3QtY29udGFpbmVyIHNlbGVjdCB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWZvcm0gbGFiZWwge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAuM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9ybS1maWVsZCB7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJpbWFyeS1idG4ucmVnaXN0ZXItYnRuLCAucHJpbWFyeS1idG4ubG9naW4tYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtYmFyLW92ZXJsYXkge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlYXJjaC1yZXN1bHQtZG93biBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5icm93c2UtbW9kYWwtYXJlYSB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9