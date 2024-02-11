import { CurrencyDollar } from '@phosphor-icons/react'
import {
  AdressForm,
  BairroInput,
  CepInput,
  CheckOutContainer,
  CidadeInput,
  CoffeeItems,
  CoffeeItemsButtons,
  CoffeeItemsContainer,
  ComplementoInput,
  DeliveryAdressForm,
  DeliveryForm,
  NumeroInput,
  OrderConfirmation,
  OrderConfirmationCard,
  OrderForm,
  PaymentMethodButton,
  PaymentMethodButtonsContainer,
  PaymentSelection,
  PaymentSelectionText,
  RuaInput,
  StyledMapPin,
  TotalAndDeliveryPrices,
  TotalPriceItems,
  UfInput,
} from './styles'
import { InputNumberItems } from '../InputNumberItems'
import { ButtonRemove } from '../ButtonRemove'
import expressoTradicional from '../../assets/expressoTradicional.svg'
import { ButtonOrderConfirmation } from '../ButtonOrderConfirmation'

export function MainCheckout() {
  return (
    <>
      <CheckOutContainer>
        <OrderForm>
          <h1>Complete seu pedido</h1>
          <DeliveryForm>
            <DeliveryAdressForm>
              <StyledMapPin />
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </DeliveryAdressForm>
            <AdressForm>
              <CepInput placeholder="CEP" />
              <RuaInput placeholder="Rua" />
              <NumeroInput placeholder="Numero" />
              <ComplementoInput placeholder="Complemento (Opcional)" />
              <BairroInput placeholder="Bairro" />
              <CidadeInput placeholder="Cidade" />
              <UfInput placeholder="UF" />
            </AdressForm>
          </DeliveryForm>
          <PaymentSelection>
            <PaymentSelectionText>
              <CurrencyDollar size={22} color="purple" />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentSelectionText>
            <PaymentMethodButtonsContainer>
              <PaymentMethodButton>Cartão de crédito</PaymentMethodButton>
              <PaymentMethodButton>cartão de débito</PaymentMethodButton>
              <PaymentMethodButton>dinheiro</PaymentMethodButton>
            </PaymentMethodButtonsContainer>
          </PaymentSelection>
        </OrderForm>
        <OrderConfirmation>
          <h1>Cafés selecionados</h1>
          <OrderConfirmationCard>
            <CoffeeItemsContainer>
              <CoffeeItems>
                <img src={expressoTradicional} alt="" />
                <div>
                  <h2>Expresso Tradicional</h2>
                  <CoffeeItemsButtons>
                    <InputNumberItems />
                    <ButtonRemove />
                  </CoffeeItemsButtons>
                </div>
              </CoffeeItems>
              <h2>R$ 9,90</h2>
            </CoffeeItemsContainer>
            <CoffeeItemsContainer>
              <CoffeeItems>
                <img src={expressoTradicional} alt="" />
                <div>
                  <h2>Expresso Tradicional</h2>
                  <CoffeeItemsButtons>
                    <InputNumberItems />
                    <ButtonRemove />
                  </CoffeeItemsButtons>
                </div>
              </CoffeeItems>
              <h2>R$ 9,90</h2>
            </CoffeeItemsContainer>
            <TotalPriceItems>
              <TotalAndDeliveryPrices>
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </TotalAndDeliveryPrices>
              <TotalAndDeliveryPrices>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </TotalAndDeliveryPrices>
              <TotalAndDeliveryPrices>
                <h2>Total </h2>
                <h2>R$ 33,20</h2>
              </TotalAndDeliveryPrices>
            </TotalPriceItems>
            <ButtonOrderConfirmation />
          </OrderConfirmationCard>
        </OrderConfirmation>
      </CheckOutContainer>
    </>
  )
}
