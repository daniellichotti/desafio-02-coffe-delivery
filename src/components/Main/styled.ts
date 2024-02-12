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

export const TextDetailsMessageContainer = styled.div`
  width: 567px;
  height: 84px;

  display: flex;
  align-items: center;
  justify-content: start;

  gap: 40px;

  margin-top: 90px;
`

export const TextDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  gap: 20px;
`

export const TextDetailsMessage = styled.div`
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

export const StyledShoppingCartBg = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1000px;
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const StyledPackageBg = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1000px;
  background-color: ${(props) => props.theme['base-text']};
`

export const StyledTimerBg = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1000px;
  background-color: ${(props) => props.theme.yellow};
`

export const StyledCoffeeBg = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1000px;
  background-color: ${(props) => props.theme.purple};
`
