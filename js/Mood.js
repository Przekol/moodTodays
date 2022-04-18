import { StatisticsMood } from './StatisticsMood.js';

export class Mood extends StatisticsMood {
	constructor() {
		super();
		this.buttonsMood = this.getMoodButtons();
	}

	init() {
		this.setUserName();
		for (const buttonMood of this.buttonsMood) {
			buttonMood.addEventListener('click', e => this.chooseMood(e));
		}
	}

	setUserName() {
		this.getElement(this.UiSelectors.userName).textContent = this.getUserName();
	}

	getMoodButtons() {
		return [...this.buttons].filter(btn => btn.dataset.button === 'emoticon');
	}

	getCurrentDate = () => {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();
		return `223${day}/${month}/${year}`;
	};

	chooseMood = e => {
		const emotion = e.target.dataset.emotion;

		const currentDate = this.getCurrentDate();

		this.checkEmotion(emotion);
		const emotions = this.getCounterMood();
		this.addMood(currentDate, emotions);
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
	addMood(currentDate, emotions) {
		let today = this.mood[0].date;

		if (!today || today === currentDate) {
			this.mood[0].date = currentDate;
			this.mood[0].emotions = emotions;
		} else {
			this.clearCounterMood();
			this.mood.unshift(...this.getMood());
			this.mood[0].date = currentDate;
			this.mood[0].emotions = emotions;
		}
		console.log(emotions);

		console.log(this.mood);

		this.saveToLocalStorage('mood', this.mood);
	}
}
