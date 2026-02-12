
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
    title: "Sentinel",
    description: "",
    descKey: "project_sentinel_desc",
    tags: ["Python", "TypeScript", "System API"],
    githubUrl: "https://github.com/clustix/Sentinel",
    demoUrl: "#",
    image: IMAGES.PROJECTS.SENTINEL
  }
];

export const projectTranslations = {
  en: {
    "project_anix_desc": "Desktop client Anixart for Windows featuring advanced customization, API integration, and performance optimizations.",
    "project_melomash_desc": "A lightweight yet powerful desktop application designed to unify disparate music streaming platforms into a single, seamless environment.",
    "project_sentinel_desc": "A lightweight system resource monitor and infrastructure management tool. Streamlines local development by visualizing system health and automating routine maintenance tasks via a web UI.",
  },
  ru: {
    "project_anix_desc": 'Альтернативный клиент Anixart для Windows. Оптимизированный интерфейс, расширенная кастомизация и работа с API сервиса.',
    "project_melomash_desc": "Легковесное и мощное настольное приложение, объединяющее разрозненные музыкальные стриминговые платформы в единую удобную среду.",
    "project_sentinel_desc": "Легковесный монитор системных ресурсов и управления локальной инфраструктурой. Позволяет контролировать состояние системы и автоматизировать рутинные задачи обслуживания через веб-интерфейс.",
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
