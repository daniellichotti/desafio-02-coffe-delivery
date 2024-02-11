import { CurrencyDollar } from '@phosphor-icons/react'
import {
  AdressForm,
  BairroInput,
  CepInput,
  CheckOutContainer,
  CidadeInput,
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
  UfInput,
} from './styles'

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
          <OrderConfirmationCard />
        </OrderConfirmation>
      </CheckOutContainer>
    </>
  )
}
