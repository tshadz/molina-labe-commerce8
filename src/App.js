import React from 'react';
import './App.css';
import styled from 'styled-components';
import Produtos from './components/produtos/Produtos';
import Header from './components/Header';
import Footer from './components/Footer';
import Filtros from './components/Filtros';
import Carrinho from './components/carrinhoDeCompras/Carrinho'
import Login from './components/login/Login'
import { FaTshirt } from 'react-icons/fa';
import { ImRocket } from 'react-icons/im';
import { GiStoneSphere } from 'react-icons/gi';
import { FcClearFilters } from 'react-icons/fc';

const Body = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

    @media (max-width: 800px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`

const FiltroCategoria =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  height: 300px;

  .icon {
    font-size: 60px;
    margin: 5px;
    cursor:pointer;
  }

  #LimparCategoria {
    width: 30px;
  }

`
const FiltroContainer = styled.div`
  display: flex;
  flex-direction: column;
    @media (max-width:768px){
      margin: 20px;
    }
`

const listaProdutos = [
  {
    id: 1,
    nome: "Camiseta Elon Musk",
    preco: 150,
    imageUrl: "https://picsum.photos/200/200",
    categoria:'Camisetas',
  },
  {
    id: 2,
    nome: "Foguete do Elon Musk",
    preco: 20000,
    imageUrl: "https://picsum.photos/201/200",
    categoria:'Foguetes',
  },
  {
    id: 3,
    nome: "Meteorito Marte",
    preco: 30000,
    imageUrl: "https://picsum.photos/202/200",
    categoria:'Meteoritos',
  },
  {
    id: 4,
    nome: "Camiseta Elon Musk",
    preco: 150,
    imageUrl: "https://picsum.photos/200/200",
    categoria:'Camisetas',
  },
  {
    id: 5,
    nome: "Foguete do Elon Musk",
    preco: 20000,
    imageUrl: "https://picsum.photos/201/200",
    categoria:'Foguetes',
  },
  {
    id: 6,
    nome: "Meteorito Marte",
    preco: 30000,
    imageUrl: "https://picsum.photos/202/200",
    categoria:'Meteoritos',
  },
]


class App extends React.Component {
  state = {
    filtroMinimo:'',
    filtroMaximo:'',
    filtroNome: '',
    filtroCategoria:'',
    listaProdutosCarrinho: [],
    logar:true,
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

  onChangeFiltroCategoria = (event) => {
    this.setState({filtroCategoria: event.target.value})
  }

  onClickCamiseta = () => {
    this.setState({filtroCategoria: 'Camisetas'})
  }

  onClickFoguete = () => {
    this.setState({filtroCategoria: 'Foguetes'})
  }

  onClickMeteorito = () => {
    this.setState({filtroCategoria: 'Meteoritos'})
  }

  onClickLimparFiltros = () => {
    this.setState({filtroNome: ''})
    this.setState({filtroMaximo: ''})
    this.setState({filtroMinimo: ''})
    this.setState({filtroNome: ''})
    this.setState({filtroCategoria: ''})
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

      const newListaProdutosCarrinho = [...this.state.listaProdutosCarrinho, {...addProdutoNoCarrinho, quantidade:1}]
      
      this.setState({listaProdutosCarrinho: newListaProdutosCarrinho})
    }
  }

  render () {

    let renderizaPagina

    if (this.state.logar === false){
      renderizaPagina = <Main>
        <FiltroContainer>
        <Filtros
          filtroMinimo={this.state.filtroMinimo}
          filtroMaximo={this.state.filtroMaximo}
          filtroNome={this.state.filtroNome}
          filtroCategoria={this.state.filtroCategoria}
          onChangeFiltroMinimo={this.onChangeFiltroMinimo}            
          onChangeFiltroMaximo={this.onChangeFiltroMaximo}            
          onChangeFiltroNome={this.onChangeFiltroNome}
          onChangeFiltroCategoria={this.onChangeFiltroCategoria}                  
          />
        <FiltroCategoria>
          <FaTshirt className="icon"
            value="Camisetas"
            onClick={this.onClickCamiseta}
            /> 
          <p>Camisetas</p>
          <ImRocket className="icon"
            value="Foguete"
            onClick={this.onClickFoguete}      
            />
          <p>Foguetes</p>
          <GiStoneSphere className="icon"
            value="Meteorito"
            onClick={this.onClickMeteorito}
            />
          <p>Meteoritos</p>
          <FcClearFilters className="icon" id="LimparFiltros"
            onClick={this.onClickLimparFiltros}
            />
          <p>Limpar Filtros</p>
        </FiltroCategoria>
      </FiltroContainer>
    <Produtos 
      produtos={listaProdutos}
      filtroMinimo={this.state.filtroMinimo}
      filtroMaximo={this.state.filtroMaximo}
      filtroNome={this.state.filtroNome}
      filtroCategoria={this.state.filtroCategoria}
      AddProdutoCarrinho={this.AddProdutoCarrinho}
      />
    <Carrinho
      listaProdutosCarrinho = {this.state.listaProdutosCarrinho}
      removerProdutoCarrinho = {this.removerProdutoCarrinho}
      />
      </Main>
    } else {
      renderizaPagina = <Login />
    }

    return (
      <Body className = "PaginaInicial">
        <Header />
          {renderizaPagina}
        <Footer 
        />
      </Body>
    );  
  }
}
export default App;
