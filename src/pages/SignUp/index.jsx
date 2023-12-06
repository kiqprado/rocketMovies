import { Container, Form, Background } from './styles'

import { Link } from 'react-router-dom'

import { FiUser, FiMail, FiLock, FiArrowLeft  } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignUp() {
  return(
    <Container>
      <Background/>

      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" icon={FiUser} type="text"/>
        <Input placeholder="E-mail" icon={FiMail} type="email"/>
        <Input placeholder="Senha" icon={FiLock} type="password"/>

        <Button title="Cadastrar"/>

        <Link to ="/"> <FiArrowLeft/> Voltar para o login</Link>
      </Form>
    </Container>
  )
}