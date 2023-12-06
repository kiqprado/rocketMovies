import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  gap: 0.6rem;

  margin-bottom: 1.6rem;

  li {
    list-style: none;

    button {
      border: none;
      background: none;

      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
