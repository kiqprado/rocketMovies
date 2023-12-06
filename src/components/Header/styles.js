import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.section`
  width: 100%;
  height: 8.6rem;

  display: flex;
  gap: 6.4rem;
  align-items: center;

  padding: 0 12rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GREY_500};
`

export const Profile = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  min-width: 15.6rem;

  .user {
    display: flex;
    flex-direction: column;

    a {
      align-self: end;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.SATIN_WHITE};
    }

    a:nth-child(2) {
      color: ${({ theme }) => theme.COLORS.GREY_200};
    }

    a:hover {
      color: ${({ theme }) => theme.COLORS.SATIN_WHITE};
    }
  }

  img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }
`

export const User = styled(Link)`
  font-size: 1.4rem;
`
