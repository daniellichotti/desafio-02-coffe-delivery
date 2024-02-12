import { CardsContainer, Container } from './styles'
import { useState, useEffect } from 'react'
import coffees from '../../coffees.json'
import { Card } from '../Cards'

export function MainCards() {
  // Definindo o tipo dos itens
  interface Item {
    nomeImagem: string
    tag: string[]
    nome: string
    descricao: string
    preco: number
  }

  // Definindo o estado e seu tipo
  const [itens, setItens] = useState<Item[]>([])

  useEffect(() => {
    // Atualizando o estado com os dados do JSON quando o componente é montado
    setItens(coffees)
  }, [])

  itens.map((item) => item.tag.map((tag) => console.log(tag)))

  return (
    <Container>
      <h1>Nossos cafés</h1>
      <CardsContainer>
        {itens.map((item, index) => (
          <div key={index}>
            <Card
              nomeImagem={item.nomeImagem}
              nome={item.nome}
              descricao={item.descricao}
              preco={item.preco}
              tag={item.tag}
            />
          </div>
        ))}
      </CardsContainer>
    </Container>
  )
}
