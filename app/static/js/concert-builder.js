// const addToConcert = document.querySelectorAll('.add-to-concert');
// const deletePiece = document.getElementsByClassName('delete-piece');

// const concertBuilderArea = document.getElementById('concert-builder-area');
// const concertMinutes = document.getElementById('concert-minutes');
// const concertConclusion = document.getElementById('concert-conclusion');

// const searchFavorites = document.getElementById('search-favorites');
// const favoritesSearchResults = document.getElementById(
//   'favorites-search-results'
// );
// const deleteIntermission = document.getElementById('delete-intermission');
// const concertTitleBtn = document.getElementById('concert-title-btn');
// const rightSearchArea = document.getElementById('right-search-area');
// const concertTitleInput = document.getElementById('concert-title-input');
// const changeTitleBtn = document.getElementById('change-title-btn');
// const concertTitleHeader = document.getElementById('concert-title-header');
// const saveConcertBtn = document.getElementById('save-concert-btn');
// const initialFavoritesResults = [...favoritesSearchResults.children];

// //ADDED TO APP
// let concertPieceArr = [];
// let favoritesResults = [];
// let dragStartIndex;
// let number = 0;

//ADDED TO STORAGE
// if (localStorage.getItem('newConcert')) {
//   let res = JSON.parse(localStorage.getItem('newConcert'));
//   console.log(res);
//   getFullPieceInfo(res.pieces[0].title.split('...')[0]);
//   //dynamicSearch(localStorage.getItem('newConcert', 'piece'))
// }
//ADDED TO REQUESTS
// function getFullPieceInfo(pieceTitle) {
//   const request = new XMLHttpRequest();
//   request.open('POST', `/piece_detail/${pieceTitle}`);
//   request.onload = () => {
//     const data = JSON.parse(request.responseText);
//     addPieceFromLocalStorage(data);
//   };

//   request.send();
//   return false;
// }

//FIX ISSUES ON BOTTOM
// function addPieceFromLocalStorage(pObject) {
//   const pieceObject = pObject.piece;
//   console.log(pieceObject);
//   let pieceEl = document.createElement('div');
//   pieceEl.classList = 'concert';
//   pieceEl.setAttribute('draggable', 'true');
//   pieceEl.innerHTML = `

//         <i class="fas fa-bars piece-drag-bars"></i>
//         <div class="info-inner-container">
//             <div class="composer-info">
//                 <p>${pieceObject.composer}</p>
//                 <p>${pieceObject.years}</p>
//                 <p>${pieceObject.nationality}</p>
//             </div>
//             <div class="piece-info">
//                 <p>${pieceObject.title}</p>
//                 <p>${pieceObject.instrumentation}</p>
//                 <p>${pieceObject.duration}</p>
//             </div>
//         </div>

//         <i class="fa fa-times fa-2x delete-piece"></i>
//         <div class="add-intermission">
//             <p>Add Intermission Here</p>
//         </div>

//     `;

//   concertPieceArr.push(pieceEl);
//   concertPieceArr.forEach((piece, index) => {
//     piece.setAttribute('data-index', index);
//   });

//   addPieceToDOM(pieceEl);

//   deletePiecesListeners();
//   createIntermissionListeners();
//   dragListeners();
//   updateConcertDuration(getConcertDuration(concertPieceArr));

//   localStorage.removeItem('newConcert');
// }
//ADDED TO APP
// function addPieceToConcertArr(e) {
//   const addToConcertContainer = e.target.parentElement.parentElement;
//   const pieceComposer = addToConcertContainer.querySelector(
//     '.piece-info-left > p'
//   );
//   const pieceComposerDates = addToConcertContainer.querySelector(
//     '.data-composer-dates'
//   );
//   const pieceComposerNationality = addToConcertContainer.querySelector(
//     '.data-composer-nationality'
//   );
//   const pieceInstrumentation = addToConcertContainer.querySelector(
//     '.data-piece-instrumentation'
//   );
//   const pieceTitle = addToConcertContainer.querySelector(
//     '.piece-info-left p:last-child'
//   );
//   const pieceDuration = addToConcertContainer.querySelector(
//     '.piece-info-right p'
//   );

//   //Change notifictaion text back and forth.
//   e.target.textContent = 'Piece added to concert';

//   window.setTimeout(() => {
//     e.target.textContent = 'Add to concert';
//   }, 1000);

//   let pieceEl = document.createElement('div');
//   pieceEl.classList = 'concert';
//   //pieceEl.setAttribute("draggable", "true");
//   pieceEl.innerHTML = `

