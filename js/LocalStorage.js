export class LocalStorage {
	constructor() {
		this.nameUser = localStorage.getItem('nameUser');
		this.theme = localStorage.getItem('theme');
	}

	getTheme() {
		return this.theme;
	}

	getNameUser() {
		return this.nameUser;
	}
}
