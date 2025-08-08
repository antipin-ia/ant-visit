import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experience';
import { useI18n } from '../i18n';

export function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience" className="experience" aria-labelledby="experience-title">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 id="experience-title">{t.experience.title}</h2>
        <div className="experience-timeline">
          {(t.experience.items || experiences).map((exp, idx) => (
            <motion.div
              key={exp.company}
              className="experience-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
              viewport={{ once: true }}
            >
              <div className="experience-header">
                <div className="experience-company">
                  <Briefcase className="company-icon" />
                  <div>
                    <h3>{exp.company}</h3>
                    <p className="position">{exp.role}</p>
                    <p className="period">{exp.period}</p>
                  </div>
                </div>
              </div>
              <div className="experience-content">
                <p>{exp.summary}</p>
                <ul>
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="achievements">
                  <h4>Достижения:</h4>
                  <p>{exp.achievements}</p>
                </div>
                <div className="tech-stack">
                  {exp.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;

