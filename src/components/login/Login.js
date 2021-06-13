import React from 'react';
import styled from 'styled-components';
import { FaUserAstronaut } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const BotaoLogar = styled.button`
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

const FormLogin = styled.div`
    height: 250px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    margin: 30px;
`

const Campo = styled.div`
    display:flex;
    background-color: white;
    color:darkgray;
    border-radius: 5px;
    border: 1px solid black;
    height: 50px;
    width: 300px;
    justify-content: center;
    align-items: center;
    `

const Input = styled.input`
    border:none;
    width:100%;
    padding-left: 0px;
    font-size: 1.2rem;
    border-style: none;
`

const Icones = styled.i`
    margin: 15px;
`

const LoginContainer = styled.div `
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-grow:1;
    display: flex;
    flex-direction: row;

`

export default class Login extends React.Component {

    state={
        login:'',
        senha:'',
        cadastroLogin:'',
        cadastroSenha:'',
    }

    onChangeLogin = (event) => {
        this.setState({login: event.target.value})
    }

    onChangeSenha = (event) => {
        this.setState({senha: event.target.value})
    }

    logou = () => {
        let resp = this.props.logar(this.state.login, this.state.senha)
        console.log(resp)
    }

    autenticar = (usuarioLogin, usuarioSenha) => {
        if(usuarioLogin==="adm" && usuarioSenha === "123"){
          this.setState({login: usuarioLogin, senha: usuarioSenha, status:true})
          return true
  
        } else {
          this.setState({login: '', senha: '', status:false})
          return false
        }
      }
  
      mensagemLogin = () => {
        if (this.state.login===''){
          return "Usuário não logado"
        }else {
          return `Bem vind@ ${this.state.login}`
        }
      }


    render() {
        return (
            <>
                <h2>Acesse sua conta</h2>
            <LoginContainer>
                <FormLogin>
                    <Campo>
                        <Icones> <FaUserAstronaut /> </Icones>
                        <Input 
                            type="text" 
                            placeholder='Login'
                            value={this.state.login}
                            onChange={this.onChangeLogin}
                        />
                    </Campo>
                    <Campo>
                        <Icones> <FaLock /> </Icones>
                        <Input
                            type="password" 
                            placeholder='Senha'
                            value={this.state.senha}
                            onChange={this.onChangeSenha}
                        />
                    </Campo>
                    <BotaoLogar onClick={()=>this.logou()}>Entrar</BotaoLogar>
                </FormLogin>
                <h2>OU</h2>
                <FormLogin>
                    <BotaoLogar onClick={()=>this.logou()}>Cadastre-se</BotaoLogar>
                </FormLogin>
            </LoginContainer>
        </>
        )
    }
}
