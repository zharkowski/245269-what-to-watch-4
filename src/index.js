import React from "react";
import ReactDOM from "react-dom";
import App from "./compoents/app/app.jsx";

const PromoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: `2014`,
};

const filmTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
];

ReactDOM.render(
    <App
      title={PromoFilm.title}
      genre={PromoFilm.genre}
      releaseYear={PromoFilm.releaseYear}
      filmTitles={filmTitles}
    />,
    document.getElementById(`root`)
);
