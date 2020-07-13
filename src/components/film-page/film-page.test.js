import React from "react";
import renderer from "react-test-renderer";
import FilmPage from "./film-page";

export const film = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  score: 8.9,
  ratingsCount: 240,
  descriptions: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    `Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
  ],
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  runtime: 123,
};

describe(`Render FilmPage`, () => {
  it(`Should FilmPage render correctly`, () => {
    const tree = renderer.create(
        <FilmPage
          film={film}
          onHover={() => {}}
          onFilmClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
