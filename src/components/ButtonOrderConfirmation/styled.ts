import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 368px;
  height: 46px;
  border-radius: 6px;
  border: none;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
