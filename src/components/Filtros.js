import React from 'react'
import styled from 'styled-components';

const ContainerFiltros = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`

export default class Filtros extends React.Component {
  render() {
    return <ContainerFiltros>
      <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:
          <input
            type="number"
            value={this.props.filtroMinimo}
            onChange={this.props.onChangeFiltroMinimo}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            type="number"
            value={this.props.filtroMaximo}
            onChange={this.props.onChangeFiltroMaximo}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
            value={this.props.filtroNome}
            onChange={this.props.onChangeFiltroNome}
          />
        </InputContainer>
    </ContainerFiltros>
  }
}
