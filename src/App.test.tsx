import React from "react";
import { render, screen } from "@testing-library/react";
// import { Provider } from "react-redux";
// import { store } from "./app/store";
import idols from "./data/idols.json";
import App from "./App";

describe("App", () => {
  beforeAll(() => {
    render(
      /* <Provider store={store}>
        <App />
      </Provider> */
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    /* uncomment to DEBUG idols.json */
    /* let withoutErrors = true;
    idols.items.forEach(item => {
      item.albums.forEach(album => {
        album.songs.forEach(song => {
          if (!song.hasOwnProperty("id")) {
            console.log(`${song.title} does not have an \"id\"`);
            withoutErrors = false;
          }
        });
      });
    });
    console.log(withoutErrors ? "data without errors" : "errors in data"); */
  });
  test("when app starts, renders idol buttons with their names", () => {
    idols.items.forEach(item => {
      const element = screen.getByRole('button', { name: `open ${item.name} view` });
      expect(element).toBeInTheDocument();
    });
  });
});
