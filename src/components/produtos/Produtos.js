import React from 'react'
import CardsProdutos from './CardsProdutos'
import styled from 'styled-components';

const ContainerProdutos = styled.div`

`;

const HeaderProdutos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`




export default class Produtos extends React.Component {
    
    state = {
        sort: 'DECRESCENTE',
     }
    
    onChangeSort = (event) => {
        this.setState({sort: event.target.value})
    }

    FiltrarEOrdenarLista = () => {
        return this.props.produtos
            .filter((produto) => this.props.filtroNome ? produto.nome.includes(this.props.filtroNome) : true)
            .filter((produto)=> this.props.filtroCategoria ? produto.categoria.includes(this.props.filtroCategoria) : true)
            .filter((produto) => this.props.filtroMinimo ? produto.preco> this.props.filtroMinimo : true)
            .filter((produto) => this.props.filtroMaximo ? produto.preco< this.props.filtroMaximo : true)
            .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.preco- b.preco: b.preco- a.preco)
      }
    

 render() {
    const listaFiltradaEOrdenada = this.FiltrarEOrdenarLista()
    return (
        <ContainerProdutos>
        <HeaderProdutos>
            <p>Quantidade de produtos: {listaFiltradaEOrdenada.length} </p>
            <label>
            Ordenação:
            <select value={this.state.sort} onChange={this.onChangeSort}>
                <option value={'CRESCENTE'}>Crescente</option>
                <option value={'DECRESCENTE'}>Decrescente</option>
            </select>
            </label>
        </HeaderProdutos>
        <GridProdutos>
            {listaFiltradaEOrdenada.map((produto) => {
            return <CardsProdutos
                produto={produto}
                AddProdutoCarrinho={this.props.AddProdutoCarrinho}
            />
            })}
        </GridProdutos>
        </ContainerProdutos>
    ) 
  }
}
