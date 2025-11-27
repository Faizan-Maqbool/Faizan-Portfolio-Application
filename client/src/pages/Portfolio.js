import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projectData = [
    {
      id: 1,
      title: 'CardioLink - AI Cardiac Health System',
      category: 'AI/ML Projects',
      image: '/assets/images/project-1.jpg'
    },
    {
      id: 2,
      title: 'Studify - AI Productivity App',
      category: 'Mobile Apps',
      image: '/assets/images/project-2.png'
    },
    {
      id: 3,
      title: 'Realtime Chat Application',
      category: 'Web Applications',
      image: '/assets/images/project-3.jpg'
    },
    {
      id: 4,
      title: 'YOLO-Based Car Detection System',
      category: 'AI/ML Projects',
      image: '/assets/images/project-4.png'
    },
    {
      id: 5,
      title: 'Aqueous Solubility Prediction',
      category: 'AI/ML Projects',
      image: '/assets/images/project-5.png'
    }
  ];

  const filters = ['All', 'Web Applications', 'Mobile Apps', 'AI/ML Projects'];

  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(p => 
        p.category.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <motion.article
      className="portfolio"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filters.map((filterName) => (
            <li key={filterName} className="filter-item">
              <button
                className={filter === filterName.toLowerCase() || 
                  (filterName === 'All' && filter === 'all') ? 'active' : ''}
                onClick={() => setFilter(filterName === 'All' ? 'all' : filterName.toLowerCase())}
              >
                {filterName}
              </button>
            </li>
          ))}
        </ul>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </motion.li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
};

export default Portfolio;

