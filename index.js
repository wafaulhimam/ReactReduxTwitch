import React from 'react';
import ReactDOM from 'react-dom';

// Initilize Store, importing createStore from Redux
import { createStore } from 'redux';

// Import the reducer
import TwitchApp from './reducers/TwitchApp';

// Import Provider from React-Redux Library, so the store accessible to the container component
import { Provider } from 'react-redux';

// Import the container component
import Streams from './components/containers/Streams';

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
let store = createStore(TwitchApp)

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
