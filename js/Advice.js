import { UI } from './UI.js';

export class Advice extends UI {
	constructor() {
		super();
		this.btnAdvice = this.getElement(this.UiSelectors.btnAdvice);
		this.textAdvice = this.getElement(this.UiSelectors.textAdvice);
		this.boxAdvice = this.getElement(this.UiSelectors.boxAdvice);
	}
	init() {
		this.btnAdvice.addEventListener('click', () => {
			this.showAdvice();
		});
	}

	showAdvice() {
		const moodTodayStatistics = this.updateStatisticsDay();
		const bad = moodTodayStatistics.bad;
		const bored = moodTodayStatistics.bored;
		const happy = moodTodayStatistics.happy;
		this.clearAdvice();
		this.setAdvice(bad, bored, happy);
	}

	setAdvice(bad, bored, happy) {
		if (bad === 0 && bored === 0 && happy === 0) {
			this.addInAdviceCssClass('bored');
			this.showMessage('Wróć do góry i powiedz nam jak się czujesz!');
		}
		if (bad > bored && bad > happy) {
			this.addInAdviceCssClass('bad');
			this.showMessage('Może to czas na wizytę u specjalisty?');
		}
		if (bored > bad && bored > happy) {
			this.addInAdviceCssClass('bored');
			this.showMessage('Otwórz okno. Wyjdź na balkon. Może spacer?');
		}
		if (happy > bad && happy > bored) {
			this.addInAdviceCssClass('happy');
			this.showMessage(
				'Ciesz się życiem! Twoje życie jest cudowne! Nie zmarnuj tego na takie strony jak ta...',
			);
		}
		if (bad === bored && bored === happy && bad !== 0) {
			this.addInAdviceCssClass('bored');
			this.showMessage(
				'Trudno stwierdzić co poradzić mam! Wybierz nastrój ponownie i spróbuj jeszcze raz',
			);
		}
		if (bad === bored && bad > happy) {
			this.addInAdviceCssClass('bad');
			this.showMessage('Źle wróżę. Dzisiaj nic już z tego nie będzie. Odpocznij!');
		}
		if (happy === bored && happy > bad) {
			this.addInAdviceCssClass('bored');
			this.showMessage(
				'Jest dobrze, ale nie najlepiej. Może włącz ulubiony serial?',
			);
		}
	}

	updateStatisticsDay() {
		return this.loadFromLocalStorage('mood')[0].emotions;
	}
	clearAdvice() {
		this.removeInAdviceCssClass('bad');
		this.removeInAdviceCssClass('bored');
		this.removeInAdviceCssClass('happy');
		this.showMessage('');
	}

	showMessage(message) {
		this.textAdvice.textContent = message;
	}
	addInAdviceCssClass(cssClass) {
		this.boxAdvice.classList.add(cssClass);
	}
	removeInAdviceCssClass(cssClass) {
		this.boxAdvice.classList.remove(cssClass);
	}
}
