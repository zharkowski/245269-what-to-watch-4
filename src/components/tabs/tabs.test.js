import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";

const filmDetails = {
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

const reviews = [{
  userName: `Kate Muir`,
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: new Date(`2016-12-24T14:13:56.569Z`),
}, {
  userName: `Bill Goodykoontz`,
  rating: 8.0,
  comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  date: new Date(`2015-10-18T14:13:56.569Z`),
}, {
  userName: `Amanda Greever`,
  rating: 8.0,
  comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
  date: new Date(`2015-11-18T14:13:56.569Z`),
}, {
  userName: `Matthew Lickona`,
  rating: 7.2,
  comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  date: new Date(`2016-12-20T14:13:56.569Z`),
}, {
  userName: `Paula Fleri-Soler`,
  rating: 7.6,
  comment: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  date: new Date(`2020-12-20T14:13:56.569Z`),
}, {
  userName: `Paula Fleri-Soler`,
  rating: 7.0,
  comment: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  date: new Date(`2020-12-20T14:13:56.569Z`),
}];

describe(`Render Reviews`, () => {
  it(`Should Reviews render correctly`, () => {
    const tree = renderer.create(
        <Tabs
          film={filmDetails}
          reviews={reviews}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
