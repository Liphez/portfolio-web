import { Project, Skill } from './types';

// IMPORTAÇÃO DAS IMAGENS (Vite Way)
// Certifique-se de que as imagens estão na pasta assets
import oticaTardely from './assets/oticaTardely.png';
import espacoAmbiente from './assets/20945227.jpg';
//import pulseSocialMockup from './assets/';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Otica Tardely",
    description: "Landing Page estratégica desenvolvida para elevar a presença digital de uma ótica premium. O projeto destaca diferenciais competitivos como Medição Digital e Consultoria de Estilo, transformando visitantes em agendamentos reais via WhatsApp.",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    link: "https://landing-page-otica-johnne.vercel.app",
    image: oticaTardely, // Usando a variável importada
  },
  {
    id: 2,
    title: "Em desenvolvimento...",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    tech: ["xxxxx", "xxxxx", "xxxxx", "xxxxx"],
    link: "https://example.com/project2",
    image: espacoAmbiente,
  },
  {
    id: 3,
    title: "Em desenvolvimento...",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    tech: ["xxxxx", "xxxxx", "xxxxx", "xxxxx"],
    link: "https://example.com/project3",
    image: espacoAmbiente,
  }
];

export const SKILLS: Skill[] = [
  { name: "HTML" },
  { name: "Css" },
  { name: "TypeScript" },
  { name: "..." },
  { name: "MySql" },
  { name: "Word" },
  { name: "Excel" },
  { name: "..." }
];