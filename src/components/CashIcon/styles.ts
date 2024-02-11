import styled from 'styled-components'
import { CurrencyDollar } from '@phosphor-icons/react'

export const CurrencyDollarIconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 1000px;
  background-color: ${(props) => props.theme['yellow-dark']};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledCurrencyDollarIcon = styled(CurrencyDollar)`
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.white};
  border-radius: 1000px;
`
