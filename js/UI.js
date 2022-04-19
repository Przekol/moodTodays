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
		todayStatistics: '[data-day="today"]',
		lastDayStatistics: '[data-day="last-day"]',
		last7DayStatistics: '[data-day="last-7-day"]',
		btnAdvice: '[data-button="advice"]',
	};

	constructor() {
		super();
		this.body = this.getElement(this.UiSelectors.body);
		this.buttons = this.getElements(this.UiSelectors.buttons);
	}

	getElement(selector) {
		return document.querySelector(selector);
	}

	getElements(selector) {
		return document.querySelectorAll(selector);
	}
	getButtons(value) {
		return [...this.buttons].filter(btn => btn.dataset.button === value);
	}
}
