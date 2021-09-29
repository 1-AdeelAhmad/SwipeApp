import { shallow } from "enzyme";
import * as React from "react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("App", () => {
   const initialState = { output: 10 };
   const mockStore = configureStore();
   let store, wrapper;

   it("renders the provider on top level", () => {
      store = mockStore(initialState);
      const component = shallow(
         <Provider store={store}>
            <App />
         </Provider>
      );
      expect(component).toHaveLength(1);
   });
});