//         <i class="fas fa-bars piece-drag-bars" draggable="true"></i>
//         <div class="info-inner-container">
//             <div class="composer-info">
//                 <p>${pieceComposer.textContent}</p>
//                 <p>${pieceComposerDates.textContent}</p>
//                 <p>${pieceComposerNationality.textContent}</p>
//             </div>
//             <div class="piece-info">
//                 <p>${pieceTitle.textContent}</p>
//                 <p>${pieceInstrumentation.textContent}</p>
//                 <p>${pieceDuration.textContent}</p>
//             </div>
//         </div>
//         <i class="fa fa-times fa-2x delete-piece"></i>
//         <div class="add-intermission">
//             <p>Add Intermission Here</p>
//         </div>

//     `;

//   concertPieceArr.push(pieceEl);
//   concertPieceArr.forEach((piece, index) => {
//     piece.setAttribute('data-index', index);
//   });

//   addPieceToDOM(pieceEl);

//   deletePiecesListeners();
//   createIntermissionListeners();
//   dragListeners();
//   updateConcertDuration(getConcertDuration(concertPieceArr));
// }

//APP
// function getConcertDuration(pieceArr) {
//   if (pieceArr.length === 0) {
//     let empty = 0;
//     concertLengthJudgement(concertBuilderArea, empty);
//     return empty;
//   } else {
//     const concertDurationArr = pieceArr.map((item) => {
//       if (item.classList.contains('intermission')) {
//         return 30;
//       } else {
//         return Number(
//           item
//             .querySelector('.piece-info p:last-of-type')
//             .textContent.split("'")[0]
//         );
//       }
//     });
//     let concertDuration = concertDurationArr.reduce((acc, val) => acc + val);
//     // if(concertBuilderArea.querySelector('.concert.intermission')){
//     //     concertDuration += 30;
//     // }

//     concertLengthJudgement(concertBuilderArea, concertDuration);

//     return concertDuration;
//   }
// }

// function updateConcertDuration(durationNum) {

//     concertMinutes.textContent = `${durationNum}`;
// }

// function concertLengthJudgement(container, duration) {

//     if(duration == 0) {
//         concertConclusion.textContent = `Please add some pieces.`;
//     } else if (duration < 90 && duration > 0) {
//         concertConclusion.textContent = `Concert is potentially too short.`;
//     } else if (duration >= 90 && duration <= 120) {
//         concertConclusion.textContent = `Perfect concert length!`;
//     } else {
//         concertConclusion.textContent = `Concert is getting a bit long...`;
//     };

//     if(container.querySelector('.concert.intermission')) {
//         console.log('no intermission yet');
//     };
// }

//ADDED TO UI

// function createIntermission(e) {
//   if (!concertBuilderArea.querySelector('.add-intermission')) {
//     return false;
//   }

//   let parentConcert = e.target.parentElement.parentElement;
//   console.log('this is the parent Concert');
//   console.log(parentConcert);
//   e.target.parentElement.parentElement.classList.remove('show');

//   //concertBuilderArea.querySelector('.add-intermission').parentElement.classList.remove('show');

//   let intermissionEl = document.createElement('div');
//   intermissionEl.classList = 'concert intermission';
//   //intermissionEl.setAttribute("draggable", "true");
//   intermissionEl.innerHTML = `
//         <i class="fas fa-bars" draggable="true"></i>
//         <p>Intermission: ~30 minutes</p>
//         <i class="fa fa-times fa-2x delete-piece" id="delete-intermission"></i>
//     `;

//   //ADD TO APP
//   concertPieceArr.splice(
//     concertPieceArr.indexOf(parentConcert) + 1,
//     0,
//     intermissionEl
//   );

//   concertPieceArr.forEach((piece, index) => {
//     piece.setAttribute('data-index', index);
//   });
//   concertBuilderArea.innerHTML = '';
//   concertPieceArr.forEach((piece) => {
//     concertBuilderArea.appendChild(piece);
//   });
//   //concertBuilderArea.appendChild(intermissionEl);
//   //console.log(concertPieceArr);

//   updateConcertDuration(getConcertDuration(concertPieceArr));

//   //Delete Intermission
//   let closeIntermission = intermissionEl.querySelector('#delete-intermission');
//   closeIntermission.addEventListener('click', (e) => {
//     concertPieceArr.splice(concertPieceArr.indexOf(e.target.parentElement), 1);

//     //Remove Intermission from DOM
//     e.target.parentElement.remove();

