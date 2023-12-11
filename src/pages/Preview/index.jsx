import { Container, UserData, ButtonBack } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Title } from '../../components/Title'
import { Rate } from '../../components/Rate'
import { Tag } from '../../components/Tag'

import { CiTimer } from "react-icons/ci";

export function Preview() {
  return(
    <Container>
      <Header/>
      <main>

        <ButtonBack to="/">
          <ButtonText title="Voltar"/>
        </ButtonBack>
        

        <div className="title">
          <Title title="Interstellar"/>
          <Rate/>
        </div>
     
        <UserData>
          <div className="user">
            <img src="https://github.com/kiqprado.png" alt="" />
            <span>Por Kaique Prado</span>
          </div>
        
          <div className="data">
            <CiTimer/>
            <span>29/11/23 ás 14:00</span>
          </div>
        </UserData>

        <Tag title="Ficção Ciêntifica"/>
        <Tag title="Suspense"/>
        <Tag title="Ação"/>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit neque non ipsum? Inventore at consequuntur exercitationem? Molestias, unde quo at vitae accusantium animi sit, ipsum adipisci distinctio exercitationem fugiat consequuntur!
        Modi fugiat labore optio magnam ipsa molestiae provident voluptate pariatur necessitatibus nostrum sapiente neque quia, sed maiores qui quos iste quibusdam placeat debitis saepe sunt rem consequuntur autem tempore. Numquam.
        Iure, quibusdam nam dolores, deleniti blanditiis dolorem consequuntur sed maxime assumenda pariatur fugiat qui esse recusandae laudantium numquam voluptatibus facilis aliquid optio. Commodi necessitatibus dolore alias, magnam eligendi voluptas voluptate.
        Ratione dolor reiciendis fugiat magnam recusandae iusto, rem, et, fuga nisi ullam repellendus neque nam. Quae est eum, placeat facilis nostrum voluptates provident aspernatur. Quod natus assumenda reprehenderit ullam expedita.
        Expedita accusamus sed earum assumenda illo nostrum animi quibusdam voluptatum vitae est cum cupiditate sunt quos, repellat error perspiciatis qui nam inventore impedit saepe. Facilis eveniet unde asperiores ipsum modi.
        Ipsum libero cumque laborum praesentium. Doloribus rem possimus voluptatum animi eligendi et expedita ea, maxime consequuntur harum inventore repellendus cumque magnam veritatis dicta cupiditate, nulla laboriosam, quos nobis. Accusamus, temporibus.
        Architecto natus eligendi vitae dolore, libero animi autem corrupti, corporis quasi illo delectus eveniet quas sit beatae culpa! Minus enim illo debitis earum dolor, cupiditate rem voluptas voluptates fugit exercitationem?
        Eveniet ullam nostrum beatae ab nulla, quod mollitia est. Alias, deserunt praesentium. Repellendus fugit maiores reprehenderit, exercitationem vero minima cupiditate, assumenda asperiores officia molestias ab earum magni sunt sint ex?</p>
      </main>
    </Container>
  )
}