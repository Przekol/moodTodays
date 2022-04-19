import { UI } from './UI.js';

export class Mood extends UI {
	constructor() {
		super();
		this.buttonsMood = this.getButtons('emoticon');
		this.isMood = this.mood.length === 0;
		this.counterBad = this.isMood ? 0 : this.mood[0].emotions.bad;
		this.counterBored = this.isMood ? 0 : this.mood[0].emotions.bored;
		this.counterHappy = this.isMood ? 0 : this.mood[0].emotions.happy;
		this.counterMood = this.getCounterMood();
	}

	init() {
		this.setMoodToLocalStorage();
		this.saveToLocalStorage('mood', this.mood);
		this.setUserName();
		for (const buttonMood of this.buttonsMood) {
			buttonMood.addEventListener('click', e => this.chooseMood(e));
		}
	}

	setUserName() {
		this.getElement(this.UiSelectors.userName).textContent = this.getUserName();
	}

	chooseMood = e => {
		const emotion = e.target.dataset.emotion;
		this.checkEmotion(emotion);
		this.addMood();
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
				this.clearCounterMood();
				this.mood.unshift(...this.getMood());
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
		this.counterBad = 0;
		this.counterBored = 0;
		this.counterHappy = 0;
	}

	getCurrentDate = () => {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};
}
