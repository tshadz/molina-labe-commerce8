import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import styled from 'styled-components'
import Login from   './login/Login'

const HeaderContainer = styled.div`
    display: flex;
    height: 65px;
    justify-content: space-between;
    border-bottom: 2px solid #f1f1f1;
    width: 100%;
    padding: 0 20px;
    align-items: center;
    background-color: black;
    color:white;


h2 {
    padding: 15px 0;
}
ul{
    display: flex;
    list-style: none;
    flex-flow: row nowrap;
}
li{
    padding: 18px 10px;
    text-decoration: none;
    
}
a{
    text-decoration: none;
    color: white;
    font-weight:500;
    
}

    @media (max-width:800px){
        flex-direction: column;
        height:150px;
    }

`

export default class Header extends React.Component {
    state = {
        login:'',
        senha: '',
        status: false,
    }

    
    render(){
        return <HeaderContainer>
            <h2>Bazar do AstroDev</h2>

            <ul>
                <li><a href="#">PRODUTOS</a></li>
                <li><a href="#">SOBRE NÓS</a></li>
                <li><a href="#">CONTATO</a></li>
            </ul>
          </HeaderContainer>
    }
} 