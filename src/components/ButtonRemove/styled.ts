import styled from 'styled-components'
import { Trash } from '@phosphor-icons/react'

export const ButtonContainer = styled.button`
  height: 32px;
  width: 91px;
  border-radius: 6px;
  border: none;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const StyledTrashPin = styled(Trash)`
  color: ${(props) => props.theme.purple};
`
