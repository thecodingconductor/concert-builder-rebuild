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
/* harmony import */ var _modules_sessionObj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/sessionObj */ "./app/static/js-modules/modules/sessionObj.js");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/storage */ "./app/static/js-modules/modules/storage.js");
/* harmony import */ var _css_landing_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../css/landing.css */ "./app/static/css/landing.css");
/* harmony import */ var _css_landing_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_landing_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_homepage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../css/homepage.css */ "./app/static/css/homepage.css");
/* harmony import */ var _css_homepage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_homepage_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_composer_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../css/composer.css */ "./app/static/css/composer.css");
/* harmony import */ var _css_composer_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_composer_css__WEBPACK_IMPORTED_MODULE_11__);
















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
        let newPiece = new _modules_sessionObj__WEBPACK_IMPORTED_MODULE_7__["Piece"](pieceComposer, pieceTitle);
        console.log(newPiece);
        let newConcert = new _modules_sessionObj__WEBPACK_IMPORTED_MODULE_7__["Concert"]("No Name");
        newConcert.pieces.push(newPiece);
        _modules_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"].setNewConcert(newConcert);
        location.href = '/concert_builder';
    }
}

window.addEventListener('DOMContentLoaded', _modules_app__WEBPACK_IMPORTED_MODULE_0__["App"].initBase);

