import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: auto;

  padding: 32px 160px 32px 160px;

  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }
`

export const CardsContainer = styled.main`
  margin-top: 54px;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`
