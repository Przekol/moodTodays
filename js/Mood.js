import { UI } from './UI.js';
import { StatisticsMood } from './StatisticsMood.js';

export class Mood extends UI {
	constructor() {
		super();
		this.buttonsMood = this.getButtonsMood();
		this.isMood = this.mood.length === 0;
		this.counterBad = this.isMood ? 0 : this.mood[0].emotions.bad;
		this.counterBored = this.isMood ? 0 : this.mood[0].emotions.bored;
		this.counterHappy = this.isMood ? 0 : this.mood[0].emotions.happy;
		this.counterMood = this.getCounterMood();
		this.statistics = this.addStatistics();
	}

	init() {
		this.statistics.init();
		this.setMoodToLocalStorage();
		this.saveToLocalStorage('mood', this.mood);
		this.setUserName();
		for (const buttonMood of this.buttonsMood) {
			buttonMood.addEventListener('click', e => this.chooseMood(e));
		}
	}
	addStatistics() {
		return new StatisticsMood();
	}

	setUserName() {
		this.getElement(this.UiSelectors.userName).textContent = this.getUserName();
	}

	getButtonsMood() {
		return [...this.buttons].filter(btn => btn.dataset.button === 'emoticon');
	}

	chooseMood = e => {
		const emotion = e.target.dataset.emotion;
		this.checkEmotion(emotion);
		this.addMood();
		this.statistics.init();
	};

	checkEmotion(emotion) {
		switch (emotion) {
			case 'happy':
				this.counterMood.happy = ++this.counterHappy;
				break;
			case 'bored':
				this.counterMood.bored = ++this.counterBored;
				break;
			case 'bad':
				this.counterMood.bad = ++this.counterBad;
				break;
			default:
				break;
		}
	}
	addMood() {
		this.mood[0].emotions = this.getCounterMood();
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

	getMood() {
		return [
			{
				date: this.getCurrentDate(),
				emotions: this.getCounterMood(),
			},
		];
	}

	getCounterMood() {
		return {
			bad: this.counterBad,
			bored: this.counterBored,
			happy: this.counterHappy,
		};
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
