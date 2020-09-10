import { UISelectors } from './UISelectors';
import { UI } from './ui';

export class Nav {
  constructor() {}

  composerPageListeners(composer) {
    composer.addEventListener('click', (e) => {
      window.location.href = `composer/${e.target.textContent}`;
    });
  }
}
