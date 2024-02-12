import {
  Cards,
  CardsContainer,
  Container,
  Price,
  PriceQuantity,
  Tags,
} from './styles'
import expressoTradicional from '../../assets/expressoTradicional.svg'
import { ButtonCart } from '../ButtonCart'
import { InputNumberItems } from '../InputNumberItems'

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
        <InputNumberItems />
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
