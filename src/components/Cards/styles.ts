import styled from 'styled-components'

export const Cards = styled.main`
  width: 256px;
  height: 310px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px 20px 24px;

  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  img {
    width: 120px;
    height: 120px;
    margin-top: -1.3rem;
  }

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
  p {
    color: ${(props) => props.theme['base-label']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
  }
`

export const Tags = styled.p`
  width: 81px;
  height: 21px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  p {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    text-transform: uppercase;
  }
`

export const PriceQuantity = styled.div`
  width: 208px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Price = styled.div`
  color: ${(props) => props.theme['base-text']};
`
