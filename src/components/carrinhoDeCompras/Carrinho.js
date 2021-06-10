import React from 'react'
import styled from 'styled-components';
import ItensCarrinho from './ItensCarrinho';

const CarrinhoContainer = styled.div`
  background-color: lightgreen;
  height: 420px;
  width: 400px;
  justify-content: space-around;
  align-items:center;
  text-align: center;

p {
    margin-top: 20px;
}

`

export default class Carrinho extends React.Component {

    ValorTotal = () => {
        let valorTotal = 0

        for (let produto of this.props.listaProdutosCarrinho){
            valorTotal += produto.preco*produto.quantidade
        }
        return valorTotal
    }

    render(){
        return (<>
            <CarrinhoContainer>
                <h2>Carrinho</h2>
                    {this.props.listaProdutosCarrinho.map((produto) => {
                        return <ItensCarrinho 
                                produtosCarrinho = {produto}
                                removerProdutoCarrinho = {this.props.removerProdutoCarrinho}
                                />
                    })}
                
            <p>Valor total: R${this.ValorTotal()},00</p>
            </CarrinhoContainer>
        </>
        )
    }

}