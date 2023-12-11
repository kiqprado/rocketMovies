import { Container, Form, Background } from './styles'

import { Link } from 'react-router-dom'

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" icon={FiMail} type="email"/>
        <Input placeholder="Senha" icon={FiLock} type="password"/>

        <Button title="Entrar"/>

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background/>
    </Container>
  )
}