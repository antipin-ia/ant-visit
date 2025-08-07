import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useI18n } from '../i18n';

export function Hero({ onScrollNext }) {
  const { t } = useI18n();
  return (
    <section id="hero" className="hero">
      <a href="#main" className="skip-link">Пропустить к контенту</a>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-text"
        >
          <h1>
            Привет, я <span className="highlight">{personalInfo.shortName}</span>
          </h1>
          <h2>{t.hero.role}</h2>
          <p>{t.hero.summary}</p>
          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.ctaContact}
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-visual"
        >
          <div className="code-animation">
            <div className="code-line">const developer = {'{'}</div>
            <div className="code-line">  name: "{personalInfo.shortName}",</div>
            <div className="code-line">  age: 23,</div>
            <div className="code-line">  role: "Frontend Developer",</div>
            <div className="code-line">  experience: "3 года",</div>
            <div className="code-line">  location: "Москва",</div>
            <div className="code-line">  skills: ["React", "TypeScript", "Node.js"],</div>
            <div className="code-line">  passion: "Создание качественных продуктов"</div>
            <div className="code-line">{'}'}</div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={onScrollNext}
        role="button"
        aria-label="Прокрутить вниз к разделу Обо мне"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
}

export default Hero;

