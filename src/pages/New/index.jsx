import { Container, Content, Description, Textarea, Notes, ButtonBack } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Title } from '../../components/Title'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

export function New() {
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonBack to="/">
            <ButtonText title="Voltar"/>
          </ButtonBack>
            
          

          <Title title="Novo filme"/>

          <Description>
            <Input placeholder="Titúlo" type="text"/>
            <Input placeholder="Sua nota (de 0 a 5)" type="number"/>
          </Description>
          
          <Textarea placeholder="Observações"/>

          <Section title="Marcadores"/>
          <Notes>
            <NoteItem value="Terror"/>
            <NoteItem placeholder="Novo marcador" isNew />
          </Notes>
          
          

          <div className="buttons">
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </div>
          
          
        </Content>
      </main>
    </Container>
  )
}