import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";
import configurateStore from "redux-mock-store";
import {ALL_GENRES, DEFAULT_SHOWING_FILMS_COUNT} from "../../constants";
import {Provider} from "react-redux";
import {getGenresFromFilms} from "../../utils";

const mockStore = configurateStore([]);

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

describe(`Render GenresList`, () => {
  it(`Should GenresList render correctly`, () => {
    const store = mockStore({
      showingFilmsCount: DEFAULT_SHOWING_FILMS_COUNT,
      genre: ALL_GENRES,
      films,
    });
    const tree = renderer.create(
        <Provider store={store}>
          <GenresList
            genres={getGenresFromFilms(films)}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
