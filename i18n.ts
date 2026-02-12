
import { useState, useCallback, createContext, useContext } from 'react';

/**
 * СЛОВАРЬ ПЕРЕВОДОВ / TRANSLATION DICTIONARY
 * 
 * Чтобы добавить или изменить текст:
 * 1. Найдите нужный ключ (например, 'hero_tagline').
 * 2. Измените значение в объекте 'en' (английский) или 'ru' (русский).
 */
export const translations = {
  en: {
    nav_home: 'home',
    nav_about: 'about',
    nav_skills: 'skills',
    nav_projects: 'projects',
    nav_game: 'test',
    nav_contact: 'contact',
    
    hero_tagline: 'Full-Stack Developer',
    hero_stack: 'Python | C# | React | TypeScript',
    
    about_title: 'Engineering',
    about_title_accent: 'Solutions.',
    about_description: 'I specialize in bridging the gap between high-performance backends and high-fidelity frontends. My workflow integrates the precision of C# and Python with the fluidity of React and TypeScript to build scalable digital products.',
    about_focus_label: 'Core Focus',
    about_focus_value: 'Scalable Architecture',
    about_philosophy_label: 'Philosophy',
    about_philosophy_value: 'Clean Code & Structural Minimalism',
    about_subject: 'Profile: Software Engineer',
    
    skills_title: 'Technical',
    skills_title_accent: 'Stack',
    skills_desc: 'Core tools and programming languages',
    
    projects_title: 'Featured',
    projects_title_accent: 'Projects',
    projects_desc: 'A selection of commercial and open-source solutions',
    projects_view_all: 'View All Projects →',
    
    game_title: 'Reaction',
    game_title_accent: 'Test',
    game_desc: 'Measure your interaction latency in real-time',
    game_start_text: 'Click the target as soon as it appears. This test measures input delay and UI responsiveness.',
    game_start_btn: 'Start Test',
    game_result: 'Result',
    game_potential: 'Response Time',
    game_retry: 'Try Again',
    game_status: 'Status: Ready',
    
    contact_title: 'Contact',
    contact_title_accent: 'Details.',
    contact_desc: 'Interested in working together? I am open to discussing complex web systems, API development, and full-stack partnerships.',
    contact_email_label: 'Email Address',
    contact_github_label: 'GitHub Profile',
    contact_form_name: 'Name',
    contact_form_email: 'Email',
    contact_form_msg: 'Message',
    contact_form_placeholder_name: 'Your name',
    contact_form_placeholder_msg: 'Describe your project or inquiry...',
    contact_form_btn: 'Send Message',
    contact_form_sending: 'Transmitting...',
    contact_form_success: 'Transmission Complete',
    
    footer_text: 'Developed by',
    footer_status: 'System Ver: 4.0.0-Stable'
  },
  ru: {
    nav_home: 'главная',
    nav_about: 'о себе',
    nav_skills: 'стек',
    nav_projects: 'проекты',
    nav_game: 'тест',
    nav_contact: 'контакты',
    
    hero_tagline: 'Full-Stack Developer',
    hero_stack: 'Python | C# | React | TypeScript',
    
    about_title: 'Engineering',
    about_title_accent: 'Solutions.',
    about_description: 'Специализируюсь на создании отказоустойчивых систем и производительных интерфейсов. Мой стек включает Bash для автоматизации, C# и Python для бэкенда, React и TypeScript для фронтенда.',
    about_focus_label: 'Core Focus',
    about_focus_value: 'Масштабируемая архитектура.',
    about_philosophy_label: 'Philosophy',
    about_philosophy_value: 'Чистый код и структурный минимализм.',
    about_subject: 'Профиль: Software Engineer',
    
    skills_title: 'Технологический',
    skills_title_accent: 'Стек',
    skills_desc: 'Инструменты и языки программирования',
    
    projects_title: 'Выполненные',
    projects_title_accent: 'Проекты',
    projects_desc: 'Избранные кейсы и open-source решения',
    projects_view_all: 'Смотреть все проекты →',
    
    game_title: 'Реакции',
    game_title_accent: 'Тест',
    game_desc: 'Простая проверка скорости взаимодействия с интерфейсом',
    game_start_text: 'Нажмите на метку, как только она появится. Тест позволяет замерить задержку ввода.',
    game_start_btn: 'Начать тест',
    game_result: 'Результат',
    game_potential: 'Скорость отклика',
    game_retry: 'Повторить попытку',
    game_status: 'Статус: Готов',
    
    contact_title: 'Contact',
    contact_title_accent: 'Information.',
    contact_desc: 'Открыт для предложений по разработке сложных систем и веб-приложений. Напишите мне в форму ниже или на почту.',
    contact_email_label: 'Электронная почта',
    contact_github_label: 'Профиль на GitHub',
    contact_form_name: 'Имя',
    contact_form_email: 'Email',
    contact_form_msg: 'Сообщение',
    contact_form_placeholder_name: 'Введите ваше имя',
    contact_form_placeholder_msg: 'Краткое описание задачи или вопрос...',
    contact_form_btn: 'Отправить запрос',
    contact_form_sending: 'Отправка...',
    contact_form_success: 'Успешно отправлено',
    
    footer_text: 'Developed by',
    footer_status: 'System Ver: 4.0.0-Stable'
}
};

export type Language = 'en' | 'ru';

export const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
});
