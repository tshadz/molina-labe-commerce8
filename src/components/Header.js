import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    display: flex;
    height: 100px;
`

export default class Header extends React.Component {
    render(){
        return <HeaderContainer>
            <h2>Header</h2>
          </HeaderContainer>
    }
} 
