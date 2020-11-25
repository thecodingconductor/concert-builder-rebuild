import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { App } from '../modules/app';
import { Forms } from '../modules/forms';
import { HTTP } from '../modules/http';
import { Nav } from '../modules/nav';
import { Storage } from '../modules/storage';
import { Requests } from '../modules/requests';
import { UI } from '../modules/ui';
import { UISelectors } from '../modules/UISelectors';
import { User, Concert, Piece } from '../modules/sessionObj';
import "../../css/landing.css";
import "../../css/homepage.css";
import "../../css/concert-builder.css";

let concertPieceArr = [];
let favoritesResults = [];
let dragStartIndex;
// let number = 0;

//Initialize Base 
window.addEventListener('DOMContentLoaded', App.initBase);




//Is this necessary?
function dragListeners() {
    const pieceDragBars = document.querySelectorAll('.piece-drag-bars');
    const dragBoxes = document.querySelectorAll('.concert');

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



//Add event listeners to Add to Concert Buttons.
UISelectors.addToConcert.forEach((button) => {
    button.addEventListener('click', App.addPieceToConcertArr);
});

//Dyanmic Search of Favorites List
UISelectors.searchFavorites.addEventListener('keyup', () => {
    UI.clearFaveList();
    Requests.favoritesSearch();
});

//showAddIntermission
//TODO ADD SOMETHING FOR MOBILE
UISelectors.concertBuilderArea.addEventListener('mouseover', UI.showIntermission);

//ADD Event Listeners for Concert Title functionality
UISelectors.concertTitleBtn.addEventListener('click', UI.saveConcertTitle);
UISelectors.changeTitleBtn.addEventListener('click', UI.removeConcertTitle);
window.addEventListener(
    'DOMContentLoaded',
    UI.updateConcertDuration(UI.getConcertDuration(concertPieceArr))
);


UISelectors.saveConcertBtn.addEventListener('click', App.saveConcert);


//Get Saved pieces from Local Storage, if possible
window.addEventListener('DOMContentLoaded', Storage.getConcert);
window.addEventListener('DOMContentLoaded', Storage.getPieceForEdit);