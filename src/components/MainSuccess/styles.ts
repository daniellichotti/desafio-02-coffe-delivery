import styled from 'styled-components'

export const MainSuccessContainer = styled.div`
  width: 100vw;

  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MainSuccessText = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const MainSuccessBoxInfo = styled.div`
  width: 526px;
  height: 270px;

  margin-top: 40px;
  padding: 40px;

  border: 1px solid transparent; /*Define a largura e o estilo da borda */

  border-image: linear-gradient(
    to right,
    ${(props) => props.theme['yellow-dark']},
    ${(props) => props.theme['purple-dark']}
  ); /* Define o gradiente da borda */
  border-image-slice: 1;
  border-radius: 6px 36px 6px 36px !important;

  display: flex;
  flex-direction: column;

  align-items: start;
  justify-content: space-between;
`

export const DeliverMessageSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const DeliveryTimeSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`
export const DeliveryPaymentSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const MainSuccessImage = styled.image`
  width: 492px;
  height: 293px;
`
