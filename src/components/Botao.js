import React from 'react'
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa'

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

const BotaoAddCarrinhoCompra = styled.button`
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
`

export class BotaoCarrinho extends React.Component {
    render(){
        return <BotaoCarrinhoCompra>{this.props.texto}</BotaoCarrinhoCompra>

    }
}

export class BotaoAddCarrinho extends React.Component {
    render(){
        return <BotaoAddCarrinhoCompra >
            <FaShoppingCart/>
            {this.props.texto}
            </BotaoAddCarrinhoCompra>

    }
}
