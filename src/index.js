import { render } from 'react-dom';
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';
import '../styles/index.scss';
import MyLibraryController from './components/MyLibraryController';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App} />
          <Route path="/libray" component={MyLibraryController} />
        </Router>
      </Provider>
    )
  }
}

render(
  <AppContainer />,
  document.getElementById('root')
);
