import { UI } from './UI.js';

export class StatisticsMood extends UI {
	constructor() {
		super();
		this.isMood = this.mood.length === 0;
		this.counterBad = this.isMood ? 0 : this.mood[0].emotions.bad;
		this.counterBored = this.isMood ? 0 : this.mood[0].emotions.bored;
		this.counterHappy = this.isMood ? 0 : this.mood[0].emotions.happy;
		this.counterMood = this.getCounterMood();
	}

	init() {
		this.setMoodToLocalStorage();
		this.saveToLocalStorage('mood', this.mood);
	}

	setMoodToLocalStorage() {
		if (this.isMood) {
			this.mood = this.getMood();
			this.counterMood = this.getCounterMood();
		} else {
			const today = this.mood[0].date;
			if (today !== this.getCurrentDate()) {
				this.mood.unshift(...this.getMood());
				this.mood[0].date = this.getCurrentDate();
				this.mood[0].emotions = this.clearCounterMood();
			}
		}
	}

	getCounterMood() {
		return {
			bad: this.counterBad,
			bored: this.counterBored,
			happy: this.counterHappy,
		};
	}

	getMood() {
		return [
			{
				date: this.getCurrentDate(),
				emotions: this.getCounterMood(),
			},
		];
	}

	clearCounterMood() {
		return {
			bad: 0,
			bored: 0,
			happy: 0,
		};
	}

	getCurrentDate = () => {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};
}
