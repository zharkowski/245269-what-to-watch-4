import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  title: `Bohemian Rhapsody`,
  picture: `img/bohemian-rhapsody.jpg`,
};

it(`Hover on film card should pass to the callback data-object from which this card was created`, () => {
  const onHover = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onHover={onHover}
      />
  );

  filmCard.simulate(`mouseover`);
  expect(onHover).toHaveBeenCalledTimes(1);
});
