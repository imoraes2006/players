import React, { Component } from 'react';
import {
   Text,
   View
} from 'react-native';


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
