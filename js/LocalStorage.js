export class LocalStorage {
	constructor() {
		this.userName = localStorage.getItem('userName');
		this.theme = this.loadFromLocalStorage('theme');
		this.mood = this.loadFromLocalStorage('mood') ?? [];
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
