export {default} from "./Main"

const btn = document.querySelector('.main-button');

btn.addEventListener('click', () => {
    btn.classList.add('white')
})