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

  componentWillUnmount(){
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //       .then( response => { 
    //         this.setState({ listaItens: response}); 
    //       })
    //       .catch( () => { console.log('Erro ao recuperar dados'); })
    api.get('/posts')
        .then((response) => {
          console.log(response.data)
        })
        .catch( (e) => console.error("OPS!, Ocorreu um erro", e))
  }

  render(){
    //console.log(this.state.listaItens)
    return(
      <View>
        <Text>API</Text>
      </View>
    );
  }
}