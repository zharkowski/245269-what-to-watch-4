import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import configurateStore from "redux-mock-store";
import {ALL_GENRES} from "../../constants";
import {Provider} from "react-redux";

const mockStore = configurateStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

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

const mockEvent = {
  preventDefault() {}
};

describe(`Main e2e test`, () => {
  it(`Should film title be pressed`, () => {
    const store = mockStore({
      genre: ALL_GENRES,
      films,
    });
    const onFilmClick = jest.fn();
    const main = mount(
        <Provider store={store}>
          <Main
            title={`The Grand Budapest Hotel`}
            genre={`Drama`}
            releaseYear={2014}
            films={films}
            onFilmClick={onFilmClick}
          />
        </Provider>
    );

    const filmCards = main.find(`FilmCard`);
    const filmTitles = filmCards.map((filmCard) => filmCard.find(`.small-movie-card__title`));
    filmTitles.map((title) => title.simulate(`click`, mockEvent));
    expect(onFilmClick.mock.calls.length).toBe(films.length);
  });

  it(`Should film image be pressed`, () => {
    const onFilmClick = jest.fn();
    const store = mockStore({
      genre: ALL_GENRES,
      films,
    });
    const main = mount(
        <Provider store={store}>
          <Main
            title={`The Grand Budapest Hotel`}
            genre={`Drama`}
            releaseYear={2014}
            films={films}
            onFilmClick={onFilmClick}
          />
        </Provider>
    );

    const filmCards = main.find(`FilmCard`);
    const filmImages = filmCards.map((filmCard) => filmCard.find(`.small-movie-card__image`));
    filmImages.map((image) => image.simulate(`click`, mockEvent));
    expect(onFilmClick.mock.calls.length).toBe(films.length);
  });
});
