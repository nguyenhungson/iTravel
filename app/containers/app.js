console.log(">> App Containers");

//Require define from redux lib
import React, { Component } from 'react';
import { Navigator, Platform } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers'; //import reducers
import SplashContainer from './SplashContainer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Navigator
					initialRoute={{
						name: 'App', 
						component: SplashContainer
					}}
					configureScene={() => {
						if(Platform.OS == 'ios'){
							return Navigator.SceneConfigs.PushFromRight;
						}
						else{
							return Navigator.SceneConfigs.FloatFromBottomAndroid;
						}
					}}
					renderScene={(route, navigator) => {
						if (route.component) {
							return <route.component navigator={navigator} {...route.passProps} /> 
						}
					}}
				/>
			</Provider>
		);
  	}
}