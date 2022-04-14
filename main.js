import { LocalStorage } from './js/LocalStorage.js';
import { Theme } from './js/Theme.js';
import { Popup } from './js/Popup.js';


const localStorage = new LocalStorage()
const theme = new Theme();


theme.init()

if (!localStorage.getUserName()) {
	const popup = new Popup();
	popup.init();
}