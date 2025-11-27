import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const services = [
    {
      icon: '/assets/images/icon-design.svg',
      title: 'Full Stack Development',
      description: 'Building modern web applications using MERN stack with real-time features and secure authentication.'
    },
    {
      icon: '/assets/images/icon-app.svg',
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications using Flutter and Dart with Firebase integration.'
    },
    {
      icon: '/assets/images/icon-dev.svg',
      title: 'AI & Machine Learning',
      description: 'Developing AI solutions using TensorFlow, Keras, and OpenCV for healthcare and computer vision applications.'
    },
    {
      icon: '/assets/images/icon-photo.svg',
      title: 'Programming Tutoring',
      description: 'Remote programming tutoring with proven track record of improving student coding proficiency by 40%.'
    }
  ];

  const projects = [
    {
      name: 'CardioLink',
      subtitle: 'AI-Based Cardiac Health System',
      technologies: ['MERN', 'Flutter', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'JWT', 'Python', 'TensorFlow', 'OpenCV', '2D CNN', 'LSTMs'],
      description: 'Developed a full-stack AI-based healthcare app to predict cardiac conditions (e.g., angina, MI) using CNNs trained on ECGs, echo scans, and heartbeat audio with 92% model accuracy.',
      highlights: [
        'Integrated real-time chat (Socket.io)',
        'Secure JWT authentication',
        'AI chatbot integration',
        'Health tracker features',
        'Video consultation capabilities',
        'Supporting 500+ active users'
      ],
      icon: 'heart-outline'
    },
    {
      name: 'Studify',
      subtitle: 'AI-Powered Productivity App',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Gemini API', 'Google ML Kit'],
      description: 'Developed a mobile productivity app for students with smart AI chat, real-time generated quizzes, OCR, and voice search using ML Kit and Gemini Model.',
      highlights: [
        'Smart AI chat integration',
        'Real-time quiz generation',
        'OCR capabilities',
        'Voice search functionality',
        'Secure offline PDF generation with encryption',
        'Scaled to handle 10,000+ records via Firebase'
      ],
      icon: 'school-outline'
    },
    {
      name: 'Chatty',
      subtitle: 'Realtime Chat Application',
      technologies: ['MERN Stack', 'Socket.io', 'JWT', 'Zustand', 'TailwindCSS', 'DaisyUI'],
      description: 'Built a responsive, real-time chat app with MERN stack featuring secure login/logout (JWT) and achieving instant message delivery under 100ms using Socket.io.',
      highlights: [
        'Real-time messaging under 100ms',
        'Secure JWT authentication',
        'Global state management via Zustand',
        'Responsive design with TailwindCSS',
        '30% improved mobile retention'
      ],
      icon: 'chatbubbles-outline'
    },
    {
      name: 'RxScan',
      subtitle: 'AI-Powered Medical Scanning Platform',
      technologies: ['MERN Stack', 'AI/ML', 'OCR', 'Computer Vision'],
      description: 'Advanced AI-powered medical scanning platform designed to interpret prescriptions and medicine information automatically. Uses custom-built OCR system to convert handwritten or printed prescriptions into structured digital text.',
      highlights: [
        'Custom OCR for prescription scanning',
        'AI-based medicine imaging and identification',
        'Smart recommendation system',
        'Instant medicine information retrieval',
        'Secure, high-performance healthcare environment',
        'Built for real-world medical use cases'
      ],
      icon: 'medical-outline'
    }
  ];

  const technologies = [
    '/assets/images/React.png',
    '/assets/images/flutter.png',
    '/assets/images/firebase.png',
    '/assets/images/mongoDB.jpeg',
    '/assets/images/tensorflow.jpeg',
    '/assets/images/keras.png',
    '/assets/images/mern.jpeg'
  ];

  return (
    <motion.article 
      className="about active"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm a Computer Science student at COMSATS University Islamabad, specializing in Full Stack Development, Flutter, Machine Learning, and AI. Currently pursuing my B.S. degree with an expected graduation in February 2026, maintaining a GPA of 3.50/4.00.
        </p>
        <p>
          My passion lies in creating innovative solutions that bridge the gap between technology and real-world problems. From developing AI-powered healthcare applications to building responsive web platforms, I enjoy transforming complex challenges into user-friendly, scalable solutions. I have experience tutoring 30+ students in programming, helping improve their coding proficiency by 40%.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <motion.li
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-icon-box">
                <img src={service.icon} alt={service.title} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="projects-section">
        <h3 className="h3 projects-title">Major Projects</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="project-header">
                <div className="project-icon-box">
                  <ion-icon name={project.icon}></ion-icon>
                </div>
                <div className="project-title-wrapper">
                  <h4 className="h4 project-name">{project.name}</h4>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                <span className="tech-label">Technologies:</span>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-highlights">
                <span className="highlights-label">Key Features:</span>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="highlight-item">
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Technologies</h3>
        <ul className="clients-list has-scrollbar">
          {technologies.map((tech, index) => (
            <motion.li
              key={index}
              className="clients-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a href="#">
                <img src={tech} alt="Technology" />
              </a>
            </motion.li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
};

export default About;

