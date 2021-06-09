import React from 'react';
import styled from 'styled-components'
import { VscTriangleDown } from 'react-icons/vsc'

const ContainerProdutos = styled.div`
    background-color: lightseagreen;
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
`


export default class Produtos extends React.Component {
    render(){
        return <ContainerProdutos>
            <h2>Produtos</h2>
            <p>Ordenar por<VscTriangleDown/></p>
        </ContainerProdutos>
    }
} 
