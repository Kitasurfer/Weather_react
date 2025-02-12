
import { NavContainer, NavLink, Logo } from "./styles";

function Navigation() {
  return (
    <NavContainer>
      <Logo>Weather App</Logo>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/history">History</NavLink>
    </NavContainer>
  );
}

export default Navigation;