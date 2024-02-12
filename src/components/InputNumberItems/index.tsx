import { Minus, Plus } from '@phosphor-icons/react'
import { InputNumberItemsContainer, MinusPlusButtom } from './styles'
import { useState } from 'react'

export function InputNumberItems() {
  const [contagem, setContagem] = useState(1)

  const aumentarContagem = () => {
    setContagem(contagem + 1)
  }

  const diminuirContagem = () => {
    setContagem(contagem - 1)
  }

  return (
    <InputNumberItemsContainer>
      <MinusPlusButtom onClick={diminuirContagem}>
        <Minus />
      </MinusPlusButtom>
      <p>{contagem}</p>
      <MinusPlusButtom onClick={aumentarContagem}>
        <Plus />
      </MinusPlusButtom>
    </InputNumberItemsContainer>
  )
}
