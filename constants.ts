import { Project, Skill } from './types';

// IMPORTAÇÃO DAS IMAGENS (Vite Way)
// Certifique-se de que as imagens estão na pasta assets
import ecoDashboardMockup from './assets/Minimalist Website Launch Computer Mockup Instagram Post (1920 x 1080 px).png';
import cryptoWalletMockup from './assets/mockup2 copy 2.jpeg';
import pulseSocialMockup from './assets/mockup2.jpeg';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoSphere Dashboard",
    description: "Uma plataforma completa para monitoramento ambiental em tempo real utilizando sensores IoT e análise preditiva de dados climáticos.",
    tech: ["React", "TypeScript", "Node.js", "D3.js"],
    link: "https://example.com/project1",
    image: ecoDashboardMockup, // Usando a variável importada
  },
  {
    id: 2,
    title: "CryptoFlow Wallet",
    description: "Carteira digital de criptoativos focada em segurança e experiência do usuário simplificada para transações instantâneas.",
    tech: ["Next.js", "Tailwind CSS", "Web3.js", "Framer Motion"],
    link: "https://example.com/project2",
    image: cryptoWalletMockup,
  },
  {
    id: 3,
    title: "Pulse Social",
    description: "Rede social focada em conexões profissionais e compartilhamento de conhecimento técnico com algoritmos de recomendação personalizados.",
    tech: ["React Native", "Firebase", "GraphQL", "Redux"],
    link: "https://example.com/project3",
    image: pulseSocialMockup,
  }
];

export const SKILLS: Skill[] = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Tailwind CSS" },
  { name: "PostgreSQL" },
  { name: "AWS" },
  { name: "Docker" },
  { name: "Figma" }
];