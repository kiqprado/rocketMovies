import { Container, Content, Button } from './styles'

import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { CardItem } from '../../components/CardItem'

import { TiPlusOutline } from "react-icons/ti";

export function Home() {
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <div className="films">
          <Title title="Meus filmes"/>
          <Button to="new">
            <TiPlusOutline/>
            Adicionar filme
          </Button>
          </div>
          
          <CardItem title="Interstellar"/>
          <CardItem title="Tomorrow Day"/>
          <CardItem title="Inter Code"/>
        </Content>
      </main>
    </Container>
  )
}
