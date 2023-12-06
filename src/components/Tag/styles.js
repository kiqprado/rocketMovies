import styled from 'styled-components'

export const Container = styled.span`
  padding: 0.4rem 1.6rem;
  border-radius: 0.8rem;
  margin-right: .8rem;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.OFF_WHITE};

  background: ${({ theme }) => theme.COLORS.GREY_500};
`
