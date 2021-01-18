import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { App } from '../modules/app';
import { UI } from '../modules/ui';
import { UISelectors } from '../modules/UISelectors';
import '../../css/landing.css';
import '../../css/homepage.css';

window.addEventListener('DOMContentLoaded', App.initBase);




if (UISelectors.getStarted) {
    UISelectors.getStarted.addEventListener('click', UI.openModal);
}

