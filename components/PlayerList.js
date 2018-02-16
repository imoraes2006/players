import React, { Component } from 'react';
import { ListView } from 'react-native';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import ListItem from './ListItem';

/**
 * PlayerList uses a ListView component which uses ListItem components
 *    For this demo, before it gets rendered it pulls data from Firebase 
 *    Firebase is a NoSQL cloud database. Data is stored as JSON
 *    So whaaaat is this about HTML embedded in Javascript? Yep, this is 
 *    what React calls JSX
 * 
 */

 //  ES6 syntactic sugar

class PlayerList extends Component {
	
    constructor(props) {
       super(props);
       //  rowHasChanged: performance optimization designed to only re-render 
       //  rows that have their source data changed. Note: data in dataSource
       //  is immuatable
       this.state = {
          dataSource: new ListView.DataSource({
             rowHasChanged: (row1, row2) => row1 !== row2,
          })
       };
    }

    /**
     * initData() get data from Firebase 
     * 
     */
    initData() {  
       // FIXME: should be a config here
       const config = {
          // put your config here from Firebase
          apiKey: "AIzaSyAEZfTRsE0eS28mN1sqdacyU5cULhVraOc",
          authDomain: "players-3ac2c.firebaseapp.com",
          databaseURL: "https://players-3ac2c.firebaseio.com",
          projectId: "players-3ac2c",
          storageBucket: "players-3ac2c.appspot.com",
          messagingSenderId: "844449988310"
       };
       const firebaseApp = firebase.initializeApp(config);
       this.itemsRef = firebase.database().ref();
       this.itemsRef.once('value', (snap) => {
          var list = snap.val();
          // Data flows one way: Child components dont affect parents. Set state and updates made.
          // NOTE: From the docs: data in the data source is immutable, so you can't modify it directly. 
          // Clone methods suck in the new data and compute a diff for each row so ListView knows 
          // whether to re-render it or not
          this.setState({
             dataSource: this.state.dataSource.cloneWithRows(list)
          }); 
       });
    }
   
	/**
   * componentWillMount() get data from Firebase 
   * component is about to render on the screen
   * 
   */
  componentWillMount() {
       console.log('before initData call');
       this.initData();   
	}
	
  /**
   * componentDidMount() Unlike componentWillMount() or render() 
   * we can now fully interact with the Native stack
   * 
   */
	componentDidMount() {
		console.log('in componentDidMount');
	}

	renderRow(player) {
	   return <ListItem player={player} />; 
	}

  /**
   * render() a pure function: does not modify state
   * do not call setState() in render as it will call render infinitely
   * 
   */
	render() {
     // ListView displays vertically scrolling lists of data
     // data source: Fill it up with an array of data blobs
     // renderRow: Callback that takes data and renders a row for 
     // each blob in data source
	   return (
	      <ListView
		     dataSource={this.state.dataSource}
		     renderRow={this.renderRow}
		  />
	    );
	}
}

export default PlayerList;