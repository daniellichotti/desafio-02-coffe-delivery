import styled from 'styled-components'
import { Trash } from '@phosphor-icons/react'

export const ButtonContainer = styled.button`
  height: 32px;
  width: 91px;
  border-radius: 6px;
  border: none;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;

    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const StyledTrashPin = styled(Trash)`
  color: ${(props) => props.theme.purple};
`
