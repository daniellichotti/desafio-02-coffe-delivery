import { Cards, Price, PriceQuantity, Tags } from './styles'
// import expressoTradicional from '../../assets/expressoTradicional.svg'
import { ButtonCart } from '../ButtonCart'
import { InputNumberItems } from '../InputNumberItems'

interface CardProps {
  nomeImagem: string
  tag: string[]
  nome: string
  descricao: string
  preco: number
}

// <ButtonCartContainer style={{ backgroundColor: props.buttonColor }}>
// <StyledShoppingCart style={{ color: props.iconColor }} weight="fill" />
// </ButtonCartContainer>

export function Card(props: CardProps) {
  return (
    <Cards>
      <img src={props.nomeImagem} alt="" />
      <Tags>
        <p>{props.tag}</p>
      </Tags>
      <h1>{props.nome}</h1>
      <p>{props.descricao}</p>
      <PriceQuantity>
        <Price>R$ {props.preco}</Price>
        <InputNumberItems />
        <ButtonCart buttonColor="#8047F8" iconColor="white" text="" />
      </PriceQuantity>
    </Cards>
  )
}
