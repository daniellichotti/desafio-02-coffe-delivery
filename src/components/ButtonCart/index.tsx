import { ButtonCartContainer, StyledShoppingCart } from './styled'

interface ButtonProps {
  text: string
  buttonColor: string
  iconColor: string
}

export function ButtonCart(props: ButtonProps) {
  return (
    <ButtonCartContainer style={{ backgroundColor: props.buttonColor }}>
      <StyledShoppingCart style={{ color: props.iconColor }} weight="fill" />
    </ButtonCartContainer>
  )
}
