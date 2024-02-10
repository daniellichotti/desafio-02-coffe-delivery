import { ButtonContainer } from './styled'
import { Trash } from '@phosphor-icons/react'
import 'styled-components'

export function ButtonRemove() {
  return (
    <ButtonContainer>
      <Trash color="purple" size={16} />
      REMOVER
    </ButtonContainer>
  )
}
