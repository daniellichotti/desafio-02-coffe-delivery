import { ButtonsContainer, HeaderContainer } from './styles'
import logo from '../../assets/coffeeDeliveryLogo.svg'
import { LocationButton } from '../LocalButton'
import { ButtonCart } from '../ButtonCart'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery logo" />
      <ButtonsContainer>
        <LocationButton />
        <ButtonCart />
      </ButtonsContainer>
    </HeaderContainer>
  )
}
