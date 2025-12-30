
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoSphere Dashboard",
    description: "Uma plataforma completa para monitoramento ambiental em tempo real utilizando sensores IoT e análise preditiva de dados climáticos.",
    tech: ["React", "TypeScript", "Node.js", "D3.js"],
    link: "https://example.com/project1",
    imageUrl: "https://picsum.photos/id/1/800/600",
    mobileImageUrl: "https://picsum.photos/id/1/300/600"
  },
  {
    id: 2,
    title: "CryptoFlow Wallet",
    description: "Carteira digital de criptoativos focada em segurança e experiência do usuário simplificada para transações instantâneas.",
    tech: ["Next.js", "Tailwind CSS", "Web3.js", "Framer Motion"],
    link: "https://example.com/project2",
    imageUrl: "https://picsum.photos/id/2/800/600",
    mobileImageUrl: "https://picsum.photos/id/2/300/600"
  },
  {
    id: 3,
    title: "Pulse Social",
    description: "Rede social focada em conexões profissionais e compartilhamento de conhecimento técnico com algoritmos de recomendação personalizados.",
    tech: ["React Native", "Firebase", "GraphQL", "Redux"],
    link: "https://example.com/project3",
    imageUrl: "https://picsum.photos/id/3/800/600",
    mobileImageUrl: "https://picsum.photos/id/3/300/600"
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
