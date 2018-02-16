import React, { Component } from 'react';
// using ES6 and destructuring: allows you to
// extract specific data from an array or object into a variable
import {
   Text,
   View
} from 'react-native';


/**
 *  Header for app
 *    Note how React styles are contained in component
 *       In React, inline styles are not specified as a string 
 *       Flexbox is a CSS layout that provides a consistent layout on different 
 *       screen sizes
 *       Flexbox in React Native works similar to  CSS specification except that
 *          default flex direction is column on React Native, as opposed to row on Web 
 *          justifyContent for centering elements along main axis
 *          alignItems for centering items along cross-axis of container
 * 
 */
const Header = ({headerText}) => {
   const { textStyle, viewStyle } = styles;

   return (
      <View style={viewStyle}>
         <Text style={textStyle}>
            {headerText}
         </Text>
      </View>
   );
}

// you could also import you styles as a separate js

const styles = {
    viewStyle: {
       backgroundColor: '#ff57224d',
       justifyContent: 'center',
       alignItems: 'center',
       height: 60,
       paddingTop: 15,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.2,
       elevation: 2,
       position: 'relative'
    },
    textStyle: {
       fontWeight: 'bold',
       fontSize: 24
    }
};

export { Header };
