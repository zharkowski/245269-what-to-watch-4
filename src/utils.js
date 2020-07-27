export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
export const getGenresFromFilms = (films) => {
  return Array.from(new Set(films.map((film) => film.genre)));
};
