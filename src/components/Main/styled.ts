import styled from 'styled-components'

export const MainContainer = styled.main``

export const MainContainerMessage = styled.main`
  width: 100vw;
  height: 544px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
`

export const TextContainerMessage = styled.div`
  width: 588px;
  height: 500px;

  color: black;
  display: flex;
  flex-direction: column;
`

export const TitleSubtitleMessage = styled.div`
  h1 {
    margin-top: 92px;
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
  }
  p {
    width: 588px;
    height: 52px;
    margin-top: 16px;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
  }
`

export const TextDetailsMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border: 1px solid red;

  margin-top: 90px;

  div {
    display: flex;
    gap: 40px;
  }
`

export const ShopCartIcon = styled.div`
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PackageIcon = styled.div`
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['base-text']};
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TimerIcon = styled.div`
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CoffeeIcon = styled.div`
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.purple};
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`
