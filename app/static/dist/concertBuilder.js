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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/static/js-modules/main/concertBuilder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/static/css/concert-builder.css":
/*!********************************************!*\
  !*** ./app/static/css/concert-builder.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./concert-builder.css */ "./node_modules/css-loader/dist/cjs.js!./app/static/css/concert-builder.css");

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

/***/ "./app/static/img/JohannesBrahms.jpg":
/*!*******************************************!*\
  !*** ./app/static/img/JohannesBrahms.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ae28e733e94349229d5a2b937c66f909.jpg");

/***/ }),

/***/ "./app/static/js-modules/main/concertBuilder.js":
/*!******************************************************!*\
  !*** ./app/static/js-modules/main/concertBuilder.js ***!
  \******************************************************/
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
/* harmony import */ var _css_concert_builder_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../css/concert-builder.css */ "./app/static/css/concert-builder.css");
/* harmony import */ var _css_concert_builder_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_concert_builder_css__WEBPACK_IMPORTED_MODULE_9__);











let concertPieceArr = [];
let favoritesResults = [];
let dragStartIndex;
let number = 0;



function saveConcert() {
    let currentUser = JSON.parse(localStorage.getItem('user'));
    //console.log(currentUser);
    if (concertTitleHeader.textContent === '') {
        saveConcertBtn.classList.add('disabled');
        saveConcertBtn.textContent = 'Please add title.';
        window.setTimeout(() => {
            saveConcertBtn.classList.remove('disabled');
            saveConcertBtn.textContent = 'Save Concert';
        }, 1000);
        return false;
    } else if (concertPieceArr.length === 0) {
        saveConcertBtn.classList.add('disabled');
        saveConcertBtn.textContent = 'Please add pieces...';
        window.setTimeout(() => {
            saveConcertBtn.classList.remove('disabled');
            saveConcertBtn.textContent = 'Save Concert';
        }, 1000);
        return false;
    }

    let currentConcert = new Concert(concertTitleHeader.textContent);
    //console.log(currentConcert);
    concertPieceArr.forEach((piece) => {
        let thisPiece = new Piece(
            piece.querySelector('.composer-info > p:first-child').textContent,
            piece.querySelector('.piece-info > p:first-child').textContent
        );

        currentConcert.pieces.push(thisPiece);
    });
    //console.log(currentConcert.pieces);
    currentUser.concerts.push(currentConcert);
    //console.log(currentUser.concerts);
    localStorage.setItem('user', JSON.stringify(currentUser));
    console.log(localStorage.getItem('user'));
    saveConcertBtn.textContent = 'Concert Saved!!';
    window.setTimeout(() => {
        saveConcertBtn.textContent = 'Save Concert';
    }, 1000);
}

function dragListeners() {
    const pieceDragBars = document.querySelectorAll('.piece-drag-bars');
    const dragBoxes = document.querySelectorAll('.concert');
    console.log(pieceDragBars);
    console.log(dragBoxes);
    pieceDragBars.forEach((drag) => {
        drag.addEventListener('dragstart', dragStart);
    });

    dragBoxes.forEach((box) => {
        box.addEventListener('dragover', dragOver);
        box.addEventListener('drop', dragDrop);
        box.addEventListener('dragenter', dragEnter);
        box.addEventListener('dragleave', dragLeave);
    });
}

window.addEventListener('DOMContentLoaded', _modules_app__WEBPACK_IMPORTED_MODULE_0__["App"].initBase);

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].addToConcert.forEach((button) => {
    button.addEventListener('click', _modules_app__WEBPACK_IMPORTED_MODULE_0__["App"].addPieceToConcertArr);
});

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].searchFavorites.addEventListener('keyup', () => {
    _modules_ui__WEBPACK_IMPORTED_MODULE_5__["UI"].clearFaveList();
    _modules_requests__WEBPACK_IMPORTED_MODULE_4__["Requests"].favoritesSearch();
});

//showAddIntermission
_modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].concertBuilderArea.addEventListener('mouseover', _modules_ui__WEBPACK_IMPORTED_MODULE_5__["UI"].showIntermission);

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].concertTitleBtn.addEventListener('click', _modules_ui__WEBPACK_IMPORTED_MODULE_5__["UI"].saveConcertTitle);
_modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].changeTitleBtn.addEventListener('click', _modules_ui__WEBPACK_IMPORTED_MODULE_5__["UI"].removeConcertTitle);
window.addEventListener(
    'DOMContentLoaded',
    _modules_ui__WEBPACK_IMPORTED_MODULE_5__["UI"].updateConcertDuration(_modules_ui__WEBPACK_IMPORTED_MODULE_5__["UI"].getConcertDuration(concertPieceArr))
);

//TODO FIX THIS
_modules_UISelectors__WEBPACK_IMPORTED_MODULE_6__["UISelectors"].saveConcertBtn.addEventListener('click', saveConcert);


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

