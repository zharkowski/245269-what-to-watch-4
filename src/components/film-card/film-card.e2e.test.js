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
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Hover on film card should pass to the callback data-object from which this card was created`, () => {
  const onHover = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onHover={onHover}
        onFilmClick={() => {}}
        isPlaying={false}
        onFilmCardLeave={() => {}}
      />
  );

  filmCard.simulate(`mouseEnter`);
  setTimeout(() => expect(onHover.mock.calls[0][0]).toMatchObject(film), 1000);
});
