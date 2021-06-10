import React from 'react';
import './App.css';
import styled from 'styled-components';
import Produtos from './components/produtos/Produtos';
import Header from './components/Header';
import Footer from './components/Footer';
import Filtros from './components/Filtros';
import Carrinho from './components/carrinhoDeCompras/Carrinho'


const Main = styled.div`
  background-color: lightpink;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;

    @media (max-width: 800px){
      flex-direction: column;
      position: relative;
      justify-content: center;
      align-items: center;
    }
`


const Filtro = styled.div`
  background-color: lightcoral;
  height: 400px;
  width: 300px;

`

const listaProdutos = [
  {
    id: 1,
    nome: "Foguete da Missão Apollo 11",
    preco: 10000,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    nome: "Foguete do Elon Musk",
    preco: 20000,
    imageUrl: "https://picsum.photos/201/200",
  },
  {
    id: 3,
    nome: "Foguete da Missão Fugindo da terra",
    preco: 30000,
    imageUrl: "https://picsum.photos/202/200",
  },
]

class App extends React.Component {
  state = {
    filtroMinimo:100,
    filtroMaximo:10000000,
    filtroNome: '',
    listaProdutosCarrinho: [
      {
        id: 1,
        nome: "Foguete da Missão Apollo 11",
        preco: 10000,
        imageUrl: "https://picsum.photos/200/200",
        quantidade: 1,
      },
      {
        id: 2,
        nome: "Foguete do Elon Musk",
        preco: 20000,
        imageUrl: "https://picsum.photos/201/200",
        quantidade: 1,
      },
      {
        id: 3,
        nome: "Foguete da Missão Fugindo da terra",
        preco: 30000,
        imageUrl: "https://picsum.photos/202/200",
        quantidade: 5,
      },
    ]
  } 

  onChangeFiltroMinimo = (event) => {
    this.setState({filtroMinimo: event.target.value})
  }

  onChangeFiltroMaximo = (event) => {
    this.setState({filtroMaximo: event.target.value})
  }

  onChangeFiltroNome = (event) => {
    this.setState({filtroNome: event.target.value})
  }

  removerProdutoCarrinho = (produtoId) => {
    const newListaProdutosCarrinho = this.state.listaProdutosCarrinho.map((produto)=> {
      if(produto.id === produtoId){
        return {
          ...produto,
          quantidade: produto.quantidade -1
        }
      }
      return produto
    }).filter((produto)=> produto.quantidade > 0)
    this.setState({listaProdutosCarrinho: newListaProdutosCarrinho})
  }

  AddProdutoCarrinho = (produtoId) => {
    const produtoEstaNoCarrinho = this.state.listaProdutosCarrinho.find(produto => produtoId === produto.id)

    if (produtoEstaNoCarrinho){
      const newListaProdutosCarrinho = this.state.listaProdutosCarrinho.map((produto)=> {
        if(produto.id === produtoId){
          return {
            ...produto,
            quantidade: produto.quantidade +1
          }
        }
        return produto
      })
      this.setState({listaProdutosCarrinho: newListaProdutosCarrinho})
    } else {
      const addProdutoNoCarrinho = listaProdutos.find(produto => produtoId === produto.id)

      const newProdutosNoCarrinho = [...this.state.listaProdutosCarrinho, {addProdutoNoCarrinho, quantidade:1}]
    }
  }

  render () {

    return (
      <div className = "PaginaInicial">
        <Header />
        <Main>
          <Filtros
            filtroMinimo={this.state.filtroMinimo}
            filtroMaximo={this.state.filtroMaximo}
            filtroNome={this.state.filtroNome}
            onChangeFiltroMinimo={this.onChangeFiltroMinimo}            
            onChangeFiltroMaximo={this.onChangeFiltroMaximo}            
            onChangeFiltroNome={this.onChangeFiltroNome}                  
          />
          <Produtos 
            produtos={listaProdutos}
            filtroMinimo={this.state.filtroMinimo}
            filtroMaximo={this.state.filtroMaximo}
            filtroNome={this.state.filtroNome}
            AddProdutoCarrinho={this.AddProdutoCarrinho}
            />
          <Carrinho
            listaProdutosCarrinho = {this.state.listaProdutosCarrinho}
            removerProdutoCarrinho = {this.removerProdutoCarrinho}
          />
        </Main>
        <Footer />
      </div>
    );  
  }
}
export default App;
