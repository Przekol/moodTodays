export class UI {
	UiSelectors = {
		body: '[data-section="body"]',
		// buttons: '[data-button]',
		toggleTheme: '[data-toggle="theme"]',
	};
	getElement(selector) {
		return document.querySelector(selector);
	}
	getElements(selector) {
		return document.querySelectorAll(selector);
	}
}
