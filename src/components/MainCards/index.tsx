import {
  Cards,
  CardsContainer,
  Container,
  Price,
  PriceQuantity,
  Quantity,
  Tags,
} from './styles'
import expressoTradicional from '../../assets/expressoTradicional.svg'
import { Minus, Plus } from '@phosphor-icons/react'
import { ButtonCart } from '../ButtonCart'

export function MainCards() {
  const item = (
    <Cards>
      <img src={expressoTradicional} alt="" />
      <Tags>
        <p>Tradicional</p>
      </Tags>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <PriceQuantity>
        <Price>R$ 9,90</Price>
        <Quantity>
          <Minus />
          <p>1</p>
          <Plus />
        </Quantity>
        <ButtonCart buttonColor="#8047F8" iconColor="white" text="" />
      </PriceQuantity>
    </Cards>
  )
  const itemsArray = new Array(10).fill(item)

  return (
    <Container>
      <h1>Nossos cafés</h1>
      <CardsContainer>
        {itemsArray.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </CardsContainer>
    </Container>
  )
}
