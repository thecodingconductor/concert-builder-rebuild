import { App } from '../modules/app';
import { Forms } from '../modules/forms';
import { HTTP } from '../modules/http';
import { Nav } from '../modules/nav';
import { Requests } from '../modules/requests';
import { UI } from '../modules/ui';
import { UISelectors } from '../modules/UISelectors';
import '../../css/landing.css';
import '../../css/homepage.css';

window.addEventListener('DOMContentLoaded', App.initBase);




if (UISelectors.getStarted) {
    UISelectors.getStarted.addEventListener('click', UI.openModal);
}

