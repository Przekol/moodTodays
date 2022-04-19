import { UI } from './UI.js';

export class StatisticsMood extends UI {
	constructor() {
		super();
		this.todayStatistics = [
			...this.getElements(this.UiSelectors.todayStatistics),
		];
		this.lastDayStatistics = [
			...this.getElements(this.UiSelectors.lastDayStatistics),
		];
		this.last7DayStatistics = [
			...this.getElements(this.UiSelectors.last7DayStatistics),
		];
		this.btnAdvice = this.getElement(this.UiSelectors.btnAdvice);
	}
	init() {
		this.showStatistics();

		this.btnAdvice.addEventListener('click', e => {
			console.log(e);
		});
	}
	showStatistics() {
		const moodArray = this.loadFromLocalStorage('mood');
		this.showTodayStatistics(moodArray);
	}
	showTodayStatistics(moodArray) {
		for (const today of this.todayStatistics) {
			const mood = today.dataset.mood;
			if (mood === 'bad') {
				today.textContent = moodArray[0].emotions.bad;
			}
			if (mood === 'bored') {
				today.textContent = moodArray[0].emotions.bored;
			}
			if (mood === 'happy') {
				today.textContent = moodArray[0].emotions.happy;
			}
		}
	}
}
