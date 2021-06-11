import React from 'react'
import styled from 'styled-components';

const BotaoCarrinhoCompra = styled.button`
    background-color: unset;
    cursor: pointer;
    color: rgba(0,0,0,.9);
    font-family: Raleway,sans-serif;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
`

const BotaoCardCompras = styled.button`

`

export class BotaoCarrinho extends React.Component {
    render(){
        return <BotaoCarrinhoCompra>{this.props.texto}</BotaoCarrinhoCompra>

    }
}
