import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { useI18n } from '../i18n';

export function Skills() {
  const { t } = useI18n();
  const groups = [
    { title: t.skills.frontend, items: skills.frontend },
    { title: t.skills.backend, items: skills.backend },
    { title: t.skills.api, items: skills.api },
    { title: t.skills.tools, items: skills.tools },
  ];

  // Small showcase: interactive skill filter highlight (no heavy state)
  const [hovered, setHovered] = React.useState(null);

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 id="skills-title">{t.skills.title}</h2>
        <div className="skills-grid">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              className="skill-category"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
              viewport={{ once: true }}
            >
              <h3>{g.title}</h3>
              <div className="skill-items">
                {g.items.map((item) => (
                  <span key={item} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;

