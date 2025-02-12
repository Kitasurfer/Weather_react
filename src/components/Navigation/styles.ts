import styled from "@emotion/styled";
import { NavLink as RouterLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin: 0;
  padding: 0;
  margin-right: auto;
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