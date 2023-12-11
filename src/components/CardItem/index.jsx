import { Container, Title } from './styles'


import { Rate } from '../Rate'
import { Tag } from '../Tag'

export function CardItem({ title }) {
  return(
    <Container>

      <Title to="/preview/:id">
        {title}
      </Title>

      <Rate/>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab beatae illo culpa tenetur dolore voluptatibus alias odio, ipsum asperiores, eaque nostrum tempore atque dolorum impedit quasi magni eligendi illum.
      Consequuntur nesciunt magni rerum aut fugiat laudantium distinctio perspiciatis veritatis eaque sint. Esse hic magni rem facilis, adipisci sapiente veritatis sit corrupti ipsum assumenda laboriosam deleniti quaerat earum inventore velit.</p>

      <Tag title="Ficção Ciêntifica"/>
      <Tag title="Suspense"/>
      <Tag title="Ação"/>

      </Container>
  )
}