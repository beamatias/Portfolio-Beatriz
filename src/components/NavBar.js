import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CvBeatriz from "../assets/pdf/CV-BeatrizMatias-2025.pdf";

const StyledHeader = styled.header`
  background: linear-gradient(to bottom, rgb(4, 31, 46), #000);
  padding: 0.625rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
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
  margin: 0 0.625rem;
`;

const NavLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #00fbff;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 480px) {
    font-size: 1.875rem;
  }
`;

const DownloadButton = styled.a`
  margin-left: 1.25rem;
  padding: 0.625rem 1.25rem;
  background-color: #00a3b0;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(0, 124, 126);
  }

  @media (max-width: 480px) {
    padding: 1.25rem 2.5;
    font-size: 1.875rem;
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
            <NavLink to="/about" onClick={() => scrollToSection("about")}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/skills" onClick={() => scrollToSection("skills")}>
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects" onClick={() => scrollToSection("projects")}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <DownloadButton href={CvBeatriz} download="CvBeatriz">
              Baixar CV
            </DownloadButton>
          </NavItem>
        </ListNav>
      </Nav>
    </StyledHeader>
  );
}

export default NavBar;
