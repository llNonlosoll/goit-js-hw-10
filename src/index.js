import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import { createMarkup } from './js/createMarkup';
import { createCountryMarkup } from './js/createCountryMarkup';
import { cleanMarkup } from './js/cleanMarkup';

const DEBOUNCE_DELAY = 300;

// Імпорт Notify
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Імпорт debounce
import debounce from 'lodash.debounce';

// Створюємо селектори для відстеження DOM
const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  about: document.querySelector('.country-info'),
};

// Додаємо слухача подій
refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
  const name = refs.input.value.trim();

  if (name === '') {
    cleanMarkup(refs.list);
    cleanMarkup(refs.about);
    return;
  }

  fetchCountries(name)
    .then(countries => {
      console.log(countries);
      if (countries.length > 10) {
        cleanMarkup(refs.list);
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countries.length >= 2 && countries.length <= 10) {
        cleanMarkup(refs.about);
        refs.list.innerHTML = createMarkup(countries);
      } else if (countries.length === 1) {
        cleanMarkup(refs.list);
        refs.about.innerHTML = createCountryMarkup(countries);
      }
    })
    .catch(error => {
      cleanMarkup(refs.list);
      cleanMarkup(refs.about);
      Notify.failure('Oops, there is no country with that name');
    });
}
