import { App } from '../modules/app';
import { Forms } from '../modules/forms';
import { HTTP } from '../modules/http';
import { Nav } from '../modules/nav';
import { Requests } from '../modules/requests';
import { Storage } from '../modules/storage';
import { UI } from '../modules/ui';
import { UISelectors } from '../modules/UISelectors';
import "../../css/landing.css";
import "../../css/homepage.css";



window.addEventListener('DOMContentLoaded', App.initBase);

UISelectors.dropDownYourConcerts.addEventListener('click', (e) => {
  UISelectors.dropDownMenu.style.display = 'none';
  UI.resultsExit(e);
  UI.concertsEnter(UISelectors.mainContentInner);
});

UISelectors.viewMore.forEach((link) => {
  link.addEventListener('click', UI.resultsExit);
});

UISelectors.openLinks.forEach((link) => {
  link.addEventListener('click', UI.resultsExit);
});

window.addEventListener('DOMContentLoaded', UI.formatResultsCard);
window.addEventListener('DOMContentLoaded', () => {
  let searchResults = document.querySelectorAll('.search-result');
  [...searchResults].forEach((result) => {
    //console.log(result);
    result.addEventListener('mouseover', UI.showGoldUnderline);
    result.addEventListener('mouseleave', UI.hideGoldUnderline);
  });
});

UISelectors.openBrowse.addEventListener('click', UI.showBrowse);
[...UISelectors.createConcertBtns].forEach((btn) => {
  btn.addEventListener('click', App.createConcertFunction);
});

//LOAD CONCERTS!!
if (UISelectors.user !== null) {

  // const currentUser = Storage.createUser();

  window.addEventListener('DOMContentLoaded', Storage.createUser())
}

