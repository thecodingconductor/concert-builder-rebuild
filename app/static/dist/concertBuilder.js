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
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/storage */ "./app/static/js-modules/modules/storage.js");
/* harmony import */ var _modules_requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/requests */ "./app/static/js-modules/modules/requests.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/ui */ "./app/static/js-modules/modules/ui.js");
/* harmony import */ var _modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/UISelectors */ "./app/static/js-modules/modules/UISelectors.js");
/* harmony import */ var _modules_sessionObj__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/sessionObj */ "./app/static/js-modules/modules/sessionObj.js");
/* harmony import */ var _css_landing_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../css/landing.css */ "./app/static/css/landing.css");
/* harmony import */ var _css_landing_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_landing_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_homepage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../css/homepage.css */ "./app/static/css/homepage.css");
/* harmony import */ var _css_homepage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_homepage_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_concert_builder_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../css/concert-builder.css */ "./app/static/css/concert-builder.css");
/* harmony import */ var _css_concert_builder_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_concert_builder_css__WEBPACK_IMPORTED_MODULE_11__);













let concertPieceArr = [];
let favoritesResults = [];
let dragStartIndex;
// let number = 0;

//Initialize Base 
window.addEventListener('DOMContentLoaded', _modules_app__WEBPACK_IMPORTED_MODULE_0__["App"].initBase);





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




_modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].addToConcert.forEach((button) => {
    button.addEventListener('click', _modules_app__WEBPACK_IMPORTED_MODULE_0__["App"].addPieceToConcertArr);
});

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].searchFavorites.addEventListener('keyup', () => {
    _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].clearFaveList();
    _modules_requests__WEBPACK_IMPORTED_MODULE_5__["Requests"].favoritesSearch();
});

//showAddIntermission
_modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].concertBuilderArea.addEventListener('mouseover', _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].showIntermission);

_modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].concertTitleBtn.addEventListener('click', _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].saveConcertTitle);
_modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].changeTitleBtn.addEventListener('click', _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].removeConcertTitle);
window.addEventListener(
    'DOMContentLoaded',
    _modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].updateConcertDuration(_modules_ui__WEBPACK_IMPORTED_MODULE_6__["UI"].getConcertDuration(concertPieceArr))
);

