import { UI } from './UI.js';

export class RippleEffect extends UI {
	constructor() {
		super();
		this.buttons = this.getElements(this.UiSelectors.buttons);
	}

	init() {
		this.clickButton();
	}

	clickButton() {
		this.buttons.forEach(button => {
			button.addEventListener('click', this.rippleEffect);
		});
	}

	rippleEffect = event => {
		const button = event.currentTarget;
		const span = document.createElement('span');
		const size = Math.max(button.clientWidth, button.clientHeight);

		span.style.width = span.style.height = `${size}px`;

		const left = event.clientX - button.offsetLeft + document.documentElement.scrollLeft;
		span.style.left = `${left}px`;
		const top = event.clientY - button.offsetTop + document.documentElement.scrollTop;
		span.style.top = `${top}px`;

		span.classList.add('ripple-el');

		setTimeout(() => {
			span.remove();
		}, 650);
		button.appendChild(span);
	};
}
