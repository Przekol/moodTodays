import {UI} from './UI.js';
import {Mood} from './Mood.js';

export class Popup extends UI {
    constructor() {
        super();
        this.popup = this.getElement(this.UiSelectors.popup);
        this.wrapper = this.getElement(this.UiSelectors.wrapper);
    }

    init() {
        this.showPopup();
    }

    showPopup() {
        this.popup.classList.add('show');
        this.body.classList.add('hidden');
        this.wrapper.classList.add('has-fade');
    }

    closePopup() {
        this.popup.classList.add('fade-out');
        this.popup.classList.remove('show');
        this.body.classList.remove('hidden');
        this.wrapper.classList.add('fade-in');
        this.moodInit();
    }

    moodInit() {
        const mood = new Mood();
        mood.init();
    }
}
