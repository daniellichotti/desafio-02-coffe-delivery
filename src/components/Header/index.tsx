import { ButtonsContainer, HeaderContainer } from './styles'
import logo from '../../assets/coffeeDeliveryLogo.svg'
import { LocationButton } from '../LocalButton'
import { ButtonCart } from '../ButtonCart'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Cart">
        <img src={logo} alt="Coffee Delivery logo" />
      </NavLink>
      <ButtonsContainer>
        <LocationButton />
        <NavLink to="/checkout" title="Cart">
          <ButtonCart buttonColor="" iconColor="" text="" />
        </NavLink>
      </ButtonsContainer>
    </HeaderContainer>
  )
}
