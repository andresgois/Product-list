

# React Native

## Projeto Lista de produtos utilizando o Axios para requisições

## Inciando o projeto 
- Após baixar o projeto no github
- Entra na pasta do projeto
- npm install

## Habilitar debug remoto
- ctrl + m, no emulador
  - debug JS remotely
  - ele abre uma inst^ncia do chrome
  - é só abrior o console agora

## Ciclo de vida de um componente
- **Invocado quando a classe do componente é instânciada**
```
  constructor(props){ 
    super(props) 
    console.log('Construindo a aplicação')
  }
```
- **Antes que a renderização aconteça o componente é invocado**
- **é invocado uma única vez, antes da comtagem do componente**
```
  componentWillUnmount(){
    console.log('Antes da renderização do compornente')
  }
```
    
- **Quando ele é invocado ele renderiza um componente**
```
  render(){
    console.log('compornente renderizado')
  }
```
- **Invocado após a renderização do componente, também invocado uma única vez**
```
  componentDidMount(){
    console.log('Depois da renderização do compornente')
  }
```
### Dependências, caso seja preciso
- npm i --save-dev babel-preset-es2015
- npm i --save-dev babel-preset-react
- npm i --save-dev axios

## Api para consumo

(API de Produtos)[https://makeup-api.herokuapp.com/]
- **End Point**
- http://makeup-api.herokuapp.com/api/v1/products.json