/***/ "./node_modules/css-loader/dist/cjs.js!./app/static/css/concert-builder.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/static/css/concert-builder.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_JohannesBrahms_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/JohannesBrahms.jpg */ "./app/static/img/JohannesBrahms.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_JohannesBrahms_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.main-container {\r\n    flex: 1;\r\n    width: 100%;\r\n    background-color: lightpink;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.left-container {\r\n    background-color: var(--hero-background);\r\n    width: 40%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.right-container {\r\n    height: 100%;\r\n    flex: 1;\r\n    background-color: lightseagreen;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.left-container h1, .right-container h1 {\r\n    color: #fff;\r\n}\r\n\r\n.left-search-area {\r\n    width: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.right-search-area-container {\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n.right-search-area {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.left-search-area input {\r\n    flex: 1;\r\n    line-height: 2rem;\r\n    \r\n    border-radius: 5px;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.left-search-area i {\r\n    color: #000;\r\n    background: #fff;\r\n    padding: .58rem;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.concert-title-input {\r\n    width: 50%;\r\n    line-height: 2rem;\r\n    border-radius: 5px;\r\n    border: none;\r\n    outline: none;\r\n    opacity: 1;\r\n}\r\n\r\n.concert-title-btn {\r\n    width: 25%;\r\n    opacity: 1;\r\n}\r\n\r\n.right-search-area i {\r\n    color: #000;\r\n    padding: 9px;\r\n    background-color: #fff;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n.right-search-area .concert-title {\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.right-search-area.show .concert-title {\r\n    opacity: 1;\r\n}\r\n\r\n.right-search-area.show .concert-title-input{\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.right-search-area.show .concert-title-btn {\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.change-title-btn {\r\n    position: absolute;\r\n    width: 25%;\r\n    right: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.right-search-area.show .change-title-btn {\r\n    transition: visibility .3s ease;\r\n    visibility: visible\r\n    \r\n}\r\n\r\n\r\n\r\n.builder-piece-list {\r\n    list-style-type: none;\r\n    color: #fff;\r\n    padding: 0;\r\n    width: 80%;\r\n    overflow-y: scroll;\r\n    height: 0px;\r\n    flex: 3 1 auto;\r\n}\r\n\r\n\r\n.builder-piece-list li {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    height: 100px;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    margin: 10px 0;\r\n}\r\n\r\n.piece-info-left, .piece-info-right {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 50%;\r\n}\r\n\r\n.piece-info-left p:last-of-type {\r\n    font-size: .75rem;\r\n    text-align: center;\r\n}\r\n\r\n.data-composer-info {\r\n    display: none;\r\n}\r\n\r\n.piece-info p {\r\n    font-size: .75rem;\r\n}\r\n\r\n.piece-info {\r\n    /*width: 25%;\r\n    */\r\n}\r\n\r\n.concert-title.concert-title-mobile {\r\n    display: none;\r\n}\r\n\r\n.concert-builder-area {\r\n    background-color: #fff;\r\n    color: #000;\r\n    width: 80%;\r\n    height: 0px;\r\n    box-shadow: var(--default-shadow);\r\n    border-radius: 5px;\r\n    flex: 3 1 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.concert-builder-text-area {\r\n    width: 80%;\r\n    flex: 1;\r\n    background-color: lightblue;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.composer-info {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.concert {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    margin: auto;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    margin: 10px 0;\r\n    box-shadow: var(--default-shadow);\r\n    position: relative;\r\n}\r\n\r\n.info-inner-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 70%;\r\n    align-items: center;\r\n}\r\n\r\n.concert.over {\r\n    background-color: #eaeaea;\r\n}\r\n\r\n.concert .add-intermission {\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 200px;\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -100px;\r\n    opacity: 0;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.concert.show .add-intermission {\r\n    display: block;\r\n    background-color: grey;\r\n    position: absolute;\r\n    transition: all .5s ease;\r\n    bottom: -20px;\r\n    opacity: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-intermission p {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    font-size: .85rem;\r\n    color: #fff;\r\n}\r\n\r\n.concert.intermission {\r\n    background: lightgrey;\r\n   \r\n    height: 30px;\r\n}\r\n\r\n.concert i {\r\n    cursor: pointer;\r\n    margin: 0 1rem;\r\n}\r\n\r\n.composer-img {\r\n    height: 100px;\r\n    width: 100px;\r\n    border-radius: 50%;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n\r\n    position: static;\r\n}\r\n\r\n.composer-info > p:first-child {\r\n    font-weight: bold;\r\n}\r\n\r\n.primary-btn.save-concert {\r\n    transition: background-color .5s ease;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.primary-btn.save-concert.disabled {\r\n    \r\n    background-color:  #c4302b;\r\n    pointer-events: none;\r\n}\r\n\r\n/* TODO:\r\n\r\nFIX CONCERT BUILDER AREA ON MOBILE AND TABLET. ITS FUCKED\r\n\r\n*/\r\n\r\n@media(max-width: 768px) {\r\n\r\n    .main-container {\r\n        flex-direction: column;\r\n        justify-content: normal;\r\n        align-items: stretch;\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .left-container {\r\n        \r\n        width: 100%;\r\n    }\r\n\r\n    .left-container h1 {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .right-container {\r\n        flex: none;\r\n        height: 100vh;\r\n\r\n    }\r\n\r\n    .builder-piece-list {\r\n        height: auto;\r\n    }\r\n\r\n    .piece-info-left p {\r\n        font-size: .7rem;\r\n    }\r\n\r\n    .piece-info-left p:last-of-type {\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .concert-builder-text-area {\r\n        margin-bottom: 3rem;\r\n    }\r\n\r\n    .concert .composer-img {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n\r\n    body {\r\n        height: auto;\r\n        overflow: auto;\r\n    }\r\n    \r\n\r\n    .builder-piece-list {\r\n        height: auto;\r\n    }\r\n\r\n    .left-container {\r\n        height: 100vh;\r\n    }\r\n\r\n    .primary-btn.change-title-btn {\r\n        width: 50%;\r\n    }\r\n    .concert-title-input {\r\n        width: 25%;\r\n    }\r\n\r\n    .concert-builder-text-area {\r\n        margin-top: 2rem;\r\n    }\r\n\r\n    .concert-title-btn {\r\n        width: 50%;\r\n    }\r\n\r\n    .info-inner-container {\r\n        width: 50%;\r\n        flex-direction: column;\r\n    }\r\n    .concert-title.concert-title-mobile {\r\n        display: block;\r\n    }\r\n\r\n    .composer-info, .piece-info {\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .composer-info p, .piece-info p {\r\n        margin: 0;\r\n    }\r\n\r\n    .composer-info p {\r\n        font-size: .75rem;\r\n    }\r\n\r\n    .piece-info p {\r\n        font-size: .5rem;\r\n        text-align: center;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://app/static/css/concert-builder.css"],"names":[],"mappings":"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","sourcesContent":["\r\n.main-container {\r\n    flex: 1;\r\n    width: 100%;\r\n    background-color: lightpink;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.left-container {\r\n    background-color: var(--hero-background);\r\n    width: 40%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.right-container {\r\n    height: 100%;\r\n    flex: 1;\r\n    background-color: lightseagreen;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.left-container h1, .right-container h1 {\r\n    color: #fff;\r\n}\r\n\r\n.left-search-area {\r\n    width: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.right-search-area-container {\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n.right-search-area {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.left-search-area input {\r\n    flex: 1;\r\n    line-height: 2rem;\r\n    \r\n    border-radius: 5px;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.left-search-area i {\r\n    color: #000;\r\n    background: #fff;\r\n    padding: .58rem;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.concert-title-input {\r\n    width: 50%;\r\n    line-height: 2rem;\r\n    border-radius: 5px;\r\n    border: none;\r\n    outline: none;\r\n    opacity: 1;\r\n}\r\n\r\n.concert-title-btn {\r\n    width: 25%;\r\n    opacity: 1;\r\n}\r\n\r\n.right-search-area i {\r\n    color: #000;\r\n    padding: 9px;\r\n    background-color: #fff;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n.right-search-area .concert-title {\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.right-search-area.show .concert-title {\r\n    opacity: 1;\r\n}\r\n\r\n.right-search-area.show .concert-title-input{\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.right-search-area.show .concert-title-btn {\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.change-title-btn {\r\n    position: absolute;\r\n    width: 25%;\r\n    right: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.right-search-area.show .change-title-btn {\r\n    transition: visibility .3s ease;\r\n    visibility: visible\r\n    \r\n}\r\n\r\n\r\n\r\n.builder-piece-list {\r\n    list-style-type: none;\r\n    color: #fff;\r\n    padding: 0;\r\n    width: 80%;\r\n    overflow-y: scroll;\r\n    height: 0px;\r\n    flex: 3 1 auto;\r\n}\r\n\r\n\r\n.builder-piece-list li {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    height: 100px;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    margin: 10px 0;\r\n}\r\n\r\n.piece-info-left, .piece-info-right {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 50%;\r\n}\r\n\r\n.piece-info-left p:last-of-type {\r\n    font-size: .75rem;\r\n    text-align: center;\r\n}\r\n\r\n.data-composer-info {\r\n    display: none;\r\n}\r\n\r\n.piece-info p {\r\n    font-size: .75rem;\r\n}\r\n\r\n.piece-info {\r\n    /*width: 25%;\r\n    */\r\n}\r\n\r\n.concert-title.concert-title-mobile {\r\n    display: none;\r\n}\r\n\r\n.concert-builder-area {\r\n    background-color: #fff;\r\n    color: #000;\r\n    width: 80%;\r\n    height: 0px;\r\n    box-shadow: var(--default-shadow);\r\n    border-radius: 5px;\r\n    flex: 3 1 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.concert-builder-text-area {\r\n    width: 80%;\r\n    flex: 1;\r\n    background-color: lightblue;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.composer-info {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.concert {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    margin: auto;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    margin: 10px 0;\r\n    box-shadow: var(--default-shadow);\r\n    position: relative;\r\n}\r\n\r\n.info-inner-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 70%;\r\n    align-items: center;\r\n}\r\n\r\n.concert.over {\r\n    background-color: #eaeaea;\r\n}\r\n\r\n.concert .add-intermission {\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 200px;\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -100px;\r\n    opacity: 0;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.concert.show .add-intermission {\r\n    display: block;\r\n    background-color: grey;\r\n    position: absolute;\r\n    transition: all .5s ease;\r\n    bottom: -20px;\r\n    opacity: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-intermission p {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    font-size: .85rem;\r\n    color: #fff;\r\n}\r\n\r\n.concert.intermission {\r\n    background: lightgrey;\r\n   \r\n    height: 30px;\r\n}\r\n\r\n.concert i {\r\n    cursor: pointer;\r\n    margin: 0 1rem;\r\n}\r\n\r\n.composer-img {\r\n    height: 100px;\r\n    width: 100px;\r\n    border-radius: 50%;\r\n    background-image: url('../img/JohannesBrahms.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n\r\n    position: static;\r\n}\r\n\r\n.composer-info > p:first-child {\r\n    font-weight: bold;\r\n}\r\n\r\n.primary-btn.save-concert {\r\n    transition: background-color .5s ease;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.primary-btn.save-concert.disabled {\r\n    \r\n    background-color:  #c4302b;\r\n    pointer-events: none;\r\n}\r\n\r\n/* TODO:\r\n\r\nFIX CONCERT BUILDER AREA ON MOBILE AND TABLET. ITS FUCKED\r\n\r\n*/\r\n\r\n@media(max-width: 768px) {\r\n\r\n    .main-container {\r\n        flex-direction: column;\r\n        justify-content: normal;\r\n        align-items: stretch;\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .left-container {\r\n        \r\n        width: 100%;\r\n    }\r\n\r\n    .left-container h1 {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .right-container {\r\n        flex: none;\r\n        height: 100vh;\r\n\r\n    }\r\n\r\n    .builder-piece-list {\r\n        height: auto;\r\n    }\r\n\r\n    .piece-info-left p {\r\n        font-size: .7rem;\r\n    }\r\n\r\n    .piece-info-left p:last-of-type {\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .concert-builder-text-area {\r\n        margin-bottom: 3rem;\r\n    }\r\n\r\n    .concert .composer-img {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n\r\n    body {\r\n        height: auto;\r\n        overflow: auto;\r\n    }\r\n    \r\n\r\n    .builder-piece-list {\r\n        height: auto;\r\n    }\r\n\r\n    .left-container {\r\n        height: 100vh;\r\n    }\r\n\r\n    .primary-btn.change-title-btn {\r\n        width: 50%;\r\n    }\r\n    .concert-title-input {\r\n        width: 25%;\r\n    }\r\n\r\n    .concert-builder-text-area {\r\n        margin-top: 2rem;\r\n    }\r\n\r\n    .concert-title-btn {\r\n        width: 50%;\r\n    }\r\n\r\n    .info-inner-container {\r\n        width: 50%;\r\n        flex-direction: column;\r\n    }\r\n    .concert-title.concert-title-mobile {\r\n        display: block;\r\n    }\r\n\r\n    .composer-info, .piece-info {\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .composer-info p, .piece-info p {\r\n        margin: 0;\r\n    }\r\n\r\n    .composer-info p {\r\n        font-size: .75rem;\r\n    }\r\n\r\n    .piece-info p {\r\n        font-size: .5rem;\r\n        text-align: center;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvY29uY2VydC1idWlsZGVyLmNzcz9jZWEzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvY3NzL2hvbWVwYWdlLmNzcz9kMWVmIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvY3NzL2xhbmRpbmcuY3NzP2ZlNTIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9pbWcvSm9oYW5uZXNCcmFobXMuanBnIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tYWluL2NvbmNlcnRCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL1VJU2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9odHRwLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9zZXNzaW9uT2JqLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvY29uY2VydC1idWlsZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2Nzcy9ob21lcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvbGFuZGluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyx1SkFBc0U7O0FBRXhHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztB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VSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sUUFBUSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sOENBQThDLGdCQUFnQixvQkFB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LGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLFNBQVMsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsWUFBWSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFL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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJjb25jZXJ0QnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21haW4vY29uY2VydEJ1aWxkZXIuanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29uY2VydC1idWlsZGVyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWVwYWdlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xhbmRpbmcuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWUyOGU3MzNlOTQzNDkyMjlkNWEyYjkzN2M2NmY5MDkuanBnXCI7IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi4vbW9kdWxlcy9hcHAnO1xyXG5pbXBvcnQgeyBGb3JtcyB9IGZyb20gJy4uL21vZHVsZXMvZm9ybXMnO1xyXG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnLi4vbW9kdWxlcy9odHRwJztcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi4vbW9kdWxlcy9uYXYnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0cyB9IGZyb20gJy4uL21vZHVsZXMvcmVxdWVzdHMnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4uL21vZHVsZXMvdWknO1xyXG5pbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4uL21vZHVsZXMvVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgXCIuLi8uLi9jc3MvbGFuZGluZy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vY3NzL2hvbWVwYWdlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9jc3MvY29uY2VydC1idWlsZGVyLmNzc1wiO1xyXG5cclxubGV0IGNvbmNlcnRQaWVjZUFyciA9IFtdO1xyXG5sZXQgZmF2b3JpdGVzUmVzdWx0cyA9IFtdO1xyXG5sZXQgZHJhZ1N0YXJ0SW5kZXg7XHJcbmxldCBudW1iZXIgPSAwO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzYXZlQ29uY2VydCgpIHtcclxuICAgIGxldCBjdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuICAgIGlmIChjb25jZXJ0VGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPT09ICcnKSB7XHJcbiAgICAgICAgc2F2ZUNvbmNlcnRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgICAgICBzYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdQbGVhc2UgYWRkIHRpdGxlLic7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlQ29uY2VydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICBzYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdTYXZlIENvbmNlcnQnO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoY29uY2VydFBpZWNlQXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHNhdmVDb25jZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgc2F2ZUNvbmNlcnRCdG4udGV4dENvbnRlbnQgPSAnUGxlYXNlIGFkZCBwaWVjZXMuLi4nO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2F2ZUNvbmNlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgc2F2ZUNvbmNlcnRCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSBDb25jZXJ0JztcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGN1cnJlbnRDb25jZXJ0ID0gbmV3IENvbmNlcnQoY29uY2VydFRpdGxlSGVhZGVyLnRleHRDb250ZW50KTtcclxuICAgIC8vY29uc29sZS5sb2coY3VycmVudENvbmNlcnQpO1xyXG4gICAgY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgICAgbGV0IHRoaXNQaWVjZSA9IG5ldyBQaWVjZShcclxuICAgICAgICAgICAgcGllY2UucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyLWluZm8gPiBwOmZpcnN0LWNoaWxkJykudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIHBpZWNlLnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS1pbmZvID4gcDpmaXJzdC1jaGlsZCcpLnRleHRDb250ZW50XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY3VycmVudENvbmNlcnQucGllY2VzLnB1c2godGhpc1BpZWNlKTtcclxuICAgIH0pO1xyXG4gICAgLy9jb25zb2xlLmxvZyhjdXJyZW50Q29uY2VydC5waWVjZXMpO1xyXG4gICAgY3VycmVudFVzZXIuY29uY2VydHMucHVzaChjdXJyZW50Q29uY2VydCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRVc2VyLmNvbmNlcnRzKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoY3VycmVudFVzZXIpKTtcclxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgc2F2ZUNvbmNlcnRCdG4udGV4dENvbnRlbnQgPSAnQ29uY2VydCBTYXZlZCEhJztcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdTYXZlIENvbmNlcnQnO1xyXG4gICAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYWdMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBwaWVjZURyYWdCYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlLWRyYWctYmFycycpO1xyXG4gICAgY29uc3QgZHJhZ0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbmNlcnQnKTtcclxuICAgIGNvbnNvbGUubG9nKHBpZWNlRHJhZ0JhcnMpO1xyXG4gICAgY29uc29sZS5sb2coZHJhZ0JveGVzKTtcclxuICAgIHBpZWNlRHJhZ0JhcnMuZm9yRWFjaCgoZHJhZykgPT4ge1xyXG4gICAgICAgIGRyYWcuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRyYWdCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XHJcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnRHJvcCk7XHJcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XHJcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBBcHAuaW5pdEJhc2UpO1xyXG5cclxuVUlTZWxlY3RvcnMuYWRkVG9Db25jZXJ0LmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLmFkZFBpZWNlVG9Db25jZXJ0QXJyKTtcclxufSk7XHJcblxyXG5VSVNlbGVjdG9ycy5zZWFyY2hGYXZvcml0ZXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICBVSS5jbGVhckZhdmVMaXN0KCk7XHJcbiAgICBSZXF1ZXN0cy5mYXZvcml0ZXNTZWFyY2goKTtcclxufSk7XHJcblxyXG4vL3Nob3dBZGRJbnRlcm1pc3Npb25cclxuVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIFVJLnNob3dJbnRlcm1pc3Npb24pO1xyXG5cclxuVUlTZWxlY3RvcnMuY29uY2VydFRpdGxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2F2ZUNvbmNlcnRUaXRsZSk7XHJcblVJU2VsZWN0b3JzLmNoYW5nZVRpdGxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkucmVtb3ZlQ29uY2VydFRpdGxlKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnRE9NQ29udGVudExvYWRlZCcsXHJcbiAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKGNvbmNlcnRQaWVjZUFycikpXHJcbik7XHJcblxyXG4vL1RPRE8gRklYIFRISVNcclxuVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlQ29uY2VydCk7XHJcbiIsImNsYXNzIFVpU2VsZWN0b3JzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2l0ZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtdGl0bGUnKTtcclxuICAgIHRoaXMubG9nSW5OYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tbmF2Jyk7XHJcbiAgICB0aGlzLnNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWJ0bicpO1xyXG5cclxuICAgIHRoaXMuc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xyXG4gICAgdGhpcy5vcGVuQ29uY2VydEJ1aWxkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlJyk7XHJcblxyXG4gICAgdGhpcy5vcGVuTW9iaWxlU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tbW9iaWxlLXNlYXJjaCcpO1xyXG4gICAgdGhpcy5vcGVuTW9iaWxlQnJvd3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tbW9iaWxlLWJyb3dzZScpO1xyXG4gICAgdGhpcy5yaWdodE5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1uYXYtY29udGFpbmVyJyk7XHJcblxyXG4gICAgdGhpcy5nZXRTdGFydGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1zdGFydGVkLWJ0bicpO1xyXG4gICAgLy9Ccm93c2UgTW9kYWxcclxuICAgIHRoaXMuYnJvd3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jyb3dzZScpO1xyXG4gICAgdGhpcy5icm93c2VNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicm93c2UtbW9kYWwnKTtcclxuICAgIHRoaXMuYnJvd3NlTW9kYWxBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jyb3dzZS1tb2RhbC1hcmVhJyk7XHJcbiAgICB0aGlzLmNsb3NlQnJvd3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWJyb3dzZScpO1xyXG4gICAgdGhpcy5icm93c2VDb21wb3NlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3NlLWNvbXBvc2VycycpO1xyXG5cclxuICAgIC8vRHluYW1pYyBTZWFyY2ggUmVzdWx0IEVsZW1lbnRzXHJcbiAgICB0aGlzLnNlYXJjaEJhck92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhci1vdmVybGF5Jyk7XHJcbiAgICB0aGlzLmNsb3NlU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXNlYXJjaCcpO1xyXG4gICAgdGhpcy5zZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyLWZpZWxkJyk7XHJcbiAgICB0aGlzLnNlYXJjaEJhclJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJhci1yZXN1bHRzJyk7XHJcblxyXG4gICAgLy9Mb2dpbiBhbmQgU2lnbiBVcCBFbGVtZW50c1xyXG4gICAgdGhpcy5sb2dJbk9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tbmF2Jyk7XHJcbiAgICB0aGlzLnNpZ25VcE9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi11cC1idG4nKTtcclxuICAgIHRoaXMuc2lnblVwTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi11cC1tb2RhbCcpO1xyXG4gICAgdGhpcy5zaWduSW5Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLWluLW1vZGFsJyk7XHJcbiAgICB0aGlzLmNsb3NlU2lnblVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXNpZ24tdXAnKTtcclxuICAgIHRoaXMuY2xvc2VTaWduSW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2lnbi1pbicpO1xyXG4gICAgdGhpcy5sb2dnZWRJbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dnZWQtaW4nKTtcclxuICAgIHRoaXMuZHJvcERvd25NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duLW1lbnUnKTtcclxuICAgIHRoaXMucmVnaXN0ZXJVc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLXVzZXItYnRuJyk7XHJcbiAgICB0aGlzLmxvZ0luVXNlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi11c2VyLWJ0bicpO1xyXG5cclxuICAgIC8vUmVnaXN0cmF0aW9uIFZhbGlkYXRpb25cclxuXHJcbiAgICB0aGlzLnJlZ2lzdHJhdGlvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi11cC1mb3JtJyk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItdXNlcm5hbWUnKTtcclxuICAgIHRoaXMucmVnaXN0ZXJFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1lbWFpbCcpO1xyXG4gICAgdGhpcy5yZWdpc3RlclBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLXBhc3N3b3JkJyk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUGFzc3dvcmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLXBhc3N3b3JkMicpO1xyXG5cclxuICAgIHRoaXMubG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4tZm9ybScpO1xyXG4gICAgdGhpcy5sb2dpblVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXVzZXJuYW1lJyk7XHJcbiAgICB0aGlzLmxvZ2luUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tcGFzc3dvcmQnKTtcclxuXHJcbiAgICAvL0NPTVBPU0VSXHJcbiAgICB0aGlzLnBpZWNlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waWVjZS10aXRsZScpO1xyXG4gICAgdGhpcy5waWVjZVJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllY2UtcmVzdWx0cycpO1xyXG4gICAgdGhpcy5waWVjZURldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllY2UtZGV0YWlscycpO1xyXG4gICAgdGhpcy5jb21wb3NlcldyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcG9zZXItd3JhcCcpO1xyXG4gICAgdGhpcy5zdWJtaXRDb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1jb21tZW50Jyk7XHJcbiAgICB0aGlzLmFkZFBpZWNlVG9GYXZvcml0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgJ2FkZC1waWVjZS10by1mYXZvcml0ZXMnXHJcbiAgICApO1xyXG4gICAgdGhpcy5jcmVhdGVDb25jZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1jb25jZXJ0Jyk7XHJcblxyXG4gICAgLy9DT05DRVJUIEJVSUxERVJcclxuICAgIHRoaXMuYWRkVG9Db25jZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC10by1jb25jZXJ0Jyk7XHJcbiAgICB0aGlzLmRlbGV0ZVBpZWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVsZXRlLXBpZWNlJyk7XHJcblxyXG4gICAgdGhpcy5jb25jZXJ0QnVpbGRlckFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC1idWlsZGVyLWFyZWEnKTtcclxuICAgIHRoaXMuY29uY2VydE1pbnV0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC1taW51dGVzJyk7XHJcbiAgICB0aGlzLmNvbmNlcnRDb25jbHVzaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtY29uY2x1c2lvbicpO1xyXG5cclxuICAgIHRoaXMuc2VhcmNoRmF2b3JpdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1mYXZvcml0ZXMnKTtcclxuICAgIHRoaXMuZmF2b3JpdGVzU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAnZmF2b3JpdGVzLXNlYXJjaC1yZXN1bHRzJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuZGVsZXRlSW50ZXJtaXNzaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1pbnRlcm1pc3Npb24nKTtcclxuICAgIHRoaXMuY29uY2VydFRpdGxlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtdGl0bGUtYnRuJyk7XHJcbiAgICB0aGlzLnJpZ2h0U2VhcmNoQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1zZWFyY2gtYXJlYScpO1xyXG4gICAgdGhpcy5jb25jZXJ0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LXRpdGxlLWlucHV0Jyk7XHJcbiAgICB0aGlzLmNoYW5nZVRpdGxlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZS10aXRsZS1idG4nKTtcclxuICAgIHRoaXMuY29uY2VydFRpdGxlSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtdGl0bGUtaGVhZGVyJyk7XHJcbiAgICB0aGlzLnNhdmVDb25jZXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtY29uY2VydC1idG4nKTtcclxuICAgIC8vZml4IHRoaXMuXHJcbiAgICBpZiAodGhpcy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbEZhdm9yaXRlc1Jlc3VsdHMgPSBbLi4udGhpcy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLmNoaWxkcmVuXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9IT01QQUdFXHJcbiAgICB0aGlzLnNob3dHb2xkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdmVyLWdvbGQnKTtcclxuICAgIC8vY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtcmVzdWx0Jyk7XHJcbiAgICB0aGlzLnZpZXdNb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXctbW9yZS1idG4nKTtcclxuICAgIHRoaXMubWFpbkNvbnRlbnRJbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRlbnQtYXJlYS1pbm5lcicpO1xyXG4gICAgdGhpcy5vcGVuUHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuLXByb2ZpbGUnKTtcclxuICAgIHRoaXMub3BlbkZhdm9yaXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuLWZhdm9yaXRlcycpO1xyXG4gICAgdGhpcy5vcGVuQ29uY2VydHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1jb25jZXJ0cycpO1xyXG4gICAgdGhpcy5yZXR1cm5Ib21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldHVybi1ob21lJyk7XHJcblxyXG4gICAgLy9GYXZvcml0ZXMgb24gSG9tZSBQYWdlXHJcbiAgICB0aGlzLmhvbWVTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtc2VhcmNoLXJlc3VsdHMnKTtcclxuICAgIC8vRmF2b3JpdGVzIFBhZ2VcclxuICAgIHRoaXMuZnVsbEZhdm9yaXRlc0dyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbC1mYXZvcml0ZXMtZ3JpZCcpO1xyXG5cclxuICAgIC8vQ29uY2VydHMgb24gSG9tZSBQYWdlXHJcbiAgICB0aGlzLnlvdXJDb25jZXJ0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAneW91ci1jb25jZXJ0cy1jb250YWluZXInXHJcbiAgICApO1xyXG5cclxuICAgIC8vQ29uY2VydHMgb24gQ29uY2VydHMgUGFnZVxyXG4gICAgdGhpcy5mdWxsQ29uY2VydHNHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGwtY29uY2VydHMtZ3JpZCcpO1xyXG5cclxuICAgIGlmICh0aGlzLm9wZW5Qcm9maWxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5vcGVuTGlua3MgPSBbdGhpcy5vcGVuUHJvZmlsZSwgdGhpcy5vcGVuRmF2b3JpdGVzLCB0aGlzLm9wZW5Db25jZXJ0cywgdGhpcy5yZXR1cm5Ib21lXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9wZW5Ccm93c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1icm93c2UnKTtcclxuXHJcbiAgICB0aGlzLnBpZWNlTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGllY2UtbmFtZScpO1xyXG4gICAgdGhpcy5jcmVhdGVDb25jZXJ0QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICdjcmVhdGUtY29uY2VydC1idG4nXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZHJvcERvd25Zb3VyQ29uY2VydHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgJ2Ryb3Bkb3duLXlvdXItY29uY2VydHMnXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29tcG9zZXJMZXR0ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgJ2NvbXBvc2VyLWxldHRlci1jb250YWluZXInXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZXN1bHRzQ29sdW1uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtY29sdW1uJyk7XHJcbiAgICB0aGlzLmNvbXBvc2VyUmVzdWx0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb3Nlci1yZXN1bHQtbGlzdCcpO1xyXG4gICAgdGhpcy51c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdXNlcm5hbWUnKTtcclxuICAgIGlmICh0aGlzLnVzZXIgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy51c2VyID0gdGhpcy51c2VyLnRleHRDb250ZW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0ZST00gSU5ERVhcclxuICAgIHRoaXMuY29tcG9zZXJMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb3Nlci1yZXN1bHRzJyk7XHJcbiAgICB0aGlzLnNlYXJjaEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1maWVsZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVJU2VsZWN0b3JzID0gbmV3IFVpU2VsZWN0b3JzKCk7IiwiaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpJztcclxuaW1wb3J0IHsgSFRUUCB9IGZyb20gJy4vaHR0cCc7XHJcbmltcG9ydCB7IFVzZXIsIENvbmNlcnQsIFBpZWNlIH0gZnJvbSAnLi9zZXNzaW9uT2JqJztcclxuaW1wb3J0IHsgRm9ybXMgfSBmcm9tICcuL2Zvcm1zJztcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi9uYXYnO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcclxuaW1wb3J0IHsgUmVxdWVzdHMgfSBmcm9tICcuL3JlcXVlc3RzJztcclxuXHJcbmNsYXNzIEFQUCB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZ2VuZXJhdGVSYW5kb21OdW1iZXIobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgfVxyXG5cclxuICBpbml0QmFzZSgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIklOSVQgQkFTRVwiKTtcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnNob3dTZWFyY2gpO1xyXG4gICAgVUlTZWxlY3RvcnMub3Blbk1vYmlsZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnNob3dTZWFyY2gpO1xyXG4gICAgVUlTZWxlY3RvcnMuY2xvc2VTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jbG9zZVNlYXJjaEZpZWxkKTtcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICBVSS5jbGVhckxpc3QoKTtcclxuICAgICAgUmVxdWVzdHMuZ2V0Q29tcG9zZXJSZXN1bHRzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMub3Blbk1vYmlsZUJyb3dzZSkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5vcGVuTW9iaWxlQnJvd3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd0Jyb3dzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgVUlTZWxlY3RvcnMuYnJvd3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd0Jyb3dzZSk7XHJcbiAgICBVSVNlbGVjdG9ycy5jbG9zZUJyb3dzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgVUlTZWxlY3RvcnMuYnJvd3NlTW9kYWxBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgVUlTZWxlY3RvcnMuYnJvd3NlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5sb2dJbk9wZW4gJiYgVUlTZWxlY3RvcnMuc2lnblVwT3Blbikge1xyXG4gICAgICBVSVNlbGVjdG9ycy5sb2dJbk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuTW9kYWwpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaWduVXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3Blbk1vZGFsKTtcclxuICAgICAgVUlTZWxlY3RvcnMuY2xvc2VTaWduVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jbG9zZU1vZGFsKTtcclxuICAgICAgVUlTZWxlY3RvcnMuY2xvc2VTaWduSW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jbG9zZU1vZGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMubG9nZ2VkSW4pIHtcclxuICAgICAgVUlTZWxlY3RvcnMubG9nZ2VkSW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zaG93RHJvcERvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5yZWdpc3RyYXRpb25Gb3JtKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnJlZ2lzdHJhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBmb3JtSW5wdXRzID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgJy5mb3JtLWZpZWxkIGlucHV0J1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghRm9ybXMuY2hlY2tSZXF1aXJlZChbLi4uZm9ybUlucHV0c10pKSB7XHJcbiAgICAgICAgICBGb3Jtcy5jaGVja0xlbmd0aChVSVNlbGVjdG9ycy5yZWdpc3RlclVzZXJuYW1lLCA2LCAyMCk7XHJcbiAgICAgICAgICBGb3Jtcy5jaGVja0xlbmd0aChVSVNlbGVjdG9ycy5yZWdpc3RlclBhc3N3b3JkLCA2LCAyMCk7XHJcbiAgICAgICAgICBGb3Jtcy5jaGVja0VtYWlsKFVJU2VsZWN0b3JzLnJlZ2lzdGVyRW1haWwpO1xyXG4gICAgICAgICAgRm9ybXMuY2hlY2tQYXNzd29yZHNNYXRjaChcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMucmVnaXN0ZXJQYXNzd29yZCxcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMucmVnaXN0ZXJQYXNzd29yZDJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoRm9ybXMuY2hlY2tBbGxWYWxpZChbLi4uZm9ybUlucHV0c10pKSB7XHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLnJlZ2lzdHJhdGlvbkZvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMubG9nSW5Gb3JtKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhRm9ybXMuY2hlY2tSZXF1aXJlZChbXHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLmxvZ2luVXNlcm5hbWUsXHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLmxvZ2luUGFzc3dvcmQsXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbGV0IGxvZ2luRGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFVJU2VsZWN0b3JzLmxvZ2luVXNlcm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBVSVNlbGVjdG9ycy5sb2dpblBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBSZXF1ZXN0cy50ZXN0TG9naW4obG9naW5EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb25jZXJ0RnVuY3Rpb24oZSkge1xyXG4gICAgbGV0IGNvbXBvc2VyTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyLW5hbWUnKVxyXG4gICAgICAudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgcGllY2VOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGllY2UtbmFtZScpXHJcbiAgICAgIC50ZXh0Q29udGVudDtcclxuXHJcbiAgICBsZXQgbmV3UGllY2UgPSBuZXcgUGllY2UoY29tcG9zZXJOYW1lLCBwaWVjZU5hbWUpO1xyXG4gICAgbGV0IG5ld0NvbmNlcnQgPSBuZXcgQ29uY2VydCgnTm8gTmFtZScpO1xyXG4gICAgbmV3Q29uY2VydC5waWVjZXMucHVzaChuZXdQaWVjZSk7XHJcbiAgICBTdG9yYWdlLnNldE5ld0NvbmNlcnQobmV3Q29uY2VydCk7XHJcbiAgfVxyXG5cclxuICAvL0ZvciBDb25jZXJ0IEJ1aWxkZXJcclxuICBhZGRQaWVjZVRvQ29uY2VydEFycihlLCBjb25jZXJ0UGllY2VBcnIpIHtcclxuICAgIGNvbnN0IGFkZFRvQ29uY2VydENvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGNvbnN0IHBpZWNlQ29tcG9zZXIgPSBhZGRUb0NvbmNlcnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5waWVjZS1pbmZvLWxlZnQgPiBwJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlQ29tcG9zZXJEYXRlcyA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmRhdGEtY29tcG9zZXItZGF0ZXMnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGllY2VDb21wb3Nlck5hdGlvbmFsaXR5ID0gYWRkVG9Db25jZXJ0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuZGF0YS1jb21wb3Nlci1uYXRpb25hbGl0eSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwaWVjZUluc3RydW1lbnRhdGlvbiA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmRhdGEtcGllY2UtaW5zdHJ1bWVudGF0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlVGl0bGUgPSBhZGRUb0NvbmNlcnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5waWVjZS1pbmZvLWxlZnQgcDpsYXN0LWNoaWxkJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlRHVyYXRpb24gPSBhZGRUb0NvbmNlcnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5waWVjZS1pbmZvLXJpZ2h0IHAnXHJcbiAgICApO1xyXG5cclxuICAgIC8vQ2hhbmdlIG5vdGlmaWN0YWlvbiB0ZXh0IGJhY2sgYW5kIGZvcnRoLlxyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnUGllY2UgYWRkZWQgdG8gY29uY2VydCc7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdBZGQgdG8gY29uY2VydCc7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBsZXQgcGllY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGllY2VFbC5jbGFzc0xpc3QgPSAnY29uY2VydCc7XHJcbiAgICAvL3BpZWNlRWwuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgIHBpZWNlRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnMgcGllY2UtZHJhZy1iYXJzXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWlubmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb3Nlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VDb21wb3Nlci50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VDb21wb3NlckRhdGVzLnRleHRDb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZUNvbXBvc2VyTmF0aW9uYWxpdHkudGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VUaXRsZS50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VJbnN0cnVtZW50YXRpb24udGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ke3BpZWNlRHVyYXRpb24udGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzIGZhLTJ4IGRlbGV0ZS1waWVjZVwiPjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaW50ZXJtaXNzaW9uXCI+XHJcbiAgICAgICAgICAgICAgPHA+QWRkIEludGVybWlzc2lvbiBIZXJlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICBgO1xyXG5cclxuICAgIGNvbmNlcnRQaWVjZUFyci5wdXNoKHBpZWNlRWwpO1xyXG4gICAgY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBVSS5hZGRQaWVjZVRvRE9NKHBpZWNlRWwpO1xyXG5cclxuICAgIFVJLmRlbGV0ZVBpZWNlc0xpc3RlbmVycygpO1xyXG4gICAgVUkuY3JlYXRlSW50ZXJtaXNzaW9uTGlzdGVuZXJzKCk7XHJcbiAgICBVSS5kcmFnTGlzdGVuZXJzKCk7XHJcbiAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKGNvbmNlcnRQaWVjZUFycikpO1xyXG4gIH1cclxuXHJcbiAgLy9UT0RPXHJcbiAgLy9kZWxldGVQaWVjZXNcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBcHAgPSBuZXcgQVBQKCk7IiwiaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpJztcclxuXHJcbmNsYXNzIEZPUk1TIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICByZWdpc3RlclZhbGlkYXRpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGN1cnJlbnRGb3JtID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBsZXQgZm9ybUZpZWxkcyA9IGN1cnJlbnRGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWZpZWxkJyk7XHJcblxyXG4gICAgWy4uLmZvcm1GaWVsZHNdLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChmaWVsZC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItdGV4dCcpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIHdhcyBhbiBlcnJvcicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBhcmUgbm8gZXJyb3JzJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tFbWFpbChpbnB1dCkge1xyXG4gICAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgaWYgKHJlLnRlc3QoaW5wdXQudmFsdWUudHJpbSgpKSkge1xyXG4gICAgICBVSS5zaG93U3VjY2VzcyhpbnB1dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSS5zaG93RXJyb3IoaW5wdXQsICdFbWFpbCBpcyBub3QgdmFsaWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrUmVxdWlyZWQoaW5wdXRBcnIpIHtcclxuICAgIGxldCBpc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBpbnB1dEFyci5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIFVJLnNob3dFcnJvcihpbnB1dCwgYCR7VUkuZ2V0RmllbGROYW1lKGlucHV0KX0gaXMgcmVxdWlyZWQuYCk7XHJcbiAgICAgICAgaXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgVUkuc2hvd1N1Y2Nlc3MoaW5wdXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaXNSZXF1aXJlZDtcclxuICB9XHJcblxyXG4gIGNoZWNrTGVuZ3RoKGlucHV0LCBtaW4sIG1heCkge1xyXG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA8IG1pbikge1xyXG4gICAgICBVSS5zaG93RXJyb3IoXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgYCR7VUkuZ2V0RmllbGROYW1lKGlucHV0KX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVyc2BcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gbWF4KSB7XHJcbiAgICAgIFVJLnNob3dFcnJvcihcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBgJHtVSS5nZXRGaWVsZE5hbWUoaW5wdXQpfSBtdXN0IGJlIGxlc3MgdGhhbiAke21heH0gY2hhcmFjdGVyc31gXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSS5zaG93U3VjY2VzcyhpbnB1dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1Bhc3N3b3Jkc01hdGNoKGlucHV0MSwgaW5wdXQyKSB7XHJcbiAgICBpZiAoaW5wdXQxLnZhbHVlICE9PSBpbnB1dDIudmFsdWUpIHtcclxuICAgICAgVUkuc2hvd0Vycm9yKGlucHV0MiwgJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrQWxsVmFsaWQoZm9ybUlucHV0QXJyKSB7XHJcbiAgICBsZXQgYWxsVmFsaWQgPSB0cnVlO1xyXG4gICAgZm9ybUlucHV0QXJyLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBmaWVsZC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSAmJlxyXG4gICAgICAgIGZpZWxkLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA+IDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWxsVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gYWxsVmFsaWQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhbGxWYWxpZDtcclxuICB9XHJcblxyXG4gIGxvZ0luVmFsaWRhdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnTG9nIEluIFByZXZlbnRlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1zID0gbmV3IEZPUk1TKCk7IiwiY2xhc3MgSHR0cCB7XHJcbiAgLy9NYWtlIEhUVFAgR2V0XHJcbiAgYXN5bmMgZ2V0KHVybCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXNEYXRhO1xyXG4gIH1cclxuXHJcbiAgLy9NYWtlIEhUVFAgUE9TVFxyXG4gIGFzeW5jIHBvc3QodXJsLCBkYXRhKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXNEYXRhO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0WE1MKGV2ZW50ID0gdW5kZWZpbmVkLCB1cmwpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICByZXR1cm4gcmVzRGF0YTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEpTT04odXJsKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgcmV0dXJuIHJlc0RhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSFRUUCA9IG5ldyBIdHRwKCk7IiwiaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpJztcclxuXHJcbmNsYXNzIE5BViB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgY29tcG9zZXJQYWdlTGlzdGVuZXJzKGNvbXBvc2VyKSB7XHJcbiAgICBjb21wb3Nlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGNvbXBvc2VyLyR7ZS50YXJnZXQudGV4dENvbnRlbnR9YDtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdiA9IG5ldyBOQVYoKTsiLCJpbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnLi9odHRwJztcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi9uYXYnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XHJcblxyXG5jbGFzcyBSRVFVRVNUUyB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZ2V0Q29tcG9zZXJSZXN1bHRzKCkge1xyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgc2VhcmNoVGVybTogVUlTZWxlY3RvcnMuc2VhcmNoSW5wdXQudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBIVFRQLnBvc3QoJy9jb21wb3NlcnMnLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgcmVzLmNvbXBvc2VycylcclxuICAgICAgbGV0IGNvbXBBcnJheSA9IEpTT04ucGFyc2UocmVzLmNvbXBvc2Vycyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbXBBcnJheSk7XHJcblxyXG4gICAgICBjb21wQXJyYXkuZm9yRWFjaChjb21wb3NlciA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIFVJLnBvcHVsYXRlQ29tcG9zZXJTZWFyY2hSZXN1bHRzKGN1cnJlbnRVUkwsIGNvbXBvc2VyKVxyXG4gICAgICB9KVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBUaGVyZSB3YXMgYW4gZXJyLCAke2Vycn1gKSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGJyb3dzZVBhbmVsRmV0Y2goKSB7XHJcbiAgICBsZXQgcmFuZG9tQ29tcEFyciA9IFtdO1xyXG4gICAgSFRUUC5nZXQoJy9icm93c2VfY29tcG9zZXJfbGlzdCcpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbXBvc2Vyc0FyciA9IGRhdGEuY29tcG9zZXJzX2FycmF5O1xyXG4gICAgICAgIGNvbXBvc2Vyc0Fyci5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbWFpbkxldHRlciA9IGdyb3VwWzBdWzBdO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbUNvbXBBcnIucHVzaChcclxuICAgICAgICAgICAgICBncm91cFtBcHAuZ2VuZXJhdGVSYW5kb21OdW1iZXIoMCwgZ3JvdXAubGVuZ3RoKV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBVSS5hZGRSYW5kb21Db21wb3NlcnNUb0RPTShtYWluTGV0dGVyLCByYW5kb21Db21wQXJyKTtcclxuICAgICAgICAgIHJhbmRvbUNvbXBBcnIgPSBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgVGhlcmUgd2FzIGFuIGVycm9yOiAke2Vycn1gKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ3VycmVudExldHRlcihlKSB7XHJcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdicm93c2VfY29tcG9zZXJzJykpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2Jyb3dzZV9jb21wb3NlcnMnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC50YWdOYW1lICE9PSAnTEknIHx8IGUudGFyZ2V0LnRhZ05hbWUgIT09ICdIMScpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGNvbXBvc2VyTGV0dGVyID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICAgIGxldCBkYXRhID0geyBsZXR0ZXI6IGNvbXBvc2VyTGV0dGVyIH07XHJcbiAgICAgIEhUVFAucG9zdCgnLi9icm93c2VfY29tcG9zZXJfbGlzdCcsIGRhdGEpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChVSVNlbGVjdG9ycy5yZXN1bHRzQ29sdW1uLnRleHRDb250ZW50ICE9PSAnJykge1xyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5yZXN1bHRzQ29sdW1uLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGF0YS5sZXR0ZXJBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIFVJLmFwcGVuZEN1cnJlbnRMZXR0ZXIoaXRlbSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBbLi4uVUlTZWxlY3RvcnMucmVzdWx0c0NvbHVtbi5jaGlsZHJlbl0uZm9yRWFjaCgoY29tcCkgPT4ge1xyXG4gICAgICAgICAgICBOYXYuY29tcG9zZXJQYWdlTGlzdGVuZXJzKGNvbXApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coYFRoZXJlIHdhcyBhbiBlcnJvciAke2Vycn1gKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZXN0TG9naW4obG9naW5EYXRhKSB7XHJcbiAgICBIVFRQLnBvc3QoJy9sb2dpbicsIGxvZ2luRGF0YSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEudXBkYXRlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgIFVJU2VsZWN0b3JzLmxvZ0luVXNlckJ0bi50ZXh0Q29udGVudCA9IGAke2RhdGEubWVzc2FnZX1gO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2hvbWVwYWdlJztcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEudXBkYXRlID09PSAnZmFpbHVyZScpIHtcclxuICAgICAgICAgIFVJLnNob3dFcnJvcihVSVNlbGVjdG9ycy5sb2dpblVzZXJuYW1lLCBkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgVUkuc2hvd0Vycm9yKFVJU2VsZWN0b3JzLmxvZ2luUGFzc3dvcmQsIGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBUaGVyZSB3YXMgYW4gZXJyb3IsICR7ZXJyfWApKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRGdWxsUGllY2VJbmZvKHBpZWNlVGl0bGUpIHtcclxuICAgIEhUVFAuZ2V0KGAvcGllY2VfZGV0YWlsLyR7cGllY2VUaXRsZX1gKVxyXG4gICAgICAudGhlbihkYXRhID0+IFVJLmFkZFBpZWNlRnJvbUxvY2FsU3RvcmFnZShkYXRhKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgRVJST1I6ICR7ZXJyfWApKVxyXG4gIH1cclxuXHJcbiAgZmF2b3JpdGVzU2VhcmNoKCkge1xyXG4gICAgbGV0IHNlYXJjaFRlcm0gPSBVSVNlbGVjdG9ycy5zZWFyY2hGYXZvcml0ZXMudmFsdWU7XHJcbiAgICBpZiAoc2VhcmNoVGVybSA9PT0gJycpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuaW5pdGlhbEZhdm9yaXRlc1Jlc3VsdHMuZm9yRWFjaCgoZmF2b3JpdGUpID0+IHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLmFwcGVuZENoaWxkKGZhdm9yaXRlKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBIVFRQLnBvc3QoJy9zZWFyY2hfZmF2b3JpdGVzJywgc2VhcmNoVGVybSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGRhdGEuZmF2b3JpdGVzLmZvckVhY2goZmF2b3JpdGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmYXZvcml0ZUxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgZmF2b3JpdGVMSS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWNvbXBvc2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGEtY29tcG9zZXItZGF0ZXNcIj4ke2Zhdm9yaXRlLmNvbXBvc2VyLnllYXJzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGEtY29tcG9zZXItbmF0aW9uYWxpdHlcIj4ke2Zhdm9yaXRlLmNvbXBvc2VyLm5hdGlvbmFsaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGEtcGllY2UtaW5zdHJ1bWVudGF0aW9uXCI+JHtmYXZvcml0ZS5pbnN0cnVtZW50YXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2UtaW5mby1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtmYXZvcml0ZS5jb21wb3Nlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtmYXZvcml0ZS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlLWluZm8tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2Zhdm9yaXRlLmR1cmF0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG4gYWRkLXRvLWNvbmNlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIENvbmNlcnRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLmFwcGVuZENoaWxkKGZhdm9yaXRlTEkpO1xyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGBFUlJPUjogJHtlcnJ9YClcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBnZXRQaWVjZVJlc3VsdHMoZSkge1xyXG4gICAgVUkuY2xlYXJDb21wb3NlclJlc3VsdHMoKTtcclxuXHJcbiAgICBsZXQgZm9ybWF0dGVkU3RyaW5nID0gZS50YXJnZXQuaW5uZXJIVE1MLnNwbGl0KCcmJylbMF07XHJcbiAgICBIVFRQLmdldChgL3BpZWNlX2RldGFpbC8ke2Zvcm1hdHRlZFN0cmluZ31gKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5waWVjZS50aXRsZSkge1xyXG4gICAgICAgICAgY29uc3QgY29udGVudHMgPSBgPGgyIGlkPVwicGllY2UtdGl0bGUtcmVzdWx0XCI+JHtkYXRhLnBpZWNlLnRpdGxlfTwvaDI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJwaWVjZS1kdXJhdGlvblwiPiR7ZGF0YS5waWVjZS5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInBpZWNlLWluc3RydW1lbnRhdGlvblwiPiR7ZGF0YS5waWVjZS5pbnN0cnVtZW50YXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgIFVJU2VsZWN0b3JzLnBpZWNlRGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUwgPSBjb250ZW50cztcclxuXHJcbiAgICAgICAgICBpZiAoZGF0YS5waWVjZS5jb21tZW50cy5sZW5ndGggPiAwKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgICAgICBjb21tZW50TGlzdC5jbGFzc0xpc3QgPSAnY29tbWVudC1saXN0JztcclxuICAgICAgICAgICAgcGllY2VEZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRMaXN0KTtcclxuICAgICAgICAgICAgZGF0YS5waWVjZS5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgICAgY29tbWVudExJLmNsYXNzTGlzdCA9ICdjb21tZW50JztcclxuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWVudC5hdXRob3IsIGNvbW1lbnQuYm9keSwgY29tbWVudC50aW1lc3RhbXApO1xyXG5cclxuICAgICAgICAgICAgICBjb21tZW50TEkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPHA+JHtjb21tZW50LmF1dGhvcn0gc2F5czogPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtjb21tZW50LmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtjb21tZW50LnRpbWVzdGFtcH08L3A+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICBjb21tZW50TGlzdC5hcHBlbmRDaGlsZChjb21tZW50TEkpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zdCBsaUZhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpRmFpbC5pbm5lckhUTUwgPSAnVGhlcmUgd2FzIGEgZmFpbHVyZSc7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMucGllY2VSZXN1bHRzLmFwcGVuZChsaSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgaW1hZ2VGZXRjaCgpIHtcclxuICAgIGNvbnN0IGNvbXBvc2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb3Nlci1uYW1lJyk7XHJcbiAgICBIVFRQLmdldChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY3VzdG9tc2VhcmNoL3YxP2tleT1BSXphU3lDNzJlbXNhcGN1WHNGNjRIcm43Y2FfOXhJYkFVYm43RFkmY3g9MDE0MTI0MzkxOTQ1ODMwMDg2ODU5OmFpc3JhdXhqZWp5JnE9JHtjb21wb3Nlck5hbWUudGV4dENvbnRlbnR9YClcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tcG9zZXJJbWdTcmMgPSBkYXRhLml0ZW1zWzBdLnBhZ2VtYXAuY3NlX3RodW1ibmFpbFswXS5zcmM7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuY29tcG9zZXJXcmFwLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7Y29tcG9zZXJJbWdTcmN9JylgO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5jb21wb3NlcldyYXAuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDBcIiknO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tbWl0TmV3Q29tbWVudChlKSB7XHJcblxyXG5cclxuICAgIGxldCBjb21wb3NlclVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuLXVzZXInKTtcclxuICAgIGNvbnN0IGNvbW1lbnRCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItY29tbWVudCcpO1xyXG4gICAgY29uc3QgY29tbWVudFBpZWNlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllY2UtdGl0bGUtcmVzdWx0Jyk7XHJcblxyXG5cclxuICAgIGlmICghY29tcG9zZXJVc2VyKSB7XHJcbiAgICAgIC8vVE9ETyBXUklURSBTSE9XIEJVVFRPTiBFUlJPUiBcclxuICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnUGxlYXNlIGxvZyBpbicpO1xyXG4gICAgfSBlbHNlIGlmICghY29tbWVudFBpZWNlVGl0bGUpIHtcclxuICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnU2VsZWN0IGEgcGllY2UnKTtcclxuICAgIH0gZWxzZSBpZiAoY29tbWVudEJvZHkudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCwgJ1dyaXRlICBhIGNvbW1lbnQhJyk7XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgY29uc3QgZW50cnkgPSB7XHJcbiAgICAgICAgYm9keTogY29tbWVudEJvZHkudmFsdWUsXHJcbiAgICAgICAgcGllY2U6IGNvbW1lbnRQaWVjZVRpdGxlLnRleHRDb250ZW50XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBIVFRQLnBvc3QoJy9hZGRfY29tbWVudCcsIGVudHJ5KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tbWl0TmV3RmF2b3JpdGUoZSkge1xyXG4gICAgbGV0IGNvbXBvc2VyVXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tdXNlcicpO1xyXG4gICAgbGV0IHBpZWNlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllY2UtdGl0bGUtcmVzdWx0Jyk7XHJcblxyXG4gICAgbGV0IHBpZWNlU2VuZCA9IHtcclxuICAgICAgcGllY2VUaXRsZVNlbmQ6IHBpZWNlVGl0bGUudGV4dENvbnRlbnRcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBpZWNlVGl0bGUpIHtcclxuICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnU2VsZWN0IGEgcGllY2UnKTtcclxuICAgIH0gZWxzZSBpZiAoIWNvbXBvc2VyVXNlcikge1xyXG4gICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQsICdQbGVhc2UgTG9nIGluJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBIVFRQLnBvc3QoJy9hZGRfcGllY2VfdG9fZmF2b3JpdGVzJylcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZXNzYWdlfWA7XHJcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ0FkZCBwaWVjZSB0byBmYXZvcml0ZXMnO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBGRVRDSCBFUlJPUjogJHtlcnJ9YCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0cyA9IG5ldyBSRVFVRVNUUygpOyIsImV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgY29uY2VydHMgPSBbXSkge1xyXG4gICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgdGhpcy5jb25jZXJ0cyA9IGNvbmNlcnRzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmNlcnQge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBwaWVjZXMgPSBbXSkge1xyXG4gICAgdGhpcy5pZCA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKDAsIDUwMDAwKTtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMucGllY2VzID0gcGllY2VzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpZWNlIHtcclxuICBjb25zdHJ1Y3Rvcihjb21wb3NlciwgdGl0bGUpIHtcclxuICAgIHRoaXMuY29tcG9zZXIgPSBjb21wb3NlcjtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVXNlciwgQ29uY2VydCwgUGllY2UgfSBmcm9tICcuL3Nlc3Npb25PYmonO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5pbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5cclxuY2xhc3MgU1RPUkFHRSB7XHJcbiAgZ2V0VXNlcigpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlcih1c2VyKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVzZXIoKSB7XHJcbiAgICBsZXQgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXVzZXJuYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICBpZiAoIXRoaXMuZ2V0VXNlcigpKSB7XHJcbiAgICAgIGxldCBuZXdVc2VyID0gbmV3IFVzZXIodXNlcik7XHJcbiAgICAgIFVJLmRpc3BsYXlDb25jZXJ0cyhuZXdVc2VyKTtcclxuICAgIH0gZWxzZSBpZiAodXNlciA9PT0gdGhpcy5nZXRVc2VyKCkudXNlcm5hbWUpIHtcclxuICAgICAgbGV0IGN1cnJlbnRVc2VyID0gdGhpcy5nZXRVc2VyKCk7XHJcbiAgICAgIFVJLmRpc3BsYXlDb25jZXJ0cyhjdXJyZW50VXNlcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodXNlciAhPT0gdGhpcy5nZXRVc2VyKCkudXNlcm5hbWUpIHtcclxuICAgICAgbGV0IG5ld1VzZXIgPSBuZXcgVXNlcih1c2VyKTtcclxuICAgICAgdGhpcy5zZXRVc2VyKG5ld1VzZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q29uY2VydCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduZXdDb25jZXJ0Jyk7XHJcbiAgfVxyXG5cclxuICBzZXROZXdDb25jZXJ0KGNvbmNlcnQpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduZXdDb25jZXJ0JywgSlNPTi5zdHJpbmdpZnkoY29uY2VydCkpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShzdHJpbmcpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmUoc3RyaW5nKTtcclxuICB9XHJcblxyXG4gIHNldEl0ZW0oc3RyaW5nLCBpdGVtKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdHJpbmcsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yYWdlID0gbmV3IFNUT1JBR0UoKTtcclxuIiwiaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IHsgUmVxdWVzdHMgfSBmcm9tICcuL3JlcXVlc3RzJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVWkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kcmFnU3RhcnRJbmRleDtcclxuICAgIHRoaXMuYWxsID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRlc3RJbXBvcnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhVSVNlbGVjdG9ycy5zaXRlVGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgLy9CQVNFXHJcbiAgb3Blbk1vZGFsKGUpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudC50cmltKCkgPT09ICdMb2cgSW4nKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNpZ25Jbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaWduVXBNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbChlKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2Nsb3NlLXNpZ24taW4nKSB7XHJcbiAgICAgIGNvbnN0IHNpZ25Jbk1vZGFsUGFyZW50ID1cclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgc2lnbkluTW9kYWxQYXJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1vZGFsUGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBtb2RhbFBhcmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd1NlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudCA9PT0gVUlTZWxlY3RvcnMub3Blbk1vYmlsZVNlYXJjaCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5yaWdodE5hdkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaXRlVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVUlTZWxlY3RvcnMucmlnaHROYXZDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VTZWFyY2hGaWVsZCgpIHtcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhck92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFVJU2VsZWN0b3JzLnJpZ2h0TmF2Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLnNpdGVUaXRsZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2l0ZVRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0Jyb3dzZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBVSVNlbGVjdG9ycy5icm93c2VNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmJyb3dzZU1vZGFsQXJlYS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICB3aGlsZSAoVUlTZWxlY3RvcnMuYnJvd3NlQ29tcG9zZXJzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgICBVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMuZmlyc3RDaGlsZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFJlcXVlc3RzLmJyb3dzZVBhbmVsRmV0Y2goKTtcclxuICAgIC8vUmVxdWVzdHMub3BlbkN1cnJlbnRMZXR0ZXIoKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZEN1cnJlbnRMZXR0ZXIoaXRlbSkge1xyXG4gICAgbGV0IGNvbXBvc2VyUmVzdWx0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbXBvc2VyUmVzdWx0TmFtZS50ZXh0Q29udGVudCA9IGAke2l0ZW19YDtcclxuICAgIFVJU2VsZWN0b3JzLnJlc3VsdHNDb2x1bW4uYXBwZW5kQ2hpbGQoY29tcG9zZXJSZXN1bHROYW1lKTtcclxuICB9XHJcblxyXG4gIGFkZFJhbmRvbUNvbXBvc2Vyc1RvRE9NKG1haW5MZXR0ZXIsIHJhbmRvbUNvbXBBcnIpIHtcclxuICAgIGxldCBjb21wb3NlckxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9zZXJMZXR0ZXIuY2xhc3NMaXN0ID0gJ2xldHRlcic7XHJcblxyXG5cclxuICAgIC8vVEhFUkUgSVMgU09NRSBGVUNLSU5HIEJFQU1JTkcgSVNTVUUgSEVSRVxyXG4gICAgY29tcG9zZXJMZXR0ZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgPGgxPiR7bWFpbkxldHRlcn08L2gxPlxyXG4gICAgIDxkaXYgY2xhc3M9XCJsZXR0ZXItY29tcG9zZXJzXCI+XHJcblxyXG4gICAgICAgICAgICR7cmFuZG9tQ29tcEFyci5tYXAoKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuZG9tLWNvbXBvc2VyLWxpbmtzXCI+PGEgaHJlZj1cIiNcIj4ke2l0ZW19PC9hPjwvcD5gXHJcbiAgICB9KVxyXG4gICAgICAgIC5qb2luKCcnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICBVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMuYXBwZW5kQ2hpbGQoY29tcG9zZXJMZXR0ZXIpO1xyXG5cclxuICAgIGNvbnN0IGxldHRlckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxldHRlciBoMScpO1xyXG4gICAgY29uc29sZS5sb2cobGV0dGVyTGlua3MpO1xyXG4gICAgWy4uLmxldHRlckxpbmtzXS5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBSZXF1ZXN0cy5vcGVuQ3VycmVudExldHRlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByYW5kb21Db21wb3Nlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnLnJhbmRvbS1jb21wb3Nlci1saW5rcyBhJ1xyXG4gICAgKTtcclxuICAgIFsuLi5yYW5kb21Db21wb3Nlckxpc3RdLmZvckVhY2goKGNvbXBvc2VyTGluaykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhjb21wb3NlckxpbmspO1xyXG4gICAgICBjb21wb3NlckxpbmsuaHJlZiA9IGAvY29tcG9zZXIvJHtjb21wb3NlckxpbmsudGV4dENvbnRlbnR9YDtcclxuICAgICAgLy9jb21wb3NlckxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjb25zb2xlLmxvZygnVElUUycpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJMaXN0KCkge1xyXG4gICAgaWYgKFVJU2VsZWN0b3JzLnNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB3aGlsZSAoVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5yZW1vdmVDaGlsZChcclxuICAgICAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuZmlyc3RDaGlsZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5yZW1vdmVDaGlsZChcclxuICAgICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLmZpcnN0Q2hpbGRcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvcHVsYXRlQ29tcG9zZXJTZWFyY2hSZXN1bHRzKGN1cnJlbnRVUkwsIGNvbXBvc2VyKSB7XHJcbiAgICAvLyBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICBjb25zdCByZXN1bHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJlc3VsdERpdi5jbGFzc0xpc3QgPSAnc2VhcmNoLXJlc3VsdC1kb3duJztcclxuXHJcbiAgICBpZiAoY3VycmVudFVSTC5pbmNsdWRlcygnY29tcG9zZXInKSkge1xyXG4gICAgICByZXN1bHREaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8cD4ke2NvbXBvc2VyLm5hbWV9PC9wPlxyXG4gICAgICA8YSBocmVmPVwiJHtjb21wb3Nlci5uYW1lfVwiPjxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0blwiPlZpc2l0IENvbXBvc2VyIFBhZ2U8L2J1dHRvbj48L2E+XHJcblxyXG4gIGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHREaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8cD4ke2NvbXBvc2VyLm5hbWV9PC9wPlxyXG4gICAgICA8YSBocmVmPVwiY29tcG9zZXIvJHtjb21wb3Nlci5uYW1lfVwiPjxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0blwiPlZpc2l0IENvbXBvc2VyIFBhZ2U8L2J1dHRvbj48L2E+XHJcblxyXG4gIGA7XHJcbiAgICB9XHJcblxyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5hcHBlbmRDaGlsZChyZXN1bHREaXYpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Ryb3BEb3duKCkge1xyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmRyb3BEb3duTWVudS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmRyb3BEb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVUlTZWxlY3RvcnMuZHJvcERvd25NZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GT1JNIFZBTElEQVRJT05cclxuICBzaG93RXJyb3IoaW5wdXQsIG1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGZvcm1Db250cm9sID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgIGZvcm1Db250cm9sLmNsYXNzTmFtZSA9ICdmb3JtLWZpZWxkIGVycm9yJztcclxuXHJcbiAgICBjb25zdCBlcnJvciA9IGZvcm1Db250cm9sLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci10ZXh0Jyk7XHJcbiAgICBlcnJvci5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgc2hvd1N1Y2Nlc3MoaW5wdXQpIHtcclxuICAgIGNvbnN0IGZvcm1Db250cm9sID0gaW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgIGZvcm1Db250cm9sLmNsYXNzTmFtZSA9ICdmb3JtLWZpZWxkIHN1Y2Nlc3MnO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGROYW1lKGlucHV0KSB7XHJcbiAgICBsZXQgbmV3U3RyaW5nID0gaW5wdXQuaWQuc3BsaXQoJy0nKVsxXTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1N0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5ld1N0cmluZy5zbGljZSgxKSk7XHJcbiAgICBpZiAobmV3U3RyaW5nLmluY2x1ZGVzKCdwYXNzd29yZDInKSkge1xyXG4gICAgICByZXR1cm4gJ1JlcGVhdGVkIFBhc3N3b3JkJztcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdTdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuZXdTdHJpbmcuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICAvL0NPTkNFUlQgQlVJTERFUlxyXG5cclxuICBhZGRQaWVjZUZyb21Mb2NhbFN0b3JhZ2UocE9iamVjdCkge1xyXG4gICAgY29uc3QgcGllY2VPYmplY3QgPSBwT2JqZWN0LnBpZWNlO1xyXG4gICAgbGV0IHBpZWNlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBpZWNlRWwuY2xhc3NMaXN0ID0gJ2NvbmNlcnQnO1xyXG4gICAgcGllY2VFbC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XHJcbiAgICBwaWVjZUVsLmlubmVySFRNTCA9IGBcclxuICAgIFxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnMgcGllY2UtZHJhZy1iYXJzXCI+PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWlubmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcG9zZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5jb21wb3Nlcn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3BpZWNlT2JqZWN0LnllYXJzfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7cGllY2VPYmplY3QubmF0aW9uYWxpdHl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cGllY2VPYmplY3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5pbnN0cnVtZW50YXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnggZGVsZXRlLXBpZWNlXCI+PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaW50ZXJtaXNzaW9uXCI+XHJcbiAgICAgICAgICAgIDxwPkFkZCBJbnRlcm1pc3Npb24gSGVyZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgYDtcclxuXHJcbiAgICAvL0ZJWCBERVBFTkRFTkNJRVNcclxuICAgIGNvbmNlcnRQaWVjZUFyci5wdXNoKHBpZWNlRWwpO1xyXG4gICAgY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBVaS5hZGRQaWVjZVRvRE9NKHBpZWNlRWwpO1xyXG5cclxuICAgIFVpLmRlbGV0ZVBpZWNlc0xpc3RlbmVycygpO1xyXG4gICAgVWkuY3JlYXRlSW50ZXJtaXNzaW9uTGlzdGVuZXJzKCk7XHJcbiAgICBVaS5kcmFnTGlzdGVuZXJzKCk7XHJcbiAgICBVaS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVWkuZ2V0Q29uY2VydER1cmF0aW9uKGNvbmNlcnRQaWVjZUFycikpO1xyXG5cclxuICAgIFN0b3JhZ2UucmVtb3ZlSXRlbSgnbmV3Q29uY2VydCcpO1xyXG5cclxuICB9XHJcblxyXG4gIGdldENvbmNlcnREdXJhdGlvbihwaWVjZUFycikge1xyXG4gICAgaWYgKHBpZWNlQXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBsZXQgZW1wdHkgPSAwO1xyXG4gICAgICBVaS5jb25jZXJ0TGVuZ3RoSnVkZ2VtZW50KFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYSwgZW1wdHkpO1xyXG4gICAgICByZXR1cm4gZW1wdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjb25jZXJ0RHVyYXRpb25BcnIgPSBwaWVjZUFyci5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludGVybWlzc2lvbicpKSB7XHJcbiAgICAgICAgICByZXR1cm4gMzA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBOdW1iZXIoXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnBpZWNlLWluZm8gcDpsYXN0LW9mLXR5cGUnKVxyXG4gICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIidcIilbMF1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGNvbmNlcnREdXJhdGlvbiA9IGNvbmNlcnREdXJhdGlvbkFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyB2YWwpO1xyXG4gICAgICAvLyBpZihjb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmNvbmNlcnQuaW50ZXJtaXNzaW9uJykpe1xyXG4gICAgICAvLyAgICAgY29uY2VydER1cmF0aW9uICs9IDMwO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICBVaS5jb25jZXJ0TGVuZ3RoSnVkZ2VtZW50KGNvbmNlcnRCdWlsZGVyQXJlYSwgY29uY2VydER1cmF0aW9uKTtcclxuXHJcbiAgICAgIHJldHVybiBjb25jZXJ0RHVyYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY3JlYXRlSW50ZXJtaXNzaW9uKGUsIGNvbmNlcnRQaWVjZUFycikge1xyXG4gICAgaWYgKCFVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmFkZC1pbnRlcm1pc3Npb24nKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBhcmVudENvbmNlcnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHJcbiAgICAvL2NvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuYWRkLWludGVybWlzc2lvbicpLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuICAgIGxldCBpbnRlcm1pc3Npb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW50ZXJtaXNzaW9uRWwuY2xhc3NMaXN0ID0gJ2NvbmNlcnQgaW50ZXJtaXNzaW9uJztcclxuICAgIC8vaW50ZXJtaXNzaW9uRWwuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgIGludGVybWlzc2lvbkVsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnNcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgPHA+SW50ZXJtaXNzaW9uOiB+MzAgbWludXRlczwvcD5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnggZGVsZXRlLXBpZWNlXCIgaWQ9XCJkZWxldGUtaW50ZXJtaXNzaW9uXCI+PC9pPlxyXG4gICAgICBgO1xyXG5cclxuICAgIC8vQUREIFRPIEFQUFxyXG4gICAgY29uY2VydFBpZWNlQXJyLnNwbGljZShcclxuICAgICAgY29uY2VydFBpZWNlQXJyLmluZGV4T2YocGFyZW50Q29uY2VydCkgKyAxLFxyXG4gICAgICAwLFxyXG4gICAgICBpbnRlcm1pc3Npb25FbFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIH0pO1xyXG4gICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5hcHBlbmRDaGlsZChwaWVjZSk7XHJcbiAgICB9KTtcclxuICAgIC8vY29uY2VydEJ1aWxkZXJBcmVhLmFwcGVuZENoaWxkKGludGVybWlzc2lvbkVsKTtcclxuICAgIC8vY29uc29sZS5sb2coY29uY2VydFBpZWNlQXJyKTtcclxuXHJcbiAgICBVaS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVWkuZ2V0Q29uY2VydER1cmF0aW9uKGNvbmNlcnRQaWVjZUFycikpO1xyXG5cclxuICAgIC8vRGVsZXRlIEludGVybWlzc2lvblxyXG4gICAgbGV0IGNsb3NlSW50ZXJtaXNzaW9uID0gaW50ZXJtaXNzaW9uRWwucXVlcnlTZWxlY3RvcignI2RlbGV0ZS1pbnRlcm1pc3Npb24nKTtcclxuICAgIGNsb3NlSW50ZXJtaXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uY2VydFBpZWNlQXJyLnNwbGljZShjb25jZXJ0UGllY2VBcnIuaW5kZXhPZihlLnRhcmdldC5wYXJlbnRFbGVtZW50KSwgMSk7XHJcblxyXG4gICAgICAvL1JlbW92ZSBJbnRlcm1pc3Npb24gZnJvbSBET01cclxuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgIC8vVXBkYXRlIERhdGEtSW5kZXggQXR0cmlidXRlXHJcbiAgICAgIGNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgVWkudXBkYXRlQ29uY2VydER1cmF0aW9uKFVpLmdldENvbmNlcnREdXJhdGlvbihjb25jZXJ0UGllY2VBcnIpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29uY2VydER1cmF0aW9uKGR1cmF0aW9uTnVtKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0TWludXRlcy50ZXh0Q29udGVudCA9IGAke2R1cmF0aW9uTnVtfWA7XHJcbiAgfVxyXG5cclxuICBjb25jZXJ0TGVuZ3RoSnVkZ2VtZW50KGNvbnRhaW5lciwgZHVyYXRpb24pIHtcclxuICAgIGlmIChkdXJhdGlvbiA9PSAwKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRDb25jbHVzaW9uLnRleHRDb250ZW50ID0gYFBsZWFzZSBhZGQgc29tZSBwaWVjZXMuYDtcclxuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPCA5MCAmJiBkdXJhdGlvbiA+IDApIHtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydENvbmNsdXNpb24udGV4dENvbnRlbnQgPSBgQ29uY2VydCBpcyBwb3RlbnRpYWxseSB0b28gc2hvcnQuYDtcclxuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPj0gOTAgJiYgZHVyYXRpb24gPD0gMTIwKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRDb25jbHVzaW9uLnRleHRDb250ZW50ID0gYFBlcmZlY3QgY29uY2VydCBsZW5ndGghYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRDb25jbHVzaW9uLnRleHRDb250ZW50ID0gYENvbmNlcnQgaXMgZ2V0dGluZyBhIGJpdCBsb25nLi4uYDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb25jZXJ0LmludGVybWlzc2lvbicpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdubyBpbnRlcm1pc3Npb24geWV0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVQaWVjZXNMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZGVsZXRlUGllY2VzID0gVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtcGllY2UnKTtcclxuICAgIGRlbGV0ZVBpZWNlcy5mb3JFYWNoKChwaWVjZSkgPT4ge1xyXG4gICAgICBwaWVjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVBpZWNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSW50ZXJtaXNzaW9uTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGludGVybWlzc2lvbkxpc3QgPSBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5hZGQtaW50ZXJtaXNzaW9uJ1xyXG4gICAgKTtcclxuICAgIGludGVybWlzc2lvbkxpc3QuZm9yRWFjaCgoaW50ZXJtaXNzaW9uKSA9PiB7XHJcbiAgICAgIGludGVybWlzc2lvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUludGVybWlzc2lvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVBpZWNlKGNvbmNlcnRQaWVjZUFycikge1xyXG4gICAgLy9nZXQgcGFyZW50IEVsXHJcbiAgICBsZXQgc2VsZWN0ZWRDb25jZXJ0ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIC8vUmVtb3ZlIFNlbGVjdGVkIFBpZWNlIGZyb20gQXJyYXlcclxuICAgIGNvbmNlcnRQaWVjZUFyci5zcGxpY2UoY29uY2VydFBpZWNlQXJyLmluZGV4T2Yoc2VsZWN0ZWRDb25jZXJ0KSwgMSk7XHJcblxyXG4gICAgLy9SZW1vdmUgUGllY2UgZnJvbSBET01cclxuICAgIHNlbGVjdGVkQ29uY2VydC5yZW1vdmUoKTtcclxuXHJcbiAgICAvL1VwZGF0ZSBEYXRhLUluZGV4IEF0dHJpYnV0ZVxyXG4gICAgY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9KTtcclxuICAgIFVpLnVwZGF0ZUNvbmNlcnREdXJhdGlvbihVaS5nZXRDb25jZXJ0RHVyYXRpb24oY29uY2VydFBpZWNlQXJyKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgYWRkUGllY2VUb0RPTShwaWVjZSkge1xyXG4gICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmFwcGVuZENoaWxkKHBpZWNlKTtcclxuICB9XHJcblxyXG4gIGNsZWFyRmF2ZUxpc3QoKSB7XHJcbiAgICB3aGlsZSAoVUlTZWxlY3RvcnMuZmF2b3JpdGVzU2VhcmNoUmVzdWx0cy5maXJzdENoaWxkKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgVUlTZWxlY3RvcnMuZmF2b3JpdGVzU2VhcmNoUmVzdWx0cy5maXJzdENoaWxkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93SW50ZXJtaXNzaW9uKGUpIHtcclxuICAgIGlmIChVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmNvbmNlcnQuaW50ZXJtaXNzaW9uJykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09ICdjb25jZXJ0Jykge1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBlLnRhcmdldCA9PT0gVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhICYmXHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuY29uY2VydC5zaG93JylcclxuICAgICkge1xyXG4gICAgICBsZXQgY3VycmVudENvbmNlcnQgPSBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAnLmNvbmNlcnQuc2hvdydcclxuICAgICAgKTtcclxuICAgICAgY3VycmVudENvbmNlcnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbmNlcnRUaXRsZSgpIHtcclxuICAgIGxldCBjb25jZXJ0VGl0bGUgPSBVSVNlbGVjdG9ycy5jb25jZXJ0VGl0bGVJbnB1dC52YWx1ZTtcclxuXHJcbiAgICBpZiAoY29uY2VydFRpdGxlID09PSAnJykge1xyXG4gICAgICAvL1BsZWFzZSBQcm92aWRlIEEgVGl0bGUuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL0NoYW5nZSBET01cclxuICAgICAgVUlTZWxlY3RvcnMucmlnaHRTZWFyY2hBcmVhLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydFRpdGxlSGVhZGVyLnRleHRDb250ZW50ID0gYCR7Y29uY2VydFRpdGxlfWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb25jZXJ0VGl0bGUoKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5yaWdodFNlYXJjaEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSW50ZXJtaXNzaW9uKGUpIHtcclxuICAgIGlmICghVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaW50ZXJtaXNzaW9uJykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IFBhcmVudFxyXG4gICAgbGV0IHBhcmVudENvbmNlcnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBwYXJlbnRDb25jZXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHJcbiAgICAvL01ha2UgSW50ZXJtaXNzaW9uIEVsZW1lbnRcclxuICAgIGxldCBpbnRlcm1pc3Npb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW50ZXJtaXNzaW9uRWwuY2xhc3NMaXN0ID0gJ2NvbmNlcnQgaW50ZXJtaXNzaW9uJztcclxuICAgIC8vaW50ZXJtaXNzaW9uRWwuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgIGludGVybWlzc2lvbkVsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnNcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgPHA+SW50ZXJtaXNzaW9uOiB+MzAgbWludXRlczwvcD5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnggZGVsZXRlLXBpZWNlXCIgaWQ9XCJkZWxldGUtaW50ZXJtaXNzaW9uXCI+PC9pPlxyXG4gICAgICBgO1xyXG5cclxuICAgIC8vQUREIEFQUCBGVU5DVElPTiBIRVJFXHJcbiAgfVxyXG5cclxuICBkZWxldGVJbnRlcm1pc3Npb24oaW50ZXJtaXNzaW9uRWxlbWVudCkge1xyXG4gICAgbGV0IGNsb3NlSW50ZXJtaXNzaW9uID0gaW50ZXJtaXNzaW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnI2RlbGV0ZS1pbnRlcm1pc3Npb24nXHJcbiAgICApO1xyXG4gICAgY2xvc2VJbnRlcm1pc3Npb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcGFyc2VEdXJhdGlvbigpIHtcclxuICAgIHJldHVybiBOdW1iZXIoXHJcbiAgICAgIHRoaXMucXVlcnlTZWxlY3RvcignLnBpZWNlLWluZm8gcDpsYXN0LW9mLXR5cGUnKS50ZXh0Q29udGVudC5zcGxpdChcIidcIilbMF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvL0RyYWcgRnVuY3Rpb25zXHJcblxyXG4gIGRyYWdTdGFydChlKSB7XHJcbiAgICB0aGlzLmRyYWdTdGFydEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcclxuICB9XHJcblxyXG4gIGRyYWdFbnRlcigpIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0xlYXZlKCkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XHJcbiAgfVxyXG5cclxuICBkcmFnT3ZlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBkcmFnRHJvcCgpIHtcclxuICAgIGNvbnN0IGRyYWdFbmRJbmRleCA9ICt0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gICAgVWkuc3dhcEl0ZW1zKGRyYWdTdGFydEluZGV4LCBkcmFnRW5kSW5kZXgpO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XHJcbiAgfVxyXG5cclxuICBzd2FwSXRlbXMoZnJvbUluZGV4LCB0b0luZGV4LCBjb25jZXJ0UGllY2VBcnIpIHtcclxuICAgIGNvbnN0IGl0ZW1PbmUgPSBjb25jZXJ0UGllY2VBcnJbZnJvbUluZGV4XTtcclxuICAgIGNvbnN0IGl0ZW1Ud28gPSBjb25jZXJ0UGllY2VBcnJbdG9JbmRleF07XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhjb25jZXJ0UGllY2VBcnJbZnJvbUluZGV4XSk7XHJcbiAgICBjb25zb2xlLmxvZyhjb25jZXJ0UGllY2VBcnJbdG9JbmRleF0pO1xyXG4gICAgY29uY2VydFBpZWNlQXJyW2Zyb21JbmRleF0gPSBpdGVtVHdvO1xyXG4gICAgY29uY2VydFBpZWNlQXJyW3RvSW5kZXhdID0gaXRlbU9uZTtcclxuXHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEuaW5uZXJIVE1MID0gYGA7XHJcblxyXG4gICAgY29uY2VydFBpZWNlQXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgVWkuYWRkUGllY2VUb0RPTShpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9IT01FUEFHRVxyXG4gIGRpc3BsYXlDb25jZXJ0cyh1c2VyLCBhbGwgPSBmYWxzZSkge1xyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmZ1bGxDb25jZXJ0c0dyaWQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5mdWxsQ29uY2VydHNHcmlkLmlubmVySFRNTCA9IGBgO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAodXNlci5jb25jZXJ0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgbGV0IG5vdGlmaWNhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBub3RpZmljYXRpb25Db250YWluZXIuY2xhc3NMaXN0ID0gJ25vLWNvbmNlcnRzLW5vdGlmaWNhdGlvbic7XHJcbiAgICAgIG5vdGlmaWNhdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tcG9zZXItbmFtZVwiPlZpc2l0IHRoZSBjb25jZXJ0IGJ1aWxkZXIgcGFnZSBhYm92ZSB0byBzdGFydCBidWlsZGluZyBjb25jZXJ0cyE8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGA7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnlvdXJDb25jZXJ0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgVUlTZWxlY3RvcnMueW91ckNvbmNlcnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbkNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgKHVzZXIuZmF2b3JpdGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgLy8gICBsZXQgbm90aWZpY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIC8vICAgbm90aWZpY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdCA9ICduby1mYXZvcml0ZXMtbm90aWZpY2F0aW9uJztcclxuICAgIC8vICAgbm90aWZpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgIC8vICAgICAgICAgICA8cCBjbGFzcz1cIm5vLWZhdm9yaXRlcy1tZXNzYWdlXCI+UGxlYXNlIGJyb3dzZSBjb21wb3NlcnMgdG8gYWRkIHNvbWUgZmF2b3JpdGVzITwvcD5cclxuICAgIC8vICAgICAgIGA7XHJcbiAgICAvLyAgIFVJU2VsZWN0b3JzLmhvbWVTZWFyY2hSZXN1bHRzLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbkNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vU0VFIGhvbWVwYWdlLmpzIExpbmUgODZcclxuICAgIHVzZXIuY29uY2VydHMuZm9yRWFjaCgoY29uY2VydCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGFsbCA9PT0gZmFsc2UgJiYgaW5kZXggPCAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FsbD09PWZhbHNlLCBpbmRleCA8IDMnKTtcclxuICAgICAgICAvL2Z1bGxDb25jZXJ0c0dyaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBsZXQgY29uY2VydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbmNlcnRDb250YWluZXIuY2xhc3NMaXN0ID0gJ3NlYXJjaC1yZXN1bHQnO1xyXG4gICAgICAgIGNvbmNlcnRDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbmNlcnQtaWQtbnVtXCI+JHtjb25jZXJ0LmlkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImNvbmNlcnQtbmFtZVwiIGlkPVwiY29uY2VydC1uYW1lXCI+ICR7Y29uY2VydC50aXRsZVxyXG4gICAgICAgICAgfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHtjb25jZXJ0LnBpZWNlc1xyXG4gICAgICAgICAgICAubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGA8cCBjbGFzcz1cInRpbnktcGllY2UtdGl0bGVcIj4gPHN0cm9uZz4gJHtpdGVtLmNvbXBvc2VyfTwvc3Ryb25nPiAke2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgLnRyaW0oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG4gcmVtb3ZlLWNvbmNlcnQtYnRuXCI+RGVsZXRlIENvbmNlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Zlci1nb2xkXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb25jZXJ0Q29udGFpbmVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhVSVNlbGVjdG9ycy55b3VyQ29uY2VydHNDb250YWluZXIpO1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLnlvdXJDb25jZXJ0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb25jZXJ0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBjb25jZXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uY2VydENvbnRhaW5lci5jbGFzc0xpc3QgPSAnc2VhcmNoLXJlc3VsdCc7XHJcbiAgICAgICAgY29uY2VydENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29uY2VydC1pZC1udW1cIj4ke2NvbmNlcnQuaWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiY29uY2VydC1uYW1lXCIgaWQ9XCJjb25jZXJ0LW5hbWVcIj4gJHtjb25jZXJ0LnRpdGxlXHJcbiAgICAgICAgICB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAke2NvbmNlcnQucGllY2VzXHJcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aW55LXBpZWNlLXRpdGxlXCI+IDxzdHJvbmc+ICR7aXRlbS5jb21wb3Nlcn08L3N0cm9uZz4gJHtpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAudHJpbSgpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmpvaW4oJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG4gcmVtb3ZlLWNvbmNlcnQtYnRuXCI+RGVsZXRlIENvbmNlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Zlci1nb2xkIFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgIFVJU2VsZWN0b3JzLmZ1bGxDb25jZXJ0c0dyaWQuYXBwZW5kQ2hpbGQoY29uY2VydENvbnRhaW5lcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFVJLnJlbW92ZUNvbmNlcnRMaXN0ZW5lcnMoVUlTZWxlY3RvcnMuZnVsbENvbmNlcnRzR3JpZCk7XHJcbiAgICBVSS5yZW1vdmVDb25jZXJ0TGlzdGVuZXJzKFVJU2VsZWN0b3JzLnlvdXJDb25jZXJ0c0NvbnRhaW5lcik7XHJcblxyXG4gICAgLy9USElTIElTIFRIRSBDT1JSRUNUIEJSQUNLRVQgRlVDSyBFU0xJTlQgQU5EIFBSRVRUSUVSLlxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSG92ZXJMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtcmVzdWx0Jyk7XHJcblxyXG4gICAgWy4uLnNlYXJjaFJlc3VsdHNdLmZvckVhY2goKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIFVJLnNob3dHb2xkVW5kZXJsaW5lKTtcclxuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBVSS5oaWRlR29sZFVuZGVybGluZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNvbmNlcnRMaXN0ZW5lcnMoY29udGFpbmVyKSB7XHJcbiAgICBsZXQgY29uY2VydHNMaXN0ID0gY29udGFpbmVyLmNoaWxkcmVuO1xyXG5cclxuICAgIFsuLi5jb25jZXJ0c0xpc3RdLmZvckVhY2goKGNvbmNlcnQpID0+IHtcclxuICAgICAgaWYgKCFjb25jZXJ0LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtY29uY2VydC1idG4nKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25jZXJ0XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnJlbW92ZS1jb25jZXJ0LWJ0bicpXHJcbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5kZWxldGVDb25jZXJ0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDb25jZXJ0KGUpIHtcclxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICBsZXQgc2VsZWN0ZWRDb25jZXJ0SUQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuY29uY2VydC1pZC1udW0nXHJcbiAgICApO1xyXG4gICAgLy9TV0lUQ0ggVE8gU1RPUkFHRSBGVU5DVElPTlxyXG4gICAgbGV0IGRlbGV0ZUNvbmNlcnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuICAgIGRlbGV0ZUNvbmNlcnRVc2VyLmNvbmNlcnRzLmZvckVhY2goKGNvbmNlcnQsIGluZGV4LCBvYmplY3QpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coY29uY2VydC5pZCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKE51bWJlcihzZWxlY3RlZENvbmNlcnRJRC50ZXh0Q29udGVudCkpO1xyXG4gICAgICBpZiAoY29uY2VydC5pZCA9PT0gTnVtYmVyKHNlbGVjdGVkQ29uY2VydElELnRleHRDb250ZW50KSkge1xyXG4gICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL1NUT1JBR0UgRlVOQ1RJT05cclxuICAgIFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIGRlbGV0ZUNvbmNlcnRVc2VyKTtcclxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoZGVsZXRlQ29uY2VydFVzZXIpKTtcclxuICB9XHJcblxyXG4gIC8vV2hlcmUgdG8gY2FsbCB0aGlzP1xyXG4gIHNob3J0ZW5QaWVjZVRpdGxlKHBpZWNlTmFtZXMpIHtcclxuICAgIHBpZWNlTmFtZXMuZm9yRWFjaCgocGllY2UpID0+IHtcclxuICAgICAgbGV0IHBpZWNlVGl0bGVMZW5ndGggPSBwaWVjZS50ZXh0Q29udGVudC5zbGljZSgwLCAyMCkgKyAnLi4uJztcclxuICAgICAgcGllY2UudGV4dENvbnRlbnQgPSBwaWVjZVRpdGxlTGVuZ3RoO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93R29sZFVuZGVybGluZShlKSB7XHJcbiAgICBpZiAoIWUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5ob3Zlci1nb2xkJykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZS50YXJnZXQucXVlcnlTZWxlY3RvcignLmhvdmVyLWdvbGQnKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlR29sZFVuZGVybGluZShlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQucXVlcnlTZWxlY3RvcignLmhvdmVyLWdvbGQnKSkge1xyXG4gICAgICBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuaG92ZXItZ29sZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgaG9tZUNhcmRFbnRlcihjb250YWluZXIpIHtcclxuICAgIGNvbnN0IGZ1bGxGYXZvcml0ZXNHcmlkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLWZhdm9yaXRlcy1ncmlkJyk7XHJcbiAgICBjb25zdCBmdWxsQ29uY2VydHNHcmlkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLWNvbmNlcnRzLWdyaWQnKTtcclxuXHJcbiAgICBmdWxsRmF2b3JpdGVzR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZnVsbENvbmNlcnRzR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIFsuLi5jb250YWluZXIuY2hpbGRyZW5dLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQgPT09IGZ1bGxGYXZvcml0ZXNHcmlkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0WzBdID09PSAnaGVhZGVyLXJvdycpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1tb3JlLWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID09PSAxICYmXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3RbMF0gPT09ICdzZWFyY2gtcmVzdWx0cydcclxuICAgICAgKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0WzFdID09PSAneW91ci1yZWNlbnQtY29uY2VydHMnKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0WzFdID09PSAnZnVsbC1jb25jZXJ0cy1ncmlkJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25jZXJ0c0VudGVyKGNvbnRhaW5lcikge1xyXG4gICAgY29uc3QgZnVsbENvbmNlcnRzR3JpZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnNlYXJjaC1yZXN1bHRzLmZ1bGwtY29uY2VydHMtZ3JpZCdcclxuICAgICk7XHJcblxyXG4gICAgZnVsbENvbmNlcnRzR3JpZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG5cclxuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXJvdy5jb25jZXJ0cy1oZWFkZXItcm93Jykuc3R5bGUuZGlzcGxheSA9XHJcbiAgICAgICdmbGV4JztcclxuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmhlYWRlci1yb3cuY29uY2VydHMtaGVhZGVyLXJvdyAudmlldy1tb3JlLWJ0bidcclxuICAgICkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vQ2hhbmdlIHRoaXNcclxuICAgIGxldCBjdXJyZW50VXNlciA9IFN0b3JhZ2UuZ2V0VXNlcigpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG5cclxuICAgIFVJLmRpc3BsYXlDb25jZXJ0cyhjdXJyZW50VXNlciwgdGhpcy5hbGwgPSBmYWxzZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZmF2b3JpdGVzRW50ZXIoY29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBmdWxsRmF2b3JpdGVzR3JpZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZnVsbC1mYXZvcml0ZXMtZ3JpZCcpO1xyXG4gICAgZnVsbEZhdm9yaXRlc0dyaWQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItcm93Jykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItcm93IC52aWV3LW1vcmUtYnRuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFsuLi5mdWxsRmF2b3JpdGVzR3JpZC5jaGlsZHJlbl0uZm9yRWFjaCgoZmF2b3JpdGUpID0+IHtcclxuICAgICAgaWYgKGZhdm9yaXRlLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlci1uYW1lJykudGV4dENvbnRlbnQubGVuZ3RoID49IDE4KSB7XHJcbiAgICAgICAgZmF2b3JpdGUucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyLW5hbWUnKS5zdHlsZS5mb250U2l6ZSA9ICcxLjJyZW0nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVzdWx0c0V4aXQoZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnZnJvbSByZXN1bHRzIGV4aXQnLCBlLnRhcmdldC5pZCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRyb3BEb3duWW91ckNvbmNlcnRzLmlkKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIuY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFsuLi5VSVNlbGVjdG9ycy5tYWluQ29udGVudElubmVyLmNoaWxkcmVuXS5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9KTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmUnKTtcclxuICAgICAgaWYgKGUudGFyZ2V0ID09PSBVSVNlbGVjdG9ycy5yZXR1cm5Ib21lKSB7XHJcbiAgICAgICAgLy9DaGFuZ2UgdGhpc1xyXG4gICAgICAgIFVJLmhvbWVDYXJkRW50ZXIoVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lcik7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IFVJU2VsZWN0b3JzLm9wZW5Qcm9maWxlKSB7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgZS50YXJnZXQgPT09IFVJU2VsZWN0b3JzLm9wZW5GYXZvcml0ZXMgfHxcclxuICAgICAgICAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29uY2VydC12aWV3LW1vcmUtYnRuJykgJiZcclxuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndmlldy1tb3JlLWJ0bicpKVxyXG4gICAgICApIHtcclxuICAgICAgICBVSS5mYXZvcml0ZXNFbnRlcihVSVNlbGVjdG9ycy5tYWluQ29udGVudElubmVyKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBlLnRhcmdldCA9PT0gVUlTZWxlY3RvcnMub3BlbkNvbmNlcnRzIHx8XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb25jZXJ0LXZpZXctbW9yZS1idG4nKSB8fFxyXG4gICAgICAgIGUudGFyZ2V0LmlkID09PSBVSVNlbGVjdG9ycy5kcm9wRG93bllvdXJDb25jZXJ0cy5pZFxyXG4gICAgICApIHtcclxuICAgICAgICBVSS5jb25jZXJ0c0VudGVyKFVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxNTAwKTtcclxuICB9XHJcbiAgZm9ybWF0UmVzdWx0c0NhcmQoKSB7XHJcbiAgICBjb25zdCBwaWVjZU5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlLW5hbWUnKTtcclxuICAgIHBpZWNlTmFtZXMuZm9yRWFjaCgocGllY2UpID0+IHtcclxuICAgICAgbGV0IHBpZWNlVGl0bGVMZW5ndGggPSBwaWVjZS50ZXh0Q29udGVudC5zbGljZSgwLCAyMCkgKyAnLi4uJztcclxuICAgICAgcGllY2UudGV4dENvbnRlbnQgPSBwaWVjZVRpdGxlTGVuZ3RoO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGVhckNvbXBvc2VyTGlua3MoKSB7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuc2VhcmNoRmllbGQudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHdoaWxlIChVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLnJlbW92ZUNoaWxkKFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MuZmlyc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAoVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5maXJzdENoaWxkKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MucmVtb3ZlQ2hpbGQoVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vQ09NUE9TRVIgUEFHRVxyXG4gIGNsZWFyQ29tcG9zZXJSZXN1bHRzKCkge1xyXG4gICAgVUlTZWxlY3RvcnMucGllY2VEZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgc2hvd0J1dHRvbkVycm9yKGJ1dHRvbiwgbWVzc2FnZSkge1xyXG4gICAgbGV0IGluaXRhbFRleHQgPSBidXR0b24udGV4dENvbnRlbnQ7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGAke21lc3NhZ2V9YDtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGluaXRhbFRleHRcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVJID0gbmV3IFVpKCk7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltZy9Kb2hhbm5lc0JyYWhtcy5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVyby1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtY29udGFpbmVyIGgxLCAucmlnaHQtY29udGFpbmVyIGgxIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LXNlYXJjaC1hcmVhIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNlYXJjaC1hcmVhLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zZWFyY2gtYXJlYSBpbnB1dCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtc2VhcmNoLWFyZWEgaSB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAuNThyZW07XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5jb25jZXJ0LXRpdGxlLWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC10aXRsZS1idG4ge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEgaSB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zZWFyY2gtYXJlYSAuY29uY2VydC10aXRsZSB7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zZWFyY2gtYXJlYS5zaG93IC5jb25jZXJ0LXRpdGxlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNlYXJjaC1hcmVhLnNob3cgLmNvbmNlcnQtdGl0bGUtaW5wdXR7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zZWFyY2gtYXJlYS5zaG93IC5jb25jZXJ0LXRpdGxlLWJ0biB7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5jaGFuZ2UtdGl0bGUtYnRuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEuc2hvdyAuY2hhbmdlLXRpdGxlLWJ0biB7XFxyXFxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgLjNzIGVhc2U7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGVcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5idWlsZGVyLXBpZWNlLWxpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIGhlaWdodDogMHB4O1xcclxcbiAgICBmbGV4OiAzIDEgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1aWxkZXItcGllY2UtbGlzdCBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtaW5mby1sZWZ0LCAucGllY2UtaW5mby1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtaW5mby1sZWZ0IHA6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGEtY29tcG9zZXItaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1pbmZvIHAge1xcclxcbiAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBpZWNlLWluZm8ge1xcclxcbiAgICAvKndpZHRoOiAyNSU7XFxyXFxuICAgICovXFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0LXRpdGxlLmNvbmNlcnQtdGl0bGUtbW9iaWxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQtYnVpbGRlci1hcmVhIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZmxleDogMyAxIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQtYnVpbGRlci10ZXh0LWFyZWEge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21wb3Nlci1pbmZvIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8taW5uZXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC5vdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQgLmFkZC1pbnRlcm1pc3Npb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC5zaG93IC5hZGQtaW50ZXJtaXNzaW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcclxcbiAgICBib3R0b206IC0yMHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaW50ZXJtaXNzaW9uIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAuODVyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC5pbnRlcm1pc3Npb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxyXFxuICAgXFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQgaSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21wb3Nlci1pbWcge1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWluZm8gPiBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5zYXZlLWNvbmNlcnQge1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cyBlYXNlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uc2F2ZS1jb25jZXJ0LmRpc2FibGVkIHtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjYzQzMDJiO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVE9ETzpcXHJcXG5cXHJcXG5GSVggQ09OQ0VSVCBCVUlMREVSIEFSRUEgT04gTU9CSUxFIEFORCBUQUJMRVQuIElUUyBGVUNLRURcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxlZnQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxlZnQtY29udGFpbmVyIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleDogbm9uZTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1aWxkZXItcGllY2UtbGlzdCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBpZWNlLWluZm8tbGVmdCBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBpZWNlLWluZm8tbGVmdCBwOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC42cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb25jZXJ0LWJ1aWxkZXItdGV4dC1hcmVhIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbmNlcnQgLmNvbXBvc2VyLWltZyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcXHJcXG5cXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgLmJ1aWxkZXItcGllY2UtbGlzdCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxlZnQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByaW1hcnktYnRuLmNoYW5nZS10aXRsZS1idG4ge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29uY2VydC10aXRsZS1pbnB1dCB7XFxyXFxuICAgICAgICB3aWR0aDogMjUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb25jZXJ0LWJ1aWxkZXItdGV4dC1hcmVhIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbmNlcnQtdGl0bGUtYnRuIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluZm8taW5uZXItY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb25jZXJ0LXRpdGxlLmNvbmNlcnQtdGl0bGUtbW9iaWxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb21wb3Nlci1pbmZvLCAucGllY2UtaW5mbyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29tcG9zZXItaW5mbyBwLCAucGllY2UtaW5mbyBwIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29tcG9zZXItaW5mbyBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5waWVjZS1pbmZvIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuNXJlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXBwL3N0YXRpYy9jc3MvY29uY2VydC1idWlsZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxPQUFPO0lBQ1AsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixPQUFPO0lBQ1AsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksT0FB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Z0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSwwQkFBMEI7SUFDMUIsb0JBQW9CO0FBQ3hCOztBQUVBOzs7O0NBSUM7O0FBRUQ7O0lBRUk7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixnQkFBZ0I7SUFDcEI7O0lBRUE7O1FBRUksV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7O0lBRWpCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLFlBQVk7UUFDWixjQUFjO0lBQ2xCOzs7SUFHQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZXJvLWJhY2tncm91bmQpO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5yaWdodC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1jb250YWluZXIgaDEsIC5yaWdodC1jb250YWluZXIgaDEge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtc2VhcmNoLWFyZWEge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zZWFyY2gtYXJlYSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LXNlYXJjaC1hcmVhIGlucHV0IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zZWFyY2gtYXJlYSBpIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IC41OHJlbTtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmNvbmNlcnQtdGl0bGUtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0LXRpdGxlLWJ0biB7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zZWFyY2gtYXJlYSBpIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNlYXJjaC1hcmVhIC5jb25jZXJ0LXRpdGxlIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNlYXJjaC1hcmVhLnNob3cgLmNvbmNlcnQtdGl0bGUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEuc2hvdyAuY29uY2VydC10aXRsZS1pbnB1dHtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNlYXJjaC1hcmVhLnNob3cgLmNvbmNlcnQtdGl0bGUtYnRuIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS10aXRsZS1idG4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zZWFyY2gtYXJlYS5zaG93IC5jaGFuZ2UtdGl0bGUtYnRuIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAuM3MgZWFzZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJ1aWxkZXItcGllY2UtbGlzdCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgaGVpZ2h0OiAwcHg7XFxyXFxuICAgIGZsZXg6IDMgMSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnVpbGRlci1waWVjZS1saXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1pbmZvLWxlZnQsIC5waWVjZS1pbmZvLXJpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1pbmZvLWxlZnQgcDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0YS1jb21wb3Nlci1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBpZWNlLWluZm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtaW5mbyB7XFxyXFxuICAgIC8qd2lkdGg6IDI1JTtcXHJcXG4gICAgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQtdGl0bGUuY29uY2VydC10aXRsZS1tb2JpbGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC1idWlsZGVyLWFyZWEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiAwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmbGV4OiAzIDEgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC1idWlsZGVyLXRleHQtYXJlYSB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWluZm8ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1pbm5lci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0Lm92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydCAuYWRkLWludGVybWlzc2lvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0LnNob3cgLmFkZC1pbnRlcm1pc3Npb24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxyXFxuICAgIGJvdHRvbTogLTIwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnRlcm1pc3Npb24gcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IC44NXJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0LmludGVybWlzc2lvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXHJcXG4gICBcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydCBpIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWltZyB7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltZy9Kb2hhbm5lc0JyYWhtcy5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWluZm8gPiBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5zYXZlLWNvbmNlcnQge1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cyBlYXNlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uc2F2ZS1jb25jZXJ0LmRpc2FibGVkIHtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjYzQzMDJiO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVE9ETzpcXHJcXG5cXHJcXG5GSVggQ09OQ0VSVCBCVUlMREVSIEFSRUEgT04gTU9CSUxFIEFORCBUQUJMRVQuIElUUyBGVUNLRURcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxlZnQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxlZnQtY29udGFpbmVyIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleDogbm9uZTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1aWxkZXItcGllY2UtbGlzdCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBpZWNlLWluZm8tbGVmdCBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBpZWNlLWluZm8tbGVmdCBwOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC42cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb25jZXJ0LWJ1aWxkZXItdGV4dC1hcmVhIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbmNlcnQgLmNvbXBvc2VyLWltZyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcXHJcXG5cXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgLmJ1aWxkZXItcGllY2UtbGlzdCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxlZnQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByaW1hcnktYnRuLmNoYW5nZS10aXRsZS1idG4ge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29uY2VydC10aXRsZS1pbnB1dCB7XFxyXFxuICAgICAgICB3aWR0aDogMjUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb25jZXJ0LWJ1aWxkZXItdGV4dC1hcmVhIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbmNlcnQtdGl0bGUtYnRuIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluZm8taW5uZXItY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb25jZXJ0LXRpdGxlLmNvbmNlcnQtdGl0bGUtbW9iaWxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb21wb3Nlci1pbmZvLCAucGllY2UtaW5mbyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29tcG9zZXItaW5mbyBwLCAucGllY2UtaW5mbyBwIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29tcG9zZXItaW5mbyBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5waWVjZS1pbmZvIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuNXJlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nZ2VkLWluIGltZyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1yaWdodCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgdG9wOiAxMCU7XFxyXFxuICByaWdodDogNSU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSBsaSB7XFxyXFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAvKm1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgXFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyBsaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWNkMjE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50LWFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50LWFyZWEtaW5uZXIge1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYS1pbm5lci5yZW1vdmUge1xcclxcbiAgYW5pbWF0aW9uOiAxcyByZW1vdmUtbWFpbjtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJlbW92ZS1tYWluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyBpIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMsIC55b3VyLXJlY2VudC1jb25jZXJ0cyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWdhcDogMjBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMudXNlci1wcm9maWxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAuY29tcG9zZXItbmFtZSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAuY29uY2VydC1uYW1lIHtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCAudGlueS1waWVjZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQubGVhdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdHMuZnVsbC1mYXZvcml0ZXMtZ3JpZCwgLnNlYXJjaC1yZXN1bHRzLmZ1bGwtY29uY2VydHMtZ3JpZCB7XFxyXFxuICBcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmZ1bGwtZmF2b3JpdGVzLWdyaWQuYW5pbWF0ZSB7XFxyXFxuICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyLWdvbGQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAuNXJlbTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXItZ29sZC5zaG93IHtcXHJcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHJpZ2h0OiAyMCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1ZGlvLXBsYXllci1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi52aXNpdC1wYWdlIHtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbmNlcnQtaWQtbnVtIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXVzZXJuYW1lICB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4ucmVtb3ZlLWNvbmNlcnQtYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNDMwMmI7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnlvdXItcmVjZW50LWNvbmNlcnRzLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG9wYWNpdHl7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29uY2VydC1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbjogLjVyZW07O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY29udGVudC1hcmVhLWlubmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLW1vYmlsZS1pY29ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZWZ0LW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByaW1hcnktYnRuLnJlbW92ZS1jb25jZXJ0LWJ0biB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXBwL3N0YXRpYy9jc3MvaG9tZXBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsT0FBTztFQUNQLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEI7R0FDQztBQUNIOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7O0VBRXRCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjOztFQUVkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COzs7O0FBSUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixPQUFPOztBQUVUOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7OztBQUdyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7O0VBRVo7QUFDRjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLDJEQUEyRDtBQUM3RDs7OztBQUlBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRSwyQkFBMkI7QUFDN0I7Ozs7QUFJQTs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtHQUNHLFVBQVU7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhOztBQUVmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7OztBQUdBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5Qjs7QUFFM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7O0FBSUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBOzs7RUFHRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7OztBQUdBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2dlZC1pbiBpbWcge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcmlnaHQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHRvcDogMTAlO1xcclxcbiAgcmlnaHQ6IDUlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUgbGkge1xcclxcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgLyptYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIFxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgXFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGkge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjZDIxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhLWlubmVyIHtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgbWF4LWhlaWdodDogOTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50LWFyZWEtaW5uZXIucmVtb3ZlIHtcXHJcXG4gIGFuaW1hdGlvbjogMXMgcmVtb3ZlLW1haW47XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyByZW1vdmUtbWFpbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgaSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzLCAueW91ci1yZWNlbnQtY29uY2VydHMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1nYXA6IDIwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzLnVzZXItcHJvZmlsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQgLmNvbXBvc2VyLW5hbWUge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQgLmNvbmNlcnQtbmFtZSB7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQgLnRpbnktcGllY2UtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LmxlYXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzLmZ1bGwtZmF2b3JpdGVzLWdyaWQsIC5zZWFyY2gtcmVzdWx0cy5mdWxsLWNvbmNlcnRzLWdyaWQge1xcclxcbiAgXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBhbmltYXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5mdWxsLWZhdm9yaXRlcy1ncmlkLmFuaW1hdGUge1xcclxcbiAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5ob3Zlci1nb2xkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogLjVyZW07XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyLWdvbGQuc2hvdyB7XFxyXFxuICBhbmltYXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5jb21wb3Nlci1pbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICByaWdodDogMjAlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1wbGF5ZXItY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMCU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWltYWdlIHtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4udmlzaXQtcGFnZSB7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb25jZXJ0LWlkLW51bSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC11c2VybmFtZSAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLnJlbW92ZS1jb25jZXJ0LWJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQzMDJiO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi55b3VyLXJlY2VudC1jb25jZXJ0cy5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBvcGFjaXR5e1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jb250YWluZXIge1xcclxcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbmNlcnQtbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW46IC41cmVtOztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRlbnQtYXJlYS1pbm5lciB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaG9tZS1tb2JpbGUtaWNvbnMge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGVmdC1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcmltYXJ5LWJ0bi5yZW1vdmUtY29uY2VydC1idG4ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQ6ICM0MjU3YjI7XFxyXFxuICAgIC0taGVyby1iYWNrZ3JvdW5kOiAjM2I0YzliO1xcclxcbiAgICAtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQ6ICMzY2NmY2Y7XFxyXFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kOiAjZjZmN2ZiO1xcclxcbiAgICAtLWdvbGQ6ICNmYWNkMjE7XFxyXFxuICAgIC0tZGVmYXVsdC1zaGFkb3c6IDBweCAxM3B4IDI2cHggIzAwMDAwMDJGO1xcclxcbiAgICAtLXN1Y2Nlc3MtY29sb3I6ICMyZWNjNzE7XFxyXFxuICAgIC0tZXJyb3ItY29sb3I6ICNlNzRjM2M7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZGluZy1uYXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubGFuZGluZy1uYXYgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS10aXRsZSB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSBhLCAuc2l0ZS10aXRsZSBhIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSBhOmhvdmVyLCAubmF2LXJpZ2h0IGxpIGE6aG92ZXIsIC5zaXRlLXRpdGxlIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogcmdiYSgxODksIDE5NSwgMTk5LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYSA+ICoge1xcclxcbiAgICBtYXJnaW46IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcmlnaHQgbGkge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtbW9iaWxlLWljb25zIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItb3ZlcmxheSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRvcDogOCU7XFxyXFxuICAgIC8qbGVmdDogMjYlOyovXFxyXFxuICAgIHJpZ2h0OiAyMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd246aG92ZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biAucHJpbWFyeS1idG4ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtYmFyLWZpZWxkIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1maWVsZDppbnZhbGlkIHtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEuZmEtdGltZXMuY2xvc2Utc2VhcmNoIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtaWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5oZXJvLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZXJvLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXItbGVmdCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXRleHQtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uZ2V0LXN0YXJ0ZWQtYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhY2hlci1wYXJlbnQtbGlua3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhY2hlci1wYXJlbnQtbGlua3MgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jYXJvdXNlbCB7XFxyXFxuICAgIGhlaWdodDogNzUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgICAvKiBDU1MgY2hhbmdlIGluIEpTICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogZ3JleTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAvKiBDaGFuZ2UgZmxleC9ub25lICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWNvbnRhaW5lciA+IGkge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGhpcmQtcGFydHktYnV0dG9ucyB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biBwIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIHtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY29udGFpbmVyIHNlbGVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IC43NXJlbSAycmVtIC43NXJlbSAuM3JlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGJvcmRlcjogMnB4IGdyZXkgc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2Nsb3NlLXNpZ24taW4sICNjbG9zZS1zaWduLXVwIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlydGhkYXktc2VsZWN0b3Ige1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIGxhYmVsIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY29sb3I6ICNjMmM2ZDQ7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5zdWNjZXNzIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuc3VjY2VzcyBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5lcnJvciBpbnB1dCAge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5lcnJvciAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWdpc3Rlci1idG4sIC5sb2dpbi1idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWdpc3Rlci1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjNmQ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1idG4gYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBoMSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IC41MHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tYXJlYSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbnMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tYnV0dG9ucyAuc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZCBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQ6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyBwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiA2MiU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuc3VjY2VzcyBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuZXJyb3IgaW5wdXQgIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5lcnJvciBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufSBcXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxuICAgIC8qdmlzaWJpbGl0eTogaGlkZGVuOyovXFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5iaWctbG9naW4tYnRuIHtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNicm93c2UtbW9kYWwge1xcclxcbiAgICAvKiBDSEFOR0UgV0lUSCBKQVZBU0NJUFQgKi9cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgIFxcclxcbiAgICAvKnRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlOyovXFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5icm93c2UtbW9kYWwtYXJlYS5zaG93IHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYnJvd3NlLWhlYWRlciBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLWhlYWRlciB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5icm93c2UtY29tcG9zZXJzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXIgaDEgIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyLWNvbXBvc2VycyB7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5yYW5kb20tY29tcG9zZXItbGlua3MgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVyby1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGFuZGluZy1uYXYge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdi1sZWZ0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS10aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vYmlsZS1zZWFyY2gtaWNvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICB3aWR0aDogNzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICAgICAgbGVmdDogMjAlO1xcclxcbiAgICAgICAgdG9wOiA3LjUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5icm93c2UtbW9kYWwtYXJlYSB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcXHJcXG4gICAgXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgLypcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAqL1xcclxcbiAgICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS10aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcXHJcXG4gICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2LXJpZ2h0IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgICAgICB0b3A6IDklO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBsZWZ0OiAwOyAgICBcXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRoaXJkLXBhcnR5LWJ1dHRvbnMge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aGlyZC1wYXJ0eS1idXR0b25zIC5zZWNvbmRhcnktYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnNlbGVjdC1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWxlY3QtY29udGFpbmVyIHNlbGVjdCB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWZvcm0gbGFiZWwge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAuM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9ybS1maWVsZCB7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJpbWFyeS1idG4ucmVnaXN0ZXItYnRuLCAucHJpbWFyeS1idG4ubG9naW4tYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtYmFyLW92ZXJsYXkge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlYXJjaC1yZXN1bHQtZG93biBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5icm93c2UtbW9kYWwtYXJlYSB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hcHAvc3RhdGljL2Nzcy9sYW5kaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLHdCQUF3QjtJQUN4QixzQkFBc0I7O0FBRTFCOzs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJ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QVk7UUFDWixXQUFXO1FBQ1gsY0FBYztJQUNsQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFFBQVE7SUFDWjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kOiAjNDI1N2IyO1xcclxcbiAgICAtLWhlcm8tYmFja2dyb3VuZDogIzNiNGM5YjtcXHJcXG4gICAgLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kOiAjM2NjZmNmO1xcclxcbiAgICAtLW1haW4tYmFja2dyb3VuZDogI2Y2ZjdmYjtcXHJcXG4gICAgLS1nb2xkOiAjZmFjZDIxO1xcclxcbiAgICAtLWRlZmF1bHQtc2hhZG93OiAwcHggMTNweCAyNnB4ICMwMDAwMDAyRjtcXHJcXG4gICAgLS1zdWNjZXNzLWNvbG9yOiAjMmVjYzcxO1xcclxcbiAgICAtLWVycm9yLWNvbG9yOiAjZTc0YzNjO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctbmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctbmF2IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtdGl0bGUge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYSwgLnNpdGUtdGl0bGUgYSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYTpob3ZlciwgLm5hdi1yaWdodCBsaSBhOmhvdmVyLCAuc2l0ZS10aXRsZSBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMTg5LCAxOTUsIDE5OSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIGEgPiAqIHtcXHJcXG4gICAgbWFyZ2luOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IGxpIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lLW1vYmlsZS1pY29ucyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLW92ZXJsYXkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0b3A6IDglO1xcclxcbiAgICAvKmxlZnQ6IDI2JTsqL1xcclxcbiAgICByaWdodDogMjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd24gLnByaW1hcnktYnRuIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1maWVsZCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItZmllbGQ6aW52YWxpZCB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLmZhLXRpbWVzLmNsb3NlLXNlYXJjaCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVyby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVyby1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyLWxlZnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLmdldC1zdGFydGVkLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYWNoZXItcGFyZW50LWxpbmtzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYWNoZXItcGFyZW50LWxpbmtzIGEge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwge1xcclxcbiAgICBoZWlnaHQ6IDc1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsIGltZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgLyogQ1NTIGNoYW5nZSBpbiBKUyAqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6IGdyZXk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLyogQ2hhbmdlIGZsZXgvbm9uZSAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIgPiBpIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoaXJkLXBhcnR5LWJ1dHRvbnMge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4gaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4gcCB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSB7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgICBwYWRkaW5nOiAuNzVyZW0gMnJlbSAuNzVyZW0gLjNyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICBib3JkZXI6IDJweCBncmV5IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNjbG9zZS1zaWduLWluLCAjY2xvc2Utc2lnbi11cCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpcnRoZGF5LXNlbGVjdG9yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCBsYWJlbCB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiAjYzJjNmQ0O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuc3VjY2VzcyBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgaW5wdXQgIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLmVycm9yIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59IFxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmVycm9yLXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgLmVycm9yLXRleHQge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBmb250LXNpemU6IC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0ZXItYnRuLCAubG9naW4tYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0ZXItYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzZkNDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnRuIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDE1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaDEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAuNTByZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWFyZWEge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1idXR0b25zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbnMgLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogNjIlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5zdWNjZXNzIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLmVycm9yIGlucHV0ICB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuZXJyb3IgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmVycm9yLXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbiAgICAvKnZpc2liaWxpdHk6IGhpZGRlbjsqL1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uYmlnLWxvZ2luLWJ0biB7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYnJvd3NlLW1vZGFsIHtcXHJcXG4gICAgLyogQ0hBTkdFIFdJVEggSkFWQVNDSVBUICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1tb2RhbC1hcmVhIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICBcXHJcXG4gICAgLyp0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsqL1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnJvd3NlLW1vZGFsLWFyZWEuc2hvdyB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJyb3dzZS1oZWFkZXIgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1oZWFkZXIge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLWNvbXBvc2VycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyIGgxICB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlci1jb21wb3NlcnMge1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFuZG9tLWNvbXBvc2VyLWxpbmtzIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlcm8tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxhbmRpbmctbmF2IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXYtbGVmdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICB3aWR0aDogMzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb2JpbGUtc2VhcmNoLWljb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogOTAlO1xcclxcbiAgICAgICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgICAgIGxlZnQ6IDIwJTtcXHJcXG4gICAgICAgIHRvcDogNy41JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICAgIFxcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIC8qXFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgKi9cXHJcXG4gICAgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdi1yaWdodCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICAgICAgdG9wOiA5JTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbGVmdDogMDsgICAgXFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aGlyZC1wYXJ0eS1idXR0b25zIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGhpcmQtcGFydHktYnV0dG9ucyAuc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgICAgICBtYXJnaW46IC41cmVtIDA7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5zZWxlY3QtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbi11cC1mb3JtIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLjNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tZmllbGQge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByaW1hcnktYnRuLnJlZ2lzdGVyLWJ0biwgLnByaW1hcnktYnRuLmxvZ2luLWJ0biB7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLWJhci1vdmVybGF5IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtcmVzdWx0LWRvd24gcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==