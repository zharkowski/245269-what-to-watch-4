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

    const main = shallow(
        <Main
          title={`The Grand Budapest Hotel`}
          genre={`Drama`}
          releaseYear={2014}
          films={films}
          onFilmTitleClick={welcomeButtonClickHandler}
        />
    );

    const filmTitles = main.find(`.small-movie-card__title`);
    filmTitles.map((filmTitle) => filmTitle.props().onClick());
    expect(welcomeButtonClickHandler.mock.calls.length).toBe(films.length);
  });
});
