import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Footer extends Component {

  constructor(props){
    super(props)

  }

 render(){
   return(
     <View style={styles.footer}>
       <Text style={styles.texto}>
         Aplicação de Teste
       </Text>
       <Text style={styles.texto2}>
         Todos os direitos reservados
       </Text>
     </View>
   );
  }
 }

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'column',
    backgroundColor: '#7832b8',
    height: 60,
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  texto2: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center'
  }
})