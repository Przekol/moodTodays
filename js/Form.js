import { UI } from './UI.js';

export class Form extends UI {
	constructor() {
		super();
		this.input = this.getElement(this.UiSelectors.input);
		this.hintText = this.getElement(this.UiSelectors.hintText);
		this.btnPopupForm = this.getElement(this.UiSelectors.btnPopupForm);
	}

	init() {
		this.btnPopupForm.addEventListener('click', (e) => {
			this.sendUserName();
			if (e.isTrusted) {
				this.input.value=""
			}
		});
		this.input.addEventListener('input', e => {
			if (e.isTrusted) {
				this.clearHint(e);
			}
		});
	}

	sendUserName() {
		let value = this.input.value.trim();

		this.userName = this.getValidationedText(value);
		if (this.userName) {
			localStorage.setItem('userName', this.userName);
			
		}
	}
	getValidationedText(inputValue) {
		const text = this.checkLengthInput(inputValue);

		if (!(text === null || text === undefined)) {
			
			const textUpperCase = this.getUpperCase(text);
			return textUpperCase;
		} else {
			this.checkLengthInput(inputValue);
			return false;
		}
	}

	checkLengthInput(inputValue) {
		if (!inputValue) {
			this.showHint('Wpisz swoje imię!');
			this.setInHintCssClass('error');
			return;
		} else if (inputValue.length < 3) {
			this.showHint('Minimum 3 znaki!');
			this.setInHintCssClass('warning');
			return;
		} else {
			return inputValue;
		}
	}

	getUpperCase(text) {
		return text.toUpperCase();
	}

	clearHint() {
		this.showHint('');
		this.removeInHintCssClass('error');
		this.removeInHintCssClass('warning');
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
