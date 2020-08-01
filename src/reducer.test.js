import {reducer, ActionCreator} from "./reducer";
import {ActionType, DEFAULT_SHOWING_FILMS_COUNT} from "./constants";
import {ALL_GENRES} from "./constants";
import {filterFilmsByGenre} from "./utils";

const films = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Drama`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  picture: `img/bohemian-rhapsody.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Macbeth`,
  genre: `Action`,
  picture: `img/macbeth.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Aviator`,
  genre: `Drama`,
  picture: `img/aviator.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `We need to talk about Kevin`,
  genre: `Action`,
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `What We Do in the Shadows`,
  genre: `Horror`,
  picture: `img/what-we-do-in-the-shadows.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Revenant`,
  genre: `Comedy`,
  picture: `img/revenant.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `No Country for Old Men`,
  genre: `Comedy`,
  picture: `img/no-country-for-old-men.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Pulp Fiction`,
  genre: `Action`,
  picture: `img/pulp-fiction.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `War of the Worlds`,
  genre: `Horror`,
  picture: `img/war-of-the-worlds.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Snatch`,
  genre: `Comedy`,
  picture: `img/snatch.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Shutter Island`,
  genre: `Comedy`,
  picture: `img/shutter-island.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}];

describe(`Reducer working`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      genre: ALL_GENRES,
      films,
      showingFilmsCount: DEFAULT_SHOWING_FILMS_COUNT,
    });
  });

  it(`should change current genre`, () => {
    expect(reducer({
      genre: ALL_GENRES,
      films,
    }, {
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: `Horror`,
    })).toEqual({
      genre: `Horror`,
      films,
    });
  });

  it(`should increase showing films count`, () => {
    expect(reducer({
      genre: ALL_GENRES,
      films,
      showingFilmsCount: 10,
    }, {
      type: ActionType.INCREASE_SHOWING_FILMS_COUNT,
      payload: 5,
    })).toEqual({
      genre: ALL_GENRES,
      films,
      showingFilmsCount: 15,
    });
  });

  it(`should set default showing films count`, () => {
    expect(reducer({
      genre: ALL_GENRES,
      films,
      showingFilmsCount: 10,
    }, {
      type: ActionType.SET_DEFAULT_SHOWING_FILMS_COUNT,
      payload: 5,
    })).toEqual({
      genre: ALL_GENRES,
      films,
      showingFilmsCount: 5,
    });
  });

  it(`should change films`, () => {
    expect(reducer({
      genre: ALL_GENRES,
      films,
    }, {
      type: ActionType.GET_FILMS_BY_GENRE,
      payload: filterFilmsByGenre(films, `Horror`),
    })).toEqual({
      genre: ALL_GENRES,
      films: [{
        title: `What We Do in the Shadows`,
        genre: `Horror`,
        picture: `img/what-we-do-in-the-shadows.jpg`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      }, {
        title: `War of the Worlds`,
        genre: `Horror`,
        picture: `img/war-of-the-worlds.jpg`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      }],
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.changeGenreFilter(`Action`)).toEqual({
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: `Action`,
    });
  });

  it(`Action creator for getting films by genre work correctly`, () => {
    expect(ActionCreator.getFilmsByGenre(`Comedy`)).toEqual({
      type: ActionType.GET_FILMS_BY_GENRE,
      payload: [{
        title: `Revenant`,
        genre: `Comedy`,
        picture: `img/revenant.jpg`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      }, {
        title: `No Country for Old Men`,
        genre: `Comedy`,
        picture: `img/no-country-for-old-men.jpg`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      }, {
        title: `Snatch`,
        genre: `Comedy`,
        picture: `img/snatch.jpg`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      }, {
        title: `Shutter Island`,
        genre: `Comedy`,
        picture: `img/shutter-island.jpg`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      }],
    });
  });

  it(`Action creator for increasing showing films count returns correct action`, () => {
    expect(ActionCreator.increaseShowingFilmsCount()).toEqual({
      type: ActionType.INCREASE_SHOWING_FILMS_COUNT,
      payload: DEFAULT_SHOWING_FILMS_COUNT,
    });
  });

  it(`Action creator for setting default showing films count returns correct action`, () => {
    expect(ActionCreator.setDefaultShowingFilmsCount()).toEqual({
      type: ActionType.SET_DEFAULT_SHOWING_FILMS_COUNT,
      payload: DEFAULT_SHOWING_FILMS_COUNT,
    });
  });
});

