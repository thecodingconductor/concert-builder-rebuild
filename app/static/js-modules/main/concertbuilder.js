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

window.addEventListener('DOMContentLoaded', App.initBase);

//Pass in Concert Piece Array
function saveConcert() {
    let currentUser = Storage.getUser();
    //console.log(currentUser);
    if (UISelectors.concertTitleHeader.textContent === '') {
        UISelectors.saveConcertBtn.classList.add('disabled');
        UISelectors.saveConcertBtn.textContent = 'Please add title.';
        window.setTimeout(() => {
            UISelectors.saveConcertBtn.classList.remove('disabled');
            UISelectors.saveConcertBtn.textContent = 'Save Concert';
        }, 1000);
        return false;
    } else if (UI.concertPieceArr.length === 0) {
        UISelectors.saveConcertBtn.classList.add('disabled');
        UISelectors.saveConcertBtn.textContent = 'Please add pieces...';
        window.setTimeout(() => {
            UISelectors.saveConcertBtn.classList.remove('disabled');
            UISelectors.saveConcertBtn.textContent = 'Save Concert';
        }, 1000);
        return false;
    }

    let currentConcert = new Concert(UISelectors.concertTitleHeader.textContent);
    //console.log(currentConcert);
    UI.concertPieceArr.forEach((piece) => {
        let thisPiece = new Piece(
            piece.querySelector('.composer-info > p:first-child').textContent,
            piece.querySelector('.piece-info > p:first-child').textContent
        );

        currentConcert.pieces.push(thisPiece);
    });

    currentUser.concerts.push(currentConcert);

    Storage.setUser();

    UISelectors.saveConcertBtn.textContent = 'Concert Saved!!';
    window.setTimeout(() => {
        UISelectors.saveConcertBtn.textContent = 'Save Concert';
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

//Initialize Base 


UISelectors.addToConcert.forEach((button) => {
    button.addEventListener('click', App.addPieceToConcertArr);
});

UISelectors.searchFavorites.addEventListener('keyup', () => {
    UI.clearFaveList();
    Requests.favoritesSearch();
});

//showAddIntermission
UISelectors.concertBuilderArea.addEventListener('mouseover', UI.showIntermission);

UISelectors.concertTitleBtn.addEventListener('click', UI.saveConcertTitle);
UISelectors.changeTitleBtn.addEventListener('click', UI.removeConcertTitle);
window.addEventListener(
    'DOMContentLoaded',
    UI.updateConcertDuration(UI.getConcertDuration(concertPieceArr))
);

//TODO FIX THIS
UISelectors.saveConcertBtn.addEventListener('click', saveConcert);
