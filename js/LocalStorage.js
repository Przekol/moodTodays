export class LocalStorage {
	constructor() {
		this.userName = localStorage.getItem('userName');
		this.theme = localStorage.getItem('theme');
	}

	getTheme() {
		return this.theme;
	}

	getUserName() {
		return this.userName;
	}
}
