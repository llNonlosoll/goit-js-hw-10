// Функція створення розмітки для однієї країни

function createCountryMarkup(country) {
  return country.map(
    ({ name, capital, population, flags, languages }) =>
      `<img src="${flags.svg}" alt="${name.official}" width="60" height="50">
      <b style = "color: blue">${name.official}</b>
      <p>Capital: ${capital}</p>
      <p>Population: ${population}</p>
      <p>Languages: ${Object.values(languages)}</p>`
  );
}

export { createCountryMarkup };
