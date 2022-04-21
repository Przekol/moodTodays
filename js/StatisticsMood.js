import { UI } from './UI.js';
import { Advice } from './Advice.js';

export class StatisticsMood extends UI {
	constructor() {
		super();
		this.todayStatistics = [
			...this.getElements(this.UiSelectors.todayStatistics),
		];
		this.lastDayStatistics = [
			...this.getElements(this.UiSelectors.lastDayStatistics),
		];
		this.allDaysStatistics = [
			...this.getElements(this.UiSelectors.allDaysStatistics),
		];
		this.dataStatistics = [...this.getElements(this.UiSelectors.statistics)];
		this.advice = this.addAdvice();
	}
	init() {
		this.showStatisticsDays();
		this.advice.init();
	}
	addAdvice() {
		return new Advice();
	}
	showStatisticsDays() {
		const moodArray = this.loadFromLocalStorage('mood');
		this.showTodayStatistics(moodArray);
	}
	showTodayStatistics(moodArray) {
		const sumMood = this.getSumMoodStatisticsAllDays(moodArray);

		for (const data of this.dataStatistics) {
			const mood = data.dataset.mood;
			const day = data.dataset.day;
			const text = data.dataset.subtitle;

			switch (day) {
				case 'today':
					this.showMoodStatisticsDay(mood, data, moodArray, 0);
					break;
				case 'last-day':
					if (!(moodArray.length < 2)) {
						this.showTitleStatistics(text, data, moodArray);
						this.showMoodStatisticsDay(mood, data, moodArray, 1);
					}
					break;
				case 'all-days':
					this.showTitleStatistics(text, data, moodArray);
					this.showMoodStatisticsAllDays(mood, data, sumMood);
					break;
				default:
					break;
			}
		}
	}

	showTitleStatistics(text, data, moodArray) {
		switch (text) {
			case 'last-day':
				data.textContent = ` ${moodArray[1].date}`;
				break;
			case 'all-days':
				data.textContent = ` ${moodArray.length}: od ${
					moodArray[moodArray.length - 1].date
				} do ${moodArray[0].date}`;
				break;
			default:
				break;
		}
	}

	showMoodStatisticsDay(mood, data, moodArray, index) {
		switch (mood) {
			case 'bad':
				data.textContent = moodArray[index].emotions.bad;
				break;
			case 'bored':
				data.textContent = moodArray[index].emotions.bored;
				break;
			case 'happy':
				data.textContent = moodArray[index].emotions.happy;
				break;
			default:
				break;
		}
	}

	getSumMoodStatisticsAllDays(moodArray) {
		const bad = [];
		const bored = [];
		const happy = [];
		moodArray.forEach(el => {
			bad.push(el.emotions.bad);
			bored.push(el.emotions.bored);
			happy.push(el.emotions.happy);
		});

		return {
			bad: this.sum(bad),
			bored: this.sum(bored),
			happy: this.sum(happy),
		};
	}
	sum(array) {
		return array.reduce((acc, curr) => acc + curr, 0);
	}

	showMoodStatisticsAllDays(mood, data, sumMood) {
		switch (mood) {
			case 'bad':
				data.textContent = sumMood.bad;
				break;
			case 'bored':
				data.textContent = sumMood.bored;
				break;
			case 'happy':
				data.textContent = sumMood.happy;
				break;
			default:
				break;
		}
	}
}
