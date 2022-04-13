import { UI } from './UI.js';
import { Form } from './Form.js';

export class Popup extends UI {
	constructor() {
		super();
		this.popup = this.getElement(this.UiSelectors.popup);
		this.wrapper = this.getElement(this.UiSelectors.wrapper);
	}
	init() {
		this.showPopup();
		this.addListenerToForm();

		// this.popup.addEventListener('click', () => {
		// 	this.closePopup();
		// });
	}

	checkNameUser() {}

	showPopup() {
		this.popup.classList.add('show');
		this.body.classList.add('hidden');
	}

	closePopup() {
		this.popup.classList.add('fade-out');
		this.popup.classList.remove('show');
		this.body.classList.remove('hidden');
		this.wrapper.classList.add('fade-in');
	}
	addListenerToForm() {
		const formPopup = new Form();
		formPopup.init();
	}
}
