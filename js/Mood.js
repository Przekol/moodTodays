import { UI } from './UI.js';

export class Mood extends UI {
	constructor() {
		super();
	}

	init() {
		this.setUserName();
	}

	setUserName() {
		this.getElement(this.UiSelectors.userName).textContent = this.getUserName();
	}
}
