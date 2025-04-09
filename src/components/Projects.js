import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import imgClimate from "../assets/img/imgClimate.png";
import imgPrograma from "../assets/img/imgPrograma.png";
import imgFavoriteMovie from "../assets/img/imgFavoriteMovie.png";
import imgFokus from "../assets/img/img-fokus.png";
import imgSecretWord from "../assets/img/img-secret-word.png";
import imgPortfolio from "../assets/img/img-portfolio.png";

const Container = styled.div`
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.875rem;
  padding-bottom: 6.25rem;

  @media (max-width: 768px) {
    width: 120%;
  }
`;

const TitleProjects = styled.h1`
  color: #fff;
  font-size: 2rem;

  @media (max-width: 768px) {
    margin: 8rem 0 5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    margin: 8rem 0 5rem 0;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 25rem;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ProjectCard = styled.div.attrs((props) => ({
  style: {
    opacity: props.isVisible ? 1 : 0,
    display: props.isVisible ? "flex" : "none", // Adiciona display flex ou none
  },
}))`
  height: 100%;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  transition: opacity 0.5s ease;
  position: absolute;
  padding: 3.125rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.875rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    flex-direction: column;
    margin: 1.563rem;
  }
`;

const ProjectImage = styled.img`
  display: flex;
  align-items: center;
  width: 25rem;
  height: auto;
  margin: 0 1.875rem;
  border-radius: 0.625rem;

  @media (max-width: 768px) {
    width: 18.75rem;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const ContainerDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: fit-content;
`;

const DescriptionTitle = styled.div`
  color: #00fbff;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin: 1.5rem;
  }
`;

const DescriptionProject = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  max-width: 90%;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DivIcons = styled.div``;

const IconsProject = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #00fbff;
  }

  @media (max-width: 768px) {
    padding-bottom: 20rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    padding-bottom: 18rem;
  }

  @media (max-width: 375px) {
    padding-bottom: 18rem;
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.875rem;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #00fbff;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`;

const LeftArrow = styled(Arrow)`
  left: 0.625rem;
`;

const RightArrow = styled(Arrow)`
  right: 0.625rem;
`;

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Climate",
      description:
        "Este é um projeto web de previsão do tempo que permite aos usuários acessar a temperatura atual e a previsão para os próximos 5 dias de qualquer localidade. Desenvolvido com React e Vite, integrado com API do OpenWeatherMap. Oferece uma experiência de usuário intuitiva e responsiva.",
      image: imgClimate,
      socialLinks: {
        github: "https://github.com/beamatias/climate",
        live: "https://climate-wine-ten.vercel.app/",
      },
    },
    {
      title: "Compartilhando o Planeta",
      description:
        "Apresento um projeto autônomo, desenvolvido mediante a utilização das tecnologias React e Javascript, com a aplicação da biblioteca Styled Components para estilização. O resultado consiste em um site responsivo, para um programa de transmissão veiculado pelo canal C3TV. (Código não exibido por privacidade)",
      image: imgPrograma,
      socialLinks: {
        live: "https://compartilhando-planeta.vercel.app/",
      },
    },
    {
      title: "Favorite Movie",
      description:
        "Este projeto é um catálogo web de filmes que permite explorar informações fornecidas sobre os filmes mais bem avaliados. Desenvolvido com React e Vite, integrado com API The Movie Database (TMDB) ele oferece uma experiência de usuário fluida e responsiva, adaptando-se a diferentes tamanhos de tela.",
      image: imgFavoriteMovie,
      socialLinks: {
        github: "https://github.com/beamatias/Favorite-Movie",
        live: "https://favorite-movie-neon.vercel.app/",
      },
    },
    {
      title: "Fokus",
      description:
        "Este é um projeto desenvolvido em JavaScript, para ajudar os usuários a manterem o foco durante seus períodos de estudo. O objetivo principal é proporcionar uma experiência tranquila e sem distrações, com pequenas pausas inclusas, incentivando a concentração e o rendimento acadêmico.",
      image: imgFokus,
      socialLinks: {
        github: "https://github.com/beamatias/Fokus",
        live: "https://fokus-ecru.vercel.app/",
      },
    },
    {
      title: "Palavra Secreta",
      description:
        "Este é um projeto desenvolvido para desktop, trata-se do jogo da palavra secreta para testar a capacidade cognitiva. Desenvolvido com React e JavaScript, o objetivo do jogo é adivinhar uma palavra secreta, chutando letras uma a uma. Em cada tentativa, as letras corretas são reveladas e as incorretas são marcadas.",
      image: imgSecretWord,
      socialLinks: {
        github: "https://github.com/beamatias/Secret-Word",
        live: "https://secret-word-sigma-five.vercel.app/",
      },
    },
    {
      title: "Portfólio Pessoal",
      description:
        "Este é meu Portfólio pessoal, desenvolvido em React e JavaScript. Nele você encontra informaçõe sobre mim e meus projetos.",
      image: imgPortfolio,
      socialLinks: {
        github: "https://github.com/beamatias/Portfolio-Beatriz",
        live: "https://portfolio-beatriz-inky.vercel.app/",
      },
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <Container>
      <TitleProjects>Meus Projetos</TitleProjects>
      <CarouselContainer>
        <LeftArrow onClick={prevProject}>&lt;</LeftArrow>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            isVisible={index === currentIndex}
            image={project.image}
          >
            <ProjectImage src={project.image} alt={project.title} />

            <ContainerDescriptions>
              <DescriptionTitle>{project.title}</DescriptionTitle>
              <DescriptionProject>{project.description}</DescriptionProject>

              <DivIcons>
                {index !== 1 && (
                  <IconsProject
                    href={project.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </IconsProject>
                )}
                <IconsProject
                  href={project.socialLinks.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </IconsProject>
              </DivIcons>
            </ContainerDescriptions>
          </ProjectCard>
        ))}

        <RightArrow onClick={nextProject}>&gt;</RightArrow>
      </CarouselContainer>
    </Container>
  );
};

export default Projects;
