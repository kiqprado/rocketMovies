import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Container, Form, Avatar, ButtonBack } from './styles'


import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return(
    <Container>
      <header>
        <ButtonBack to="/">
          <ButtonText title="Voltar"/>
        </ButtonBack>
        
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/kiqprado.png" alt="" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser}/>
        <Input placeholder="E-mail" type="email" icon={FiMail}/>

        <Input placeholder="Senha atual" type="password" icon={FiLock}/>
        <Input placeholder="Nova senha" type="password" icon={FiLock}/>

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}