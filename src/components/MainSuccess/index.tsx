import {
  DeliverMessageSuccess,
  DeliveryPaymentSuccess,
  DeliveryTimeSuccess,
  MainSuccessBoxInfo,
  MainSuccessContainer,
  MainSuccessImage,
  MainSuccessText,
} from './styles'
import mainSucess from '../../assets/mainSuccess.svg'
import { LocalIcon } from '../LocalIcon'
import { TimerIcon } from '../TimerIcon'
import { CashIcon } from '../CashIcon'

export function MainSuccess() {
  return (
    <MainSuccessContainer>
      <MainSuccessText>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <MainSuccessBoxInfo>
          <DeliverMessageSuccess>
            <LocalIcon />
            <p>
              Entrega em{' '}
              <strong>
                Rua João Daniel Martinelli, 102
                <br />
              </strong>
              Farrapos - Porto Alegre, RS
            </p>
          </DeliverMessageSuccess>
          <DeliveryTimeSuccess>
            <TimerIcon />
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </DeliveryTimeSuccess>
          <DeliveryPaymentSuccess>
            <CashIcon />
            <p>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </p>
          </DeliveryPaymentSuccess>
        </MainSuccessBoxInfo>
      </MainSuccessText>
      <MainSuccessImage>
        <img src={mainSucess} alt="" />
      </MainSuccessImage>
    </MainSuccessContainer>
  )
}
