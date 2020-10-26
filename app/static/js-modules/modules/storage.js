import { App } from './app';
import { Requests } from './requests';
import { User, Concert, Piece } from './sessionObj';
import { UI } from './ui';
import { UISelectors } from './UISelectors';

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

      let newUser = new User(user);
      Storage.setUser(newUser);
      UI.displayConcerts(newUser);
    } else if (user === Storage.getUser().username) {
      let currentUser = Storage.getUser();
      UI.displayConcerts(currentUser);
      return false;
    } else if (user !== Storage.getUser().username) {
      let newUser = new User(user);
      Storage.setUser(newUser);
    }
  }

  getConcert() {
    let res = JSON.parse(localStorage.getItem('newConcert'));
    if (res !== null) {
      Requests.getFullPieceInfo(res.pieces[0].title.split('...')[0]);

    }
  }

  getConcertByID(id) {
    let res = JSON.parse(localStorage.getItem('user'));
    res.concerts.forEach(concert => {
      if (concert.id === id) {
        concert.pieces.forEach(piece => {
          console.log(piece.title);
          Requests.getFullPieceInfo(piece.title);
          // UI.addPieceFromLocalStorage(piece);
        })
      } else {
        return;
      }
    })
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

  getItem(string, item) {
    localStorage.getItem(string, JSON.parse(item));
  }

  getTempPiece() {
    let res = JSON.parse(localStorage.getItem('tempPiece'));
    if (res === null || res === undefined) {
      return false
    } else {
      return res;
    }
  }

  getPieceForEdit() {
    let res = JSON.parse(localStorage.getItem('editConcertID'));
    if (res === null || res === undefined) {
      return false
    } else {
      console.log(res);
      Storage.getConcertByID(res.id);
    }
  }
}

export const Storage = new STORAGE();
