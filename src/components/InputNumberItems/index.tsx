import { Minus, Plus } from '@phosphor-icons/react'
import { InputNumberItemsContainer, MinusPlusButtom } from './styles'

export function InputNumberItems() {
  return (
    <InputNumberItemsContainer>
      <MinusPlusButtom>
        <Minus />
      </MinusPlusButtom>
      <p>1</p>
      <MinusPlusButtom>
        <Plus />
      </MinusPlusButtom>
    </InputNumberItemsContainer>
  )
}
