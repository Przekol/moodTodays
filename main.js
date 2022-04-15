import {LocalStorage} from './js/LocalStorage.js';
import {Theme} from './js/Theme.js';
import {Popup} from './js/Popup.js';
import {Form} from './js/Form.js';
import {Mood} from './js/Mood.js';

const localStorage = new LocalStorage();
const theme = new Theme();
const popup = new Popup();
const formPopup = new Form();

theme.init();

if (!localStorage.getUserName()) {
    popup.init();
    formPopup.init();
} else {
    popup.moodInit();
}
