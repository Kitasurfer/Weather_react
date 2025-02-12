import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavLink } from './styles';

function Navigation() {
  return (
    <NavContainer>
      <div style={{ fontWeight: 'bold', marginRight: 'auto' }}>Weather App</div>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/history">
        History
      </NavLink>
    </NavContainer>
  );
}

export default Navigation;
