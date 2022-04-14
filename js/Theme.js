import { UI } from './UI.js';

export class Theme extends UI {
	constructor() {
		super();
		this.togglesTheme = this.getElements(this.UiSelectors.toggleTheme);
	}

	init() {
		for (const toggle of this.togglesTheme) {
			this.clickToggle(toggle);
			this.setActiveTheme(toggle);
		}
	}

	clickToggle(toggle) {
		toggle.addEventListener('click', () => {
			this.checkTheme(toggle);
		});
	}

	setActiveTheme(toggle) {
		this.checkActiveBrowserTheme();
		this.setToggle(toggle);
		this.setTheme();
	}

	checkTheme(toggle) {
		if (this.theme === 'dark') {
			this.setToggleToOff(toggle);
			this.theme = 'light';
		} else {
			this.setToggleToOn(toggle);
			this.theme = 'dark';
		}
		this.setTheme();
	}

	checkActiveBrowserTheme() {
		if (!this.theme) {
			const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			dark === true ? (this.theme = 'dark') : (this.theme = 'light');
		}
	}

	setToggle(toggle) {
		this.theme === 'dark' ? this.setToggleToOn(toggle) : this.setToggleToOff(toggle);
	}
	setToggleToOn(toggle) {
		toggle.classList.add('toggle--active');
	}
	setToggleToOff(toggle) {
		toggle.classList.remove('toggle--active');
	}

	setTheme() {
		this.body.setAttribute('data-theme', this.theme);
		localStorage.setItem('theme', this.theme);
	}
}
