/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { allReducers } from './src/reducers/reducer';
import createSagaMiddleware from 'redux-saga'

import AuthScreen from './src/screens/AuthScreen';
import { rootSaga } from './src/reducers/rootSaga'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => {
  <Provider store={store}>
    <AuthScreen/>
  </Provider>
};

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('iDeal', () => App);
