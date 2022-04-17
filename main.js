import {LocalStorage} from './js/LocalStorage.js';
import {Theme} from './js/Theme.js';
import {Popup} from './js/Popup.js';
import {Form} from './js/Form.js';
import {Mood} from './js/Mood.js';
import {RippleEffect} from './js/RippleEffect.js';

const localStorage = new LocalStorage();
const theme = new Theme();
const rippleEffect = new RippleEffect();
const popup = new Popup();
const formPopup = new Form();
rippleEffect.init();
theme.init();

if (!localStorage.getUserName()) {
    popup.init();
    formPopup.init();
} else {
    popup.moodInit();
}
