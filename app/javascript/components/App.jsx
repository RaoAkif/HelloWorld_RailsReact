import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';

import configureStore from '../configureStore';
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<h1>Hello this is home</h1>} />
            <Route
              path="/greet"
              element={<Greeting greeting="Hello World" />}
            />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App;
