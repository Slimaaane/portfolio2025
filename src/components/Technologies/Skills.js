import { DiPython, DiTerminal, DiJava, DiHtml5, DiPhp, DiGithubBadge, DiJavascript1,DiLinux, DiNodejs, DiScrum  } from "react-icons/di";
import {SiCss3, SiMysql} from "react-icons/si";


export const Skills = [
  {
    slug: "python",
    Component: DiPython,
    title: "Python",
    Description: () => <>Langage polyvalent pour scripts et automatisations.</>,
  },
  {
    slug: "php",
    Component: DiPhp,
    title: "PHP",
    Description: () => <>Langage serveur pour sites dynamiques.</>,
  },
  {
    slug: "javascript",
    Component: DiJavascript1,
    title: "JavaScript",
    Description: () => <>Ajoute de l’interactivité aux sites web.</>,
  },
  {
    slug: "linux",
    Component: DiLinux,
    title: "Linux",
    Description: () => <>Système fiable pour le développement</>,
  },
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Utilisé pour des applications stables et performantes</>,
  },

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML5",
    Description: () => <>Base de la structure des pages web modernes</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Stylise et met en forme les pages web.</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Manipule et interroge les bases de données.</>,
  },
  {
    slug: "nodejs",
    Component: DiNodejs,
    title: "NodeJs",
    Description: () => <>Exécute du JavaScript côté serveur.</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Shell principal des systèmes Linux et Unix</>,
  },
  {
    slug: "scrum",
    Component: DiScrum,
    title: "Scrum",
    Description: () => <>Méthode agile pour organiser le travail.</>,
  },
  {
    slug: "github",
    Component: DiGithubBadge ,
    title: "Github",
    Description: () => <>Gestion et suivi de projets en équipe.</>,
  },
];
