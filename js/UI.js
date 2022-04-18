import { LocalStorage } from './LocalStorage.js';

export class UI extends LocalStorage {
	UiSelectors = {
		body: '[data-section="body"]',
		wrapper: '[data-section="wrapper"]',
		popup: '[data-section="popup"]',
		input: '[data-form="input"]',
		hintText: '[data-form="hint"]',
		buttons: '[data-button]',
		toggleTheme: '[data-toggle="theme"]',
		btnPopupForm: '[data-button="popup-form"]',
		userName: '[data-user-name]',
	};

	constructor() {
		super();
		this.body = this.getElement(this.UiSelectors.body);
	}

	getElement(selector) {
		return document.querySelector(selector);
	}

	getElements(selector) {
		return document.querySelectorAll(selector);
	}
}
