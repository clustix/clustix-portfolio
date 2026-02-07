
import { Project, Skill } from './types';
import { IMAGES } from './assets';

export const PROJECTS: (Project & { descKey: string })[] = [
  {
    id: 1,
    title: "Anixart-X",
    description: "",
    descKey: "project_anix_desc",
    tags: ["CSS", "TypeScript", "Java Script"],
    githubUrl: "https://github.com/clustix/Anixart-X",
    demoUrl: "#",
    image: IMAGES.PROJECTS.ANIX_X
  },
  {
    id: 2,
    title: "Melomash",
    description: "",
    descKey: "project_melomash_desc",
    tags: ["TypeScript", "React", "API Integration"],
    githubUrl: "https://github.com/IsNotAcceptable/Melomash",
    demoUrl: "#",
    image: IMAGES.PROJECTS.MELOMASH
  },
  {
    id: 3,
    title: "Shadow Server",
    description: "",
    descKey: "project_shadow_desc",
    tags: ["Python", "Socket.io", "Redis"],
    githubUrl: "#",
    demoUrl: "#",
    image: IMAGES.PROJECTS.SHADOW
  }
];

export const projectTranslations = {
  en: {
    "project_anix_desc": "Desktop client Anixart for Windows featuring advanced customization, API integration, and performance optimizations.",
    "project_melomash_desc": "A lightweight yet powerful desktop application designed to unify disparate music streaming platforms into a single, seamless environment.",
    project_shadow_desc: "Distributed backend architecture for real-time multiplayer applications using Python WebSockets."
  },
  ru: {
    project_anix_desc: 'Альтернативный клиент Anixart для Windows. Оптимизированный интерфейс, расширенная кастомизация и работа с API сервиса.',
    "project_melomash_desc": "Легковесное и мощное настольное приложение, объединяющее разрозненные музыкальные стриминговые платформы в единую удобную среду.",
    project_shadow_desc: "Распределенная бэкенд-архитектура для многопользовательских приложений на Python WebSockets."
  }
};

export const SKILLS: Skill[] = [
  { name: "Python", level: 95, icon: "Database" },
  { name: "C#", level: 40, icon: "Code2" },
  { name: "React", level: 92, icon: "Layers" },
  { name: "Tailwind CSS", level: 90, icon: "Layout" },
  { name: "Java Script", level: 65, icon: "Coffee" },
  { name: "Typescript", level: 85, icon: "FileCodeIcon" },
];
