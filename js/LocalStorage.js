export class LocalStorage {
	constructor() {
		this.userName = localStorage.getItem('userName');
		this.theme = this.loadFromLocalStorage('theme');
	}

	getTheme() {
		return this.theme;
	}

	getUserName() {
		return this.userName;
	}

	saveToLocalStorage(name, value) {
		localStorage.setItem(name, JSON.stringify(value));
	}

	loadFromLocalStorage(name) {
		return JSON.parse(localStorage.getItem(name));
	}
}
