import React, { Component} from 'react';
import { LayoutAnimation, Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {

   componentWillUpdate() {
      LayoutAnimation.spring();
   }
   
   renderDescription() {
      const { player, expanded } = this.props;
         if (expanded) {
    	    return (
    		   <CardSection>
    		      <View>
    			     <Image style={styles.imageStyle} source={{ uri: player.image}} />
    			  </View>
    			  <View style={styles.viewStyle}>
		             <Text style={styles.detailStyle}>
		                {player.team}
		             </Text>
		             <Text style={styles.detailStyle}>
		                {player.position}
		             </Text>
		          </View>
    		   </CardSection>
    		);
         }
   }

   render() {
      const { titleStyle, imageStyle} = styles;
      const { id, name } = this.props.player;

	  return (
	     <TouchableWithoutFeedback 
		    onPress={() => this.props.selectPlayer(id)}>
		    <View>
		       <CardSection>
		       <Text style={titleStyle}>
		            {name}
		       </Text>
		       </CardSection>
		       {this.renderDescription()}
		    </View>
		 </TouchableWithoutFeedback>
      );
   }
}

// For a description of using CSS in js with React Native
// see https://speakerdeck.com/vjeux/react-css-in-js
// For a quick primer on flexbox, http://www.reactnativeexpress.com/flexbox
const styles = {
   titleStyle: {
      fontSize: 20,
      fontWeight: 'bold'
   },
   detailStyle: {
      fontSize: 18
   },
   viewStyle: {
      paddingLeft: 3,
	  flexDirection: 'column',
	  justifyContent: 'space-around'
   },
   cardStyle: {
      flex: 2
   },
   imageStyle: {
      width: 70,
	  height: 70
   }
}

const mapStateToProps = (state, ownProps) => {
   const expanded = state.selectedPlayerId === ownProps.player.id;
   return { expanded };
};

export default connect(mapStateToProps, actions) (ListItem);