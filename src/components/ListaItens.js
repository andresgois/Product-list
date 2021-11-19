import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import api from "../API/api";
import Itens from "./Itens";

export default class ListaItens extends Component {

  constructor(props){
    super(props)
    this.state = { listaItens: [] };
  }

  componentDidMount(){
    api.get('?brand=maybelline')
        .then( res => {
          let dados = res.data
          this.setState({listaItens: dados})
        })
        .catch( (e) => console.error("OPS!, Ocorreu um erro", e))
  }

  render(){
    
    return(
      <ScrollView style={styles.container}>
        {
          this.state.listaItens.map( lista =>  (
            <Itens key={lista.name} item={lista} />
          ))
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ab78da'
  }
})