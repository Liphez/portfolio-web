export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string; // Mudamos de imageUrl/mobileImageUrl para apenas 'image'
}

export interface Skill {
  name: string;
}