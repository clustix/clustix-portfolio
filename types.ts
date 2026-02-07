
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}
