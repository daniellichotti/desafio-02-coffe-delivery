import styled from 'styled-components'
import { MapPin } from '@phosphor-icons/react'

export const LocationButtonContainer = styled.button`
  width: 143px;
  height: 38px;

  border-radius: 6px;
  border: none;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  &:hover {
    border: 1px solid ${(props) => props.theme['purple-dark']};
    cursor: pointer;
  }
`
export const StyledMapPin = styled(MapPin)`
  color: ${(props) => props.theme.purple};
`
