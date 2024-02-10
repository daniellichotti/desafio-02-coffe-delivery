import {
  MainSuccessBoxInfo,
  MainSuccessContainer,
  MainSuccessImage,
  MainSuccessText,
} from './styles'
import mainSucess from '../../assets/mainSuccess.svg'

export function MainSuccess() {
  return (
    <MainSuccessContainer>
      <MainSuccessText>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <MainSuccessBoxInfo>teste</MainSuccessBoxInfo>
      </MainSuccessText>
      <MainSuccessImage>
        <img src={mainSucess} alt="" />
      </MainSuccessImage>
    </MainSuccessContainer>
  )
}
