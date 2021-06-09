import React from 'react';
import './App.css';
import styled from 'styled-components';
import Produtos from './components/produtos/Produtos';
import Header from './components/Header';
import Footer from './components/Footer';


const Main = styled.div`
  background-color: lightpink;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;

    @media (max-width: 800px){
      flex-direction: column;
      position: relative;
      justify-content: center;
      align-items: center;
    }
`
const Carrinho = styled.div`
  background-color: lightgreen;
  height: 400px;
  width: 300px;
`

const Filtro = styled.div`
  background-color: lightcoral;
  height: 400px;
  width: 300px;

`

function App() {
  return (
    <div className = "PaginaInicial">
      <Header />
      <Main>
        <Filtro>
          <h2>Filtro</h2>
        </Filtro>
        <Produtos />
        <Carrinho>
          <h2>Carrinho</h2>
        </Carrinho>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
