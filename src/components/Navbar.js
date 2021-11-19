import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Navbar extends Component {

 render(){
   return(
     <View style={styles.nav}>
       <Text>
         MakeUp
       </Text>
     </View>
   );
  }
 }

const styles = StyleSheet.create({
  nav: {
  },
})