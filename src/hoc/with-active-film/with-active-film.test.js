import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveFilm from "./with-active-film";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const mockPromoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  picture: `img/the-grand-budapest-hotel-poster.jpg`,
  score: 8.9,
  ratingsCount: 240,
  descriptions: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
  ],
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  runtime: 109,
};

const films = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Drama`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  picture: `img/bohemian-rhapsody.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Macbeth`,
  genre: `Action`,
  picture: `img/macbeth.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Aviator`,
  genre: `Drama`,
  picture: `img/aviator.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `We need to talk about Kevin`,
  genre: `Action`,
  picture: `img/we-need-to-talk-about-kevin.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `What We Do in the Shadows`,
  genre: `Horror`,
  picture: `img/what-we-do-in-the-shadows.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `Revenant`,
  genre: `Comedy`,
  picture: `img/revenant.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}, {
  title: `No Country for Old Men`,
  genre: `Comedy`,
  picture: `img/no-country-for-old-men.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
}];

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

const MockComponentWithAudio = withActiveFilm(MockComponent);

it(`withActiveFilm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWithAudio
      promoFilm={mockPromoFilm}
      films={films}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
