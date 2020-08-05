import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "../../components/video-player/video-player";
import withVideoPlayer from "./with-video-player";

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  title: `Bohemian Rhapsody`,
  picture: `img/bohemian-rhapsody.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

const Player = (props) => {
  const {children} = props;
  return (
    <>
      {children}
    </>
  );
};

Player.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

describe(`VideoPlayer e2e tests`, () => {
  it(`VideoPlayer should should have state for "playing"`, () => {
    const PlayerWrapped = withVideoPlayer(Player);
    const videoPlayer = mount(
        <PlayerWrapped
          isPlaying={false}
          src={film.src}
          poster={film.picture}
        />
    );

    expect(videoPlayer.state().isPlaying).toEqual(false);
  });

  it(`VideoPlayer should should have state for "on pause"`, () => {
    const PlayerWrapped = withVideoPlayer(Player);
    const videoPlayer = mount(
        <PlayerWrapped
          isPlaying={true}
          src={film.src}
          poster={film.picture}
        >
          <video />
        </PlayerWrapped>
    );

    expect(videoPlayer.state().isPlaying).toEqual(true);
  });
});
