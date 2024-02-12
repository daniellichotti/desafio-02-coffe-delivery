import styled from 'styled-components'
import { ShoppingCart } from '@phosphor-icons/react'

export const ButtonCartContainer = styled.button`
  width: 38px;
  height: 38px;

  border-radius: 6px;
  border: none;

  background: ${(props) => props.theme['yellow-light']};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const StyledShoppingCart = styled(ShoppingCart)`
  width: 18.56px;
  height: 17.88px;
  color: ${(props) => props.theme['yellow-dark']};
`
