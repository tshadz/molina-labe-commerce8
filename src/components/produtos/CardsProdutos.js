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
    background-color: rgba(150,30,217,0.5);
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
    padding:15px;
`

const NomeProduto = styled.div`
  font-weight:700;
  margin-bottom:10px;
`

const PrecoProduto = styled.div`
  margin-bottom:15px;
`

const ImagemCard = styled.img`
  width:100%;
  height:100%;
`

export default class CardsProdutos extends React.Component {
    render() {
      const produto = this.props.produto
      return <CardContainer>
        <ImagemCard src={produto.imageUrl}/>
        <CardInfo>
          <NomeProduto>{produto.nome}</NomeProduto>
          <PrecoProduto>R${produto.preco},00</PrecoProduto>
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
  