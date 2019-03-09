/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './src/reducers/reducer';
import createSagaMiddleware from 'redux-saga';

import Colors from './src/constants/Colors';

import RootNavigation from './src/navigation/RootNavigation';
import rootSaga from './src/reducers/rootSaga'; 

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor={Colors.watermelon} />
          <RootNavigation />
        </View>
      </Provider>
    );
  }
};

sagaMiddleware.run(rootSaga);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
