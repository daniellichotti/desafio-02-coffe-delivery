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
  border: 1px solid ${(props) => props.theme['purple-dark']};

  border-radius: 6px 36px 6px 36px;
`

export const MainSuccessImage = styled.image`
  width: 492px;
  height: 293px;
`
