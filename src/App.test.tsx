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
  });
  test("when app starts, renders idol buttons with their names", () => {
    idols.items.forEach(item => {
      const element = screen.getByRole('button', { name: `open ${item.name} view` });
      expect(element).toBeInTheDocument();
    });
  });
});
