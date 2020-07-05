import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

const films = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
}, {
  title: `Bohemian Rhapsody`,
  picture: `img/bohemian-rhapsody.jpg`,
}, {
  title: `Macbeth`,
  picture: `img/macbeth.jpg`,
}, {
  title: `Aviator`,
  picture: `img/aviator.jpg`,
}, {
  title: `We need to talk about Kevin`,
  picture: `img/we-need-to-talk-about-kevin.jpg`,
}, {
  title: `What We Do in the Shadows`,
  picture: `img/what-we-do-in-the-shadows.jpg`,
}, {
  title: `Revenant`,
  picture: `img/revenant.jpg`,
}, {
  title: `Shutter Island`,
  picture: `img/shutter-island.jpg`,
}];

describe(`Render FilmsList`, () => {
  it(`Should FilmsList render correctly`, () => {
    const tree = renderer.create(
        <FilmsList
          films={films}
          onFilmClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
