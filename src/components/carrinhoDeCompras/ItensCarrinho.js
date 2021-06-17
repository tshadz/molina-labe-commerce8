import React from 'react'
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa' 
import Botao from '../Botao'

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px;
    padding: 5px;
    height: 100px;
img {
    width: 50px;
    height: 50px;
}
`

const ItensInformacoes = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-grow: 1;
    margin: 5px;
`


const RemoverItens = styled.div`
    width: 15px;
`

const NomeProduto = styled.p`
    font-weight: 700;
`

export default class ItensCarrinho extends React.Component {
    render () {
        return (
            <ItemContainer>
                <img src = {this.props.produtosCarrinho.imageUrl}/>
                <ItensInformacoes>
                    <NomeProduto>{this.props.produtosCarrinho.nome}</NomeProduto>
                    <p>{this.props.produtosCarrinho.quantidade}x R${this.props.produtosCarrinho.preco},00</p>
                </ItensInformacoes>
                <RemoverItens 
                    onClick={()=> this.props.removerProdutoCarrinho(this.props.produtosCarrinho.id)}
                >
                    <FaTrash/>
                </RemoverItens>
            </ItemContainer>
        )
    }

    
}