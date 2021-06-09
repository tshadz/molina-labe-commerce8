import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div`
    background-color: lightgray;
    display: flex;
    height: 100px;
`

export default class Footer extends React.Component {
    render(){
        return <FooterContainer>
            <h2>Footer</h2>
          </FooterContainer>
    }
} 
