import React from 'react'
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa'

const CardContainer = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
`;

const CardInfo = styled.div`
display: flex;
flex-direction: column;
padding: 16px;

p {
  margin: 4px 0;
}
`

const AddCarrinhoButton = styled.button`
    background-color: orange;
    cursor: pointer;
    color: rgba(0,0,0,.9);
    font-family: Raleway,sans-serif;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    height: 50px;
`

export default class CardsProdutos extends React.Component {
    render() {
      const produto = this.props.produto
      return <CardContainer>
        <img src={produto.imageUrl}/>
        <CardInfo>
          <p>{produto.nome}</p>
          <p>R${produto.preco},00</p>
          <AddCarrinhoButton
            texto="Adicionar ao carrinho"
            onClick={() => this.props.AddProdutoCarrinho(produto.id)}
          >
            <FaShoppingCart />
            Adicionar ao carrinho
          </AddCarrinhoButton>
        </CardInfo>
      </CardContainer>
    }
  }
  