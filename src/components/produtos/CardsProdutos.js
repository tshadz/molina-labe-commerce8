import React from 'react'
import styled from 'styled-components';

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
align-self: center;
margin-top: 4px;
`

export default class CardsProdutos extends React.Component {
    render() {
      const produto = this.props.produto
      return <CardContainer>
        <img src={produto.imageUrl}/>
        <CardInfo>
          <p>{produto.nome}</p>
          <p>R${produto.preco},00</p>
          <button
            texto="Adicionar ao carrinho"
            onClick={() => this.props.AddProdutoCarrinho(produto.id)}
          >
            Adicionar ao carrinho
          </button>
        </CardInfo>
      </CardContainer>
    }
  }
  