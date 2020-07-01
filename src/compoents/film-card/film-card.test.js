import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card";

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

describe(`Render FilmCard`, () => {
  it(`Should FilmCard render correctly`, () => {
    const tree = renderer.create(
        <FilmCard
          film={film}
          onHover={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
