import {
  CoffeeIcon,
  MainContainer,
  MainContainerMessage,
  PackageIcon,
  ShopCartIcon,
  TextContainerMessage,
  TextDetailsMessage,
  TitleSubtitleMessage,
} from './styled'
import cupCoffeeMain from '../../assets/cupCoffeeMain.svg'
import { Coffee, Package, ShoppingCart } from '@phosphor-icons/react'
import { TimerIcon } from '../TimerIcon'

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
          <TextDetailsMessage>
            <div>
              <div>
                <ShopCartIcon>
                  <ShoppingCart weight="fill" />
                </ShopCartIcon>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <PackageIcon>
                  <Package weight="fill" />
                </PackageIcon>
                <p>Embalagem mantém o café intacto</p>
              </div>
            </div>
            <div>
              <div>
                <TimerIcon />
                <p>Entrega rápida e rastreada</p>
                <CoffeeIcon>
                  <Coffee weight="fill" />
                </CoffeeIcon>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </TextDetailsMessage>
        </TextContainerMessage>
        <div>
          <img src={cupCoffeeMain} alt="" />
        </div>
      </MainContainerMessage>
    </MainContainer>
  )
}
