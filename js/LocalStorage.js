import { UI } from './UI.js';
import { Popup } from './Popup.js';

export class LocalStorage extends UI {
	constructor() {
		super();
		this.nameUser = localStorage.getItem('nameUser');
		this.theme = localStorage.getItem('theme');
	}
    init() {
		this.showPopup()
		
	}

	showPopup() {
		if (!this.nameUser) {
			 const popup = new Popup(this.getNameUser());
				popup.init();
		}
	}
	getTheme() {
		return this.theme
	}

	getNameUser() {
		return this.nameUser
	}
}
