import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "./mocks/films";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer";

const PromoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider
      store={store}
    >
      <App
        title={PromoFilm.title}
        genre={PromoFilm.genre}
        releaseYear={PromoFilm.releaseYear}
        films={films}
      />
    </Provider>,
    document.getElementById(`root`)
);
