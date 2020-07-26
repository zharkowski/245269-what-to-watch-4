import {ActionType, Genre} from "./constants";
import {films} from "./mocks/films";
import {extend} from "./utils";

const InitialState = {
  genre: Genre.ALL,
  films,
};

const ActionCreator = {
  changeGenreFilter: (genre) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: genre,
  }),
  getFilmsByGenre: (genre) => {
    switch (genre) {
      case Genre.ALL:
        return {
          type: ActionType.GET_FILMS_BY_GENRE,
          payload: films,
        };
      default:
        return {
          type: ActionType.GET_FILMS_BY_GENRE,
          payload: films.filter((film) => film.genre === genre),
        };
    }
    return {
      type: ActionType.GET_FILMS_BY_GENRE,
      payload: genre
    };
  },
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, action.payload);
    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, action.payload);
    default:
      return state;
  }
};

export {reducer, ActionCreator};