//     //Update Data-Index Attribute
//     concertPieceArr.forEach((piece, index) => {
//       piece.setAttribute('data-index', index);
//     });

//     updateConcertDuration(getConcertDuration(concertPieceArr));
//   });
// }

// function parseDuration() {
//   return Number(
//     this.querySelector('.piece-info p:last-of-type').textContent.split("'")[0]
//   );
// }

//ADDED TO UI
// function deletePiecesListeners() {
//   let deletePieces = concertBuilderArea.querySelectorAll('.delete-piece');
//   deletePieces.forEach((piece) => {
//     piece.addEventListener('click', removePiece);
//   });
// }
//ADDED TO UI
// function createIntermissionListeners() {
//   let intermissionList = concertBuilderArea.querySelectorAll(
//     '.add-intermission'
//   );
//   intermissionList.forEach((intermission) => {
//     intermission.addEventListener('click', createIntermission);
//   });
// }

// function addPieceToDOM(piece) {
//   concertBuilderArea.appendChild(piece);
// }

//ADDED TO UI
// function removePiece() {
//   //get parent El
//   let selectedConcert = this.parentElement;

//   //Remove Selected Piece from Array
//   concertPieceArr.splice(concertPieceArr.indexOf(selectedConcert), 1);

//   //Remove Piece from DOM
//   selectedConcert.remove();

//   //Update Data-Index Attribute
//   concertPieceArr.forEach((piece, index) => {
//     piece.setAttribute('data-index', index);
//   });
//   updateConcertDuration(getConcertDuration(concertPieceArr));
// }

// function clearFaveList() {
//   while (favoritesSearchResults.firstChild) {
//     favoritesSearchResults.removeChild(favoritesSearchResults.firstChild);
//   }

//   //Not quite working
// }

//ADDED TO REQUESTS
// function dynamicSearch() {
//   //After search, add all elements to DOM?
//   console.log('GETTING ALL FAVES?');
//   const request = new XMLHttpRequest();

//   let searchTerm = searchFavorites.value;
//   if (searchTerm === '') {
//     initialFavoritesResults.forEach((favorite) => {
//       favoritesSearchResults.appendChild(favorite);
//     });
//   } else {
//     request.open('POST', '/search_favorites');
//     request.onload = () => {
//       const data = JSON.parse(request.response);
//       if (data.success) {
//         const favorites_data = JSON.parse(data.favorites);
//         favorites_data.forEach((favorite) => {
//           const favoriteLI = document.createElement('li');
//           favoriteLI.innerHTML = `
//                 <div class="data-composer-info">
//                         <p class="data-composer-dates">${favorite.composer.years}</p>
//                         <p class="data-composer-nationality">${favorite.composer.nationality}</p>
//                         <p class="data-piece-instrumentation">${favorite.instrumentation}</p>
//                     </div>
//                     <div class="piece-info-left">
//                         <p>${favorite.composer}</p>
//                         <p>${favorite.title}</p>
//                     </div>

//                     <div class="piece-info-right">
//                         <p>${favorite.duration}</p>
//                         <button class="primary-btn add-to-concert">
//                             Add to Concert
//                         </button>
//                     </div>
//                 `;
//           favoritesSearchResults.appendChild(favoriteLI);
//         });
//       } else {
//         console.log(data.error);
//       }
//     };

//     const data = new FormData();
//     data.append('search-favorites', searchTerm);
//     request.send(data);
//     return false;
//   }
// }

//Show Add Intermission Option on Hover

// function showIntermission(e) {
//   if (concertBuilderArea.querySelector('.concert.intermission')) {
//     return false;
//   }

//   if (e.target.classList[0] === 'concert') {
//     e.target.classList.add('show');
//   } else if (
//     e.target === concertBuilderArea &&
//     concertBuilderArea.querySelector('.concert.show')
//   ) {
//     let currentConcert = concertBuilderArea.querySelector('.concert.show');
//     currentConcert.classList.remove('show');
//   }
// }

// function saveConcertTitle() {
//   let concertTitle = concertTitleInput.value;

//   if (concertTitle === '') {
//     //Please Provide A Title.
//   } else {
//     //Change DOM
//     rightSearchArea.classList.add('show');
//     concertTitleHeader.textContent = `${concertTitle}`;
//   }
// }

// function removeConcertTitle() {
//   rightSearchArea.classList.remove('show');
// }


