function createMarkup(countries) {
  return countries
    .map(
      ({ name, flags }) =>
        `<li style = "list-style: none">
        <img src="${flags.svg}" alt="${name.official}" width="30" height="20">
        ${name.official}
        </li>`
    )
    .join('');
}

export { createMarkup };
