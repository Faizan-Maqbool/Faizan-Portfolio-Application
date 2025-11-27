import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
  const [pdfLoaded, setPdfLoaded] = useState(false);

  useEffect(() => {
    // Load PDF.js for preview
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js';
    script.onload = () => {
      setPdfLoaded(true);
    };
    document.head.appendChild(script);
  }, []);

  const education = [
    {
      title: 'COMSATS University Islamabad',
      period: '2022 — Feb 2026 (Expected)',
      description: 'Bachelor of Science in Computer Science with concentrations in MERN Stack, Flutter, ML, AI, and Data Science. Current GPA: 3.50 /4.00. Relevant coursework includes Advanced Web Technologies, Mobile App Development, DevOps, Machine Learning, Artificial Intelligence, and Data Structures & Algorithms.'
    }
  ];

  const experience = [
    {
      title: 'Programming Tutor (Remote - Freelance)',
      period: 'June 2023 — Present',
      description: 'Tutored 30+ students remotely in programming concepts, improving average coding proficiency by 40%. Specialized in teaching JavaScript, Python, React.js, Flutter, and data structures & algorithms.'
    },
    {
      title: 'Assistant Volunteer - Industrial Liaison Cell (ILC)',
      period: 'June 2023 — 2024',
      description: 'Collaborated with industry professionals to bridge the gap between academia and industry. Assisted in organizing workshops, seminars, and networking events for students.'
    }
  ];

  const skills = [
    { name: 'JavaScript & React.js', level: 90 },
    { name: 'Flutter & Dart', level: 85 },
    { name: 'Python & Machine Learning', level: 80 },
    { name: 'Node.js & MongoDB', level: 85 },
    { name: 'Java & C++', level: 75 },
    { name: 'TensorFlow & AI', level: 70 }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/docs/Faizan-Maqbool-Resume.pdf';
    link.download = 'Faizan-Maqbool-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/assets/docs/Faizan-Maqbool-Resume.pdf', '_blank');
  };

  return (
    <motion.article
      className="resume"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <motion.li
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <motion.li
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="resume-section">
        <div className="resume-container">
          <div className="resume-actions">
            <button className="download-btn" onClick={handleDownload}>
              <ion-icon name="download-outline"></ion-icon>
              Download Resume (PDF)
            </button>
            <button className="view-btn" onClick={handleView}>
              <ion-icon name="document-outline"></ion-icon>
              Open in New Tab
            </button>
          </div>
          <div className="pdf-preview">
            <iframe
              src="/assets/docs/Faizan-Maqbool-Resume.pdf"
              title="Resume Preview"
              className="pdf-iframe"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="skills-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.level}>{skill.level}%</data>
              </div>
              <div className="skill-progress-bg">
                <motion.div
                  className="skill-progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                ></motion.div>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
};

export default Resume;

