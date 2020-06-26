import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

describe(`Render Main`, () => {
  it(`Should WelcomeScreen render correctly`, () => {
    const filmTitles = [
      `Fantastic Beasts: The Crimes of Grindelwald`,
      `Bohemian Rhapsody`,
      `Macbeth`,
      `Aviator`,
      `We need to talk about Kevin`,
    ];

    const tree = renderer.create(
        <Main
          title={`The Grand Budapest Hotel`}
          genre={`Drama`}
          releaseYear={2014}
          filmTitles={filmTitles}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
