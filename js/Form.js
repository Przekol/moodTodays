import {Popup} from './Popup.js';

export class Form extends Popup {
	constructor() {
		super();
		this.input = this.getElement(this.UiSelectors.input);
		this.hintText = this.getElement(this.UiSelectors.hintText);
		this.btnPopupForm = this.getElement(this.UiSelectors.btnPopupForm);
	}

	init() {
		this.btnPopupForm.addEventListener('click', e => {
			this.sendUserName(e);
		});
		this.input.addEventListener('input', e => {
			this.clearHint(e);
		});
		window.addEventListener('keydown', e => {
			if (e.code === 'Enter' || e.code === 'NumpadEnter') {
				this.sendUserName(e);
			}
		});
	}

	sendUserName(e) {
		let value = this.input.value.trim();

		this.userName = this.getValidationedText(value);
		if (this.userName) {
			localStorage.setItem('userName', this.userName);
			this.closePopup();
		}
		if (e.isTrusted) {
			this.input.value = '';
		}
	}

	getValidationedText(inputValue) {
		const text = this.checkLengthInput(inputValue);

		if (!(text === null || text === undefined)) {
			return this.getUpperCase(text);
		} else {
			this.checkLengthInput(inputValue);
			return false;
		}
	}

	checkLengthInput(inputValue) {
		if (!inputValue) {
			this.showHint('Wpisz swoje imię!');
			this.setInHintCssClass('error');

		} else if (inputValue.length < 3) {
			this.showHint('Minimum 3 znaki!');
			this.setInHintCssClass('warning');

		} else {
			return inputValue;
		}
	}

	getUpperCase(text) {
		return text.toUpperCase();
	}

	clearHint(e) {
		if (e.isTrusted) {
			this.showHint('');
			this.removeInHintCssClass('error');
			this.removeInHintCssClass('warning');
		}
	}

	setInHintCssClass(cssClass) {
		this.hintText.classList.add(cssClass);
	}

	removeInHintCssClass(cssClass) {
		this.hintText.classList.remove(cssClass);
	}

	showHint(message) {
		this.hintText.textContent = message;
	}
}
