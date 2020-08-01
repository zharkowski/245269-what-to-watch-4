import {reducer, ActionCreator} from "./reducer";
import {ActionType} from "./constants";
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
      }],
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change genre returns correct action`, () => {
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
        title: `Shutter Island`,
        genre: `Comedy`,
        picture: `img/shutter-island.jpg`,
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      }],
    });
  });
});

