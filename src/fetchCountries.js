import Notiflix from 'notiflix';


export function fetchCountries(name) {
    const BASE_URL = 'https://restcountries.com/v3.1/name/';
    const URL = `${BASE_URL}${name}?fields=name,capital,population,flags,languages`
    return fetch(URL).then(response => {
        if (!response.ok) {
            throw new Error(Notiflix.Notify.failure('Oops, there is no country with that name'));
        }
        return response.json();
    });
};

