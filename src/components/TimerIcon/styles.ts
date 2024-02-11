import styled from 'styled-components'
import { Timer } from '@phosphor-icons/react'

export const TimerIconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 1000px;
  background-color: ${(props) => props.theme.yellow};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledTimerIcon = styled(Timer)`
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.white};
  border-radius: 1000px;
`
