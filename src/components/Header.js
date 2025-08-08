import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { useI18n } from '../i18n';

export function Header({ onNavigate, activeSection }) {
  const { t, lang, setLang } = useI18n();
  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="header-content">
        <motion.a
          href="#hero"
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Code className="logo-icon" />
          <span>Ant-Visit</span>
        </motion.a>
        <nav className="nav" aria-label={t.a11y?.navLabel || 'Navigation'}>
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-current={activeSection === item.id ? 'true' : undefined}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>
        <div className="header-controls">
          <button
            className="lang-toggle"
            aria-label={t.toggles.lang}
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
          >
            {lang.toUpperCase()}
          </button>
          <ThemeToggle />
          <button className="hire-me" onClick={() => onNavigate('contact')}>
            {t.cta?.hireMe || 'Hire me'}
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;

function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}

