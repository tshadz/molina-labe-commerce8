import React from 'react';
import styled from 'styled-components'
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const FooterContainer = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    justify-content:right;
    background-color: rgba(150,30,217);
    color: white;
    text-decoration: none;
`

const RedesSociais = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-right: 50px;
`

const RedesSociaisIcones = styled.div`
    margin: 0px;
    width: 230px;
    font-size:40px;
    .social-icone{
        color: white;
        height:50px;
        margin: 0 15px 15px 0px;
    }
    .social-icone:hover{
        opacity: 0.8;
    }
`


export default class Footer extends React.Component {
    render(){
        return <FooterContainer>
            <RedesSociais>
                <h3>Nos siga nas redes sociais</h3>
                <RedesSociaisIcones>
                    <a className="social-icone" target="_blank" href="https://www.facebook.com/"><FaFacebook/></a>
                    <a className="social-icone" target="_blank" href="https://www.whatsapp.com/?lang=pt_br"><FaWhatsapp/></a>
                    <a className="social-icone" target="_blank" href="https://www.instagram.com/"><FaInstagram/></a>
                </RedesSociaisIcones>
            </RedesSociais>

          </FooterContainer>
    }
} 
