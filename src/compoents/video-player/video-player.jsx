import React from "react";
import PropTypes from "prop-types";
import {FilmCardShape} from "../../constants";

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this.state = {
      progress: 0,
      volume: 0,
      isLoading: true,
      isPlaying: this.props.isPlaying,
    };
  }

  componentDidMount() {
    const {src, poster} = this.props;
    const video = this._videoRef.current;
    video.src = src;
    video.poster = poster;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    video.onplay = () => this.setState({
      isPlaying: true,
    });

    video.onpause = () => this.setState({
      isPlaying: false,
    });

    video.ontimeupdate = () => this.setState({
      progress: video.currentTime,
    });

    video.onvolumechange = () => this.setState({
      volume: video.volume,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.onvolumechange = null;
    video.src = ``;
    video.poster = ``;
  }

  render() {
    const {src, poster} = this.props;
    const isMuted = this.state.volume === 0;
    return (
      <video
        ref={this._videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        width={FilmCardShape.WIDTH}
        height={FilmCardShape.HEIGHT}
      />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying !== this.state.isPlaying) {
      this.setState({isPlaying: this.props.isPlaying});
    }
    if (this.state.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
