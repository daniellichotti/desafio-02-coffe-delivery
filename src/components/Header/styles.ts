import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 104px;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.background};

  padding-left: 160px;
  padding-right: 160px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
