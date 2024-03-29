import { MapPin } from '@phosphor-icons/react'
import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckOutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 144px 160px 144px 160px;

  display: flex;
  justify-content: center;
  gap: 32px;
`

export const OrderForm = styled.div`
  width: 640px;
  height: 629px;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const DeliveryForm = styled.form`
  width: 640px;
  height: 372px;

  padding: 40px;
  margin-top: 15px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const StyledMapPin = styled(MapPin)`
  width: 22px;
  height: 22px;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: transparent;
`

export const DeliveryAdressForm = styled.div`
  display: flex;
  gap: 8px;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }
`

export const AdressForm = styled.div`
  width: 560px;
  height: 216px;
`

export const CepInput = styled.input`
  width: 200px;
  height: 42px;

  margin-top: 32px;

  background-color: ${(props) => props.theme['base-input']};
`
export const RuaInput = styled.input`
  width: 560px;
  height: 42px;
`
export const NumeroInput = styled.input`
  width: 200px;
  height: 42px;
`
export const ComplementoInput = styled.input`
  width: 348px;
  height: 42px;
  margin-left: 12px;
`
export const BairroInput = styled.input`
  width: 200px;
  height: 42px;
`
export const CidadeInput = styled.input`
  width: 276px;
  height: 42px;
  margin-left: 12px;
`
export const UfInput = styled.input`
  width: 60px;
  height: 42px;
  margin-left: 12px;
`

export const PaymentSelection = styled.form`
  width: 640px;
  height: 207px;
  margin-top: 12px;
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentSelectionText = styled.div`
  display: flex;
  gap: 8px;
`

export const PaymentMethodInputContainer = styled(RadioGroup.Root)`
  width: 560px;
  height: 51px;

  margin-top: 32px;

  display: flex;

  gap: 12px;
`

export const PaymentMethodInput = styled(RadioGroup.Item)`
  width: 178.67px;
  height: 51px;
  border: none;

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};

  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }
`

export const OrderConfirmation = styled.div`
  width: 448px;
  height: 536px;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderConfirmationCard = styled.div`
  width: 448px;
  height: 498px;

  margin-top: 15px;
  padding: 16px 40px 16px 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const CoffeeItemsContainer = styled.div`
  display: flex;
  gap: 50px;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 64px;
    height: 64px;
    margin-right: 20px;
  }
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CoffeeItems = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-top: 24px;
`
export const CoffeeItemsButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const TotalPriceItems = styled.div`
  width: 368px;
  height: 92px;
  margin-top: 24px;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TotalAndDeliveryPrices = styled.div`
  width: 368px;
  height: 21px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
