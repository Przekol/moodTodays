import { UI } from './UI.js';

export class Form extends UI {
	constructor() {
		super();
		this.input = this.getElement(this.UiSelectors.input);
		this.hintText = this.getElement(this.UiSelectors.hintText);
		this.btnPopupForm = this.getElement(this.UiSelectors.btnPopupForm);
	}

	init() {
		this.btnPopupForm.addEventListener('click', () => this.sendNameUser());
	}

	sendNameUser() {
		console.log(this.input.value);
	}
}
