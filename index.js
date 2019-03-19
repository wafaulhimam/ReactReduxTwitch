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

// Import Redux Thunk 
import thunk from 'redux-thunk';

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

//intialize store
let store = createStore(
  TwitchApp, 
  applyMiddleware(thunk, logger)
  );

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
