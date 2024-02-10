import styled from 'styled-components'

export const ButtonContainer = styled.button`
  height: 46px;
  width: 132px;
  border-radius: 6px;
  border: none;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
