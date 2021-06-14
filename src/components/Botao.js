import React from 'react'
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa'

const BotaoCarrinhoCompra = styled.button`
    background-color: rgba(150,30,217);
    color: white;
    text-transform: uppercase;
    outline: none;
    border:none;
    padding: .78rem 1.5rem;
    font-weight:700;
    text-align: center;
    margin: 30px;
    border-radius: 5px;
    cursor: pointer;
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
