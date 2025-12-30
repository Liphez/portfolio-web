
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  imageUrl: string;
  mobileImageUrl: string;
}

export interface Skill {
  name: string;
  icon?: string;
}
