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
		console.log(this.mood);
		console.log(
			this.todayStatistics,
			this.lastDayStatistics,
			this.last7DayStatistics,
			this.btnAdvice,
		);
		this.btnAdvice.addEventListener('click', e => {
			console.log(e);
		});
	}
}
