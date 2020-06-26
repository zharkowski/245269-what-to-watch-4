import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

describe(`Render App`, () => {
  it(`Should App render correctly`, function () {
    const filmTitles = [
      `Fantastic Beasts: The Crimes of Grindelwald`,
      `Bohemian Rhapsody`,
      `Macbeth`,
      `Aviator`,
      `We need to talk about Kevin`,
    ];

    const tree = renderer.create(
        <App
          title={`The Grand Budapest Hotel`}
          genre={`Drama`}
          releaseYear={2014}
          filmTitles={filmTitles}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
