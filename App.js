import React, { Component } from "react";
import ListaItens from "./src/components/ListaItens.js";

class App extends Component {

  // Invocado quando a classe do componente é instânciada
  constructor(props){ 
    super(props) 
    console.log('Construindo a aplicação')
  }
  // Antes que a renderização aconteça o componente é invocado
  // é invocado uma única vez, antes da comtagem do componente
  componentWillUnmount(){console.log('Antes da renderização do compornente')}
    
  // Quando ele é invocado ele renderiza um componente
  render(){
    console.log('compornente renderizado')
    return(
      <ListaItens />
    );
  }
  // Invocado após a renderização do componente, também invocado uma única vez
  componentDidMount(){console.log('Depois da renderização do compornente')}
}

export default App;