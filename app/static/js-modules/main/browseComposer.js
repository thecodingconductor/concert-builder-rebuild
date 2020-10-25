import { App } from '../modules/app';
import { Requests } from '../modules/requests';
import "../../css/landing.css";
import "../../css/homepage.css";
import '../../css/browse_composers.css';

window.addEventListener('DOMContentLoaded', App.initBase);
window.addEventListener('click', Requests.openCurrentLetter);