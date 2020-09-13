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
    if (!this.getUser()) {
      let newUser = new User(user);
      UI.displayConcerts(newUser);
    } else if (user === this.getUser().username) {
      let currentUser = this.getUser();
      UI.displayConcerts(currentUser);
      return false;
    } else if (user !== this.getUser().username) {
      let newUser = new User(user);
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

export const Storage = new STORAGE();
