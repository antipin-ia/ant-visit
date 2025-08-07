import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useI18n } from '../i18n';

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 id="contact-title">{t.contact.title}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Mail className="contact-icon" />
              <div>
                <h3>{t.contact.email}</h3>
                <p>{personalInfo.contacts.email}</p>
                <small>{t.contact.preferred}</small>
              </div>
            </motion.div>

            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Phone className="contact-icon" />
              <div>
                <h3>{t.contact.phone}</h3>
                <p>{personalInfo.contacts.phone}</p>
                <small>{t.contact.telegram}: {personalInfo.contacts.telegram}</small>
              </div>
            </motion.div>

            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <MapPin className="contact-icon" />
              <div>
                <h3>{t.contact.location}</h3>
                <p>{personalInfo.location}</p>
                <small>{t.contact.travel}</small>
              </div>
            </motion.div>
          </div>

          <div className="social-links">
            <motion.a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href={`mailto:${personalInfo.contacts.email}`}
              className="social-link"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail />
              <span>{t.contact.email}</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;

