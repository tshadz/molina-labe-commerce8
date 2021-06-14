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
import { FiLogIn } from 'react-icons/fi'

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

    @media (max-width: 768px){
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

const FraseLogado = styled.div`
  text-align: right;
  width: 100%;
  padding-right:20px;
  padding-top: 5px;
  cursor: pointer;
`

const PaginaPagamento = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  align-self: auto;
`

const listaProdutos = [
  {
    id: 1,
    nome: "Camiseta gato abduzido",
    preco: 150,
    imageUrl: "https://img.lojasrenner.com.br/item/550584434/zoom/3.jpg",
    categoria:'Camisetas',
  },
  {
    id: 2,
    nome: "Foguete do Elon Musk",
    preco: 20000,
    imageUrl: "https://s1.static.brasilescola.uol.com.br/be/2020/10/foguete.jpg",
    categoria:'Foguetes',
  },
  {
    id: 3,
    nome: "Meteorito Marte",
    preco: 30000,
    imageUrl: "https://ogimg.infoglobo.com.br/in/23934277-c8c-d63/FT1086A/meteorito.jpg",
    categoria:'Meteoritos',
  },
  {
    id: 4,
    nome: "Camiseta astronauta",
    preco: 150,
    imageUrl: "https://a-static.mlcdn.com.br/618x463/camiseta-espacial-astronauta-estampa-digital-color-people/colorpeople/11742587242/2ba3f91e7c29c91d7a0be13c0a0144ba.jpg",
    categoria:'Camisetas',
  },
  {
    id: 5,
    nome: "Foguete Chinês ",
    preco: 20000,
    imageUrl: "https://img.olhardigital.com.br/wp-content/uploads/2021/05/Foguete.jpg",
    categoria:'Foguetes',
  },
  {
    id: 6,
    nome: "Meteorito Lua",
    preco: 30000,
    imageUrl: "http://1.bp.blogspot.com/-yHJaUgbjAd0/VdNUW0skNKI/AAAAAAAABU0/MG19v5HrwEs/s1600/aa.jpg",
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
    logar:false,
    bemvindo:'Realize o login para finalizar suas compras',
    finalizarCompra:false,
  } 

  componentDidMount() {
  
    const listaCarrinhoLocal = localStorage.getItem('listaProdutos') 
    const arrayProdutos = JSON.parse(listaCarrinhoLocal)
    if(arrayProdutos) {
      this.setState({listaProdutosCarrinho: arrayProdutos})
    }
    
  }

  componentDidUpdate() {
    localStorage.setItem('listaProdutos', JSON.stringify(this.state.listaProdutosCarrinho))
  }

  logar = () => {
      this.setState({
          logar: !this.state.logar ,
          bemvindo: 'Bem vind@ Astronauta', 
      })
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

  finalizarCompra = (compraFinalizada) => {
    if (compraFinalizada){
      this.setState({finalizarCompra:true})
    }
  }

  render () {

    let renderizaPagina
    if (this.state.finalizarCompra){
      renderizaPagina = <PaginaPagamento>
        <img src="https://user-images.githubusercontent.com/80704054/121716694-b5546e00-cab6-11eb-815d-0fc9412f8094.png"></img>  
        <p>Muito obrigada por realizar sua compra conosco, o boleto para pagamento será enviado no e-mail cadastrado, fique atento! Nossa equipe entrará em contato assim que o pagamento for confirmado.</p>
      </PaginaPagamento>
    } else if (this.state.logar === false){
        renderizaPagina = <>
        <FraseLogado onClick={this.logar}>{this.state.bemvindo} <FiLogIn /></FraseLogado>
        <Main>
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
        finalizarCompra={this.finalizarCompra}
        />
        </Main>
        </>
      } else {
        renderizaPagina = <Login logar={this.logar}/>
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
