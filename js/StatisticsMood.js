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
		if (this.isMood) {
			this.mood = this.getMood();
			this.counterMood = this.getCounterMood();
		}
		this.saveToLocalStorage('mood', this.mood);
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
				date: null,
				emotions: this.getCounterMood(),
			},
		];
	}

	clearCounterMood() {
		this.counterBad = 0;
		this.counterBored = 0;
		this.counterHappy = 0;
	}
}
