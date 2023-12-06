import { Container } from './styles'

import { TiArrowBack } from "react-icons/ti";

export function ButtonText({title, ...rest }) {
  return(
    <Container {...rest}>
      <TiArrowBack/>
      {title}
    </Container>
  )
}