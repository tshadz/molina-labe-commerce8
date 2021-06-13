import React from 'react';
import styled from 'styled-components';
import { FaSleigh, FaUserAstronaut } from 'react-icons/fa';
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
        loginCadastrado:'',
        senhaCadastrada:'',
        cadastrar:false,
    }

    onChangeLogin = (event) => {
        this.setState({login: event.target.value})
    }

    onChangeSenha = (event) => {
        this.setState({senha: event.target.value})
    }

    logou = () => {
        let resp = this.props.logar(this.state.login, this.state.senha)
    }

    autenticar = () => {
        if(this.state.login === this.state.loginCadastrado && this.state.senha === this.state.senhaCadastrada){
            console.log("login realizado com sucesso")
        } else {
            console.log("usuario nao encontrado")
        }
      }
  
      mensagemLogin = () => {
        if (this.state.login===''){
          return "Usuário não logado"
        }else {
          return `Bem vind@ ${this.state.login}`
        }
      }

        cadastrar = () => {
            if (this.state.cadastrar){
                this.setState({cadastrar: !this.state.cadastrar, login:'', senha:''})
            }else {
                this.setState({cadastrar: !this.state.cadastrar, login:'', senha:''})
            }
        }

        cadastrarUsuario = () => {
            this.setState({
                loginCadastrado: this.state.login, 
                senhaCadastrada: this.state.senha,
                cadastrar: !this.state.cadastrar,
                login:'',
                senha:'',
            })
        }

    render() {

        let renderizarLogin

        if (this.state.cadastrar){
            renderizarLogin = <LoginContainer>
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
                <BotaoLogar onClick={this.cadastrarUsuario} >Cadastrar</BotaoLogar>
                </FormLogin>
                </LoginContainer>
        } else {
            renderizarLogin = <>
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
                    <BotaoLogar onClick={this.autenticar}>Entrar</BotaoLogar>
                </FormLogin>
                <h2>OU</h2>
                <FormLogin>
                    <BotaoLogar onClick={this.cadastrar}>Cadastre-se</BotaoLogar>
                </FormLogin>
            </LoginContainer>
        </>
        }
        
        return ( 
        <>
            {renderizarLogin}
        </>
        )
    }
}
