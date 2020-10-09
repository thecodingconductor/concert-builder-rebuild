import { App } from '../modules/app';
import { Forms } from '../modules/forms';
import { HTTP } from '../modules/http';
import { Nav } from '../modules/nav';
import { Requests } from '../modules/requests';
import { UI } from '../modules/ui';
import { UISelectors } from '../modules/UISelectors';
import { User, Piece, Concert } from '../modules/sessionObj';
import { Storage } from '../modules/storage';
import "../../css/landing.css";
import "../../css/homepage.css";
import "../../css/composer.css";




function newConcert(e) {
    let pieceTitle = document.getElementById('piece-title-result').textContent;
    let pieceComposer = document.getElementById('composer-name').textContent;
    let currentUser = document.getElementById('hidden-user');
    if (!pieceTitle) {
        UI.showButtonError(e.target, 'Select a Piece');
    } else if (!currentUser) {
        UI.showButtonError(e.target, 'Please Log in');
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

window.addEventListener('DOMContentLoaded', App.initBase);

window.addEventListener('DOMContentLoaded', Requests.imageFetch);
window.addEventListener('DOMContentLoaded', () => {
    let currentUser = document.getElementById('hidden-user');
    if (!currentUser) {
        UISelectors.createConcert.classList.add('disabled');
    } else {
        UISelectors.createConcert.classList.remove('disabled');
    }
});

UISelectors.pieceList.forEach(piece => {
    piece.addEventListener('click', Requests.getPieceResults);
    piece.addEventListener('click', UI.scrollPieceIntoView);
})

UISelectors.submitComment.addEventListener('click', Requests.commitNewComment);
UISelectors.addPieceToFavorites.addEventListener('click', Requests.commitNewFavorite);
UISelectors.createConcert.addEventListener('click', newConcert);