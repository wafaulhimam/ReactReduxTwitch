import React from 'react';
import ReactDOM from 'react-dom';

// Initilize Store, importing createStore from Redux

// Import the reducer
import TwitchApp from './reducers/TwitchApp';

// Import Provider from React-Redux Library, so the store accessible to the container component
import { Provider } from 'react-redux';

// Import the container component
import Streams from './components/containers/Streams';

// Import Middleware
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// Import Redux Thunk Middleware
import thunk from 'redux-thunk';

// Import Redux Raven Middleware
import Raven from "raven-js";
import createRavenMiddleware from "raven-for-redux";


//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Streams store={store} />
      </div>
    )
  }
}

// Redux Raven Middleware
Raven.config('https://dd8e13da2fc548ff806939c5f510b48c@sentry.io/1418578').install();

//intialize store
let store = createStore(
  TwitchApp, 
  applyMiddleware(thunk, logger, createRavenMiddleware(Raven, {}) )
  );

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
