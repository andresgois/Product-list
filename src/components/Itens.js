import React, { Component } from 'react';
import { Image,StyleSheet,Text, View } from 'react-native';

class Itens extends Component {

constructor(props){
  super(props)

}

 render(){
   return(
    <View style={[style.card, style.shadowProp]}>
      <Image style={style.img} source={{ uri: this.props.item.image_link}} />
      <View style={style.info}>
        <Text style={style.name}>{this.props.item.name}</Text>
        <Text style={style.brand}>{this.props.item.brand}</Text>
        <Text style={style.price}>R$ {this.props.item.price}</Text>
      </View>
    </View>
   );
  }
 }

export default Itens;

const style=StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 25,
    width: '90%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#ccc',
    shadowOffset: {width: -2, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  img: {
    height: 100, 
    width: 100,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { height: 1, width: 10},
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  info: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationStyle: 'solid',
    textDecorationLine:'underline'
  },
  brand: {
    fontWeight: '500',
  },
  price: {
    fontWeight: 'bold',
  }
})