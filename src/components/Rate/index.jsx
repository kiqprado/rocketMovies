import { Container } from './styles'

import { IoStarHalf, IoStarOutline, IoStarSharp } from "react-icons/io5";

export function Rate() {
  return(
    <Container>
      <li><button><IoStarSharp/></button></li>
      <li><button><IoStarSharp/></button></li>
      <li><button><IoStarSharp/></button></li>
      <li><button><IoStarHalf/></button></li>
      <li><button><IoStarOutline/></button></li>
    </Container>
  )
}