//TENTATIVELY ADDED TO CONCERT BUILDER
// function saveConcert() {
//   let currentUser = JSON.parse(localStorage.getItem('user'));
//   //console.log(currentUser);
//   if (concertTitleHeader.textContent === '') {
//     saveConcertBtn.classList.add('disabled');
//     saveConcertBtn.textContent = 'Please add title.';
//     window.setTimeout(() => {
//       saveConcertBtn.classList.remove('disabled');
//       saveConcertBtn.textContent = 'Save Concert';
//     }, 1000);
//     return false;
//   } else if (concertPieceArr.length === 0) {
//     saveConcertBtn.classList.add('disabled');
//     saveConcertBtn.textContent = 'Please add pieces...';
//     window.setTimeout(() => {
//       saveConcertBtn.classList.remove('disabled');
//       saveConcertBtn.textContent = 'Save Concert';
//     }, 1000);
//     return false;
//   }

//   let currentConcert = new Concert(concertTitleHeader.textContent);
//   //console.log(currentConcert);
//   concertPieceArr.forEach((piece) => {
//     let thisPiece = new Piece(
//       piece.querySelector('.composer-info > p:first-child').textContent,
//       piece.querySelector('.piece-info > p:first-child').textContent
//     );

//     currentConcert.pieces.push(thisPiece);
//   });
//   //console.log(currentConcert.pieces);
//   currentUser.concerts.push(currentConcert);
//   //console.log(currentUser.concerts);
//   localStorage.setItem('user', JSON.stringify(currentUser));
//   console.log(localStorage.getItem('user'));
//   saveConcertBtn.textContent = 'Concert Saved!!';
//   window.setTimeout(() => {
//     saveConcertBtn.textContent = 'Save Concert';
//   }, 1000);
// }

//Drag Functions
// function dragStart(e) {
//   console.log('Event: Drag Start');

//   dragStartIndex = e.target.parentElement.getAttribute('data-index');
//   console.log(dragStartIndex);
// }

// function dragEnter() {
//   console.log('Event: DRAG ENTER');
//   this.classList.add('over');
// }

// function dragLeave() {
//   console.log('EVENT: DRAGE LEAVE');
//   this.classList.remove('over');
// }

// function dragOver(e) {
//   console.log('Event: Drag Over');
//   e.preventDefault();
// }

// function dragDrop() {
//   console.log('Event: Drag Drop');

//   const dragEndIndex = +this.getAttribute('data-index');
// console.log(
//   `DRAG START INDEX = ${dragStartIndex}, DRAG END INDEX = ${dragEndIndex}`
// );
//TODO

// swapItems(dragStartIndex, dragEndIndex);
// this.classList.remove('over');


//ADDED TO UI
// function swapItems(fromIndex, toIndex) {
//   const itemOne = concertPieceArr[fromIndex];
//   const itemTwo = concertPieceArr[toIndex];

//   //console.log(concertPieceArr[fromIndex]);
//   console.log(concertPieceArr[toIndex]);
//   concertPieceArr[fromIndex] = itemTwo;
//   concertPieceArr[toIndex] = itemOne;

//   concertBuilderArea.innerHTML = ``;

//   concertPieceArr.forEach((item) => {
//     addPieceToDOM(item);
//   });
// }

//good. working.
//MOVE TO CONCERT BUILDER
// function dragListeners() {
//   const pieceDragBars = document.querySelectorAll('.piece-drag-bars');
//   const dragBoxes = document.querySelectorAll('.concert');
//   console.log(pieceDragBars);
//   console.log(dragBoxes);
//   pieceDragBars.forEach((drag) => {
//     drag.addEventListener('dragstart', dragStart);
//   });

//   dragBoxes.forEach((box) => {
//     box.addEventListener('dragover', dragOver);
//     box.addEventListener('drop', dragDrop);
//     box.addEventListener('dragenter', dragEnter);
//     box.addEventListener('dragleave', dragLeave);
//   });
// }

//Event Listeners

//This needs to be fixed -- it will go inside dynamicSearch
addToConcert.forEach((button) => {
  button.addEventListener('click', addPieceToConcertArr);
});

searchFavorites.addEventListener('keyup', () => {
  clearFaveList();
  dynamicSearch();
});

//showAddIntermission
concertBuilderArea.addEventListener('mouseover', showIntermission);

concertTitleBtn.addEventListener('click', saveConcertTitle);
changeTitleBtn.addEventListener('click', removeConcertTitle);
window.addEventListener(
  'DOMContentLoaded',
  updateConcertDuration(getConcertDuration(concertPieceArr))
);
saveConcertBtn.addEventListener('click', saveConcert);
