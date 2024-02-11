import styled from 'styled-components'

export const InputNumberItemsContainer = styled.div`
  width: 72px;
  height: 32px;

  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['base-title']};

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    text-align: center;

    margin-right: 3.5px;
    margin-left: 4px;
  }
`

export const MinusPlusButtom = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
