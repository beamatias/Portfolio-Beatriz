import React from "react";
import styled from "styled-components";
import {
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaNodeJs,
  FaReact,
  FaClipboardList,
  FaTasks,
  FaFileExcel,
  FaFileWord,
  FaFilePowerpoint,
} from "react-icons/fa";

const ContainerMain = styled.div`
  background-color: rgb(137, 166, 166);
  padding: 2.5rem;
  min-width: 100vh;

  @media (max-width: 480px) {
    padding: 40% 10% 40% 10%;
  }
  /*
  @media (max-width: 1440px) {
    width: 100%;
    padding: 5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 9rem;
  }

  @media (max-width: 320px) {
    width: 124%;
  }

  */
`;

const TitleSkills = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  color: #fff;

  @media (max-width: 320px) {
    margin-left: 16%;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  padding: 1.25rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  background-color: rgb(75, 206, 208);
  border-radius: 0.625rem;
  padding: 1.25rem;
  text-align: center;

  &:hover {
    background-color: rgb(50, 150, 150);
    color: #fff;
  }
`;

const Icon = styled.div`
  font-size: 1.5rem;
`;

const OfficeIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.625rem;
`;

const Skills = () => {
  const skillsData = [
    {
      icon: <FaJsSquare />,
      title: "JavaScript",
      description: "Linguagem de programação para web",
    },
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      description: "Estrutura das páginas web",
    },
    {
      icon: <FaCss3 />,
      title: "CSS3",
      description: "Estilização das páginas web",
    },
    { icon: <FaGitAlt />, title: "Git", description: "Controle de versão" },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      description: "Plataforma JavaScript para servidor",
    },
    {
      icon: <FaReact />,
      title: "React.js",
      description: "Biblioteca JavaScript para interfaces de usuário",
    },
    {
      icon: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon>
            <FaClipboardList />
          </Icon>
          <Icon>
            <FaTasks />
          </Icon>
        </div>
      ),
      title: "Metodologias Ágeis",
      description: "Kanban e Scrum para gerenciamento de projetos ágeis",
    },
    {
      icon: (
        <OfficeIconsContainer>
          <Icon>
            <FaFileExcel />
          </Icon>
          <Icon>
            <FaFileWord />
          </Icon>
          <Icon>
            <FaFilePowerpoint />
          </Icon>
        </OfficeIconsContainer>
      ),
      title: "Pacote Office",
      description: "Conjunto de aplicativos para produtividade",
    },
  ];

  return (
    <ContainerMain>
      <TitleSkills>Minhas Habilidades</TitleSkills>
      <SkillsContainer>
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>
            <Icon>{skill.icon}</Icon>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </SkillCard>
        ))}
      </SkillsContainer>
    </ContainerMain>
  );
};

export default Skills;
