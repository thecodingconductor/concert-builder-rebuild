import { App } from '../modules/app';
import { Forms } from '../modules/forms';
import { HTTP } from '../modules/http';
import { Nav } from '../modules/nav';
import { Requests } from '../modules/requests';
import { UI } from '../modules/ui';
import { UISelectors } from '../modules/UISelectors';
import "../../css/landing.css";
import "../../css/homepage.css";
import "../../css/concert-builder.css";

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

window.addEventListener('DOMContentLoaded', App.initBase);

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
