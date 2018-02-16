import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import PlayerList from './components/PlayerList';
/**
 * React is a js lib for building user interfaces
 * React is all about components 
 * React is not coupled to the DOM 
 *    Uses a Virtual DOM. See later how React Native builds on this.
 * Developing portable native mobile apps was worth checking into
 *    Looked at this: https://electronjs.org/ too btw
 *    React-Native supports development for both iOS and Android 
 *    in JavaScript. This not a WebView but native code
 *    Cross-platform development is important to Audible
 *    https://w.amazon.com/bin/view/Audible/PremiumBusiness/Web/CrossPlatformApproach/
 *    Learn Once Write Everywhere
 * Redux separates what happened from what to do about it
 *    Implementation of Flux Design pattern
 *    Made up of 4 parts organized as a one way data pipeline
 *    Action->Dispatcher->Store->View
 * Dev iteration faster than mobile app and debug in Chrome
 *    No waiting for apk to recompile to see change
 *    debugging helped by using iOS Cmd-D on iOS simulator
 *    Choose Debug JS remotely. Use Chrome Dev Tools. Cool!
 * Purpose of Demo: This app displays details of my favorite sport players
 */
const App = () => {
	return (
		<Provider store={createStore(reducers)}>
		   <View style={{ flex: 1}}>
		      <Header headerText="Favorite Players - Ian"/>
		      <PlayerList/>
		   </View>
		</Provider>
	);
};

export default App;