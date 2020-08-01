export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
export const getGenresFromFilms = (films) => {
  const genres = new Map();
  films.map((film) => {
    const {genre} = film;
    if (genres.has(film.genre)) {
      genres.set(genre, genres.get(genre) + 1);
    } else {
      genres.set(genre, 1);
    }
  });
  const sortedGenres = new Map([...genres.entries()].sort((a, b) => b[1] - a[1]));
  return Array.from(sortedGenres.keys());
};
export const filterFilmsByGenre = (films, genre) => films.filter((film) => film.genre === genre);
