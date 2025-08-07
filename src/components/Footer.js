import React from 'react';
import { useI18n } from '../i18n';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p>&copy; {year} Иван Антипин. Все права защищены.</p>
        <p>{t.footer.madeWith}</p>
      </div>
    </footer>
  );
}

export default Footer;

