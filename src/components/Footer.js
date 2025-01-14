import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ContainerFooter = styled.footer`
  background-color: rgb(195, 209, 209);
  width: 100%;
  position: fixed;
  text-align: center;
  padding: 0.9375rem 0;
  bottom: 0;
  left: 0;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  transform: translateY(0);

  &.hidden {
    transform: translateY(100%);
  }
`;

const DescriçãoFooter = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9375rem;
  color: #000;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Footer = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ContainerFooter className={isHidden ? "hidden" : ""}>
      <DescriçãoFooter>Projeto Desenvolvido por Beatriz Matias</DescriçãoFooter>
    </ContainerFooter>
  );
};

export default Footer;
