import {ActionType, ALL_GENRES} from "./constants";
import {films} from "./mocks/films";
import {extend, filterFilmsByGenre} from "./utils";

const InitialState = {
  genre: ALL_GENRES,
  films,
};

const ActionCreator = {
  changeGenreFilter: (genre) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: genre,
  }),
  getFilmsByGenre: (genre) => {
    switch (genre) {
      case ALL_GENRES:
        return {
          type: ActionType.GET_FILMS_BY_GENRE,
          payload: films,
        };
      default:
        return {
          type: ActionType.GET_FILMS_BY_GENRE,
          payload: filterFilmsByGenre(films, genre),
        };
    }
  },
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {
        films: action.payload,
      });
    default:
      return state;
  }
};

export {reducer, ActionCreator};
