import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const logo = require('../Img/logo.png');
export default class Navbar extends Component {


 render(){
   return(
     <View style={styles.nav}>
       <Image source={logo} style={styles.img} />
       <Text style={styles.texto}>
         MakeUp
       </Text>
     </View>
   );
  }
 }

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#7832b8',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: { 
    width: 50, 
    height: 50,
    marginHorizontal: 20
  },
  texto: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  }
})