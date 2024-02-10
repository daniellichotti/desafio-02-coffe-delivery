import styled from 'styled-components'
import { MapPin } from '@phosphor-icons/react'

export const LocationButtonContainer = styled.button`
  width: 143px;
  height: 38px;

  border-radius: 6px;
  border: none;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`
export const StyledMapPin = styled(MapPin)`
  color: ${(props) => props.theme['purple-dark']};
`
