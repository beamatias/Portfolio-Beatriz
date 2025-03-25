import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import imgPerfil from "../assets/img/ft-perfil.jpeg";

const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex-direction: row;
  max-width: 100vw;
  padding: 4rem;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 5.5rem;
  }

  @media (max-width: 480px) {
    text-align: center;
    flex-direction: column;
    margin: 4rem;
    padding-left: 8rem;
  }
`;

const ContainerInfo = styled.div`
  width: 100%;
  max-width: 35rem;
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
  line-height: 1.4;

  @media (max-width: 480px) {
    width: 40rem;
    font-size: 2rem;
  }
`;

const MainHeading = styled.h1`
  color: #00fbff;
  margin-bottom: 1rem;
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
`;

const Heading = styled.h2`
  color: #00fbff;
  margin-bottom: 1rem;
  font-size: 1.75rem;

  @media (max-width: 480px) {
    font-size: 2.5rem;
    width: 40rem;
  }
`;

const ImagePerfil = styled.img`
  width: 100%;
  max-width: 18.75rem;
  height: auto;
  border-radius: 20rem;
  border: 0.2rem solid #00fbff;
  margin: 1.875rem;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
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
    color: #00fbff;
  }

  @media (max-width: 480px) {
    margin: 1rem;
    font-size: 3rem;
  }
`;

const About = () => {
  return (
    <ContainerMain>
      <ContainerInfo>
        <MainHeading>Desenvolvedora Front-end</MainHeading>
        <TextContent>
          Olá! Eu me chamo Beatriz Matias, sou desenvolvedora de software
          formada em Análise e Desenvolvimento de Sistemas e atualmente estou
          cursando pós-graduação em Desenvolvimento Full Stack. Meu maior
          objetivo é agregar valor, criando projetos e soluções de qualidade,
          para uma melhor experiência digital.
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
