import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: rgb(195, 209, 209);
  padding: 10px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
  }
`;

const ListNav = styled.ul``;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #00fbff;
    transition: all 0.3s ease-in-out;
  }
`;

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function NavBar() {
  return (
    <StyledHeader>
      <Nav>
        <ListNav>
          <NavItem>
            <NavLink to="#" onClick={() => scrollToSection("about")}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#" onClick={() => scrollToSection("skills")}>
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#" onClick={() => scrollToSection("projects")}>
              Projects
            </NavLink>
          </NavItem>
        </ListNav>
      </Nav>
    </StyledHeader>
  );
}

export default NavBar;
