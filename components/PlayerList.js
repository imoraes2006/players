import React, { Component } from 'react';
import { ListView } from 'react-native';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class PlayerList extends Component {
	
    constructor(props) {
       super(props);
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
       };
       const firebaseApp = firebase.initializeApp(config);
       this.itemsRef = firebase.database().ref();
       this.itemsRef.once('value', (snap) => {
          var list = snap.val();
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
       this.initData();   
	}
	
  /**
   * componentDidMount() Unlike componentWillMount() or render() 
   * we can now fully interact with the Native stack
   * 
   */
	componentDidMount() {
		console.log('in did mount');
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
	   return (
	      <ListView
		     dataSource={this.state.dataSource}
		     renderRow={this.renderRow}
		  />
	    );
	}
}

export default PlayerList;