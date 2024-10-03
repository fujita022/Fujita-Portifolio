import { DiTerminal,  DiHtml5 } from "react-icons/di";
import { SiGit, SiCss3, SiMysql,  } from "react-icons/si";


export const Skills = [

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>HTML para construir páginas de websites</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>CSS estilizando meus websites</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Banco de dados implementados em websites</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Compilando e construindo projetos</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Ajuda a organizar e colaborar em projetos</>,
  },
];
