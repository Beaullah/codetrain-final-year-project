// App.js
import React from "react";

import store from "./redux/store";
import AppContainer from "./Navigation/Navigation";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
