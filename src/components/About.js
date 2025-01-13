import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import imgPerfil from "../assets/img/ft-perfil.jpeg";

const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12.5rem;
  flex-direction: row;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 5.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 40%;
    padding-bottom: 20%;
    flex-direction: column;
  }
  @media (max-width: 320px) {
    width: 100%;
    margin: 55%;
    padding-bottom: 20%;
    flex-direction: column;
  }
`;

const ContainerInfo = styled.div`
  width: 100%;
  max-width: 31.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TextContent = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  color: #fff;
  margin: 0.625rem 1.25rem;
`;

const MainHeading = styled.h1`
  color: #00fbff;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const Heading = styled.h2`
  color: #00fbff;
  margin-bottom: 1rem;
  font-size: 1.75rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ImagePerfil = styled.img`
  width: 100%;
  max-width: 18.75rem;
  height: auto;
  border-radius: 2.1875rem;
  margin: 1.875rem;
  box-shadow: 0.9375rem 0.9375rem 0.1875rem rgba(0, 251, 255, 0.73);

  @media (max-width: 480px) {
    margin: 1.6rem 0 0 0;
    box-shadow: rgba(0, 251, 255, 0.73);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.625rem;
`;

const SocialIconLink = styled.a`
  font-size: 1.5rem;
  margin: 0 0.9375rem;
  color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgb(2, 131, 133);
  }
`;

const About = () => {
  return (
    <ContainerMain>
      <ContainerInfo>
        <MainHeading>Desenvolvedora Front-end</MainHeading>
        <TextContent>
          Olá! Eu me chamo Beatriz Matias, sou desenvolvedora de software
          formada em Análise e Desenvolvimento de Sistemas, com especialidade em
          front-end. Meu maior objetivo é agregar valor, criando projetos e
          soluções para uma melhor experiência digital.
        </TextContent>
        <Heading>Vamos nos conectar?</Heading>
        <SocialIcons>
          <SocialIconLink
            href="https://www.linkedin.com/in/beamatias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.github.com/beamatias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink
            href="https://wa.me/+15997810583"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </SocialIconLink>
        </SocialIcons>
      </ContainerInfo>
      <ImagePerfil src={imgPerfil} alt="Foto Perfil" />
    </ContainerMain>
  );
};

export default About;
