import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main e2e test`, () => {
  it(`Should film title be pressed`, () => {
    const welcomeButtonClickHandler = jest.fn();
    const titles = [
      `Fantastic Beasts: The Crimes of Grindelwald`,
      `Bohemian Rhapsody`,
      `Macbeth`,
      `Aviator`,
      `We need to talk about Kevin`,
    ];

    const main = shallow(
        <Main
          title={`The Grand Budapest Hotel`}
          genre={`Drama`}
          releaseYear={2014}
          filmTitles={titles}
          filmTitleClickHandler={welcomeButtonClickHandler}
        />
    );

    const filmTitles = main.find(`.small-movie-card__title`);
    filmTitles.map((filmTitle) => filmTitle.props().onClick());
    expect(welcomeButtonClickHandler.mock.calls.length).toBe(filmTitles.length);
  });
});
