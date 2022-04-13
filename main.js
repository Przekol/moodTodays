import { LocalStorage } from './js/LocalStorage.js';
import { Theme } from './js/Theme.js';


// const btn = document.querySelector("[data-button]")
// const mood = document.querySelectorAll('[data-mood]');

// const a = [...mood]
// console.log(a);
// let num = 0
// num++
// num++
// num++

// a.forEach(el => {
//     const mood = el.dataset.moodPrevious
//     if (mood === "happy") {
// el.textContent= num
//     }
// });

// btn.addEventListener('click', () => {
//     if (btn.dataset.button === 'advice') {
//         console.log("ok");
//     }
// })

const localStorage = new LocalStorage()
localStorage.init()
const theme = new Theme(localStorage.getTheme());
theme.init()
