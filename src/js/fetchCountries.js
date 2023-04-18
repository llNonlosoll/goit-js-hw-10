// Функція запиту на сервер

function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(url).then(result => {
    if (!result.ok) {
      // console.log(Error(result.status));
      // console.log(Error(result.statusText));
      throw new Error(result.status);
    }
    return result.json();
  });
}

export { fetchCountries };
