import { UISelectors } from './UISelectors';
import { UI } from './ui';
import { HTTP } from './http';
import { Nav } from './nav';
import { App } from './app';

class REQUESTS {
  constructor() { }

  getComposerResults() {
    UISelectors.searchBarResults.style.visibility = 'visibile';
    const data = {
      searchTerm: UISelectors.searchInput.value
    }

    HTTP.post('/composers', data).then(res => {
      console.log(res);
      console.log(typeof res);
      console.log(typeof res.composers)
      let compArray = JSON.parse(res.composers);
      console.log(compArray);

      compArray.forEach(composer => {
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

  testLogin(loginData) {
    HTTP.post('/login', loginData)
      .then(data => {
        if (data.update === 'success') {
          UISelectors.logInUserBtn.textContent = `${data.message}`;
          window.location.href = '/homepage';
        } else if (data.update === 'failure') {
          UI.showError(UISelectors.loginUsername, data.message);
          UI.showError(UISelectors.loginPassword, data.message);
        }
      })
      .catch(err => console.log(`There was an error, ${err}`));
  }


  getFullPieceInfo(pieceTitle) {
    HTTP.get(`/piece_detail/${pieceTitle}`)
      .then(data => UI.addPieceFromLocalStorage(data))
      .catch(err => console.log(`ERROR: ${err}`))
  }

  favoritesSearch() {
    let searchTerm = UISelectors.searchFavorites.value;
    if (searchTerm === '') {
      UISelectors.initialFavoritesResults.forEach((favorite) => {
        UISelectors.favoritesSearchResults.appendChild(favorite);
      });
    } else {
      HTTP.post('/search_favorites', searchTerm)
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
            UISelectors.favoritesSearchResults.appendChild(favoriteLI);

          })
        })
        .catch(err => `ERROR: ${err}`)
    }
  }


  getPieceResults(e) {
    UI.clearComposerResults();

    let formattedString = e.target.innerHTML.split('&')[0];
    HTTP.get(`/piece_detail/${formattedString}`)
      .then(data => {
        if (data.piece.title) {
          const contents = `<h2 id="piece-title-result">${data.piece.title}</h2> 
                            <p id="piece-duration">${data.piece.duration}</p>
                            <p id="piece-instrumentation">${data.piece.instrumentation}</p>
                            `;
          UISelectors.pieceDetailsContainer.innerHTML = contents;

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
        UISelectors.pieceResults.append(li);
      })
  }


  imageFetch() {
    const composerName = document.getElementById('composer-name');
    HTTP.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC72emsapcuXsF64Hrn7ca_9xIbAUbn7DY&cx=014124391945830086859:aisrauxjejy&q=${composerName.textContent}`)
      .then(data => {
        const composerImgSrc = data.items[0].pagemap.cse_thumbnail[0].src;
        UISelectors.composerWrap.style.backgroundImage = `url('${composerImgSrc}')`;
      })
      .catch(err => {
        UISelectors.composerWrap.style.backgroundImage = 'url("https://via.placeholder.com/200")';
      })
  }

  commitNewComment(e) {


    let composerUser = document.getElementById('hidden-user');
    const commentBody = document.getElementById('user-comment');
    const commentPieceTitle = document.getElementById('piece-title-result');


    if (!composerUser) {
      //TODO WRITE SHOW BUTTON ERROR 
      UI.showButtonError(e.target, 'Please log in');
    } else if (!commentPieceTitle) {
      UI.showButtonError(e.target, 'Select a piece');
    } else if (commentBody.value === '') {
      UI.showButtonError(e.target, 'Write  a comment!');
    } else {

      const entry = {
        body: commentBody.value,
        piece: commentPieceTitle.textContent
      };

      HTTP.post('/add_comment', entry)
        .then(data => {
          console.log(data);
        }).catch(err => {
          UI.showButtonError(e.target);
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
      UI.showButtonError(e.target, 'Select a piece');
    } else if (!composerUser) {
      UI.showButtonError(e.target, 'Please Log in');
    } else {
      HTTP.post('/add_piece_to_favorites')
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


export const Requests = new REQUESTS();