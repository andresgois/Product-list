import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Footer from "./src/components/Footer.js";
import ListaItens from "./src/components/ListaItens.js";
import Navbar from "./src/components/Navbar.js";

class App extends Component {

  
  render(){

    return(
      <View style={styles.container}>
        <Navbar style={styles.nav} />
        <ListaItens style={styles.lista} />
        <Footer style={styles.footer} />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 10,
  },
  nav: {
    flex: 2,
    backgroundColor: '#fff',
  },
  lista:{
    flex: 6,
  },
  footer: {
    flex: 2,
    backgroundColor: '#400080',
  }
})