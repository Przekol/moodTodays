import { StatisticsMood } from './StatisticsMood.js';

export class Mood extends StatisticsMood {
	constructor() {
		super();
		this.buttonsMood = this.getButtonsMood();
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

	getButtonsMood() {
		return [...this.buttons].filter(btn => btn.dataset.button === 'emoticon');
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
}
