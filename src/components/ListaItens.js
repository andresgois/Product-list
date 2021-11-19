import axios from "axios";
import React, { Component } from "react";
import { Text, View } from "react-native";
import api from "../API/api";
import Itens from "./Itens";

export default class ListaItens extends Component {

  constructor(props){
    super(props)
    this.state = { listaItens: [] };
  }

  componentDidMount(){
    api.get('?brand=covergirl&product_type=lipstick')
        .then( res => {
          let dados = res.data
          this.setState({listaItens: dados})
        })
        .catch( (e) => console.error("OPS!, Ocorreu um erro", e))
  }

  render(){
    
    return(
      <View>
        {
          this.state.listaItens.map( lista =>  (
            <Text key={lista.id}>{lista.name}</Text>
          ))
        }
      </View>
    );
  }
}