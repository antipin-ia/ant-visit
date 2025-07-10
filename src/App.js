import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Database, 
  Globe,
  ChevronDown,
  Calendar,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import './App.css';

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <motion.header 
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Code className="logo-icon" />
            <span>Ant-Visit</span>
          </motion.div>
          <nav className="nav">
            <motion.button 
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Обо мне
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('experience')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Опыт
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('skills')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Навыки
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Проекты
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Контакты
            </motion.button>
          </nav>
        </div>
      </motion.header>

      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-text"
          >
            <h1>Привет, я <span className="highlight">Иван Антипин</span></h1>
            <h2>Frontend Developer React + Go</h2>
            <p>Middle+ разработчик с 2.5 годами опыта в создании современных веб-приложений. Специализируюсь на React, TypeScript и микросервисной архитектуре.</p>
            <motion.button 
              className="cta-button"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Связаться со мной
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-visual"
          >
            <div className="code-animation">
              <div className="code-line">const developer = {`{`}</div>
              <div className="code-line">  name: "Иван Антипин",</div>
              <div className="code-line">  age: 23,</div>
              <div className="code-line">  role: "Frontend Developer",</div>
              <div className="code-line">  experience: "2.5 года",</div>
              <div className="code-line">  location: "Москва",</div>
              <div className="code-line">  skills: ["React", "TypeScript", "Node.js"],</div>
              <div className="code-line">  passion: "Создание качественных продуктов"</div>
              <div className="code-line">{`}`}</div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown />
        </motion.div>
      </section>

      <section id="about" className="about">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Обо мне</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Меня зовут <strong>Антипин Иван Александрович</strong>, мне 23 года. 
                Я целеустремленный и ответственный Frontend-разработчик, который постоянно стремится к саморазвитию.
              </p>
              <p>
                Ищу работу на позицию middle+/middle. Специализируюсь на разработке современных веб-приложений 
                с использованием React, TypeScript и микросервисной архитектуры. Имею опыт работы в крупных компаниях 
                и создания продуктов с нуля.
              </p>
              <div className="personal-info">
                <div className="info-item">
                  <Calendar className="info-icon" />
                  <div>
                    <h4>Дата рождения</h4>
                    <p>6 апреля 2002</p>
                  </div>
                </div>
                <div className="info-item">
                  <MapPin className="info-icon" />
                  <div>
                    <h4>Местоположение</h4>
                    <p>Москва, Россия</p>
                  </div>
                </div>
                <div className="info-item">
                  <GraduationCap className="info-icon" />
                  <div>
                    <h4>Образование</h4>
                    <p>Магистр НИТУ МИСИС</p>
                  </div>
                </div>
              </div>
              <div className="stats">
                <motion.div 
                  className="stat"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3>2.5</h3>
                  <p>Года опыта</p>
                </motion.div>
                <motion.div 
                  className="stat"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3>2</h3>
                  <p>Компании</p>
                </motion.div>
                <motion.div 
                  className="stat"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3>B2</h3>
                  <p>Английский</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="experience" className="experience">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Опыт работы</h2>
          <div className="experience-timeline">
            <motion.div 
              className="experience-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="experience-header">
                <div className="experience-company">
                  <Briefcase className="company-icon" />
                  <div>
                    <h3>Яндекс (Недвижимость)</h3>
                    <p className="position">Frontend-разработчик</p>
                    <p className="period">Декабрь 2024 — Май 2025 (6 месяцев)</p>
                  </div>
                </div>
              </div>
              <div className="experience-content">
                <p>Занимался full-stack разработкой. Отвечал за весь цикл работы журнала недвижимости:</p>
                <ul>
                  <li>Разработка нового функционала и интеграции с основными сервисами на основе микрофронтендов и микросервисов</li>
                  <li>Работа с внутренней БД на основе MySQL, PostgreSQL и REST API</li>
                  <li>Поддержка устойчивости и производительности, создание тестов (e2e, unit) и документации</li>
                  <li>Оптимизация SEO и метрик пользователя для сбора статистики</li>
                  <li>Работа с API (REST, GraphQL)</li>
                </ul>
                <div className="achievements">
                  <h4>Достижения:</h4>
                  <p>Перенес микросервис журнала недвижимости в основную монорепу журналов, избавился от 45% устаревшего кода, 
                  оптимизировал middleware и хуки, настроил SSR и авторизацию с деплоем, переработал роутинг, что ускорило сбор ссылок в 1.5 раза. 
                  Результатом работы стало сокращение затрат на поддержку на 50%.</p>
                </div>
                <div className="tech-stack">
                  <span>TypeScript</span>
                  <span>React</span>
                  <span>SSR</span>
                  <span>Webpack</span>
                  <span>Redux</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>Next.js</span>
                  <span>MySQL</span>
                  <span>PostgreSQL</span>
                  <span>Redis</span>
                  <span>Docker</span>
                  <span>CI/CD</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="experience-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experience-header">
                <div className="experience-company">
                  <Briefcase className="company-icon" />
                  <div>
                    <h3>ООО Белая Доска</h3>
                    <p className="position">Fullstack Developer</p>
                    <p className="period">Май 2022 — Апрель 2024 (2 года)</p>
                  </div>
                </div>
              </div>
              <div className="experience-content">
                <p>Разработка онлайн-доски Microboard (аналог Miro) с поддержкой многопользовательского режима и интеграцией ИИ:</p>
                <ul>
                  <li>Реализация ключевых фич: динамические направляющие для выравнивания объектов, совместная работа в реальном времени</li>
                  <li>Интеграция ИИ-модуля: проектирование архитектуры, UI для генерации контента/изображений</li>
                  <li>Оптимизация стабильности: внедрение e2e-тестов (Playwright), устранение десинхронизации сессий</li>
                  <li>Настройка инфраструктуры: CI/CD пайплайны, Docker-контейнеризация, кастомизация Webpack</li>
                  <li>Миграция проекта в OpenSource: адаптация кодовой базы, документация, деплой</li>
                </ul>
                <div className="achievements">
                  <h4>Достижения:</h4>
                  <p>Снизил десинхронизацию данных в многопользовательском режиме на 70% через оптимизацию WebSocket-логики. 
                  Успешно внедрил ИИ-генерацию контента с поддержкой 1000+ RPS и интеграцией в canvas-движок. 
                  Обеспечил плавный переход проекта на OpenSource с полной автоматизацией CI/CD и деплоя.</p>
                </div>
                <div className="tech-stack">
                  <span>TypeScript</span>
                  <span>React</span>
                  <span>Canvas</span>
                  <span>WebSockets</span>
                  <span>Node.js</span>
                  <span>Redis</span>
                  <span>Next.js</span>
                  <span>Docker</span>
                  <span>Webpack</span>
                  <span>Playwright</span>
                  <span>CI/CD</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="skills">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Мои навыки</h2>
          <div className="skills-grid">
            <motion.div 
              className="skill-category"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Frontend</h3>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">TypeScript</span>
                <span className="skill-item">JavaScript (ES6+)</span>
                <span className="skill-item">HTML5/CSS3</span>
                <span className="skill-item">Redux</span>
                <span className="skill-item">Redux Toolkit</span>
                <span className="skill-item">MobX</span>
                <span className="skill-item">SSR</span>
                <span className="skill-item">Canvas</span>
                <span className="skill-item">WebSockets</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="skill-category"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Backend & Базы данных</h3>
              <div className="skill-items">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Express.js</span>
                <span className="skill-item">Next.js</span>
                <span className="skill-item">Nest.js</span>
                <span className="skill-item">Golang</span>
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">Redis</span>
                <span className="skill-item">MySQL</span>
                <span className="skill-item">Drizzle</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="skill-category"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>API & Интеграции</h3>
              <div className="skill-items">
                <span className="skill-item">REST API</span>
                <span className="skill-item">GraphQL</span>
                <span className="skill-item">BFF</span>
                <span className="skill-item">OAuth/JWT</span>
                <span className="skill-item">Micro Frontends</span>
                <span className="skill-item">Sequelize</span>
              </div>
            </motion.div>

            <motion.div 
              className="skill-category"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Инструменты & DevOps</h3>
              <div className="skill-items">
                <span className="skill-item">Git</span>
                <span className="skill-item">Docker</span>
                <span className="skill-item">Webpack</span>
                <span className="skill-item">CI/CD</span>
                <span className="skill-item">Jest</span>
                <span className="skill-item">Playwright</span>
                <span className="skill-item">Grafana</span>
                <span className="skill-item">PaaS</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="projects">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Мои проекты</h2>
          <div className="projects-grid">
            <motion.div 
              className="project-card"
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <Globe className="project-icon" />
              </div>
              <h3>Журнал недвижимости Яндекс</h3>
              <p>Full-stack разработка журнала недвижимости с микрофронтендами и микросервисами. Оптимизация производительности и SEO.</p>
              <div className="project-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>SSR</span>
                <span>GraphQL</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <Database className="project-icon" />
              </div>
              <h3>Microboard (аналог Miro)</h3>
              <p>Онлайн-доска с многопользовательским режимом и интеграцией ИИ. Поддержка реального времени и генерации контента.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Canvas</span>
                <span>WebSockets</span>
                <span>TypeScript</span>
                <span>AI Integration</span>
              </div>
            </motion.div>

            <motion.div 
              className="project-card"
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <Code className="project-icon" />
              </div>
              <h3>OpenSource Migration</h3>
              <p>Миграция проекта в OpenSource с полной автоматизацией CI/CD, документацией и деплоем.</p>
              <div className="project-tech">
                <span>Docker</span>
                <span>CI/CD</span>
                <span>Webpack</span>
                <span>Playwright</span>
                <span>Documentation</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="contact">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Связаться со мной</h2>
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
                  <h3>Email</h3>
                  <p>antipinivanwork@gmail.com</p>
                  <small>Предпочитаемый способ связи</small>
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
                  <h3>Телефон & Telegram</h3>
                  <p>+7 (967) 095-71-29</p>
                  <small>Telegram: @Vanishello</small>
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
                  <h3>Локация</h3>
                  <p>Москва, Россия</p>
                  <small>Готов к командировкам</small>
                </div>
              </motion.div>
            </div>

            <div className="social-links">
              <motion.a 
                href="https://github.com/antipin-ia" 
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
                href="mailto:antipinivanwork@gmail.com" 
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail />
                <span>Email</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Иван Антипин. Все права защищены.</p>
          <p>Создано с ❤️ на React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
