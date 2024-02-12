import {
  MainContainer,
  MainContainerMessage,
  StyledCoffeeBg,
  StyledPackageBg,
  StyledShoppingCartBg,
  StyledTimerBg,
  TextContainerMessage,
  TextDetails,
  TextDetailsMessage,
  TextDetailsMessageContainer,
  TitleSubtitleMessage,
} from './styled'
import cupCoffeeMain from '../../assets/cupCoffeeMain.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function Main() {
  return (
    <MainContainer>
      <MainContainerMessage>
        <TextContainerMessage>
          <TitleSubtitleMessage>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleSubtitleMessage>
          <TextDetailsMessageContainer>
            <TextDetails>
              <TextDetailsMessage>
                <StyledShoppingCartBg>
                  <ShoppingCart size={16} color="white" weight="fill" />
                </StyledShoppingCartBg>
                <p>Compra simples e segura</p>
              </TextDetailsMessage>
              <TextDetailsMessage>
                <StyledTimerBg>
                  <Timer size={16} color="white" weight="fill" />
                </StyledTimerBg>
                <p>Entrega rápida e rastreada</p>
              </TextDetailsMessage>
            </TextDetails>
            <TextDetails>
              <TextDetailsMessage>
                <StyledPackageBg>
                  <Package size={16} color="white" weight="fill" />
                </StyledPackageBg>
                <p>Embalagem mantém o café intacto</p>
              </TextDetailsMessage>
              <TextDetailsMessage>
                <StyledCoffeeBg>
                  <Coffee size={16} color="white" weight="fill" />
                </StyledCoffeeBg>
                <p>O café chega fresquinho até você</p>
              </TextDetailsMessage>
            </TextDetails>
          </TextDetailsMessageContainer>
        </TextContainerMessage>
        <div>
          <img src={cupCoffeeMain} alt="" />
        </div>
      </MainContainerMessage>
    </MainContainer>
  )
}
