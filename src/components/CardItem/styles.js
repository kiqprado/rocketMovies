import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 112rem;
  padding: 2.4rem 3.4rem;
  border-radius: 1.6rem;
  margin-bottom: 2.4rem;

  > p {
    text-align: justify;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
`

export const Title = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.COLORS.SATIN_WHITE};
`
