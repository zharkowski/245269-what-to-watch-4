import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card";

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

describe(`Render FilmCard`, () => {
  it(`Should FilmCard render correctly`, () => {
    const tree = renderer.create(
        <FilmCard
          film={film}
          onHover={() => {}}
          onFilmClick={() => {}}
          isPlaying={false}
          onFilmCardLeave={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
