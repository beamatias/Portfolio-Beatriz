import React from "react";
import styled from "styled-components";

const ContainerFooter = styled.footer`
  background: linear-gradient(to top, rgb(4, 31, 46), #000);
  width: 100%;
  position: fixed;
  text-align: center;
  bottom: 0;
  flex-shrink: 0;
  padding: 0.9375rem 0;
`;

const DescriçãoFooter = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9375rem;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <DescriçãoFooter>Projeto Desenvolvido por Beatriz Matias</DescriçãoFooter>
    </ContainerFooter>
  );
};

export default Footer;
