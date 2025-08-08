import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe } from 'lucide-react';
import { projects } from '../data/projects';
import { useI18n } from '../i18n';

const iconMap = {
  code: Code,
  database: Database,
  globe: Globe,
};

export function Projects() {
  const { t } = useI18n();
  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 id="projects-title">{t.projects.title}</h2>
        <div className="projects-grid">
          {(t.projects.items || projects).map((p, idx) => {
            const Icon = iconMap[p.icon] ?? Code;
            return (
              <motion.div
                key={p.title}
                className="project-card"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  <Icon className="project-icon" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {p.url ? (
                  <a className="social-link" href={p.url} target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;

