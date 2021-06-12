import React from 'react'
import styled from 'styled-components';
import ItensCarrinho from './ItensCarrinho';
import { BotaoCarrinho } from '../Botao'

const CarrinhoContainer = styled.div`
  height: 420px;
  width: 400px;
  justify-content: space-around;
  align-items:center;
  text-align: center;
  padding:20px;
  margin: 15px;
    @media (max-width:768px){
        width:300px;
        margin: 0;
        padding:0;
    }
`

const FinalizarContinuarCompra = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    button{
        height: 50px;
        border-radius: 0;
        padding: 10px;
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
                <FinalizarContinuarCompra>
                        <BotaoCarrinho 
                          texto="Continuar Compra"
                        />
                        <BotaoCarrinho 
                          texto="Finalizar Compra"
                        />
                </FinalizarContinuarCompra>
            </CarrinhoContainer>
        </>
        )
    }

}