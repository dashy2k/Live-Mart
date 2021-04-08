import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/App';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import reducers from './reducers';

const store = createStore(reducers => [],{},applyMiddleware());

ReactDOM.render(
  <Provider store={store}><Login/></Provider>,document.getElementById('root')
);

