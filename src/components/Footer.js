import React from "react";
import styled from "styled-components";

const ContainerFooter = styled.footer`
  background-color: rgb(195, 209, 209);
  width: 100%;
  text-align: center;
  bottom: 0;
  left: 0;
  padding: 0.9375rem 0;

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
    padding: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.313rem 5.813rem;
  }

  @media (max-width: 480px) {
    width: 158%;
    padding: 5px;
  }

  @media (max-width: 320px) {
    width: 165%;
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