window.addEventListener('DOMContentLoaded', _modules_requests__WEBPACK_IMPORTED_MODULE_4__["Requests"].imageFetch);
window.addEventListener('DOMContentLoaded', () => {
    let currentUser = document.getElementById('hidden-user');
    if (!currentUser) {
        _modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].createConcert.classList.add('disabled');
    } else {
        _modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].createConcert.classList.remove('disabled');
    }
});

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].pieceList.forEach(piece => {
    piece.addEventListener('click', _modules_requests__WEBPACK_IMPORTED_MODULE_4__["Requests"].getPieceResults);
    piece.addEventListener('click', _modules_ui__WEBPACK_IMPORTED_MODULE_5__["UI"].scrollPieceIntoView);
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

  scrollPieceIntoView(e) {
    console.log('scroll piece into view');
    console.log(e.target);
    location.href = '#';
    location.href = "#piece-details";
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
___CSS_LOADER_EXPORT___.push([module.i, "/* FIX IMAGE */\r\n/* FIX SCROLL ON PIECE LIST */\r\n\r\nbody {\r\n  overflow: hidden;\r\n}\r\n\r\n.composer-top {\r\n  width: 100%;\r\n  flex: 1;\r\n  background-color: lightblue;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  \r\n}\r\n\r\n.composer-top, .composer-bottom {\r\n    color: #000;\r\n}\r\n\r\n.composer-wrap {\r\n  height: 200px;\r\n  width: 200px;\r\n  margin: 0 80px;\r\n  position: relative;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  object-fit: cover;\r\n  \r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.composer-bottom {\r\n  width: 100%;\r\n  flex: 2;\r\n  height: 100%;\r\n  min-height: 0px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n\r\n\r\n.composer-piece-list {\r\n  /*\r\n  height: 90%;\r\n  \r\n  overflow:hidden;\r\n  */\r\n  max-height: 90%;\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: auto;\r\n  height: 100%;\r\n  \r\n  \r\n}\r\n\r\n.composer-bottom-right {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  min-height: 0px;\r\n}\r\n\r\n.piece-details {\r\n \r\n  flex: 1;\r\n  width: 95%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-list {\r\n  background: #fff;\r\n  box-shadow: var(--default-shadow);\r\n  list-style: none;\r\n  padding: 0;\r\n  width: 100%;\r\n  flex: 3 1 auto;\r\n  border-radius: 4px;\r\n  overflow-y: scroll; \r\n  height: 80px;\r\n}\r\n\r\n.comment-list .comment {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.comment p {\r\n  margin: 0;\r\n}\r\n\r\n.comment p:first-child {\r\n  font-weight: bold;\r\n}\r\n\r\n.comment p:last-child {\r\n  font-size: .6rem;\r\n}\r\n\r\n.primary-btn.disabled {\r\n  background-color: rgba(60, 207, 207, 0.5);\r\n  cursor: not-allowed;\r\n}\r\n\r\n.primary-btn.error {\r\n  background-color: var(--error-color);\r\n}\r\n\r\n.hidden-user {\r\n  visibility: hidden;\r\n  font-size: .2rem;\r\n}\r\n\r\n/*\r\n.piece-list-wrap {\r\n    height: 75%;\r\n    width: 80%;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    \r\n}\r\n*/\r\n.user-interaction-area {\r\n  \r\n  flex: 1;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.piece-list {\r\n    list-style-type: none;\r\n    width: 90%;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    flex: 3 1 auto;\r\n    padding: 0;\r\n    \r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.piece-title {\r\n  color: #000;\r\n  background-color: #fff;\r\n  height: 50px;\r\n  width: 90%;\r\n  display: flex;\r\n  align-items: center;\r\n  /* border: 1px solid black; */\r\n  box-shadow: 3px 4px 11px -6px rgba(42,42,42,1);\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n  cursor: pointer;\r\n  padding: 1rem .5rem;\r\n  font-size: .9rem;\r\n}\r\n\r\n#user-comment {\r\n    font-family: 'Lato', sans-serif;\r\n    flex: 1;\r\n    margin: 20px 20px 0 20px;\r\n    resize: none;\r\n    outline: none;\r\n    border-radius: 5px;\r\n    \r\n}\r\n\r\n.user-buttons {\r\n    display: flex;\r\n    flex: 1;\r\n    align-items: center;\r\n    margin: 1rem 0;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#submit-comment {\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n\r\n@media(max-width: 768px) {\r\n\r\n  body {\r\n    overflow: auto;\r\n  }\r\n\r\n  .piece-details {\r\n    flex: none;\r\n  }\r\n\r\n  .composer-bottom-right {\r\n    width: 100%;\r\n    max-height: auto;\r\n    min-height: auto;\r\n  }\r\n\r\n\r\n\r\n  .user-buttons {\r\n    flex: none;\r\n  }\r\n\r\n  .composer-top {\r\n    flex-direction: column;\r\n    box-shadow: var(--default-shadow);\r\n  }\r\n\r\n .user-interaction-area textarea {\r\n   height: 50%;\r\n }\r\n\r\n  .composer-hero {\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  .composer-bottom {\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n    min-height: unset;\r\n    height: 100vh;\r\n  }\r\n\r\n  .composer-piece-list {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n  body {\r\n    overflow: auto;\r\n    height: auto;\r\n  }\r\n\r\n  .user-buttons {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .composer-informations > * {\r\n    text-align: center;\r\n  }\r\n\r\n  .user-buttons button {\r\n    width: 90%;\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  .piece-title {\r\n    font-size: .8rem;\r\n  }\r\n\r\n  #piece-title-result {\r\n    font-size: 1.3rem;\r\n    text-align: center;\r\n  }\r\n\r\n  #piece-duration {\r\n    text-align: center;\r\n  }\r\n\r\n  #piece-instrumentation {\r\n    font-size: .75rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .composer-top {\r\n    flex-direction: column;\r\n    box-shadow: var(--default-shadow);\r\n  }\r\n\r\n  .composer-hero {\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  .composer-bottom {\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n    min-height: unset;\r\n  }\r\n\r\n  \r\n\r\n  .composer-piece-list {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://app/static/css/composer.css"],"names":[],"mappings":"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","sourcesContent":["/* FIX IMAGE */\r\n/* FIX SCROLL ON PIECE LIST */\r\n\r\nbody {\r\n  overflow: hidden;\r\n}\r\n\r\n.composer-top {\r\n  width: 100%;\r\n  flex: 1;\r\n  background-color: lightblue;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  \r\n}\r\n\r\n.composer-top, .composer-bottom {\r\n    color: #000;\r\n}\r\n\r\n.composer-wrap {\r\n  height: 200px;\r\n  width: 200px;\r\n  margin: 0 80px;\r\n  position: relative;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  object-fit: cover;\r\n  \r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.composer-bottom {\r\n  width: 100%;\r\n  flex: 2;\r\n  height: 100%;\r\n  min-height: 0px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n\r\n\r\n.composer-piece-list {\r\n  /*\r\n  height: 90%;\r\n  \r\n  overflow:hidden;\r\n  */\r\n  max-height: 90%;\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: auto;\r\n  height: 100%;\r\n  \r\n  \r\n}\r\n\r\n.composer-bottom-right {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  min-height: 0px;\r\n}\r\n\r\n.piece-details {\r\n \r\n  flex: 1;\r\n  width: 95%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-list {\r\n  background: #fff;\r\n  box-shadow: var(--default-shadow);\r\n  list-style: none;\r\n  padding: 0;\r\n  width: 100%;\r\n  flex: 3 1 auto;\r\n  border-radius: 4px;\r\n  overflow-y: scroll; \r\n  height: 80px;\r\n}\r\n\r\n.comment-list .comment {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.comment p {\r\n  margin: 0;\r\n}\r\n\r\n.comment p:first-child {\r\n  font-weight: bold;\r\n}\r\n\r\n.comment p:last-child {\r\n  font-size: .6rem;\r\n}\r\n\r\n.primary-btn.disabled {\r\n  background-color: rgba(60, 207, 207, 0.5);\r\n  cursor: not-allowed;\r\n}\r\n\r\n.primary-btn.error {\r\n  background-color: var(--error-color);\r\n}\r\n\r\n.hidden-user {\r\n  visibility: hidden;\r\n  font-size: .2rem;\r\n}\r\n\r\n/*\r\n.piece-list-wrap {\r\n    height: 75%;\r\n    width: 80%;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    \r\n}\r\n*/\r\n.user-interaction-area {\r\n  \r\n  flex: 1;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.piece-list {\r\n    list-style-type: none;\r\n    width: 90%;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    flex: 3 1 auto;\r\n    padding: 0;\r\n    \r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.piece-title {\r\n  color: #000;\r\n  background-color: #fff;\r\n  height: 50px;\r\n  width: 90%;\r\n  display: flex;\r\n  align-items: center;\r\n  /* border: 1px solid black; */\r\n  box-shadow: 3px 4px 11px -6px rgba(42,42,42,1);\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n  cursor: pointer;\r\n  padding: 1rem .5rem;\r\n  font-size: .9rem;\r\n}\r\n\r\n#user-comment {\r\n    font-family: 'Lato', sans-serif;\r\n    flex: 1;\r\n    margin: 20px 20px 0 20px;\r\n    resize: none;\r\n    outline: none;\r\n    border-radius: 5px;\r\n    \r\n}\r\n\r\n.user-buttons {\r\n    display: flex;\r\n    flex: 1;\r\n    align-items: center;\r\n    margin: 1rem 0;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#submit-comment {\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n\r\n@media(max-width: 768px) {\r\n\r\n  body {\r\n    overflow: auto;\r\n  }\r\n\r\n  .piece-details {\r\n    flex: none;\r\n  }\r\n\r\n  .composer-bottom-right {\r\n    width: 100%;\r\n    max-height: auto;\r\n    min-height: auto;\r\n  }\r\n\r\n\r\n\r\n  .user-buttons {\r\n    flex: none;\r\n  }\r\n\r\n  .composer-top {\r\n    flex-direction: column;\r\n    box-shadow: var(--default-shadow);\r\n  }\r\n\r\n .user-interaction-area textarea {\r\n   height: 50%;\r\n }\r\n\r\n  .composer-hero {\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  .composer-bottom {\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n    min-height: unset;\r\n    height: 100vh;\r\n  }\r\n\r\n  .composer-piece-list {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n  body {\r\n    overflow: auto;\r\n    height: auto;\r\n  }\r\n\r\n  .user-buttons {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .composer-informations > * {\r\n    text-align: center;\r\n  }\r\n\r\n  .user-buttons button {\r\n    width: 90%;\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  .piece-title {\r\n    font-size: .8rem;\r\n  }\r\n\r\n  #piece-title-result {\r\n    font-size: 1.3rem;\r\n    text-align: center;\r\n  }\r\n\r\n  #piece-duration {\r\n    text-align: center;\r\n  }\r\n\r\n  #piece-instrumentation {\r\n    font-size: .75rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .composer-top {\r\n    flex-direction: column;\r\n    box-shadow: var(--default-shadow);\r\n  }\r\n\r\n  .composer-hero {\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  .composer-bottom {\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n    min-height: unset;\r\n  }\r\n\r\n  \r\n\r\n  .composer-piece-list {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n  }\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\r\n    --header-background: #4257b2;\r\n    --hero-background: #3b4c9b;\r\n    --primary-button-background: #3ccfcf;\r\n    --main-background: #f6f7fb;\r\n    --gold: #facd21;\r\n    --default-shadow: 0px 13px 26px #0000002F;\r\n    --success-color: #2ecc71;\r\n    --error-color: #e74c3c;\r\n    \r\n}\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Lato', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #fff;\r\n    height: 100vh;\r\n    height: calc(var(--vh, 1vh) * 100);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: var(--main-background);\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    font-family: 'Lato', sans-serif;\r\n    cursor: pointer;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.landing-nav {\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.landing-nav p {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.site-title {\r\n    width: 20%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.right-nav-container {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n}\r\n\r\n.nav-left {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    justify-content: space-evenly;\r\n    padding: 0;\r\n}\r\n\r\n.nav-left li {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\n.nav-left li a, .site-title a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: center;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-left li a:hover, .nav-right li a:hover, .site-title a:hover {\r\n    color: rgba(189, 195, 199, 0.8);\r\n}\r\n\r\n.nav-left li a > * {\r\n    margin: .2rem;\r\n}\r\n\r\n.nav-right {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    margin-right: 3rem;\r\n}\r\n\r\n.nav-right li {\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.home-mobile-icons {\r\n    display: none;\r\n}\r\n\r\n.search-bar-overlay {\r\n    display: none;\r\n    align-items: center;\r\n    width: 60%;\r\n    \r\n}\r\n\r\n.search-bar-results {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    top: 8%;\r\n    /*left: 26%;*/\r\n    right: 20%;\r\n    background-color: var(--header-background);\r\n    width: 60%;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    z-index: 1000;\r\n\r\n}\r\n\r\n.search-result-down {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-result-down:hover {\r\n    transition: background-color 0.3s ease;\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.search-result-down p:first-of-type {\r\n    font-weight: bold;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-result-down .primary-btn {\r\n    margin-right: 1rem;\r\n}\r\n\r\n\r\n\r\n.search-bar-field {\r\n    flex: 1;\r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n    line-height: 1.3rem;\r\n    color: #fff;\r\n    font-size: 1.3rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-bar-field:invalid {\r\n    outline: 0;\r\n    box-shadow: none;\r\n    border: none;\r\n}\r\n\r\n.fa.fa-times.close-search {\r\n    cursor: pointer;\r\n}\r\n\r\n.primary-btn {\r\n    background-color: var(--primary-button-background);\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    font-family: 'Lato', sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n.mobile-search-icon {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n.hero-container {\r\n    width: 100%;\r\n    flex: 1;\r\n    background-color: var(--hero-background);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.content-container-left {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n}\r\n\r\n.content-text-container {\r\n    margin: 1rem;\r\n}\r\n\r\n.primary-btn.get-started-btn {\r\n    padding: 1.5rem 3rem;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.teacher-parent-links {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.teacher-parent-links a {\r\n    font-size: 1.2rem;\r\n    color: var(--primary-button-background);\r\n    text-decoration: none;\r\n    margin: 1rem;\r\n}\r\n\r\n.image-carousel-container {\r\n    height: 100%;\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.image-carousel {\r\n    height: 75%;\r\n    background-color: #fff;\r\n}\r\n\r\n.image-carousel img {\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: fill;\r\n}\r\n\r\n.image-description {\r\n    flex: 1;\r\n    width: 100%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal-container {\r\n    /* CSS change in JS */\r\n    display: none;\r\n    align-items:center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.4);\r\n    z-index: 5;\r\n}\r\n\r\n.sign-up-container {\r\n    height: 90%;\r\n    width: 40%;\r\n    background-color: #fff;\r\n    color: grey;\r\n    position: relative;\r\n    /* Change flex/none */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-shadow: var(--default-shadow);\r\n    \r\n}\r\n\r\n.sign-up-container > i {\r\n    align-self: flex-end;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.third-party-buttons {\r\n    margin: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.secondary-btn {\r\n    background-color: #fff;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.secondary-btn img {\r\n    height: 1rem;\r\n    width: 1rem;\r\n}\r\n\r\n.secondary-btn p {\r\n    margin: 1rem;\r\n}\r\n\r\n.sign-up-form {\r\n\r\n    margin: auto;\r\n    height: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.select-container {\r\n    width: 75%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n\r\n.select-container select {\r\n    padding: .75rem 2rem .75rem .3rem;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    color: var(--primary-button-background);\r\n    border: 2px grey solid;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n   \r\n}\r\n\r\n\r\n\r\n#close-sign-in, #close-sign-up {\r\n    cursor: pointer;\r\n}\r\n\r\n.birthday-selector {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.form-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-field label {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    letter-spacing: .2rem;\r\n}\r\n\r\n.form-field input {\r\n    \r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    padding: 1rem 0;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    color: #c2c6d4;\r\n    outline: 0;\r\n}\r\n\r\n.sign-up-form .form-field input:focus {\r\n    border: 2px solid var(--gold);\r\n    transition: border 0.3s ease;\r\n}\r\n\r\n.sign-up-form .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-up-form .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-up-form .error-text {\r\n    color: var(--error-color);\r\n    visibility: hidden;\r\n}\r\n\r\n.sign-up-form .form-field.error .error-text {\r\n    visibility: visible;\r\n    font-size: .7rem;\r\n}\r\n\r\n.register-btn, .login-btn {\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.register-btn {\r\n    background-color: #c2c6d4;\r\n}\r\n\r\n.login-btn {\r\n    background-color: #fff;\r\n    color: #000;\r\n    border: 2px solid grey;\r\n}\r\n\r\n.login-btn a {\r\n    color: var(--primary-button-background);\r\n}\r\n\r\n.sign-in-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 90%;\r\n    box-shadow: var(--default-shadow);\r\n}\r\n\r\n.sign-in-header {\r\n    width: 100%;\r\n    height: 15%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n}\r\n\r\n.sign-in-header h1 {\r\n    margin-left: 20px;\r\n}\r\n\r\n.sign-in-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid rgba(0,0,0,0.1);\r\n    border-radius: 50%;\r\n    padding: .50rem;\r\n}\r\n\r\n.sign-in-header i:hover {\r\n    background: rgba(0,0,0,0.1);\r\n}\r\n\r\n.sign-in-form-area {\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-buttons {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.sign-in-buttons .secondary-btn {\r\n    width: 100%;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    letter-spacing: .1rem;\r\n}\r\n\r\n.sign-in-form-fields {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    justify-content: space-evenly;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-form-fields .form-field input {\r\n    border: 0;\r\n    outline: 0;\r\n    border-bottom: 2px solid #000;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    outline: 0;\r\n}\r\n\r\n.sign-in-form-fields .form-field input:focus {\r\n    border-bottom: 2px solid var(--gold);\r\n}\r\n\r\n.sign-in-form-fields .form-field:last-of-type {\r\n    position: relative;\r\n}\r\n\r\n.sign-in-form-fields p {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 62%;\r\n}\r\n\r\n.sign-in-form-fields .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-in-form-fields .error-text {\r\n    color: var(--error-color);\r\n    /*visibility: hidden;*/\r\n}\r\n\r\n.primary-btn.big-login-btn {\r\n\r\n    width: 100%;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 1.5rem;\r\n}\r\n\r\n#browse-modal {\r\n    /* CHANGE WITH JAVASCIPT */\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.browse-modal-area {\r\n    height: 100%;\r\n    width: 35%;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n   \r\n    /*transition: transform 1s ease;*/\r\n    transform: translateX(-100%);\r\n}\r\n\r\n\r\n.browse-modal-area.show {\r\n    transition: transform 0.3s ease;\r\n    transform: translateX(0);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.browse-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid grey;\r\n    border-radius: 50%;\r\n    padding: 7px;\r\n    cursor: pointer;\r\n}\r\n\r\n.browse-header {\r\n    color: #000;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.browse-composers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    max-height: 100%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.letter {\r\n    display: flex;\r\n    width: 90%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #000;\r\n    border-bottom: 1px solid grey;\r\n}\r\n\r\n.letter h1  {\r\n    flex: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.letter-composers {\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n}\r\n\r\n.random-composer-links a {\r\n    text-decoration: none;\r\n    color: blue;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n    body {\r\n        overflow: auto;\r\n    }\r\n\r\n    .hero-container {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .landing-nav {\r\n        justify-content: center;\r\n    }\r\n    .nav-left {\r\n        display: none;\r\n    }\r\n\r\n    .right-nav-container {\r\n        justify-content: flex-end;\r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 1rem;\r\n        width: 35%;\r\n    }\r\n\r\n    .mobile-search-icon {\r\n        display: block;\r\n    }\r\n\r\n    .sign-up-container {\r\n        height: 90%;\r\n        width: 75%;\r\n    }\r\n\r\n    .search-bar-results {\r\n        left: 20%;\r\n        top: 7.5%;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n   \r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n    \r\n    body {\r\n        /*\r\n        overflow: hidden;\r\n        */\r\n       \r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 0rem;\r\n        flex: 1;\r\n        font-size: 1rem;\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .right-nav-container {\r\n        width: 60%;\r\n    }\r\n\r\n    .nav-right {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .search-bar-results {\r\n        /* top: 9%; */\r\n        width: 100%;\r\n        left: 0;    \r\n    \r\n    }\r\n\r\n\r\n    .sign-up-container {\r\n        height: 100%;\r\n        width: 100%;\r\n        overflow: auto;\r\n    }\r\n\r\n    .third-party-buttons {\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n    }\r\n\r\n    .third-party-buttons .secondary-btn {\r\n        margin: .5rem 0;\r\n    }\r\n    \r\n    .select-container {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .select-container select {\r\n        width: 90%;\r\n    }\r\n\r\n    .sign-up-form label {\r\n        font-size: .7rem;\r\n    }\r\n\r\n    .form-field input {\r\n        margin-top: .3rem;\r\n    }\r\n\r\n    .form-field {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .primary-btn.register-btn, .primary-btn.login-btn {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .search-bar-overlay {\r\n        justify-content: center;\r\n        margin: auto;\r\n        height: 5rem;\r\n    }\r\n\r\n    .search-result-down p {\r\n        font-size: .75rem;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://app/static/css/landing.css"],"names":[],"mappings":"AAEA;IACI,4BAA4B;IAC5B,0BAA0B;IAC1B,oCAAoC;IACpC,0BAA0B;IAC1B,eAAe;IACf,yCAAyC;IACzC,wBAAwB;IACxB,sBAAsB;;AAE1B;;;AAGA;IACI,sBAAsB;AAC1B;;AAEA;IACI,+BAA+B;IAC/B,SAAS;IACT,UAAU;IACV,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wCAAwC;IACxC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,0CAA0C;IAC1C,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;;AAEnB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;AAElC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,6BAA6B;IAC7B,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;AAE3B;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;;AAEd;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;IACP,aAAa;IACb,UAAU;IACV,0CAA0C;IAC1C,UAAU;IACV,+BAA+B;IAC/B,8BAA8B;IAC9B,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,sCAAsC;IACtC,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;;;AAIA;IACI,OAAO;IACP,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kDAAkD;IAClD,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,+BAA+B;IAC/B,iBAAiB;IACjB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;;;AAIA;IACI,WAAW;IACX,OAAO;IACP,wCAAwC;IACxC,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,OAAO;AACX;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,uCAAuC;IACvC,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,WAAW;IACX,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;;AAGA;IACI,qBAAqB;IACrB,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,iCAAiC;IACjC,UAAU;AACd;;AAEA;IACI,WAAW;IACX,UAAU;IACV,sBAAsB;IACtB,WAAW;IACX,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iCAAiC;;AAErC;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,OAAO;IACP,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;;AAEpB;;AAEA;IACI,iCAAiC;IACjC,+BAA+B;IAC/B,eAAe;IACf,uCAAuC;IACvC,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;;AAEtB;;;;AAIA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;;IAEI,+BAA+B;IAC/B,eAAe;IACf,eAAe;IACf,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;IACd,UAAU;AACd;;AAEA;IACI,6BAA6B;IAC7B,4BAA4B;AAChC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,WAAW;IACX,0CAA0C;IAC1C,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,6BAA6B;IAC7B,OAAO;AACX;;AAEA;IACI,SAAS;IACT,UAAU;IACV,6BAA6B;IAC7B,+BAA+B;IAC/B,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,QAAQ;AACZ;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;;IAEI,WAAW;IACX,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,sBAAsB;IACtB,kBAAkB;IAClB,MAAM;IACN,OAAO;;IAEP,iCAAiC;IACjC,4BAA4B;AAChC;;;AAGA;IACI,+BAA+B;IAC/B,wBAAwB;AAC5B;;;;;;;AAOA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,OAAO;IACP,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;;;AAIA;;IAEI;QACI,cAAc;IAClB;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,uBAAuB;IAC3B;IACA;QACI,aAAa;IACjB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,iBAAiB;QACjB,UAAU;IACd;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,WAAW;QACX,UAAU;IACd;;IAEA;QACI,SAAS;QACT,SAAS;IACb;;IAEA;QACI,WAAW;QACX,QAAQ;IACZ;;AAEJ;;AAEA;;AAEA;;AAEA;;IAEI;QACI;;SAEC;;IAEL;;IAEA;QACI,iBAAiB;QACjB,OAAO;QACP,eAAe;QACf,2BAA2B;IAC/B;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,SAAS;QACT,UAAU;IACd;IACA;QACI,aAAa;QACb,WAAW;QACX,OAAO;;IAEX;;;IAGA;QACI,YAAY;QACZ,WAAW;QACX,cAAc;IAClB;;IAEA;QACI,sBAAsB;QACtB,oBAAoB;IACxB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,sBAAsB;QACtB,uBAAuB;IAC3B;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,uBAAuB;QACvB,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,WAAW;QACX,QAAQ;IACZ;;AAEJ","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');\r\n\r\n:root {\r\n    --header-background: #4257b2;\r\n    --hero-background: #3b4c9b;\r\n    --primary-button-background: #3ccfcf;\r\n    --main-background: #f6f7fb;\r\n    --gold: #facd21;\r\n    --default-shadow: 0px 13px 26px #0000002F;\r\n    --success-color: #2ecc71;\r\n    --error-color: #e74c3c;\r\n    \r\n}\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Lato', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #fff;\r\n    height: 100vh;\r\n    height: calc(var(--vh, 1vh) * 100);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: var(--main-background);\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    font-family: 'Lato', sans-serif;\r\n    cursor: pointer;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.landing-nav {\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.landing-nav p {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.site-title {\r\n    width: 20%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.right-nav-container {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n}\r\n\r\n.nav-left {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    justify-content: space-evenly;\r\n    padding: 0;\r\n}\r\n\r\n.nav-left li {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\n.nav-left li a, .site-title a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: center;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-left li a:hover, .nav-right li a:hover, .site-title a:hover {\r\n    color: rgba(189, 195, 199, 0.8);\r\n}\r\n\r\n.nav-left li a > * {\r\n    margin: .2rem;\r\n}\r\n\r\n.nav-right {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style-type: none;\r\n    margin-right: 3rem;\r\n}\r\n\r\n.nav-right li {\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.home-mobile-icons {\r\n    display: none;\r\n}\r\n\r\n.search-bar-overlay {\r\n    display: none;\r\n    align-items: center;\r\n    width: 60%;\r\n    \r\n}\r\n\r\n.search-bar-results {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    top: 8%;\r\n    /*left: 26%;*/\r\n    right: 20%;\r\n    background-color: var(--header-background);\r\n    width: 60%;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    z-index: 1000;\r\n\r\n}\r\n\r\n.search-result-down {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-result-down:hover {\r\n    transition: background-color 0.3s ease;\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.search-result-down p:first-of-type {\r\n    font-weight: bold;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-result-down .primary-btn {\r\n    margin-right: 1rem;\r\n}\r\n\r\n\r\n\r\n.search-bar-field {\r\n    flex: 1;\r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n    line-height: 1.3rem;\r\n    color: #fff;\r\n    font-size: 1.3rem;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.search-bar-field:invalid {\r\n    outline: 0;\r\n    box-shadow: none;\r\n    border: none;\r\n}\r\n\r\n.fa.fa-times.close-search {\r\n    cursor: pointer;\r\n}\r\n\r\n.primary-btn {\r\n    background-color: var(--primary-button-background);\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    font-family: 'Lato', sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n.mobile-search-icon {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n.hero-container {\r\n    width: 100%;\r\n    flex: 1;\r\n    background-color: var(--hero-background);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.content-container-left {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n}\r\n\r\n.content-text-container {\r\n    margin: 1rem;\r\n}\r\n\r\n.primary-btn.get-started-btn {\r\n    padding: 1.5rem 3rem;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.teacher-parent-links {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.teacher-parent-links a {\r\n    font-size: 1.2rem;\r\n    color: var(--primary-button-background);\r\n    text-decoration: none;\r\n    margin: 1rem;\r\n}\r\n\r\n.image-carousel-container {\r\n    height: 100%;\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.image-carousel {\r\n    height: 75%;\r\n    background-color: #fff;\r\n}\r\n\r\n.image-carousel img {\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: fill;\r\n}\r\n\r\n.image-description {\r\n    flex: 1;\r\n    width: 100%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.modal-container {\r\n    /* CSS change in JS */\r\n    display: none;\r\n    align-items:center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.4);\r\n    z-index: 5;\r\n}\r\n\r\n.sign-up-container {\r\n    height: 90%;\r\n    width: 40%;\r\n    background-color: #fff;\r\n    color: grey;\r\n    position: relative;\r\n    /* Change flex/none */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-shadow: var(--default-shadow);\r\n    \r\n}\r\n\r\n.sign-up-container > i {\r\n    align-self: flex-end;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.third-party-buttons {\r\n    margin: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.secondary-btn {\r\n    background-color: #fff;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.secondary-btn img {\r\n    height: 1rem;\r\n    width: 1rem;\r\n}\r\n\r\n.secondary-btn p {\r\n    margin: 1rem;\r\n}\r\n\r\n.sign-up-form {\r\n\r\n    margin: auto;\r\n    height: auto;\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.select-container {\r\n    width: 75%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-top: 1rem;\r\n    \r\n}\r\n\r\n.select-container select {\r\n    padding: .75rem 2rem .75rem .3rem;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    color: var(--primary-button-background);\r\n    border: 2px grey solid;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n   \r\n}\r\n\r\n\r\n\r\n#close-sign-in, #close-sign-up {\r\n    cursor: pointer;\r\n}\r\n\r\n.birthday-selector {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.form-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-field label {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    letter-spacing: .2rem;\r\n}\r\n\r\n.form-field input {\r\n    \r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 1rem;\r\n    padding: 1rem 0;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    color: #c2c6d4;\r\n    outline: 0;\r\n}\r\n\r\n.sign-up-form .form-field input:focus {\r\n    border: 2px solid var(--gold);\r\n    transition: border 0.3s ease;\r\n}\r\n\r\n.sign-up-form .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-up-form .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-up-form .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-up-form .error-text {\r\n    color: var(--error-color);\r\n    visibility: hidden;\r\n}\r\n\r\n.sign-up-form .form-field.error .error-text {\r\n    visibility: visible;\r\n    font-size: .7rem;\r\n}\r\n\r\n.register-btn, .login-btn {\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.register-btn {\r\n    background-color: #c2c6d4;\r\n}\r\n\r\n.login-btn {\r\n    background-color: #fff;\r\n    color: #000;\r\n    border: 2px solid grey;\r\n}\r\n\r\n.login-btn a {\r\n    color: var(--primary-button-background);\r\n}\r\n\r\n.sign-in-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 90%;\r\n    box-shadow: var(--default-shadow);\r\n}\r\n\r\n.sign-in-header {\r\n    width: 100%;\r\n    height: 15%;\r\n    background-color: var(--header-background);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n}\r\n\r\n.sign-in-header h1 {\r\n    margin-left: 20px;\r\n}\r\n\r\n.sign-in-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid rgba(0,0,0,0.1);\r\n    border-radius: 50%;\r\n    padding: .50rem;\r\n}\r\n\r\n.sign-in-header i:hover {\r\n    background: rgba(0,0,0,0.1);\r\n}\r\n\r\n.sign-in-form-area {\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-buttons {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.sign-in-buttons .secondary-btn {\r\n    width: 100%;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n    letter-spacing: .1rem;\r\n}\r\n\r\n.sign-in-form-fields {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    justify-content: space-evenly;\r\n    flex: 1;\r\n}\r\n\r\n.sign-in-form-fields .form-field input {\r\n    border: 0;\r\n    outline: 0;\r\n    border-bottom: 2px solid #000;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    outline: 0;\r\n}\r\n\r\n.sign-in-form-fields .form-field input:focus {\r\n    border-bottom: 2px solid var(--gold);\r\n}\r\n\r\n.sign-in-form-fields .form-field:last-of-type {\r\n    position: relative;\r\n}\r\n\r\n.sign-in-form-fields p {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 62%;\r\n}\r\n\r\n.sign-in-form-fields .form-field.success input {\r\n    border: 2px solid var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.success label {\r\n    color: var(--success-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error input  {\r\n    border: 2px solid var(--error-color);\r\n}\r\n\r\n.sign-in-form-fields .form-field.error label {\r\n    color: var(--error-color);\r\n} \r\n\r\n.sign-in-form-fields .error-text {\r\n    color: var(--error-color);\r\n    /*visibility: hidden;*/\r\n}\r\n\r\n.primary-btn.big-login-btn {\r\n\r\n    width: 100%;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 1.5rem;\r\n}\r\n\r\n#browse-modal {\r\n    /* CHANGE WITH JAVASCIPT */\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.browse-modal-area {\r\n    height: 100%;\r\n    width: 35%;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n   \r\n    /*transition: transform 1s ease;*/\r\n    transform: translateX(-100%);\r\n}\r\n\r\n\r\n.browse-modal-area.show {\r\n    transition: transform 0.3s ease;\r\n    transform: translateX(0);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.browse-header i {\r\n    margin-right: 20px;\r\n    border: 3px solid grey;\r\n    border-radius: 50%;\r\n    padding: 7px;\r\n    cursor: pointer;\r\n}\r\n\r\n.browse-header {\r\n    color: #000;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.browse-composers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    max-height: 100%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.letter {\r\n    display: flex;\r\n    width: 90%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    color: #000;\r\n    border-bottom: 1px solid grey;\r\n}\r\n\r\n.letter h1  {\r\n    flex: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.letter-composers {\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n}\r\n\r\n.random-composer-links a {\r\n    text-decoration: none;\r\n    color: blue;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n    body {\r\n        overflow: auto;\r\n    }\r\n\r\n    .hero-container {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .landing-nav {\r\n        justify-content: center;\r\n    }\r\n    .nav-left {\r\n        display: none;\r\n    }\r\n\r\n    .right-nav-container {\r\n        justify-content: flex-end;\r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 1rem;\r\n        width: 35%;\r\n    }\r\n\r\n    .mobile-search-icon {\r\n        display: block;\r\n    }\r\n\r\n    .sign-up-container {\r\n        height: 90%;\r\n        width: 75%;\r\n    }\r\n\r\n    .search-bar-results {\r\n        left: 20%;\r\n        top: 7.5%;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n   \r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n    \r\n    body {\r\n        /*\r\n        overflow: hidden;\r\n        */\r\n       \r\n    }\r\n\r\n    .site-title {\r\n        margin-left: 0rem;\r\n        flex: 1;\r\n        font-size: 1rem;\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .right-nav-container {\r\n        width: 60%;\r\n    }\r\n\r\n    .nav-right {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .search-bar-results {\r\n        /* top: 9%; */\r\n        width: 100%;\r\n        left: 0;    \r\n    \r\n    }\r\n\r\n\r\n    .sign-up-container {\r\n        height: 100%;\r\n        width: 100%;\r\n        overflow: auto;\r\n    }\r\n\r\n    .third-party-buttons {\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n    }\r\n\r\n    .third-party-buttons .secondary-btn {\r\n        margin: .5rem 0;\r\n    }\r\n    \r\n    .select-container {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .select-container select {\r\n        width: 90%;\r\n    }\r\n\r\n    .sign-up-form label {\r\n        font-size: .7rem;\r\n    }\r\n\r\n    .form-field input {\r\n        margin-top: .3rem;\r\n    }\r\n\r\n    .form-field {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .primary-btn.register-btn, .primary-btn.login-btn {\r\n        margin: 1rem 0;\r\n    }\r\n\r\n    .search-bar-overlay {\r\n        justify-content: center;\r\n        margin: auto;\r\n        height: 5rem;\r\n    }\r\n\r\n    .search-result-down p {\r\n        font-size: .75rem;\r\n    }\r\n\r\n    .browse-modal-area {\r\n        width: auto;\r\n        right: 0;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvY29tcG9zZXIuY3NzPzdhZjEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvaG9tZXBhZ2UuY3NzP2QxZWYiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvbGFuZGluZy5jc3M/ZmU1MiIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbWFpbi9jb21wb3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9VSVNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvaHR0cC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvc2Vzc2lvbk9iai5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvY3NzL2NvbXBvc2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2Nzcy9ob21lcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvbGFuZGluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMseUlBQStEOztBQUVqRzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyx5SUFBK0Q7O0FBRWpHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7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LGNBQWMsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxTQUFTLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLFlBQVksS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFL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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEUiLCJmaWxlIjoiY29tcG9zZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tYWluL2NvbXBvc2VyLmpzXCIpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvc2VyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWVwYWdlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xhbmRpbmcuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuLi9tb2R1bGVzL2FwcCc7XHJcbmltcG9ydCB7IEZvcm1zIH0gZnJvbSAnLi4vbW9kdWxlcy9mb3Jtcyc7XHJcbmltcG9ydCB7IEhUVFAgfSBmcm9tICcuLi9tb2R1bGVzL2h0dHAnO1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuLi9tb2R1bGVzL25hdic7XHJcbmltcG9ydCB7IFJlcXVlc3RzIH0gZnJvbSAnLi4vbW9kdWxlcy9yZXF1ZXN0cyc7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi4vbW9kdWxlcy91aSc7XHJcbmltcG9ydCB7IFVJU2VsZWN0b3JzIH0gZnJvbSAnLi4vbW9kdWxlcy9VSVNlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFVzZXIsIFBpZWNlLCBDb25jZXJ0IH0gZnJvbSAnLi4vbW9kdWxlcy9zZXNzaW9uT2JqJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4uL21vZHVsZXMvc3RvcmFnZSc7XHJcbmltcG9ydCBcIi4uLy4uL2Nzcy9sYW5kaW5nLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9jc3MvaG9tZXBhZ2UuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL2Nzcy9jb21wb3Nlci5jc3NcIjtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG5ld0NvbmNlcnQoZSkge1xyXG4gICAgbGV0IHBpZWNlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllY2UtdGl0bGUtcmVzdWx0JykudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgcGllY2VDb21wb3NlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb3Nlci1uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLXVzZXInKTtcclxuICAgIGlmICghcGllY2VUaXRsZSkge1xyXG4gICAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCwgJ1NlbGVjdCBhIFBpZWNlJyk7XHJcbiAgICB9IGVsc2UgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCwgJ1BsZWFzZSBMb2cgaW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9Ub2RvIGFkZCBwaWVjZSB0byBDb25jZXJ0XHJcbiAgICAgICAgbGV0IG5ld1BpZWNlID0gbmV3IFBpZWNlKHBpZWNlQ29tcG9zZXIsIHBpZWNlVGl0bGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1BpZWNlKTtcclxuICAgICAgICBsZXQgbmV3Q29uY2VydCA9IG5ldyBDb25jZXJ0KFwiTm8gTmFtZVwiKTtcclxuICAgICAgICBuZXdDb25jZXJ0LnBpZWNlcy5wdXNoKG5ld1BpZWNlKTtcclxuICAgICAgICBTdG9yYWdlLnNldE5ld0NvbmNlcnQobmV3Q29uY2VydCk7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcvY29uY2VydF9idWlsZGVyJztcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBBcHAuaW5pdEJhc2UpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBSZXF1ZXN0cy5pbWFnZUZldGNoKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLXVzZXInKTtcclxuICAgIGlmICghY3VycmVudFVzZXIpIHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5jcmVhdGVDb25jZXJ0LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmNyZWF0ZUNvbmNlcnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5VSVNlbGVjdG9ycy5waWVjZUxpc3QuZm9yRWFjaChwaWVjZSA9PiB7XHJcbiAgICBwaWVjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlcXVlc3RzLmdldFBpZWNlUmVzdWx0cyk7XHJcbiAgICBwaWVjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnNjcm9sbFBpZWNlSW50b1ZpZXcpO1xyXG59KVxyXG5cclxuVUlTZWxlY3RvcnMuc3VibWl0Q29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlcXVlc3RzLmNvbW1pdE5ld0NvbW1lbnQpO1xyXG5VSVNlbGVjdG9ycy5hZGRQaWVjZVRvRmF2b3JpdGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUmVxdWVzdHMuY29tbWl0TmV3RmF2b3JpdGUpO1xyXG5VSVNlbGVjdG9ycy5jcmVhdGVDb25jZXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3Q29uY2VydCk7IiwiY2xhc3MgVWlTZWxlY3RvcnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaXRlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS10aXRsZScpO1xyXG4gICAgdGhpcy5sb2dJbk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1uYXYnKTtcclxuICAgIHRoaXMuc2lnblVwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24tdXAtYnRuJyk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcbiAgICB0aGlzLm9wZW5Db25jZXJ0QnVpbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUnKTtcclxuXHJcbiAgICB0aGlzLm9wZW5Nb2JpbGVTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1tb2JpbGUtc2VhcmNoJyk7XHJcbiAgICB0aGlzLm9wZW5Nb2JpbGVCcm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1tb2JpbGUtYnJvd3NlJyk7XHJcbiAgICB0aGlzLnJpZ2h0TmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LW5hdi1jb250YWluZXInKTtcclxuXHJcbiAgICB0aGlzLmdldFN0YXJ0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXN0YXJ0ZWQtYnRuJyk7XHJcbiAgICAvL0Jyb3dzZSBNb2RhbFxyXG4gICAgdGhpcy5icm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3NlJyk7XHJcbiAgICB0aGlzLmJyb3dzZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jyb3dzZS1tb2RhbCcpO1xyXG4gICAgdGhpcy5icm93c2VNb2RhbEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3NlLW1vZGFsLWFyZWEnKTtcclxuICAgIHRoaXMuY2xvc2VCcm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtYnJvd3NlJyk7XHJcbiAgICB0aGlzLmJyb3dzZUNvbXBvc2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicm93c2UtY29tcG9zZXJzJyk7XHJcblxyXG4gICAgLy9EeW5hbWljIFNlYXJjaCBSZXN1bHQgRWxlbWVudHNcclxuICAgIHRoaXMuc2VhcmNoQmFyT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyLW92ZXJsYXknKTtcclxuICAgIHRoaXMuY2xvc2VTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2VhcmNoJyk7XHJcbiAgICB0aGlzLnNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXItZmllbGQnKTtcclxuICAgIHRoaXMuc2VhcmNoQmFyUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyLXJlc3VsdHMnKTtcclxuXHJcbiAgICAvL0xvZ2luIGFuZCBTaWduIFVwIEVsZW1lbnRzXHJcbiAgICB0aGlzLmxvZ0luT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1uYXYnKTtcclxuICAgIHRoaXMuc2lnblVwT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWJ0bicpO1xyXG4gICAgdGhpcy5zaWduVXBNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLW1vZGFsJyk7XHJcbiAgICB0aGlzLnNpZ25Jbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4tbW9kYWwnKTtcclxuICAgIHRoaXMuY2xvc2VTaWduVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2lnbi11cCcpO1xyXG4gICAgdGhpcy5jbG9zZVNpZ25JbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1zaWduLWluJyk7XHJcbiAgICB0aGlzLmxvZ2dlZEluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2dlZC1pbicpO1xyXG4gICAgdGhpcy5kcm9wRG93bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24tbWVudScpO1xyXG4gICAgdGhpcy5yZWdpc3RlclVzZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItdXNlci1idG4nKTtcclxuICAgIHRoaXMubG9nSW5Vc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXVzZXItYnRuJyk7XHJcblxyXG4gICAgLy9SZWdpc3RyYXRpb24gVmFsaWRhdGlvblxyXG5cclxuICAgIHRoaXMucmVnaXN0cmF0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWZvcm0nKTtcclxuICAgIHRoaXMucmVnaXN0ZXJVc2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci11c2VybmFtZScpO1xyXG4gICAgdGhpcy5yZWdpc3RlckVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWVtYWlsJyk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItcGFzc3dvcmQnKTtcclxuICAgIHRoaXMucmVnaXN0ZXJQYXNzd29yZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItcGFzc3dvcmQyJyk7XHJcblxyXG4gICAgdGhpcy5sb2dJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi1pbi1mb3JtJyk7XHJcbiAgICB0aGlzLmxvZ2luVXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tdXNlcm5hbWUnKTtcclxuICAgIHRoaXMubG9naW5QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1wYXNzd29yZCcpO1xyXG5cclxuICAgIC8vQ09NUE9TRVJcclxuICAgIHRoaXMucGllY2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlLXRpdGxlJyk7XHJcbiAgICB0aGlzLnBpZWNlUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS1yZXN1bHRzJyk7XHJcbiAgICB0aGlzLnBpZWNlRGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS1kZXRhaWxzJyk7XHJcbiAgICB0aGlzLmNvbXBvc2VyV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb3Nlci13cmFwJyk7XHJcbiAgICB0aGlzLnN1Ym1pdENvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWNvbW1lbnQnKTtcclxuICAgIHRoaXMuYWRkUGllY2VUb0Zhdm9yaXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAnYWRkLXBpZWNlLXRvLWZhdm9yaXRlcydcclxuICAgICk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbmNlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNvbmNlcnQnKTtcclxuXHJcbiAgICAvL0NPTkNFUlQgQlVJTERFUlxyXG4gICAgdGhpcy5hZGRUb0NvbmNlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLXRvLWNvbmNlcnQnKTtcclxuICAgIHRoaXMuZGVsZXRlUGllY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGUtcGllY2UnKTtcclxuXHJcbiAgICB0aGlzLmNvbmNlcnRCdWlsZGVyQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LWJ1aWxkZXItYXJlYScpO1xyXG4gICAgdGhpcy5jb25jZXJ0TWludXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LW1pbnV0ZXMnKTtcclxuICAgIHRoaXMuY29uY2VydENvbmNsdXNpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC1jb25jbHVzaW9uJyk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2hGYXZvcml0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZhdm9yaXRlcycpO1xyXG4gICAgdGhpcy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICdmYXZvcml0ZXMtc2VhcmNoLXJlc3VsdHMnXHJcbiAgICApO1xyXG4gICAgdGhpcy5kZWxldGVJbnRlcm1pc3Npb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWludGVybWlzc2lvbicpO1xyXG4gICAgdGhpcy5jb25jZXJ0VGl0bGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC10aXRsZS1idG4nKTtcclxuICAgIHRoaXMucmlnaHRTZWFyY2hBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LXNlYXJjaC1hcmVhJyk7XHJcbiAgICB0aGlzLmNvbmNlcnRUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtdGl0bGUtaW5wdXQnKTtcclxuICAgIHRoaXMuY2hhbmdlVGl0bGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlLXRpdGxlLWJ0bicpO1xyXG4gICAgdGhpcy5jb25jZXJ0VGl0bGVIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC10aXRsZS1oZWFkZXInKTtcclxuICAgIHRoaXMuc2F2ZUNvbmNlcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1jb25jZXJ0LWJ0bicpO1xyXG4gICAgLy9maXggdGhpcy5cclxuICAgIGlmICh0aGlzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5pbml0aWFsRmF2b3JpdGVzUmVzdWx0cyA9IFsuLi50aGlzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuY2hpbGRyZW5dO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0hPTVBBR0VcclxuICAgIHRoaXMuc2hvd0dvbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG92ZXItZ29sZCcpO1xyXG4gICAgLy9jb25zdCBzZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1yZXN1bHQnKTtcclxuICAgIHRoaXMudmlld01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlldy1tb3JlLWJ0bicpO1xyXG4gICAgdGhpcy5tYWluQ29udGVudElubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudC1hcmVhLWlubmVyJyk7XHJcbiAgICB0aGlzLm9wZW5Qcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tcHJvZmlsZScpO1xyXG4gICAgdGhpcy5vcGVuRmF2b3JpdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tZmF2b3JpdGVzJyk7XHJcbiAgICB0aGlzLm9wZW5Db25jZXJ0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuLWNvbmNlcnRzJyk7XHJcbiAgICB0aGlzLnJldHVybkhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmV0dXJuLWhvbWUnKTtcclxuXHJcbiAgICAvL0Zhdm9yaXRlcyBvbiBIb21lIFBhZ2VcclxuICAgIHRoaXMuaG9tZVNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1zZWFyY2gtcmVzdWx0cycpO1xyXG4gICAgLy9GYXZvcml0ZXMgUGFnZVxyXG4gICAgdGhpcy5mdWxsRmF2b3JpdGVzR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsLWZhdm9yaXRlcy1ncmlkJyk7XHJcblxyXG4gICAgLy9Db25jZXJ0cyBvbiBIb21lIFBhZ2VcclxuICAgIHRoaXMueW91ckNvbmNlcnRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICd5b3VyLWNvbmNlcnRzLWNvbnRhaW5lcidcclxuICAgICk7XHJcblxyXG4gICAgLy9Db25jZXJ0cyBvbiBDb25jZXJ0cyBQYWdlXHJcbiAgICB0aGlzLmZ1bGxDb25jZXJ0c0dyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbC1jb25jZXJ0cy1ncmlkJyk7XHJcblxyXG4gICAgaWYgKHRoaXMub3BlblByb2ZpbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm9wZW5MaW5rcyA9IFt0aGlzLm9wZW5Qcm9maWxlLCB0aGlzLm9wZW5GYXZvcml0ZXMsIHRoaXMub3BlbkNvbmNlcnRzLCB0aGlzLnJldHVybkhvbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3BlbkJyb3dzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLWJyb3dzZScpO1xyXG5cclxuICAgIHRoaXMucGllY2VOYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waWVjZS1uYW1lJyk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbmNlcnRCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgJ2NyZWF0ZS1jb25jZXJ0LWJ0bidcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5kcm9wRG93bllvdXJDb25jZXJ0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAnZHJvcGRvd24teW91ci1jb25jZXJ0cydcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5jb21wb3NlckxldHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAnY29tcG9zZXItbGV0dGVyLWNvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICB0aGlzLnJlc3VsdHNDb2x1bW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1jb2x1bW4nKTtcclxuICAgIHRoaXMuY29tcG9zZXJSZXN1bHRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvc2VyLXJlc3VsdC1saXN0Jyk7XHJcbiAgICB0aGlzLnVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC11c2VybmFtZScpO1xyXG4gICAgaWYgKHRoaXMudXNlciAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnVzZXIgPSB0aGlzLnVzZXIudGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vRlJPTSBJTkRFWFxyXG4gICAgdGhpcy5jb21wb3NlckxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvc2VyLXJlc3VsdHMnKTtcclxuICAgIHRoaXMuc2VhcmNoRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZpZWxkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVUlTZWxlY3RvcnMgPSBuZXcgVWlTZWxlY3RvcnMoKTsiLCJpbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnLi9odHRwJztcclxuaW1wb3J0IHsgVXNlciwgQ29uY2VydCwgUGllY2UgfSBmcm9tICcuL3Nlc3Npb25PYmonO1xyXG5pbXBvcnQgeyBGb3JtcyB9IGZyb20gJy4vZm9ybXMnO1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuL25hdic7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0cyB9IGZyb20gJy4vcmVxdWVzdHMnO1xyXG5cclxuY2xhc3MgQVBQIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBnZW5lcmF0ZVJhbmRvbU51bWJlcihtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxuICB9XHJcblxyXG4gIGluaXRCYXNlKCkge1xyXG5cclxuXHJcbiAgICBVSVNlbGVjdG9ycy5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zaG93U2VhcmNoKTtcclxuICAgIFVJU2VsZWN0b3JzLm9wZW5Nb2JpbGVTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zaG93U2VhcmNoKTtcclxuICAgIFVJU2VsZWN0b3JzLmNsb3NlU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuY2xvc2VTZWFyY2hGaWVsZCk7XHJcbiAgICBVSVNlbGVjdG9ycy5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICAgICAgVUkuY2xlYXJMaXN0KCk7XHJcbiAgICAgIFJlcXVlc3RzLmdldENvbXBvc2VyUmVzdWx0cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLm9wZW5Nb2JpbGVCcm93c2UpIHtcclxuICAgICAgVUlTZWxlY3RvcnMub3Blbk1vYmlsZUJyb3dzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnNob3dCcm93c2UpO1xyXG4gICAgfVxyXG5cclxuICAgIFVJU2VsZWN0b3JzLmJyb3dzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnNob3dCcm93c2UpO1xyXG4gICAgVUlTZWxlY3RvcnMuY2xvc2VCcm93c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmJyb3dzZU1vZGFsQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmJyb3dzZU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMubG9nSW5PcGVuICYmIFVJU2VsZWN0b3JzLnNpZ25VcE9wZW4pIHtcclxuICAgICAgVUlTZWxlY3RvcnMubG9nSW5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3Blbk1vZGFsKTtcclxuICAgICAgVUlTZWxlY3RvcnMuc2lnblVwT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLm9wZW5Nb2RhbCk7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNsb3NlU2lnblVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuY2xvc2VNb2RhbCk7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNsb3NlU2lnbkluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuY2xvc2VNb2RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmxvZ2dlZEluKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmxvZ2dlZEluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd0Ryb3BEb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMucmVnaXN0cmF0aW9uRm9ybSkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5yZWdpc3RyYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgZm9ybUlucHV0cyA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICcuZm9ybS1maWVsZCBpbnB1dCdcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoIUZvcm1zLmNoZWNrUmVxdWlyZWQoWy4uLmZvcm1JbnB1dHNdKSkge1xyXG4gICAgICAgICAgRm9ybXMuY2hlY2tMZW5ndGgoVUlTZWxlY3RvcnMucmVnaXN0ZXJVc2VybmFtZSwgNiwgMjApO1xyXG4gICAgICAgICAgRm9ybXMuY2hlY2tMZW5ndGgoVUlTZWxlY3RvcnMucmVnaXN0ZXJQYXNzd29yZCwgNiwgMjApO1xyXG4gICAgICAgICAgRm9ybXMuY2hlY2tFbWFpbChVSVNlbGVjdG9ycy5yZWdpc3RlckVtYWlsKTtcclxuICAgICAgICAgIEZvcm1zLmNoZWNrUGFzc3dvcmRzTWF0Y2goXHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLnJlZ2lzdGVyUGFzc3dvcmQsXHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLnJlZ2lzdGVyUGFzc3dvcmQyXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKEZvcm1zLmNoZWNrQWxsVmFsaWQoWy4uLmZvcm1JbnB1dHNdKSkge1xyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5yZWdpc3RyYXRpb25Gb3JtLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmxvZ0luRm9ybSkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5sb2dJbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIUZvcm1zLmNoZWNrUmVxdWlyZWQoW1xyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5sb2dpblVzZXJuYW1lLFxyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5sb2dpblBhc3N3b3JkLFxyXG4gICAgICAgICAgXSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGxldCBsb2dpbkRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBVSVNlbGVjdG9ycy5sb2dpblVzZXJuYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogVUlTZWxlY3RvcnMubG9naW5QYXNzd29yZC52YWx1ZSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgUmVxdWVzdHMudGVzdExvZ2luKGxvZ2luRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb25jZXJ0RnVuY3Rpb24oZSkge1xyXG4gICAgbGV0IGNvbXBvc2VyTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyLW5hbWUnKVxyXG4gICAgICAudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgcGllY2VOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGllY2UtbmFtZScpXHJcbiAgICAgIC50ZXh0Q29udGVudDtcclxuXHJcbiAgICBsZXQgbmV3UGllY2UgPSBuZXcgUGllY2UoY29tcG9zZXJOYW1lLCBwaWVjZU5hbWUpO1xyXG4gICAgbGV0IG5ld0NvbmNlcnQgPSBuZXcgQ29uY2VydCgnTm8gTmFtZScpO1xyXG4gICAgbmV3Q29uY2VydC5waWVjZXMucHVzaChuZXdQaWVjZSk7XHJcbiAgICBTdG9yYWdlLnNldE5ld0NvbmNlcnQobmV3Q29uY2VydCk7XHJcbiAgICBsb2NhdGlvbi5ocmVmID0gJy9jb25jZXJ0X2J1aWxkZXInO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbmNlcnQoKSB7XHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBTdG9yYWdlLmdldFVzZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRlJPTSBTQVZFQ09OQ0VSVFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuICAgIGlmIChVSVNlbGVjdG9ycy5jb25jZXJ0VGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPT09ICcnKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLnRleHRDb250ZW50ID0gJ1BsZWFzZSBhZGQgdGl0bGUuJztcclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSBDb25jZXJ0JztcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoVUkuY29uY2VydFBpZWNlQXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdQbGVhc2UgYWRkIHBpZWNlcy4uLic7XHJcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLnRleHRDb250ZW50ID0gJ1NhdmUgQ29uY2VydCc7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGN1cnJlbnRDb25jZXJ0ID0gbmV3IENvbmNlcnQoVUlTZWxlY3RvcnMuY29uY2VydFRpdGxlSGVhZGVyLnRleHRDb250ZW50KTtcclxuXHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UpID0+IHtcclxuICAgICAgaWYgKHBpZWNlLmNsYXNzTGlzdC5jb250YWlucygnaW50ZXJtaXNzaW9uJykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHRoaXNQaWVjZSA9IG5ldyBQaWVjZShcclxuICAgICAgICAgIHBpZWNlLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlci1pbmZvID4gcDpmaXJzdC1jaGlsZCcpLnRleHRDb250ZW50LFxyXG4gICAgICAgICAgcGllY2UucXVlcnlTZWxlY3RvcignLnBpZWNlLWluZm8gPiBwOmZpcnN0LWNoaWxkJykudGV4dENvbnRlbnRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjdXJyZW50Q29uY2VydC5waWVjZXMucHVzaCh0aGlzUGllY2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY3VycmVudFVzZXIuY29uY2VydHMucHVzaChjdXJyZW50Q29uY2VydCk7XHJcblxyXG5cclxuICAgIFN0b3JhZ2Uuc2V0VXNlcihjdXJyZW50VXNlcik7XHJcblxyXG4gICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4udGV4dENvbnRlbnQgPSAnQ29uY2VydCBTYXZlZCEhJztcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSBDb25jZXJ0JztcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgLy9Gb3IgQ29uY2VydCBCdWlsZGVyXHJcbiAgYWRkUGllY2VUb0NvbmNlcnRBcnIoZSkge1xyXG5cclxuICAgIGNvbnN0IGFkZFRvQ29uY2VydENvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGNvbnN0IHBpZWNlQ29tcG9zZXIgPSBhZGRUb0NvbmNlcnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5waWVjZS1pbmZvLWxlZnQgPiBwJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlQ29tcG9zZXJEYXRlcyA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmRhdGEtY29tcG9zZXItZGF0ZXMnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGllY2VDb21wb3Nlck5hdGlvbmFsaXR5ID0gYWRkVG9Db25jZXJ0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuZGF0YS1jb21wb3Nlci1uYXRpb25hbGl0eSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwaWVjZUluc3RydW1lbnRhdGlvbiA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmRhdGEtcGllY2UtaW5zdHJ1bWVudGF0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlVGl0bGUgPSBhZGRUb0NvbmNlcnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5waWVjZS1pbmZvLWxlZnQgcDpsYXN0LWNoaWxkJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlRHVyYXRpb24gPSBhZGRUb0NvbmNlcnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5waWVjZS1pbmZvLXJpZ2h0IHAnXHJcbiAgICApO1xyXG5cclxuICAgIC8vQ2hhbmdlIG5vdGlmaWN0YWlvbiB0ZXh0IGJhY2sgYW5kIGZvcnRoLlxyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnUGllY2UgYWRkZWQgdG8gY29uY2VydCc7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdBZGQgdG8gY29uY2VydCc7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBsZXQgcGllY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGllY2VFbC5jbGFzc0xpc3QgPSAnY29uY2VydCc7XHJcbiAgICAvL3BpZWNlRWwuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgIHBpZWNlRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnMgcGllY2UtZHJhZy1iYXJzXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWlubmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb3Nlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VDb21wb3Nlci50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VDb21wb3NlckRhdGVzLnRleHRDb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZUNvbXBvc2VyTmF0aW9uYWxpdHkudGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VUaXRsZS50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VJbnN0cnVtZW50YXRpb24udGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ke3BpZWNlRHVyYXRpb24udGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzIGZhLTJ4IGRlbGV0ZS1waWVjZVwiPjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaW50ZXJtaXNzaW9uXCI+XHJcbiAgICAgICAgICAgICAgPHA+QWRkIEludGVybWlzc2lvbiBIZXJlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICBgO1xyXG5cclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5wdXNoKHBpZWNlRWwpO1xyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBVSS5hZGRQaWVjZVRvRE9NKHBpZWNlRWwpO1xyXG5cclxuICAgIFVJLmRlbGV0ZVBpZWNlc0xpc3RlbmVycygpO1xyXG4gICAgVUkuY3JlYXRlSW50ZXJtaXNzaW9uTGlzdGVuZXJzKCk7XHJcbiAgICBVSS5kcmFnTGlzdGVuZXJzKCk7XHJcbiAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKFVJLmNvbmNlcnRQaWVjZUFycikpO1xyXG4gIH1cclxuXHJcbiAgLy9UT0RPXHJcbiAgLy9kZWxldGVQaWVjZXNcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBcHAgPSBuZXcgQVBQKCk7IiwiaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpJztcclxuXHJcbmNsYXNzIEZPUk1TIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICByZWdpc3RlclZhbGlkYXRpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGN1cnJlbnRGb3JtID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBsZXQgZm9ybUZpZWxkcyA9IGN1cnJlbnRGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWZpZWxkJyk7XHJcblxyXG4gICAgWy4uLmZvcm1GaWVsZHNdLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChmaWVsZC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItdGV4dCcpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIHdhcyBhbiBlcnJvcicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBhcmUgbm8gZXJyb3JzJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tFbWFpbChpbnB1dCkge1xyXG4gICAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgaWYgKHJlLnRlc3QoaW5wdXQudmFsdWUudHJpbSgpKSkge1xyXG4gICAgICBVSS5zaG93U3VjY2VzcyhpbnB1dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSS5zaG93RXJyb3IoaW5wdXQsICdFbWFpbCBpcyBub3QgdmFsaWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrUmVxdWlyZWQoaW5wdXRBcnIpIHtcclxuICAgIGxldCBpc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBpbnB1dEFyci5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIFVJLnNob3dFcnJvcihpbnB1dCwgYCR7VUkuZ2V0RmllbGROYW1lKGlucHV0KX0gaXMgcmVxdWlyZWQuYCk7XHJcbiAgICAgICAgaXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgVUkuc2hvd1N1Y2Nlc3MoaW5wdXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaXNSZXF1aXJlZDtcclxuICB9XHJcblxyXG4gIGNoZWNrTGVuZ3RoKGlucHV0LCBtaW4sIG1heCkge1xyXG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA8IG1pbikge1xyXG4gICAgICBVSS5zaG93RXJyb3IoXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgYCR7VUkuZ2V0RmllbGROYW1lKGlucHV0KX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVyc2BcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gbWF4KSB7XHJcbiAgICAgIFVJLnNob3dFcnJvcihcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBgJHtVSS5nZXRGaWVsZE5hbWUoaW5wdXQpfSBtdXN0IGJlIGxlc3MgdGhhbiAke21heH0gY2hhcmFjdGVyc31gXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSS5zaG93U3VjY2VzcyhpbnB1dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1Bhc3N3b3Jkc01hdGNoKGlucHV0MSwgaW5wdXQyKSB7XHJcbiAgICBpZiAoaW5wdXQxLnZhbHVlICE9PSBpbnB1dDIudmFsdWUpIHtcclxuICAgICAgVUkuc2hvd0Vycm9yKGlucHV0MiwgJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrQWxsVmFsaWQoZm9ybUlucHV0QXJyKSB7XHJcbiAgICBsZXQgYWxsVmFsaWQgPSB0cnVlO1xyXG4gICAgZm9ybUlucHV0QXJyLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBmaWVsZC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSAmJlxyXG4gICAgICAgIGZpZWxkLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA+IDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWxsVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gYWxsVmFsaWQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhbGxWYWxpZDtcclxuICB9XHJcblxyXG4gIGxvZ0luVmFsaWRhdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnTG9nIEluIFByZXZlbnRlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1zID0gbmV3IEZPUk1TKCk7IiwiY2xhc3MgSHR0cCB7XHJcbiAgLy9NYWtlIEhUVFAgR2V0XHJcbiAgYXN5bmMgZ2V0KHVybCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXNEYXRhO1xyXG4gIH1cclxuXHJcbiAgLy9NYWtlIEhUVFAgUE9TVFxyXG4gIGFzeW5jIHBvc3QodXJsLCBkYXRhKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXNEYXRhO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0WE1MKGV2ZW50ID0gdW5kZWZpbmVkLCB1cmwpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICByZXR1cm4gcmVzRGF0YTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEpTT04odXJsKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgcmV0dXJuIHJlc0RhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSFRUUCA9IG5ldyBIdHRwKCk7IiwiaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpJztcclxuXHJcbmNsYXNzIE5BViB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgY29tcG9zZXJQYWdlTGlzdGVuZXJzKGNvbXBvc2VyKSB7XHJcbiAgICBjb21wb3Nlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGNvbXBvc2VyLyR7ZS50YXJnZXQudGV4dENvbnRlbnR9YDtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdiA9IG5ldyBOQVYoKTsiLCJpbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnLi9odHRwJztcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi9uYXYnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XHJcblxyXG5jbGFzcyBSRVFVRVNUUyB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZ2V0Q29tcG9zZXJSZXN1bHRzKCkge1xyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgc2VhcmNoVGVybTogVUlTZWxlY3RvcnMuc2VhcmNoSW5wdXQudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBIVFRQLnBvc3QoJy9jb21wb3NlcnMnLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgcmVzLmNvbXBvc2VycylcclxuICAgICAgbGV0IGNvbXBBcnJheSA9IEpTT04ucGFyc2UocmVzLmNvbXBvc2Vycyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbXBBcnJheSk7XHJcblxyXG4gICAgICBjb21wQXJyYXkuZm9yRWFjaChjb21wb3NlciA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIFVJLnBvcHVsYXRlQ29tcG9zZXJTZWFyY2hSZXN1bHRzKGN1cnJlbnRVUkwsIGNvbXBvc2VyKVxyXG4gICAgICB9KVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBUaGVyZSB3YXMgYW4gZXJyLCAke2Vycn1gKSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGJyb3dzZVBhbmVsRmV0Y2goKSB7XHJcbiAgICBsZXQgcmFuZG9tQ29tcEFyciA9IFtdO1xyXG4gICAgSFRUUC5nZXQoJy9icm93c2VfY29tcG9zZXJfbGlzdCcpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbXBvc2Vyc0FyciA9IGRhdGEuY29tcG9zZXJzX2FycmF5O1xyXG4gICAgICAgIGNvbXBvc2Vyc0Fyci5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbWFpbkxldHRlciA9IGdyb3VwWzBdWzBdO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbUNvbXBBcnIucHVzaChcclxuICAgICAgICAgICAgICBncm91cFtBcHAuZ2VuZXJhdGVSYW5kb21OdW1iZXIoMCwgZ3JvdXAubGVuZ3RoKV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBVSS5hZGRSYW5kb21Db21wb3NlcnNUb0RPTShtYWluTGV0dGVyLCByYW5kb21Db21wQXJyKTtcclxuICAgICAgICAgIHJhbmRvbUNvbXBBcnIgPSBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgVGhlcmUgd2FzIGFuIGVycm9yOiAke2Vycn1gKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ3VycmVudExldHRlcihlKSB7XHJcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdicm93c2VfY29tcG9zZXJzJykpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2Jyb3dzZV9jb21wb3NlcnMnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC50YWdOYW1lICE9PSAnTEknIHx8IGUudGFyZ2V0LnRhZ05hbWUgIT09ICdIMScpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGNvbXBvc2VyTGV0dGVyID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICAgIGxldCBkYXRhID0geyBsZXR0ZXI6IGNvbXBvc2VyTGV0dGVyIH07XHJcbiAgICAgIEhUVFAucG9zdCgnLi9icm93c2VfY29tcG9zZXJfbGlzdCcsIGRhdGEpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChVSVNlbGVjdG9ycy5yZXN1bHRzQ29sdW1uLnRleHRDb250ZW50ICE9PSAnJykge1xyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5yZXN1bHRzQ29sdW1uLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGF0YS5sZXR0ZXJBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIFVJLmFwcGVuZEN1cnJlbnRMZXR0ZXIoaXRlbSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBbLi4uVUlTZWxlY3RvcnMucmVzdWx0c0NvbHVtbi5jaGlsZHJlbl0uZm9yRWFjaCgoY29tcCkgPT4ge1xyXG4gICAgICAgICAgICBOYXYuY29tcG9zZXJQYWdlTGlzdGVuZXJzKGNvbXApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coYFRoZXJlIHdhcyBhbiBlcnJvciAke2Vycn1gKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZXN0TG9naW4obG9naW5EYXRhKSB7XHJcbiAgICBIVFRQLnBvc3QoJy9sb2dpbicsIGxvZ2luRGF0YSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEudXBkYXRlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgIFVJU2VsZWN0b3JzLmxvZ0luVXNlckJ0bi50ZXh0Q29udGVudCA9IGAke2RhdGEubWVzc2FnZX1gO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2hvbWVwYWdlJztcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEudXBkYXRlID09PSAnZmFpbHVyZScpIHtcclxuICAgICAgICAgIFVJLnNob3dFcnJvcihVSVNlbGVjdG9ycy5sb2dpblVzZXJuYW1lLCBkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgVUkuc2hvd0Vycm9yKFVJU2VsZWN0b3JzLmxvZ2luUGFzc3dvcmQsIGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBUaGVyZSB3YXMgYW4gZXJyb3IsICR7ZXJyfWApKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRGdWxsUGllY2VJbmZvKHBpZWNlVGl0bGUpIHtcclxuICAgIEhUVFAuZ2V0KGAvcGllY2VfZGV0YWlsLyR7cGllY2VUaXRsZX1gKVxyXG4gICAgICAudGhlbihkYXRhID0+IFVJLmFkZFBpZWNlRnJvbUxvY2FsU3RvcmFnZShkYXRhKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgRVJST1I6ICR7ZXJyfWApKVxyXG4gIH1cclxuXHJcbiAgZmF2b3JpdGVzU2VhcmNoKCkge1xyXG4gICAgbGV0IHNlYXJjaFRlcm0gPSBVSVNlbGVjdG9ycy5zZWFyY2hGYXZvcml0ZXMudmFsdWU7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgc2VhcmNoVGVybVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWFyY2hUZXJtID09PSAnJykge1xyXG4gICAgICBVSVNlbGVjdG9ycy5pbml0aWFsRmF2b3JpdGVzUmVzdWx0cy5mb3JFYWNoKChmYXZvcml0ZSkgPT4ge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQoZmF2b3JpdGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEhUVFAucG9zdCgnL3NlYXJjaF9mYXZvcml0ZXMnLCBkYXRhKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG5cclxuICAgICAgICAgIGxldCBwYXJzZWQgPSBKU09OLnBhcnNlKGRhdGEuZmF2b3JpdGVzKTtcclxuICAgICAgICAgIHBhcnNlZC5mb3JFYWNoKGZhdm9yaXRlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmF2b3JpdGVMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgICAgICAgICBmYXZvcml0ZUxJLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtY29tcG9zZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS1jb21wb3Nlci1kYXRlc1wiPiR7ZmF2b3JpdGUuY29tcG9zZXIueWVhcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS1jb21wb3Nlci1uYXRpb25hbGl0eVwiPiR7ZmF2b3JpdGUuY29tcG9zZXIubmF0aW9uYWxpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS1waWVjZS1pbnN0cnVtZW50YXRpb25cIj4ke2Zhdm9yaXRlLmluc3RydW1lbnRhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZS1pbmZvLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2Zhdm9yaXRlLmNvbXBvc2VyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2Zhdm9yaXRlLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2UtaW5mby1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7ZmF2b3JpdGUuZHVyYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0biBhZGQtdG8tY29uY2VydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gQ29uY2VydFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQoZmF2b3JpdGVMSSk7XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gYEVSUk9SOiAke2Vycn1gKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGdldFBpZWNlUmVzdWx0cyhlKSB7XHJcbiAgICBVSS5jbGVhckNvbXBvc2VyUmVzdWx0cygpO1xyXG5cclxuICAgIGxldCBmb3JtYXR0ZWRTdHJpbmcgPSBlLnRhcmdldC5pbm5lckhUTUwuc3BsaXQoJyYnKVswXTtcclxuICAgIEhUVFAuZ2V0KGAvcGllY2VfZGV0YWlsLyR7Zm9ybWF0dGVkU3RyaW5nfWApXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnBpZWNlLnRpdGxlKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250ZW50cyA9IGA8aDIgaWQ9XCJwaWVjZS10aXRsZS1yZXN1bHRcIj4ke2RhdGEucGllY2UudGl0bGV9PC9oMj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInBpZWNlLWR1cmF0aW9uXCI+JHtkYXRhLnBpZWNlLmR1cmF0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwicGllY2UtaW5zdHJ1bWVudGF0aW9uXCI+JHtkYXRhLnBpZWNlLmluc3RydW1lbnRhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgVUlTZWxlY3RvcnMucGllY2VEZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTCA9IGNvbnRlbnRzO1xyXG5cclxuICAgICAgICAgIGlmIChkYXRhLnBpZWNlLmNvbW1lbnRzLmxlbmd0aCA+IDApIHtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgICAgIGNvbW1lbnRMaXN0LmNsYXNzTGlzdCA9ICdjb21tZW50LWxpc3QnO1xyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5waWVjZURldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudExpc3QpO1xyXG4gICAgICAgICAgICBkYXRhLnBpZWNlLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29tbWVudExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICBjb21tZW50TEkuY2xhc3NMaXN0ID0gJ2NvbW1lbnQnO1xyXG5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50LmF1dGhvciwgY29tbWVudC5ib2R5LCBjb21tZW50LnRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbW1lbnRMSS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQuYXV0aG9yfSBzYXlzOiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQuYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQudGltZXN0YW1wfTwvcD5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgIGNvbW1lbnRMaXN0LmFwcGVuZENoaWxkKGNvbW1lbnRMSSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpRmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGlGYWlsLmlubmVySFRNTCA9ICdUaGVyZSB3YXMgYSBmYWlsdXJlJztcclxuICAgICAgICBVSVNlbGVjdG9ycy5waWVjZVJlc3VsdHMuYXBwZW5kKGxpKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGRpc3BsYXlDb21tZW50cyhlbnRyeSkge1xyXG4gICAgSFRUUC5nZXQoYC9waWVjZV9kZXRhaWwvJHtlbnRyeS5waWVjZX1gKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5waWVjZS5jb21tZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgICBjb21tZW50TGlzdC5jbGFzc0xpc3QgPSAnY29tbWVudC1saXN0JztcclxuICAgICAgICAgIFVJU2VsZWN0b3JzLnBpZWNlRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50TGlzdCk7XHJcbiAgICAgICAgICBkYXRhLnBpZWNlLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGNvbW1lbnRMSS5jbGFzc0xpc3QgPSAnY29tbWVudCc7XHJcbiAgICAgICAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHA+JHtjb21tZW50LmF1dGhvcn0gc2F5czogPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtjb21tZW50LmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtjb21tZW50LnRpbWVzdGFtcH08L3A+YDtcclxuICAgICAgICAgICAgY29tbWVudExpc3QuYXBwZW5kQ2hpbGQoY29tbWVudExJKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGBUaGVyZSB3YXMgYW4gZXJyOiAke2Vycn1gKVxyXG4gIH1cclxuXHJcblxyXG4gIGltYWdlRmV0Y2goKSB7XHJcbiAgICBjb25zdCBjb21wb3Nlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcG9zZXItbmFtZScpO1xyXG4gICAgSFRUUC5nZXQoYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2N1c3RvbXNlYXJjaC92MT9rZXk9QUl6YVN5QzcyZW1zYXBjdVhzRjY0SHJuN2NhXzl4SWJBVWJuN0RZJmN4PTAxNDEyNDM5MTk0NTgzMDA4Njg1OTphaXNyYXV4amVqeSZxPSR7Y29tcG9zZXJOYW1lLnRleHRDb250ZW50fWApXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvc2VySW1nU3JjID0gZGF0YS5pdGVtc1swXS5wYWdlbWFwLmNzZV90aHVtYm5haWxbMF0uc3JjO1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmNvbXBvc2VyV3JhcC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2NvbXBvc2VySW1nU3JjfScpYDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuY29tcG9zZXJXcmFwLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjAwXCIpJztcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbW1pdE5ld0NvbW1lbnQoZSkge1xyXG5cclxuXHJcbiAgICBsZXQgY29tcG9zZXJVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi11c2VyJyk7XHJcbiAgICBjb25zdCBjb21tZW50Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWNvbW1lbnQnKTtcclxuICAgIGNvbnN0IGNvbW1lbnRQaWVjZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpZWNlLXRpdGxlLXJlc3VsdCcpO1xyXG5cclxuXHJcbiAgICBpZiAoIWNvbXBvc2VyVXNlcikge1xyXG4gICAgICAvL1RPRE8gV1JJVEUgU0hPVyBCVVRUT04gRVJST1IgXHJcbiAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCwgJ1BsZWFzZSBsb2cgaW4nKTtcclxuICAgIH0gZWxzZSBpZiAoIWNvbW1lbnRQaWVjZVRpdGxlKSB7XHJcbiAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCwgJ1NlbGVjdCBhIHBpZWNlJyk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbW1lbnRCb2R5LnZhbHVlID09PSAnJykge1xyXG4gICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQsICdXcml0ZSAgYSBjb21tZW50IScpO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0ge1xyXG4gICAgICAgIGJvZHk6IGNvbW1lbnRCb2R5LnZhbHVlLFxyXG4gICAgICAgIHBpZWNlOiBjb21tZW50UGllY2VUaXRsZS50ZXh0Q29udGVudFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgSFRUUC5wb3N0KCcvYWRkX2NvbW1lbnQnLCBlbnRyeSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ1RoYW5rIHlvdSEnO1xyXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdTdWJtaXQgQ29tbWVudCc7XHJcbiAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgIGNvbW1lbnRCb2R5LnZhbHVlID0gYGA7XHJcbiAgICAgICAgICBSZXF1ZXN0cy5kaXNwbGF5Q29tbWVudHMoZW50cnkpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tbWl0TmV3RmF2b3JpdGUoZSkge1xyXG4gICAgbGV0IGNvbXBvc2VyVXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tdXNlcicpO1xyXG4gICAgbGV0IHBpZWNlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllY2UtdGl0bGUtcmVzdWx0Jyk7XHJcblxyXG4gICAgbGV0IHBpZWNlU2VuZCA9IHtcclxuICAgICAgcGllY2VUaXRsZVNlbmQ6IHBpZWNlVGl0bGUudGV4dENvbnRlbnRcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBpZWNlVGl0bGUpIHtcclxuICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnU2VsZWN0IGEgcGllY2UnKTtcclxuICAgIH0gZWxzZSBpZiAoIWNvbXBvc2VyVXNlcikge1xyXG4gICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQsICdQbGVhc2UgTG9nIGluJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBIVFRQLnBvc3QoJy9hZGRfcGllY2VfdG9fZmF2b3JpdGVzJywgcGllY2VTZW5kKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1lc3NhZ2V9YDtcclxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnQWRkIHBpZWNlIHRvIGZhdm9yaXRlcyc7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coYEZFVENIIEVSUk9SOiAke2Vycn1gKSlcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RzID0gbmV3IFJFUVVFU1RTKCk7IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBjb25jZXJ0cyA9IFtdKSB7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICB0aGlzLmNvbmNlcnRzID0gY29uY2VydHM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uY2VydCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIHBpZWNlcyA9IFtdKSB7XHJcbiAgICB0aGlzLmlkID0gQXBwLmdlbmVyYXRlUmFuZG9tTnVtYmVyKDAsIDUwMDAwKTtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMucGllY2VzID0gcGllY2VzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpZWNlIHtcclxuICBjb25zdHJ1Y3Rvcihjb21wb3NlciwgdGl0bGUpIHtcclxuICAgIHRoaXMuY29tcG9zZXIgPSBjb21wb3NlcjtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVxdWVzdHMgfSBmcm9tICcuL3JlcXVlc3RzJztcclxuaW1wb3J0IHsgVXNlciwgQ29uY2VydCwgUGllY2UgfSBmcm9tICcuL3Nlc3Npb25PYmonO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5pbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5cclxuY2xhc3MgU1RPUkFHRSB7XHJcbiAgZ2V0VXNlcigpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlcih1c2VyKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVzZXIoKSB7XHJcbiAgICBsZXQgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXVzZXJuYW1lJykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgaWYgKFN0b3JhZ2UuZ2V0VXNlcigpID09PSBudWxsIHx8IFN0b3JhZ2UuZ2V0VXNlcigpID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgIGxldCBuZXdVc2VyID0gbmV3IFVzZXIodXNlcik7XHJcbiAgICAgIFN0b3JhZ2Uuc2V0VXNlcihuZXdVc2VyKTtcclxuICAgICAgVUkuZGlzcGxheUNvbmNlcnRzKG5ld1VzZXIpO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyID09PSBTdG9yYWdlLmdldFVzZXIoKS51c2VybmFtZSkge1xyXG4gICAgICBsZXQgY3VycmVudFVzZXIgPSBTdG9yYWdlLmdldFVzZXIoKTtcclxuICAgICAgVUkuZGlzcGxheUNvbmNlcnRzKGN1cnJlbnRVc2VyKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyICE9PSBTdG9yYWdlLmdldFVzZXIoKS51c2VybmFtZSkge1xyXG4gICAgICBsZXQgbmV3VXNlciA9IG5ldyBVc2VyKHVzZXIpO1xyXG4gICAgICBTdG9yYWdlLnNldFVzZXIobmV3VXNlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb25jZXJ0KCkge1xyXG4gICAgbGV0IHJlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25ld0NvbmNlcnQnKSk7XHJcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XHJcbiAgICAgIFJlcXVlc3RzLmdldEZ1bGxQaWVjZUluZm8ocmVzLnBpZWNlc1swXS50aXRsZS5zcGxpdCgnLi4uJylbMF0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBzZXROZXdDb25jZXJ0KGNvbmNlcnQpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduZXdDb25jZXJ0JywgSlNPTi5zdHJpbmdpZnkoY29uY2VydCkpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShzdHJpbmcpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0cmluZyk7XHJcbiAgfVxyXG5cclxuICBzZXRJdGVtKHN0cmluZywgaXRlbSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RyaW5nLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3RvcmFnZSA9IG5ldyBTVE9SQUdFKCk7XHJcbiIsImltcG9ydCB7IFVJU2VsZWN0b3JzIH0gZnJvbSAnLi9VSVNlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFJlcXVlc3RzIH0gZnJvbSAnLi9yZXF1ZXN0cyc7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVpIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZHJhZ1N0YXJ0SW5kZXggPSAwO1xyXG4gICAgdGhpcy5hbGwgPSB0cnVlO1xyXG4gICAgdGhpcy5jb25jZXJ0UGllY2VBcnIgPSBbXTtcclxuICB9XHJcblxyXG4gIHRlc3RJbXBvcnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhVSVNlbGVjdG9ycy5zaXRlVGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgLy9CQVNFXHJcbiAgb3Blbk1vZGFsKGUpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudC50cmltKCkgPT09ICdMb2cgSW4nKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNpZ25Jbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaWduVXBNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbChlKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2Nsb3NlLXNpZ24taW4nKSB7XHJcbiAgICAgIGNvbnN0IHNpZ25Jbk1vZGFsUGFyZW50ID1cclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgc2lnbkluTW9kYWxQYXJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1vZGFsUGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBtb2RhbFBhcmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd1NlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudCA9PT0gVUlTZWxlY3RvcnMub3Blbk1vYmlsZVNlYXJjaCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5yaWdodE5hdkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaXRlVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVUlTZWxlY3RvcnMucmlnaHROYXZDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VTZWFyY2hGaWVsZCgpIHtcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhck92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFVJU2VsZWN0b3JzLnJpZ2h0TmF2Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLnNpdGVUaXRsZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2l0ZVRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0Jyb3dzZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBVSVNlbGVjdG9ycy5icm93c2VNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmJyb3dzZU1vZGFsQXJlYS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICB3aGlsZSAoVUlTZWxlY3RvcnMuYnJvd3NlQ29tcG9zZXJzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgICBVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMuZmlyc3RDaGlsZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFJlcXVlc3RzLmJyb3dzZVBhbmVsRmV0Y2goKTtcclxuICAgIC8vUmVxdWVzdHMub3BlbkN1cnJlbnRMZXR0ZXIoKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZEN1cnJlbnRMZXR0ZXIoaXRlbSkge1xyXG4gICAgbGV0IGNvbXBvc2VyUmVzdWx0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbXBvc2VyUmVzdWx0TmFtZS50ZXh0Q29udGVudCA9IGAke2l0ZW19YDtcclxuICAgIFVJU2VsZWN0b3JzLnJlc3VsdHNDb2x1bW4uYXBwZW5kQ2hpbGQoY29tcG9zZXJSZXN1bHROYW1lKTtcclxuICB9XHJcblxyXG4gIGFkZFJhbmRvbUNvbXBvc2Vyc1RvRE9NKG1haW5MZXR0ZXIsIHJhbmRvbUNvbXBBcnIpIHtcclxuICAgIGxldCBjb21wb3NlckxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9zZXJMZXR0ZXIuY2xhc3NMaXN0ID0gJ2xldHRlcic7XHJcblxyXG5cclxuICAgIC8vVEhFUkUgSVMgU09NRSBGVUNLSU5HIEJFQU1JTkcgSVNTVUUgSEVSRVxyXG4gICAgY29tcG9zZXJMZXR0ZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgPGgxPiR7bWFpbkxldHRlcn08L2gxPlxyXG4gICAgIDxkaXYgY2xhc3M9XCJsZXR0ZXItY29tcG9zZXJzXCI+XHJcblxyXG4gICAgICAgICAgICR7cmFuZG9tQ29tcEFyci5tYXAoKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuZG9tLWNvbXBvc2VyLWxpbmtzXCI+PGEgaHJlZj1cIiNcIj4ke2l0ZW19PC9hPjwvcD5gXHJcbiAgICB9KVxyXG4gICAgICAgIC5qb2luKCcnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICBVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMuYXBwZW5kQ2hpbGQoY29tcG9zZXJMZXR0ZXIpO1xyXG5cclxuICAgIGNvbnN0IGxldHRlckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxldHRlciBoMScpO1xyXG5cclxuICAgIFsuLi5sZXR0ZXJMaW5rc10uZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUmVxdWVzdHMub3BlbkN1cnJlbnRMZXR0ZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmFuZG9tQ29tcG9zZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5yYW5kb20tY29tcG9zZXItbGlua3MgYSdcclxuICAgICk7XHJcbiAgICBbLi4ucmFuZG9tQ29tcG9zZXJMaXN0XS5mb3JFYWNoKChjb21wb3NlckxpbmspID0+IHtcclxuICAgICAgY29uc29sZS5sb2coY29tcG9zZXJMaW5rKTtcclxuICAgICAgY29tcG9zZXJMaW5rLmhyZWYgPSBgL2NvbXBvc2VyLyR7Y29tcG9zZXJMaW5rLnRleHRDb250ZW50fWA7XHJcbiAgICAgIC8vY29tcG9zZXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2coJ1RJVFMnKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyTGlzdCgpIHtcclxuICAgIGlmIChVSVNlbGVjdG9ycy5zZWFyY2hJbnB1dC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgd2hpbGUgKFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLmZpcnN0Q2hpbGRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAoVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5maXJzdENoaWxkKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5maXJzdENoaWxkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZUNvbXBvc2VyU2VhcmNoUmVzdWx0cyhjdXJyZW50VVJMLCBjb21wb3Nlcikge1xyXG4gICAgLy8gVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgY29uc3QgcmVzdWx0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZXN1bHREaXYuY2xhc3NMaXN0ID0gJ3NlYXJjaC1yZXN1bHQtZG93bic7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRVUkwuaW5jbHVkZXMoJ2NvbXBvc2VyJykpIHtcclxuICAgICAgcmVzdWx0RGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgPHA+JHtjb21wb3Nlci5uYW1lfTwvcD5cclxuICAgICAgPGEgaHJlZj1cIiR7Y29tcG9zZXIubmFtZX1cIj48YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG5cIj5WaXNpdCBDb21wb3NlciBQYWdlPC9idXR0b24+PC9hPlxyXG5cclxuICBgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0RGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgPHA+JHtjb21wb3Nlci5uYW1lfTwvcD5cclxuICAgICAgPGEgaHJlZj1cImNvbXBvc2VyLyR7Y29tcG9zZXIubmFtZX1cIj48YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG5cIj5WaXNpdCBDb21wb3NlciBQYWdlPC9idXR0b24+PC9hPlxyXG5cclxuICBgO1xyXG4gICAgfVxyXG5cclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuYXBwZW5kQ2hpbGQocmVzdWx0RGl2KTtcclxuICB9XHJcblxyXG4gIHNob3dEcm9wRG93bigpIHtcclxuICAgIGlmIChVSVNlbGVjdG9ycy5kcm9wRG93bk1lbnUuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xyXG4gICAgICBVSVNlbGVjdG9ycy5kcm9wRG93bk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmRyb3BEb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRk9STSBWQUxJREFUSU9OXHJcbiAgc2hvd0Vycm9yKGlucHV0LCBtZXNzYWdlKSB7XHJcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBmb3JtQ29udHJvbC5jbGFzc05hbWUgPSAnZm9ybS1maWVsZCBlcnJvcic7XHJcblxyXG4gICAgY29uc3QgZXJyb3IgPSBmb3JtQ29udHJvbC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItdGV4dCcpO1xyXG4gICAgZXJyb3IuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIHNob3dTdWNjZXNzKGlucHV0KSB7XHJcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBmb3JtQ29udHJvbC5jbGFzc05hbWUgPSAnZm9ybS1maWVsZCBzdWNjZXNzJztcclxuICB9XHJcblxyXG4gIGdldEZpZWxkTmFtZShpbnB1dCkge1xyXG4gICAgbGV0IG5ld1N0cmluZyA9IGlucHV0LmlkLnNwbGl0KCctJylbMV07XHJcbiAgICAvL2NvbnNvbGUubG9nKG5ld1N0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5ld1N0cmluZy5zbGljZSgxKSk7XHJcbiAgICBpZiAobmV3U3RyaW5nLmluY2x1ZGVzKCdwYXNzd29yZDInKSkge1xyXG4gICAgICByZXR1cm4gJ1JlcGVhdGVkIFBhc3N3b3JkJztcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdTdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuZXdTdHJpbmcuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICAvL0NPTkNFUlQgQlVJTERFUlxyXG5cclxuICBhZGRQaWVjZUZyb21Mb2NhbFN0b3JhZ2UocE9iamVjdCkge1xyXG4gICAgY29uc3QgcGllY2VPYmplY3QgPSBwT2JqZWN0LnBpZWNlO1xyXG4gICAgbGV0IHBpZWNlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBpZWNlRWwuY2xhc3NMaXN0ID0gJ2NvbmNlcnQnO1xyXG4gICAgcGllY2VFbC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XHJcbiAgICBwaWVjZUVsLmlubmVySFRNTCA9IGBcclxuICAgIFxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnMgcGllY2UtZHJhZy1iYXJzXCI+PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWlubmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcG9zZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5jb21wb3Nlcn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3BpZWNlT2JqZWN0LnllYXJzfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7cGllY2VPYmplY3QubmF0aW9uYWxpdHl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cGllY2VPYmplY3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5pbnN0cnVtZW50YXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnggZGVsZXRlLXBpZWNlXCI+PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaW50ZXJtaXNzaW9uXCI+XHJcbiAgICAgICAgICAgIDxwPkFkZCBJbnRlcm1pc3Npb24gSGVyZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgYDtcclxuXHJcbiAgICAvL0ZJWCBERVBFTkRFTkNJRVNcclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5wdXNoKHBpZWNlRWwpO1xyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBVSS5hZGRQaWVjZVRvRE9NKHBpZWNlRWwpO1xyXG5cclxuICAgIFVJLmRlbGV0ZVBpZWNlc0xpc3RlbmVycygpO1xyXG4gICAgVUkuY3JlYXRlSW50ZXJtaXNzaW9uTGlzdGVuZXJzKCk7XHJcbiAgICBVSS5kcmFnTGlzdGVuZXJzKCk7XHJcbiAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKFVJLmNvbmNlcnRQaWVjZUFycikpO1xyXG5cclxuICAgIFN0b3JhZ2UucmVtb3ZlSXRlbSgnbmV3Q29uY2VydCcpO1xyXG5cclxuICB9XHJcblxyXG4gIGdldENvbmNlcnREdXJhdGlvbihwaWVjZUFycikge1xyXG4gICAgaWYgKHBpZWNlQXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBsZXQgZW1wdHkgPSAwO1xyXG4gICAgICBVSS5jb25jZXJ0TGVuZ3RoSnVkZ2VtZW50KFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYSwgZW1wdHkpO1xyXG4gICAgICByZXR1cm4gZW1wdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjb25jZXJ0RHVyYXRpb25BcnIgPSBwaWVjZUFyci5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludGVybWlzc2lvbicpKSB7XHJcbiAgICAgICAgICByZXR1cm4gMzA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBOdW1iZXIoXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnBpZWNlLWluZm8gcDpsYXN0LW9mLXR5cGUnKVxyXG4gICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIidcIilbMF1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGNvbmNlcnREdXJhdGlvbiA9IGNvbmNlcnREdXJhdGlvbkFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyB2YWwpO1xyXG4gICAgICAvLyBpZihjb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmNvbmNlcnQuaW50ZXJtaXNzaW9uJykpe1xyXG4gICAgICAvLyAgICAgY29uY2VydER1cmF0aW9uICs9IDMwO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICBVSS5jb25jZXJ0TGVuZ3RoSnVkZ2VtZW50KFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYSwgY29uY2VydER1cmF0aW9uKTtcclxuXHJcbiAgICAgIHJldHVybiBjb25jZXJ0RHVyYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY3JlYXRlSW50ZXJtaXNzaW9uKGUsIGNvbmNlcnRQaWVjZUFycikge1xyXG4gICAgaWYgKCFVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmFkZC1pbnRlcm1pc3Npb24nKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBhcmVudENvbmNlcnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHJcbiAgICAvL2NvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuYWRkLWludGVybWlzc2lvbicpLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuICAgIGxldCBpbnRlcm1pc3Npb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW50ZXJtaXNzaW9uRWwuY2xhc3NMaXN0ID0gJ2NvbmNlcnQgaW50ZXJtaXNzaW9uJztcclxuICAgIC8vaW50ZXJtaXNzaW9uRWwuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgIGludGVybWlzc2lvbkVsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnNcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgPHA+SW50ZXJtaXNzaW9uOiB+MzAgbWludXRlczwvcD5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnggZGVsZXRlLXBpZWNlXCIgaWQ9XCJkZWxldGUtaW50ZXJtaXNzaW9uXCI+PC9pPlxyXG4gICAgICBgO1xyXG5cclxuICAgIC8vQUREIFRPIEFQUFxyXG4gICAgY29uY2VydFBpZWNlQXJyLnNwbGljZShcclxuICAgICAgY29uY2VydFBpZWNlQXJyLmluZGV4T2YocGFyZW50Q29uY2VydCkgKyAxLFxyXG4gICAgICAwLFxyXG4gICAgICBpbnRlcm1pc3Npb25FbFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIH0pO1xyXG4gICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5hcHBlbmRDaGlsZChwaWVjZSk7XHJcbiAgICB9KTtcclxuICAgIC8vY29uY2VydEJ1aWxkZXJBcmVhLmFwcGVuZENoaWxkKGludGVybWlzc2lvbkVsKTtcclxuICAgIC8vY29uc29sZS5sb2coY29uY2VydFBpZWNlQXJyKTtcclxuXHJcbiAgICBVaS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVWkuZ2V0Q29uY2VydER1cmF0aW9uKGNvbmNlcnRQaWVjZUFycikpO1xyXG5cclxuICAgIC8vRGVsZXRlIEludGVybWlzc2lvblxyXG4gICAgbGV0IGNsb3NlSW50ZXJtaXNzaW9uID0gaW50ZXJtaXNzaW9uRWwucXVlcnlTZWxlY3RvcignI2RlbGV0ZS1pbnRlcm1pc3Npb24nKTtcclxuICAgIGNsb3NlSW50ZXJtaXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uY2VydFBpZWNlQXJyLnNwbGljZShjb25jZXJ0UGllY2VBcnIuaW5kZXhPZihlLnRhcmdldC5wYXJlbnRFbGVtZW50KSwgMSk7XHJcblxyXG4gICAgICAvL1JlbW92ZSBJbnRlcm1pc3Npb24gZnJvbSBET01cclxuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgIC8vVXBkYXRlIERhdGEtSW5kZXggQXR0cmlidXRlXHJcbiAgICAgIGNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgVWkudXBkYXRlQ29uY2VydER1cmF0aW9uKFVpLmdldENvbmNlcnREdXJhdGlvbihjb25jZXJ0UGllY2VBcnIpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29uY2VydER1cmF0aW9uKGR1cmF0aW9uTnVtKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0TWludXRlcy50ZXh0Q29udGVudCA9IGAke2R1cmF0aW9uTnVtfWA7XHJcbiAgfVxyXG5cclxuICBjb25jZXJ0TGVuZ3RoSnVkZ2VtZW50KGNvbnRhaW5lciwgZHVyYXRpb24pIHtcclxuICAgIGlmIChkdXJhdGlvbiA9PSAwKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRDb25jbHVzaW9uLnRleHRDb250ZW50ID0gYFBsZWFzZSBhZGQgc29tZSBwaWVjZXMuYDtcclxuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPCA5MCAmJiBkdXJhdGlvbiA+IDApIHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydENvbmNsdXNpb24udGV4dENvbnRlbnQgPSBgQ29uY2VydCBpcyBwb3RlbnRpYWxseSB0b28gc2hvcnQuYDtcclxuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPj0gOTAgJiYgZHVyYXRpb24gPD0gMTIwKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRDb25jbHVzaW9uLnRleHRDb250ZW50ID0gYFBlcmZlY3QgY29uY2VydCBsZW5ndGghYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRDb25jbHVzaW9uLnRleHRDb250ZW50ID0gYENvbmNlcnQgaXMgZ2V0dGluZyBhIGJpdCBsb25nLi4uYDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb25jZXJ0LmludGVybWlzc2lvbicpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdubyBpbnRlcm1pc3Npb24geWV0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVQaWVjZXNMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZGVsZXRlUGllY2VzID0gVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtcGllY2UnKTtcclxuICAgIGRlbGV0ZVBpZWNlcy5mb3JFYWNoKChwaWVjZSkgPT4ge1xyXG4gICAgICBwaWVjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnJlbW92ZVBpZWNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSW50ZXJtaXNzaW9uTGlzdGVuZXJzKCkge1xyXG5cclxuICAgIGxldCBpbnRlcm1pc3Npb25MaXN0ID0gVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICcuYWRkLWludGVybWlzc2lvbidcclxuICAgICk7XHJcbiAgICBpbnRlcm1pc3Npb25MaXN0LmZvckVhY2goKGludGVybWlzc2lvbikgPT4ge1xyXG4gICAgICBpbnRlcm1pc3Npb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jcmVhdGVJbnRlcm1pc3Npb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQaWVjZShlKSB7XHJcbiAgICAvL2dldCBwYXJlbnQgRWxcclxuICAgIGxldCBzZWxlY3RlZENvbmNlcnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRDb25jZXJ0KTtcclxuXHJcbiAgICAvL1JlbW92ZSBTZWxlY3RlZCBQaWVjZSBmcm9tIEFycmF5XHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIuc3BsaWNlKFVJLmNvbmNlcnRQaWVjZUFyci5pbmRleE9mKHNlbGVjdGVkQ29uY2VydCksIDEpO1xyXG5cclxuICAgIC8vUmVtb3ZlIFBpZWNlIGZyb20gRE9NXHJcbiAgICBzZWxlY3RlZENvbmNlcnQucmVtb3ZlKCk7XHJcblxyXG4gICAgLy9VcGRhdGUgRGF0YS1JbmRleCBBdHRyaWJ1dGVcclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSwgaW5kZXgpID0+IHtcclxuICAgICAgcGllY2Uuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG4gICAgfSk7XHJcbiAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKFVJLmNvbmNlcnRQaWVjZUFycikpO1xyXG4gIH1cclxuXHJcblxyXG4gIGFkZFBpZWNlVG9ET00ocGllY2UpIHtcclxuXHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEuYXBwZW5kQ2hpbGQocGllY2UpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJGYXZlTGlzdCgpIHtcclxuICAgIHdoaWxlIChVSVNlbGVjdG9ycy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuZmF2b3JpdGVzU2VhcmNoUmVzdWx0cy5yZW1vdmVDaGlsZChcclxuICAgICAgICBVSVNlbGVjdG9ycy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLmZpcnN0Q2hpbGRcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dJbnRlcm1pc3Npb24oZSkge1xyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuY29uY2VydC5pbnRlcm1pc3Npb24nKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gJ2NvbmNlcnQnKSB7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGUudGFyZ2V0ID09PSBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEgJiZcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5jb25jZXJ0LnNob3cnKVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBjdXJyZW50Q29uY2VydCA9IFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICcuY29uY2VydC5zaG93J1xyXG4gICAgICApO1xyXG4gICAgICBjdXJyZW50Q29uY2VydC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlQ29uY2VydFRpdGxlKCkge1xyXG4gICAgbGV0IGNvbmNlcnRUaXRsZSA9IFVJU2VsZWN0b3JzLmNvbmNlcnRUaXRsZUlucHV0LnZhbHVlO1xyXG5cclxuICAgIGlmIChjb25jZXJ0VGl0bGUgPT09ICcnKSB7XHJcbiAgICAgIC8vUGxlYXNlIFByb3ZpZGUgQSBUaXRsZS5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vQ2hhbmdlIERPTVxyXG4gICAgICBVSVNlbGVjdG9ycy5yaWdodFNlYXJjaEFyZWEuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0VGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPSBgJHtjb25jZXJ0VGl0bGV9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUNvbmNlcnRUaXRsZSgpIHtcclxuICAgIFVJU2VsZWN0b3JzLnJpZ2h0U2VhcmNoQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVJbnRlcm1pc3Npb24oZSkge1xyXG4gICAgaWYgKCFVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmFkZC1pbnRlcm1pc3Npb24nKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQgUGFyZW50XHJcbiAgICBsZXQgcGFyZW50Q29uY2VydCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIHBhcmVudENvbmNlcnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuICAgIC8vTWFrZSBJbnRlcm1pc3Npb24gRWxlbWVudFxyXG4gICAgbGV0IGludGVybWlzc2lvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnRlcm1pc3Npb25FbC5jbGFzc0xpc3QgPSAnY29uY2VydCBpbnRlcm1pc3Npb24nO1xyXG4gICAgLy9pbnRlcm1pc3Npb25FbC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgaW50ZXJtaXNzaW9uRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmFyc1wiIGRyYWdnYWJsZT1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICA8cD5JbnRlcm1pc3Npb246IH4zMCBtaW51dGVzPC9wPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcyBmYS0yeCBkZWxldGUtcGllY2VcIiBpZD1cImRlbGV0ZS1pbnRlcm1pc3Npb25cIj48L2k+XHJcbiAgICAgIGA7XHJcblxyXG4gICAgLy9BREQgQVBQIEZVTkNUSU9OIEhFUkVcclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5zcGxpY2UoXHJcbiAgICAgIFVJLmNvbmNlcnRQaWVjZUFyci5pbmRleE9mKHBhcmVudENvbmNlcnQpICsgMSxcclxuICAgICAgMCxcclxuICAgICAgaW50ZXJtaXNzaW9uRWxcclxuICAgICk7XHJcblxyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9KTtcclxuICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5pbm5lckhUTUwgPSAnJztcclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSkgPT4ge1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEuYXBwZW5kQ2hpbGQocGllY2UpO1xyXG4gICAgfSk7XHJcbiAgICAvL2NvbmNlcnRCdWlsZGVyQXJlYS5hcHBlbmRDaGlsZChpbnRlcm1pc3Npb25FbCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGNvbmNlcnRQaWVjZUFycik7XHJcblxyXG4gICAgVUkudXBkYXRlQ29uY2VydER1cmF0aW9uKFVJLmdldENvbmNlcnREdXJhdGlvbihVSS5jb25jZXJ0UGllY2VBcnIpKTtcclxuXHJcbiAgICAvL0RlbGV0ZSBJbnRlcm1pc3Npb25cclxuICAgIGxldCBjbG9zZUludGVybWlzc2lvbiA9IGludGVybWlzc2lvbkVsLnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtaW50ZXJtaXNzaW9uJyk7XHJcbiAgICBjbG9zZUludGVybWlzc2lvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIFVJLmNvbmNlcnRQaWVjZUFyci5zcGxpY2UoVUkuY29uY2VydFBpZWNlQXJyLmluZGV4T2YoZS50YXJnZXQucGFyZW50RWxlbWVudCksIDEpO1xyXG5cclxuICAgICAgLy9SZW1vdmUgSW50ZXJtaXNzaW9uIGZyb20gRE9NXHJcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAvL1VwZGF0ZSBEYXRhLUluZGV4IEF0dHJpYnV0ZVxyXG4gICAgICBVSS5jb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcGllY2Uuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFVJLnVwZGF0ZUNvbmNlcnREdXJhdGlvbihVSS5nZXRDb25jZXJ0RHVyYXRpb24oVUkuY29uY2VydFBpZWNlQXJyKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUludGVybWlzc2lvbihpbnRlcm1pc3Npb25FbGVtZW50KSB7XHJcbiAgICBsZXQgY2xvc2VJbnRlcm1pc3Npb24gPSBpbnRlcm1pc3Npb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcjZGVsZXRlLWludGVybWlzc2lvbidcclxuICAgICk7XHJcbiAgICBjbG9zZUludGVybWlzc2lvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwYXJzZUR1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIE51bWJlcihcclxuICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcucGllY2UtaW5mbyBwOmxhc3Qtb2YtdHlwZScpLnRleHRDb250ZW50LnNwbGl0KFwiJ1wiKVswXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vRHJhZyBGdW5jdGlvbnNcclxuXHJcbiAgZHJhZ1N0YXJ0KGUpIHtcclxuICAgIFVJLmRyYWdTdGFydEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcclxuICB9XHJcblxyXG4gIGRyYWdFbnRlcigpIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0xlYXZlKCkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XHJcbiAgfVxyXG5cclxuICBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBkcmFnRHJvcChlKSB7XHJcbiAgICBjb25zdCBkcmFnRW5kSW5kZXggPSArZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhgZnJvbSBkcmFnRFJPUCAke2RyYWdFbmRJbmRleH0sICR7VUkuZHJhZ1N0YXJ0SW5kZXh9YClcclxuICAgIFVJLnN3YXBJdGVtcyhVSS5kcmFnU3RhcnRJbmRleCwgZHJhZ0VuZEluZGV4KTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcclxuICB9XHJcblxyXG4gIGRyYWdMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBwaWVjZURyYWdCYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlLWRyYWctYmFycycpO1xyXG4gICAgY29uc3QgZHJhZ0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbmNlcnQnKTtcclxuXHJcbiAgICBwaWVjZURyYWdCYXJzLmZvckVhY2goKGRyYWcpID0+IHtcclxuICAgICAgZHJhZy5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBVSS5kcmFnU3RhcnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZHJhZ0JveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBVSS5kcmFnT3Zlcik7XHJcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgVUkuZHJhZ0Ryb3ApO1xyXG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgVUkuZHJhZ0VudGVyKTtcclxuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFVJLmRyYWdMZWF2ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN3YXBJdGVtcyhmcm9tSW5kZXgsIHRvSW5kZXgpIHtcclxuICAgIGNvbnN0IGl0ZW1PbmUgPSBVSS5jb25jZXJ0UGllY2VBcnJbZnJvbUluZGV4XTtcclxuICAgIGNvbnN0IGl0ZW1Ud28gPSBVSS5jb25jZXJ0UGllY2VBcnJbdG9JbmRleF07XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKFVJLmNvbmNlcnRQaWVjZUFycik7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtT25lKTtcclxuICAgIGNvbnNvbGUubG9nKGl0ZW1Ud28pO1xyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyW2Zyb21JbmRleF0gPSBpdGVtVHdvO1xyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyW3RvSW5kZXhdID0gaXRlbU9uZTtcclxuXHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEuaW5uZXJIVE1MID0gYGA7XHJcblxyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBpdGVtKVxyXG4gICAgICBVSS5hZGRQaWVjZVRvRE9NKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0hPTUVQQUdFXHJcbiAgZGlzcGxheUNvbmNlcnRzKHVzZXIsIGFsbCA9IGZhbHNlKSB7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuZnVsbENvbmNlcnRzR3JpZC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmZ1bGxDb25jZXJ0c0dyaWQuaW5uZXJIVE1MID0gYGA7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXIuY29uY2VydHMpO1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlci5jb25jZXJ0cy5sZW5ndGgpO1xyXG5cclxuXHJcbiAgICBpZiAodXNlci5jb25jZXJ0cy5sZW5ndGggPT09IDAgfHwgdXNlci5jb25jZXJ0cy5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgbm90aWZpY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIG5vdGlmaWNhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QgPSAnbm8tY29uY2VydHMtbm90aWZpY2F0aW9uJztcclxuICAgICAgbm90aWZpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb21wb3Nlci1uYW1lXCI+VmlzaXQgdGhlIGNvbmNlcnQgYnVpbGRlciBwYWdlIGFib3ZlIHRvIHN0YXJ0IGJ1aWxkaW5nIGNvbmNlcnRzITwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYDtcclxuICAgICAgVUlTZWxlY3RvcnMueW91ckNvbmNlcnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBVSVNlbGVjdG9ycy55b3VyQ29uY2VydHNDb250YWluZXIuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiAodXNlci5mYXZvcml0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAgIGxldCBub3RpZmljYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy8gICBub3RpZmljYXRpb25Db250YWluZXIuY2xhc3NMaXN0ID0gJ25vLWZhdm9yaXRlcy1ub3RpZmljYXRpb24nO1xyXG4gICAgLy8gICBub3RpZmljYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgLy8gICAgICAgICAgIDxwIGNsYXNzPVwibm8tZmF2b3JpdGVzLW1lc3NhZ2VcIj5QbGVhc2UgYnJvd3NlIGNvbXBvc2VycyB0byBhZGQgc29tZSBmYXZvcml0ZXMhPC9wPlxyXG4gICAgLy8gICAgICAgYDtcclxuICAgIC8vICAgVUlTZWxlY3RvcnMuaG9tZVNlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uQ29udGFpbmVyKTtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy9TRUUgaG9tZXBhZ2UuanMgTGluZSA4NlxyXG4gICAgdXNlci5jb25jZXJ0cy5mb3JFYWNoKChjb25jZXJ0LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoYWxsID09PSBmYWxzZSAmJiBpbmRleCA8IDMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWxsPT09ZmFsc2UsIGluZGV4IDwgMycpO1xyXG4gICAgICAgIC8vZnVsbENvbmNlcnRzR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGxldCBjb25jZXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uY2VydENvbnRhaW5lci5jbGFzc0xpc3QgPSAnc2VhcmNoLXJlc3VsdCc7XHJcbiAgICAgICAgY29uY2VydENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29uY2VydC1pZC1udW1cIj4ke2NvbmNlcnQuaWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiY29uY2VydC1uYW1lXCIgaWQ9XCJjb25jZXJ0LW5hbWVcIj4gJHtjb25jZXJ0LnRpdGxlXHJcbiAgICAgICAgICB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAke2NvbmNlcnQucGllY2VzXHJcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gYDxwIGNsYXNzPVwidGlueS1waWVjZS10aXRsZVwiPiA8c3Ryb25nPiAke2l0ZW0uY29tcG9zZXJ9PC9zdHJvbmc+ICR7aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAudHJpbSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbignJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0biByZW1vdmUtY29uY2VydC1idG5cIj5EZWxldGUgQ29uY2VydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdmVyLWdvbGRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICBVSVNlbGVjdG9ycy55b3VyQ29uY2VydHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29uY2VydENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgY29uY2VydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbmNlcnRDb250YWluZXIuY2xhc3NMaXN0ID0gJ3NlYXJjaC1yZXN1bHQnO1xyXG4gICAgICAgIGNvbmNlcnRDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbmNlcnQtaWQtbnVtXCI+JHtjb25jZXJ0LmlkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImNvbmNlcnQtbmFtZVwiIGlkPVwiY29uY2VydC1uYW1lXCI+ICR7Y29uY2VydC50aXRsZVxyXG4gICAgICAgICAgfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHtjb25jZXJ0LnBpZWNlc1xyXG4gICAgICAgICAgICAubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGlueS1waWVjZS10aXRsZVwiPiA8c3Ryb25nPiAke2l0ZW0uY29tcG9zZXJ9PC9zdHJvbmc+ICR7aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgLnRyaW0oKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5qb2luKCcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnktYnRuIHJlbW92ZS1jb25jZXJ0LWJ0blwiPkRlbGV0ZSBDb25jZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG92ZXItZ29sZCBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICBVSVNlbGVjdG9ycy5mdWxsQ29uY2VydHNHcmlkLmFwcGVuZENoaWxkKGNvbmNlcnRDb250YWluZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBVSS5yZW1vdmVDb25jZXJ0TGlzdGVuZXJzKFVJU2VsZWN0b3JzLmZ1bGxDb25jZXJ0c0dyaWQpO1xyXG4gICAgVUkucmVtb3ZlQ29uY2VydExpc3RlbmVycyhVSVNlbGVjdG9ycy55b3VyQ29uY2VydHNDb250YWluZXIpO1xyXG5cclxuICAgIC8vVEhJUyBJUyBUSEUgQ09SUkVDVCBCUkFDS0VUIEZVQ0sgRVNMSU5UIEFORCBQUkVUVElFUi5cclxuICB9XHJcblxyXG4gIHVwZGF0ZUhvdmVyTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLXJlc3VsdCcpO1xyXG5cclxuICAgIFsuLi5zZWFyY2hSZXN1bHRzXS5mb3JFYWNoKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBVSS5zaG93R29sZFVuZGVybGluZSk7XHJcbiAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgVUkuaGlkZUdvbGRVbmRlcmxpbmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb25jZXJ0TGlzdGVuZXJzKGNvbnRhaW5lcikge1xyXG4gICAgbGV0IGNvbmNlcnRzTGlzdCA9IGNvbnRhaW5lci5jaGlsZHJlbjtcclxuXHJcbiAgICBbLi4uY29uY2VydHNMaXN0XS5mb3JFYWNoKChjb25jZXJ0KSA9PiB7XHJcbiAgICAgIGlmICghY29uY2VydC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWNvbmNlcnQtYnRuJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uY2VydFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtY29uY2VydC1idG4nKVxyXG4gICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuZGVsZXRlQ29uY2VydCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ29uY2VydChlKSB7XHJcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgbGV0IHNlbGVjdGVkQ29uY2VydElEID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmNvbmNlcnQtaWQtbnVtJ1xyXG4gICAgKTtcclxuICAgIC8vU1dJVENIIFRPIFNUT1JBR0UgRlVOQ1RJT05cclxuICAgIGxldCBkZWxldGVDb25jZXJ0VXNlciA9IFN0b3JhZ2UuZ2V0VXNlcigpO1xyXG4gICAgZGVsZXRlQ29uY2VydFVzZXIuY29uY2VydHMuZm9yRWFjaCgoY29uY2VydCwgaW5kZXgsIG9iamVjdCkgPT4ge1xyXG5cclxuICAgICAgaWYgKGNvbmNlcnQuaWQgPT09IE51bWJlcihzZWxlY3RlZENvbmNlcnRJRC50ZXh0Q29udGVudCkpIHtcclxuICAgICAgICBvYmplY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9TVE9SQUdFIEZVTkNUSU9OXHJcbiAgICBTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBkZWxldGVDb25jZXJ0VXNlcik7XHJcblxyXG4gIH1cclxuXHJcbiAgLy9XaGVyZSB0byBjYWxsIHRoaXM/XHJcbiAgc2hvcnRlblBpZWNlVGl0bGUocGllY2VOYW1lcykge1xyXG4gICAgcGllY2VOYW1lcy5mb3JFYWNoKChwaWVjZSkgPT4ge1xyXG4gICAgICBsZXQgcGllY2VUaXRsZUxlbmd0aCA9IHBpZWNlLnRleHRDb250ZW50LnNsaWNlKDAsIDIwKSArICcuLi4nO1xyXG4gICAgICBwaWVjZS50ZXh0Q29udGVudCA9IHBpZWNlVGl0bGVMZW5ndGg7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dHb2xkVW5kZXJsaW5lKGUpIHtcclxuICAgIGlmICghZS50YXJnZXQucXVlcnlTZWxlY3RvcignLmhvdmVyLWdvbGQnKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuaG92ZXItZ29sZCcpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGVHb2xkVW5kZXJsaW5lKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuaG92ZXItZ29sZCcpKSB7XHJcbiAgICAgIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5ob3Zlci1nb2xkJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBob21lQ2FyZEVudGVyKGNvbnRhaW5lcikge1xyXG4gICAgY29uc3QgZnVsbEZhdm9yaXRlc0dyaWQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmZ1bGwtZmF2b3JpdGVzLWdyaWQnKTtcclxuICAgIGNvbnN0IGZ1bGxDb25jZXJ0c0dyaWQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmZ1bGwtY29uY2VydHMtZ3JpZCcpO1xyXG5cclxuICAgIGZ1bGxGYXZvcml0ZXNHcmlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBmdWxsQ29uY2VydHNHcmlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgWy4uLmNvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudCA9PT0gZnVsbEZhdm9yaXRlc0dyaWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3RbMF0gPT09ICdoZWFkZXItcm93Jykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LW1vcmUtYnRuJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdFswXSA9PT0gJ3NlYXJjaC1yZXN1bHRzJ1xyXG4gICAgICApIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3RbMV0gPT09ICd5b3VyLXJlY2VudC1jb25jZXJ0cycpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3RbMV0gPT09ICdmdWxsLWNvbmNlcnRzLWdyaWQnKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbmNlcnRzRW50ZXIoY29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBmdWxsQ29uY2VydHNHcmlkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuc2VhcmNoLXJlc3VsdHMuZnVsbC1jb25jZXJ0cy1ncmlkJ1xyXG4gICAgKTtcclxuXHJcbiAgICBmdWxsQ29uY2VydHNHcmlkLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcblxyXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItcm93LmNvbmNlcnRzLWhlYWRlci1yb3cnKS5zdHlsZS5kaXNwbGF5ID1cclxuICAgICAgJ2ZsZXgnO1xyXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuaGVhZGVyLXJvdy5jb25jZXJ0cy1oZWFkZXItcm93IC52aWV3LW1vcmUtYnRuJ1xyXG4gICAgKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy9DaGFuZ2UgdGhpc1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gU3RvcmFnZS5nZXRVc2VyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcblxyXG4gICAgVUkuZGlzcGxheUNvbmNlcnRzKGN1cnJlbnRVc2VyLCB0cnVlKTtcclxuICB9XHJcblxyXG5cclxuICBmYXZvcml0ZXNFbnRlcihjb250YWluZXIpIHtcclxuICAgIGNvbnN0IGZ1bGxGYXZvcml0ZXNHcmlkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLWZhdm9yaXRlcy1ncmlkJyk7XHJcbiAgICBmdWxsRmF2b3JpdGVzR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1yb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1yb3cgLnZpZXctbW9yZS1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgWy4uLmZ1bGxGYXZvcml0ZXNHcmlkLmNoaWxkcmVuXS5mb3JFYWNoKChmYXZvcml0ZSkgPT4ge1xyXG4gICAgICBpZiAoZmF2b3JpdGUucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyLW5hbWUnKS50ZXh0Q29udGVudC5sZW5ndGggPj0gMTgpIHtcclxuICAgICAgICBmYXZvcml0ZS5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXItbmFtZScpLnN0eWxlLmZvbnRTaXplID0gJzEuMnJlbSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICByZXN1bHRzRXhpdChlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdmcm9tIHJlc3VsdHMgZXhpdCcsIGUudGFyZ2V0LmlkKTtcclxuICAgIC8vY29uc29sZS5sb2coZHJvcERvd25Zb3VyQ29uY2VydHMuaWQpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lci5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgWy4uLlVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIuY2hpbGRyZW5dLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBVSVNlbGVjdG9ycy5tYWluQ29udGVudElubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZScpO1xyXG4gICAgICBpZiAoZS50YXJnZXQgPT09IFVJU2VsZWN0b3JzLnJldHVybkhvbWUpIHtcclxuICAgICAgICAvL0NoYW5nZSB0aGlzXHJcbiAgICAgICAgVUkuaG9tZUNhcmRFbnRlcihVSVNlbGVjdG9ycy5tYWluQ29udGVudElubmVyKTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gVUlTZWxlY3RvcnMub3BlblByb2ZpbGUpIHtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBlLnRhcmdldCA9PT0gVUlTZWxlY3RvcnMub3BlbkZhdm9yaXRlcyB8fFxyXG4gICAgICAgICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb25jZXJ0LXZpZXctbW9yZS1idG4nKSAmJlxyXG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aWV3LW1vcmUtYnRuJykpXHJcbiAgICAgICkge1xyXG4gICAgICAgIFVJLmZhdm9yaXRlc0VudGVyKFVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGUudGFyZ2V0ID09PSBVSVNlbGVjdG9ycy5vcGVuQ29uY2VydHMgfHxcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbmNlcnQtdmlldy1tb3JlLWJ0bicpIHx8XHJcbiAgICAgICAgZS50YXJnZXQuaWQgPT09IFVJU2VsZWN0b3JzLmRyb3BEb3duWW91ckNvbmNlcnRzLmlkXHJcbiAgICAgICkge1xyXG4gICAgICAgIFVJLmNvbmNlcnRzRW50ZXIoVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lcik7XHJcbiAgICAgIH1cclxuICAgIH0sIDE1MDApO1xyXG4gIH1cclxuXHJcbiAgLy9TaG9ydGVuIFBpZWNlIHRpdGxlIGlmIG5lY2Vzc2FyeVxyXG4gIGZvcm1hdFJlc3VsdHNDYXJkKCkge1xyXG4gICAgY29uc3QgcGllY2VOYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waWVjZS1uYW1lJyk7XHJcbiAgICBwaWVjZU5hbWVzLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIGxldCBwaWVjZVRpdGxlTGVuZ3RoID0gcGllY2UudGV4dENvbnRlbnQuc2xpY2UoMCwgMzApICsgJy4uLic7XHJcbiAgICAgIHBpZWNlLnRleHRDb250ZW50ID0gcGllY2VUaXRsZUxlbmd0aDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9DbGVhciBDb21wb3NlciBTZWFyY2ggUmVzdWx0c1xyXG4gIGNsZWFyQ29tcG9zZXJMaW5rcygpIHtcclxuICAgIGlmIChVSVNlbGVjdG9ycy5zZWFyY2hGaWVsZC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgd2hpbGUgKFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MucmVtb3ZlQ2hpbGQoVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5yZW1vdmVDaGlsZChVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vQ09NUE9TRVIgUEFHRVxyXG4gIGNsZWFyQ29tcG9zZXJSZXN1bHRzKCkge1xyXG4gICAgVUlTZWxlY3RvcnMucGllY2VEZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgc2hvd0J1dHRvbkVycm9yKGJ1dHRvbiwgbWVzc2FnZSkge1xyXG4gICAgbGV0IGluaXRhbFRleHQgPSBidXR0b24udGV4dENvbnRlbnQ7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGAke21lc3NhZ2V9YDtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGluaXRhbFRleHRcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsUGllY2VJbnRvVmlldyhlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2Nyb2xsIHBpZWNlIGludG8gdmlldycpO1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgbG9jYXRpb24uaHJlZiA9ICcjJztcclxuICAgIGxvY2F0aW9uLmhyZWYgPSBcIiNwaWVjZS1kZXRhaWxzXCI7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVUkgPSBuZXcgVWkoKTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRklYIElNQUdFICovXFxyXFxuLyogRklYIFNDUk9MTCBPTiBQSUVDRSBMSVNUICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItdG9wIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5jb21wb3Nlci10b3AsIC5jb21wb3Nlci1ib3R0b20ge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLXdyYXAge1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIG1hcmdpbjogMCA4MHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWJvdHRvbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXg6IDI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY29tcG9zZXItcGllY2UtbGlzdCB7XFxyXFxuICAvKlxcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBcXHJcXG4gIG92ZXJmbG93OmhpZGRlbjtcXHJcXG4gICovXFxyXFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgXFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWJvdHRvbS1yaWdodCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtZGV0YWlscyB7XFxyXFxuIFxcclxcbiAgZmxleDogMTtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXg6IDMgMSBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyBcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCAuY29tbWVudCB7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQgcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHA6Zmlyc3QtY2hpbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHA6bGFzdC1jaGlsZCB7XFxyXFxuICBmb250LXNpemU6IC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uZGlzYWJsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgMjA3LCAyMDcsIDAuNSk7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uZXJyb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuLXVzZXIge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgZm9udC1zaXplOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4ucGllY2UtbGlzdC13cmFwIHtcXHJcXG4gICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxufVxcclxcbiovXFxyXFxuLnVzZXItaW50ZXJhY3Rpb24tYXJlYSB7XFxyXFxuICBcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtbGlzdCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4OiAzIDEgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBpZWNlLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDRweCAxMXB4IC02cHggcmdiYSg0Miw0Miw0MiwxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gLjVyZW07XFxyXFxuICBmb250LXNpemU6IC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1jb21tZW50IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi51c2VyLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtY29tbWVudCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpZWNlLWRldGFpbHMge1xcclxcbiAgICBmbGV4OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWJvdHRvbS1yaWdodCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgLnVzZXItYnV0dG9ucyB7XFxyXFxuICAgIGZsZXg6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItdG9wIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgfVxcclxcblxcclxcbiAudXNlci1pbnRlcmFjdGlvbi1hcmVhIHRleHRhcmVhIHtcXHJcXG4gICBoZWlnaHQ6IDUwJTtcXHJcXG4gfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWhlcm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tcG9zZXItYm90dG9tIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItcGllY2UtbGlzdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51c2VyLWJ1dHRvbnMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWluZm9ybWF0aW9ucyA+ICoge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlci1idXR0b25zIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpZWNlLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwaWVjZS10aXRsZS1yZXN1bHQge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BpZWNlLWR1cmF0aW9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BpZWNlLWluc3RydW1lbnRhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItdG9wIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWhlcm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tcG9zZXItYm90dG9tIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG5cXHJcXG4gIC5jb21wb3Nlci1waWVjZS1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hcHAvc3RhdGljL2Nzcy9jb21wb3Nlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkLDZCQUE2Qjs7QUFFN0I7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsT0FBTztFQUNQLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjs7QUFFN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xC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QztFQUNuQzs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COzs7O0VBSUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRklYIElNQUdFICovXFxyXFxuLyogRklYIFNDUk9MTCBPTiBQSUVDRSBMSVNUICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItdG9wIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5jb21wb3Nlci10b3AsIC5jb21wb3Nlci1ib3R0b20ge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLXdyYXAge1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIG1hcmdpbjogMCA4MHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWJvdHRvbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXg6IDI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY29tcG9zZXItcGllY2UtbGlzdCB7XFxyXFxuICAvKlxcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBcXHJcXG4gIG92ZXJmbG93OmhpZGRlbjtcXHJcXG4gICovXFxyXFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgXFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWJvdHRvbS1yaWdodCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtZGV0YWlscyB7XFxyXFxuIFxcclxcbiAgZmxleDogMTtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXg6IDMgMSBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyBcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCAuY29tbWVudCB7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQgcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHA6Zmlyc3QtY2hpbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHA6bGFzdC1jaGlsZCB7XFxyXFxuICBmb250LXNpemU6IC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uZGlzYWJsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgMjA3LCAyMDcsIDAuNSk7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uZXJyb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuLXVzZXIge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgZm9udC1zaXplOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4ucGllY2UtbGlzdC13cmFwIHtcXHJcXG4gICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxufVxcclxcbiovXFxyXFxuLnVzZXItaW50ZXJhY3Rpb24tYXJlYSB7XFxyXFxuICBcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtbGlzdCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4OiAzIDEgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBpZWNlLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDRweCAxMXB4IC02cHggcmdiYSg0Miw0Miw0MiwxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gLjVyZW07XFxyXFxuICBmb250LXNpemU6IC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1jb21tZW50IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi51c2VyLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtY29tbWVudCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpZWNlLWRldGFpbHMge1xcclxcbiAgICBmbGV4OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWJvdHRvbS1yaWdodCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgLnVzZXItYnV0dG9ucyB7XFxyXFxuICAgIGZsZXg6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItdG9wIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgfVxcclxcblxcclxcbiAudXNlci1pbnRlcmFjdGlvbi1hcmVhIHRleHRhcmVhIHtcXHJcXG4gICBoZWlnaHQ6IDUwJTtcXHJcXG4gfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWhlcm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tcG9zZXItYm90dG9tIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItcGllY2UtbGlzdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51c2VyLWJ1dHRvbnMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWluZm9ybWF0aW9ucyA+ICoge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlci1idXR0b25zIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpZWNlLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwaWVjZS10aXRsZS1yZXN1bHQge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BpZWNlLWR1cmF0aW9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BpZWNlLWluc3RydW1lbnRhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tcG9zZXItdG9wIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvc2VyLWhlcm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tcG9zZXItYm90dG9tIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgbWluLWhlaWdodDogdW5zZXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG5cXHJcXG4gIC5jb21wb3Nlci1waWVjZS1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5sb2dnZWQtaW4gaW1nIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICB0b3A6IDEwJTtcXHJcXG4gIHJpZ2h0OiA1JTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IGxpIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIC8qbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICovXFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIFxcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2QyMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYS1pbm5lciB7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhLWlubmVyLnJlbW92ZSB7XFxyXFxuICBhbmltYXRpb246IDFzIHJlbW92ZS1tYWluO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmVtb3ZlLW1haW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cywgLnlvdXItcmVjZW50LWNvbmNlcnRzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cy51c2VyLXByb2ZpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC5jb21wb3Nlci1uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC5jb25jZXJ0LW5hbWUge1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC50aW55LXBpZWNlLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC5sZWF2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cy5mdWxsLWZhdm9yaXRlcy1ncmlkLCAuc2VhcmNoLXJlc3VsdHMuZnVsbC1jb25jZXJ0cy1ncmlkIHtcXHJcXG4gIFxcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbC1mYXZvcml0ZXMtZ3JpZC5hbmltYXRlIHtcXHJcXG4gICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXItZ29sZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IC41cmVtO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5ob3Zlci1nb2xkLnNob3cge1xcclxcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcmlnaHQ6IDIwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8tcGxheWVyLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLnZpc2l0LXBhZ2Uge1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29uY2VydC1pZC1udW0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdXNlcm5hbWUgIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5yZW1vdmUtY29uY2VydC1idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0MzAyYjtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ueW91ci1yZWNlbnQtY29uY2VydHMuaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eXtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LWhlaWdodDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb25jZXJ0LW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAuNXJlbTs7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jb250ZW50LWFyZWEtaW5uZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtbW9iaWxlLWljb25zIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlZnQtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJpbWFyeS1idG4ucmVtb3ZlLWNvbmNlcnQtYnRuIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hcHAvc3RhdGljL2Nzcy9ob21lcGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixPQUFPO0VBQ1AsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQjtHQUNDO0FBQ0g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHNCQUFzQjs7RUFFdEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7O0VBRWQsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7Ozs7QUFJQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLE9BQU87O0FBRVQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjs7O0FBR3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTs7RUFFWjtBQUNGOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsMkRBQTJEO0FBQzdEOzs7O0FBSUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLDJCQUEyQjtBQUM3Qjs7OztBQUlBOztFQUVFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0dBQ0csVUFBVTtBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7O0FBR0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCOztBQUUzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7Ozs7QUFJQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7OztFQUdFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7O0FBR0E7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nZ2VkLWluIGltZyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1yaWdodCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgdG9wOiAxMCU7XFxyXFxuICByaWdodDogNSU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSBsaSB7XFxyXFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAvKm1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgXFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyBsaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWNkMjE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50LWFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50LWFyZWEtaW5uZXIge1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYS1pbm5lci5yZW1vdmUge1xcclxcbiAgYW5pbWF0aW9uOiAxcyByZW1vdmUtbWFpbjtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJlbW92ZS1tYWluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyBpIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMsIC55b3VyLXJlY2VudC1jb25jZXJ0cyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWdhcDogMjBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMudXNlci1wcm9maWxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAuY29tcG9zZXItbmFtZSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAuY29uY2VydC1uYW1lIHtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAudGlueS1waWVjZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQubGVhdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMuZnVsbC1mYXZvcml0ZXMtZ3JpZCwgLnNlYXJjaC1yZXN1bHRzLmZ1bGwtY29uY2VydHMtZ3JpZCB7XFxyXFxuICBcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmZ1bGwtZmF2b3JpdGVzLWdyaWQuYW5pbWF0ZSB7XFxyXFxuICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyLWdvbGQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAuNXJlbTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXItZ29sZC5zaG93IHtcXHJcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHJpZ2h0OiAyMCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLXBsYXllci1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi52aXNpdC1wYWdlIHtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbmNlcnQtaWQtbnVtIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXVzZXJuYW1lICB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4ucmVtb3ZlLWNvbmNlcnQtYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNDMwMmI7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnlvdXItcmVjZW50LWNvbmNlcnRzLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG9wYWNpdHl7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29uY2VydC1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbjogLjVyZW07O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY29udGVudC1hcmVhLWlubmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLW1vYmlsZS1pY29ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZWZ0LW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByaW1hcnktYnRuLnJlbW92ZS1jb25jZXJ0LWJ0biB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZDogIzQyNTdiMjtcXHJcXG4gICAgLS1oZXJvLWJhY2tncm91bmQ6ICMzYjRjOWI7XFxyXFxuICAgIC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZDogIzNjY2ZjZjtcXHJcXG4gICAgLS1tYWluLWJhY2tncm91bmQ6ICNmNmY3ZmI7XFxyXFxuICAgIC0tZ29sZDogI2ZhY2QyMTtcXHJcXG4gICAgLS1kZWZhdWx0LXNoYWRvdzogMHB4IDEzcHggMjZweCAjMDAwMDAwMkY7XFxyXFxuICAgIC0tc3VjY2Vzcy1jb2xvcjogIzJlY2M3MTtcXHJcXG4gICAgLS1lcnJvci1jb2xvcjogI2U3NGMzYztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sYW5kaW5nLW5hdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5sYW5kaW5nLW5hdiBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaXRlLXRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIGEsIC5zaXRlLXRpdGxlIGEge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIGE6aG92ZXIsIC5uYXYtcmlnaHQgbGkgYTpob3ZlciwgLnNpdGUtdGl0bGUgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDE4OSwgMTk1LCAxOTksIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSBhID4gKiB7XFxyXFxuICAgIG1hcmdpbjogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1yaWdodCBsaSB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1tb2JpbGUtaWNvbnMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1vdmVybGF5IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdG9wOiA4JTtcXHJcXG4gICAgLypsZWZ0OiAyNiU7Ki9cXHJcXG4gICAgcmlnaHQ6IDIwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93bjpob3ZlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd24gcDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duIC5wcmltYXJ5LWJ0biB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItZmllbGQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLWZpZWxkOmludmFsaWQge1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS5mYS10aW1lcy5jbG9zZS1zZWFyY2gge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1pY29uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhlcm8tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlcm8tYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lci1sZWZ0IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGV4dC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5nZXQtc3RhcnRlZC1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZWFjaGVyLXBhcmVudC1saW5rcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50ZWFjaGVyLXBhcmVudC1saW5rcyBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jYXJvdXNlbC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsIHtcXHJcXG4gICAgaGVpZ2h0OiA3NSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jYXJvdXNlbCBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBmaWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtZGVzY3JpcHRpb24ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICAgIC8qIENTUyBjaGFuZ2UgaW4gSlMgKi9cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiBncmV5O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC8qIENoYW5nZSBmbGV4L25vbmUgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtY29udGFpbmVyID4gaSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50aGlyZC1wYXJ0eS1idXR0b25zIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnktYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnktYnRuIGltZyB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnktYnRuIHAge1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0ge1xcclxcblxcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gICAgcGFkZGluZzogLjc1cmVtIDJyZW0gLjc1cmVtIC4zcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgYm9yZGVyOiAycHggZ3JleSBzb2xpZDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jY2xvc2Utc2lnbi1pbiwgI2Nsb3NlLXNpZ24tdXAge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iaXJ0aGRheS1zZWxlY3RvciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZmllbGQgbGFiZWwge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgIFxcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjb2xvcjogI2MyYzZkNDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZCBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5zdWNjZXNzIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLmVycm9yIGlucHV0ICB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5lcnJvciBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufSBcXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5lcnJvci10ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLmVycm9yIC5lcnJvci10ZXh0IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZ2lzdGVyLWJ0biwgLmxvZ2luLWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZ2lzdGVyLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmM2ZDQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWJ0biBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxNSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGgxIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogLjUwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1hcmVhIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tYnV0dG9ucyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1idXR0b25zIC5zZWNvbmRhcnktYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIHAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDYyJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuc3VjY2VzcyBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5zdWNjZXNzIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5lcnJvciBpbnB1dCAge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLmVycm9yIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59IFxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5lcnJvci10ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG4gICAgLyp2aXNpYmlsaXR5OiBoaWRkZW47Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLmJpZy1sb2dpbi1idG4ge1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Jyb3dzZS1tb2RhbCB7XFxyXFxuICAgIC8qIENIQU5HRSBXSVRIIEpBVkFTQ0lQVCAqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5icm93c2UtbW9kYWwtYXJlYSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgXFxyXFxuICAgIC8qdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7Ki9cXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJyb3dzZS1tb2RhbC1hcmVhLnNob3cge1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5icm93c2UtaGVhZGVyIGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5icm93c2UtaGVhZGVyIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1jb21wb3NlcnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlciBoMSAge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXItY29tcG9zZXJzIHtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbS1jb21wb3Nlci1saW5rcyBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZXJvLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sYW5kaW5nLW5hdiB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2LWxlZnQge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmlnaHQtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICAgICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9iaWxlLXNlYXJjaC1pY29uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgICAgICBsZWZ0OiAyMCU7XFxyXFxuICAgICAgICB0b3A6IDcuNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJyb3dzZS1tb2RhbC1hcmVhIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xcclxcbiAgICBcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICAvKlxcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICovXFxyXFxuICAgICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaXRlLXRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xcclxcbiAgICAgICAgZmxleDogMTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmlnaHQtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYtcmlnaHQge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgICAgIC8qIHRvcDogOSU7ICovXFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDA7ICAgIFxcclxcbiAgICBcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGhpcmQtcGFydHktYnV0dG9ucyB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRoaXJkLXBhcnR5LWJ1dHRvbnMgLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuc2VsZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtZm9ybSBsYWJlbCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC4zcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtLWZpZWxkIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcmltYXJ5LWJ0bi5yZWdpc3Rlci1idG4sIC5wcmltYXJ5LWJ0bi5sb2dpbi1idG4ge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlYXJjaC1iYXItb3ZlcmxheSB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLXJlc3VsdC1kb3duIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJyb3dzZS1tb2RhbC1hcmVhIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2FwcC9zdGF0aWMvY3NzL2xhbmRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsd0JBQXdCO0lBQ3hCLHNCQUFzQjs7QUFFMUI7OztBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0NBQXdD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dEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsUUFBUTtJQUNaOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQ6ICM0MjU3YjI7XFxyXFxuICAgIC0taGVyby1iYWNrZ3JvdW5kOiAjM2I0YzliO1xcclxcbiAgICAtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQ6ICMzY2NmY2Y7XFxyXFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kOiAjZjZmN2ZiO1xcclxcbiAgICAtLWdvbGQ6ICNmYWNkMjE7XFxyXFxuICAgIC0tZGVmYXVsdC1zaGFkb3c6IDBweCAxM3B4IDI2cHggIzAwMDAwMDJGO1xcclxcbiAgICAtLXN1Y2Nlc3MtY29sb3I6ICMyZWNjNzE7XFxyXFxuICAgIC0tZXJyb3ItY29sb3I6ICNlNzRjM2M7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZGluZy1uYXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubGFuZGluZy1uYXYgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS10aXRsZSB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSBhLCAuc2l0ZS10aXRsZSBhIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSBhOmhvdmVyLCAubmF2LXJpZ2h0IGxpIGE6aG92ZXIsIC5zaXRlLXRpdGxlIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogcmdiYSgxODksIDE5NSwgMTk5LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYSA+ICoge1xcclxcbiAgICBtYXJnaW46IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcmlnaHQgbGkge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtbW9iaWxlLWljb25zIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItb3ZlcmxheSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRvcDogOCU7XFxyXFxuICAgIC8qbGVmdDogMjYlOyovXFxyXFxuICAgIHJpZ2h0OiAyMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd246aG92ZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biAucHJpbWFyeS1idG4ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtYmFyLWZpZWxkIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1maWVsZDppbnZhbGlkIHtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEuZmEtdGltZXMuY2xvc2Utc2VhcmNoIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtaWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5oZXJvLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZXJvLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXItbGVmdCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXRleHQtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uZ2V0LXN0YXJ0ZWQtYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhY2hlci1wYXJlbnQtbGlua3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhY2hlci1wYXJlbnQtbGlua3MgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jYXJvdXNlbCB7XFxyXFxuICAgIGhlaWdodDogNzUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgICAvKiBDU1MgY2hhbmdlIGluIEpTICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogZ3JleTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAvKiBDaGFuZ2UgZmxleC9ub25lICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWNvbnRhaW5lciA+IGkge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGhpcmQtcGFydHktYnV0dG9ucyB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biBwIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIHtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY29udGFpbmVyIHNlbGVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IC43NXJlbSAycmVtIC43NXJlbSAuM3JlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGJvcmRlcjogMnB4IGdyZXkgc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2Nsb3NlLXNpZ24taW4sICNjbG9zZS1zaWduLXVwIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlydGhkYXktc2VsZWN0b3Ige1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIGxhYmVsIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY29sb3I6ICNjMmM2ZDQ7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5zdWNjZXNzIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuc3VjY2VzcyBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5lcnJvciBpbnB1dCAge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5lcnJvciAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWdpc3Rlci1idG4sIC5sb2dpbi1idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWdpc3Rlci1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjNmQ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1idG4gYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBoMSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IC41MHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tYXJlYSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbnMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tYnV0dG9ucyAuc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZCBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQ6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyBwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiA2MiU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuc3VjY2VzcyBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuZXJyb3IgaW5wdXQgIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5lcnJvciBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufSBcXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxuICAgIC8qdmlzaWJpbGl0eTogaGlkZGVuOyovXFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5iaWctbG9naW4tYnRuIHtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNicm93c2UtbW9kYWwge1xcclxcbiAgICAvKiBDSEFOR0UgV0lUSCBKQVZBU0NJUFQgKi9cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgIFxcclxcbiAgICAvKnRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlOyovXFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5icm93c2UtbW9kYWwtYXJlYS5zaG93IHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYnJvd3NlLWhlYWRlciBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLWhlYWRlciB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5icm93c2UtY29tcG9zZXJzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXIgaDEgIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyLWNvbXBvc2VycyB7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5yYW5kb20tY29tcG9zZXItbGlua3MgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVyby1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGFuZGluZy1uYXYge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdi1sZWZ0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS10aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vYmlsZS1zZWFyY2gtaWNvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICB3aWR0aDogNzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICAgICAgbGVmdDogMjAlO1xcclxcbiAgICAgICAgdG9wOiA3LjUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5icm93c2UtbW9kYWwtYXJlYSB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcXHJcXG4gICAgXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgLypcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAqL1xcclxcbiAgICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS10aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcXHJcXG4gICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2LXJpZ2h0IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgICAgICAvKiB0b3A6IDklOyAqL1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBsZWZ0OiAwOyAgICBcXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRoaXJkLXBhcnR5LWJ1dHRvbnMge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aGlyZC1wYXJ0eS1idXR0b25zIC5zZWNvbmRhcnktYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnNlbGVjdC1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWxlY3QtY29udGFpbmVyIHNlbGVjdCB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWZvcm0gbGFiZWwge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAuM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9ybS1maWVsZCB7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJpbWFyeS1idG4ucmVnaXN0ZXItYnRuLCAucHJpbWFyeS1idG4ubG9naW4tYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtYmFyLW92ZXJsYXkge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlYXJjaC1yZXN1bHQtZG93biBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5icm93c2UtbW9kYWwtYXJlYSB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9