import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const films = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Bohemian Rhapsody`,
  picture: `img/bohemian-rhapsody.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Macbeth`,
  picture: `img/macbeth.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Aviator`,
  picture: `img/aviator.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `We need to talk about Kevin`,
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `What We Do in the Shadows`,
  picture: `img/what-we-do-in-the-shadows.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Revenant`,
  picture: `img/revenant.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Shutter Island`,
  picture: `img/shutter-island.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}];

const mockEvent = {
  preventDefault() {}
};

describe(`Main e2e test`, () => {
  it(`Should film title be pressed`, () => {
    const onFilmClick = jest.fn();
    const main = mount(
        <Main
          title={`The Grand Budapest Hotel`}
          genre={`Drama`}
          releaseYear={2014}
          films={films}
          onFilmClick={onFilmClick}
        />
    );

    const filmCards = main.find(`FilmCard`);
    const filmTitles = filmCards.map((filmCard) => filmCard.find(`.small-movie-card__title`));
    filmTitles.map((title) => title.simulate(`click`, mockEvent));
    expect(onFilmClick.mock.calls.length).toBe(films.length);
  });

  it(`Should film image be pressed`, () => {
    const onFilmClick = jest.fn();
    const main = mount(
        <Main
          title={`The Grand Budapest Hotel`}
          genre={`Drama`}
          releaseYear={2014}
          films={films}
          onFilmClick={onFilmClick}/>
    );

    const filmCards = main.find(`FilmCard`);
    const filmImages = filmCards.map((filmCard) => filmCard.find(`.small-movie-card__image`));
    filmImages.map((image) => image.simulate(`click`, mockEvent));
    expect(onFilmClick.mock.calls.length).toBe(films.length);
  });
});
