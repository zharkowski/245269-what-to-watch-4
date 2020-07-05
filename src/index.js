import React from "react";
import ReactDOM from "react-dom";
import App from "./compoents/app/app.jsx";
import {films} from "./mocks/films";

const PromoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
};

ReactDOM.render(
    <App
      title={PromoFilm.title}
      genre={PromoFilm.genre}
      releaseYear={PromoFilm.releaseYear}
      films={films}
    />,
    document.getElementById(`root`)
);
