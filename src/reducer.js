import {ActionType, ALL_GENRES, DEFAULT_SHOWING_FILMS_COUNT} from "./constants";
import {films} from "./mocks/films";
import {extend, filterFilmsByGenre} from "./utils";

const InitialState = {
  showingFilmsCount: DEFAULT_SHOWING_FILMS_COUNT,
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
  increaseShowingFilmsCount: () => ({
    type: ActionType.INCREASE_SHOWING_FILMS_COUNT,
    payload: DEFAULT_SHOWING_FILMS_COUNT,
  }),
  setDefaultShowingFilmsCount: () => ({
    type: ActionType.SET_DEFAULT_SHOWING_FILMS_COUNT,
    payload: DEFAULT_SHOWING_FILMS_COUNT,
  }),
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
    case ActionType.INCREASE_SHOWING_FILMS_COUNT:
      return extend(state, {
        showingFilmsCount: state.showingFilmsCount + action.payload,
      });
    case ActionType.SET_DEFAULT_SHOWING_FILMS_COUNT:
      return extend(state, {
        showingFilmsCount: action.payload,
      });
    default:
      return state;
  }
};

export {reducer, ActionCreator};
