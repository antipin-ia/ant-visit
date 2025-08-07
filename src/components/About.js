import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useI18n } from '../i18n';

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 id="about-title">{t.about.title}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              {t.about.p1.replace('{fullName}', personalInfo.fullName)}
            </p>
            <p>
              {t.about.p2}
            </p>
            <div className="personal-info">
              <div className="info-item">
                <Calendar className="info-icon" />
                <div>
                  <h4>{t.about.birthdate}</h4>
                  <p>{personalInfo.birthDate}</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>{t.about.location}</h4>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
              <div className="info-item">
                <GraduationCap className="info-icon" />
                <div>
                  <h4>{t.about.education}</h4>
                  <p>{personalInfo.education}</p>
                </div>
              </div>
            </div>
            <div className="stats">
              {personalInfo.stats.map((s) => (
                <motion.div key={s.label} className="stat" whileHover={{ scale: 1.05 }}>
                  <h3>{s.value}</h3>
                  <p>{s.label}</p>
                  <button
                    className="lang-toggle"
                    onClick={() => navigator.clipboard.writeText(`${s.label}: ${s.value}`)}
                    aria-label="Copy"
                  >
                    Copy
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;

