
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown, 
  Terminal, 
  Database, 
  Layout as LayoutIcon, 
  Code2, 
  Layers, 
  Menu, 
  X, 
  Globe,
  Coffee,
  FileCode
} from 'lucide-react';

import ProjectCard from './components/ProjectCard';
import MiniGame from './components/InteractiveGame';
import { PROJECTS, SKILLS, projectTranslations } from './constants';
import { translations, Language, LanguageContext } from './i18n';
import { IMAGES } from './assets';

/**
 * ГЛАВНЫЙ КОМПОНЕНТ ПОРТФОЛИО С ПОДДЕРЖКОЙ МУЛЬТИЯЗЫЧНОСТИ
 */
const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGhoulMode, setIsGhoulMode] = useState(false);
  
  const sections = ['home', 'about', 'skills', 'projects', 'game', 'contact'] as const;

  // Функция перевода
  const t = (key: string): string => {
    const allTranslations = {
      ...translations[lang],
      ...projectTranslations[lang]
    };
    return (allTranslations as any)[key] || key;
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const toggleGhoulMode = () => setIsGhoulMode(!isGhoulMode);
  const toggleLanguage = () => setLang(prev => prev === 'en' ? 'ru' : 'en');

  const navItemClass = (section: string) => `
    relative uppercase tracking-widest text-[10px] mono py-2 px-1 transition-all duration-300
    ${activeSection === section ? 'text-red-500 font-black' : 'text-neutral-500 hover:text-white'}
  `;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: t as any }}>
      <div className={`min-h-screen bg-black transition-colors duration-1000 ${isGhoulMode ? 'bg-neutral-950' : ''}`}>
        
        {/* НАВИГАЦИЯ */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 transition-transform duration-500">
          <div className="max-w-[1920px] mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/clustix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-black uppercase tracking-tighter hover:text-red-600 transition-colors group cursor-pointer"
              >
                Clustix<span className="text-red-600 group-hover:animate-pulse">.</span>
              </a>
              
              <div className="hidden md:flex gap-2 mono text-[8px] text-neutral-600 uppercase border-l border-white/10 pl-4">
                <span className="cursor-pointer hover:text-red-500 transition-colors" onClick={toggleGhoulMode}>Status: Active</span>
                <span className="text-green-500 font-bold ml-2">● Online</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {sections.map(s => (
                <a key={s} href={`#${s}`} className={navItemClass(s)}>
                  {t(`nav_${s}` as any)}
                  {activeSection === s && (
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600 animate-pulse" />
                  )}
                </a>
              ))}
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 mono text-[10px] uppercase font-bold text-neutral-400 hover:text-red-500 transition-colors border-l border-white/10 pl-8 ml-4"
              >
                <Globe size={14} />
                <span>{lang === 'en' ? 'RU' : 'EN'}</span>
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* МОБИЛЬНОЕ МЕНЮ */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden">
            {sections.map(s => (
              <a 
                key={s} 
                href={`#${s}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-black uppercase tracking-tighter hover:text-red-600 transition-colors italic"
              >
                {t(`nav_${s}` as any)}
              </a>
            ))}
            <button 
              onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }}
              className="text-xl font-bold uppercase tracking-widest text-red-600 mono mt-4"
            >
              {lang === 'en' ? 'РУССКИЙ' : 'ENGLISH'}
            </button>
          </div>
        )}

        {/* MAIN LAYOUT WRAPPER: 3-Column structure on desktop */}
        <div className="lg:grid lg:grid-cols-[100px_1fr_100px] xl:grid-cols-[150px_1fr_150px] min-h-screen">
          
          {/* LEFT SIDE CONTAINER */}
          <aside className="hidden lg:block relative border-r border-white/5 bg-black overflow-hidden">
            <div className="sticky top-0 h-screen w-full">
              <img 
                src={IMAGES.SIDE_DECOR.LEFT} 
                alt="Left Decor" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale hover:opacity-40 transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 [writing-mode:vertical-rl] rotate-180 mono text-[10px] text-neutral-600 uppercase tracking-[0.5em] select-none">
                System_Link_Est.2024
              </div>
            </div>
          </aside>

          {/* CENTRAL CONTENT AREA */}
          <main className="relative bg-black">
            
            {/* HERO SECTION */}
            <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[150px] rounded-full animate-pulse will-change-transform" />
                <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: `url(${IMAGES.BACKGROUND_PATTERN})` }} />
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-red-600 animate-ping will-change-transform" />
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-red-600 animate-ping [animation-delay:1s] will-change-transform" />
              </div>

              <div className="relative z-10 text-center max-w-4xl">
                <h1 className="text-[14vw] md:text-[10rem] font-black leading-none uppercase italic tracking-tighter mb-4 glitch-hover will-change-transform cursor-default">
                  Clustix
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4">
                  <span className="mono text-xs md:text-sm tracking-[0.4em] text-neutral-400 uppercase">{t('hero_tagline')}</span>
                  <div className="hidden md:block w-12 h-[1px] bg-red-600" />
                  <span className="mono text-xs md:text-sm tracking-[0.4em] text-neutral-400 uppercase">{t('hero_stack')}</span>
                </div>
              </div>
              
              <a 
                href="#about" 
                className="relative z-10 mt-12 md:mt-20 animate-bounce text-neutral-600 hover:text-red-500 transition-colors"
                aria-label="Scroll to About"
              >
                <ChevronDown size={48} strokeWidth={1} />
              </a>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="py-32 px-6 bg-neutral-950/50">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 relative group">
                  <div className="absolute -inset-4 border border-red-600/30 -z-10 group-hover:inset-0 transition-all duration-700" />
                  <div className="aspect-square bg-neutral-900 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                    <img 
                      src={IMAGES.AVATAR} 
                      alt="Avatar" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 p-4 bg-red-600 text-white mono text-[10px] font-black uppercase shadow-lg transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
                    {t('about_subject')}
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-8">
                  <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">
                    {t('about_title')} <span className="text-red-600">{t('about_title_accent')}</span>
                  </h2>
                  <p className="text-xl text-neutral-400 font-light leading-relaxed">
                    {t('about_description')}
                  </p>
                  <div className="grid grid-cols-2 gap-8 mono text-xs">
                    <div className="p-4 border-l-2 border-red-600 bg-white/5">
                      <span className="block text-red-500 mb-2 uppercase font-bold tracking-widest">{t('about_focus_label')}</span>
                      <p className="text-neutral-300">{t('about_focus_value')}</p>
                    </div>
                    <div className="p-4 border-l-2 border-white/10 bg-white/5">
                      <span className="block text-neutral-500 mb-2 uppercase font-bold tracking-widest">{t('about_philosophy_label')}</span>
                      <p className="text-neutral-300">{t('about_philosophy_value')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SKILLS SECTION */}
            <section id="skills" className="py-32 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                  <h2 className="text-4xl font-black uppercase italic mb-4 tracking-tighter">{t('skills_title')} <span className="text-red-600">{t('skills_title_accent')}</span></h2>
                  <p className="mono text-[10px] text-neutral-500 uppercase tracking-widest">{t('skills_desc')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SKILLS.map((skill) => {
                    const Icon = { Database, Code2, Layers, Layout: LayoutIcon, Coffee, FileCode}[skill.icon] || Terminal;
                    return (
                      <div key={skill.name} className="p-8 bg-neutral-950 border border-white/5 hover:border-red-600/30 transition-all group relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6">
                          <Icon className="text-neutral-600 group-hover:text-red-600 transition-colors transform group-hover:scale-110 duration-300" size={32} />
                          <span className="mono text-[10px] text-neutral-600">{skill.level}%</span>
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-widest mb-4 italic">{skill.name}</h3>
                        <div className="w-full h-[2px] bg-neutral-900 overflow-hidden relative">
                          <div 
                            className="h-full bg-red-600 group-hover:bg-white transition-all duration-1000 ease-out will-change-[width]" 
                            style={{ width: `${skill.level}%` }} 
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="py-32 px-6 bg-neutral-950/50">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                  <div>
                    <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-2">{t('projects_title')} <span className="text-red-600">{t('projects_title_accent')}</span></h2>
                    <p className="mono text-[10px] text-neutral-500 uppercase tracking-widest">{t('projects_desc')}</p>
                  </div>
                  <a href="#" className="text-red-600 mono text-xs uppercase font-bold border-b border-red-600/20 pb-1 hover:border-red-600 transition-all">
                    {t('projects_view_all')}
                  </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PROJECTS.map(project => (
                    <ProjectCard key={project.id} project={{...project, description: t(project.descKey)}} />
                  ))}
                </div>
              </div>
            </section>

            {/* GAME SECTION */}
            <section id="game" className="py-32 px-6 border-y border-white/5 bg-black relative">
              <div className="max-w-6xl mx-auto flex flex-col items-center">
                <div className="mb-12 text-center">
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-2">{t('game_title')} <span className="text-red-600">{t('game_title_accent')}</span></h2>
                  <p className="mono text-[10px] text-neutral-500 uppercase tracking-widest">{t('game_desc')}</p>
                </div>
                <MiniGame />
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="py-32 px-6 bg-neutral-950">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="space-y-12">
                    <h2 className="text-6xl font-black uppercase italic tracking-tighter">{t('contact_title')} <span className="text-red-600">{t('contact_title_accent')}</span></h2>
                    <p className="text-xl text-neutral-400 font-light leading-relaxed">
                      {t('contact_desc')}
                    </p>
                    
                    <div className="flex flex-col gap-6">
                      <a href="mailto:contact@clustix.dev" className="flex items-center gap-4 group w-fit">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-300">
                          <Mail size={20} className="group-hover:text-white" />
                        </div>
                        <div>
                          <span className="block text-[10px] mono text-neutral-600 uppercase">{t('contact_email_label')}</span>
                          <span className="text-lg font-bold group-hover:text-red-500 transition-colors">contact@clustix.dev</span>
                        </div>
                      </a>

                      <a 
                        href="https://github.com/clustix" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-4 group w-fit"
                      >
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-300">
                          <Github size={20} className="group-hover:text-white" />
                        </div>
                        <div>
                          <span className="block text-[10px] mono text-neutral-600 uppercase">{t('contact_github_label')}</span>
                          <span className="text-lg font-bold group-hover:text-red-500 transition-colors">github.com/clustix</span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="bg-black p-10 border border-white/5 relative group shadow-2xl">
                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <label className="block mono text-[10px] text-neutral-600 uppercase mb-2">{t('contact_form_name')}</label>
                        <input 
                          type="text" 
                          className="w-full bg-neutral-950 border border-white/10 px-4 py-3 focus:outline-none focus:border-red-600 transition-all"
                          placeholder={t('contact_form_placeholder_name')}
                        />
                      </div>
                      <div>
                        <label className="block mono text-[10px] text-neutral-600 uppercase mb-2">{t('contact_form_email')}</label>
                        <input 
                          type="email" 
                          className="w-full bg-neutral-950 border border-white/10 px-4 py-3 focus:outline-none focus:border-red-600 transition-all"
                          placeholder="EMAIL@EXAMPLE.COM"
                        />
                      </div>
                      <div>
                        <label className="block mono text-[10px] text-neutral-600 uppercase mb-2">{t('contact_form_msg')}</label>
                        <textarea 
                          rows={4} 
                          className="w-full bg-neutral-950 border border-white/10 px-4 py-3 focus:outline-none focus:border-red-600 transition-all resize-none"
                          placeholder={t('contact_form_placeholder_msg')}
                        ></textarea>
                      </div>
                      <button className="w-full bg-white text-black font-black uppercase tracking-widest py-4 hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
                        {t('contact_form_btn')}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            <footer className="py-12 border-t border-white/5 text-center bg-black">
              <p className="mono text-[10px] text-neutral-600 uppercase tracking-widest opacity-60">
                {t('footer_text')} <span className="text-white font-bold">CLUSTIX</span> {"\u00A9"} {new Date().getFullYear()} // {t('footer_status')}
              </p>
            </footer>
          </main>

          {/* RIGHT SIDE CONTAINER */}
          <aside className="hidden lg:block relative border-l border-white/5 bg-black overflow-hidden">
            <div className="sticky top-0 h-screen w-full">
              <img 
                src={IMAGES.SIDE_DECOR.RIGHT} 
                alt="Right Decor" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale hover:opacity-40 transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent" />
              <div className="absolute top-10 left-1/2 -translate-x-1/2 [writing-mode:vertical-rl] mono text-[10px] text-neutral-600 uppercase tracking-[0.5em] select-none">
                Data_Flow_Encrypted
              </div>
            </div>
          </aside>

        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
