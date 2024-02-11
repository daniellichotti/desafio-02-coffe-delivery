import styled from 'styled-components'
import { MapPin } from '@phosphor-icons/react'

export const LocalIconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 1000px;
  background-color: ${(props) => props.theme.purple};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledLocalIcon = styled(MapPin)`
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.white};
  border-radius: 1000px;
`
