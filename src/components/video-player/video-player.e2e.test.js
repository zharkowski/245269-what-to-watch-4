import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player";

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  title: `Bohemian Rhapsody`,
  picture: `img/bohemian-rhapsody.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

describe(`VideoPlayer e2e tests`, () => {
  it(`VideoPlayer should should have state for "playing"`, () => {
    const videoPlayer = mount(
        <VideoPlayer
          isPlaying={false}
          src={film.src}
          poster={film.picture}
        />
    );

    expect(videoPlayer.state().isPlaying).toEqual(false);
  });

  it(`VideoPlayer should should have state for "on pause"`, () => {
    const videoPlayer = mount(
        <VideoPlayer
          isPlaying={true}
          src={film.src}
          poster={film.picture}
        />
    );

    expect(videoPlayer.state().isPlaying).toEqual(true);
  });
});