//TODO FIX THIS
_modules_UISelectors__WEBPACK_IMPORTED_MODULE_7__["UISelectors"].saveConcertBtn.addEventListener('click', _modules_app__WEBPACK_IMPORTED_MODULE_0__["App"].saveConcert);
window.addEventListener('DOMContentLoaded', _modules_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"].getConcert);

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
    this.concertLengthCheck = document.getElementById('concert-length-check');


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
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertLengthCheck.style.display = 'none';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderTextArea.style.backgroundColor = 'lightblue';
    } else if (duration < 90 && duration > 0) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertConclusion.textContent = `Concert is potentially too short.`;
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderTextArea.style.backgroundColor = '#cdb21f';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertLengthCheck.style.display = 'none';
    } else if (duration >= 90 && duration <= 120) {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertConclusion.textContent = `Perfect concert length!`;
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderTextArea.style.backgroundColor = '#2e773f';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertLengthCheck.style.display = 'block';
    } else {
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertConclusion.textContent = `Concert is potentially too long...`;
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertBuilderTextArea.style.backgroundColor = '#a7303e';
      _UISelectors__WEBPACK_IMPORTED_MODULE_0__["UISelectors"].concertLengthCheck.style.display = 'none';
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
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.main-container {\r\n    flex: 1;\r\n    width: 100%;\r\n    background-color: lightpink;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.left-container {\r\n    background-color: var(--hero-background);\r\n    width: 40%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.right-container {\r\n    height: 100%;\r\n    flex: 1;\r\n    background-color: lightseagreen;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.left-container h1, .right-container h1 {\r\n    color: #fff;\r\n}\r\n\r\n.left-search-area {\r\n    width: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.right-search-area-container {\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n.right-search-area {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.left-search-area input {\r\n    flex: 1;\r\n    line-height: 2rem;\r\n    \r\n    border-radius: 5px;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border: none;\r\n    outline: none;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.left-search-area i {\r\n    color: #000;\r\n    background: #fff;\r\n    padding: .58rem;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.concert-title-input {\r\n    width: 50%;\r\n    line-height: 2rem;\r\n    border-radius: 5px;\r\n    border: none;\r\n    outline: none;\r\n    opacity: 1;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.concert-title-btn {\r\n    width: 25%;\r\n    opacity: 1;\r\n}\r\n\r\n.right-search-area i {\r\n    color: #000;\r\n    padding: 9px;\r\n    background-color: #fff;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n.right-search-area .concert-title {\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.right-search-area.show .concert-title {\r\n    opacity: 1;\r\n}\r\n\r\n.right-search-area.show .concert-title-input{\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.right-search-area.show .concert-title-btn {\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.change-title-btn {\r\n    position: absolute;\r\n    width: 25%;\r\n    right: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.right-search-area.show .change-title-btn {\r\n    transition: visibility .3s ease;\r\n    visibility: visible\r\n    \r\n}\r\n\r\n\r\n\r\n.builder-piece-list {\r\n    list-style-type: none;\r\n    color: #fff;\r\n    padding: 0;\r\n    width: 80%;\r\n    overflow-y: scroll;\r\n    height: 0px;\r\n    flex: 3 1 auto;\r\n}\r\n\r\n\r\n.builder-piece-list li {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    height: 7rem;\r\n    background-color: #303f82;\r\n    /* border: 2px solid #243273; */\r\n    border-radius: 5px;\r\n    margin: 1rem 0;\r\n}\r\n\r\n\r\n.piece-info-left, .piece-info-right {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 50%;\r\n}\r\n\r\n.piece-info-left {\r\n    align-items: flex-start;\r\n    margin-left: 2rem;\r\n    max-height: 100%;\r\n}\r\n\r\n.piece-info-right {\r\n    margin-right: 2rem;\r\n    align-items: flex-end;\r\n}\r\n\r\n.piece-info-left p {\r\n    margin: 0;\r\n    font-size: .75rem;\r\n}\r\n\r\n.piece-info-left p:nth-of-type(1) {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    letter-spacing: .05rem;\r\n}\r\n\r\n.piece-info-left p:nth-of-type(2) {\r\n    font-size: .8rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.piece-info-left p:last-of-type {\r\n    font-size: .8rem;\r\n    text-align: center;\r\n}\r\n\r\n.data-composer-info {\r\n    display: none;\r\n}\r\n\r\n.piece-info p {\r\n    font-size: .75rem;\r\n}\r\n\r\n.piece-info {\r\n    /*width: 25%;\r\n    */\r\n}\r\n\r\n.concert-title.concert-title-mobile {\r\n    display: none;\r\n}\r\n\r\n.concert-builder-area {\r\n    background-color: #fff;\r\n    color: #000;\r\n    width: 80%;\r\n    height: 0px;\r\n    box-shadow: var(--default-shadow);\r\n    border-radius: 5px;\r\n    flex: 3 1 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.concert-builder-text-area {\r\n    padding: 0.5rem 2rem;\r\n    width: 80%;\r\n    /* flex: 1; */\r\n    background-color: lightblue;\r\n    display: flex;\r\n    /* flex-direction: column; */\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.column-left {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 1rem 0;\r\n    \r\n}\r\n\r\n.inner-split-left, .inner-split-right {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: auto 1rem;\r\n}\r\n\r\n.inner-split-right {\r\n    align-items: flex-start;\r\n}\r\n\r\n.inner-split-right > * {\r\n    margin: 0;\r\n}\r\n\r\n.concert-length-check {\r\n    font-size: 1.5rem;\r\n    display: none;\r\n}\r\n\r\n.concert-builder-text-area p {\r\n    /* margin: .5rem auto; */\r\n}\r\n\r\n.composer-info {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.concert {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    margin: auto;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    margin: 10px 0;\r\n    box-shadow: var(--default-shadow);\r\n    position: relative;\r\n}\r\n\r\n.info-inner-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 70%;\r\n    align-items: center;\r\n}\r\n\r\n.concert.over {\r\n    background-color: #eaeaea;\r\n}\r\n\r\n.concert .add-intermission {\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 200px;\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -100px;\r\n    opacity: 0;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.concert.show .add-intermission {\r\n    display: block;\r\n    background-color: grey;\r\n    position: absolute;\r\n    transition: all .5s ease;\r\n    bottom: -20px;\r\n    opacity: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-intermission p {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    font-size: .85rem;\r\n    color: #fff;\r\n}\r\n\r\n.concert.intermission {\r\n    background: lightgrey;\r\n   \r\n    height: 30px;\r\n}\r\n\r\n.concert i {\r\n    cursor: pointer;\r\n    margin: 0 1rem;\r\n}\r\n\r\n.composer-img {\r\n    height: 100px;\r\n    width: 100px;\r\n    border-radius: 50%;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n\r\n    position: static;\r\n}\r\n\r\n.composer-info > p:first-child {\r\n    font-weight: bold;\r\n}\r\n\r\n.primary-btn.save-concert {\r\n    transition: background-color .5s ease;\r\n  \r\n}\r\n\r\n.primary-btn.save-concert.disabled {\r\n    \r\n    background-color:  #c4302b;\r\n    pointer-events: none;\r\n}\r\n\r\n/* TODO:\r\n\r\nFIX CONCERT BUILDER AREA ON MOBILE AND TABLET. ITS FUCKED\r\n\r\n*/\r\n\r\n@media(max-width: 768px) {\r\n\r\n    .main-container {\r\n        flex-direction: column;\r\n        justify-content: normal;\r\n        align-items: stretch;\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .left-container {\r\n        \r\n        width: 100%;\r\n    }\r\n\r\n    .left-container h1 {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .right-container {\r\n        flex: none;\r\n        height: 100vh;\r\n\r\n    }\r\n\r\n    .builder-piece-list {\r\n        height: auto;\r\n    }\r\n\r\n    .piece-info-left p {\r\n        font-size: .7rem;\r\n    }\r\n\r\n    .piece-info-left p:last-of-type {\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .concert-builder-text-area {\r\n        margin-bottom: 3rem;\r\n    }\r\n\r\n    .concert .composer-img {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n\r\n    body {\r\n        height: auto;\r\n        overflow: auto;\r\n    }\r\n    \r\n\r\n    .builder-piece-list {\r\n        height: auto;\r\n    }\r\n\r\n    .left-container {\r\n        height: 100vh;\r\n    }\r\n\r\n    .primary-btn.change-title-btn {\r\n        width: 50%;\r\n    }\r\n    .concert-title-input {\r\n        width: 25%;\r\n    }\r\n\r\n    .concert-builder-text-area {\r\n        margin-top: 2rem;\r\n    }\r\n\r\n    .concert-title-btn {\r\n        width: 50%;\r\n    }\r\n\r\n    .info-inner-container {\r\n        width: 50%;\r\n        flex-direction: column;\r\n    }\r\n    .concert-title.concert-title-mobile {\r\n        display: block;\r\n    }\r\n\r\n    .composer-info, .piece-info {\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .composer-info p, .piece-info p {\r\n        margin: 0;\r\n    }\r\n\r\n    .composer-info p {\r\n        font-size: .75rem;\r\n    }\r\n\r\n    .piece-info p {\r\n        font-size: .5rem;\r\n        text-align: center;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://app/static/css/concert-builder.css"],"names":[],"mappings":"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","sourcesContent":["\r\n.main-container {\r\n    flex: 1;\r\n    width: 100%;\r\n    background-color: lightpink;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.left-container {\r\n    background-color: var(--hero-background);\r\n    width: 40%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.right-container {\r\n    height: 100%;\r\n    flex: 1;\r\n    background-color: lightseagreen;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.left-container h1, .right-container h1 {\r\n    color: #fff;\r\n}\r\n\r\n.left-search-area {\r\n    width: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.right-search-area-container {\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n    justify-content: space-between;\r\n    position: relative;\r\n}\r\n\r\n.right-search-area {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.left-search-area input {\r\n    flex: 1;\r\n    line-height: 2rem;\r\n    \r\n    border-radius: 5px;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border: none;\r\n    outline: none;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.left-search-area i {\r\n    color: #000;\r\n    background: #fff;\r\n    padding: .58rem;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.concert-title-input {\r\n    width: 50%;\r\n    line-height: 2rem;\r\n    border-radius: 5px;\r\n    border: none;\r\n    outline: none;\r\n    opacity: 1;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.concert-title-btn {\r\n    width: 25%;\r\n    opacity: 1;\r\n}\r\n\r\n.right-search-area i {\r\n    color: #000;\r\n    padding: 9px;\r\n    background-color: #fff;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n.right-search-area .concert-title {\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.right-search-area.show .concert-title {\r\n    opacity: 1;\r\n}\r\n\r\n.right-search-area.show .concert-title-input{\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.right-search-area.show .concert-title-btn {\r\n    transition: opacity .3s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.change-title-btn {\r\n    position: absolute;\r\n    width: 25%;\r\n    right: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.right-search-area.show .change-title-btn {\r\n    transition: visibility .3s ease;\r\n    visibility: visible\r\n    \r\n}\r\n\r\n\r\n\r\n.builder-piece-list {\r\n    list-style-type: none;\r\n    color: #fff;\r\n    padding: 0;\r\n    width: 80%;\r\n    overflow-y: scroll;\r\n    height: 0px;\r\n    flex: 3 1 auto;\r\n}\r\n\r\n\r\n.builder-piece-list li {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    height: 7rem;\r\n    background-color: #303f82;\r\n    /* border: 2px solid #243273; */\r\n    border-radius: 5px;\r\n    margin: 1rem 0;\r\n}\r\n\r\n\r\n.piece-info-left, .piece-info-right {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 50%;\r\n}\r\n\r\n.piece-info-left {\r\n    align-items: flex-start;\r\n    margin-left: 2rem;\r\n    max-height: 100%;\r\n}\r\n\r\n.piece-info-right {\r\n    margin-right: 2rem;\r\n    align-items: flex-end;\r\n}\r\n\r\n.piece-info-left p {\r\n    margin: 0;\r\n    font-size: .75rem;\r\n}\r\n\r\n.piece-info-left p:nth-of-type(1) {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    letter-spacing: .05rem;\r\n}\r\n\r\n.piece-info-left p:nth-of-type(2) {\r\n    font-size: .8rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.piece-info-left p:last-of-type {\r\n    font-size: .8rem;\r\n    text-align: center;\r\n}\r\n\r\n.data-composer-info {\r\n    display: none;\r\n}\r\n\r\n.piece-info p {\r\n    font-size: .75rem;\r\n}\r\n\r\n.piece-info {\r\n    /*width: 25%;\r\n    */\r\n}\r\n\r\n.concert-title.concert-title-mobile {\r\n    display: none;\r\n}\r\n\r\n.concert-builder-area {\r\n    background-color: #fff;\r\n    color: #000;\r\n    width: 80%;\r\n    height: 0px;\r\n    box-shadow: var(--default-shadow);\r\n    border-radius: 5px;\r\n    flex: 3 1 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.concert-builder-text-area {\r\n    padding: 0.5rem 2rem;\r\n    width: 80%;\r\n    /* flex: 1; */\r\n    background-color: lightblue;\r\n    display: flex;\r\n    /* flex-direction: column; */\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.column-left {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    margin: 1rem 0;\r\n    \r\n}\r\n\r\n.inner-split-left, .inner-split-right {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: auto 1rem;\r\n}\r\n\r\n.inner-split-right {\r\n    align-items: flex-start;\r\n}\r\n\r\n.inner-split-right > * {\r\n    margin: 0;\r\n}\r\n\r\n.concert-length-check {\r\n    font-size: 1.5rem;\r\n    display: none;\r\n}\r\n\r\n.concert-builder-text-area p {\r\n    /* margin: .5rem auto; */\r\n}\r\n\r\n.composer-info {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.concert {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    margin: auto;\r\n    border: 2px solid grey;\r\n    border-radius: 5px;\r\n    margin: 10px 0;\r\n    box-shadow: var(--default-shadow);\r\n    position: relative;\r\n}\r\n\r\n.info-inner-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 70%;\r\n    align-items: center;\r\n}\r\n\r\n.concert.over {\r\n    background-color: #eaeaea;\r\n}\r\n\r\n.concert .add-intermission {\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 200px;\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -100px;\r\n    opacity: 0;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.concert.show .add-intermission {\r\n    display: block;\r\n    background-color: grey;\r\n    position: absolute;\r\n    transition: all .5s ease;\r\n    bottom: -20px;\r\n    opacity: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-intermission p {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    font-size: .85rem;\r\n    color: #fff;\r\n}\r\n\r\n.concert.intermission {\r\n    background: lightgrey;\r\n   \r\n    height: 30px;\r\n}\r\n\r\n.concert i {\r\n    cursor: pointer;\r\n    margin: 0 1rem;\r\n}\r\n\r\n.composer-img {\r\n    height: 100px;\r\n    width: 100px;\r\n    border-radius: 50%;\r\n    background-image: url('../img/JohannesBrahms.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n\r\n    position: static;\r\n}\r\n\r\n.composer-info > p:first-child {\r\n    font-weight: bold;\r\n}\r\n\r\n.primary-btn.save-concert {\r\n    transition: background-color .5s ease;\r\n  \r\n}\r\n\r\n.primary-btn.save-concert.disabled {\r\n    \r\n    background-color:  #c4302b;\r\n    pointer-events: none;\r\n}\r\n\r\n/* TODO:\r\n\r\nFIX CONCERT BUILDER AREA ON MOBILE AND TABLET. ITS FUCKED\r\n\r\n*/\r\n\r\n@media(max-width: 768px) {\r\n\r\n    .main-container {\r\n        flex-direction: column;\r\n        justify-content: normal;\r\n        align-items: stretch;\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .left-container {\r\n        \r\n        width: 100%;\r\n    }\r\n\r\n    .left-container h1 {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .right-container {\r\n        flex: none;\r\n        height: 100vh;\r\n\r\n    }\r\n\r\n    .builder-piece-list {\r\n        height: auto;\r\n    }\r\n\r\n    .piece-info-left p {\r\n        font-size: .7rem;\r\n    }\r\n\r\n    .piece-info-left p:last-of-type {\r\n        font-size: .6rem;\r\n    }\r\n\r\n    .concert-builder-text-area {\r\n        margin-bottom: 3rem;\r\n    }\r\n\r\n    .concert .composer-img {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n\r\n    body {\r\n        height: auto;\r\n        overflow: auto;\r\n    }\r\n    \r\n\r\n    .builder-piece-list {\r\n        height: auto;\r\n    }\r\n\r\n    .left-container {\r\n        height: 100vh;\r\n    }\r\n\r\n    .primary-btn.change-title-btn {\r\n        width: 50%;\r\n    }\r\n    .concert-title-input {\r\n        width: 25%;\r\n    }\r\n\r\n    .concert-builder-text-area {\r\n        margin-top: 2rem;\r\n    }\r\n\r\n    .concert-title-btn {\r\n        width: 50%;\r\n    }\r\n\r\n    .info-inner-container {\r\n        width: 50%;\r\n        flex-direction: column;\r\n    }\r\n    .concert-title.concert-title-mobile {\r\n        display: block;\r\n    }\r\n\r\n    .composer-info, .piece-info {\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .composer-info p, .piece-info p {\r\n        margin: 0;\r\n    }\r\n\r\n    .composer-info p {\r\n        font-size: .75rem;\r\n    }\r\n\r\n    .piece-info p {\r\n        font-size: .5rem;\r\n        text-align: center;\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvY29uY2VydC1idWlsZGVyLmNzcz9jZWEzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvY3NzL2hvbWVwYWdlLmNzcz9kMWVmIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvY3NzL2xhbmRpbmcuY3NzP2ZlNTIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9pbWcvSm9oYW5uZXNCcmFobXMuanBnIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tYWluL2NvbmNlcnRCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL1VJU2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9odHRwLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbW9kdWxlcy9zZXNzaW9uT2JqLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0aWMvanMtbW9kdWxlcy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9qcy1tb2R1bGVzL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvY29uY2VydC1idWlsZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2Nzcy9ob21lcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRpYy9jc3MvbGFuZGluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyx1SkFBc0U7O0FBRXhHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztB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QVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLFFBQVEsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLDhDQUE4QyxnQkFBZ0Isb0JB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LE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsU0FBUyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFL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QUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImNvbmNlcnRCdWlsZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvc3RhdGljL2pzLW1vZHVsZXMvbWFpbi9jb25jZXJ0QnVpbGRlci5qc1wiKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb25jZXJ0LWJ1aWxkZXIuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZXBhZ2UuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGFuZGluZy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhZTI4ZTczM2U5NDM0OTIyOWQ1YTJiOTM3YzY2ZjkwOS5qcGdcIjsiLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuLi9tb2R1bGVzL2FwcCc7XHJcbmltcG9ydCB7IEZvcm1zIH0gZnJvbSAnLi4vbW9kdWxlcy9mb3Jtcyc7XHJcbmltcG9ydCB7IEhUVFAgfSBmcm9tICcuLi9tb2R1bGVzL2h0dHAnO1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuLi9tb2R1bGVzL25hdic7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuLi9tb2R1bGVzL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0cyB9IGZyb20gJy4uL21vZHVsZXMvcmVxdWVzdHMnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4uL21vZHVsZXMvdWknO1xyXG5pbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4uL21vZHVsZXMvVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBVc2VyLCBDb25jZXJ0LCBQaWVjZSB9IGZyb20gJy4uL21vZHVsZXMvc2Vzc2lvbk9iaic7XHJcbmltcG9ydCBcIi4uLy4uL2Nzcy9sYW5kaW5nLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9jc3MvaG9tZXBhZ2UuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL2Nzcy9jb25jZXJ0LWJ1aWxkZXIuY3NzXCI7XHJcblxyXG5sZXQgY29uY2VydFBpZWNlQXJyID0gW107XHJcbmxldCBmYXZvcml0ZXNSZXN1bHRzID0gW107XHJcbmxldCBkcmFnU3RhcnRJbmRleDtcclxuLy8gbGV0IG51bWJlciA9IDA7XHJcblxyXG4vL0luaXRpYWxpemUgQmFzZSBcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBBcHAuaW5pdEJhc2UpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRyYWdMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBwaWVjZURyYWdCYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlLWRyYWctYmFycycpO1xyXG4gICAgY29uc3QgZHJhZ0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbmNlcnQnKTtcclxuICAgIGNvbnNvbGUubG9nKHBpZWNlRHJhZ0JhcnMpO1xyXG4gICAgY29uc29sZS5sb2coZHJhZ0JveGVzKTtcclxuICAgIHBpZWNlRHJhZ0JhcnMuZm9yRWFjaCgoZHJhZykgPT4ge1xyXG4gICAgICAgIGRyYWcuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRyYWdCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XHJcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnRHJvcCk7XHJcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XHJcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuVUlTZWxlY3RvcnMuYWRkVG9Db25jZXJ0LmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLmFkZFBpZWNlVG9Db25jZXJ0QXJyKTtcclxufSk7XHJcblxyXG5VSVNlbGVjdG9ycy5zZWFyY2hGYXZvcml0ZXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICBVSS5jbGVhckZhdmVMaXN0KCk7XHJcbiAgICBSZXF1ZXN0cy5mYXZvcml0ZXNTZWFyY2goKTtcclxufSk7XHJcblxyXG4vL3Nob3dBZGRJbnRlcm1pc3Npb25cclxuVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIFVJLnNob3dJbnRlcm1pc3Npb24pO1xyXG5cclxuVUlTZWxlY3RvcnMuY29uY2VydFRpdGxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2F2ZUNvbmNlcnRUaXRsZSk7XHJcblVJU2VsZWN0b3JzLmNoYW5nZVRpdGxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkucmVtb3ZlQ29uY2VydFRpdGxlKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnRE9NQ29udGVudExvYWRlZCcsXHJcbiAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKGNvbmNlcnRQaWVjZUFycikpXHJcbik7XHJcblxyXG4vL1RPRE8gRklYIFRISVNcclxuVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBcHAuc2F2ZUNvbmNlcnQpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFN0b3JhZ2UuZ2V0Q29uY2VydCk7IiwiY2xhc3MgVWlTZWxlY3RvcnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaXRlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS10aXRsZScpO1xyXG4gICAgdGhpcy5sb2dJbk5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1uYXYnKTtcclxuICAgIHRoaXMuc2lnblVwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24tdXAtYnRuJyk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XHJcbiAgICB0aGlzLm9wZW5Db25jZXJ0QnVpbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUnKTtcclxuXHJcbiAgICB0aGlzLm9wZW5Nb2JpbGVTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1tb2JpbGUtc2VhcmNoJyk7XHJcbiAgICB0aGlzLm9wZW5Nb2JpbGVCcm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1tb2JpbGUtYnJvd3NlJyk7XHJcbiAgICB0aGlzLnJpZ2h0TmF2Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LW5hdi1jb250YWluZXInKTtcclxuXHJcbiAgICB0aGlzLmdldFN0YXJ0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXN0YXJ0ZWQtYnRuJyk7XHJcbiAgICAvL0Jyb3dzZSBNb2RhbFxyXG4gICAgdGhpcy5icm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3NlJyk7XHJcbiAgICB0aGlzLmJyb3dzZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jyb3dzZS1tb2RhbCcpO1xyXG4gICAgdGhpcy5icm93c2VNb2RhbEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3NlLW1vZGFsLWFyZWEnKTtcclxuICAgIHRoaXMuY2xvc2VCcm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtYnJvd3NlJyk7XHJcbiAgICB0aGlzLmJyb3dzZUNvbXBvc2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicm93c2UtY29tcG9zZXJzJyk7XHJcblxyXG4gICAgLy9EeW5hbWljIFNlYXJjaCBSZXN1bHQgRWxlbWVudHNcclxuICAgIHRoaXMuc2VhcmNoQmFyT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyLW92ZXJsYXknKTtcclxuICAgIHRoaXMuY2xvc2VTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2VhcmNoJyk7XHJcbiAgICB0aGlzLnNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1iYXItZmllbGQnKTtcclxuICAgIHRoaXMuc2VhcmNoQmFyUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyLXJlc3VsdHMnKTtcclxuXHJcbiAgICAvL0xvZ2luIGFuZCBTaWduIFVwIEVsZW1lbnRzXHJcbiAgICB0aGlzLmxvZ0luT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1uYXYnKTtcclxuICAgIHRoaXMuc2lnblVwT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWJ0bicpO1xyXG4gICAgdGhpcy5zaWduVXBNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLW1vZGFsJyk7XHJcbiAgICB0aGlzLnNpZ25Jbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4tbW9kYWwnKTtcclxuICAgIHRoaXMuY2xvc2VTaWduVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2lnbi11cCcpO1xyXG4gICAgdGhpcy5jbG9zZVNpZ25JbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1zaWduLWluJyk7XHJcbiAgICB0aGlzLmxvZ2dlZEluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2dlZC1pbicpO1xyXG4gICAgdGhpcy5kcm9wRG93bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24tbWVudScpO1xyXG4gICAgdGhpcy5yZWdpc3RlclVzZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItdXNlci1idG4nKTtcclxuICAgIHRoaXMubG9nSW5Vc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXVzZXItYnRuJyk7XHJcblxyXG4gICAgLy9SZWdpc3RyYXRpb24gVmFsaWRhdGlvblxyXG5cclxuICAgIHRoaXMucmVnaXN0cmF0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLXVwLWZvcm0nKTtcclxuICAgIHRoaXMucmVnaXN0ZXJVc2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci11c2VybmFtZScpO1xyXG4gICAgdGhpcy5yZWdpc3RlckVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWVtYWlsJyk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItcGFzc3dvcmQnKTtcclxuICAgIHRoaXMucmVnaXN0ZXJQYXNzd29yZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItcGFzc3dvcmQyJyk7XHJcblxyXG4gICAgdGhpcy5sb2dJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi1pbi1mb3JtJyk7XHJcbiAgICB0aGlzLmxvZ2luVXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tdXNlcm5hbWUnKTtcclxuICAgIHRoaXMubG9naW5QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1wYXNzd29yZCcpO1xyXG5cclxuICAgIC8vQ09NUE9TRVJcclxuICAgIHRoaXMucGllY2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlLXRpdGxlJyk7XHJcbiAgICB0aGlzLnBpZWNlUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS1yZXN1bHRzJyk7XHJcbiAgICB0aGlzLnBpZWNlRGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVjZS1kZXRhaWxzJyk7XHJcbiAgICB0aGlzLmNvbXBvc2VyV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb3Nlci13cmFwJyk7XHJcbiAgICB0aGlzLnN1Ym1pdENvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWNvbW1lbnQnKTtcclxuICAgIHRoaXMuYWRkUGllY2VUb0Zhdm9yaXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAnYWRkLXBpZWNlLXRvLWZhdm9yaXRlcydcclxuICAgICk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbmNlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNvbmNlcnQnKTtcclxuXHJcbiAgICAvL0NPTkNFUlQgQlVJTERFUlxyXG4gICAgdGhpcy5hZGRUb0NvbmNlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLXRvLWNvbmNlcnQnKTtcclxuICAgIHRoaXMuZGVsZXRlUGllY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGUtcGllY2UnKTtcclxuXHJcbiAgICB0aGlzLmNvbmNlcnRCdWlsZGVyQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LWJ1aWxkZXItYXJlYScpO1xyXG4gICAgdGhpcy5jb25jZXJ0TWludXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0LW1pbnV0ZXMnKTtcclxuICAgIHRoaXMuY29uY2VydENvbmNsdXNpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC1jb25jbHVzaW9uJyk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2hGYXZvcml0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZhdm9yaXRlcycpO1xyXG4gICAgdGhpcy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICdmYXZvcml0ZXMtc2VhcmNoLXJlc3VsdHMnXHJcbiAgICApO1xyXG4gICAgdGhpcy5kZWxldGVJbnRlcm1pc3Npb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWludGVybWlzc2lvbicpO1xyXG4gICAgdGhpcy5jb25jZXJ0VGl0bGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC10aXRsZS1idG4nKTtcclxuICAgIHRoaXMucmlnaHRTZWFyY2hBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LXNlYXJjaC1hcmVhJyk7XHJcbiAgICB0aGlzLmNvbmNlcnRUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtdGl0bGUtaW5wdXQnKTtcclxuICAgIHRoaXMuY2hhbmdlVGl0bGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlLXRpdGxlLWJ0bicpO1xyXG4gICAgdGhpcy5jb25jZXJ0VGl0bGVIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydC10aXRsZS1oZWFkZXInKTtcclxuICAgIHRoaXMuc2F2ZUNvbmNlcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1jb25jZXJ0LWJ0bicpO1xyXG4gICAgLy9maXggdGhpcy5cclxuICAgIGlmICh0aGlzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5pbml0aWFsRmF2b3JpdGVzUmVzdWx0cyA9IFsuLi50aGlzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuY2hpbGRyZW5dO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb25jZXJ0QnVpbGRlclRleHRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtYnVpbGRlci10ZXh0LWFyZWEnKTtcclxuICAgIHRoaXMuY29uY2VydExlbmd0aENoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnQtbGVuZ3RoLWNoZWNrJyk7XHJcblxyXG5cclxuICAgIC8vSE9NUEFHRVxyXG4gICAgdGhpcy5zaG93R29sZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3Zlci1nb2xkJyk7XHJcbiAgICAvL2NvbnN0IHNlYXJjaFJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLXJlc3VsdCcpO1xyXG4gICAgdGhpcy52aWV3TW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWV3LW1vcmUtYnRuJyk7XHJcbiAgICB0aGlzLm1haW5Db250ZW50SW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50LWFyZWEtaW5uZXInKTtcclxuICAgIHRoaXMub3BlblByb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1wcm9maWxlJyk7XHJcbiAgICB0aGlzLm9wZW5GYXZvcml0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1mYXZvcml0ZXMnKTtcclxuICAgIHRoaXMub3BlbkNvbmNlcnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tY29uY2VydHMnKTtcclxuICAgIHRoaXMucmV0dXJuSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXR1cm4taG9tZScpO1xyXG5cclxuICAgIC8vRmF2b3JpdGVzIG9uIEhvbWUgUGFnZVxyXG4gICAgdGhpcy5ob21lU2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXNlYXJjaC1yZXN1bHRzJyk7XHJcbiAgICAvL0Zhdm9yaXRlcyBQYWdlXHJcbiAgICB0aGlzLmZ1bGxGYXZvcml0ZXNHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGwtZmF2b3JpdGVzLWdyaWQnKTtcclxuXHJcbiAgICAvL0NvbmNlcnRzIG9uIEhvbWUgUGFnZVxyXG4gICAgdGhpcy55b3VyQ29uY2VydHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgJ3lvdXItY29uY2VydHMtY29udGFpbmVyJ1xyXG4gICAgKTtcclxuXHJcbiAgICAvL0NvbmNlcnRzIG9uIENvbmNlcnRzIFBhZ2VcclxuICAgIHRoaXMuZnVsbENvbmNlcnRzR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWxsLWNvbmNlcnRzLWdyaWQnKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcGVuUHJvZmlsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub3BlbkxpbmtzID0gW3RoaXMub3BlblByb2ZpbGUsIHRoaXMub3BlbkZhdm9yaXRlcywgdGhpcy5vcGVuQ29uY2VydHMsIHRoaXMucmV0dXJuSG9tZV07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcGVuQnJvd3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tYnJvd3NlJyk7XHJcblxyXG4gICAgdGhpcy5waWVjZU5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlLW5hbWUnKTtcclxuICAgIHRoaXMuY3JlYXRlQ29uY2VydEJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAnY3JlYXRlLWNvbmNlcnQtYnRuJ1xyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmRyb3BEb3duWW91ckNvbmNlcnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICdkcm9wZG93bi15b3VyLWNvbmNlcnRzJ1xyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNvbXBvc2VyTGV0dGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICdjb21wb3Nlci1sZXR0ZXItY29udGFpbmVyJ1xyXG4gICAgKTtcclxuICAgIHRoaXMucmVzdWx0c0NvbHVtbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNvbHVtbicpO1xyXG4gICAgdGhpcy5jb21wb3NlclJlc3VsdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcG9zZXItcmVzdWx0LWxpc3QnKTtcclxuICAgIHRoaXMudXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXVzZXJuYW1lJyk7XHJcbiAgICBpZiAodGhpcy51c2VyICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMudXNlciA9IHRoaXMudXNlci50ZXh0Q29udGVudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9GUk9NIElOREVYXHJcbiAgICB0aGlzLmNvbXBvc2VyTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcG9zZXItcmVzdWx0cycpO1xyXG4gICAgdGhpcy5zZWFyY2hGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZmllbGQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVSVNlbGVjdG9ycyA9IG5ldyBVaVNlbGVjdG9ycygpOyIsImltcG9ydCB7IFVJU2VsZWN0b3JzIH0gZnJvbSAnLi9VSVNlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi91aSc7XHJcbmltcG9ydCB7IEhUVFAgfSBmcm9tICcuL2h0dHAnO1xyXG5pbXBvcnQgeyBVc2VyLCBDb25jZXJ0LCBQaWVjZSB9IGZyb20gJy4vc2Vzc2lvbk9iaic7XHJcbmltcG9ydCB7IEZvcm1zIH0gZnJvbSAnLi9mb3Jtcyc7XHJcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vbmF2JztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XHJcbmltcG9ydCB7IFJlcXVlc3RzIH0gZnJvbSAnLi9yZXF1ZXN0cyc7XHJcblxyXG5jbGFzcyBBUFAge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGdlbmVyYXRlUmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gIH1cclxuXHJcbiAgaW5pdEJhc2UoKSB7XHJcblxyXG5cclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnNob3dTZWFyY2gpO1xyXG4gICAgVUlTZWxlY3RvcnMub3Blbk1vYmlsZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnNob3dTZWFyY2gpO1xyXG4gICAgVUlTZWxlY3RvcnMuY2xvc2VTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jbG9zZVNlYXJjaEZpZWxkKTtcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICBVSS5jbGVhckxpc3QoKTtcclxuICAgICAgUmVxdWVzdHMuZ2V0Q29tcG9zZXJSZXN1bHRzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMub3Blbk1vYmlsZUJyb3dzZSkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5vcGVuTW9iaWxlQnJvd3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd0Jyb3dzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgVUlTZWxlY3RvcnMuYnJvd3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc2hvd0Jyb3dzZSk7XHJcbiAgICBVSVNlbGVjdG9ycy5jbG9zZUJyb3dzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgVUlTZWxlY3RvcnMuYnJvd3NlTW9kYWxBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgVUlTZWxlY3RvcnMuYnJvd3NlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5sb2dJbk9wZW4gJiYgVUlTZWxlY3RvcnMuc2lnblVwT3Blbikge1xyXG4gICAgICBVSVNlbGVjdG9ycy5sb2dJbk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuTW9kYWwpO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaWduVXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3Blbk1vZGFsKTtcclxuICAgICAgVUlTZWxlY3RvcnMuY2xvc2VTaWduVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jbG9zZU1vZGFsKTtcclxuICAgICAgVUlTZWxlY3RvcnMuY2xvc2VTaWduSW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jbG9zZU1vZGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMubG9nZ2VkSW4pIHtcclxuICAgICAgVUlTZWxlY3RvcnMubG9nZ2VkSW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zaG93RHJvcERvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5yZWdpc3RyYXRpb25Gb3JtKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnJlZ2lzdHJhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBmb3JtSW5wdXRzID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgJy5mb3JtLWZpZWxkIGlucHV0J1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghRm9ybXMuY2hlY2tSZXF1aXJlZChbLi4uZm9ybUlucHV0c10pKSB7XHJcbiAgICAgICAgICBGb3Jtcy5jaGVja0xlbmd0aChVSVNlbGVjdG9ycy5yZWdpc3RlclVzZXJuYW1lLCA2LCAyMCk7XHJcbiAgICAgICAgICBGb3Jtcy5jaGVja0xlbmd0aChVSVNlbGVjdG9ycy5yZWdpc3RlclBhc3N3b3JkLCA2LCAyMCk7XHJcbiAgICAgICAgICBGb3Jtcy5jaGVja0VtYWlsKFVJU2VsZWN0b3JzLnJlZ2lzdGVyRW1haWwpO1xyXG4gICAgICAgICAgRm9ybXMuY2hlY2tQYXNzd29yZHNNYXRjaChcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMucmVnaXN0ZXJQYXNzd29yZCxcclxuICAgICAgICAgICAgVUlTZWxlY3RvcnMucmVnaXN0ZXJQYXNzd29yZDJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoRm9ybXMuY2hlY2tBbGxWYWxpZChbLi4uZm9ybUlucHV0c10pKSB7XHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLnJlZ2lzdHJhdGlvbkZvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVUlTZWxlY3RvcnMubG9nSW5Gb3JtKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhRm9ybXMuY2hlY2tSZXF1aXJlZChbXHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLmxvZ2luVXNlcm5hbWUsXHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLmxvZ2luUGFzc3dvcmQsXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbGV0IGxvZ2luRGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFVJU2VsZWN0b3JzLmxvZ2luVXNlcm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBVSVNlbGVjdG9ycy5sb2dpblBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBSZXF1ZXN0cy50ZXN0TG9naW4obG9naW5EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbmNlcnRGdW5jdGlvbihlKSB7XHJcbiAgICBsZXQgY29tcG9zZXJOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXItbmFtZScpXHJcbiAgICAgIC50ZXh0Q29udGVudDtcclxuICAgIGxldCBwaWVjZU5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS1uYW1lJylcclxuICAgICAgLnRleHRDb250ZW50O1xyXG5cclxuICAgIGxldCBuZXdQaWVjZSA9IG5ldyBQaWVjZShjb21wb3Nlck5hbWUsIHBpZWNlTmFtZSk7XHJcbiAgICBsZXQgbmV3Q29uY2VydCA9IG5ldyBDb25jZXJ0KCdObyBOYW1lJyk7XHJcbiAgICBuZXdDb25jZXJ0LnBpZWNlcy5wdXNoKG5ld1BpZWNlKTtcclxuICAgIFN0b3JhZ2Uuc2V0TmV3Q29uY2VydChuZXdDb25jZXJ0KTtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSAnL2NvbmNlcnRfYnVpbGRlcic7XHJcbiAgfVxyXG5cclxuICBzYXZlQ29uY2VydCgpIHtcclxuICAgIGxldCBjdXJyZW50VXNlciA9IFN0b3JhZ2UuZ2V0VXNlcigpO1xyXG4gICAgY29uc29sZS5sb2coXCJGUk9NIFNBVkVDT05DRVJUXCIpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4gICAgaWYgKFVJU2VsZWN0b3JzLmNvbmNlcnRUaXRsZUhlYWRlci50ZXh0Q29udGVudCA9PT0gJycpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4udGV4dENvbnRlbnQgPSAnUGxlYXNlIGFkZCB0aXRsZS4nO1xyXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdTYXZlIENvbmNlcnQnO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChVSS5jb25jZXJ0UGllY2VBcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLnRleHRDb250ZW50ID0gJ1BsZWFzZSBhZGQgcGllY2VzLi4uJztcclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLnNhdmVDb25jZXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuc2F2ZUNvbmNlcnRCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSBDb25jZXJ0JztcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3VycmVudENvbmNlcnQgPSBuZXcgQ29uY2VydChVSVNlbGVjdG9ycy5jb25jZXJ0VGl0bGVIZWFkZXIudGV4dENvbnRlbnQpO1xyXG5cclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSkgPT4ge1xyXG4gICAgICBpZiAocGllY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnRlcm1pc3Npb24nKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdGhpc1BpZWNlID0gbmV3IFBpZWNlKFxyXG4gICAgICAgICAgcGllY2UucXVlcnlTZWxlY3RvcignLmNvbXBvc2VyLWluZm8gPiBwOmZpcnN0LWNoaWxkJykudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICBwaWVjZS5xdWVyeVNlbGVjdG9yKCcucGllY2UtaW5mbyA+IHA6Zmlyc3QtY2hpbGQnKS50ZXh0Q29udGVudFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGN1cnJlbnRDb25jZXJ0LnBpZWNlcy5wdXNoKHRoaXNQaWVjZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjdXJyZW50VXNlci5jb25jZXJ0cy5wdXNoKGN1cnJlbnRDb25jZXJ0KTtcclxuXHJcblxyXG4gICAgU3RvcmFnZS5zZXRVc2VyKGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdDb25jZXJ0IFNhdmVkISEnO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zYXZlQ29uY2VydEJ0bi50ZXh0Q29udGVudCA9ICdTYXZlIENvbmNlcnQnO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICAvL0ZvciBDb25jZXJ0IEJ1aWxkZXJcclxuICBhZGRQaWVjZVRvQ29uY2VydEFycihlKSB7XHJcblxyXG4gICAgY29uc3QgYWRkVG9Db25jZXJ0Q29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgY29uc3QgcGllY2VDb21wb3NlciA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnBpZWNlLWluZm8tbGVmdCBwOm50aC1vZi10eXBlKDEpJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlQ29tcG9zZXJEYXRlcyA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmRhdGEtY29tcG9zZXItZGF0ZXMnXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGllY2VDb21wb3Nlck5hdGlvbmFsaXR5ID0gYWRkVG9Db25jZXJ0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuZGF0YS1jb21wb3Nlci1uYXRpb25hbGl0eSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwaWVjZUluc3RydW1lbnRhdGlvbiA9IGFkZFRvQ29uY2VydENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmRhdGEtcGllY2UtaW5zdHJ1bWVudGF0aW9uJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBpZWNlVGl0bGUgPSBhZGRUb0NvbmNlcnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5waWVjZS1pbmZvLWxlZnQgcDpudGgtb2YtdHlwZSgyKSdcclxuICAgICk7XHJcbiAgICBjb25zdCBwaWVjZUR1cmF0aW9uID0gYWRkVG9Db25jZXJ0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcucGllY2UtaW5mby1sZWZ0IHA6bnRoLW9mLXR5cGUoMyknXHJcbiAgICApO1xyXG5cclxuICAgIC8vQ2hhbmdlIG5vdGlmaWN0YWlvbiB0ZXh0IGJhY2sgYW5kIGZvcnRoLlxyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnUGllY2UgYWRkZWQgdG8gY29uY2VydCc7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdBZGQgdG8gY29uY2VydCc7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBsZXQgcGllY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGllY2VFbC5jbGFzc0xpc3QgPSAnY29uY2VydCc7XHJcbiAgICAvL3BpZWNlRWwuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgIHBpZWNlRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnMgcGllY2UtZHJhZy1iYXJzXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWlubmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb3Nlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VDb21wb3Nlci50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VDb21wb3NlckRhdGVzLnRleHRDb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZUNvbXBvc2VyTmF0aW9uYWxpdHkudGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VUaXRsZS50ZXh0Q29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2VJbnN0cnVtZW50YXRpb24udGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ke3BpZWNlRHVyYXRpb24udGV4dENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzIGZhLTJ4IGRlbGV0ZS1waWVjZVwiPjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaW50ZXJtaXNzaW9uXCI+XHJcbiAgICAgICAgICAgICAgPHA+QWRkIEludGVybWlzc2lvbiBIZXJlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICBgO1xyXG5cclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5wdXNoKHBpZWNlRWwpO1xyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBVSS5hZGRQaWVjZVRvRE9NKHBpZWNlRWwpO1xyXG5cclxuICAgIFVJLmRlbGV0ZVBpZWNlc0xpc3RlbmVycygpO1xyXG4gICAgVUkuY3JlYXRlSW50ZXJtaXNzaW9uTGlzdGVuZXJzKCk7XHJcbiAgICBVSS5kcmFnTGlzdGVuZXJzKCk7XHJcbiAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKFVJLmNvbmNlcnRQaWVjZUFycikpO1xyXG4gIH1cclxuXHJcbiAgLy9UT0RPXHJcbiAgLy9kZWxldGVQaWVjZXNcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBcHAgPSBuZXcgQVBQKCk7IiwiaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpJztcclxuXHJcbmNsYXNzIEZPUk1TIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICByZWdpc3RlclZhbGlkYXRpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGN1cnJlbnRGb3JtID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBsZXQgZm9ybUZpZWxkcyA9IGN1cnJlbnRGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWZpZWxkJyk7XHJcblxyXG4gICAgWy4uLmZvcm1GaWVsZHNdLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChmaWVsZC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItdGV4dCcpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIHdhcyBhbiBlcnJvcicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBhcmUgbm8gZXJyb3JzJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tFbWFpbChpbnB1dCkge1xyXG4gICAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgaWYgKHJlLnRlc3QoaW5wdXQudmFsdWUudHJpbSgpKSkge1xyXG4gICAgICBVSS5zaG93U3VjY2VzcyhpbnB1dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSS5zaG93RXJyb3IoaW5wdXQsICdFbWFpbCBpcyBub3QgdmFsaWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrUmVxdWlyZWQoaW5wdXRBcnIpIHtcclxuICAgIGxldCBpc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBpbnB1dEFyci5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIFVJLnNob3dFcnJvcihpbnB1dCwgYCR7VUkuZ2V0RmllbGROYW1lKGlucHV0KX0gaXMgcmVxdWlyZWQuYCk7XHJcbiAgICAgICAgaXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgVUkuc2hvd1N1Y2Nlc3MoaW5wdXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaXNSZXF1aXJlZDtcclxuICB9XHJcblxyXG4gIGNoZWNrTGVuZ3RoKGlucHV0LCBtaW4sIG1heCkge1xyXG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA8IG1pbikge1xyXG4gICAgICBVSS5zaG93RXJyb3IoXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgYCR7VUkuZ2V0RmllbGROYW1lKGlucHV0KX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVyc2BcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gbWF4KSB7XHJcbiAgICAgIFVJLnNob3dFcnJvcihcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBgJHtVSS5nZXRGaWVsZE5hbWUoaW5wdXQpfSBtdXN0IGJlIGxlc3MgdGhhbiAke21heH0gY2hhcmFjdGVyc31gXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSS5zaG93U3VjY2VzcyhpbnB1dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1Bhc3N3b3Jkc01hdGNoKGlucHV0MSwgaW5wdXQyKSB7XHJcbiAgICBpZiAoaW5wdXQxLnZhbHVlICE9PSBpbnB1dDIudmFsdWUpIHtcclxuICAgICAgVUkuc2hvd0Vycm9yKGlucHV0MiwgJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrQWxsVmFsaWQoZm9ybUlucHV0QXJyKSB7XHJcbiAgICBsZXQgYWxsVmFsaWQgPSB0cnVlO1xyXG4gICAgZm9ybUlucHV0QXJyLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBmaWVsZC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSAmJlxyXG4gICAgICAgIGZpZWxkLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA+IDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWxsVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gYWxsVmFsaWQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhbGxWYWxpZDtcclxuICB9XHJcblxyXG4gIGxvZ0luVmFsaWRhdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnTG9nIEluIFByZXZlbnRlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1zID0gbmV3IEZPUk1TKCk7IiwiY2xhc3MgSHR0cCB7XHJcbiAgLy9NYWtlIEhUVFAgR2V0XHJcbiAgYXN5bmMgZ2V0KHVybCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXNEYXRhO1xyXG4gIH1cclxuXHJcbiAgLy9NYWtlIEhUVFAgUE9TVFxyXG4gIGFzeW5jIHBvc3QodXJsLCBkYXRhKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXNEYXRhO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0WE1MKGV2ZW50ID0gdW5kZWZpbmVkLCB1cmwpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICByZXR1cm4gcmVzRGF0YTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEpTT04odXJsKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgcmV0dXJuIHJlc0RhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSFRUUCA9IG5ldyBIdHRwKCk7IiwiaW1wb3J0IHsgVUlTZWxlY3RvcnMgfSBmcm9tICcuL1VJU2VsZWN0b3JzJztcclxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpJztcclxuXHJcbmNsYXNzIE5BViB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgY29tcG9zZXJQYWdlTGlzdGVuZXJzKGNvbXBvc2VyKSB7XHJcbiAgICBjb21wb3Nlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGNvbXBvc2VyLyR7ZS50YXJnZXQudGV4dENvbnRlbnR9YDtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdiA9IG5ldyBOQVYoKTsiLCJpbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnLi9odHRwJztcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSAnLi9uYXYnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XHJcblxyXG5jbGFzcyBSRVFVRVNUUyB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZ2V0Q29tcG9zZXJSZXN1bHRzKCkge1xyXG4gICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgc2VhcmNoVGVybTogVUlTZWxlY3RvcnMuc2VhcmNoSW5wdXQudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBIVFRQLnBvc3QoJy9jb21wb3NlcnMnLCBkYXRhKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2YgcmVzLmNvbXBvc2VycylcclxuICAgICAgbGV0IGNvbXBBcnJheSA9IEpTT04ucGFyc2UocmVzLmNvbXBvc2Vycyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbXBBcnJheSk7XHJcblxyXG4gICAgICBjb21wQXJyYXkuZm9yRWFjaChjb21wb3NlciA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIFVJLnBvcHVsYXRlQ29tcG9zZXJTZWFyY2hSZXN1bHRzKGN1cnJlbnRVUkwsIGNvbXBvc2VyKVxyXG4gICAgICB9KVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBUaGVyZSB3YXMgYW4gZXJyLCAke2Vycn1gKSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGJyb3dzZVBhbmVsRmV0Y2goKSB7XHJcbiAgICBsZXQgcmFuZG9tQ29tcEFyciA9IFtdO1xyXG4gICAgSFRUUC5nZXQoJy9icm93c2VfY29tcG9zZXJfbGlzdCcpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbXBvc2Vyc0FyciA9IGRhdGEuY29tcG9zZXJzX2FycmF5O1xyXG4gICAgICAgIGNvbXBvc2Vyc0Fyci5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbWFpbkxldHRlciA9IGdyb3VwWzBdWzBdO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbUNvbXBBcnIucHVzaChcclxuICAgICAgICAgICAgICBncm91cFtBcHAuZ2VuZXJhdGVSYW5kb21OdW1iZXIoMCwgZ3JvdXAubGVuZ3RoKV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBVSS5hZGRSYW5kb21Db21wb3NlcnNUb0RPTShtYWluTGV0dGVyLCByYW5kb21Db21wQXJyKTtcclxuICAgICAgICAgIHJhbmRvbUNvbXBBcnIgPSBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgVGhlcmUgd2FzIGFuIGVycm9yOiAke2Vycn1gKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ3VycmVudExldHRlcihlKSB7XHJcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdicm93c2VfY29tcG9zZXJzJykpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2Jyb3dzZV9jb21wb3NlcnMnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC50YWdOYW1lICE9PSAnTEknIHx8IGUudGFyZ2V0LnRhZ05hbWUgIT09ICdIMScpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGNvbXBvc2VyTGV0dGVyID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICAgIGxldCBkYXRhID0geyBsZXR0ZXI6IGNvbXBvc2VyTGV0dGVyIH07XHJcbiAgICAgIEhUVFAucG9zdCgnLi9icm93c2VfY29tcG9zZXJfbGlzdCcsIGRhdGEpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChVSVNlbGVjdG9ycy5yZXN1bHRzQ29sdW1uLnRleHRDb250ZW50ICE9PSAnJykge1xyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5yZXN1bHRzQ29sdW1uLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGF0YS5sZXR0ZXJBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIFVJLmFwcGVuZEN1cnJlbnRMZXR0ZXIoaXRlbSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBbLi4uVUlTZWxlY3RvcnMucmVzdWx0c0NvbHVtbi5jaGlsZHJlbl0uZm9yRWFjaCgoY29tcCkgPT4ge1xyXG4gICAgICAgICAgICBOYXYuY29tcG9zZXJQYWdlTGlzdGVuZXJzKGNvbXApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coYFRoZXJlIHdhcyBhbiBlcnJvciAke2Vycn1gKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZXN0TG9naW4obG9naW5EYXRhKSB7XHJcbiAgICBIVFRQLnBvc3QoJy9sb2dpbicsIGxvZ2luRGF0YSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEudXBkYXRlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgIFVJU2VsZWN0b3JzLmxvZ0luVXNlckJ0bi50ZXh0Q29udGVudCA9IGAke2RhdGEubWVzc2FnZX1gO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2hvbWVwYWdlJztcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEudXBkYXRlID09PSAnZmFpbHVyZScpIHtcclxuICAgICAgICAgIFVJLnNob3dFcnJvcihVSVNlbGVjdG9ycy5sb2dpblVzZXJuYW1lLCBkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgVUkuc2hvd0Vycm9yKFVJU2VsZWN0b3JzLmxvZ2luUGFzc3dvcmQsIGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBUaGVyZSB3YXMgYW4gZXJyb3IsICR7ZXJyfWApKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRGdWxsUGllY2VJbmZvKHBpZWNlVGl0bGUpIHtcclxuICAgIEhUVFAuZ2V0KGAvcGllY2VfZGV0YWlsLyR7cGllY2VUaXRsZX1gKVxyXG4gICAgICAudGhlbihkYXRhID0+IFVJLmFkZFBpZWNlRnJvbUxvY2FsU3RvcmFnZShkYXRhKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgRVJST1I6ICR7ZXJyfWApKVxyXG4gIH1cclxuXHJcbiAgZmF2b3JpdGVzU2VhcmNoKCkge1xyXG4gICAgbGV0IHNlYXJjaFRlcm0gPSBVSVNlbGVjdG9ycy5zZWFyY2hGYXZvcml0ZXMudmFsdWU7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgc2VhcmNoVGVybVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWFyY2hUZXJtID09PSAnJykge1xyXG4gICAgICBVSVNlbGVjdG9ycy5pbml0aWFsRmF2b3JpdGVzUmVzdWx0cy5mb3JFYWNoKChmYXZvcml0ZSkgPT4ge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQoZmF2b3JpdGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEhUVFAucG9zdCgnL3NlYXJjaF9mYXZvcml0ZXMnLCBkYXRhKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG5cclxuICAgICAgICAgIGxldCBwYXJzZWQgPSBKU09OLnBhcnNlKGRhdGEuZmF2b3JpdGVzKTtcclxuICAgICAgICAgIHBhcnNlZC5mb3JFYWNoKGZhdm9yaXRlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmF2b3JpdGVMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgICAgICAgICBmYXZvcml0ZUxJLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtY29tcG9zZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS1jb21wb3Nlci1kYXRlc1wiPiR7ZmF2b3JpdGUuY29tcG9zZXIueWVhcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS1jb21wb3Nlci1uYXRpb25hbGl0eVwiPiR7ZmF2b3JpdGUuY29tcG9zZXIubmF0aW9uYWxpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS1waWVjZS1pbnN0cnVtZW50YXRpb25cIj4ke2Zhdm9yaXRlLmluc3RydW1lbnRhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZS1pbmZvLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2Zhdm9yaXRlLmNvbXBvc2VyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2Zhdm9yaXRlLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2UtaW5mby1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7ZmF2b3JpdGUuZHVyYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0biBhZGQtdG8tY29uY2VydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gQ29uY2VydFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQoZmF2b3JpdGVMSSk7XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gYEVSUk9SOiAke2Vycn1gKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGdldFBpZWNlUmVzdWx0cyhlKSB7XHJcbiAgICBVSS5jbGVhckNvbXBvc2VyUmVzdWx0cygpO1xyXG5cclxuICAgIGxldCBmb3JtYXR0ZWRTdHJpbmcgPSBlLnRhcmdldC5pbm5lckhUTUwuc3BsaXQoJyYnKVswXTtcclxuICAgIEhUVFAuZ2V0KGAvcGllY2VfZGV0YWlsLyR7Zm9ybWF0dGVkU3RyaW5nfWApXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnBpZWNlLnRpdGxlKSB7XHJcbiAgICAgICAgICBjb25zdCBjb250ZW50cyA9IGA8aDIgaWQ9XCJwaWVjZS10aXRsZS1yZXN1bHRcIj4ke2RhdGEucGllY2UudGl0bGV9PC9oMj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInBpZWNlLWR1cmF0aW9uXCI+JHtkYXRhLnBpZWNlLmR1cmF0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwicGllY2UtaW5zdHJ1bWVudGF0aW9uXCI+JHtkYXRhLnBpZWNlLmluc3RydW1lbnRhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgVUlTZWxlY3RvcnMucGllY2VEZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTCA9IGNvbnRlbnRzO1xyXG5cclxuICAgICAgICAgIGlmIChkYXRhLnBpZWNlLmNvbW1lbnRzLmxlbmd0aCA+IDApIHtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgICAgIGNvbW1lbnRMaXN0LmNsYXNzTGlzdCA9ICdjb21tZW50LWxpc3QnO1xyXG4gICAgICAgICAgICBVSVNlbGVjdG9ycy5waWVjZURldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudExpc3QpO1xyXG4gICAgICAgICAgICBkYXRhLnBpZWNlLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29tbWVudExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICBjb21tZW50TEkuY2xhc3NMaXN0ID0gJ2NvbW1lbnQnO1xyXG5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50LmF1dGhvciwgY29tbWVudC5ib2R5LCBjb21tZW50LnRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbW1lbnRMSS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQuYXV0aG9yfSBzYXlzOiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQuYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQudGltZXN0YW1wfTwvcD5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgIGNvbW1lbnRMaXN0LmFwcGVuZENoaWxkKGNvbW1lbnRMSSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpRmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGlGYWlsLmlubmVySFRNTCA9ICdUaGVyZSB3YXMgYSBmYWlsdXJlJztcclxuICAgICAgICBVSVNlbGVjdG9ycy5waWVjZVJlc3VsdHMuYXBwZW5kKGxpKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGRpc3BsYXlDb21tZW50cyhlbnRyeSkge1xyXG4gICAgSFRUUC5nZXQoYC9waWVjZV9kZXRhaWwvJHtlbnRyeS5waWVjZX1gKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5waWVjZS5jb21tZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgICBjb21tZW50TGlzdC5jbGFzc0xpc3QgPSAnY29tbWVudC1saXN0JztcclxuICAgICAgICAgIFVJU2VsZWN0b3JzLnBpZWNlRGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50TGlzdCk7XHJcbiAgICAgICAgICBkYXRhLnBpZWNlLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGNvbW1lbnRMSS5jbGFzc0xpc3QgPSAnY29tbWVudCc7XHJcbiAgICAgICAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHA+JHtjb21tZW50LmF1dGhvcn0gc2F5czogPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtjb21tZW50LmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtjb21tZW50LnRpbWVzdGFtcH08L3A+YDtcclxuICAgICAgICAgICAgY29tbWVudExpc3QuYXBwZW5kQ2hpbGQoY29tbWVudExJKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGBUaGVyZSB3YXMgYW4gZXJyOiAke2Vycn1gKVxyXG4gIH1cclxuXHJcblxyXG4gIGltYWdlRmV0Y2goKSB7XHJcbiAgICBjb25zdCBjb21wb3Nlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcG9zZXItbmFtZScpO1xyXG4gICAgSFRUUC5nZXQoYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2N1c3RvbXNlYXJjaC92MT9rZXk9QUl6YVN5QzcyZW1zYXBjdVhzRjY0SHJuN2NhXzl4SWJBVWJuN0RZJmN4PTAxNDEyNDM5MTk0NTgzMDA4Njg1OTphaXNyYXV4amVqeSZxPSR7Y29tcG9zZXJOYW1lLnRleHRDb250ZW50fWApXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvc2VySW1nU3JjID0gZGF0YS5pdGVtc1swXS5wYWdlbWFwLmNzZV90aHVtYm5haWxbMF0uc3JjO1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLmNvbXBvc2VyV3JhcC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2NvbXBvc2VySW1nU3JjfScpYDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuY29tcG9zZXJXcmFwLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjAwXCIpJztcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbW1pdE5ld0NvbW1lbnQoZSkge1xyXG5cclxuXHJcbiAgICBsZXQgY29tcG9zZXJVc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGRlbi11c2VyJyk7XHJcbiAgICBjb25zdCBjb21tZW50Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWNvbW1lbnQnKTtcclxuICAgIGNvbnN0IGNvbW1lbnRQaWVjZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpZWNlLXRpdGxlLXJlc3VsdCcpO1xyXG5cclxuXHJcbiAgICBpZiAoIWNvbXBvc2VyVXNlcikge1xyXG4gICAgICAvL1RPRE8gV1JJVEUgU0hPVyBCVVRUT04gRVJST1IgXHJcbiAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCwgJ1BsZWFzZSBsb2cgaW4nKTtcclxuICAgIH0gZWxzZSBpZiAoIWNvbW1lbnRQaWVjZVRpdGxlKSB7XHJcbiAgICAgIFVJLnNob3dCdXR0b25FcnJvcihlLnRhcmdldCwgJ1NlbGVjdCBhIHBpZWNlJyk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbW1lbnRCb2R5LnZhbHVlID09PSAnJykge1xyXG4gICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQsICdXcml0ZSAgYSBjb21tZW50IScpO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIGNvbnN0IGVudHJ5ID0ge1xyXG4gICAgICAgIGJvZHk6IGNvbW1lbnRCb2R5LnZhbHVlLFxyXG4gICAgICAgIHBpZWNlOiBjb21tZW50UGllY2VUaXRsZS50ZXh0Q29udGVudFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgSFRUUC5wb3N0KCcvYWRkX2NvbW1lbnQnLCBlbnRyeSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ1RoYW5rIHlvdSEnO1xyXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdTdWJtaXQgQ29tbWVudCc7XHJcbiAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgIGNvbW1lbnRCb2R5LnZhbHVlID0gYGA7XHJcbiAgICAgICAgICBSZXF1ZXN0cy5kaXNwbGF5Q29tbWVudHMoZW50cnkpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tbWl0TmV3RmF2b3JpdGUoZSkge1xyXG4gICAgbGV0IGNvbXBvc2VyVXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRkZW4tdXNlcicpO1xyXG4gICAgbGV0IHBpZWNlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllY2UtdGl0bGUtcmVzdWx0Jyk7XHJcblxyXG4gICAgbGV0IHBpZWNlU2VuZCA9IHtcclxuICAgICAgcGllY2VUaXRsZVNlbmQ6IHBpZWNlVGl0bGUudGV4dENvbnRlbnRcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBpZWNlVGl0bGUpIHtcclxuICAgICAgVUkuc2hvd0J1dHRvbkVycm9yKGUudGFyZ2V0LCAnU2VsZWN0IGEgcGllY2UnKTtcclxuICAgIH0gZWxzZSBpZiAoIWNvbXBvc2VyVXNlcikge1xyXG4gICAgICBVSS5zaG93QnV0dG9uRXJyb3IoZS50YXJnZXQsICdQbGVhc2UgTG9nIGluJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBIVFRQLnBvc3QoJy9hZGRfcGllY2VfdG9fZmF2b3JpdGVzJywgcGllY2VTZW5kKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1lc3NhZ2V9YDtcclxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnQWRkIHBpZWNlIHRvIGZhdm9yaXRlcyc7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coYEZFVENIIEVSUk9SOiAke2Vycn1gKSlcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RzID0gbmV3IFJFUVVFU1RTKCk7IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBjb25jZXJ0cyA9IFtdKSB7XHJcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICB0aGlzLmNvbmNlcnRzID0gY29uY2VydHM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uY2VydCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIHBpZWNlcyA9IFtdKSB7XHJcbiAgICB0aGlzLmlkID0gQXBwLmdlbmVyYXRlUmFuZG9tTnVtYmVyKDAsIDUwMDAwKTtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMucGllY2VzID0gcGllY2VzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBpZWNlIHtcclxuICBjb25zdHJ1Y3Rvcihjb21wb3NlciwgdGl0bGUpIHtcclxuICAgIHRoaXMuY29tcG9zZXIgPSBjb21wb3NlcjtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVxdWVzdHMgfSBmcm9tICcuL3JlcXVlc3RzJztcclxuaW1wb3J0IHsgVXNlciwgQ29uY2VydCwgUGllY2UgfSBmcm9tICcuL3Nlc3Npb25PYmonO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xyXG5pbXBvcnQgeyBVSVNlbGVjdG9ycyB9IGZyb20gJy4vVUlTZWxlY3RvcnMnO1xyXG5cclxuY2xhc3MgU1RPUkFHRSB7XHJcbiAgZ2V0VXNlcigpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlcih1c2VyKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVzZXIoKSB7XHJcbiAgICBsZXQgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXVzZXJuYW1lJykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgaWYgKFN0b3JhZ2UuZ2V0VXNlcigpID09PSBudWxsIHx8IFN0b3JhZ2UuZ2V0VXNlcigpID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgIGxldCBuZXdVc2VyID0gbmV3IFVzZXIodXNlcik7XHJcbiAgICAgIFN0b3JhZ2Uuc2V0VXNlcihuZXdVc2VyKTtcclxuICAgICAgVUkuZGlzcGxheUNvbmNlcnRzKG5ld1VzZXIpO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyID09PSBTdG9yYWdlLmdldFVzZXIoKS51c2VybmFtZSkge1xyXG4gICAgICBsZXQgY3VycmVudFVzZXIgPSBTdG9yYWdlLmdldFVzZXIoKTtcclxuICAgICAgVUkuZGlzcGxheUNvbmNlcnRzKGN1cnJlbnRVc2VyKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh1c2VyICE9PSBTdG9yYWdlLmdldFVzZXIoKS51c2VybmFtZSkge1xyXG4gICAgICBsZXQgbmV3VXNlciA9IG5ldyBVc2VyKHVzZXIpO1xyXG4gICAgICBTdG9yYWdlLnNldFVzZXIobmV3VXNlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb25jZXJ0KCkge1xyXG4gICAgbGV0IHJlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25ld0NvbmNlcnQnKSk7XHJcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XHJcbiAgICAgIFJlcXVlc3RzLmdldEZ1bGxQaWVjZUluZm8ocmVzLnBpZWNlc1swXS50aXRsZS5zcGxpdCgnLi4uJylbMF0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBzZXROZXdDb25jZXJ0KGNvbmNlcnQpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduZXdDb25jZXJ0JywgSlNPTi5zdHJpbmdpZnkoY29uY2VydCkpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShzdHJpbmcpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0cmluZyk7XHJcbiAgfVxyXG5cclxuICBzZXRJdGVtKHN0cmluZywgaXRlbSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RyaW5nLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3RvcmFnZSA9IG5ldyBTVE9SQUdFKCk7XHJcbiIsImltcG9ydCB7IFVJU2VsZWN0b3JzIH0gZnJvbSAnLi9VSVNlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFJlcXVlc3RzIH0gZnJvbSAnLi9yZXF1ZXN0cyc7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVpIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZHJhZ1N0YXJ0SW5kZXggPSAwO1xyXG4gICAgdGhpcy5hbGwgPSB0cnVlO1xyXG4gICAgdGhpcy5jb25jZXJ0UGllY2VBcnIgPSBbXTtcclxuICB9XHJcblxyXG4gIHRlc3RJbXBvcnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhVSVNlbGVjdG9ycy5zaXRlVGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgLy9CQVNFXHJcbiAgb3Blbk1vZGFsKGUpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudC50cmltKCkgPT09ICdMb2cgSW4nKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNpZ25Jbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaWduVXBNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbChlKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2Nsb3NlLXNpZ24taW4nKSB7XHJcbiAgICAgIGNvbnN0IHNpZ25Jbk1vZGFsUGFyZW50ID1cclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgc2lnbkluTW9kYWxQYXJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1vZGFsUGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBtb2RhbFBhcmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd1NlYXJjaChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudCA9PT0gVUlTZWxlY3RvcnMub3Blbk1vYmlsZVNlYXJjaCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5yaWdodE5hdkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5zaXRlVGl0bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVUlTZWxlY3RvcnMucmlnaHROYXZDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VTZWFyY2hGaWVsZCgpIHtcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhck92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFVJU2VsZWN0b3JzLnJpZ2h0TmF2Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcblxyXG4gICAgaWYgKFVJU2VsZWN0b3JzLnNpdGVUaXRsZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgVUlTZWxlY3RvcnMuc2l0ZVRpdGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0Jyb3dzZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBVSVNlbGVjdG9ycy5icm93c2VNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmJyb3dzZU1vZGFsQXJlYS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIGlmIChVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICB3aGlsZSAoVUlTZWxlY3RvcnMuYnJvd3NlQ29tcG9zZXJzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgICBVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMuZmlyc3RDaGlsZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFJlcXVlc3RzLmJyb3dzZVBhbmVsRmV0Y2goKTtcclxuICAgIC8vUmVxdWVzdHMub3BlbkN1cnJlbnRMZXR0ZXIoKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZEN1cnJlbnRMZXR0ZXIoaXRlbSkge1xyXG4gICAgbGV0IGNvbXBvc2VyUmVzdWx0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbXBvc2VyUmVzdWx0TmFtZS50ZXh0Q29udGVudCA9IGAke2l0ZW19YDtcclxuICAgIFVJU2VsZWN0b3JzLnJlc3VsdHNDb2x1bW4uYXBwZW5kQ2hpbGQoY29tcG9zZXJSZXN1bHROYW1lKTtcclxuICB9XHJcblxyXG4gIGFkZFJhbmRvbUNvbXBvc2Vyc1RvRE9NKG1haW5MZXR0ZXIsIHJhbmRvbUNvbXBBcnIpIHtcclxuICAgIGxldCBjb21wb3NlckxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcG9zZXJMZXR0ZXIuY2xhc3NMaXN0ID0gJ2xldHRlcic7XHJcblxyXG5cclxuICAgIC8vVEhFUkUgSVMgU09NRSBGVUNLSU5HIEJFQU1JTkcgSVNTVUUgSEVSRVxyXG4gICAgY29tcG9zZXJMZXR0ZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgPGgxPiR7bWFpbkxldHRlcn08L2gxPlxyXG4gICAgIDxkaXYgY2xhc3M9XCJsZXR0ZXItY29tcG9zZXJzXCI+XHJcblxyXG4gICAgICAgICAgICR7cmFuZG9tQ29tcEFyci5tYXAoKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmFuZG9tLWNvbXBvc2VyLWxpbmtzXCI+PGEgaHJlZj1cIiNcIj4ke2l0ZW19PC9hPjwvcD5gXHJcbiAgICB9KVxyXG4gICAgICAgIC5qb2luKCcnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICBVSVNlbGVjdG9ycy5icm93c2VDb21wb3NlcnMuYXBwZW5kQ2hpbGQoY29tcG9zZXJMZXR0ZXIpO1xyXG5cclxuICAgIGNvbnN0IGxldHRlckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxldHRlciBoMScpO1xyXG5cclxuICAgIFsuLi5sZXR0ZXJMaW5rc10uZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUmVxdWVzdHMub3BlbkN1cnJlbnRMZXR0ZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmFuZG9tQ29tcG9zZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5yYW5kb20tY29tcG9zZXItbGlua3MgYSdcclxuICAgICk7XHJcbiAgICBbLi4ucmFuZG9tQ29tcG9zZXJMaXN0XS5mb3JFYWNoKChjb21wb3NlckxpbmspID0+IHtcclxuICAgICAgY29uc29sZS5sb2coY29tcG9zZXJMaW5rKTtcclxuICAgICAgY29tcG9zZXJMaW5rLmhyZWYgPSBgL2NvbXBvc2VyLyR7Y29tcG9zZXJMaW5rLnRleHRDb250ZW50fWA7XHJcbiAgICAgIC8vY29tcG9zZXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2coJ1RJVFMnKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyTGlzdCgpIHtcclxuICAgIGlmIChVSVNlbGVjdG9ycy5zZWFyY2hJbnB1dC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgd2hpbGUgKFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLmZpcnN0Q2hpbGRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBVSVNlbGVjdG9ycy5zZWFyY2hCYXJSZXN1bHRzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAoVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5maXJzdENoaWxkKSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5maXJzdENoaWxkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZUNvbXBvc2VyU2VhcmNoUmVzdWx0cyhjdXJyZW50VVJMLCBjb21wb3Nlcikge1xyXG4gICAgLy8gVUlTZWxlY3RvcnMuc2VhcmNoQmFyUmVzdWx0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgY29uc3QgcmVzdWx0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZXN1bHREaXYuY2xhc3NMaXN0ID0gJ3NlYXJjaC1yZXN1bHQtZG93bic7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRVUkwuaW5jbHVkZXMoJ2NvbXBvc2VyJykpIHtcclxuICAgICAgcmVzdWx0RGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgPHA+JHtjb21wb3Nlci5uYW1lfTwvcD5cclxuICAgICAgPGEgaHJlZj1cIiR7Y29tcG9zZXIubmFtZX1cIj48YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG5cIj5WaXNpdCBDb21wb3NlciBQYWdlPC9idXR0b24+PC9hPlxyXG5cclxuICBgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0RGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgPHA+JHtjb21wb3Nlci5uYW1lfTwvcD5cclxuICAgICAgPGEgaHJlZj1cImNvbXBvc2VyLyR7Y29tcG9zZXIubmFtZX1cIj48YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG5cIj5WaXNpdCBDb21wb3NlciBQYWdlPC9idXR0b24+PC9hPlxyXG5cclxuICBgO1xyXG4gICAgfVxyXG5cclxuICAgIFVJU2VsZWN0b3JzLnNlYXJjaEJhclJlc3VsdHMuYXBwZW5kQ2hpbGQocmVzdWx0RGl2KTtcclxuICB9XHJcblxyXG4gIHNob3dEcm9wRG93bigpIHtcclxuICAgIGlmIChVSVNlbGVjdG9ycy5kcm9wRG93bk1lbnUuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xyXG4gICAgICBVSVNlbGVjdG9ycy5kcm9wRG93bk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmRyb3BEb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRk9STSBWQUxJREFUSU9OXHJcbiAgc2hvd0Vycm9yKGlucHV0LCBtZXNzYWdlKSB7XHJcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBmb3JtQ29udHJvbC5jbGFzc05hbWUgPSAnZm9ybS1maWVsZCBlcnJvcic7XHJcblxyXG4gICAgY29uc3QgZXJyb3IgPSBmb3JtQ29udHJvbC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItdGV4dCcpO1xyXG4gICAgZXJyb3IuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIHNob3dTdWNjZXNzKGlucHV0KSB7XHJcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBmb3JtQ29udHJvbC5jbGFzc05hbWUgPSAnZm9ybS1maWVsZCBzdWNjZXNzJztcclxuICB9XHJcblxyXG4gIGdldEZpZWxkTmFtZShpbnB1dCkge1xyXG4gICAgbGV0IG5ld1N0cmluZyA9IGlucHV0LmlkLnNwbGl0KCctJylbMV07XHJcbiAgICAvL2NvbnNvbGUubG9nKG5ld1N0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5ld1N0cmluZy5zbGljZSgxKSk7XHJcbiAgICBpZiAobmV3U3RyaW5nLmluY2x1ZGVzKCdwYXNzd29yZDInKSkge1xyXG4gICAgICByZXR1cm4gJ1JlcGVhdGVkIFBhc3N3b3JkJztcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdTdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuZXdTdHJpbmcuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICAvL0NPTkNFUlQgQlVJTERFUlxyXG5cclxuICBhZGRQaWVjZUZyb21Mb2NhbFN0b3JhZ2UocE9iamVjdCkge1xyXG4gICAgY29uc3QgcGllY2VPYmplY3QgPSBwT2JqZWN0LnBpZWNlO1xyXG4gICAgbGV0IHBpZWNlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBpZWNlRWwuY2xhc3NMaXN0ID0gJ2NvbmNlcnQnO1xyXG4gICAgcGllY2VFbC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XHJcbiAgICBwaWVjZUVsLmlubmVySFRNTCA9IGBcclxuICAgIFxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnMgcGllY2UtZHJhZy1iYXJzXCI+PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWlubmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcG9zZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5jb21wb3Nlcn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3BpZWNlT2JqZWN0LnllYXJzfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7cGllY2VPYmplY3QubmF0aW9uYWxpdHl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cGllY2VPYmplY3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5pbnN0cnVtZW50YXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwaWVjZU9iamVjdC5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnggZGVsZXRlLXBpZWNlXCI+PC9pPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtaW50ZXJtaXNzaW9uXCI+XHJcbiAgICAgICAgICAgIDxwPkFkZCBJbnRlcm1pc3Npb24gSGVyZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgYDtcclxuXHJcbiAgICAvL0ZJWCBERVBFTkRFTkNJRVNcclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5wdXNoKHBpZWNlRWwpO1xyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBVSS5hZGRQaWVjZVRvRE9NKHBpZWNlRWwpO1xyXG5cclxuICAgIFVJLmRlbGV0ZVBpZWNlc0xpc3RlbmVycygpO1xyXG4gICAgVUkuY3JlYXRlSW50ZXJtaXNzaW9uTGlzdGVuZXJzKCk7XHJcbiAgICBVSS5kcmFnTGlzdGVuZXJzKCk7XHJcbiAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKFVJLmNvbmNlcnRQaWVjZUFycikpO1xyXG5cclxuICAgIFN0b3JhZ2UucmVtb3ZlSXRlbSgnbmV3Q29uY2VydCcpO1xyXG5cclxuICB9XHJcblxyXG4gIGdldENvbmNlcnREdXJhdGlvbihwaWVjZUFycikge1xyXG4gICAgaWYgKHBpZWNlQXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBsZXQgZW1wdHkgPSAwO1xyXG4gICAgICBVSS5jb25jZXJ0TGVuZ3RoSnVkZ2VtZW50KFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYSwgZW1wdHkpO1xyXG4gICAgICByZXR1cm4gZW1wdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjb25jZXJ0RHVyYXRpb25BcnIgPSBwaWVjZUFyci5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludGVybWlzc2lvbicpKSB7XHJcbiAgICAgICAgICByZXR1cm4gMzA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBOdW1iZXIoXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnBpZWNlLWluZm8gcDpsYXN0LW9mLXR5cGUnKVxyXG4gICAgICAgICAgICAgIC50ZXh0Q29udGVudC5zcGxpdChcIidcIilbMF1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGNvbmNlcnREdXJhdGlvbiA9IGNvbmNlcnREdXJhdGlvbkFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyB2YWwpO1xyXG4gICAgICAvLyBpZihjb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmNvbmNlcnQuaW50ZXJtaXNzaW9uJykpe1xyXG4gICAgICAvLyAgICAgY29uY2VydER1cmF0aW9uICs9IDMwO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICBVSS5jb25jZXJ0TGVuZ3RoSnVkZ2VtZW50KFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYSwgY29uY2VydER1cmF0aW9uKTtcclxuXHJcbiAgICAgIHJldHVybiBjb25jZXJ0RHVyYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY3JlYXRlSW50ZXJtaXNzaW9uKGUsIGNvbmNlcnRQaWVjZUFycikge1xyXG4gICAgaWYgKCFVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmFkZC1pbnRlcm1pc3Npb24nKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBhcmVudENvbmNlcnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHJcbiAgICAvL2NvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuYWRkLWludGVybWlzc2lvbicpLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuICAgIGxldCBpbnRlcm1pc3Npb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW50ZXJtaXNzaW9uRWwuY2xhc3NMaXN0ID0gJ2NvbmNlcnQgaW50ZXJtaXNzaW9uJztcclxuICAgIC8vaW50ZXJtaXNzaW9uRWwuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgIGludGVybWlzc2lvbkVsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnNcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgPHA+SW50ZXJtaXNzaW9uOiB+MzAgbWludXRlczwvcD5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnggZGVsZXRlLXBpZWNlXCIgaWQ9XCJkZWxldGUtaW50ZXJtaXNzaW9uXCI+PC9pPlxyXG4gICAgICBgO1xyXG5cclxuICAgIC8vQUREIFRPIEFQUFxyXG4gICAgY29uY2VydFBpZWNlQXJyLnNwbGljZShcclxuICAgICAgY29uY2VydFBpZWNlQXJyLmluZGV4T2YocGFyZW50Q29uY2VydCkgKyAxLFxyXG4gICAgICAwLFxyXG4gICAgICBpbnRlcm1pc3Npb25FbFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIH0pO1xyXG4gICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5hcHBlbmRDaGlsZChwaWVjZSk7XHJcbiAgICB9KTtcclxuICAgIC8vY29uY2VydEJ1aWxkZXJBcmVhLmFwcGVuZENoaWxkKGludGVybWlzc2lvbkVsKTtcclxuICAgIC8vY29uc29sZS5sb2coY29uY2VydFBpZWNlQXJyKTtcclxuXHJcbiAgICBVaS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVWkuZ2V0Q29uY2VydER1cmF0aW9uKGNvbmNlcnRQaWVjZUFycikpO1xyXG5cclxuICAgIC8vRGVsZXRlIEludGVybWlzc2lvblxyXG4gICAgbGV0IGNsb3NlSW50ZXJtaXNzaW9uID0gaW50ZXJtaXNzaW9uRWwucXVlcnlTZWxlY3RvcignI2RlbGV0ZS1pbnRlcm1pc3Npb24nKTtcclxuICAgIGNsb3NlSW50ZXJtaXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uY2VydFBpZWNlQXJyLnNwbGljZShjb25jZXJ0UGllY2VBcnIuaW5kZXhPZihlLnRhcmdldC5wYXJlbnRFbGVtZW50KSwgMSk7XHJcblxyXG4gICAgICAvL1JlbW92ZSBJbnRlcm1pc3Npb24gZnJvbSBET01cclxuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgIC8vVXBkYXRlIERhdGEtSW5kZXggQXR0cmlidXRlXHJcbiAgICAgIGNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgVWkudXBkYXRlQ29uY2VydER1cmF0aW9uKFVpLmdldENvbmNlcnREdXJhdGlvbihjb25jZXJ0UGllY2VBcnIpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29uY2VydER1cmF0aW9uKGR1cmF0aW9uTnVtKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0TWludXRlcy50ZXh0Q29udGVudCA9IGAke2R1cmF0aW9uTnVtfWA7XHJcbiAgICBVSVNlbGVjdG9ycy5jb25jZXJ0TWludXRlcy5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xyXG4gIH1cclxuXHJcbiAgY29uY2VydExlbmd0aEp1ZGdlbWVudChjb250YWluZXIsIGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoZHVyYXRpb24gPT0gMCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0Q29uY2x1c2lvbi50ZXh0Q29udGVudCA9IGBQbGVhc2UgYWRkIHNvbWUgcGllY2VzLmA7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRMZW5ndGhDaGVjay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlclRleHRBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGJsdWUnO1xyXG4gICAgfSBlbHNlIGlmIChkdXJhdGlvbiA8IDkwICYmIGR1cmF0aW9uID4gMCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0Q29uY2x1c2lvbi50ZXh0Q29udGVudCA9IGBDb25jZXJ0IGlzIHBvdGVudGlhbGx5IHRvbyBzaG9ydC5gO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlclRleHRBcmVhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2RiMjFmJztcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydExlbmd0aENoZWNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID49IDkwICYmIGR1cmF0aW9uIDw9IDEyMCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0Q29uY2x1c2lvbi50ZXh0Q29udGVudCA9IGBQZXJmZWN0IGNvbmNlcnQgbGVuZ3RoIWA7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyVGV4dEFyZWEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZTc3M2YnO1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0TGVuZ3RoQ2hlY2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0Q29uY2x1c2lvbi50ZXh0Q29udGVudCA9IGBDb25jZXJ0IGlzIHBvdGVudGlhbGx5IHRvbyBsb25nLi4uYDtcclxuICAgICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJUZXh0QXJlYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2E3MzAzZSc7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRMZW5ndGhDaGVjay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNvbmNlcnQuaW50ZXJtaXNzaW9uJykpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vIGludGVybWlzc2lvbiB5ZXQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVBpZWNlc0xpc3RlbmVycygpIHtcclxuICAgIGxldCBkZWxldGVQaWVjZXMgPSBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1waWVjZScpO1xyXG4gICAgZGVsZXRlUGllY2VzLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIHBpZWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkucmVtb3ZlUGllY2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVJbnRlcm1pc3Npb25MaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgbGV0IGludGVybWlzc2lvbkxpc3QgPSBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5hZGQtaW50ZXJtaXNzaW9uJ1xyXG4gICAgKTtcclxuICAgIGludGVybWlzc2lvbkxpc3QuZm9yRWFjaCgoaW50ZXJtaXNzaW9uKSA9PiB7XHJcbiAgICAgIGludGVybWlzc2lvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNyZWF0ZUludGVybWlzc2lvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVBpZWNlKGUpIHtcclxuICAgIC8vZ2V0IHBhcmVudCBFbFxyXG4gICAgbGV0IHNlbGVjdGVkQ29uY2VydCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbmNlcnQpO1xyXG5cclxuICAgIC8vUmVtb3ZlIFNlbGVjdGVkIFBpZWNlIGZyb20gQXJyYXlcclxuICAgIFVJLmNvbmNlcnRQaWVjZUFyci5zcGxpY2UoVUkuY29uY2VydFBpZWNlQXJyLmluZGV4T2Yoc2VsZWN0ZWRDb25jZXJ0KSwgMSk7XHJcblxyXG4gICAgLy9SZW1vdmUgUGllY2UgZnJvbSBET01cclxuICAgIHNlbGVjdGVkQ29uY2VydC5yZW1vdmUoKTtcclxuXHJcbiAgICAvL1VwZGF0ZSBEYXRhLUluZGV4IEF0dHJpYnV0ZVxyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9KTtcclxuICAgIFVJLnVwZGF0ZUNvbmNlcnREdXJhdGlvbihVSS5nZXRDb25jZXJ0RHVyYXRpb24oVUkuY29uY2VydFBpZWNlQXJyKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgYWRkUGllY2VUb0RPTShwaWVjZSkge1xyXG5cclxuICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5hcHBlbmRDaGlsZChwaWVjZSk7XHJcbiAgfVxyXG5cclxuICBjbGVhckZhdmVMaXN0KCkge1xyXG4gICAgd2hpbGUgKFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuZmlyc3RDaGlsZCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5mYXZvcml0ZXNTZWFyY2hSZXN1bHRzLnJlbW92ZUNoaWxkKFxyXG4gICAgICAgIFVJU2VsZWN0b3JzLmZhdm9yaXRlc1NlYXJjaFJlc3VsdHMuZmlyc3RDaGlsZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0ludGVybWlzc2lvbihlKSB7XHJcbiAgICBpZiAoVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5jb25jZXJ0LmludGVybWlzc2lvbicpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSAnY29uY2VydCcpIHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgZS50YXJnZXQgPT09IFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYSAmJlxyXG4gICAgICBVSVNlbGVjdG9ycy5jb25jZXJ0QnVpbGRlckFyZWEucXVlcnlTZWxlY3RvcignLmNvbmNlcnQuc2hvdycpXHJcbiAgICApIHtcclxuICAgICAgbGV0IGN1cnJlbnRDb25jZXJ0ID0gVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJy5jb25jZXJ0LnNob3cnXHJcbiAgICAgICk7XHJcbiAgICAgIGN1cnJlbnRDb25jZXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVDb25jZXJ0VGl0bGUoKSB7XHJcbiAgICBsZXQgY29uY2VydFRpdGxlID0gVUlTZWxlY3RvcnMuY29uY2VydFRpdGxlSW5wdXQudmFsdWU7XHJcblxyXG4gICAgaWYgKGNvbmNlcnRUaXRsZSA9PT0gJycpIHtcclxuICAgICAgLy9QbGVhc2UgUHJvdmlkZSBBIFRpdGxlLlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9DaGFuZ2UgRE9NXHJcbiAgICAgIFVJU2VsZWN0b3JzLnJpZ2h0U2VhcmNoQXJlYS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRUaXRsZUhlYWRlci50ZXh0Q29udGVudCA9IGAke2NvbmNlcnRUaXRsZX1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ29uY2VydFRpdGxlKCkge1xyXG4gICAgVUlTZWxlY3RvcnMucmlnaHRTZWFyY2hBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUludGVybWlzc2lvbihlKSB7XHJcbiAgICBpZiAoIVVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5xdWVyeVNlbGVjdG9yKCcuYWRkLWludGVybWlzc2lvbicpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBQYXJlbnRcclxuICAgIGxldCBwYXJlbnRDb25jZXJ0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgcGFyZW50Q29uY2VydC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcblxyXG4gICAgLy9NYWtlIEludGVybWlzc2lvbiBFbGVtZW50XHJcbiAgICBsZXQgaW50ZXJtaXNzaW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGludGVybWlzc2lvbkVsLmNsYXNzTGlzdCA9ICdjb25jZXJ0IGludGVybWlzc2lvbic7XHJcbiAgICAvL2ludGVybWlzc2lvbkVsLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcbiAgICBpbnRlcm1pc3Npb25FbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1iYXJzXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgIDxwPkludGVybWlzc2lvbjogfjMwIG1pbnV0ZXM8L3A+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzIGZhLTJ4IGRlbGV0ZS1waWVjZVwiIGlkPVwiZGVsZXRlLWludGVybWlzc2lvblwiPjwvaT5cclxuICAgICAgYDtcclxuXHJcbiAgICAvL0FERCBBUFAgRlVOQ1RJT04gSEVSRVxyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLnNwbGljZShcclxuICAgICAgVUkuY29uY2VydFBpZWNlQXJyLmluZGV4T2YocGFyZW50Q29uY2VydCkgKyAxLFxyXG4gICAgICAwLFxyXG4gICAgICBpbnRlcm1pc3Npb25FbFxyXG4gICAgKTtcclxuXHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgocGllY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIHBpZWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIH0pO1xyXG4gICAgVUlTZWxlY3RvcnMuY29uY2VydEJ1aWxkZXJBcmVhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgVUkuY29uY2VydFBpZWNlQXJyLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5hcHBlbmRDaGlsZChwaWVjZSk7XHJcbiAgICB9KTtcclxuICAgIC8vY29uY2VydEJ1aWxkZXJBcmVhLmFwcGVuZENoaWxkKGludGVybWlzc2lvbkVsKTtcclxuICAgIC8vY29uc29sZS5sb2coY29uY2VydFBpZWNlQXJyKTtcclxuXHJcbiAgICBVSS51cGRhdGVDb25jZXJ0RHVyYXRpb24oVUkuZ2V0Q29uY2VydER1cmF0aW9uKFVJLmNvbmNlcnRQaWVjZUFycikpO1xyXG5cclxuICAgIC8vRGVsZXRlIEludGVybWlzc2lvblxyXG4gICAgbGV0IGNsb3NlSW50ZXJtaXNzaW9uID0gaW50ZXJtaXNzaW9uRWwucXVlcnlTZWxlY3RvcignI2RlbGV0ZS1pbnRlcm1pc3Npb24nKTtcclxuICAgIGNsb3NlSW50ZXJtaXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgVUkuY29uY2VydFBpZWNlQXJyLnNwbGljZShVSS5jb25jZXJ0UGllY2VBcnIuaW5kZXhPZihlLnRhcmdldC5wYXJlbnRFbGVtZW50KSwgMSk7XHJcblxyXG4gICAgICAvL1JlbW92ZSBJbnRlcm1pc3Npb24gZnJvbSBET01cclxuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgIC8vVXBkYXRlIERhdGEtSW5kZXggQXR0cmlidXRlXHJcbiAgICAgIFVJLmNvbmNlcnRQaWVjZUFyci5mb3JFYWNoKChwaWVjZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBwaWVjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgVUkudXBkYXRlQ29uY2VydER1cmF0aW9uKFVJLmdldENvbmNlcnREdXJhdGlvbihVSS5jb25jZXJ0UGllY2VBcnIpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlSW50ZXJtaXNzaW9uKGludGVybWlzc2lvbkVsZW1lbnQpIHtcclxuICAgIGxldCBjbG9zZUludGVybWlzc2lvbiA9IGludGVybWlzc2lvbkVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJyNkZWxldGUtaW50ZXJtaXNzaW9uJ1xyXG4gICAgKTtcclxuICAgIGNsb3NlSW50ZXJtaXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHBhcnNlRHVyYXRpb24oKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKFxyXG4gICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS1pbmZvIHA6bGFzdC1vZi10eXBlJykudGV4dENvbnRlbnQuc3BsaXQoXCInXCIpWzBdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy9EcmFnIEZ1bmN0aW9uc1xyXG5cclxuICBkcmFnU3RhcnQoZSkge1xyXG4gICAgVUkuZHJhZ1N0YXJ0SW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0VudGVyKCkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdvdmVyJyk7XHJcbiAgfVxyXG5cclxuICBkcmFnTGVhdmUoKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcclxuICB9XHJcblxyXG4gIGRyYWdPdmVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIGRyYWdEcm9wKGUpIHtcclxuICAgIGNvbnN0IGRyYWdFbmRJbmRleCA9ICtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcclxuICAgIGNvbnNvbGUubG9nKGBmcm9tIGRyYWdEUk9QICR7ZHJhZ0VuZEluZGV4fSwgJHtVSS5kcmFnU3RhcnRJbmRleH1gKVxyXG4gICAgVUkuc3dhcEl0ZW1zKFVJLmRyYWdTdGFydEluZGV4LCBkcmFnRW5kSW5kZXgpO1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xyXG4gIH1cclxuXHJcbiAgZHJhZ0xpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IHBpZWNlRHJhZ0JhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGllY2UtZHJhZy1iYXJzJyk7XHJcbiAgICBjb25zdCBkcmFnQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uY2VydCcpO1xyXG5cclxuICAgIHBpZWNlRHJhZ0JhcnMuZm9yRWFjaCgoZHJhZykgPT4ge1xyXG4gICAgICBkcmFnLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIFVJLmRyYWdTdGFydCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkcmFnQm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIFVJLmRyYWdPdmVyKTtcclxuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBVSS5kcmFnRHJvcCk7XHJcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBVSS5kcmFnRW50ZXIpO1xyXG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgVUkuZHJhZ0xlYXZlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3dhcEl0ZW1zKGZyb21JbmRleCwgdG9JbmRleCkge1xyXG4gICAgY29uc3QgaXRlbU9uZSA9IFVJLmNvbmNlcnRQaWVjZUFycltmcm9tSW5kZXhdO1xyXG4gICAgY29uc3QgaXRlbVR3byA9IFVJLmNvbmNlcnRQaWVjZUFyclt0b0luZGV4XTtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coVUkuY29uY2VydFBpZWNlQXJyKTtcclxuICAgIGNvbnNvbGUubG9nKGl0ZW1PbmUpO1xyXG4gICAgY29uc29sZS5sb2coaXRlbVR3byk7XHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnJbZnJvbUluZGV4XSA9IGl0ZW1Ud287XHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnJbdG9JbmRleF0gPSBpdGVtT25lO1xyXG5cclxuICAgIFVJU2VsZWN0b3JzLmNvbmNlcnRCdWlsZGVyQXJlYS5pbm5lckhUTUwgPSBgYDtcclxuXHJcbiAgICBVSS5jb25jZXJ0UGllY2VBcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgY29uc29sZS5sb2codHlwZW9mIGl0ZW0pXHJcbiAgICAgIFVJLmFkZFBpZWNlVG9ET00oaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vSE9NRVBBR0VcclxuICBkaXNwbGF5Q29uY2VydHModXNlciwgYWxsID0gZmFsc2UpIHtcclxuICAgIGlmIChVSVNlbGVjdG9ycy5mdWxsQ29uY2VydHNHcmlkLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgVUlTZWxlY3RvcnMuZnVsbENvbmNlcnRzR3JpZC5pbm5lckhUTUwgPSBgYDtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlci5jb25jZXJ0cyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyLmNvbmNlcnRzLmxlbmd0aCk7XHJcblxyXG5cclxuICAgIGlmICh1c2VyLmNvbmNlcnRzLmxlbmd0aCA9PT0gMCB8fCB1c2VyLmNvbmNlcnRzLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGxldCBub3RpZmljYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbm90aWZpY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdCA9ICduby1jb25jZXJ0cy1ub3RpZmljYXRpb24nO1xyXG4gICAgICBub3RpZmljYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbXBvc2VyLW5hbWVcIj5WaXNpdCB0aGUgY29uY2VydCBidWlsZGVyIHBhZ2UgYWJvdmUgdG8gc3RhcnQgYnVpbGRpbmcgY29uY2VydHMhPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBgO1xyXG4gICAgICBVSVNlbGVjdG9ycy55b3VyQ29uY2VydHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIFVJU2VsZWN0b3JzLnlvdXJDb25jZXJ0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChub3RpZmljYXRpb25Db250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmICh1c2VyLmZhdm9yaXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgIC8vICAgbGV0IG5vdGlmaWNhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyAgIG5vdGlmaWNhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QgPSAnbm8tZmF2b3JpdGVzLW5vdGlmaWNhdGlvbic7XHJcbiAgICAvLyAgIG5vdGlmaWNhdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAvLyAgICAgICAgICAgPHAgY2xhc3M9XCJuby1mYXZvcml0ZXMtbWVzc2FnZVwiPlBsZWFzZSBicm93c2UgY29tcG9zZXJzIHRvIGFkZCBzb21lIGZhdm9yaXRlcyE8L3A+XHJcbiAgICAvLyAgICAgICBgO1xyXG4gICAgLy8gICBVSVNlbGVjdG9ycy5ob21lU2VhcmNoUmVzdWx0cy5hcHBlbmRDaGlsZChub3RpZmljYXRpb25Db250YWluZXIpO1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvL1NFRSBob21lcGFnZS5qcyBMaW5lIDg2XHJcbiAgICB1c2VyLmNvbmNlcnRzLmZvckVhY2goKGNvbmNlcnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChhbGwgPT09IGZhbHNlICYmIGluZGV4IDwgMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGw9PT1mYWxzZSwgaW5kZXggPCAzJyk7XHJcbiAgICAgICAgLy9mdWxsQ29uY2VydHNHcmlkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgbGV0IGNvbmNlcnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25jZXJ0Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdzZWFyY2gtcmVzdWx0JztcclxuICAgICAgICBjb25jZXJ0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb25jZXJ0LWlkLW51bVwiPiR7Y29uY2VydC5pZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJjb25jZXJ0LW5hbWVcIiBpZD1cImNvbmNlcnQtbmFtZVwiPiAke2NvbmNlcnQudGl0bGVcclxuICAgICAgICAgIH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICR7Y29uY2VydC5waWVjZXNcclxuICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgPHAgY2xhc3M9XCJ0aW55LXBpZWNlLXRpdGxlXCI+IDxzdHJvbmc+ICR7aXRlbS5jb21wb3Nlcn08L3N0cm9uZz4gJHtpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYC50cmltKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5qb2luKCcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnktYnRuIHJlbW92ZS1jb25jZXJ0LWJ0blwiPkRlbGV0ZSBDb25jZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG92ZXItZ29sZFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgIFVJU2VsZWN0b3JzLnlvdXJDb25jZXJ0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb25jZXJ0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBjb25jZXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uY2VydENvbnRhaW5lci5jbGFzc0xpc3QgPSAnc2VhcmNoLXJlc3VsdCc7XHJcbiAgICAgICAgY29uY2VydENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29uY2VydC1pZC1udW1cIj4ke2NvbmNlcnQuaWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiY29uY2VydC1uYW1lXCIgaWQ9XCJjb25jZXJ0LW5hbWVcIj4gJHtjb25jZXJ0LnRpdGxlXHJcbiAgICAgICAgICB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAke2NvbmNlcnQucGllY2VzXHJcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aW55LXBpZWNlLXRpdGxlXCI+IDxzdHJvbmc+ICR7aXRlbS5jb21wb3Nlcn08L3N0cm9uZz4gJHtpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAudHJpbSgpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmpvaW4oJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG4gcmVtb3ZlLWNvbmNlcnQtYnRuXCI+RGVsZXRlIENvbmNlcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Zlci1nb2xkIFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgIFVJU2VsZWN0b3JzLmZ1bGxDb25jZXJ0c0dyaWQuYXBwZW5kQ2hpbGQoY29uY2VydENvbnRhaW5lcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFVJLnJlbW92ZUNvbmNlcnRMaXN0ZW5lcnMoVUlTZWxlY3RvcnMuZnVsbENvbmNlcnRzR3JpZCk7XHJcbiAgICBVSS5yZW1vdmVDb25jZXJ0TGlzdGVuZXJzKFVJU2VsZWN0b3JzLnlvdXJDb25jZXJ0c0NvbnRhaW5lcik7XHJcblxyXG4gICAgLy9USElTIElTIFRIRSBDT1JSRUNUIEJSQUNLRVQgRlVDSyBFU0xJTlQgQU5EIFBSRVRUSUVSLlxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSG92ZXJMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtcmVzdWx0Jyk7XHJcblxyXG4gICAgWy4uLnNlYXJjaFJlc3VsdHNdLmZvckVhY2goKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIFVJLnNob3dHb2xkVW5kZXJsaW5lKTtcclxuICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBVSS5oaWRlR29sZFVuZGVybGluZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNvbmNlcnRMaXN0ZW5lcnMoY29udGFpbmVyKSB7XHJcbiAgICBsZXQgY29uY2VydHNMaXN0ID0gY29udGFpbmVyLmNoaWxkcmVuO1xyXG5cclxuICAgIFsuLi5jb25jZXJ0c0xpc3RdLmZvckVhY2goKGNvbmNlcnQpID0+IHtcclxuICAgICAgaWYgKCFjb25jZXJ0LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtY29uY2VydC1idG4nKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25jZXJ0XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnJlbW92ZS1jb25jZXJ0LWJ0bicpXHJcbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5kZWxldGVDb25jZXJ0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDb25jZXJ0KGUpIHtcclxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICBsZXQgc2VsZWN0ZWRDb25jZXJ0SUQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuY29uY2VydC1pZC1udW0nXHJcbiAgICApO1xyXG4gICAgLy9TV0lUQ0ggVE8gU1RPUkFHRSBGVU5DVElPTlxyXG4gICAgbGV0IGRlbGV0ZUNvbmNlcnRVc2VyID0gU3RvcmFnZS5nZXRVc2VyKCk7XHJcbiAgICBkZWxldGVDb25jZXJ0VXNlci5jb25jZXJ0cy5mb3JFYWNoKChjb25jZXJ0LCBpbmRleCwgb2JqZWN0KSA9PiB7XHJcblxyXG4gICAgICBpZiAoY29uY2VydC5pZCA9PT0gTnVtYmVyKHNlbGVjdGVkQ29uY2VydElELnRleHRDb250ZW50KSkge1xyXG4gICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL1NUT1JBR0UgRlVOQ1RJT05cclxuICAgIFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIGRlbGV0ZUNvbmNlcnRVc2VyKTtcclxuXHJcbiAgfVxyXG5cclxuICAvL1doZXJlIHRvIGNhbGwgdGhpcz9cclxuICBzaG9ydGVuUGllY2VUaXRsZShwaWVjZU5hbWVzKSB7XHJcbiAgICBwaWVjZU5hbWVzLmZvckVhY2goKHBpZWNlKSA9PiB7XHJcbiAgICAgIGxldCBwaWVjZVRpdGxlTGVuZ3RoID0gcGllY2UudGV4dENvbnRlbnQuc2xpY2UoMCwgMjApICsgJy4uLic7XHJcbiAgICAgIHBpZWNlLnRleHRDb250ZW50ID0gcGllY2VUaXRsZUxlbmd0aDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd0dvbGRVbmRlcmxpbmUoZSkge1xyXG4gICAgaWYgKCFlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuaG92ZXItZ29sZCcpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5ob3Zlci1nb2xkJykuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZUdvbGRVbmRlcmxpbmUoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5ob3Zlci1nb2xkJykpIHtcclxuICAgICAgZS50YXJnZXQucXVlcnlTZWxlY3RvcignLmhvdmVyLWdvbGQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGhvbWVDYXJkRW50ZXIoY29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBmdWxsRmF2b3JpdGVzR3JpZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZnVsbC1mYXZvcml0ZXMtZ3JpZCcpO1xyXG4gICAgY29uc3QgZnVsbENvbmNlcnRzR3JpZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZnVsbC1jb25jZXJ0cy1ncmlkJyk7XHJcblxyXG4gICAgZnVsbEZhdm9yaXRlc0dyaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGZ1bGxDb25jZXJ0c0dyaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBbLi4uY29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50ID09PSBmdWxsRmF2b3JpdGVzR3JpZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdFswXSA9PT0gJ2hlYWRlci1yb3cnKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctbW9yZS1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0WzBdID09PSAnc2VhcmNoLXJlc3VsdHMnXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdFsxXSA9PT0gJ3lvdXItcmVjZW50LWNvbmNlcnRzJykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdFsxXSA9PT0gJ2Z1bGwtY29uY2VydHMtZ3JpZCcpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uY2VydHNFbnRlcihjb250YWluZXIpIHtcclxuICAgIGNvbnN0IGZ1bGxDb25jZXJ0c0dyaWQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5zZWFyY2gtcmVzdWx0cy5mdWxsLWNvbmNlcnRzLWdyaWQnXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bGxDb25jZXJ0c0dyaWQuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuXHJcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmhlYWRlci1yb3cuY29uY2VydHMtaGVhZGVyLXJvdycpLnN0eWxlLmRpc3BsYXkgPVxyXG4gICAgICAnZmxleCc7XHJcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5oZWFkZXItcm93LmNvbmNlcnRzLWhlYWRlci1yb3cgLnZpZXctbW9yZS1idG4nXHJcbiAgICApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvL0NoYW5nZSB0aGlzXHJcbiAgICBsZXQgY3VycmVudFVzZXIgPSBTdG9yYWdlLmdldFVzZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgICBVSS5kaXNwbGF5Q29uY2VydHMoY3VycmVudFVzZXIsIHRydWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGZhdm9yaXRlc0VudGVyKGNvbnRhaW5lcikge1xyXG4gICAgY29uc3QgZnVsbEZhdm9yaXRlc0dyaWQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmZ1bGwtZmF2b3JpdGVzLWdyaWQnKTtcclxuICAgIGZ1bGxGYXZvcml0ZXNHcmlkLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXJvdycpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXJvdyAudmlldy1tb3JlLWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBbLi4uZnVsbEZhdm9yaXRlc0dyaWQuY2hpbGRyZW5dLmZvckVhY2goKGZhdm9yaXRlKSA9PiB7XHJcbiAgICAgIGlmIChmYXZvcml0ZS5xdWVyeVNlbGVjdG9yKCcuY29tcG9zZXItbmFtZScpLnRleHRDb250ZW50Lmxlbmd0aCA+PSAxOCkge1xyXG4gICAgICAgIGZhdm9yaXRlLnF1ZXJ5U2VsZWN0b3IoJy5jb21wb3Nlci1uYW1lJykuc3R5bGUuZm9udFNpemUgPSAnMS4ycmVtJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHJlc3VsdHNFeGl0KGUpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ2Zyb20gcmVzdWx0cyBleGl0JywgZS50YXJnZXQuaWQpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhkcm9wRG93bllvdXJDb25jZXJ0cy5pZCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBVSVNlbGVjdG9ycy5tYWluQ29udGVudElubmVyLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBbLi4uVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lci5jaGlsZHJlbl0uZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfSk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlJyk7XHJcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gVUlTZWxlY3RvcnMucmV0dXJuSG9tZSkge1xyXG4gICAgICAgIC8vQ2hhbmdlIHRoaXNcclxuICAgICAgICBVSS5ob21lQ2FyZEVudGVyKFVJU2VsZWN0b3JzLm1haW5Db250ZW50SW5uZXIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBVSVNlbGVjdG9ycy5vcGVuUHJvZmlsZSkge1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGUudGFyZ2V0ID09PSBVSVNlbGVjdG9ycy5vcGVuRmF2b3JpdGVzIHx8XHJcbiAgICAgICAgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbmNlcnQtdmlldy1tb3JlLWJ0bicpICYmXHJcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZpZXctbW9yZS1idG4nKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgVUkuZmF2b3JpdGVzRW50ZXIoVUlTZWxlY3RvcnMubWFpbkNvbnRlbnRJbm5lcik7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgZS50YXJnZXQgPT09IFVJU2VsZWN0b3JzLm9wZW5Db25jZXJ0cyB8fFxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29uY2VydC12aWV3LW1vcmUtYnRuJykgfHxcclxuICAgICAgICBlLnRhcmdldC5pZCA9PT0gVUlTZWxlY3RvcnMuZHJvcERvd25Zb3VyQ29uY2VydHMuaWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgVUkuY29uY2VydHNFbnRlcihVSVNlbGVjdG9ycy5tYWluQ29udGVudElubmVyKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTUwMCk7XHJcbiAgfVxyXG5cclxuICAvL1Nob3J0ZW4gUGllY2UgdGl0bGUgaWYgbmVjZXNzYXJ5XHJcbiAgZm9ybWF0UmVzdWx0c0NhcmQoKSB7XHJcbiAgICBjb25zdCBwaWVjZU5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlLW5hbWUnKTtcclxuICAgIHBpZWNlTmFtZXMuZm9yRWFjaCgocGllY2UpID0+IHtcclxuICAgICAgbGV0IHBpZWNlVGl0bGVMZW5ndGggPSBwaWVjZS50ZXh0Q29udGVudC5zbGljZSgwLCAzMCkgKyAnLi4uJztcclxuICAgICAgcGllY2UudGV4dENvbnRlbnQgPSBwaWVjZVRpdGxlTGVuZ3RoO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0NsZWFyIENvbXBvc2VyIFNlYXJjaCBSZXN1bHRzXHJcbiAgY2xlYXJDb21wb3NlckxpbmtzKCkge1xyXG4gICAgaWYgKFVJU2VsZWN0b3JzLnNlYXJjaEZpZWxkLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB3aGlsZSAoVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgVUlTZWxlY3RvcnMuY29tcG9zZXJMaW5rcy5yZW1vdmVDaGlsZChVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLmZpcnN0Q2hpbGQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MuZmlyc3RDaGlsZCkge1xyXG4gICAgICBVSVNlbGVjdG9ycy5jb21wb3NlckxpbmtzLnJlbW92ZUNoaWxkKFVJU2VsZWN0b3JzLmNvbXBvc2VyTGlua3MuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy9DT01QT1NFUiBQQUdFXHJcbiAgY2xlYXJDb21wb3NlclJlc3VsdHMoKSB7XHJcbiAgICBVSVNlbGVjdG9ycy5waWVjZURldGFpbHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG5cclxuICBzaG93QnV0dG9uRXJyb3IoYnV0dG9uLCBtZXNzYWdlKSB7XHJcbiAgICBsZXQgaW5pdGFsVGV4dCA9IGJ1dHRvbi50ZXh0Q29udGVudDtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYCR7bWVzc2FnZX1gO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gaW5pdGFsVGV4dFxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxQaWVjZUludG9WaWV3KCkge1xyXG4gICAgVUlTZWxlY3RvcnMucGllY2VEZXRhaWxzQ29udGFpbmVyLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVUkgPSBuZXcgVWkoKTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1nL0pvaGFubmVzQnJhaG1zLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZXJvLWJhY2tncm91bmQpO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5yaWdodC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1jb250YWluZXIgaDEsIC5yaWdodC1jb250YWluZXIgaDEge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtc2VhcmNoLWFyZWEge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zZWFyY2gtYXJlYSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LXNlYXJjaC1hcmVhIGlucHV0IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LXNlYXJjaC1hcmVhIGkge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogLjU4cmVtO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY29uY2VydC10aXRsZS1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC10aXRsZS1idG4ge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEgaSB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zZWFyY2gtYXJlYSAuY29uY2VydC10aXRsZSB7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zZWFyY2gtYXJlYS5zaG93IC5jb25jZXJ0LXRpdGxlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNlYXJjaC1hcmVhLnNob3cgLmNvbmNlcnQtdGl0bGUtaW5wdXR7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zZWFyY2gtYXJlYS5zaG93IC5jb25jZXJ0LXRpdGxlLWJ0biB7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5jaGFuZ2UtdGl0bGUtYnRuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEuc2hvdyAuY2hhbmdlLXRpdGxlLWJ0biB7XFxyXFxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgLjNzIGVhc2U7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGVcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5idWlsZGVyLXBpZWNlLWxpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIGhlaWdodDogMHB4O1xcclxcbiAgICBmbGV4OiAzIDEgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1aWxkZXItcGllY2UtbGlzdCBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBoZWlnaHQ6IDdyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDNmODI7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkICMyNDMyNzM7ICovXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5waWVjZS1pbmZvLWxlZnQsIC5waWVjZS1pbmZvLXJpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1pbmZvLWxlZnQge1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1pbmZvLXJpZ2h0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1pbmZvLWxlZnQgcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1pbmZvLWxlZnQgcDpudGgtb2YtdHlwZSgxKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMDVyZW07XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1pbmZvLWxlZnQgcDpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1pbmZvLWxlZnQgcDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYXRhLWNvbXBvc2VyLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtaW5mbyBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5waWVjZS1pbmZvIHtcXHJcXG4gICAgLyp3aWR0aDogMjUlO1xcclxcbiAgICAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC10aXRsZS5jb25jZXJ0LXRpdGxlLW1vYmlsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0LWJ1aWxkZXItYXJlYSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZsZXg6IDMgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0LWJ1aWxkZXItdGV4dC1hcmVhIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIC8qIGZsZXg6IDE7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sdW1uLWxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXItc3BsaXQtbGVmdCwgLmlubmVyLXNwbGl0LXJpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0byAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXItc3BsaXQtcmlnaHQge1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyLXNwbGl0LXJpZ2h0ID4gKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQtbGVuZ3RoLWNoZWNrIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0LWJ1aWxkZXItdGV4dC1hcmVhIHAge1xcclxcbiAgICAvKiBtYXJnaW46IC41cmVtIGF1dG87ICovXFxyXFxufVxcclxcblxcclxcbi5jb21wb3Nlci1pbmZvIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8taW5uZXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC5vdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQgLmFkZC1pbnRlcm1pc3Npb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC5zaG93IC5hZGQtaW50ZXJtaXNzaW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xcclxcbiAgICBib3R0b206IC0yMHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaW50ZXJtaXNzaW9uIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAuODVyZW07XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC5pbnRlcm1pc3Npb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxyXFxuICAgXFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQgaSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21wb3Nlci1pbWcge1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBvc2VyLWluZm8gPiBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5zYXZlLWNvbmNlcnQge1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cyBlYXNlO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5zYXZlLWNvbmNlcnQuZGlzYWJsZWQge1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNjNDMwMmI7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUT0RPOlxcclxcblxcclxcbkZJWCBDT05DRVJUIEJVSUxERVIgQVJFQSBPTiBNT0JJTEUgQU5EIFRBQkxFVC4gSVRTIEZVQ0tFRFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGVmdC1jb250YWluZXIge1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGVmdC1jb250YWluZXIgaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJpZ2h0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4OiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnVpbGRlci1waWVjZS1saXN0IHtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGllY2UtaW5mby1sZWZ0IHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGllY2UtaW5mby1sZWZ0IHA6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbmNlcnQtYnVpbGRlci10ZXh0LWFyZWEge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29uY2VydCAuY29tcG9zZXItaW1nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xcclxcblxcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAuYnVpbGRlci1waWVjZS1saXN0IHtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGVmdC1jb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJpbWFyeS1idG4uY2hhbmdlLXRpdGxlLWJ0biB7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb25jZXJ0LXRpdGxlLWlucHV0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbmNlcnQtYnVpbGRlci10ZXh0LWFyZWEge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29uY2VydC10aXRsZS1idG4ge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5mby1pbm5lci1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbmNlcnQtdGl0bGUuY29uY2VydC10aXRsZS1tb2JpbGUge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbXBvc2VyLWluZm8sIC5waWVjZS1pbmZvIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb21wb3Nlci1pbmZvIHAsIC5waWVjZS1pbmZvIHAge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb21wb3Nlci1pbmZvIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBpZWNlLWluZm8gcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC41cmVtO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hcHAvc3RhdGljL2Nzcy9jb25jZXJ0LWJ1aWxkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLE9BQU87SUFDUCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLE9BQU87SUFDUCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7QUFD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QUNyQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixhQUFhOztJQUVqQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osY0FBYztJQUNsQjs7O0lBR0E7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVyby1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtY29udGFpbmVyIGgxLCAucmlnaHQtY29udGFpbmVyIGgxIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LXNlYXJjaC1hcmVhIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNlYXJjaC1hcmVhLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zZWFyY2gtYXJlYSBpbnB1dCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zZWFyY2gtYXJlYSBpIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IC41OHJlbTtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmNvbmNlcnQtdGl0bGUtaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQtdGl0bGUtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNlYXJjaC1hcmVhIGkge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgcGFkZGluZzogOXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEgLmNvbmNlcnQtdGl0bGUge1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEuc2hvdyAuY29uY2VydC10aXRsZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zZWFyY2gtYXJlYS5zaG93IC5jb25jZXJ0LXRpdGxlLWlucHV0e1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2VhcmNoLWFyZWEuc2hvdyAuY29uY2VydC10aXRsZS1idG4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlLXRpdGxlLWJ0biB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNlYXJjaC1hcmVhLnNob3cgLmNoYW5nZS10aXRsZS1idG4ge1xcclxcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IC4zcyBlYXNlO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYnVpbGRlci1waWVjZS1saXN0IHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBoZWlnaHQ6IDBweDtcXHJcXG4gICAgZmxleDogMyAxIGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbi5idWlsZGVyLXBpZWNlLWxpc3QgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgaGVpZ2h0OiA3cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzZjgyO1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCAjMjQzMjczOyAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGllY2UtaW5mby1sZWZ0LCAucGllY2UtaW5mby1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtaW5mby1sZWZ0IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtaW5mby1yaWdodCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtaW5mby1sZWZ0IHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtaW5mby1sZWZ0IHA6bnRoLW9mLXR5cGUoMSkge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtaW5mby1sZWZ0IHA6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtaW5mby1sZWZ0IHA6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0YS1jb21wb3Nlci1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBpZWNlLWluZm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGllY2UtaW5mbyB7XFxyXFxuICAgIC8qd2lkdGg6IDI1JTtcXHJcXG4gICAgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQtdGl0bGUuY29uY2VydC10aXRsZS1tb2JpbGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC1idWlsZGVyLWFyZWEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiAwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmbGV4OiAzIDEgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC1idWlsZGVyLXRleHQtYXJlYSB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICAvKiBmbGV4OiAxOyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbHVtbi1sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyLXNwbGl0LWxlZnQsIC5pbm5lci1zcGxpdC1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IGF1dG8gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyLXNwbGl0LXJpZ2h0IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pbm5lci1zcGxpdC1yaWdodCA+ICoge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0LWxlbmd0aC1jaGVjayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uY2VydC1idWlsZGVyLXRleHQtYXJlYSBwIHtcXHJcXG4gICAgLyogbWFyZ2luOiAuNXJlbSBhdXRvOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItaW5mbyB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWlubmVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQub3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0IC5hZGQtaW50ZXJtaXNzaW9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQuc2hvdyAuYWRkLWludGVybWlzc2lvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXHJcXG4gICAgYm90dG9tOiAtMjBweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWludGVybWlzc2lvbiBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmNlcnQuaW50ZXJtaXNzaW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xcclxcbiAgIFxcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb25jZXJ0IGkge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL0pvaGFubmVzQnJhaG1zLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItaW5mbyA+IHA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLnNhdmUtY29uY2VydCB7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzIGVhc2U7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLnNhdmUtY29uY2VydC5kaXNhYmxlZCB7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2M0MzAyYjtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFRPRE86XFxyXFxuXFxyXFxuRklYIENPTkNFUlQgQlVJTERFUiBBUkVBIE9OIE1PQklMRSBBTkQgVEFCTEVULiBJVFMgRlVDS0VEXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgICAubWFpbi1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sZWZ0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sZWZ0LWNvbnRhaW5lciBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmlnaHQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXg6IG5vbmU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idWlsZGVyLXBpZWNlLWxpc3Qge1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5waWVjZS1pbmZvLWxlZnQgcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5waWVjZS1pbmZvLWxlZnQgcDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29uY2VydC1idWlsZGVyLXRleHQtYXJlYSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb25jZXJ0IC5jb21wb3Nlci1pbWcge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIC5idWlsZGVyLXBpZWNlLWxpc3Qge1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sZWZ0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcmltYXJ5LWJ0bi5jaGFuZ2UtdGl0bGUtYnRuIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbmNlcnQtdGl0bGUtaW5wdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29uY2VydC1idWlsZGVyLXRleHQtYXJlYSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb25jZXJ0LXRpdGxlLWJ0biB7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmZvLWlubmVyLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICAuY29uY2VydC10aXRsZS5jb25jZXJ0LXRpdGxlLW1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29tcG9zZXItaW5mbywgLnBpZWNlLWluZm8ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbXBvc2VyLWluZm8gcCwgLnBpZWNlLWluZm8gcCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbXBvc2VyLWluZm8gcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGllY2UtaW5mbyBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjVyZW07XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2dlZC1pbiBpbWcge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcmlnaHQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHRvcDogMTAlO1xcclxcbiAgcmlnaHQ6IDUlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUgbGkge1xcclxcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgLyptYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIFxcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgXFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGkge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjZDIxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUtaXRlbXMgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhLWlubmVyIHtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgbWF4LWhlaWdodDogOTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50LWFyZWEtaW5uZXIucmVtb3ZlIHtcXHJcXG4gIGFuaW1hdGlvbjogMXMgcmVtb3ZlLW1haW47XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyByZW1vdmUtbWFpbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyBhIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgaSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzLCAueW91ci1yZWNlbnQtY29uY2VydHMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1nYXA6IDIwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzLnVzZXItcHJvZmlsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQgLmNvbXBvc2VyLW5hbWUge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQgLmNvbmNlcnQtbmFtZSB7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQgLnRpbnktcGllY2UtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAuNzVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LmxlYXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHRzLmZ1bGwtZmF2b3JpdGVzLWdyaWQsIC5zZWFyY2gtcmVzdWx0cy5mdWxsLWNvbmNlcnRzLWdyaWQge1xcclxcbiAgXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBhbmltYXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5mdWxsLWZhdm9yaXRlcy1ncmlkLmFuaW1hdGUge1xcclxcbiAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5ob3Zlci1nb2xkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogLjVyZW07XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyLWdvbGQuc2hvdyB7XFxyXFxuICBhbmltYXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5jb21wb3Nlci1pbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICByaWdodDogMjAlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5hdWRpby1wbGF5ZXItY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMCU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWltYWdlIHtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4udmlzaXQtcGFnZSB7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb25jZXJ0LWlkLW51bSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC11c2VybmFtZSAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLnJlbW92ZS1jb25jZXJ0LWJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQzMDJiO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi55b3VyLXJlY2VudC1jb25jZXJ0cy5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBvcGFjaXR5e1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jb250YWluZXIge1xcclxcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbmNlcnQtbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW46IC41cmVtOztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRlbnQtYXJlYS1pbm5lciB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaG9tZS1tb2JpbGUtaWNvbnMge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGVmdC1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcmltYXJ5LWJ0bi5yZW1vdmUtY29uY2VydC1idG4ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2FwcC9zdGF0aWMvY3NzL2hvbWVwYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87RUFDUCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCO0dBQ0M7QUFDSDs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCOztFQUV0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYzs7RUFFZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7OztBQUlBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osT0FBTzs7QUFFVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1COzs7QUFHckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVOztFQUVaO0FBQ0Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCwyREFBMkQ7QUFDN0Q7Ozs7QUFJQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UsMkJBQTJCO0FBQzdCOzs7O0FBSUE7O0VBRUUsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7R0FDRyxVQUFVO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOzs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7O0FBRTNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7OztBQUlBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTs7O0VBR0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOzs7QUFHQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5sb2dnZWQtaW4gaW1nIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICB0b3A6IDEwJTtcXHJcXG4gIHJpZ2h0OiA1JTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1tZW51IGxpIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tbWVudSBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIC8qbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gICovXFxyXFxufVxcclxcblxcclxcbi5sZWZ0LW1lbnUge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtbWVudS1pdGVtcyB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIFxcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhY2QyMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1tZW51LWl0ZW1zIGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQtYXJlYS1pbm5lciB7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudC1hcmVhLWlubmVyLnJlbW92ZSB7XFxyXFxuICBhbmltYXRpb246IDFzIHJlbW92ZS1tYWluO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmVtb3ZlLW1haW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1yb3cgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcm93IGkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cywgLnlvdXItcmVjZW50LWNvbmNlcnRzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cy51c2VyLXByb2ZpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC5jb21wb3Nlci1uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC5jb25jZXJ0LW5hbWUge1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0IC50aW55LXBpZWNlLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC5sZWF2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0cy5mdWxsLWZhdm9yaXRlcy1ncmlkLCAuc2VhcmNoLXJlc3VsdHMuZnVsbC1jb25jZXJ0cy1ncmlkIHtcXHJcXG4gIFxcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbC1mYXZvcml0ZXMtZ3JpZC5hbmltYXRlIHtcXHJcXG4gICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXItZ29sZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IC41cmVtO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5ob3Zlci1nb2xkLnNob3cge1xcclxcbiAgYW5pbWF0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcG9zZXItaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcmlnaHQ6IDIwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXVkaW8tcGxheWVyLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLnZpc2l0LXBhZ2Uge1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29uY2VydC1pZC1udW0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdXNlcm5hbWUgIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5yZW1vdmUtY29uY2VydC1idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0MzAyYjtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ueW91ci1yZWNlbnQtY29uY2VydHMuaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eXtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcblxcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LWhlaWdodDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb25jZXJ0LW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAuNXJlbTs7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jb250ZW50LWFyZWEtaW5uZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtbW9iaWxlLWljb25zIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxlZnQtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJpbWFyeS1idG4ucmVtb3ZlLWNvbmNlcnQtYnRuIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kOiAjNDI1N2IyO1xcclxcbiAgICAtLWhlcm8tYmFja2dyb3VuZDogIzNiNGM5YjtcXHJcXG4gICAgLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kOiAjM2NjZmNmO1xcclxcbiAgICAtLW1haW4tYmFja2dyb3VuZDogI2Y2ZjdmYjtcXHJcXG4gICAgLS1nb2xkOiAjZmFjZDIxO1xcclxcbiAgICAtLWRlZmF1bHQtc2hhZG93OiAwcHggMTNweCAyNnB4ICMwMDAwMDAyRjtcXHJcXG4gICAgLS1zdWNjZXNzLWNvbG9yOiAjMmVjYzcxO1xcclxcbiAgICAtLWVycm9yLWNvbG9yOiAjZTc0YzNjO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctbmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctbmF2IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtdGl0bGUge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYSwgLnNpdGUtdGl0bGUgYSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYTpob3ZlciwgLm5hdi1yaWdodCBsaSBhOmhvdmVyLCAuc2l0ZS10aXRsZSBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMTg5LCAxOTUsIDE5OSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sZWZ0IGxpIGEgPiAqIHtcXHJcXG4gICAgbWFyZ2luOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IGxpIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lLW1vYmlsZS1pY29ucyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyLW92ZXJsYXkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0b3A6IDglO1xcclxcbiAgICAvKmxlZnQ6IDI2JTsqL1xcclxcbiAgICByaWdodDogMjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd24gLnByaW1hcnktYnRuIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1maWVsZCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItZmllbGQ6aW52YWxpZCB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLmZhLXRpbWVzLmNsb3NlLXNlYXJjaCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaGVyby1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVyby1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyLWxlZnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuLmdldC1zdGFydGVkLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYWNoZXItcGFyZW50LWxpbmtzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYWNoZXItcGFyZW50LWxpbmtzIGEge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwge1xcclxcbiAgICBoZWlnaHQ6IDc1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNhcm91c2VsIGltZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgLyogQ1NTIGNoYW5nZSBpbiBKUyAqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6IGdyZXk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLyogQ2hhbmdlIGZsZXgvbm9uZSAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1jb250YWluZXIgPiBpIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoaXJkLXBhcnR5LWJ1dHRvbnMge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4gaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeS1idG4gcCB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSB7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgICBwYWRkaW5nOiAuNzVyZW0gMnJlbSAuNzVyZW0gLjNyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQpO1xcclxcbiAgICBib3JkZXI6IDJweCBncmV5IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNjbG9zZS1zaWduLWluLCAjY2xvc2Utc2lnbi11cCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpcnRoZGF5LXNlbGVjdG9yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1maWVsZCBsYWJlbCB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiAjYzJjNmQ0O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuc3VjY2VzcyBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgaW5wdXQgIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIC5mb3JtLWZpZWxkLmVycm9yIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59IFxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmVycm9yLXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgLmVycm9yLXRleHQge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBmb250LXNpemU6IC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0ZXItYnRuLCAubG9naW4tYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0ZXItYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzZkNDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnRuIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDE1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaDEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAuNTByZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWFyZWEge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1idXR0b25zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbnMgLnNlY29uZGFyeS1idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogNjIlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5zdWNjZXNzIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLmVycm9yIGlucHV0ICB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWVycm9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuZXJyb3IgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmVycm9yLXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbiAgICAvKnZpc2liaWxpdHk6IGhpZGRlbjsqL1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uYmlnLWxvZ2luLWJ0biB7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYnJvd3NlLW1vZGFsIHtcXHJcXG4gICAgLyogQ0hBTkdFIFdJVEggSkFWQVNDSVBUICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1tb2RhbC1hcmVhIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICBcXHJcXG4gICAgLyp0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsqL1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnJvd3NlLW1vZGFsLWFyZWEuc2hvdyB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJyb3dzZS1oZWFkZXIgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJyb3dzZS1oZWFkZXIge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLWNvbXBvc2VycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8qIG1heC1oZWlnaHQ6IDEwMCU7ICovXFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyIGgxICB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlci1jb21wb3NlcnMge1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFuZG9tLWNvbXBvc2VyLWxpbmtzIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlcm8tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxhbmRpbmctbmF2IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXYtbGVmdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICB3aWR0aDogMzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb2JpbGUtc2VhcmNoLWljb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogOTAlO1xcclxcbiAgICAgICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgICAgIGxlZnQ6IDIwJTtcXHJcXG4gICAgICAgIHRvcDogNy41JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XFxyXFxuICAgIFxcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIC8qXFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgKi9cXHJcXG4gICAgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpdGUtdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yaWdodC1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdi1yaWdodCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICAgICAgLyogdG9wOiA5JTsgKi9cXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbGVmdDogMDsgICAgXFxyXFxuICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aGlyZC1wYXJ0eS1idXR0b25zIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGhpcmQtcGFydHktYnV0dG9ucyAuc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgICAgICBtYXJnaW46IC41cmVtIDA7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5zZWxlY3QtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbi11cC1mb3JtIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLjNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm0tZmllbGQge1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByaW1hcnktYnRuLnJlZ2lzdGVyLWJ0biwgLnByaW1hcnktYnRuLmxvZ2luLWJ0biB7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VhcmNoLWJhci1vdmVybGF5IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtcmVzdWx0LWRvd24gcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXBwL3N0YXRpYy9jc3MvbGFuZGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsc0JBQXNCOztBQUUxQjs7O0FBR0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7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QUFVO0lBQ2Q7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFNBQVM7UUFDVCxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsUUFBUTtJQUNaOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztJQUVJO1FBQ0k7O1NBRUM7O0lBRUw7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsT0FBTztRQUNQLGVBQWU7UUFDZiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtJQUNkO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsV0FBVztRQUNYLE9BQU87O0lBRVg7OztJQUdBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsUUFBUTtJQUNaOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQ6ICM0MjU3YjI7XFxyXFxuICAgIC0taGVyby1iYWNrZ3JvdW5kOiAjM2I0YzliO1xcclxcbiAgICAtLXByaW1hcnktYnV0dG9uLWJhY2tncm91bmQ6ICMzY2NmY2Y7XFxyXFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kOiAjZjZmN2ZiO1xcclxcbiAgICAtLWdvbGQ6ICNmYWNkMjE7XFxyXFxuICAgIC0tZGVmYXVsdC1zaGFkb3c6IDBweCAxM3B4IDI2cHggIzAwMDAwMDJGO1xcclxcbiAgICAtLXN1Y2Nlc3MtY29sb3I6ICMyZWNjNzE7XFxyXFxuICAgIC0tZXJyb3ItY29sb3I6ICNlNzRjM2M7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZGluZy1uYXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubGFuZGluZy1uYXYgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS10aXRsZSB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSBhLCAuc2l0ZS10aXRsZSBhIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGVmdCBsaSBhOmhvdmVyLCAubmF2LXJpZ2h0IGxpIGE6aG92ZXIsIC5zaXRlLXRpdGxlIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogcmdiYSgxODksIDE5NSwgMTk5LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxlZnQgbGkgYSA+ICoge1xcclxcbiAgICBtYXJnaW46IC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXJpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtcmlnaHQgbGkge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtbW9iaWxlLWljb25zIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXItb3ZlcmxheSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1yZXN1bHRzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRvcDogOCU7XFxyXFxuICAgIC8qbGVmdDogMjYlOyovXFxyXFxuICAgIHJpZ2h0OiAyMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWRvd246aG92ZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1kb3duIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtZG93biAucHJpbWFyeS1idG4ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zZWFyY2gtYmFyLWZpZWxkIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhci1maWVsZDppbnZhbGlkIHtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEuZmEtdGltZXMuY2xvc2Utc2VhcmNoIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtaWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5oZXJvLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZXJvLWJhY2tncm91bmQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXItbGVmdCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXRleHQtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4uZ2V0LXN0YXJ0ZWQtYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhY2hlci1wYXJlbnQtbGlua3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGVhY2hlci1wYXJlbnQtbGlua3MgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jYXJvdXNlbCB7XFxyXFxuICAgIGhlaWdodDogNzUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY2Fyb3VzZWwgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgICAvKiBDU1MgY2hhbmdlIGluIEpTICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogZ3JleTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAvKiBDaGFuZ2UgZmxleC9ub25lICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWNvbnRhaW5lciA+IGkge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGhpcmQtcGFydHktYnV0dG9ucyB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJ0biBwIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi11cC1mb3JtIHtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtY29udGFpbmVyIHNlbGVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IC43NXJlbSAycmVtIC43NXJlbSAuM3JlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1idXR0b24tYmFja2dyb3VuZCk7XFxyXFxuICAgIGJvcmRlcjogMnB4IGdyZXkgc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2Nsb3NlLXNpZ24taW4sICNjbG9zZS1zaWduLXVwIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlydGhkYXktc2VsZWN0b3Ige1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZpZWxkIGxhYmVsIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY29sb3I6ICNjMmM2ZDQ7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQgaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5zdWNjZXNzIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc3VjY2Vzcy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuc3VjY2VzcyBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5lcnJvciBpbnB1dCAge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWduLXVwLWZvcm0gLmZvcm0tZmllbGQuZXJyb3IgbGFiZWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn0gXFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24tdXAtZm9ybSAuZm9ybS1maWVsZC5lcnJvciAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWdpc3Rlci1idG4sIC5sb2dpbi1idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWdpc3Rlci1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjNmQ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1idG4gYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWhlYWRlciBoMSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1oZWFkZXIgaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IC41MHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4taGVhZGVyIGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tYXJlYSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWJ1dHRvbnMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tYnV0dG9ucyAuc2Vjb25kYXJ5LWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkIGlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZCBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQ6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyBwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiA2MiU7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0tZmllbGRzIC5mb3JtLWZpZWxkLnN1Y2Nlc3MgaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuc3VjY2VzcyBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1maWVsZHMgLmZvcm0tZmllbGQuZXJyb3IgaW5wdXQgIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZXJyb3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZC5lcnJvciBsYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxufSBcXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWZpZWxkcyAuZXJyb3ItdGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxyXFxuICAgIC8qdmlzaWJpbGl0eTogaGlkZGVuOyovXFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bi5iaWctbG9naW4tYnRuIHtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNicm93c2UtbW9kYWwge1xcclxcbiAgICAvKiBDSEFOR0UgV0lUSCBKQVZBU0NJUFQgKi9cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLW1vZGFsLWFyZWEge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgIFxcclxcbiAgICAvKnRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlOyovXFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5icm93c2UtbW9kYWwtYXJlYS5zaG93IHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYnJvd3NlLWhlYWRlciBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJvd3NlLWhlYWRlciB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5icm93c2UtY29tcG9zZXJzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLyogbWF4LWhlaWdodDogMTAwJTsgKi9cXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXIgaDEgIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyLWNvbXBvc2VycyB7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5yYW5kb20tY29tcG9zZXItbGlua3MgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVyby1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGFuZGluZy1uYXYge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdi1sZWZ0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS10aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vYmlsZS1zZWFyY2gtaWNvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbi11cC1jb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICB3aWR0aDogNzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtYmFyLXJlc3VsdHMge1xcclxcbiAgICAgICAgbGVmdDogMjAlO1xcclxcbiAgICAgICAgdG9wOiA3LjUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5icm93c2UtbW9kYWwtYXJlYSB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcXHJcXG4gICAgXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgLypcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAqL1xcclxcbiAgICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2l0ZS10aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcXHJcXG4gICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJpZ2h0LW5hdi1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2LXJpZ2h0IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNlYXJjaC1iYXItcmVzdWx0cyB7XFxyXFxuICAgICAgICAvKiB0b3A6IDklOyAqL1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBsZWZ0OiAwOyAgICBcXHJcXG4gICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnNpZ24tdXAtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRoaXJkLXBhcnR5LWJ1dHRvbnMge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aGlyZC1wYXJ0eS1idXR0b25zIC5zZWNvbmRhcnktYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbjogLjVyZW0gMDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnNlbGVjdC1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWxlY3QtY29udGFpbmVyIHNlbGVjdCB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaWduLXVwLWZvcm0gbGFiZWwge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAuM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9ybS1maWVsZCB7XFxyXFxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJpbWFyeS1idG4ucmVnaXN0ZXItYnRuLCAucHJpbWFyeS1idG4ubG9naW4tYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gtYmFyLW92ZXJsYXkge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlYXJjaC1yZXN1bHQtZG93biBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5icm93c2UtbW9kYWwtYXJlYSB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9