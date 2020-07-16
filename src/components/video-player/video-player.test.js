import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

describe(`Render VideoPlayer`, () => {
  it(`Should VideoPlayer render correctly`, () => {
    const tree = renderer.create(
        <VideoPlayer
          isPlaying={false}
          poster={film.picture}
          src={film.src}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
