import { UISelectors } from './UISelectors';
import { UI } from './ui';
import { HTTP } from './http';
import { Nav } from './nav';
import { App } from './app';

export class Requests {
  constructor() {}

  getComposerResults() {
    UISelectors.searchBarResults.style.visibility = 'visibile';
    const data = {
        searchTerm = UISelectors.searchInput.value
    }
    
    HTTP.post('/composers', data).then(res => {
        res.composers.forEach(composer => {
            const currentURL = window.location.href;
            UI.populateComposerSearchResults(currentURL, composer)
        })
    }).catch(err => console.log(`There was an err, ${err}`));
  }

  browsePanelFetch() {
    HTTP.get('/browse_composer_list')
      .then((data) => {
        let composersArr = data.composers_array;
        composersArr.forEach((group) => {
          const mainLetter = group[0][0];

          for (let i = 0; i < 3; i++) {
            randomCompArr.push(
              group[App.generateRandomNumber(0, group.length)]
            );
          }

          UI.addRandomComposersToDOM(mainLetter);
        });
      })
      .catch();
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
      HTTP.post('./browse_composer_list', data)
        .then((data) => {
          if (UISelectors.resultsColumn.textContent !== '') {
            UISelectors.resultsColumn.textContent = '';
          }

          data.letterArray.forEach((item) => {
            UI.appendCurrentLetter(item);
          });

          [...UISelectors.resultsColumn.children].forEach((comp) => {
            Nav.composerPageListeners(comp);
          });
        })
        .catch((err) => console.log(`There was an error ${err}`));
    }
  }

  testLogin(loginData){
      HTTP.post('/login', loginData)
      .then(data => {
          if(data.update === 'success'){
              UISelectors.logInUserBtn.textContent = `${data.message}`;
              window.location.href = '/homepage';
          } else if (data.update === 'failure'){
                UI.showError(UISelectors.loginUsername, data.message);
                UI.showError(UISelectors.loginPassword, data.message);
          }
      })
      .catch(err => console.log(`There was an error, ${err}`));
  }
}
