import { Container , Profile, User} from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../Input'

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile>
        <div className="user">
        <User to="/profile">Kaique Prado</User>
        <a href="#">Sair</a>
        </div>
        
        <Link to="/profile">
          <img src="http://github.com/kiqprado.png" alt="" />
        </Link>
        
      </Profile>
    </Container>
  )
}