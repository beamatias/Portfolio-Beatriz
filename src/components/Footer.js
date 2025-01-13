import React from "react";
import styled from "styled-components";

const ContainerFooter = styled.footer`
  background-color: rgb(195, 209, 209);
  text-align: center;
  bottom: 0;
  left: 0;
  padding: 0.9375rem 0;
  min-width: 100vh;

  @media (max-width: 1440px) {
    width: 111%;
    padding: 0.9375rem 0;
  }

  @media (max-width: 1024px) {
    width: 115%;
    padding: 0.9375rem 0;
  }

  @media (max-width: 768px) {
    width: 118%;
    padding: 0.625rem;
  }

  @media (max-width: 480px) {
    width: 162%;
  }
`;

const DescriçãoFooter = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9375rem;
  color: #000;
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <DescriçãoFooter>Projeto Desenvolvido por Beatriz Matias</DescriçãoFooter>
    </ContainerFooter>
  );
};

export default Footer;
