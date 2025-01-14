import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Container = styled.div`
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.875rem;
  padding-bottom: 6.25rem;

  @media (max-width: 480px) {
  }
`;

const TitleProjects = styled.h1`
  color: #fff;
  font-size: 2rem;

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

const ProjectCard = styled.div`
  height: 100%;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  transition: opacity 0.5s ease;
  position: absolute;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
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

  @media (max-width: 480px) {
    font-size: 3rem;
    padding-bottom: 13rem;
  }

  @media (max-width: 375px) {
    padding-bottom: 0.625rem;
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
      title: "Palavra Secreta",
      description:
        "Este é um jogo da palavra secreta para testar a capacidade cognitiva. O objetivo do jogo é adivinhar uma palavra secreta, chutando letras uma a uma. Em cada tentativa, as letras corretas são reveladas e as incorretas são marcadas.",
      image:
        "https://github.com/beamatias/Secret-Word/blob/main/src/img/img-secret-word.png?raw=true", // Substitua pela URL da imagem
      socialLinks: {
        github: "https://github.com/beamatias/Secret-Word",
        live: "https://secret-word-sigma-five.vercel.app/",
      },
    },
    {
      title: "Fokus",
      description:
        "Este é um projeto desenvolvido para ajudar os usuários a manterem o foco durante seus períodos de estudo. O objetivo principal é proporcionar uma experiência tranquila e sem distrações, com pequenas pausas inclusas, incentivando a concentração e o rendimento acadêmico.",
      image:
        "https://private-user-images.githubusercontent.com/140823685/297428670-fe22ddc5-a451-4d3e-a562-f2bb6a2cd084.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYzODMyNDQsIm5iZiI6MTczNjM4Mjk0NCwicGF0aCI6Ii8xNDA4MjM2ODUvMjk3NDI4NjcwLWZlMjJkZGM1LWE0NTEtNGQzZS1hNTYyLWYyYmI2YTJjZDA4NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwOVQwMDM1NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MTdjZTFhNmMxNGMwY2M2MTlkNTNkZGY3MDNjNTQ3MjZhOTNhNjBhMmQ0ZDZjZTU4NzIyZGEzY2Q3NTBiODdjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Xwz5Tn2rwOiCQBaPnqpJL72fzV1DPkO8NyqrQFTHyfo",
      socialLinks: {
        github: "https://github.com/beamatias/Fokus",
        live: "https://fokus-ecru.vercel.app/",
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
                <IconsProject
                  href={project.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </IconsProject>
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
