import { UI } from './UI.js';

export class Advice extends UI {
	constructor() {
		super();
		this.btnAdvice = this.getElement(this.UiSelectors.btnAdvice);
	}
	init() {
		this.btnAdvice.addEventListener('click', e => {
			console.log(e);
		});
	}
}
