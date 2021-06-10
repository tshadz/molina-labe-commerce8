import React from 'react'
import styled from 'styled-components';

const CarrinhoContainer = styled.div`
  background-color: lightgreen;
  height: 420px;
  width: 300px;
`

export default class Carrinho extends React.Component {
    render(){
        return (
            <CarrinhoContainer>
                <h2>Carrinho</h2>
            </CarrinhoContainer>

        )
    }

}