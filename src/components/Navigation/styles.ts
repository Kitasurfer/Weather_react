import styled from '@emotion/styled';
import { NavLink as RouterLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  position: absolute;
  left: 40px;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

export const NavLink = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin-right: 15px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    font-weight: 700;
  }
`;
